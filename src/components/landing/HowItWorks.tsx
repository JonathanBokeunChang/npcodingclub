'use client';

import { motion } from 'framer-motion';
import { MousePointer, BookOpen, Zap, Award } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: MousePointer,
    title: 'Choose Your Path',
    description: 'Pick from Web Development, AI/ML with Python, or USACO competitive programming.',
  },
  {
    number: '02',
    icon: BookOpen,
    title: 'Learn by Doing',
    description: 'Complete interactive lessons with our built-in code editor and instant feedback.',
  },
  {
    number: '03',
    icon: Zap,
    title: 'Earn XP & Level Up',
    description: 'Gain experience points as you progress and unlock new challenges and content.',
  },
  {
    number: '04',
    icon: Award,
    title: 'Build Real Projects',
    description: 'Apply your skills to create portfolio-worthy projects you can show off.',
  },
];

export function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10162f] mb-6">
            How It Works
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Start coding in minutes with our simple, structured learning path.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-14 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#29cc57] to-transparent" />
              )}

              <div className="text-center">
                {/* Icon container */}
                <div className="relative inline-block mb-6">
                  <div className="w-28 h-28 bg-gray-100 rounded-2xl flex items-center justify-center">
                    <step.icon className="w-12 h-12 text-[#10162f]" />
                  </div>
                  {/* Number badge */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 bg-[#29cc57] rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#10162f] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
