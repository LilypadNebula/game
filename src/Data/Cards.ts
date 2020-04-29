import * as cardType from './CardTypes'

export const latte: Card = {
  name: 'Latte',
  cost: 2,
  effects: [],
  type: cardType.BaseDrink,
}

export const vanillaSyrup: Card = {
  name: 'Vanilla Syrup',
  cost: 1,
  effects: [],
  type: cardType.Ingredient,
}

export const deck: Deck = {
  name: 'Starter',
  decklist: [latte, vanillaSyrup],
}
