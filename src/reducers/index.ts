import { CardItem, Deck } from '../models'

interface DeckReducersAction {
    type: string,
    payload: CardItem
}

export enum DeckReducersActionType {
    AddItem = 'addItem'
}

const deckReducers = (deck: Deck, action: DeckReducersAction) => {
    const { type, payload } = action

    switch(type){
        case DeckReducersActionType.AddItem: {
            return { ...deck, items: [...deck.items, payload] }
        }
        default: {
            throw Error('Unknown action: ' + type);
        }
    }
} 

export default deckReducers