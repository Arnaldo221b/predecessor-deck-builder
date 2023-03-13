import { CardItem, Deck } from "../models"

export const getData = (): CustomContext => {
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