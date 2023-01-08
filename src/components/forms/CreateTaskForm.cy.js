import React from 'react'
import { CreateTaskForm } from './CreateTaskForm'

describe('<CreateTaskForm />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<CreateTaskForm />)
  })
})