import create from 'zustand';
import {devtools} from 'zustand/middleware'

const useStore = create(devtools((set) => ({
  user: null,
  access: false,
  setAccess: (value)=> set((state)=>({...state, access: value})),
  setUser: (value)=> set((state)=>({...state, user: value}))
}), { name: 'Inspoit' }));

export default useStore;