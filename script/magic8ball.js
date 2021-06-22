function ask()
{
    let question = document.getElementById("question").value;

    let randNumber = Math.floor(Math.random() * 31);

    if (!isHardCoded(question))
    {
        document.getElementById("answer").innerHTML = `${answers[randNumber]}`;
    }
    
}

function isHardCoded(question)
{
    if (question === "What is your favorite color?")
    {
        document.getElementById("answer").innerHTML = "Blue";
        return true;
    }
    else
    {
        return false;
    }
}