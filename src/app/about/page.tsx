'use client';

import { motion } from 'framer-motion';
import { Target, Heart, Users, BookOpen, Clock, MapPin, ChevronDown } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const values = [
  {
    icon: Target,
    title: 'Accessible Education',
    description: 'We believe every student should have access to quality coding education, regardless of background.',
  },
  {
    icon: Heart,
    title: 'Passion-Driven Learning',
    description: 'Our curriculum is designed to spark curiosity and make learning to code genuinely enjoyable.',
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'We foster a supportive environment where students help each other grow and succeed.',
  },
];

const faqs = [
  {
    question: 'Who can join NP Coding Club?',
    answer: 'NP Coding Club is open to all middle and high school students interested in learning to code. No prior experience is required!',
  },
  {
    question: 'Is it really free?',
    answer: 'Yes! All of our courses and resources are 100% free. We\'re a student-run nonprofit organization dedicated to making coding education accessible.',
  },
  {
    question: 'What courses do you offer?',
    answer: 'We offer three main learning paths: Web Development (HTML, CSS, JavaScript), AI & Machine Learning (Python), and USACO Competitive Programming (C++).',
  },
  {
    question: 'How long does it take to complete a course?',
    answer: 'Each course is self-paced. Most students complete a full course in 2-4 months, spending a few hours per week. But you can go as fast or slow as you like!',
  },
  {
    question: 'Do I get a certificate?',
    answer: 'Yes! Upon completing a course, you\'ll receive a certificate of completion that you can share on your portfolio or college applications.',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              About <span className="gradient-text">NP Coding Club</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              We&apos;re a student-run organization on a mission to make coding education
              accessible, engaging, and fun for every student.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                NP Coding Club was founded by students who believe that learning to code
                should be accessible to everyone. Too often, quality programming education
                is hidden behind expensive bootcamps or confusing resources.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6">
                We&apos;ve created a gamified learning platform that makes coding fun and
                engaging. Our curriculum is carefully designed to take students from
                complete beginners to confident programmers.
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-300">
                Whether you want to build websites, explore artificial intelligence, or
                compete in programming olympiads, we have a path for you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="bg-blue-50 dark:bg-blue-900/30 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-blue-600 dark:text-blue-400">120+</div>
                <div className="text-slate-600 dark:text-slate-400">Interactive Lessons</div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/30 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-purple-600 dark:text-purple-400">3</div>
                <div className="text-slate-600 dark:text-slate-400">Learning Paths</div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/30 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-green-600 dark:text-green-400">100%</div>
                <div className="text-slate-600 dark:text-slate-400">Free Forever</div>
              </div>
              <div className="bg-orange-50 dark:bg-orange-900/30 rounded-2xl p-6 text-center">
                <div className="text-4xl font-bold text-orange-600 dark:text-orange-400">12k+</div>
                <div className="text-slate-600 dark:text-slate-400">XP to Earn</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Our Values
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    {value.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meeting Info */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl p-8 md:p-12 text-white"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Join Our Weekly Sessions
                </h2>
                <p className="text-blue-100 text-lg mb-6">
                  We meet every week to learn together, work on projects, and help each
                  other with coding challenges.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5" />
                    <span>Thursdays, 5:30 - 6:30 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5" />
                    <span>New Providence High School, Conti Room</span>
                  </div>
                </div>
              </div>
              <div className="text-center md:text-right">
                <div className="inline-block bg-white/20 backdrop-blur-sm rounded-2xl px-8 py-6">
                  <BookOpen className="w-12 h-12 mx-auto mb-2" />
                  <div className="text-2xl font-bold">Open to All Students</div>
                  <div className="text-blue-100">No experience required</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <details className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-slate-900 dark:text-white">
                    {faq.question}
                    <ChevronDown className="w-5 h-5 text-slate-400 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-slate-600 dark:text-slate-400">
                    {faq.answer}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
