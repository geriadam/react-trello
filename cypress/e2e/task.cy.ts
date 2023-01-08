/// <reference types="cypress" />
describe('task', function () {
  it('should add task', function () {
    cy.visit('http://localhost:3000/v1')
    cy.get('.flex > .mx-auto > .flex:nth-child(37) > .cursor-pointer > .m-0').click()
    cy.get('.block > .relative > form > .relative > .px-6 > .mb-4:nth-child(1) > .bg-white').click()
    cy.get('.block > .relative > form > .relative > .px-6 > .mb-4:nth-child(1) > .bg-white').type('Testing task')
    cy.get('.block > .relative > form > .relative > .px-6 > .mb-4:nth-child(2) > .bg-white').click()
    cy.get('.block > .relative > form > .relative > .px-6 > .mb-4:nth-child(2) > .bg-white').type('50')
    cy.get('.block > .relative > form > .relative > .flex > .btn:nth-child(2)').click()
  })
})
