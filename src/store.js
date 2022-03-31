import create from "zustand";
import {devtools, persist} from "zustand/middleware"

let modalStore = (set) => ({
    showAddModal: false,
    toggleAddModal: () => set((state) => ({showAddModal: !state.showAddModal}))
})

let actionStore = (set) => ({
    actions: [],
    setActions: (records) => set(() => ({actions: records}))
})



modalStore = devtools(modalStore)
modalStore = persist(modalStore)

actionStore = devtools(actionStore)
actionStore = persist(actionStore)



export const useModalStore = create(modalStore)
export const useActionStore = create(actionStore)