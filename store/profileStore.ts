import create from 'zustand';

const useProfileStore = create((set) => ({
  profile: 'TRY', // Varsayılan para birimi TRY
  balance: { TRY: 1000, AZN: 2000 }, // Örnek bakiye değerleri
  setProfile: (profile) => set({ profile }),
  setBalance: (currency, amount) =>
    set((state) => ({
      balance: { ...state.balance, [currency]: amount },
    })),
}));

export default useProfileStore;
