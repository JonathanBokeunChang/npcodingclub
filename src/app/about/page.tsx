'use client';

import { motion } from 'framer-motion';
import { Target, Heart, Users, BookOpen, Clock, MapPin, ChevronDown } from 'lucide-react';

const values = [
  {
    icon: Target,
    title: 'Accessible Education',
    description: 'We believe every student should have access to quality coding education, regardless of background.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Heart,
    title: 'Passion-Driven Learning',
    description: 'Our curriculum is designed to spark curiosity and make learning to code genuinely enjoyable.',
    color: 'from-pink-500 to-red-500',
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'We foster a supportive environment where students help each other grow and succeed together.',
    color: 'from-green-500 to-emerald-500',
  },
];

const faqs = [
  {
    question: 'Who can join NP Coding Club?',
    answer: 'NP Coding Club is open to all middle and high school students interested in learning to code. No prior experience is required!',
  },
  {
    question: 'Is it really free?',
    answer: 'Yes! All of our courses and resources are 100% free. We\'re a student-run organization dedicated to making coding education accessible to everyone.',
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#10162f] mb-6 leading-tight">
              About <span className="text-gradient">NP Coding Club</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              We&apos;re a student-run organization on a mission to make coding education
              accessible, engaging, and fun for every student in New Providence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10162f] mb-8">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                NP Coding Club was founded by students who believe that learning to code
                should be accessible to everyone. Too often, quality programming education
                is hidden behind expensive bootcamps or confusing resources.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We&apos;ve created a gamified learning platform that makes coding fun and
                engaging. Our curriculum is carefully designed to take students from
                complete beginners to confident programmers.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Whether you want to build websites, explore artificial intelligence, or
                compete in programming olympiads, we have a path for you.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              <div className="bg-white rounded-2xl p-8 text-center border border-gray-200">
                <div className="text-4xl font-bold text-blue-600">120+</div>
                <div className="text-gray-600 mt-2">Interactive Lessons</div>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center border border-gray-200">
                <div className="text-4xl font-bold text-purple-600">3</div>
                <div className="text-gray-600 mt-2">Learning Paths</div>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center border border-gray-200">
                <div className="text-4xl font-bold text-[#29cc57]">100%</div>
                <div className="text-gray-600 mt-2">Free Forever</div>
              </div>
              <div className="bg-white rounded-2xl p-8 text-center border border-gray-200">
                <div className="text-4xl font-bold text-orange-500">12K+</div>
                <div className="text-gray-600 mt-2">XP to Earn</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10162f] mb-6">
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
                <div className="bg-gray-50 rounded-2xl p-8 h-full text-center border border-gray-100">
                  <div className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#10162f] mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meeting Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-[#10162f] rounded-3xl p-10 md:p-14 text-white relative overflow-hidden"
          >
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#29cc57]/20 rounded-full blur-[100px]" />

            <div className="relative grid md:grid-cols-2 gap-10 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
                  Join Our Weekly Classes
                </h2>
                <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                  We meet weekly at New Providence Memorial Library for hands-on coding sessions,
                  project work, and collaborative learning.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      <Clock className="w-5 h-5 text-[#29cc57]" />
                    </div>
                    <span className="text-lg">Weekly Classes</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[#29cc57]" />
                    </div>
                    <span className="text-lg">New Providence Memorial Library</span>
                  </div>
                </div>
                <div className="mt-8 inline-flex items-center gap-2 text-[#29cc57] font-semibold">
                  <span className="w-2 h-2 bg-[#29cc57] rounded-full animate-pulse" />
                  New schedule coming soon
                </div>
              </div>
              <div className="text-center">
                <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl px-10 py-8">
                  <BookOpen className="w-14 h-14 mx-auto mb-4 text-[#29cc57]" />
                  <div className="text-2xl font-bold mb-2">Open to All Students</div>
                  <div className="text-gray-300">No experience required</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10162f] mb-6">
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
                <details className="group bg-gray-50 rounded-2xl border border-gray-100">
                  <summary className="flex items-center justify-between cursor-pointer p-6 font-semibold text-[#10162f] text-lg">
                    {faq.question}
                    <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform" />
                  </summary>
                  <div className="px-6 pb-6 text-gray-600 leading-relaxed">
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
