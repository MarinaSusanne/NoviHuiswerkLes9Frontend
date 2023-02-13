// VOORRAAD ARRAY MET TV'S
const inventory = [
  {
    type: '43PUS6504/12',
    name: '4K TV',
    brand: 'Philips',
    price: 379,
    availableSizes: [43, 50, 58, 65],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 23,
    sold: 2,
  },
  {
    type: 'NH3216SMART',
    name: 'HD smart TV',
    brand: 'Nikkei',
    price: 159,
    availableSizes: [32],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'HD ready',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 4,
    sold: 4,
  },
  {
    type: 'QE55Q60T',
    name: '4K QLED TV',
    brand: 'Samsung',
    price: 709,
    availableSizes: [43, 50, 55, 58, 65],
    refreshRate: 60,
    screenType: 'QLED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 7,
    sold: 0,
  },
  {
    type: '43HAK6152',
    name: 'Ultra HD SMART TV',
    brand: 'Hitachi',
    price: 349,
    availableSizes: [43, 50, 55, 58],
    refreshRate: 60,
    screenType: 'LCD',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: false,
    },
    originalStock: 5,
    sold: 5,
  },
  {
    type: '50PUS7304/12',
    name: 'The One 4K TV',
    brand: 'Philips',
    price: 479,
    availableSizes: [43, 50, 55, 58, 65, 70],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: true,
      hdr: true,
      bluetooth: true,
      ambiLight: true,
    },
    originalStock: 8,
    sold: 3,
  },
  {
    type: '55PUS7805',
    name: '4K LED TV',
    brand: 'Philips',
    price: 689,
    availableSizes: [55],
    refreshRate: 100,
    screenType: 'LED',
    screenQuality: 'Ultra HD/4K',
    smartTv: true,
    options: {
      wifi: true,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: true,
    },
    originalStock: 6,
    sold: 3,
  },
  {
    type: 'B2450HD',
    name: 'LED TV',
    brand: 'Brandt',
    price: 109,
    availableSizes: [24],
    refreshRate: 60,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: false,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
  {
    type: '32WL1A63DG',
    name: 'HD TV',
    brand: 'Toshiba',
    price: 161,
    availableSizes: [32],
    refreshRate: 50,
    screenType: 'LED',
    screenQuality: 'Full HD',
    smartTv: false,
    options: {
      wifi: false,
      speech: false,
      hdr: true,
      bluetooth: false,
      ambiLight: false,
    },
    originalStock: 10,
    sold: 8,
  },
];

// OPDRACHT 1
//opdracht 1a
const televisionTypes = inventory.map((television) => {
  return television.type;
})
console.log(televisionTypes);

//opdracht 1b
const soldOut = inventory.filter((television) =>{
  if (television.originalStock - television.sold === 0){
    return true;
  }
})
console.log(soldOut);

//opdracht 1c
const containsAmbi = inventory.filter((television) =>{
  if (television.options.ambiLight === true ){
    return true;
  }
})
console.log(containsAmbi);

//opdracht 1d
// inventory.sort((a,b) => {
//   return a.price-b.price;
// })
// console.log(inventory);

//OPDRACHT 2
//opdracht 2a
let soldTelevisions=0;
for (let i=0; i<inventory.length; i++){
 soldTelevisions = soldTelevisions + inventory[i].sold;
}
console.log("Er zijn " + soldTelevisions + " verkocht");

//opdracht 2b
const element = document.getElementById("soldTVs");
element.textContent = `Er zijn ${soldTelevisions} televisies verkocht`;

//opdracht 2c
let boughtTelevisions=0;
for (let i=0; i<inventory.length; i++){
  boughtTelevisions = boughtTelevisions + inventory[i].originalStock;
}
console.log("Er zijn " + boughtTelevisions + " ingekocht");

// //opdracht 2d
const element2 = document.getElementById("boughtTVs");
element2.textContent = `Er zijn ${boughtTelevisions} televisies oorspronkelijk ingekocht`;

//opdracht 2e
let televisionsNeedToBeSold=0;
for (let i=0; i<inventory.length; i++){
  televisionsNeedToBeSold = televisionsNeedToBeSold + (inventory[i].originalStock- inventory[i].sold);
}
console.log("Er zijn " + televisionsNeedToBeSold + " nog over");

const element3 = document.getElementById("leftOver");
element3.textContent = `Er zijn ${televisionsNeedToBeSold} televisies op voorraad`;

//OPDRACHT3
//opdracht3a - optie 1

const showBrands = inventory.map((television) => {
  return television.brand;
})
console.log(showBrands);

const element4 = document.getElementById("testInnerHTML");
element4.innerHTML =
    `<p> De volgende merken zijn er: ${showBrands}</p>`;

// // opdracht3b

let listOfBrands= [];
for( let i = 0; i<inventory.length; i++){
  listOfBrands[i]= inventory[i].brand;
}
console.log(listOfBrands);
const element5 = document.getElementById("listOfTelevisionBrands");
element5.textContent = `De volgende merknamen zijn er: ${listOfBrands}`;

//OPDRACHT 4
//Opdracht 4a en 4b en 4c en 4d
//dit is voor 4c
let printing = "";
let number2 = 0; //dus voor de eerste televisie
for (let i = 0; i < inventory[number2].availableSizes.length; i++){
  printing = printing + inventory[number2].availableSizes[i] + " inch  (" + (inventory[number2].availableSizes[i]*2.54) + ") cm) |";
}


let number = 0; //dus voor de eerste televisie
const element6 = document.getElementById("showTVs");
element6.innerHTML =
    `<h> ${inventory[number].brand}  ${inventory[number].type} - ${inventory[number].name} </h>
       <br>
       <h>€${inventory[number].price},- </h> 
       <br>
       <h> 
       ${printing}
       </h>
  `;

//Opdracht4e

let printing2 = "";
const allTelevisionInfo = inventory.map((television)=> {
  for (let i = 0; i < inventory[television].availableSizes.length; i++) {
    printing2 = printing2 + inventory[television].availableSizes[i] + " inch  (" + (inventory[television].availableSizes[i] * 2.54) + ") cm) |";
  }
  return inventory[television].brand + ' ' + inventory[television].type + ' ' + inventory[television].name + '    €' +inventory[television].price + ' ,=' + printing2;
})
console.log(allTelevisionInfo);











