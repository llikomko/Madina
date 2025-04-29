const cards = [
    { img: "shoes.jpg", word: "shoes", audio: "shoes-audio.mp3" },
    { img: "футболка.jpeg" , word: "t-shirt", audio: "t-shirt-audio.mp3" },
    { img: "dress.jpg", word: "dress", audio: " dress-audio.mp3" },
    { img: "skirt.jpg", word: "skirt", audio: "skirt-audio.mp3" },
    { img: "jacket.jpg", word: "jacket", audio: "jacket-audio.mp3" },
    { img: "pants.jpg", word: "pants", audio: "pants-audio.mp3" },
    { img: "snickers.jpg", word: "sneakers", audio: "sneakers-audio.mp3" },
    {  img: "jeans.jpg", word: "jeans", audio: "jeans-audio.mp3" },
    { img: "shorts.jpg", word: "shorts", audio: "shorts-audio.mp3" },
    { img: "cardigan.jpg", word: "cardigan", audio: "cardigan-audio.mp3" },
    { img: "shirt.jpg", word: "shirt", audio: "shirt-audio.mp3" },
];




  let current = 0;
  const card = document.getElementById('card');
  const front = document.getElementById('front');
// сразу подгружаем первую карточку
  front.innerHTML = `<img src="${cards[0].img}">`;

  const back = document.getElementById('back');
  const number_text = document.getElementById('number_text');


  function flipCard() {
    card.classList.toggle('flipped');
  }

  function nextCard() {
    card.classList.remove('flipped');
    current = Math.min((current + 1), cards.length - 1);
  
    front.innerHTML = `<img src="${cards[current].img}">`;
    back.textContent = cards[current].word;
    number_text.innerHTML = `<div">${current+1}/${cards.length}</div>`;

  }

  function prevCard() {
    card.classList.remove('flipped');
    current = Math.max((current - 1),0);
    number_text.innerHTML = `<div">${current+1}/${cards.length}</div>`;
  
    front.innerHTML = `<img src="${cards[current].img}" alt="word image">`;
    back.textContent = cards[current].word;

  }
  
  
  const playAudioButton = document.getElementById('play-audio'); // Кнопка "Play Audio"

  // Добавляем обработчик события для кнопки
  playAudioButton.addEventListener('click', () => {
    audio.src = cards[current].audio; // Устанавливаем источник аудио текущей карточки
    audio.play(); // Воспроизводим аудио
  });



  const questions = [
    {
      sentence: "I need to ___ my T-shirt before trying on the new one.",
      options: ["to undress", "to take off", "to put on", " to dress up "],
      correct: "to take off"
    },
    {
      sentence: "She always ___ a jacket when it’s cold outside.",
      options: ["to change clothes", "to wear", "to dress up", "to take off"],
      correct: "to waer"
    },
    {
      sentence: "He loves to ___ sneakers because they are so comfortable.",
      options: ["to try on", "to dress", "to wear", "to take off"],
      correct: "to wear"
    },
    {
      sentence: "I like to ___ after a long day at work.",
      options: ["to change clothes", "to put on", "to dress up", "to wear"],
      correct: "to change clothes"
    },
    {
      sentence: "Before we go outside, please ___ your jacket.",
      options: ["to take off", "to put on", "to dress", "to try on"],
      correct: "to put on"
    },
    { sentence: "It’s time to ___ for the party.",
      options: ["to dress up", "to undress", "to wear", "to take off"],
      correct: "to dress up"
    },
    {sentence: "She is going to ___ her shoes when she enters the house",
      options: ["to take off", "to put on", "to try on ","to  dress up"],
      correct:"to take off"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  
  function showQuestion() {
    const quiz = document.getElementById('quiz');
    quiz.innerHTML = '';
  
    if (currentQuestion < questions.length) {
      const questionCard = document.createElement('div');
      questionCard.className = 'question-card';
  
      const questionText = document.createElement('div');
      questionText.className = 'question';
      questionText.innerText = questions[currentQuestion].sentence;
      questionCard.appendChild(questionText);
  
      const answersDiv = document.createElement('div');
      answersDiv.className = 'answers';
  
      questions[currentQuestion].options.forEach(option => {
        const answerButton = document.createElement('button'); 
        answerButton.innerText = option;
        answerButton.onclick = () => checkAnswer(answerButton, option);
        answersDiv.appendChild(answerButton);
      });
  
      questionCard.appendChild(answersDiv);
      quiz.appendChild(questionCard);
    } else {
      showResult();
    }
  }
  function checkAnswer(button, selected) {
    const correctAnswer = questions[currentQuestion].correct;
    const allButtons = document.querySelectorAll('.answers button');
  
    if (selected === correctAnswer) {
      score++;
    }
  
    allButtons.forEach(btn => {
      btn.disabled = true;
      if (btn.innerText === correctAnswer) {
        btn.classList.add('correct');
      } else if (btn.innerText === selected) {
        btn.classList.add('wrong');
      }
    });
  
    setTimeout(() => {
      currentQuestion++;
      showQuestion();
    }, 1000);
  }
  
  function showResult() {
    const quiz = document.getElementById('quiz');
    quiz.innerHTML = `<h2>Тест завершён!<br>Ты набрал ${score} из ${questions.length} баллов.</h2>`;
  }
  
  showQuestion();
