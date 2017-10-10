var games;

games = ['Cuphead', 'Dark Souls', 'Destiny', 'Dishonored', 'Dishonored 2', 'Don\'t Starve', 'Fable Anniversary', 'Fallout 4', 'Fortnite', 'Forza', 'GoW Ultimate', 'Gone Home', 'GTA', 'Halo 5', 'Hitman', 'Star Wars Lego', 'Mass Effect', 'Metro Redux', 'Oxenfree', 'Quantum Break', 'Recore', 'RE', 'Shovel Knight', 'Stardew Valley', 'Super Time Force', 'The Escapists', 'The Evil Within', 'Thimbleweed Park'];

function randomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(games[randomNumber(1, games.length)]);
