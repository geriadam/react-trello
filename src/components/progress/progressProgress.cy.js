import React from 'react'
import { Progress } from './progress'

describe('<Progress />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Progress />)
  })
})