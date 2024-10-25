import create from 'zustand';
import {devtools} from 'zustand/middleware'

const useStore = create(devtools((set) => ({
  loaded: true,
  user: null,
  access: false,
  setAccess: (value)=> set((state)=>({...state, access: value})),
  setUser: (value)=> set((state)=>({...state, user: value})),
  setLoaded : (value)=>set((state)=>({...state, loaded: value}))
}), { name: 'Inspoit' }));

export default useStore;