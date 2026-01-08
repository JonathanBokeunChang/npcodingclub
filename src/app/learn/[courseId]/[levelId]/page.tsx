'use client';

import { use, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, BookOpen, Clock, Trophy, Lightbulb, ChevronDown } from 'lucide-react';
import { getCourse, getLesson, getAllLessons } from '@/data/courses';
import { CodeEditor } from '@/components/editor/CodeEditor';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { Card } from '@/components/ui/Card';

// Sample lesson content
const lessonContent: Record<string, { content: string; code: string; expectedOutput?: string }> = {
  'welcome': {
    content: `# Welcome to Web Development!

Web development is the art of building websites and web applications. In this course, you'll learn the three core technologies that power the web:

## What You'll Learn

1. **HTML** - The structure of web pages
2. **CSS** - The styling and visual design
3. **JavaScript** - The interactivity and behavior

## Why Learn Web Development?

- Build your own websites and apps
- Express your creativity through code
- High demand skill in the job market
- Great foundation for other programming

## Let's Get Started!

Click "Complete Lesson" to move on to the next lesson.`,
    code: '',
  },
  'js-variables': {
    content: `# Variables and Data Types

Variables are containers for storing data values. In JavaScript, we use \`let\` and \`const\` to declare variables.

## Declaring Variables

\`\`\`javascript
let age = 15;        // Can be changed later
const name = "Alex"; // Cannot be changed
\`\`\`

## Data Types

JavaScript has several data types:

- **String**: Text wrapped in quotes (\`"hello"\`)
- **Number**: Integers or decimals (\`42\`, \`3.14\`)
- **Boolean**: \`true\` or \`false\`
- **Undefined**: Variable declared but not assigned
- **Null**: Intentionally empty value

## Your Task

Create a variable called \`greeting\` and set it to \`"Hello, World!"\`. Then use \`console.log()\` to print it.`,
    code: `// Create your variable here
let greeting = "";

// Print it out
console.log(greeting);`,
    expectedOutput: 'Hello, World!',
  },
  'html-elements': {
    content: `# HTML Elements and Tags

HTML uses **tags** to create elements. Most elements have an opening and closing tag.

## Basic Structure

\`\`\`html
<tagname>Content goes here</tagname>
\`\`\`

## Common Tags

- \`<h1>\` to \`<h6>\` - Headings (h1 is largest)
- \`<p>\` - Paragraphs
- \`<strong>\` - Bold text
- \`<em>\` - Italic text
- \`<br>\` - Line break (self-closing)

## Example

\`\`\`html
<h1>My Website</h1>
<p>Welcome to my <strong>awesome</strong> site!</p>
\`\`\`

## Your Task

Create an HTML structure with:
1. An h1 heading saying "Hello"
2. A paragraph with some text`,
    code: `<!-- Write your HTML here -->
<h1></h1>
<p></p>`,
  },
};

