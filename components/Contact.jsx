'use client'

import { useEditorStore } from '@/store/EditorStore';
import { useUIStore } from '@/store/uiStore';

export default function Contact() {
  return (
    <div className="p-6 md:p-8 text-gray-300 h-full overflow-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Contact</h2>
      <div className="space-y-6 text-sm md:text-base">
        <div className="bg-[#252526] p-4 rounded border border-gray-700">
          <p className="text-gray-400 mb-1">Email</p>
          <p className="text-blue-400 font-mono">ashutosh@example.com</p>
        </div>
        <div className="bg-[#252526] p-4 rounded border border-gray-700">
          <p className="text-gray-400 mb-1">LinkedIn</p>
          <p className="text-blue-400 font-mono">linkedin.com/in/ashutosh</p>
        </div>
        <div className="bg-[#252526] p-4 rounded border border-gray-700">
          <p className="text-gray-400 mb-1">GitHub</p>
          <p className="text-blue-400 font-mono">github.com/ashutosh4525</p>
        </div>
      </div>
    </div>
  );
}
