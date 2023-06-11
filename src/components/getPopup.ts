import { useAppDispatch, useAppSelector } from '../app/hooks'
import { changeOpen, changeContent, newPopup } from './slices/popupSlice';


const useGetPopup = () => {
    
    const popUpArr = useAppSelector((state) => state.popup.PopupArr)
    const dispatch = useAppDispatch()
    const getPopup = (word: string) => {
        let num = popUpArr.findIndex((item) => {return !item.isOpen})
        if (popUpArr.length > 5 && num === -1 ) {
          return
        }
        if (num === -1) {
          dispatch(newPopup({isOpen: true, coords: {x:50, y:50}, isDragging: false, contents: word}))
        } else {
        dispatch(changeOpen(num))
        dispatch(changeContent({contents: word, index: num}))
        }
    }
   return getPopup
  }

export {useGetPopup}