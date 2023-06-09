import { useDispatchContext } from "../contexts/DeckBuilderContext"
import { CardItem } from "../models"
import { DeckReducersActionType } from "../reducers"

interface ItemProps {
    cardItem: CardItem,
    deckId?: number | null
}

const styleExample = {
    textDecoration: "underline"
}

const Item = ({ cardItem, deckId = null }: ItemProps) => {
     const deckDispatch = useDispatchContext()

     const { name, description } = cardItem
     
     return (<div className='pred-item' >
        <h3 style={styleExample} >{ name }</h3>
        <p>{ description }</p>
        { !deckId ? 
            <button onClick={() => { deckDispatch({
                type: DeckReducersActionType.AddItem,
                payload: cardItem
            }) }} >Add</button>
            : <></> }
     </div>)
}

export default Item