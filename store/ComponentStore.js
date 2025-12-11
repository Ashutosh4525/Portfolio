import { create } from 'zustand';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';

export const useComponentStore = create((set) => ({
  components: [
    { id: 'skills', name: 'Skills', component: <Skills /> },
    { id: 'projects', name: 'Projects', component: <Projects /> },
    { id: 'contact', name: 'Contact', component: <Contact /> },
  ],
}));
