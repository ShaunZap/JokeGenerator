document.addEventListener('DOMContentLoaded', function () {
    getJokes();
});



async function getJokes() {
    const currentJokeType = document.getElementById("selectType").value;
    let response, data;
    response = await fetch(`https://v2.jokeapi.dev/joke/${currentJokeType}?type=twopart`);
    data = await response.json();
    // console.log(data);
    document.getElementById("setup").innerHTML = data.setup;
    document.getElementById("punchline").innerHTML = data.delivery;
    

    const colorThemes = {
        "Dark": { backgroundColor:"#36454F", titleTextColor:"white", cautionBackgroundColor:"white",
                cautionTextColor:"#36454F", cautionBorderColor:"black", optionsBackgroundColor:"white",
                optionsTextColor:"#36454F", optionsBorderColor:"black", buttonBackgroundColor:"white",
                buttonTextColor:"#36454F", buttonBorderColor:"black", setupBackgroundColor:"white",
                setupTextColor:"#36454F", setupBorderColor:"black", punchlineBackgroundColor:"white",
                punchlineTextColor:"#36454F", punchlineBorderColor:"black"},

    "Programming": { backgroundColor:"black", titleTextColor:"lightgreen", cautionBackgroundColor:"#1B1212",
                cautionTextColor:"lightgreen", cautionBorderColor:"lightgreen", optionsBackgroundColor:"#1B1212",
                optionsTextColor:"lightgreen", optionsBorderColor:"lightgreen", buttonBackgroundColor:"#1B1212",
                buttonTextColor:"lightgreen", buttonBorderColor:"lightgreen", setupBackgroundColor:"#1B1212",
                setupTextColor:"lightgreen", setupBorderColor:"lightgreen", punchlineBackgroundColor:"#1B1212",
                punchlineTextColor:"lightgreen", punchlineBorderColor:"lightgreen"},

    "Christmas": { backgroundColor:"#E40A2D", titleTextColor:"#13cc4e", cautionBackgroundColor:"#1e7c4e",
                cautionTextColor:"white", cautionBorderColor:"black", optionsBackgroundColor:"#1e7c4e",
                optionsTextColor:"white", optionsBorderColor:"black", buttonBackgroundColor:"#1e7c4e",
                buttonTextColor:"white", buttonBorderColor:"black", setupBackgroundColor:"#1e7c4e",
                setupTextColor:"white", setupBorderColor:"black", punchlineBackgroundColor:"#1e7c4e",
                punchlineTextColor:"white", punchlineBorderColor:"black"},

    "Spooky": { backgroundColor:"indigo", titleTextColor:"orange", cautionBackgroundColor:"#301934",
                cautionTextColor:"orange", cautionBorderColor:"orange", optionsBackgroundColor:"#301934",
                optionsTextColor:"orange", optionsBorderColor:"orange", buttonBackgroundColor:"#301934",
                buttonTextColor:"orange", buttonBorderColor:"orange", setupBackgroundColor:"#301934",
                setupTextColor:"orange", setupBorderColor:"orange", punchlineBackgroundColor:"#301934",
                punchlineTextColor:"orange", punchlineBorderColor:"orange"},

    "Pun": { backgroundColor:"orange", titleTextColor:"red", cautionBackgroundColor:"orangered",
                cautionTextColor:"white", cautionBorderColor:"black", optionsBackgroundColor:"orangered",
                optionsTextColor:"white", optionsBorderColor:"black", buttonBackgroundColor:"orangered",
                buttonTextColor:"white", buttonBorderColor:"black", setupBackgroundColor:"orangered",
                setupTextColor:"white", setupBorderColor:"black", punchlineBackgroundColor:"orangered",
                punchlineTextColor:"white", punchlineBorderColor:"black"},

    "Miscellaneous": { backgroundColor:"pink", titleTextColor:"#66023c", cautionBackgroundColor:"#ec3b83",
                cautionTextColor:"white", cautionBorderColor:"black", optionsBackgroundColor:"orange",
                optionsTextColor:"white", optionsBorderColor:"black", buttonBackgroundColor:"orange",
                buttonTextColor:"white", buttonBorderColor:"black", setupBackgroundColor:"red",
                setupTextColor:"white", setupBorderColor:"black", punchlineBackgroundColor:"darkgreen",
                punchlineTextColor:"white", punchlineBorderColor:"black"},
    };

    applyTheme(colorThemes[currentJokeType]);
}

function applyTheme(theme){

    let title = document.getElementById("title");
    let caution = document.getElementById("caution");
    let options = document.getElementById("selectType");
    let jokebutton = document.getElementById("jokebutton");
    let setup = document.getElementById("setup");
    let punchline = document.getElementById("punchline");
    
    document.body.style.backgroundColor = theme.backgroundColor;
    title.style.color = theme.titleTextColor;

    //text color for all elements
    caution.style.color = theme.cautionTextColor;
    options.style.color = theme.optionsTextColor;
    jokebutton.style.color = theme.buttonTextColor;
    setup.style.color = theme.setupTextColor;
    punchline.style.color = theme.punchlineTextColor;

    //Background color for all the elements
    caution.style.backgroundColor = theme.cautionBackgroundColor;
    options.style.backgroundColor = theme.optionsBackgroundColor;
    jokebutton.style.backgroundColor = theme.buttonBackgroundColor;
    setup.style.backgroundColor = theme.setupBackgroundColor;
    punchline.style.backgroundColor = theme.punchlineBackgroundColor;

    //Border color for all the elements
    caution.style.border = `5px solid ${theme.cautionBorderColor}`;
    options.style.border = `5px solid ${theme.optionsBorderColor}`;
    jokebutton.style.border = `5px solid ${theme.buttonBorderColor}`;
    setup.style.border = `5px solid ${theme.setupBorderColor}`;
    punchline.style.border = `5px solid ${theme.punchlineBorderColor}`;
    
}
