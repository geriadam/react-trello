import React from 'react'
import { CreateGroupForm } from './CreateGroupForm'

describe('<CreateGroupForm />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CreateGroupForm />)
  })
})