import { useReducer } from 'react'
import { CardItem, Deck } from '../../models'
import deckReducers from '../../reducers'
import { DeckStatusContext, DeckDispatchContext } from '../../contexts'
import DeckDisplay from '../../components/deck-display'
import ItemList from '../../components/item-list'

const BuilderPage = () => {
    const data = getData()

    const [ currentDeck, dispatch ] = useReducer(deckReducers, data.deck)

    return (
        <>
        <DeckStatusContext.Provider value={currentDeck} >
            <DeckDispatchContext.Provider value={dispatch} >
                <div className='builder-page-container'>
                    <DeckDisplay deck={currentDeck} />
                    <ItemList items={data.availableItems} />
                </div>
            </DeckDispatchContext.Provider>
        </DeckStatusContext.Provider>
        </>
    )
}

const getData = (): CustomContext => {
    return {
        deck: {
            id: 1,
            character: 'Gideon',
            items: []
        },
        availableItems: [
            {
                name: 'Solstone',
                description: 'Place an invisible Oracle Ward for 120s at your target location, revealing any nearby Visible and Stealthed Enemy Units - 174s (-3s per level) CD'
            },
            {
                name: 'Recyclops',
                description: 'In war with trash. Beets battlestar galactica.'
            }
        ]
    }
}

interface CustomContext {
    deck: Deck,
    availableItems: CardItem[]
}

export default BuilderPage