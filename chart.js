"use strict";

window.addEventListener("DOMContentLoaded", start);

const myArray = [];
const queueSize = getNumberOfCustomers();

function start() {
  createRandomArray();
  setHeights();
  addMoreCustomers();
}

function createRandomArray() {
  //create the initial array randomly
  for (let i = 0; i < 40; i++) {
    myArray[i] = getNumberOfCustomers();
  }
  console.log(myArray);
}

function setHeights() {
  //find the first bar
  document.querySelectorAll(".barDiv").forEach((barDiv, index) => {
    barDiv.style.setProperty("--height", myArray[index]); //show this in each div
  });

  //set the height
}

function getNumberOfCustomers() {
  return Math.floor(Math.random() * 32);
}

function addMoreCustomers() {
  //add random number to the end of the array
  myArray.push(getNumberOfCustomers());
  //remove the first element of the array
  myArray.shift();
  //update heights
  setHeights();

  setTimeout(addMoreCustomers, 1000);
}
