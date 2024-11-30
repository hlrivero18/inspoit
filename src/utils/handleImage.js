export default function handleImage(set, state, url){
    set({...state, image: [...state.image, url]})
}