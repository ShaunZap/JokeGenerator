document.addEventListener('DOMContentLoaded', function () {
    getJokes();
});

async function getJokes() {
    const currentJokeType = document.getElementById("selectType").value;
    let response, data;

    if (currentJokeType === "Dark") {
        response = await fetch("https://v2.jokeapi.dev/joke/Dark?type=twopart");
    } else if (currentJokeType === "Pun") {
        response = await fetch("https://v2.jokeapi.dev/joke/Pun?type=twopart");
    } else if (currentJokeType === "Programming") {
        response = await fetch("https://v2.jokeapi.dev/joke/Programming?type=twopart");
    } else if (currentJokeType === "Spooky") {
        response = await fetch("https://v2.jokeapi.dev/joke/Spooky?type=twopart");
    } else if (currentJokeType === "Christmas") {
        response = await fetch("https://v2.jokeapi.dev/joke/Christmas?type=twopart");
    } else if (currentJokeType == "Random"){
        response = await fetch("https://v2.jokeapi.dev/joke/Miscellaneous?type=twopart");
    }
    data = await response.json();
    console.log(data);
    document.querySelector(".setup").innerHTML = data.setup;
    document.querySelector(".punchline").innerHTML = data.delivery;
}
