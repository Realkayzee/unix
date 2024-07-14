import { create } from "zustand"
import { persist } from "zustand/middleware"


interface AccountStoreType {
    tbaAddress: any[],
    addTba: (data: any[]) => void
}

export const useAccountStore = create<AccountStoreType>()(
    persist(
        (set, get) => ({
            tbaAddress: [],
            addTba: (data: any[]) => {
                set({ tbaAddress: [...get().tbaAddress, ...data] })
            }
        }),
        {
            name: 'tba-address',
        }
    )
)

