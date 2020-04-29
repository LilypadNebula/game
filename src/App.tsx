import React from 'react'
import * as faker from 'faker'
import Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

import SmallCard from './Components/SmallCard'
import { deck } from './Data/Cards'

const options = { enableMouseEvents: true }

const App = () => {
  const text = faker.lorem.paragraphs(15, '\n\n')

  return (
    <DndProvider backend={Backend} options={options}>
      <main className="p-8 bg-blue-900 h-screen flex flex-col justify-center items-center">
        <div className="h-full w-full text-white mb-8 whitespace-pre-line overflow-y-auto">{text}</div>
        <div className="border border-white rounded w-full h-64">
          {deck.decklist.map((c) => (
            <SmallCard card={c} key={c.name} />
          ))}
        </div>
      </main>
    </DndProvider>
  )
}

export default App
