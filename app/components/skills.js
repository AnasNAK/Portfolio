'use client';

import React from 'react';
import Image from 'next/image';
import figmaImage from '../icons/figma.png';
import cssImage from '../icons/css-3.png';
import gitImage from '../icons/git.png';
import githubImage from '../icons/github.png';
import htmlImage from '../icons/html.png';
import javaImage from '../icons/java.png';
import jsImage from '../icons/js.png';
import phpImage from '../icons/php.png';
import pythonImage from '../icons/python.png';
import nextImage from '../icons/nextJs.svg';
import laravelImage from '../icons/laravel.svg';
import tailwindImage from '../icons/tailwind.svg';

const skills = [
  { name: 'Figma', icon: figmaImage },
  { name: 'CSS', icon: cssImage },
  { name: 'Git', icon: gitImage },
  { name: 'Github', icon: githubImage },
  { name: 'HTML', icon: htmlImage },
  { name: 'Java', icon: javaImage },
  { name: 'JavaScript', icon: jsImage },
  { name: 'PHP', icon: phpImage },
  { name: 'Python', icon: pythonImage },
  { name: 'Next.js', icon: nextImage },
  { name: 'Laravel', icon: laravelImage },
  { name: 'Tailwind CSS', icon: tailwindImage },
];

export default function Skills() {
  return (
    <section className="py-24 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black/40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-[#ff99cc] text-sm font-medium mb-2 tracking-widest uppercase">
            Skills & Technologies
          </p>
          <h2 className="text-5xl font-bold bg-gradient-to-r from-[#ff99cc] via-[#ff99cc] to-white text-transparent bg-clip-text mb-6">
            My Technical Arsenal
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
            A comprehensive toolkit of technologies that power innovative and dynamic web solutions.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="group relative overflow-hidden rounded-2xl bg-gray-900/50 border border-[#ff99cc]/30 p-6 text-center transition-all duration-300 hover:scale-105 hover:bg-[#ff99cc]/20"
            >
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 flex items-center justify-center">
                  <Image
                    src={skill.icon}
                    alt={skill.name}
                    className="object-contain group-hover:scale-110 transition-transform duration-300"
                    width={64} // Define width for the Image
                    height={64} // Define height for the Image
                  />
                </div>
                <p className="text-[#ff99cc] font-medium group-hover:text-[#ff80bf] transition-colors duration-300">
                  {skill.name}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}