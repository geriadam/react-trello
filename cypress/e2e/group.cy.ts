/// <reference types="cypress" />
describe('group', function () {
  it('should add group', function () {
    cy.visit('http://localhost:3000/v1')
    cy.get('.flex > .mb-6 > .flex > .btn > .flex').click()
    cy.get('.block > .relative > form > .relative > .px-6 > .mb-4:nth-child(1) > .bg-white').click()
    cy.get('.block > .relative > form > .relative > .px-6 > .mb-4:nth-child(1) > .bg-white').type('New Group test')
    cy.get('.block > .relative > form > .relative > .px-6 > .mb-4:nth-child(2) > .bg-white').click()
    cy.get('.block > .relative > form > .relative > .px-6 > .mb-4:nth-child(2) > .bg-white').type('description')
    cy.get('.block > .relative > form > .relative > .flex > .btn:nth-child(2)').click()
  })
})
