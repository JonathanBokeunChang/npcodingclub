'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import { Card } from '@/components/ui/Card';

const team = [
  {
    name: 'Jonathan Chang',
    role: 'Founder & Lead Developer',
    bio: 'Passionate about making coding accessible to all students. Building tools to help the next generation of programmers.',
    avatar: '👨‍💻',
    links: {
      github: 'https://github.com/JonathanBokeunChang',
    },
  },
  {
    name: 'Open Position',
    role: 'Web Development Instructor',
    bio: 'We\'re looking for passionate students to help teach web development. Apply to join our team!',
    avatar: '🎯',
    isOpen: true,
  },
  {
    name: 'Open Position',
    role: 'Python/ML Instructor',
    bio: 'Help teach the next generation of AI/ML enthusiasts. Experience with Python and data science preferred.',
    avatar: '🎯',
    isOpen: true,
  },
  {
    name: 'Open Position',
    role: 'USACO Mentor',
    bio: 'Guide students through competitive programming. USACO Bronze+ experience preferred.',
    avatar: '🎯',
    isOpen: true,
  },
];

const advisors = [
  {
    name: 'Faculty Advisor',
    role: 'Computer Science Teacher',
    bio: 'Provides guidance and support for club activities.',
    avatar: '👩‍🏫',
  },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6">
              Meet the <span className="gradient-text">Team</span>
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              We&apos;re a group of passionate students dedicated to making coding
              education accessible and fun for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Core Team
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400">
              The students who make NP Coding Club possible
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name + member.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  hover
                  className={`h-full text-center ${
                    member.isOpen
                      ? 'border-dashed border-2 border-blue-300 dark:border-blue-700'
                      : ''
                  }`}
                >
                  {/* Avatar */}
                  <div className="text-6xl mb-4">{member.avatar}</div>

                  {/* Info */}
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-3">
                    {member.role}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
                    {member.bio}
                  </p>

                  {/* Links */}
                  {member.links && (
                    <div className="flex items-center justify-center gap-3">
                      {member.links.github && (
                        <a
                          href={member.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                        >
                          <Github className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                        </a>
                      )}
                      {member.links?.linkedin && (
                        <a
                          href={member.links.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors"
                        >
                          <Linkedin className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                        </a>
                      )}
                    </div>
                  )}

                  {/* Apply Button for Open Positions */}
                  {member.isOpen && (
                    <a
                      href="mailto:contact@npcodingclub.org?subject=Team Application"
                      className="inline-flex items-center gap-2 mt-4 text-blue-600 dark:text-blue-400 font-semibold hover:underline"
                    >
                      <Mail className="w-4 h-4" />
                      Apply Now
                    </a>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Advisors
            </h2>
          </motion.div>

          <div className="flex justify-center">
            {advisors.map((advisor, index) => (
              <motion.div
                key={advisor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="max-w-sm"
              >
                <Card hover className="text-center">
                  <div className="text-6xl mb-4">{advisor.avatar}</div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">
                    {advisor.name}
                  </h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium text-sm mb-3">
                    {advisor.role}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 text-sm">
                    {advisor.bio}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Want to Join Our Team?
            </h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              We&apos;re always looking for passionate students to help teach, mentor,
              and grow our community.
            </p>
            <a
              href="mailto:contact@npcodingclub.org?subject=Team Application"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              <Mail className="w-5 h-5" />
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
