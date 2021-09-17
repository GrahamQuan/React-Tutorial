import { ADD, SUB, MUL, DIV } from './constants.js'

export function add(num) {
  return {
    type: ADD,
    num
  }
}

export const sub = (num) => {
  return {
    type: SUB,
    num
  }
}

export const mul = (num) => ({
  type: MUL,
  num
})

export const div = num => ({
  type: DIV,
  num
})
