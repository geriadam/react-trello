import React from 'react'
import { DeleteTask } from './DeleteTask'

describe('<DeleteTask />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<DeleteTask />)
  })
})