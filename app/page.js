'use client'

import { useEffect } from 'react';
import UIWrapper from './ui-wrapper';
import { useEditorStore } from '@/store/EditorStore';
import { TAB_ORDER } from '@/store/tabRegistry';

export default function Home() {
  const { openTabById } = useEditorStore();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get('tab');
    const initialTab = TAB_ORDER.includes(tab) ? tab : 'about';
    openTabById(initialTab);
  }, [openTabById]);

  return <UIWrapper />;
}
