function checkQuestion(num, question)
{
    if (num === 4)
    {
        return ++num;
    }
    if (num === 10)
    {
        let redo = Math.floor(Math.random() * 31);


        return num - Math.floor(Math.random() * 9);
    }
    if (question === "What's your favorite color?")
    {
        return 4;
    }
    else
    {
        return num;
    }
}

function ask()
{
    let question = document.getElementById("question").value;

    let randNumber = Math.floor(Math.random() * 31);
    
    randNumber = 10;

    let checkedNumber = checkQuestion(randNumber, question);
    
    console.log(checkedNumber);
    
    document.getElementById("answer").innerHTML = `${answers[checkedNumber]}`;
}

const answers = ["This is a sign. A bad sign.",
"Can you rephrase that?",
"There are is more than 1",
"Ask three more times",
"Blue",
"Purple",
"Red",
"What is your favorite color?",
"Toyota",
"BMW",
"Don't Blink.",
"I'm behind you",
"Just kidding xD",
"It's under your keyboard",
"Take a deep breath",
"Ask again later",
"Yes",
"No",
"In the fridge",
"I am hungry",
"Don't google that.",
"You're about to drop your phone",
"Omg are you serious?",
"Leave town.",
"CPP is better than JS",
"Watch out for bears",
"Bigfoot is real",
"That is not a good friend",
"That is a good friend",
"Send it",
"FUCKING SEND IT!!!",
"error"]