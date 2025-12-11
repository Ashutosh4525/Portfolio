'use client'

import { useEditorStore } from '@/store/EditorStore';
import { useEffect } from 'react';

export const useComponentRouter = () => {
  const { setActiveTab } = useEditorStore();

  useEffect(() => {
    const handlePopState = () => {
      const params = new URLSearchParams(window.location.search);
      const tab = params.get('tab');
      if (tab) {
        setActiveTab(tab);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [setActiveTab]);

  const navigateTo = (tab) => {
    setActiveTab(tab);
    window.history.pushState({}, '', `/?tab=${tab}`);
  };

  return { navigateTo };
};
