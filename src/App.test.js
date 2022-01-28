import React from 'react';
import { mount } from '@cypress/react';
import App from './App';

it('render the input fields', () => {
  mount(<App />);
  cy.get('h3').contains('Root Component')
})