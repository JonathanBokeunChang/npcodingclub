'use client';

import { motion } from 'framer-motion';
import { Gamepad2, Code2, Target, Gift, FolderOpen, Users } from 'lucide-react';

const features = [
  {
    icon: Gamepad2,
    title: 'Gamified Learning',
    description: 'Earn XP, unlock achievements, and level up as you master new programming skills.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Code2,
    title: 'Interactive Code Editor',
    description: 'Write and run real code right in your browser with instant feedback and guidance.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Target,
    title: 'Structured Curriculum',
    description: 'Follow carefully designed learning paths from complete beginner to advanced.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Gift,
    title: 'Completely Free',
    description: 'Every lesson, every course, completely free. No hidden fees, no subscriptions.',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: FolderOpen,
    title: 'Real Projects',
    description: 'Build portfolio-worthy projects that showcase your skills to colleges and employers.',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Users,
    title: 'Community Support',
    description: 'Learn alongside peers at weekly sessions and get help when you need it.',
    color: 'from-teal-500 to-green-500',
  },
];

export function Features() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#10162f] mb-6">
            Why Students Love Learning Here
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            We&apos;ve built the most engaging way to learn programming,
            designed specifically for middle and high school students.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-[#29cc57] hover:shadow-xl transition-all duration-300 group"
            >
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#10162f] mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
