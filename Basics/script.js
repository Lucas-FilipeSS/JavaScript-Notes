// var age = 19;
// age >= 20 ? console.log('sim')
// :console.log('nao');

// var teste = age>15 ? 'sim':'nao';
// console.log(teste);

// var nome = 'miguel';

// switch (nome) {
//   case 'lucas':console.log('esse e o lucas');
//     break;
//   case 'joao':console.log('esse e o joao');
//     break;
//   default:console.log('nao esta aqui');
//     break;
// }

// var x = 23;
// if (x=='23')console.log('verdadeiro');//"compara valor"
// if (x==='23')onsole.log('verdadeiro');//"compara tipo"
// else console.log('falso');

/********************************************************************************************* */
//funçaõ simples igual em c

// function soma(x,y) {
//   return x+y;
// }

// var j = 10, g = 5;
// console.log(soma(j,g));

//outro tipo de declarar função
// var f = function(x, y) {
//   switch (x) {
//     case 'lucas':
//       return console.log('o lucas é', y);
//     case 'joao':
//       return console.log('o joao é', y);
//     default: 
//       return console.log('alguém é', y);
//   }
// }

// f('lucas', 'legal');
// f('joao', 'legal');
// console.log(typeof f);

/********************************************************************************************* */
//arrays

// var a = ['luis', 'ana'], i;

// for (let i = 0; i < a.length; i++) {
//   console.log(a[i]);
// }
//  var lucas = ['masculino', 'solteiro', 19,'verde'];

// console.log('sexo',lucas[0]);
// console.log('estado civil',lucas[1]);
// console.log('idade',lucas[2]);
// console.log('cor favorita',lucas[3]);
// console.log('tamanho do array',lucas.length);
// lucas.push('adiciona no fnal');
// lucas.unshift('adiciona no inicio');
// console.log(lucas[4]);
// //nso tem tamanho definido se adicionar onde nao tem ele salta 
// lucas[7] = "salta a 6 e adiciona na 7";

// console.log(lucas);
// lucas.pop();//remove do fim
// lucas.shift();//remove do inicio
// console.log(lucas);

// console.log(lucas.indexOf(19));//retorna a posição da informação
// var qSexo = lucas.indexOf('masculino') === -1 ? 'nao é um homem':'lucas é um homem';
// console.log(qSexo);

/********************************************************************************************* */ 
//OBJETOS 

// var lucas = {
//   nome: 'lucas',
//   sobrenome: 'filipe',
//   nascimento: 2000,
//   trabalho: 'programador',
//   familia: ['jose', 'kayke', 'dilcelia'],
//   casado: false
// };

// console.log(lucas);
// console.log('acessando info do objeto',lucas.nome)
// console.log(lucas['sobrenome']);
// var x = 'casado';
// console.log(lucas[x]);

// lucas.trabalho = 'designer';
// lucas['casado'] = true;
// console.log(lucas);

// var alguem = new Object();
// alguem.nome = 'fulano';
// alguem.idade = 15;
// alguem.sexo = 'feminino';
// alguem['casado'] = true;

// console.log(alguem);
/********************************************************************************************* */
//METODOS

// var lucas = {
//   nome: 'lucas',
//   sobrenome: 'filipe',
//   nascimento: 2000,
//   trabalho: 'programador',
//   familia: ['jose', 'kayke', 'dilcelia'],
//   casado: false,
//   idade: function (nascimento) {
//     return 2019 - nascimento;
//   }
// };

// console.log(lucas.idade(lucas['nascimento']));

//USABDO THIS QUE SE REFERE AO OBJETO
// var lucas = {
//   nome: 'lucas',
//   sobrenome: 'filipe',
//   nascimento: 2000,
//   trabalho: 'programador',
//   familia: ['jose', 'kayke', 'dilcelia'],
//   casado: false,
//   calculaIdade: function () {
//     this.idade = 2019 - this.nascimento;//calcula e adiciona direto ao objeto
//   }
// };
// lucas.calculaIdade();
// console.log(lucas);
 
//DESAFIO

// var john = {
//   nome: 'John',
//   massa: 80,
//   altura: 1.80,
//   calcImc: function(){
//     this.imc = this.massa / Math.pow(this.altura,2)
//   }
// };

// var mark = {
//   nome: 'Mark',
//   massa: 80,
//   altura: 1.80,
//   calcImc: function(){
//     this.imc = this.massa / Math.pow(this.altura,2)
//   }
// };

// if (john.calcImc() > mark.calcImc())console.log('O IMC do', john.nome,'é o maior');
// else if (john.calcImc() < mark.calcImc())console.log('O IMC do', mark.nome,'é o maior');
// else console.log('o IMC de',john.nome,'e',mark.nome,'são iguais');
// console.log('');
// console.log(john);
// console.log('');
// console.log(mark);
 
/********************************************************************************************* */
//LOOPS E ITERATION


// for(var i=0;i<10;i++)
// {
//   console.log(i);
// }

// var i = 10;
//  while (i--) {
//    console.log(i);
//  }

// var lucas = ['lucas','masculino','programador', 19,'verde']; 

// for(var i=0;i<lucas.length;i++)
// {
//   if(typeof lucas[i] !== 'string') continue;
//   console.log(lucas[i]);
// }

// for(var i=lucas.length-1;i>=0;i--)
// {
//   console.log(lucas[i]);
// }
/********************************************************************************************* */


