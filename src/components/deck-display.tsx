import { useDeckStatusContext } from "../contexts/DeckBuilderContext";
import Item from "./item";
import GideonAvatarPic from '../assets/images/Gideon.webp'

const DeckDisplay = () => {
    const { character, items, id } = useDeckStatusContext()

    const avatarStyle = {
        maxWidth: "72px"
    }

    return (
        <>
            <div className='current-deck-section'>
                <h2>Character : { character }</h2>
                <img alt="character avatar" style={avatarStyle} src={GideonAvatarPic} ></img>
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