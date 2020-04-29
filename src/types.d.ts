interface Card {
  name: string
  cost: number
  effects: string[]
  type: 'BaseDrink' | 'Ingredient' | 'Event' | 'Employee' | 'BaseFood'
}

interface Deck {
  name: string
  decklist: Card[]
}

type Hand = Card[]
