'use client'

import UIWrapper from './ui-wrapper';
import { useComponentRouter } from '@/hooks/useComponentRouter';
import { useEditorStore } from '@/store/EditorStore';
import { useUIStore } from '@/store/uiStore';
import { useComponentStore } from '@/store/ComponentStore';
import { useEffect } from 'react';

export default function Home() {
  const { setActiveTab } = useEditorStore();
  const { components } = useComponentStore();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get('tab');
    if (tab) {
      setActiveTab(tab);
    } else {
      setActiveTab('skills');
    }
  }, [setActiveTab]);

  useEffect(() => {
    if (components.length > 0) {
      components.forEach((comp) => {
        setActiveTab(comp.id);
      });
    }
  }, [components, setActiveTab]);

  return <UIWrapper />;
}
