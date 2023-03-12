import { CardItem } from "../models"

interface ItemProps {
    cardItem: CardItem
    add(card: CardItem): void
}

const styleExample = {
    textDecoration: "underline"
}

const Item = (props: ItemProps) => {
     const { cardItem, add } = props
     const { name, description } = cardItem

     return (<div className='pred-item' >
        <h3 style={styleExample} >{ name }</h3>
        <p>{ description }</p>
        <button onClick={() => add(cardItem)} >Add</button>
     </div>)
}

export default Item