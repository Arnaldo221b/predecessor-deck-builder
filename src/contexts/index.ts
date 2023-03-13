import { createContext } from 'react'
import { Deck } from '../models'

export const DeckStatusContext = createContext<Deck>({
    id: 0,
    character: '',
    items: []
})
export const DeckDispatchContext = createContext<React.Dispatch<any>>(() => null)