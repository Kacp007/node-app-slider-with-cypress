describe('Swiper Gallery Test', function () {
  it('Checks if second slide contains "United Kingdom"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
  });
});

describe('Swiper Gallery Test', function () {
  it('Checks if third slide contains "Paris"', function () {
    cy.visit('http://localhost:3000');
    cy.get('.swiper-button-next').click();
    cy.wait(2000);
    cy.get('.swiper-button-next').click({ force: true });
    cy.wait(2000);
    cy.get('.swiper-slide-active').should('contain', 'Paris');
  });
});

describe('Swiper Gallery Test', function () {
    it('Checks if user can navigate slides using buttons', function () {
        cy.visit('http://localhost:3000');
        cy.get('.swiper-button-next').click();
        cy.wait(2000);
        cy.get('.swiper-slide-active').should('contain', 'United Kingdom');
        cy.get('.swiper-button-prev').click();
        cy.wait(2000);
        cy.get('.swiper-slide-active').should('contain', 'Italy');
    })
});

describe('Swiper Gallery Test', function () {
    it('Checks if gallery is properly displayed', function () {
        cy.visit('http://localhost:3000');
        cy.get('.swiper').should('be.visible');
        cy.get('.swiper-slide').should('have.length', 3);
        cy.get('.swiper-button-prev').should('be.visible').and('not.be.disabled');
        cy.get('.swiper-button-next').should('be.visible').and('not.be.disabled');
    });
});
