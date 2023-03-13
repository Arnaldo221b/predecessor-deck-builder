import { useDeckStatusContext } from "../contexts/DeckBuilderContext";
import Item from "./item";

const DeckDisplay = () => {
    const { character, items, id } = useDeckStatusContext()

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

export default DeckDisplay