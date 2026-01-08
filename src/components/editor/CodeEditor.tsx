'use client';

import { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import { Play, RotateCcw, Check, X, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils/cn';

const Editor = dynamic(
  () => import('@monaco-editor/react').then((mod) => mod.Editor),
  {
    ssr: false,
    loading: () => (
      <div className="h-[400px] bg-slate-900 rounded-lg flex items-center justify-center">
        <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
      </div>
    ),
  }
);

interface CodeEditorProps {
  language: 'javascript' | 'python' | 'cpp' | 'html' | 'css';
  initialCode: string;
  expectedOutput?: string;
  onSuccess?: (code: string) => void;
}

const languageMap: Record<string, string> = {
  javascript: 'javascript',
  python: 'python',
  cpp: 'cpp',
  html: 'html',
  css: 'css',
};

export function CodeEditor({ language, initialCode, expectedOutput, onSuccess }: CodeEditorProps) {
  const [code, setCode] = useState(initialCode);
  const [output, setOutput] = useState('');
  const [isRunning, setIsRunning] = useState(false);
  const [testPassed, setTestPassed] = useState<boolean | null>(null);
  const editorRef = useRef<any>(null);

  const handleEditorDidMount = (editor: any, monaco: any) => {
    editorRef.current = editor;

    // Custom dark theme
    monaco.editor.defineTheme('npcc-dark', {
      base: 'vs-dark',
      inherit: true,
      rules: [],
      colors: {
        'editor.background': '#1e293b',
        'editor.foreground': '#e2e8f0',
        'editorLineNumber.foreground': '#64748b',
        'editorCursor.foreground': '#3b82f6',
        'editor.selectionBackground': '#3b82f640',
      },
    });
    monaco.editor.setTheme('npcc-dark');
  };

  const runCode = async () => {
    setIsRunning(true);
    setTestPassed(null);
    setOutput('');

    try {
      if (language === 'javascript') {
        // Capture console.log output
        const logs: string[] = [];
        const originalLog = console.log;
        console.log = (...args) => {
          logs.push(args.map(arg =>
            typeof arg === 'object' ? JSON.stringify(arg) : String(arg)
          ).join(' '));
        };

        try {
          // Create a sandboxed function
          const fn = new Function(code);
          fn();
        } catch (err: any) {
          logs.push(`Error: ${err.message}`);
        }

        console.log = originalLog;
        const result = logs.join('\n');
        setOutput(result);

        // Check against expected output if provided
        if (expectedOutput) {
          const passed = result.trim() === expectedOutput.trim();
          setTestPassed(passed);
          if (passed && onSuccess) {
            onSuccess(code);
          }
        }
      } else if (language === 'html' || language === 'css') {
        // For HTML/CSS, show a preview message
        setOutput('HTML/CSS preview would appear here.\nIn a full implementation, this would render in an iframe.');
        if (onSuccess) {
          onSuccess(code);
        }
      } else {
        // For Python/C++, show a message about backend execution
        setOutput(`${language.toUpperCase()} execution requires a backend server.\nThis feature is coming soon!`);
      }
    } catch (err: any) {
      setOutput(`Error: ${err.message}`);
      setTestPassed(false);
    }

    setIsRunning(false);
  };

  const resetCode = () => {
    setCode(initialCode);
    setOutput('');
    setTestPassed(null);
  };

  return (
    <div className="rounded-xl overflow-hidden border border-slate-700 bg-slate-800">
      {/* Toolbar */}
      <div className="flex items-center justify-between px-4 py-2 bg-slate-900 border-b border-slate-700">
        <div className="flex items-center gap-2">
          <span className="text-sm font-medium text-slate-400">
            {language.toUpperCase()}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={resetCode}
            className="text-slate-400 hover:text-white"
          >
            <RotateCcw className="w-4 h-4 mr-1" />
            Reset
          </Button>
          <Button
            size="sm"
            onClick={runCode}
            disabled={isRunning}
            className="bg-green-600 hover:bg-green-700"
          >
            {isRunning ? (
              <Loader2 className="w-4 h-4 mr-1 animate-spin" />
            ) : (
              <Play className="w-4 h-4 mr-1" />
            )}
            Run
          </Button>
        </div>
      </div>

      {/* Editor */}
      <Editor
        height="350px"
        language={languageMap[language]}
        value={code}
        onChange={(value) => setCode(value || '')}
        onMount={handleEditorDidMount}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          fontFamily: 'JetBrains Mono, monospace',
          lineNumbers: 'on',
          tabSize: 2,
          automaticLayout: true,
          padding: { top: 16 },
          scrollBeyondLastLine: false,
        }}
      />

      {/* Output Panel */}
      <div className="border-t border-slate-700">
        <div className="flex items-center justify-between px-4 py-2 bg-slate-900">
          <span className="text-sm font-medium text-slate-400">Output</span>
          {testPassed !== null && (
            <div
              className={cn(
                'flex items-center gap-1.5 text-sm font-medium',
                testPassed ? 'text-green-400' : 'text-red-400'
              )}
            >
              {testPassed ? (
                <>
                  <Check className="w-4 h-4" />
                  Test Passed!
                </>
              ) : (
                <>
                  <X className="w-4 h-4" />
                  Test Failed
                </>
              )}
            </div>
          )}
        </div>
        <pre className="p-4 bg-slate-950 text-sm text-slate-300 font-mono min-h-[100px] max-h-[200px] overflow-auto">
          {output || 'Click "Run" to see output...'}
        </pre>
      </div>
    </div>
  );
}
