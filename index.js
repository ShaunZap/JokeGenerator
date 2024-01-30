document.addEventListener('DOMContentLoaded', function () {
    getJokes();
});

async function getJokes() {
    const currentJokeType = document.getElementById("selectType").value;
    let response, data;
    response = await fetch(`https://v2.jokeapi.dev/joke/${currentJokeType}?type=twopart`);

    data = await response.json();
    // console.log(data);
    document.querySelector(".setup").innerHTML = data.setup;
    document.querySelector(".punchline").innerHTML = data.delivery;
}
