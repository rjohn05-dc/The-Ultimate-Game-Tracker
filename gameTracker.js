
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



let nameMap= new Map();
nameMap.set("Matt", randomGame());
console.log(nameMap.get("Matt"));
console.log(nameMap.get("Matt",storeGame(nameMap.get("Matt"))));


nameMap.set("Foggy", randomGame());
console.log(nameMap.get("Foggy"));
console.log(nameMap.get("Foggy",storeGame(nameMap.get("Foggy"))));


nameMap.set("Heather", randomGame());
console.log(nameMap.get("Heather"));
console.log(nameMap.get("Heather",storeGame(nameMap.get("Heather"))));




// This function will store the game in the players game list if they don't have it already
function storeGame(game){
 if (nameMap.has(game)){
    console.log("Game already exists in the list");
    return;
 }

    // This else will add the random game to the players list if they don't have it already
 else{
    nameMap.set(game, randomGame());
    console.log("Game added to the list");
    return;
 }
}


// this will calcualte the average score for each player
// function calcAverage(){
//     let totalScore = 0;
//     let totalGames = 0;
//     for (let i = 0; i < games.length; i++){
//         totalScore += games[i].score;
//         totalGames++;
//     }
//     return totalScore / totalGames;
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