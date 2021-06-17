function ask()
{
    let question = document.getElementById("question").value;

    let randNumber = Math.floor(Math.random() * 31);

    
    pickAnswer(randNumber, question);
    
    randNumber = 10;
    
    document.getElementById("answer").innerHTML = `${pickAnswer(randNumber, question)}`;

    console.log(randNumber);
}

function checkQuestion(num, question)
{
    if (num === 4)
    {
        return ++num;
    }
    if (num === 10)
    {
        return checkQuestion(num - Math.floor(Math.random() * 10) + 2, question);
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

function pickAnswer(finalNum, question)
{
    console.log(finalNum);

    switch (checkQuestion(finalNum, question))
    {
        case 0:
            return "This is a sign. A bad sign.";
        case 1:
            return "Can you rephrase that?";
        case 2:
            return "There are is more than 1";
        case 3:
            return "Ask three more times";
        case 4:
            return "Blue";
        case 5:
            return "Purple";
        case 6:
            return "Red";
        case 7:
            return "What is your favorite color?";
        case 8:
            return "Toyota";
        case 9:
            return "BMW";
        case 10:
            return "Don't Blink.";
        case 11:
            return "I'm behind you";
        case 12:
            return "Just kidding xD";
        case 13:
            return "It's under your keyboard";
        case 14:
            return "Take a deep breath";
        case 15:
            return "Ask again later";
        case 16:
            return "Yes";
        case 17:
            return "No";
        case 18:
            return "In the fridge";
        case 19:
            return "I am hungry";
        case 20:
            return "Don't google that.";
        case 21:
            return "You're about to drop your phone";
        case 22:
            return "Omg are you serious?";
        case 23:
            return "Leave town.";
        case 24:
            return "CPP is better than JS";
        case 25:
            return "Watch out for bears";
        case 26:
            return "Bigfoot is real";
        case 27:
            return "That is not a good friend";
        case 28:
            return "That is a good friend";
        case 29:
            return "Send it";
        case 30:
            return "FUCKING SEND IT!!!";
        default:
            return "error";
    }
}