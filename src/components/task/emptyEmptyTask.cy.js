import React from 'react'
import { EmptyTask } from './empty'

describe('<EmptyTask />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<EmptyTask />)
  })
})