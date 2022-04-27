import create from "zustand";
import {devtools, persist} from "zustand/middleware"

let modalStore = (set) => ({
    // Modal Status
    showAddModal: false,
    toggleAddModal: () => set((state) => ({showAddModal: !state.showAddModal})),
    completeSwitch: false,
    setCompleteSwitch: () => set((state) => ({completeSwitch: !state.completeSwitch})),
    showTaskModal: false,
    toggleTaskModaal: () => set((state) => ({showTaskModal: !state.showTaskModal})),
    showDeleteModal: false,
    toggleDeleteModal: () => set((state) => ({showDeleteModal: !state.showDeleteModal})),
    
    // Delete Modal Params 
    id: "",
    setId: (id) => set(() => ({id: id})),
    taskId: "",
    setTaskId: (taskId) => set(()=> ({taskId: taskId})),
    taskName: "",
    setTaskName: (name) => set(() => ({taskName: name}))
})

let actionStore = (set) => ({
    actions: [],
    selectedBucket: "Ambient",
    buckets: [],
    setActions: (records) => set(() => ({actions: records})),
    setSelectedBucket: (bucket) => set(() => ({selectedBucket: bucket})),
    setBuckets: (records) => set(() => ({buckets: records }))
})



modalStore = devtools(modalStore)
modalStore = persist(modalStore)

actionStore = devtools(actionStore)
actionStore = persist(actionStore)



export const useModalStore = create(modalStore)
export const useActionStore = create(actionStore)