import { Card, Cards as CardsType } from "../types/card"

type Props = {
  cards: CardsType
}

export default function Cards ({ cards }: Props) {


  function moveTo (card: Card, direction: 'left'|'right') {
    let column = ''

    if (card.column === 'TODO') {
      column = 'DOING'
    } else if (card.column === 'DONE') {
      column = 'DOING'
    } else {
      if (direction === "left") {
        column = 'TODO'
      } else {
        column = 'DONE'
      }
    }

    console.log(card.title, 'VAI MOVER A COLUNA PARA ', column);
    
  }

  return (
    <div>
      {cards.map(card => (
        <div className="card" key={card._id}>
          {card.title} - {card.column}
          <br />
          {card.column !== 'TODO' && 
            <button onClick={() => moveTo(card, 'left')}>
              LEFT
            </button>
          }
          {card.column !== 'DONE' &&
            <button onClick={() => moveTo(card, 'right')}>
              RIGHT
            </button>
          }
        </div>
      ))}
    </div>
  )
}