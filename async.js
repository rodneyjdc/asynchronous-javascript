console.log("hello")

// attaches an event listener to the button
let button = document.querySelector("button");
button.addEventListener("click", callDataGetter);

// url for the API
let url = "https://cat-fact.herokuapp.com/facts/random";

function callDataGetter() {
    getData(url); // displays cat facts onto the webpage
    asyncGetData(url); // displays cat facts onto console
}

// fetch a random cat fact
// Using .then() and .catch()
function getData(url) {
    return fetch(url, {
        method: "GET",
        headers: {
            "Accept": "application/json",
        }
    })
        .then(response => response.json())
        .then(data => displayFact(data))
        .catch(error => console.log(error));
        
}

function displayFact(obj) {
    // Storing text data from obj into a variable
    let factText = obj["text"];

    // Creating html elements
    let label = document.createElement("p");
    label.textContent = "Here's a cat fact:";
    label.style.fontWeight = "bold";
    let para = document.createElement("p");
    para.textContent = factText;

    // Appending html elements
    document.body.append(label, para)

}


// Using async/await
async function asyncGetData(url) {
    try {
        const data = await fetch(url);
        const processedData = await data.json();
        console.log(processedData["text"]);
    } catch (error) {
        console.log(error)
    }
}


