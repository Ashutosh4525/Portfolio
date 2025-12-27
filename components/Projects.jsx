'use client'

export default function Projects() {
  const projects = [
    {
      name: 'VS Code Portfolio',
      description: 'A full-featured portfolio website designed to mimic VS Code interface with dynamic components and terminal.',
      tech: ['React', 'Next.js', 'Tailwind CSS', 'Zustand'],
      status: 'In Progress',
      link: '#'
    },
    {
      name: 'Real-Time Chat Application',
      description: 'Full-stack chat application with real-time messaging, user authentication, and notifications.',
      tech: ['Node.js', 'React', 'Socket.io', 'MongoDB', 'JWT'],
      status: 'Completed',
      link: '#'
    },
    {
      name: 'E-Commerce Platform',
      description: 'Complete e-commerce solution with product listings, shopping cart, payment integration, and admin dashboard.',
      tech: ['Next.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS', 'Express'],
      status: 'Completed',
      link: '#'
    },
    {
      name: 'Task Management System',
      description: 'Collaborative task management app with real-time updates, user roles, and team workspaces.',
      tech: ['React', 'Firebase', 'Tailwind CSS'],
      status: 'In Progress',
      link: '#'
    },
  ];

  return (
    <div className="h-full overflow-auto text-gray-300">
      <div className="max-w-4xl mx-auto p-8 md:p-12 space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">My Projects</h1>
        <p className="text-gray-400 mb-8">Here are some of my recent and ongoing projects</p>

        <div className="space-y-6">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="bg-[#252526] border border-gray-600 rounded-lg p-8 hover:border-blue-500 hover:shadow-lg transition group"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition">
                  {project.name}
                </h3>
                <span className={`text-xs font-semibold px-3 py-1 rounded ${
                  project.status === 'Completed' 
                    ? 'bg-green-900 text-green-300' 
                    : 'bg-yellow-900 text-yellow-300'
                }`}>
                  {project.status}
                </span>
              </div>
              
              <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs bg-blue-900 bg-opacity-30 text-blue-300 px-3 py-1 rounded border border-blue-700 hover:border-blue-500 transition"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
