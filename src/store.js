import create from "zustand";
import {devtools, persist} from "zustand/middleware"

let modalStore = (set) => ({
    showAddModal: false,
    toggleAddModal: () => set((state) => ({showAddModal: !state.showAddModal})),
    toggleSwitch: false,
    setToggleSwitch: () => set((state) => ({toggleSwitch: !state.toggleSwitch}))
})

let actionStore = (set) => ({
    actions: [],
    selectedBucket: "Ambient",
    setActions: (records) => set(() => ({actions: records})),
    setSelectedBucket: (bucket) => set(() => ({selectedBucket: bucket}))
})



modalStore = devtools(modalStore)
modalStore = persist(modalStore)

actionStore = devtools(actionStore)
actionStore = persist(actionStore)



export const useModalStore = create(modalStore)
export const useActionStore = create(actionStore)