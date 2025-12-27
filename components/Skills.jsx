'use client'

export default function Skills() {
  const skills = {
    'Frontend Development': {
      icon: '⚛️',
      items: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript/TypeScript', 'HTML5', 'CSS3']
    },
    'Backend Development': {
      icon: '🔧',
      items: ['Node.js', 'Express.js', 'REST APIs', 'GraphQL', 'Authentication', 'Database Design']
    },
    'Databases': {
      icon: '💾',
      items: ['MongoDB', 'PostgreSQL', 'Firebase', 'MySQL', 'Redis']
    },
    'Tools & DevOps': {
      icon: '🛠️',
      items: ['Git/GitHub', 'Docker', 'VS Code', 'npm/yarn', 'Webpack', 'CI/CD']
    },
    'Other Skills': {
      icon: '⚙️',
      items: ['Responsive Design', 'Performance Optimization', 'Testing', 'SEO', 'Agile/Scrum']
    }
  };

  return (
    <div className="h-full overflow-auto text-gray-300">
      <div className="max-w-4xl mx-auto p-8 md:p-12 space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Skills & Expertise</h1>
        <p className="text-gray-400 mb-8">Technologies and tools I work with</p>

        <div className="space-y-6">
          {Object.entries(skills).map(([category, data]) => (
            <div key={category} className="group">
              <h3 className="text-lg font-semibold text-blue-400 mb-3 flex items-center gap-2">
                <span>{data.icon}</span>
                {category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 ml-2">
                {data.items.map((skill, i) => (
                  <div
                    key={i}
                    className="bg-[#252526] px-6 py-4 rounded border border-gray-600 hover:border-blue-500 hover:bg-[#2d2d2e] transition text-sm font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
