import { create } from "zustand"
import { persist } from "zustand/middleware"
import { tbaType } from "./useGenrateAccounts"


interface AccountStoreType {
    tbaAddress: tbaType[],
    addTba: (data: tbaType[]) => void
}

export const useAccountStore = create<AccountStoreType>()(
    persist(
        (set, get) => ({
            tbaAddress: [],
            addTba: (data: tbaType[]) => {
                const combinedArray = get().tbaAddress.concat(data)
                set({ tbaAddress: [...new Set(combinedArray)] })
            }
        }),
        {
            name: 'tba-address',
        }
    )
)

