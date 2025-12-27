'use client'

import ActivityBar from '@/components/ActivityBar';
import Sidebar from '@/components/Sidebar';
import Editor from '@/components/Editor';
import Terminal from '@/components/Terminal';
import Titlebar from '@/components/Titlebar';
import Bottombar from '@/components/Bottombar';

export default function UIWrapper() {
  return (
    <div className="w-screen h-screen overflow-hidden flex flex-col bg-black">
      <Titlebar />

      <div className="flex flex-1 overflow-hidden bg-[#1e1e1e]" style={{padding:'10px'}}>
        <ActivityBar />
        <Sidebar />
        <Editor />
      </div>

      <Terminal />
      <Bottombar />
    </div>
  );
}
