//construtor de função

//normalmente um objeto é declarado assim

// var lucas = {
//   name: 'lucas',
//   yearOfBirth: 2000,
//   job: 'programmer'
// };

// //mas se quisermos declarar varios objetos do mesmo tipo usamos um construtor "uma especie de função para criar objetos"

// var Person = function (name, yearOfBirth, job) {
//  this.name = name;
//  this.yearOfBirth = yearOfBirth;
//  this.job = job; 
// }

// var lucas = new Person('Lucas', 2000, 'programmer');
// var pedro = new Person('Pedro', 2002, 'designer');
// var paulo = new Person('Paulo', 1998, 'teacher');

// //assim pode-se criar um novo objeto apartir das especificações do de  "person"

// //Mas é se quisessimos adicionar um método ao objeto? era so declarar ele dentro de person e pronto.
// // mas nesse caso nem sempre eu gostaria de usar o metodo para todos os objetos criados por isso usa-se prototype

// Person.prototype.calculateAge = function() {
//   console.log(2019 - this.yearOfBirth);
// };

// lucas.calculateAge();
// pedro.calculateAge();
// paulo.calculateAge();

//******************************************************************************************************************** */
//Outras maneiras de criar objetos e heranças 

// var personProto = {
//   calculateAge: function() {
//     console.log(2019 - this.yearOfBirth);
//   }
// };

// var lucas = Object.create(personProto);
// lucas.name = 'Lucas';
// lucas.yearOfBirth = 2000;
// lucas.job = 'programmer';

// var pedro = Object.create(personProto, {
//   name: {value:'Pedro'},
//   yearOfBirth: {value:2001},
//   job: {value:'designer'}
// });

//******************************************************************************************************************** */
//Funções que aceitam outras funções como argumento

// var years = [2000, 1998, 1978, 1986, 1977];

// function arrayCalc(arr, fn) {
//   var res = [];
//   for(var i = 0; i < arr.length; i++){
//     res.push(fn(arr[i]));
//   }
//   return res;
// }

// function calcYears(el) {
//   return 2019 - el;
// }

// var ages = arrayCalc(years, calcYears);

// console.log(ages);

//******************************************************************************************************************** */
//Funções que retornam outras funções

// function interviewQuestion(job) {
//   switch (job) {
//     case 'programmer': return function (name) {
//       console.log(name + ' can you explain what programmer do?');
//     }
//     case 'teacher' : return function (name) {
//       console.log('What subject you teach, '+ name + '?');
//     }
//     default: return function (name) {
//       console.log('Hello ' + name + ' what do you do?');
//     }
//   }
// }

//pode-se chamar a função armazenado-a em uma variável e assim passando os parâmetros da função "interviewQuestion" e em seguida a segunda função "name"
// var programmerQuestion = interviewQuestion('programmer');
// programmerQuestion('Lucas');

// var teacherQuestion = interviewQuestion('teacher');
// teacherQuestion('Pedro');

//Ou pode-se passar tudo ao mesmo tempo (o argumento da função principal e o da de retorno) sem a necessidade de armazenar em uma variável
// interviewQuestion('programmer')('Lucas');
// interviewQuestion('teacher')('Pedro');

//******************************************************************************************************************** */
//IIFE (Expressão de funções invocadas imediatamente)
//é uma função que é invocada por ela mesma e suas variáveis só são acessadas pela própria função (assim como em qualquer outra)
//com isso conseguimos privacidade de dados ja que tudo o que estiver dentro de uma IIFE só podera ser acessado por ela

//ao invés de declarar uma função e depois chama-la -> 
// function game() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// }
// game();

//pode-se fazer assim:... e a função invoca ela mesma mantendo a privacidade das variáveis dentro da finção

// (function game() {
//   var score = Math.random() * 10;
//   console.log(score >= 5);
// })();

//tambem pode-se passar parâmetros para a IIFE

// (function game(goodLuck) {
//   var score = Math.random() * 10;
//   console.log(score >= 5 - goodLuck);
// })(3);
//expçlicação: goodLuck é o parâmetro a ser substituido na função e "3" é o valor que goodLuck vai assumir dentro da função,
// então os parâmetros são passados no final da função dentro dos parenteses.

//******************************************************************************************************************** */
//Encerramentos (closures)
//São funções que matêm o acesso às variáveis dela mesmo depois dela ter retornado

// function retirement(retirementAge){
//   var a = ' year(s) until left the retirement.';
//   //a funcão e chamada e cria a variável a

//   return function (yearOfBirth) {
//     //depois ela retorna uma outra função,
//     //porém a função que é retornada usa a variável "a" e o argumento da primeira função.
//     //e é ai que a màgica acontece a função consegue acessar as variáveis mesmo depois de ja ter retornado, isso é uma função de incerramento
//     var age = 2019 - yearOfBirth;
//     console.log(retirementAge - age + a);
//   }
// }

