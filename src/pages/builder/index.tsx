// import { useState } from 'react'
import { useReducer } from 'react'
import Item from '../../components/item'
import { CardItem, Deck } from '../../models'
import deckReducers, { DeckReducersActionType } from '../../reducers'

const BuilderPage = () => {
    const data = getData()

    // const [ currentDeck, setCurrentDeck ] = useState(data.decks[0])
    const [ currentDeck, dispatch ] = useReducer(deckReducers, data.decks[0])

    const addToDeck = (card: CardItem) => {
        dispatch({
            type: DeckReducersActionType.AddItem,
            payload: card
        })
    }

    return (
        <>
        <div className='builder-page-container'>
            <div className='current-deck-section'>
                <h2>Character : { currentDeck.character }</h2>
                <h3>Qty added cards : { currentDeck.items.length }</h3>
                <h4>Added Cards</h4>
                <ul>
                    { currentDeck.items.map((item, index) => (<li key={index} ><Item add={addToDeck} cardItem={item} /></li>)) }
                </ul>
            </div>
            <div className='available-items-section'>
                <ul>
                    { data.availableItems.map((item, index) => (<li key={index} ><Item add={addToDeck} cardItem={item} /></li>)) }
                </ul>
            </div>
        </div>
        </>
    )
}

const getData = (): CustomContext => {
    return {
        decks: [{
            character: 'Gideon',
            items: []
        }],
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
    decks: Deck[],
    availableItems: CardItem[]
}

export default BuilderPage