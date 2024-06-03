import {create} from 'zustand';

type TabStore = {
  activeTab: string;
  setActiveTab: (tabLabel: string) => void;
};

const useTabStore = create<TabStore>((set) => ({
  activeTab: 'Home',
  setActiveTab: (tabLabel) => set({ activeTab: tabLabel }),
}));

export default useTabStore;