// function interviewQuestion(job) {
//   return function (name) {
//     switch (job) {
//       case 'programmer': console.log(name + ' can you explain what programmer do?');
//        break;
//       case 'teacher' : console.log('What subject you teach, '+ name + '?');
//        break;
//       default: console.log('Hello ' + name + ' what do you do?');
//        break
//     }
//   }
// }

// interviewQuestion('programmer')('Lucas');
// interviewQuestion('teacher')('Pedro');
// interviewQuestion('developer')('John');

//******************************************************************************************************************** */
//Bind, call and aplly 
//esses métodos nos permitem chamar uma função e definir a variável "This" manualmente

//***** CALL and APLLY *****
// var lucas = {
//   name:'lucas',
//   age: 19,
//   job: 'programmer',
//   presentation: function(style, timeOfDay){
//     switch (style) {
//       case 'formal': console.log('Good ' + timeOfDay + ' ladies and gentlemens' + ' I\'m ' + this.name + ', I\'m ' + this.job + ' and I\'m ' + this.age + ' years old.');
//         break;
//       case 'friendly': console.log('Hey what\'s up? I\'m ' + this.name + ', I\'m ' + this.job + ' and I\'m ' + this.age + ' years old. Have a nice ' + timeOfDay + '.');
//         break;
//       default: console.log('?');
//         break;
//     }
//   }
// };

// // lucas.presentation('formal','morning');
// // lucas.presentation('friendly','morning');

// var emily = {
//   name: 'Emily',
//   age: 35,
//   job: 'designer'
// };

// //com dois objetos, se quisermos usar a função de "presentation" que é do objeto lucas no objeto emily usamos "CALL"
// //Nota (se a funçaõ receber um array como argumeto usa-se "Aplly")
// lucas.presentation.call(emily, 'friendly', 'afternoon');

// //***** // ***** //

// //***** BIND *****
// //O método "Bind" copia a função de um objeto para uma variável para que possa ser criada uma fução genérica já com algun(s) parâmetros já definidos
//  var lucasFriendly = lucas.presentation.bind(lucas, 'friendly');//friendly esta sendo passado para tornar a função apenas para apresentações amigáveis
//  lucasFriendly('morning');

//  //outro exemplo
//   var emilyFormal = lucas.presentation.bind(emily, 'formal');
//   emilyFormal('night');

//******************************************************************************************************************** */
// CODE CHALLENGE 7

// (function () {
//   function Question (question, answers, correct) {
//     this.question = question;
//     this.answers = answers;
//     this.correct = correct;
//   }
  
//   Question.prototype.displayQuestion = function () {
//     console.log(this.question);
//     for (let i = 0; i < this.answers.length; i++) {
//       console.log(i + ' - ' + this.answers[i]);
//     }
//   }
  
//   Question.prototype.checkAnswer = function (ans) {
//     if (ans === this.correct) console.log('Correct answer!');
//     else console.log('Wrong answer. Try again :)');
    
//   }
  
//   var q1 = new Question('Is JavaScript the coolest programming lenguage in the world?', ['Yes', 'No'], 0);
  
//   var q2 = new Question('What\'s the name of the creator of this game?', ['Marcus', 'John', 'Lucas'], 2);
  
//   var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);
  
//   var questions = [q1, q2, q3];
//   var n = Math.floor(Math.random() * questions.length);
  
//   questions[n].displayQuestion();
  
//   var answer = parseInt(prompt('Please select the correct answer.'));
//   console.log(answer);
  
//   questions[n].checkAnswer(answer);
// })();


// CODE CHALLENGE 7 (Expert level)

(function () {
  function Question (question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }
  
  Question.prototype.displayQuestion = function () {
    console.log(this.question);
    for (let i = 0; i < this.answers.length; i++) {
      console.log(i + ' - ' + this.answers[i]);
    }
  }
  
  Question.prototype.checkAnswer = function (ans, callBack) {
    var sc;
    if (ans === this.correct){
      console.log('Correct answer!');
      sc = callBack(true);
    } 
    else {
      console.log('Wrong answer. Try again :)'); 
      sc = callBack(false);
    }
    this.displayScore(sc);
  }
  
  Question.prototype.displayScore = function (score) {
    console.log('Your current score is: ' + score);
    console.log('------------------------------------------------------------');
  }

  var q1 = new Question('Is JavaScript the coolest programming lenguage in the world?', ['Yes', 'No'], 0);
  
  var q2 = new Question('What\'s the name of the creator of this game?', ['Marcus', 'John', 'Lucas'], 2);
  
  var q3 = new Question('What does best describe coding?', ['Boring', 'Hard', 'Fun', 'Tedious'], 2);
  
  var questions = [q1, q2, q3];

  function score() {
    var sc = 0;
    return function (correct) {
      if (correct){
        sc++;
      }
      return sc;
    }
  }

  var keepScore = score();

  function nextQuestion() {
    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();
    
    var answer = prompt('Please select the correct answer.');
    console.log(answer);
    
    if (answer !== 'exit') {
      questions[n].checkAnswer(parseInt(answer), keepScore);
      nextQuestion();
    }
  }
  nextQuestion();
})();
