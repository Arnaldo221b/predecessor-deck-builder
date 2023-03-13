import { DeckBuilderProvider } from '../../contexts/DeckBuilderContext'
import DeckDisplay from '../../components/deck-display'
import ItemList from '../../components/item-list'
import { getData } from '../../infraestructure/prede-api-client'

const BuilderPage = () => {
    const { availableItems } = getData()

    return (
        <>
            <DeckBuilderProvider>
                <div className='builder-page-container'>
                    <DeckDisplay />
                    <ItemList items={availableItems} />
                </div>
            </DeckBuilderProvider>
        </>
    )
}

export default BuilderPage