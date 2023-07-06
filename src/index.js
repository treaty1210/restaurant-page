import Restaurant from './restaurant.png'

const content = document.querySelector("#content")

//adding image to div
const myRestaurant = new Image();
myRestaurant.src = Restaurant;
content.appendChild(myRestaurant);

