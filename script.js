const perguntas = [
    {
      pergunta: "Quem é o autor da série 'O Senhor dos Anéis'?",
      respostas: [
        "J.R.R. Tolkien",
        "George R.R. Martin",
        "C.S. Lewis"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do vilão principal em 'O Senhor dos Anéis'?",
      respostas: [
        "Saruman",
        "Sauron",
        "Gollum"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é o nome do protagonista hobbit da história?",
      respostas: [
        "Merry",
        "Frodo",
        "Sam"
      ],
      correta: 1
    },
    {
      pergunta: "O que é 'O Um Anel'?",
      respostas: [
        "Uma espada lendária",
        "Um objeto mágico capaz de controlar os outros anéis de poder",
        "Um símbolo de amizade entre os povos livres da Terra-média"
      ],
      correta: 1
    },
    {
      pergunta: "Qual é a cidade dos elfos em 'O Senhor dos Anéis'?",
      respostas: [
        "Valfenda",
        "Rohan",
        "Gondor"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a raça de personagens que habita a Floresta das Trevas?",
      respostas: [
        "Anões",
        "Elfos",
        "Ents"
      ],
      correta: 2
    },
    {
      pergunta: "Quem é o rei de Gondor no início da história?",
      respostas: [
        "Aragorn",
        "Boromir",
        "Faramir"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do mago que ajuda Frodo em sua jornada?",
      respostas: [
        "Gandalf",
        "Radagast",
        "Saruman"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do local onde Frodo precisa destruir o Um Anel?",
      respostas: [
        "Montanha da Perdição",
        "Montanha Solitária",
        "Montanha da Perdição"
      ],
      correta: 2
    },
    {
      pergunta: "Quem é o guardião de Gollum?",
      respostas: [
        "Gandalf",
        "Bilbo",
        "Frodo"
      ],
      correta: 1
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' +  totalDePerguntas
  
  // loop ou laço de repetição
  for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
    for (let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange =(event) => {
      const estaCorreta =  event.target.value == item.correta
      corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
       mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
  
      quizItem.querySelector('dl').appendChild(dt)   
            // loop ou laço de repetição para as respostas
      }
      quizItem.querySelector('dl dt').remove() // remove a um elemento
  
     quiz.appendChild(quizItem)
    }
  
  