import { create } from 'zustand';
import { zustandStorage } from '@/store/mmkv-storage';
import { createJSONStorage, persist } from 'zustand/middleware';

export interface Transaction {
  id: string;
  title: string;
  amount: number;
  date: Date;
}

export interface Profile {
  country: string;
  currency: string;
  test : string;
  transactions: Array<Transaction>;
}

export interface BalanceState {
  profiles: { [key: string]: Profile };
  currentProfile: string;
  switchProfile: (country: string) => void;
  runTransaction: (transaction: Transaction) => void;
  balance: () => number;
  clearTransactions: () => void;
}

export const useBalanceStore = create<BalanceState>()(
  persist(
    (set, get) => ({
      profiles: {
        TR: { country: 'TR', currency: 'TRY', test: 'emre', transactions: [] },
        AZ: { country: 'AZ', currency: 'AZN', test: 'osman', transactions: [] },
      },
      currentProfile: 'TR', // Varsayılan profil
      switchProfile: (country: string) => {
        console.log('Switching profile to:', country);
        console.log('Current profiles:', get().profiles); // Profil bilgilerini loglar
        set({ currentProfile: country });
        console.log('Profile switched. Current profile is now:', get().currentProfile);
      },
      runTransaction: (transaction: Transaction) => {
        const { currentProfile, profiles } = get();
        const updatedProfile = {
          ...profiles[currentProfile],
          transactions: [...profiles[currentProfile].transactions, transaction],
        };
        set((state) => ({
          profiles: {
            ...state.profiles,
            [currentProfile]: updatedProfile,
          },
        }));
      },
      balance: () => {
        const { currentProfile, profiles } = get();
        const total = profiles[currentProfile].transactions.reduce(
          (acc, transaction) => acc + transaction.amount,
          0
        );
        return parseFloat(total.toFixed(2)); // Sonucu iki ondalık basamak olarak döndür
      },
      clearTransactions: () => {
        const { currentProfile, profiles } = get();
        const updatedProfile = {
          ...profiles[currentProfile],
          transactions: [],
        };
        set((state) => ({
          profiles: {
            ...state.profiles,
            [currentProfile]: updatedProfile,
          },
        }));
      },
    }),
    {
      name: 'balance',
      storage: createJSONStorage(() => zustandStorage),
    }
  )
);
