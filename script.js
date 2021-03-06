const easyComputerQuestions = [
    {"category":"Science: Computers",
    "type":"multiple",
    "difficulty":"easy",
    "question":"What does the Prt Sc button do?",
    "correct_answer":"Captures what is on the screen and copies it to your clipboard",
    "incorrect_answers":["Nothing","Saves a .png file of what's on the screen in your screenshots folder in photos",
    "Closes all windows"]},
    {"category":"Science: Computers",
    "type":"boolean","difficulty":"easy",
    "question":"Pointers were not used in the original C programming language; they were added later on in C++.",
    "correct_answer":"False",
    "incorrect_answers":["True"]},
    {"category":"Science: Computers",
    "type":"multiple",
    "difficulty":"easy",
    "question":"The series of the Intel HD graphics generation succeeding that of the 5000 and 6000 series (Broadwell) is called:",
    "correct_answer":"HD Graphics 500",
    "incorrect_answers":["HD Graphics 700 ","HD Graphics 600","HD Graphics 7000"]},
    {"category":"Science: Computers",
    "type":"multiple",
    "difficulty":"easy",
    "question":"In web design, what does CSS stand for?",
    "correct_answer":"Cascading Style Sheet",
    "incorrect_answers":["Counter Strike: Source","Corrective Style Sheet","Computer Style Sheet"]},
    {"category":"Science: Computers",
    "type":"multiple",
    "difficulty":"easy",
    "question":"What is the domain name for the country Tuvalu?",
    "correct_answer":".tv",
    "incorrect_answers":[".tu",".tt",".tl"]},
    {"category":"Science: Computers",
    "type":"multiple",
    "difficulty":"easy",
    "question":"How many kilobytes in one gigabyte (in decimal)?",
    "correct_answer":"1000000",
    "incorrect_answers":["1024","1000","1048576"]},
    {"category":"Science: Computers",
    "type":"multiple","difficulty":"easy",
    "question":"In &quot;Hexadecimal&quot;, what color would be displayed from the color code? &quot;#00FF00&quot;?",
    "correct_answer":"Green",
    "incorrect_answers":["Red","Blue","Yellow"]},
    {"category":"Science: Computers",
    "type":"boolean","difficulty":"easy",
    "question":"The Windows 7 operating system has six main editions.",
    "correct_answer":"True",
    "incorrect_answers":["False"]},
    {"category":"Science: Computers",
    "type":"boolean",
    "difficulty":"easy",
    "question":"Linux was first created as an alternative to Windows XP.",
    "correct_answer":"False","incorrect_answers":["True"]},
    {"category":"Science: Computers","type":"boolean",
    "difficulty":"easy",
    "question":"The Python programming language gets its name from the British comedy group &quot;Monty Python.&quot;",
    "correct_answer":"True",
    "incorrect_answers":["False"]},
    //--------------
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "What does CPU stand for?",
      correct_answer: "Central Processing Unit",
      incorrect_answers: [
        "Central Process Unit",
        "Computer Personal Unit",
        "Central Processor Unit",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn&#039;t get modified?",
      correct_answer: "Final",
      incorrect_answers: ["Static", "Private", "Public"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "The logo for Snapchat is a Bell.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question:
        "Pointers were not used in the original C programming language; they were added later on in C++.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the most preferred image format used for logos in the Wikimedia database?",
      correct_answer: ".svg",
      incorrect_answers: [".png", ".jpeg", ".gif"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "In web design, what does CSS stand for?",
      correct_answer: "Cascading Style Sheet",
      incorrect_answers: [
        "Counter Strike: Source",
        "Corrective Style Sheet",
        "Computer Style Sheet",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "What is the code name for the mobile operating system Android 7.0?",
      correct_answer: "Nougat",
      incorrect_answers: [
        "Ice Cream Sandwich",
        "Jelly Bean",
        "Marshmallow",
      ],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question: "On Twitter, what is the character limit for a Tweet?",
      correct_answer: "140",
      incorrect_answers: ["120", "160", "100"],
    },
    {
      category: "Science: Computers",
      type: "boolean",
      difficulty: "easy",
      question: "Linux was first created as an alternative to Windows XP.",
      correct_answer: "False",
      incorrect_answers: ["True"],
    },
    {
      category: "Science: Computers",
      type: "multiple",
      difficulty: "easy",
      question:
        "Which programming language shares its name with an island in Indonesia?",
      correct_answer: "Java",
      incorrect_answers: ["Python", "C", "Jakarta"],
    },
  ];

  window.onload = function () {
    let questionCount = Math.floor(prompt("How many questions would you like? (max 20)"));
   
    while(questionCount<1 || questionCount>20 || !questionCount){
        questionCount = Math.floor(prompt("Please choose an integer number of questions between 1 and 20"));
        
    }    
    let pointCount = 0;
    let questionNumber = -1;
    const questionText = document.querySelector("#questionText");
    let question = easyComputerQuestions[questionNumber];
    const replayButton = document.createElement("div");
    replayButton.setAttribute("class","restart");
    
    const scoreScreen = function (){
        const sScreen = document.createElement('div');
        sScreen.setAttribute("class","scoreScreen");        
        const sScreenText = document.createElement('p');
        sScreenText.setAttribute("class","sScreenText");
        sScreenText.innerText = `Your score: ${pointCount}/${questionCount}`
        document.body.append(sScreen);
        sScreen.append(sScreenText);
        sScreen.append(replayButton);
        const playAgainText = document.createElement('p');
        playAgainText.innerText = "Try Again";
        replayButton.append(playAgainText);
    } 
    
    const answerContainer = document.querySelector(".answerContainer");
    
    const nextQuestion = function (){

    while (answerContainer.firstChild) {
        answerContainer.removeChild(answerContainer.firstChild);
    }        
        questionNumber++;
        if(questionNumber<questionCount){
            questionText.innerText = easyComputerQuestions[questionNumber].question;
            question = easyComputerQuestions[questionNumber]
      let allAnswers = []
      allAnswers.push(question.correct_answer)
      allAnswers.push(...question.incorrect_answers)

      let answersIndex = []
      for (let i = 0; i < allAnswers.length; i++) {
        answersIndex.push(i)
      }
      for (let i = 0; i < allAnswers.length; i++) {
        let randomIndex = Math.floor(Math.random() * answersIndex.length)
        let randomAnwserIndex = answersIndex.splice(randomIndex, 1)[0]
        let randomAnwser = allAnswers[randomAnwserIndex]

        const newOption = document.createElement("div");
        const newText = document.createElement("p");
        newText.innerText = randomAnwser;
        newOption.setAttribute("class","option border");
        answerContainer.append(newOption);
        newOption.append(newText);
      }           
        }else{
            scoreScreen();
        }
        const options = document.querySelectorAll(".option");
        for(let option of options){
            if(option.innerText === question.correct_answer){                
                console.log(`newcorrect`);
                option.onclick = function(){
                pointCount++;
                nextQuestion();
                indicateRight();
            }
        }else{            
            option.onclick = function(){            
            nextQuestion();
            indicateWrong();
            }            
        }
    }
    }

    nextQuestion();
    
    const restart = function (){
        window.location.reload();
    }
    replayButton.onclick = restart;

    const indicateRight = function (){
        document.body.style.backgroundColor = "green";
        setTimeout(() => { document.body.style.backgroundColor = "white"; }, 500);
    }
    const indicateWrong = function (){
        document.body.style.backgroundColor = "red";
        setTimeout(() => { document.body.style.backgroundColor = "white"; }, 500);
    }
  };

 