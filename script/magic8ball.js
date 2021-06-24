function ask()
{
    const question = document.getElementById("question").value;

    const randNumber = Math.floor(Math.random() * 31);

    if (!isHardCoded(question))
    {
        document.getElementById("answer").innerHTML = `${answers[randNumber]}`;
    }
    
}

function isHardCoded(question)
{
    switch (question)
    {
        case "What is your favorite color?":
            document.getElementById("answer").innerHTML = "Blue";
            return true;
        case "What is the best car brand?":
            document.getElementById("answer").innerHTML = "BMW";
            return true;
        case "What is the best truck brand?":
            document.getElementById("answer").innerHTML = "Toyota";
            return true;
        case "What is the meaning of life?":
            document.getElementById("answer").innerHTML = "42";
            return true;
        default:
            return false;
    }
}

const answers = ["This is a sign. A bad sign.",
"Can you rephrase that?",
"It is Certain.",
"Ask three more times",
"It is decidedly so.",
"Without a doubt",
"Yes. Definitely.",
"You may rely on it",
"As I see it, yes.",
"Most Likely.",
"Don't Blink.",
"Outlook good.",
"Yes",
"Signs point to yes",
"Reply hazy, try again.",
"Ask again later",
"Better not tell you now.",
"Cannot predict now",
"Concentrate and ask again.",
"Don't count on it.",
"Don't google that.",
"You're about to drop your phone",
"Omg are you serious?",
"Leave town.",
"My sources say no.",
"Outlook not so good.",
"Bigfoot is real",
"Very doubtful",
"No.",
"Send it",
"FUCKING SEND IT!!!",
"error"]