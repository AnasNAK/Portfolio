'use client'
import React, { useState } from 'react';
import { Code, GraduationCap, Award } from 'lucide-react';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');

  const tabs = {
    skills: [
      'Node.js', 'Express', 'PostgreSQL', 'Sequelize', 
      'JavaScript', 'React', 'Redux', 'HTML', 
      'CSS', 'Git'
    ],
    education: [
      {
        degree: 'Bachelor of Computer Science',
        school: 'University Name',
        year: '2018-2022'
      }
    ],
    certifications: [
      {
        name: 'Full Stack Development',
        issuer: 'Certification Provider',
        year: '2023'
      }
    ]
  };

  const tabIcons = {
    skills: <Code className="w-5 h-5" />,
    education: <GraduationCap className="w-5 h-5" />,
    certifications: <Award className="w-5 h-5" />
  };

  return (
    <section className="min-h-screen bg-black text-white py-12 px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </h2>
            
            <p className="text-gray-300 leading-relaxed">
              I am a full stack web developer with a passion for creating interactive
              and responsive web applications. I have experience working with
              JavaScript, React, Redux, Node.js, Express, PostgreSQL, and more.
              I'm always eager to learn new technologies and collaborate on exciting projects.
            </p>

            <div className="space-y-6">
              <div className="flex gap-4 border-b border-gray-800">
                {Object.keys(tabs).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-2 flex items-center gap-2 text-sm font-medium transition-all hover:text-[#e55b50] ${
                      activeTab === tab
                        ? 'text-[#ff6f61] border-b-2 border-[#ff6f61]'
                        : 'text-gray-400'
                    }`}
                  >
                    {tabIcons[tab]}
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>

              <div className="min-h-[200px]">
                {activeTab === 'skills' && (
                  <div className="grid grid-cols-2 gap-3">
                    {tabs.skills.map((skill) => (
                      <div
                        key={skill}
                        className="flex items-center text-gray-300 bg-gray-800/50 rounded-lg p-2 hover:bg-gray-800 transition-colors"
                      >
                        <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                        {skill}
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'education' && (
                  <div className="space-y-4">
                    {tabs.education.map((edu) => (
                      <div 
                        key={edu.degree}
                        className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <div className="font-medium text-blue-400">{edu.degree}</div>
                        <div className="text-sm text-gray-400">{edu.school}</div>
                        <div className="text-sm text-gray-400">{edu.year}</div>
                      </div>
                    ))}
                  </div>
                )}

                {activeTab === 'certifications' && (
                  <div className="space-y-4">
                    {tabs.certifications.map((cert) => (
                      <div 
                        key={cert.name}
                        className="bg-gray-800/50 p-4 rounded-lg hover:bg-gray-800 transition-colors"
                      >
                        <div className="font-medium text-blue-400">{cert.name}</div>
                        <div className="text-sm text-gray-400">{cert.issuer}</div>
                        <div className="text-sm text-gray-400">{cert.year}</div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-lg"></div>
              <img
                src="/api/placeholder/600/400"
                alt="Developer workspace"
                className="rounded-xl shadow-2xl hover:scale-105 transition-transform duration-300 relative"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;