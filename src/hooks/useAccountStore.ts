import { create } from "zustand"
import { persist } from "zustand/middleware"
import { tbaType } from "./useGenrateAccounts"


interface AccountStoreType {
    tbaAddress: string[],
    addTba: (data: string) => void
}

export const useAccountStore = create<AccountStoreType>()(
    persist(
        (set, get) => ({
            tbaAddress: [],
            addTba: (data: string) => {
                const uniqueSet = new Set(get().tbaAddress)
                uniqueSet.add(data)

                set({ tbaAddress: Array.from(uniqueSet) })
            }
        }),
        {
            name: 'tba-address',
        }
    )
)

