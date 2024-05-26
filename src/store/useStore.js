import { create } from 'zustand'

export const useStore = create((set) => ({
  valor1: 0,
  valor2: 0,
  valor3: 0,
  updateValores: (val1, val2, val3) => set({ valor1: val1, valor2: val2, valor3: val3 }),
}))
