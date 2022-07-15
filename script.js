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
    
    let pointCount = 0;
    let currentAnswer = 0;
    let questionNumber = -1;
    const questionText = document.querySelector("#questionText");
    
    const replayButton = document.createElement("div");
    replayButton.setAttribute("class","restart");
    const scoreScreen = function (){
        const sScreen = document.createElement('div');
        sScreen.setAttribute("class","scoreScreen");        
        const sScreenText = document.createElement('p');
        sScreenText.setAttribute("class","sScreenText");
        sScreenText.innerText = `Your score: ${pointCount}/${easyComputerQuestions.length}`
        document.body.append(sScreen);
        sScreen.append(sScreenText);
        sScreen.append(replayButton);
        const playAgainText = document.createElement('p');
        playAgainText.innerText = "Try Again";
        replayButton.append(playAgainText);

    }
    const rand4 = function (){
        const value = Math.floor(Math.random()*4)
        return value;
    }
    
    const optionA = document.querySelector("#A");
    const optionB = document.querySelector("#B");
    const optionC = document.querySelector("#C");
    const optionD = document.querySelector("#D");    

    const nextQuestion = function (){
        questionNumber++;
        if(questionNumber<easyComputerQuestions.length){
            questionText.innerText = easyComputerQuestions[questionNumber].question;
            const randVal = rand4();

            let questionArr = easyComputerQuestions[questionNumber].incorrect_answers;
            let answerArr =[0,1,2,3];
            let newArr =[];
            answerArr.splice(randVal,1);
            for(let i=0;i<questionArr.length;i++){
                newArr[answerArr[i]] = questionArr[i];
            }



            switch(randVal){
                case 0:
                    optionA.innerText = easyComputerQuestions[questionNumber].correct_answer;
                    optionB.innerText = newArr[1];
                    optionC.innerText =newArr[2];
                    optionD.innerText =newArr[3];
                    currentAnswer = 0;
                    break;
                case 1:
                    optionB.innerText = easyComputerQuestions[questionNumber].correct_answer;
                    optionA.innerText = newArr[0]; 
                    optionC.innerText =newArr[2];
                    optionD.innerText =newArr[3];
                    currentAnswer = 1;
                    break;
                case 2:
                    optionC.innerText = easyComputerQuestions[questionNumber].correct_answer;
                    optionB.innerText = newArr[1];
                    optionA.innerText =newArr[0]; 
                    optionD.innerText =newArr[3];
                    currentAnswer = 2;
                    break;
                case 3:
                    optionB.innerText = newArr[1];
                    optionC.innerText =newArr[2];
                    optionA.innerText =newArr[0];   
                    optionD.innerText = easyComputerQuestions[questionNumber].correct_answer;
                    currentAnswer = 3;
                    break;

            }
        }else{
            scoreScreen();
        }
        if(optionA.innerText === "undefined"){
            optionA.classList.add("invisible");
        }else{
            optionA.classList.remove("invisible");
        }
        if(optionB.innerText === "undefined"){
            optionB.classList.add("invisible");
        }else{
            optionB.classList.remove("invisible");            
        }
        if(optionC.innerText === "undefined"){
            optionC.classList.add("invisible");
        }else{
            optionC.classList.remove("invisible");            
        }
        if(optionD.innerText === "undefined"){
            optionD.classList.add("invisible");
        }else{
            optionD.classList.remove("invisible");
            
        }

    }


    nextQuestion();

    optionA.onclick = function (){
        console.log("clicka");
        if(currentAnswer === 0){
            pointCount++;
            nextQuestion();
            indicateRight();
        }else{
            nextQuestion();
            indicateWrong();
        }
    }
    optionB.onclick = function (){
        console.log("clickb");
        
        if(currentAnswer === 1){
            pointCount++;
            indicateRight();
            nextQuestion();
        }else{
            nextQuestion();
            indicateWrong();
        }
    }
    optionC.onclick = function (){
        console.log("clickc");
        
        if(currentAnswer === 2){
            pointCount++;
            nextQuestion();
            indicateRight();
        }else{
            nextQuestion();
            indicateWrong();
        }
    }
    optionD.onclick = function (){
        console.log("clickd");
        
        if(currentAnswer === 3){
            pointCount++;
            indicateRight();
            nextQuestion();
        }else{
            indicateWrong();
            nextQuestion();
        }
    }
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
    
    
    
    
    
    
    // HINTS
    // IF YOU ARE DISPLAYING ALL THE QUESTIONS AT ONCE:
    // For each question, create a container for wrapping it; then create a radio button
    // https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
    // with, as options, both the correct answer and the incorrect ones
    // (you'll probably need to google how to get the value from a radio button in JS to evaluate the final score)
    //
    // IF YOU ARE DISPLAYING ONE QUESTION AT A TIME
    // Display the first question with the text and the radio buttons
    // when the user selects an answer, pick the next question from the array and replace the old one with it
    // saving the user's choice in a variable
  };

  // How to calculate the result? You can do it in 2 ways:
  // If you are presenting all the questions together, just take all the radio buttons and check if the selected answer === correct_answer
  // If you are presenting one question at a time, just add one point or not to the user score if the selected answer === correct_answer