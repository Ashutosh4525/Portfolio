'use client'

export default function About() {
  return (
    <div className="h-full overflow-auto text-gray-300">
      <div className="max-w-4xl mx-auto p-8 md:p-12 space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">About Me</h1>

        <div className="space-y-6">
          <div className="bg-[#252526] border border-gray-600 rounded-lg p-8">
          <h2 className="text-xl font-bold text-blue-400 mb-3">👨‍💻 Who I Am</h2>
          <p className="text-gray-300 leading-relaxed">
            I'm Ashutosh, a passionate full-stack developer with 3+ years of experience building modern web applications.
            I specialize in creating beautiful, responsive, and performant web solutions that users love.
          </p>
        </div>

        <div className="bg-[#252526] border border-gray-600 rounded-lg p-6">
          <h2 className="text-xl font-bold text-blue-400 mb-3">🎯 What I Do</h2>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span>Build full-stack web applications with React, Next.js, and Node.js</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span>Design responsive interfaces with Tailwind CSS and modern UI patterns</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span>Optimize performance and implement best practices for scalability</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 mt-1">✓</span>
              <span>Collaborate with teams using Git, Agile methodologies, and DevOps tools</span>
            </li>
          </ul>
        </div>

        <div className="bg-[#252526] border border-gray-600 rounded-lg p-8">
          <h2 className="text-xl font-bold text-blue-400 mb-3">🚀 My Journey</h2>
          <p className="text-gray-300 leading-relaxed">
            Started as a self-taught developer, I've grown into a full-stack engineer with expertise across the entire
            web development stack. I'm passionate about writing clean, maintainable code and staying updated with the latest technologies.
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}
