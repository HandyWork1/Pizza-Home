const pepperoni = {name:"Pepperoni", price: 100};
const chicken = {name:"Chicken", price:150};
const cheddarCheese = {name:"Cheddar Cheese", price:50};
const mozzarellaCheese = {name:"Mozzarella Cheese", price:50};
const mushrooms ={name:"Mushrooms", price:100};
const toppingsList = {name:"Toppings",items:[cheddarCheese, mozzarellaCheese, chicken, mushrooms, pepperoni]}

//Trying to use objects within objects for Sides
const wedges = {name:"Wedges", price: 350};
const wings ={name:"Chicken Wings", price:350};
const mozzarellaSticks = {name:"Mozzarella Sticks", price:400};
const sidesList = {name:"Sides", items:[mozzarellaSticks, wedges, wings]}

//Trying to use objects within obejcts for size
const large = {name: "Large Size", price: 550};
const medium = {name:"Medium Size", price: 400};
const small = {name: "Small Size", price: 200};
const sizeList = {name:"Sizes", items:[large, medium, small]};

//Using nested objects for crusts
const thinCrust = {name:"Thin Crust", price:70};
const thickCrust = {name:"Thick Crust", price: 100};
const deepCrust = {name:"Deep Crust", price:100};
const crustsList = {name:"Crusts", items:[thinCrust,thickCrust,deepCrust]};
