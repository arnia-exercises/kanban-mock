import { cards } from './services/cards'
import './assets/styles.css'
import Column from './components/column'
import Cards from './components/cards'
import { Cards as CardsType } from './types/card'
import { useEffect, useState } from 'react'

function filterByColumn(cards: CardsType, column: 'TODO'|'DOING'|'DONE'): CardsType {
  return cards.filter(card => card.column === column)
}

function App() {
  const [cards, setCards] = useState<CardsType>([])

  useEffect(() => {
    // .....
    // setCards(response.data)
  }, [])

  return (
    <div className="row">
      <Column title="NOVO" />
      <Column title="TODO">
        <Cards cards={filterByColumn(cards, 'TODO')} />
      </Column>
      <Column title="DOING">
        <Cards cards={filterByColumn(cards, 'DOING')} />
      </Column>
      <Column title="DONE">
        <Cards cards={filterByColumn(cards, 'DONE')} />
      </Column>
    </div>
  )
}

export default App
