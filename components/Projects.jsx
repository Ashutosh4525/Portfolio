'use client'

export default function Projects() {
  const projects = [
    {
      name: 'Project 1',
      description: 'A modern web application built with React and Next.js',
      tech: ['React', 'Next.js', 'Tailwind CSS'],
    },
    {
      name: 'Project 2',
      description: 'Full-stack application with Node.js backend',
      tech: ['Node.js', 'MongoDB', 'Express'],
    },
    {
      name: 'Project 3',
      description: 'Real-time chat application',
      tech: ['WebSocket', 'React', 'Firebase'],
    },
  ];

  return (
    <div className="p-6 md:p-8 text-gray-300 h-full overflow-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Projects</h2>
      <div className="space-y-6">
        {projects.map((project, idx) => (
          <div key={idx} className="bg-[#252526] p-6 rounded border border-gray-700 hover:border-gray-500 transition">
            <h3 className="text-lg font-semibold text-white mb-2">{project.name}</h3>
            <p className="text-sm text-gray-400 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t, i) => (
                <span key={i} className="text-xs bg-[#3c3c3c] px-3 py-1.5 rounded">
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
