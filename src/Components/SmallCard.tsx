import React from 'react'
import { useDrag } from 'react-dnd'

const SmallCard = ({ card }: { card: Card }) => {
  const abbr = card.name
    .split(' ')
    .map((s) => s[0])
    .join('')

  const [{ isDragging }, drag] = useDrag({
    item: { type: 'CARD' },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  })

  const cardClass = (check: boolean): string => {
    if (check) return 'h-32 w-24 rounded-md flex flex-col items-center border border-white'
    else return 'h-32 w-24 rounded-md flex flex-col items-center border border-black'
  }

  return (
    <div className={cardClass(isDragging)} ref={drag}>
      <p className="text-xl">{abbr}</p>
      <p className="text-lg">{card.cost}</p>
    </div>
  )
}

export default SmallCard
