'use client'

import { useUIStore } from '@/store/uiStore';
import { useEditorStore } from '@/store/EditorStore';
import { VscFiles, VscAccount, VscCode, VscMail, VscGithubAlt } from 'react-icons/vsc';
import { useState, useEffect } from 'react';
import useMediaQuery from '@/app/MediaQuery';

export default function ActivityBar() {
  const { sidebarOpen, setSidebarOpen } = useUIStore();
  const { activeTab } = useEditorStore();
  const [activeSection, setActiveSection] = useState('files');
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    if (activeTab === 'skills' || activeTab === 'projects' || activeTab === 'contact') {
      setActiveSection('code');
    }
  }, [activeTab]);

  const handleSectionClick = (section) => {
    setActiveSection(section);
    setSidebarOpen(true);
  };

  const iconSize = isMobile ? 18 : 20;

  return (
    <aside className="h-screen w-12 md:w-14 bg-[#1e1e1e] border-r border-[#3c3c3c] text-gray-400 pt-2 flex flex-col items-center justify-between py-3 md:py-4 overflow-hidden shrink-0" style={{paddingTop:"5px"}}>
      <div className="flex flex-col items-center gap-3 md:gap-6">
        <button
          onClick={() => handleSectionClick('files')}
          className={`transition duration-200 w-full ${
            activeSection === 'files'
              ? 'text-white'
              : 'hover:text-white'
          }`}
          title="Explorer"
        >
          <VscFiles size={iconSize} />
        </button>

        <button
          onClick={() => handleSectionClick('code')}
          className={`transition duration-200 ${
            activeSection === 'code'
              ? 'text-white '
              : 'hover:text-white'
          }`}
          title="Components"
        >
          <VscCode size={iconSize} />
        </button>

        <button
          onClick={() => handleSectionClick('mail')}
          className={`transition duration-200  ${
            activeSection === 'mail'
              ? 'text-white '
              : 'hover:text-white'
          }`}
          title="Contact"
        >
          <VscMail size={iconSize} />
        </button>

        <button
          onClick={() => handleSectionClick('github')}
          className={`transition duration-200  ${
            activeSection === 'github'
              ? 'text-white '
              : 'hover:text-white'
          }`}
          title="GitHub"
        >
          <VscGithubAlt size={iconSize} />
        </button>
      </div>

      <div className="flex flex-col items-center gap-2"></div>
    </aside>
  );
}
