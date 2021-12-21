import { render, screen } from '@testing-library/react';
import App from './App';

describe('Teste de renderização do componente App', () => {
  test('Renderização do link para Learn React', () => {
    render(<App />);
    const linkElement = screen.getByText(/Conversor de temperatura/i);
    expect(linkElement).toBeInTheDocument();
  });


});


// Teste de implementados para entender os testes jest
// describe('Teste de soma', () => {
//   function soma(a, b){
//     return a + b;
//   }
//   test('O resultado deve ser 5', () => {
//     expect(soma(2, 3)).toBe(5); //(name, fn, timeout)
//   });
// });

// describe('Teste de presença de item em array', () => {
//   const NOMES = ['Maurício', 'Maujor', 'Samy', 'Silva'];
//   test('Testa a presença do item \'Maujor\' no array NOMES', () => {
//     expect(NOMES).toContain('Maujor')
//   });
// })