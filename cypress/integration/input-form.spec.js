describe('Input form', () => {

	beforeEach(()=>{
		cy.visit('/')
	})
	
	it('focus on opening load',()=>{
		cy.focused().should('have.class','new-todo')
	})
	
	it('accepts input',function def(){
		const typedText = 'Buy Milk'
		cy.get('.new-todo')
		   .type(typedText)
		   .should('have.value',typedText)
	})

})