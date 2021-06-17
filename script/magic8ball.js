function ask()
{
    let question = document.getElementById("question").value;

    let randNumber = Math.floor(Math.random() * 31);

    console.log(randNumber);

    pickAnswer(randNumber, question);
}

function pickAnswer(finalNum, question)
{
    switch (finalNum)
    {
        case 0:
            document.getElementById("answer").innerHTML = "This is a sign. A bad sign.";
            break
        case 1:
            document.getElementById("answer").innerHTML = "Can you rephrase that?";
            break;
        case 2:
            document.getElementById("answer").innerHTML = "There are is more than 1";
            break
        case 3:
            document.getElementById("answer").innerHTML = "Ask three more times";
            break
        case 4:
            document.getElementById("answer").innerHTML = "Blue";
            break
        case 5:
            document.getElementById("answer").innerHTML = "Purple";
            break
        case 6:
            document.getElementById("answer").innerHTML = "Red";
            break
        case 7:
            document.getElementById("answer").innerHTML = "What is your favorite color?";
            break
        case 8:
            document.getElementById("answer").innerHTML = "Toyota";
            break
        case 9:
            document.getElementById("answer").innerHTML = "BMW";
            break
        case 10:
            document.getElementById("answer").innerHTML = "Don't Blink.";
            break
        case 11:
            document.getElementById("answer").innerHTML = "I'm behind you";
            break
        case 12:
            document.getElementById("answer").innerHTML = "Just kidding xD";
            break
        case 13:
            document.getElementById("answer").innerHTML = "It's under your keyboard";
            break
        case 14:
            document.getElementById("answer").innerHTML = "Take a deep breath";
            break
        case 15:
            document.getElementById("answer").innerHTML = "Ask again later";
            break
        case 16:
            document.getElementById("answer").innerHTML = "Yes";
            break
        case 17:
            document.getElementById("answer").innerHTML = "No";
            break
        case 18:
            document.getElementById("answer").innerHTML = "In the fridge";
            break
        case 19:
            document.getElementById("answer").innerHTML = "I am hungry";
            break
        case 20:
            document.getElementById("answer").innerHTML = "Don't google that.";
            break
        case 21:
            document.getElementById("answer").innerHTML = "You're about to drop your phone";
            break
        case 22:
            document.getElementById("answer").innerHTML = "Omg are you serious?";
            break
        case 23:
            document.getElementById("answer").innerHTML = "Leave town.";
            break
        case 24:
            document.getElementById("answer").innerHTML = "CPP is better than JS";
            break
        case 25:
            document.getElementById("answer").innerHTML = "Watch out for bears";
            break
        case 26:
            document.getElementById("answer").innerHTML = "Bigfoot is real";
            break
        case 27:
            document.getElementById("answer").innerHTML = "That is not a good friend";
            break
        case 28:
            document.getElementById("answer").innerHTML = "That is a good friend";
            break
        case 29:
            document.getElementById("answer").innerHTML = "Send it";
            break
        case 30:
            document.getElementById("answer").innerHTML = "FUCKING SEND IT!!!";
            break
        default:
            document.getElementById("error");
            break
    }
}