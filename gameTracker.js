
const games = [
    "GOW:RAGNAROK",
    "Black Myth Wukong",
    "Spider-Man 2",
    "Resident Evil 4",
    "Assasins Creed: Shadows",
    "Sifu",
    "Hogwarts Legacy",
    "Star Wars Jedi: Survivor",
    "Poppy Playtime",
    "Street Fighter 6",
    "Poppy Playtime 4"
];
// This function will select a game from the games array and assign to one of the players
function randomGame(){
    let randomIndex = Math.floor(Math.random() * games.length);
    let game = games[randomIndex];
    return game;

     
   }



let nameMap= new Map([
    ["Matt", []],
    ["Foggy", []],
    ["Heather", []]
]);



console.log(nameMap.get("Matt",storeGame("Matt",randomGame()))); // This will output the game list for Matt
console.log(nameMap.get("Foggy",storeGame("Foggy",randomGame()))); // This will output the game list for Foggy
console.log(nameMap.get("Heather",storeGame("Heather",randomGame()))); // This will output the game list for Heather


// This function will store the game in the players game list if they don't have it already

let scores=[
    [300 , 600 , 900], //Matt
    [200 , 400 , 600], //Foggy
    [100 , 200 , 300] , //Heather
]


// function storeScore(playerName, score) {
//     let playerScores = nameMap.get(playerName);
//     if (playerScores.length <=4) {
//         playerScores.push(score);
//         nameMap.set(playerName, playerScores);
//     } else {
//         console.log(`${playerName} already has 4 scores.`);
//     }

// }
// This will output the games in store for each player and their score
let results={
    Matt: {
        game: nameMap.get("Matt"),
    },
    Foggy: {
        game: nameMap.get("Foggy"),
    },
    Heather: {
        game: nameMap.get("Heather"),
    }
}



console.log(results);

// This will summarize each players score and average score
let summary = {
    Matt: {
        game: nameMap.get("Matt"),
        score: 0,
        averageScore: 0
    },
    Foggy: {
        game: nameMap.get("Foggy"),
        score: 0,
        averageScore: 0
    },
    Heather: {
        game: nameMap.get("Heather"),
        score: 0,
        averageScore: 0
    }
}
console.log(summary);