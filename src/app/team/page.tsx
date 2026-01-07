'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const team = [
  {
    name: 'Jonathan Chang',
    role: 'Founder & Lead Developer',
    bio: 'Passionate about making coding accessible to all students. Building tools to help the next generation of programmers.',
    initials: 'JC',
    color: 'from-blue-500 to-purple-500',
    links: {
      github: 'https://github.com/JonathanBokeunChang',
    },
  },
  {
    name: 'Open Position',
    role: 'Web Development Instructor',
    bio: 'We\'re looking for passionate students to help teach web development. Apply to join our team!',
    initials: '?',
    color: 'from-gray-400 to-gray-500',
    isOpen: true,
  },
  {
    name: 'Open Position',
    role: 'Python/ML Instructor',
    bio: 'Help teach the next generation of AI/ML enthusiasts. Experience with Python and data science preferred.',
    initials: '?',
    color: 'from-gray-400 to-gray-500',
    isOpen: true,
  },
  {
    name: 'Open Position',
    role: 'USACO Mentor',
    bio: 'Guide students through competitive programming. USACO Bronze+ experience preferred.',
    initials: '?',
    color: 'from-gray-400 to-gray-500',
    isOpen: true,
  },
];

const advisors = [
  {
    name: 'Faculty Advisor',
    role: 'Computer Science Teacher',
    bio: 'Provides guidance and support for club activities.',
    initials: 'FA',
    color: 'from-green-500 to-emerald-500',
  },
];

export default function TeamPage() {
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
              Meet the <span className="text-gradient">Team</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              We&apos;re a group of passionate students dedicated to making coding
              education accessible and fun for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Core Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10162f] mb-4">
              Core Team
            </h2>
            <p className="text-lg text-gray-600">
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
                <div
                  className={`bg-white rounded-2xl p-8 h-full text-center border ${
                    member.isOpen
                      ? 'border-dashed border-2 border-gray-300'
                      : 'border-gray-200'
                  } hover:shadow-lg transition-shadow`}
                >
                  {/* Avatar */}
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${member.color} flex items-center justify-center mx-auto mb-6`}>
                    <span className="text-2xl font-bold text-white">{member.initials}</span>
                  </div>

                  {/* Info */}
                  <h3 className="text-xl font-bold text-[#10162f] mb-2">
                    {member.name}
                  </h3>
                  <p className="text-[#29cc57] font-medium text-sm mb-4">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
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
                          className="p-2.5 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          <Github className="w-5 h-5 text-gray-600" />
                        </a>
                      )}
                      {member.links?.linkedin && (
                        <a
                          href={member.links.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2.5 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
                        >
                          <Linkedin className="w-5 h-5 text-gray-600" />
                        </a>
                      )}
                    </div>
                  )}

                  {/* Apply Button for Open Positions */}
                  {member.isOpen && (
                    <a
                      href="mailto:contact@npcodingclub.org?subject=Team Application"
                      className="inline-flex items-center gap-2 text-[#29cc57] font-semibold hover:underline"
                    >
                      <Mail className="w-4 h-4" />
                      Apply Now
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10162f] mb-4">
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
                <div className="bg-gray-50 rounded-2xl p-8 text-center border border-gray-100 hover:shadow-lg transition-shadow">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${advisor.color} flex items-center justify-center mx-auto mb-6`}>
                    <span className="text-2xl font-bold text-white">{advisor.initials}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#10162f] mb-2">
                    {advisor.name}
                  </h3>
                  <p className="text-[#29cc57] font-medium text-sm mb-4">
                    {advisor.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {advisor.bio}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Join CTA */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#10162f] mb-6">
              Want to Join Our Team?
            </h2>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              We&apos;re always looking for passionate students to help teach, mentor,
              and grow our community.
            </p>
            <a
              href="mailto:contact@npcodingclub.org?subject=Team Application"
              className="btn-3d btn-3d-green text-lg px-10 py-4 inline-flex items-center gap-3"
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
