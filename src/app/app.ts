import { Component, signal, ViewEncapsulation } from '@angular/core';

//Aqui é a tipagem! Criamos um contrato rígido usando TypeScript. O uso do Union type ('' | '') impede em tempo de compilação que qualquer categoria inválida seja atribuída aos itens.
export interface ItemCardapio {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  categoria: 'Bebida' | 'Petisco';
}

@Component({
  selector: 'app-root',

  //Aqui, estamos informando ao Angular que a classe App controla uma interface visual. Configuramos ele como standalone: true
  standalone: true,
  
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',

  //Desativando isolamento: Por padrão, o Angular blinda as regras do componente para não afetarem o restante da página. Ao desligar essa barreira, permitimos que as regras escritas no componente afetem diretamente a casca externa (html e body). No caso o ViewEncapsulation.None
  encapsulation: ViewEncapsulation.None
})

//Cria um sinal reativo contendo uma string simples (Estado reativo com Signals)
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