import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

const registry = {
  about: {
    id: 'about',
    name: 'README.md',
    label: 'About',
    hint: 'Profile, focus, and workflow',
    accent: 'from-cyan-400 to-blue-500',
    icon: 'about',
    component: About,
  },
  skills: {
    id: 'skills',
    name: 'skills.json',
    label: 'Skills',
    hint: 'Core stack and delivery strengths',
    accent: 'from-emerald-400 to-teal-500',
    icon: 'skills',
    component: Skills,
  },
  projects: {
    id: 'projects',
    name: 'projects.ts',
    label: 'Projects',
    hint: 'Selected builds and shipped outcomes',
    accent: 'from-amber-400 to-orange-500',
    icon: 'projects',
    component: Projects,
  },
  contact: {
    id: 'contact',
    name: 'contact.yaml',
    label: 'Contact',
    hint: 'Ways to connect and collaborate',
    accent: 'from-fuchsia-400 to-pink-500',
    icon: 'contact',
    component: Contact,
  },
};

export const TAB_ORDER = ['about', 'skills', 'projects', 'contact'];

export const getTabDefinition = (tabId) => {
  const tab = registry[tabId];
  if (!tab) {
    return null;
  }

  return {
    ...tab,
    component: <tab.component />,
  };
};

export const getAllTabs = () => TAB_ORDER.map((tabId) => getTabDefinition(tabId));
