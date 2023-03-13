export interface Deck {
    id: number,
    character: string,
    items: CardItem[]
}

export interface CardItem {
    name: string,
    description: string
}