import { create } from 'zustand';
import { getAllTabs } from '@/store/tabRegistry';

export const useComponentStore = create(() => ({
  components: getAllTabs(),
}));
