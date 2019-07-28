const pepperoni = {name:"Pepperoni", price: 100};
const chicken = {name:"Chicken", price:150};
const cheddarCheese = {name:"Cheddar Cheese", price:50};
const mozzarellaCheese = {name:"Mozzarella Cheese", price:50};
const mushrooms ={name:"Mushrooms", price:100};
const toppingsList = {name:"Toppings",items:[cheddarCheese, mozzarellaCheese, chicken, mushrooms, pepperoni]}


const large = {name: "Large Size", price: 550};
const medium = {name:"Medium Size", price: 400};
const small = {name: "Small Size", price: 200};
const sizeList = {name:"Sizes", items:[large, medium, small]};


const thinCrust = {name:"Thin Crust", price:70};
const thickCrust = {name:"Thick Crust", price: 100};
const deepCrust = {name:"Deep Crust", price:100};
const crustsList = {name:"Crusts", items:[thinCrust,thickCrust,deepCrust]};


$(document).ready(function(){
  var total = 0
  $(".delivery").hide();
  $("#checkouts").hide();
    

    $("#size").submit(function(event){
      event.preventDefault()
      var size = parseInt($("input[name='size']:checked").val());
      var sizeName = sizeList.items[size].name
      $("#checkouts").append("<li>" + sizeList.items[size].name+" "+sizeList.items[size].price +"</li>")
      total += (sizeList.items[size].price)
      alert("The total so far is: " + total)
    })


  $("#toppings").submit(function(event){
    event.preventDefault()
    //Looping through the inputted topping to get the price
       $('input[name=toppings]:checked').each(function(){
       var toppings = parseInt($(this).val())
       $("#checkouts").append("<li>" + toppingsList.items[toppings].name + " " + toppingsList.items[toppings].price+ "</li>")
       total += (toppingsList.items[toppings].price)

      });
      alert("Your current total is: " + total)
  });


  $("#number").submit(function(event){
    event.preventDefault()
    var quantity = $("#quantity").val()
    $("#checkouts").append("<li>" +"Quantity: "+ quantity +"</li>")
    total *= quantity
    alert("Your current total is " + total)
  });
