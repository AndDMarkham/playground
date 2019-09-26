const sides = ['dice-1', 'dice-2', 'dice-3', 'dice-4', 'dice-5', 'dice-6'];
const dice = document.querySelector('#dice');

const rollTheDice = () => {
  dice.className = sides[Math.floor(Math.random() * 6)];
};

document.addEventListener('DOMContentLoaded', () => {
  dice.addEventListener('click', rollTheDice);
});
