import { create } from "zustand";
import { AuthType } from "../types/types";

interface AuthStore {
  authType: AuthType;
  setAuthType: (authType: AuthType) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  authType: "register", 
  setAuthType: (authType: AuthType) => set({ authType }),
}));
