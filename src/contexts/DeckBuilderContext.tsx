import { createContext, useReducer, FC, ReactNode, useContext } from 'react'
import { getData } from '../infraestructure/prede-api-client'
import { Deck } from '../models'
import deckReducers from '../reducers'

const DeckStatusContext = createContext<Deck>({
    id: 0,
    character: '',
    items: []
})

const DeckDispatchContext = createContext<React.Dispatch<any>>(() => null)

export const DeckBuilderProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const data = getData()
    const [ currentDeck, dispatch ] = useReducer(deckReducers, data.deck)

    return (
        <DeckStatusContext.Provider value={currentDeck} >
            <DeckDispatchContext.Provider value={dispatch}>
                { children }
            </DeckDispatchContext.Provider>
        </DeckStatusContext.Provider>
    )
}

export function useDeckStatusContext() {
    return useContext(DeckStatusContext);
}
  
export function useDispatchContext() {
    return useContext(DeckDispatchContext);
}