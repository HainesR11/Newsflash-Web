import create from "zustand";
import {devtools, persist} from "zustand/middleware"

let modalStore = (set) => ({
    showAddModal: false,
    toggleAddModal: () => set((state) => ({showAddModal: !state.showAddModal})),
    completeSwitch: false,
    setCompleteSwitch: () => set((state) => ({completeSwitch: !state.completeSwitch})),
    showTaskModal: false,
    toggleTaskModaal: () => set((state) => ({showTaskModal: !state.showTaskModal}))
})

let actionStore = (set) => ({
    actions: [],
    action: [],
    selectedBucket: "Ambient",
    buckets: [],
    setActions: (records) => set(() => ({actions: records})),
    setAction: (record) => set(() => ({action: record})),
    setSelectedBucket: (bucket) => set(() => ({selectedBucket: bucket})),
    setBuckets: (records) => set(() => ({buckets: records }))
})



modalStore = devtools(modalStore)
modalStore = persist(modalStore)

actionStore = devtools(actionStore)
actionStore = persist(actionStore)



export const useModalStore = create(modalStore)
export const useActionStore = create(actionStore)