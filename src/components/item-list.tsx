import { CardItem } from "../models"
import Item from "./item"

const ItemList = ({items}: ItemListProps) => {
    return (
        <>
            <div className='available-items-section'>
                <ul>
                    { 
                        items.map((item, index) => (
                                <li key={index} >
                                    <Item 
                                        cardItem={item} 
                                    />
                                </li>
                            )
                        ) 
                    }
                </ul>
            </div>
        </>
    )
}

interface ItemListProps {
    items: CardItem[]
}

export default ItemList