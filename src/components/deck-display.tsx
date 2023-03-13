import { Deck } from "../models"
import Item from "./item";

const DeckDisplay = ({ deck }: DeckDisplayProps) => {
    const { character, items, id } = deck

    return (
        <>
            <div className='current-deck-section'>
                <h2>Character : { character }</h2>
                <h3>Qty added cards : { items.length }</h3>
                <h4>Added Cards</h4>
                <ul>
                    { items.map((item, index) => (<li key={index} ><Item deckId={id} cardItem={item} /></li>)) }
                </ul>
            </div>
        </>
    );
}

interface DeckDisplayProps {
    deck: Deck
}

export default DeckDisplay