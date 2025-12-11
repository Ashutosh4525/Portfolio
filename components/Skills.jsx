'use client'

export default function Skills() {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'JavaScript'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
    { category: 'Tools', items: ['Git', 'Docker', 'VS Code', 'Figma'] },
  ];

  return (
    <div className="p-6 md:p-8 text-gray-300 h-full overflow-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Skills</h2>
      <div className="space-y-8">
        {skills.map((skillGroup, idx) => (
          <div key={idx}>
            <h3 className="text-lg font-semibold text-blue-400 mb-4">{skillGroup.category}</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skillGroup.items.map((skill, i) => (
                <div key={i} className="bg-[#252526] p-4 rounded border border-gray-700 text-sm hover:bg-[#2d2d2e] transition">
                  {skill}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
