'use client'

export default function About() {
  return (
    <div className="p-6 md:p-8 text-gray-300 h-full overflow-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">About Me</h2>
      <p className="text-sm md:text-base leading-relaxed bg-[#252526] p-6 rounded border border-gray-700">
        I'm a full-stack developer passionate about creating beautiful and functional web applications.
        With expertise in React, Next.js, and modern web technologies, I build scalable solutions
        that provide excellent user experiences.
      </p>
    </div>
  );
}