export default function LessonPage({
  params
}: {
  params: Promise<{ courseId: string; levelId: string }>
}) {
  const { courseId, levelId } = use(params);
  const course = getCourse(courseId);
  const lesson = getLesson(courseId, levelId);
  const allLessons = getAllLessons(courseId);
  const [showHint, setShowHint] = useState(false);
  const [completed, setCompleted] = useState(false);

  if (!course || !lesson) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
            Lesson Not Found
          </h1>
          <Link href={`/learn/${courseId}`} className="text-blue-600 hover:underline">
            Back to Course
          </Link>
        </div>
      </div>
    );
  }

  const currentIndex = allLessons.findIndex(l => l.id === levelId);
  const prevLesson = currentIndex > 0 ? allLessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < allLessons.length - 1 ? allLessons[currentIndex + 1] : null;

  const content = lessonContent[levelId] || {
    content: `# ${lesson.title}\n\n${lesson.description}\n\nThis lesson content is coming soon! Check back later for the full interactive lesson.`,
    code: lesson.codeTemplate || '// Your code here',
  };

  const handleSuccess = () => {
    setCompleted(true);
  };

  const typeColors = {
    reading: 'info',
    interactive: 'success',
    challenge: 'warning',
    project: 'error',
  } as const;

  return (
    <div className="min-h-screen pt-20 pb-20 bg-slate-50 dark:bg-slate-900">
      {/* Header */}
      <div className="bg-white dark:bg-slate-800 border-b border-slate-200 dark:border-slate-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Link
                href={`/learn/${courseId}`}
                className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600"
              >
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden sm:inline">{course.name}</span>
              </Link>
              <div className="h-6 w-px bg-slate-300 dark:bg-slate-600" />
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="font-bold text-slate-900 dark:text-white">
                    {lesson.title}
                  </h1>
                  <Badge variant={typeColors[lesson.type]} size="sm">
                    {lesson.type}
                  </Badge>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {lesson.estimatedMinutes} min
              </div>
              <div className="flex items-center gap-1.5 text-yellow-500 font-semibold">
                <Trophy className="w-4 h-4" />
                {lesson.xpReward} XP
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left: Lesson Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Card className="prose dark:prose-invert max-w-none">
              <div
                className="lesson-content"
                dangerouslySetInnerHTML={{
                  __html: content.content
                    .replace(/^# (.*$)/gim, '<h1 class="text-2xl font-bold mb-4">$1</h1>')
                    .replace(/^## (.*$)/gim, '<h2 class="text-xl font-bold mt-6 mb-3">$1</h2>')
                    .replace(/^### (.*$)/gim, '<h3 class="text-lg font-bold mt-4 mb-2">$1</h3>')
                    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                    .replace(/`([^`]+)`/g, '<code class="bg-slate-100 dark:bg-slate-700 px-1.5 py-0.5 rounded text-sm">$1</code>')
                    .replace(/```(\w+)?\n([\s\S]*?)```/g, '<pre class="bg-slate-900 text-slate-100 p-4 rounded-lg overflow-x-auto my-4"><code>$2</code></pre>')
                    .replace(/^- (.*$)/gim, '<li class="ml-4">$1</li>')
                    .replace(/^(\d+)\. (.*$)/gim, '<li class="ml-4"><span class="font-semibold">$1.</span> $2</li>')
                    .replace(/\n\n/g, '</p><p class="mb-4">')
                    .replace(/\n/g, '<br/>')
                }}
              />

              {/* Hint Section */}
              {lesson.hints && lesson.hints.length > 0 && (
                <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <button
                    onClick={() => setShowHint(!showHint)}
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium"
                  >
                    <Lightbulb className="w-5 h-5" />
                    {showHint ? 'Hide Hint' : 'Need a Hint?'}
                    <ChevronDown className={`w-4 h-4 transition-transform ${showHint ? 'rotate-180' : ''}`} />
                  </button>
                  {showHint && (
                    <div className="mt-3 p-4 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-blue-800 dark:text-blue-200">
                      {lesson.hints[0]}
                    </div>
                  )}
                </div>
              )}
            </Card>
          </motion.div>

          {/* Right: Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:sticky lg:top-24 lg:self-start"
          >
            {content.code ? (
              <CodeEditor
                language={lesson.language || 'javascript'}
                initialCode={content.code}
                expectedOutput={content.expectedOutput}
                onSuccess={handleSuccess}
              />
            ) : (
              <Card className="text-center py-12">
                <BookOpen className="w-12 h-12 text-slate-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-2">
                  Reading Lesson
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6">
                  This is a reading lesson. Review the content and click complete when ready.
                </p>
                <Button onClick={() => setCompleted(true)}>
                  Mark as Complete
                </Button>
              </Card>
            )}

            {/* Completion Banner */}
            {completed && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 bg-green-50 dark:bg-green-900/30 rounded-xl p-6 text-center border border-green-200 dark:border-green-800"
              >
                <div className="text-4xl mb-2">🎉</div>
                <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-1">
                  Lesson Complete!
                </h3>
                <p className="text-green-700 dark:text-green-300 mb-4">
                  You earned {lesson.xpReward} XP
                </p>
                {nextLesson && (
                  <Link href={`/learn/${courseId}/${nextLesson.id}`}>
                    <Button>
                      Next Lesson
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                )}
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-12 pt-8 border-t border-slate-200 dark:border-slate-700">
          {prevLesson ? (
            <Link
              href={`/learn/${courseId}/${prevLesson.id}`}
              className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600"
            >
              <ArrowLeft className="w-4 h-4" />
              <div className="text-left">
                <div className="text-xs text-slate-500">Previous</div>
                <div className="font-medium">{prevLesson.title}</div>
              </div>
            </Link>
          ) : (
            <div />
          )}
          {nextLesson && (
            <Link
              href={`/learn/${courseId}/${nextLesson.id}`}
              className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600"
            >
              <div className="text-right">
                <div className="text-xs text-slate-500">Next</div>
                <div className="font-medium">{nextLesson.title}</div>
              </div>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
