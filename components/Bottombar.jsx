'use client'

import { useUIStore } from '@/store/uiStore';

export default function Bottombar() {
  const { terminalOpen } = useUIStore();

  if (terminalOpen) return null;

  return (
    <div className="w-full h-8 md:h-10 bg-[#323233] border-t border-gray-700 text-gray-400 text-xs md:text-sm px-4 md:px-6 flex items-center justify-between overflow-hidden">
      <div>Ready</div>
      <div>Ln 1, Col 1</div>
    </div>
  );
}
