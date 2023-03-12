export interface Deck {
    character: string,
    items: CardItem[]
}

export interface CardItem {
    name: string,
    description: string
}