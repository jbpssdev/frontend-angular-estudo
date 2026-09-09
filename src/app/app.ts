import { Component, signal, ViewEncapsulation } from '@angular/core';

// typescript aqui!
export interface ItemCardapio {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  categoria: 'Bebida' | 'Petisco';
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
  encapsulation: ViewEncapsulation.None
})
export class App {
  nomeBar = signal('Barzinho');

  // fazer a lista aqui!
  cardapio = signal<ItemCardapio[]>([
    {
      id: 1,
      nome: 'Cerveja 1',
      descricao: 'Copo de 500ml citrico',
      preco: 10.00,
      categoria: 'Bebida'
    },
    {
      id: 2,
      nome: 'Batata Frita',
      descricao: 'Batata crocante e gostosa com alho!',
      preco: 35.00,
      categoria: 'Petisco'
    },
    {
      id: 3,
      nome: 'Hamburguer',
      descricao: 'Blend de 180g com queijo derretido!',
      preco: 28.50,
      categoria: 'Petisco'
    }
  ]);

  adicionarItem(item: ItemCardapio){
    // interpolação!
    alert(`Item adicionado: ${item.nome} (R$ ${item.preco.toFixed(2)})`);
  }

  fazerLogin() {
    alert('Clicou no botão de Login!');
  }
}