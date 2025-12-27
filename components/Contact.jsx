'use client'

export default function Contact() {
  const contactInfo = [
    { label: 'Email', value: 'ashutosh@example.com', icon: '📧', link: 'mailto:ashutosh@example.com' },
    { label: 'Phone', value: '+1 (555) 123-4567', icon: '📱', link: 'tel:+15551234567' },
    { label: 'LinkedIn', value: 'linkedin.com/in/ashutosh', icon: '💼', link: 'https://linkedin.com' },
    { label: 'GitHub', value: 'github.com/ashutosh4525', icon: '🐙', link: 'https://github.com' },
    { label: 'Twitter', value: '@ashutosh_dev', icon: '𝕏', link: 'https://twitter.com' },
  ];

  return (
    <div className="h-full overflow-auto text-gray-300">
      <div className="max-w-4xl mx-auto p-8 md:p-12 space-y-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">Get In Touch</h1>
        <p className="text-gray-400 mb-8">Feel free to reach out through any of these channels</p>

        <div className="space-y-4 max-w-lg">
          {contactInfo.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              className="flex items-start gap-4 p-6 bg-[#252526] rounded-lg border border-gray-600 hover:border-blue-500 hover:bg-[#2d2d2e] transition group"
            >
              <span className="text-2xl mt-1">{item.icon}</span>
              <div className="flex-1">
                <p className="text-sm text-gray-400 mb-1">{item.label}</p>
                <p className="font-mono text-white group-hover:text-blue-400 transition">
                  {item.value}
                </p>
              </div>
              <span className="text-gray-600 group-hover:text-blue-400 text-xl transition">→</span>
            </a>
          ))}
        </div>

        <div className="mt-12 p-6 bg-blue-900 bg-opacity-20 border border-blue-700 rounded-lg">
          <p className="text-blue-300">
            💡 <span className="font-semibold">Open to opportunities:</span> I'm actively looking for freelance projects and full-time positions.
          </p>
        </div>
      </div>
    </div>
  );
}
