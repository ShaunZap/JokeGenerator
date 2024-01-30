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


    let title = document.getElementById("title");
    let caution = document.getElementById("caution");
    let options = document.getElementById("selectType");
    let jokebutton = document.getElementById("jokebutton");
    let setup = document.getElementById("setup");
    let punchline = document.getElementById("punchline");

    //Changes colors based on the category chosen
    if(currentJokeType == "Dark"){
        document.body.style.backgroundColor = "#36454F";
        title.style.color = "white";
        caution.style.backgroundColor = "white"
        caution.style.color = "#36454F";
        caution.style.border = "5px solid black";
        options.style.color = "#36454F";
        options.style.backgroundColor = "white";
        options.style.border = "5px solid black";
        jokebutton.style.color = "#36454F";
        jokebutton.style.backgroundColor = "white";
        jokebutton.style.border = "5px solid black";
        setup.style.backgroundColor = "white";
        punchline.style.backgroundColor = "white";
        setup.style.border = "5px solid black";
        punchline.style.border = "5px solid black";
        setup.style.color = "#36454F";
        punchline.style.color = "#36454F";
    }
    else if(currentJokeType == "Christmas"){
        document.body.style.backgroundColor = "#E40A2D";
        title.style.color = "#13cc4e";
        caution.style.backgroundColor = "#1e7c4e"
        caution.style.color = "white";
        caution.style.border = "5px solid black";
        options.style.color = "white";
        options.style.backgroundColor = "#1e7c4e";
        options.style.border = "5px solid black";
        jokebutton.style.color = "white";
        jokebutton.style.backgroundColor = "#1e7c4e";
        jokebutton.style.border = "5px solid black";
        setup.style.backgroundColor = "#1e7c4e";
        punchline.style.backgroundColor = "#1e7c4e";
        setup.style.border = "5px solid black";
        punchline.style.border = "5px solid black";
        setup.style.color = "white";
        punchline.style.color = "white";
    }
    else if(currentJokeType == "Pun"){
        document.body.style.backgroundColor = "orange";
        title.style.color = "red";
        caution.style.backgroundColor = "orangered"
        caution.style.color = "white";
        caution.style.border = "5px solid black";
        options.style.color = "white";
        options.style.backgroundColor = "orangered";
        options.style.border = "5px solid black";
        jokebutton.style.color = "white";
        jokebutton.style.backgroundColor = "orangered";
        jokebutton.style.border = "5px solid black";
        setup.style.backgroundColor = "orangered";
        punchline.style.backgroundColor = "orangered";
        setup.style.border = "5px solid black";
        punchline.style.border = "5px solid black";
        setup.style.color = "white";
        punchline.style.color = "white";
    }
    else if(currentJokeType == "Spooky"){
        document.body.style.backgroundColor = "indigo";
        title.style.color = "orange";
        caution.style.backgroundColor = "#301934"
        caution.style.color = "orange";
        caution.style.border = "5px solid orange";
        options.style.color = "orange";
        options.style.backgroundColor = "#301934";
        options.style.border = "5px solid orange";
        jokebutton.style.color = "orange";
        jokebutton.style.backgroundColor = "#301934";
        jokebutton.style.border = "5px solid orange";
        setup.style.backgroundColor = "#301934";
        punchline.style.backgroundColor = "#301934";
        setup.style.border = "5px solid orange";
        punchline.style.border = "5px solid orange";
        setup.style.color = "orange";
        punchline.style.color = "orange";
    }
    else if(currentJokeType == "Miscellaneous"){
        document.body.style.backgroundColor = "pink";
        title.style.color = "#66023c";
        caution.style.backgroundColor = "#ec3b83"
        caution.style.color = "white";
        caution.style.border = "5px solid black";
        options.style.color = "white";
        options.style.backgroundColor = "orange";
        options.style.border = "5px solid black";
        jokebutton.style.color = "white";
        jokebutton.style.backgroundColor = "orange";
        jokebutton.style.border = "5px solid black";
        setup.style.backgroundColor = "red";
        punchline.style.backgroundColor = "darkgreen";
        setup.style.border = "5px solid black";
        punchline.style.border = "5px solid black";
        setup.style.color = "white";
        punchline.style.color = "white";
    }
    else{
        document.body.style.backgroundColor = "black";
        title.style.color = "lightgreen";
        caution.style.backgroundColor = "#1B1212"
        caution.style.color = "lightgreen";
        caution.style.border = "2px solid lightgreen";
        options.style.color = "lightgreen";
        options.style.backgroundColor = "#1B1212";
        options.style.border = "5px solid lightgreen";
        jokebutton.style.color = "lightgreen";
        jokebutton.style.backgroundColor = "#1B1212";
        jokebutton.style.border = "5px solid lightgreen";
        setup.style.backgroundColor = "#1B1212";
        punchline.style.backgroundColor = "#1B1212";
        setup.style.border = "5px solid lightgreen";
        punchline.style.border = "5px solid lightgreen";
        setup.style.color = "lightgreen";
        punchline.style.color = "lightgreen";
    }
}
