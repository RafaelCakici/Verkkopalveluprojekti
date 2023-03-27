//Ostoskorin koodi
import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, FlatList, Button, Alert } from 'react-native';
import { connect } from 'react-redux';
import { addToCart } from '../actions/cartActions';
import { removeFromCart } from '../actions/cartActions';
import { removeItem } from '../actions/cartActions';
import { addQuantity } from '../actions/cartActions';
import { subtractQuantity } from '../actions/cartActions';
import { addShipping } from '../actions/cartActions';
import { removeShipping } from '../actions/cartActions';
import { addDiscount } from '../actions/cartActions';
import { removeDiscount } from '../actions/cartActions';
import { addTotal } from '../actions/cartActions';
import { removeTotal } from '../actions/cartActions';

// Define an array to store the items in the cart
let cartItems = [];

// Define a function to add items to the cart
function addToCart(item) {
  // Check if the item is already in the cart
  let existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
  if (existingItem) {
    // If the item already exists in the cart, update the quantity
    existingItem.quantity += 1;
  } else {
    // If the item does not exist in the cart, add it
    cartItems.push({...item, quantity: 1});
  }
}

// Define a function to remove an item from the cart
function removeFromCart(itemId) {
  // Find the index of the item in the cart
  let itemIndex = cartItems.findIndex((cartItem) => cartItem.id === itemId);
  if (itemIndex !== -1) {
    // If the item is found, remove it from the cart
    cartItems.splice(itemIndex, 1);
  }
}

// Define a function to calculate the total cost of the items in the cart
function calculateTotalCost() {
  let totalCost = 0;
  for (let i = 0; i < cartItems.length; i++) {
    totalCost += cartItems[i].price * cartItems[i].quantity;
  }
  return totalCost;
}

// Define a function to display the items in the cart
function displayCart() {
  // Get the cart element from the DOM
  let cartElement = document.getElementById('cart');

  // Clear the cart element
  cartElement.innerHTML = '';

  // Create a table to display the items in the cart
  let table = document.createElement('table');

  // Create a header row for the table
  let headerRow = document.createElement('tr');
  let nameHeader = document.createElement('th');
  nameHeader.textContent = 'Item Name';
  headerRow.appendChild(nameHeader);
  let quantityHeader = document.createElement('th');
  quantityHeader.textContent = 'Quantity';
  headerRow.appendChild(quantityHeader);
  let priceHeader = document.createElement('th');
  priceHeader.textContent = 'Price';
  headerRow.appendChild(priceHeader);
  table.appendChild(headerRow);
}
  // Loop through the items in the cart and create a row for each item
  for (let i = 0; i < cartItems.length; i++) {
    let row = document.createElement('tr');
    let nameCell = document.createElement('td');
    nameCell.textContent = cartItems[i].name;
    row.appendChild(nameCell);
    let quantityCell = document.createElement('td');
    quantityCell.textContent = cartItems[i].quantity;
    row.appendChild(quantityCell);
    let priceCell = document.createElement('td');
    priceCell.textContent = cartItems[i].price;
    row.appendChild(priceCell);
    table.appendChild(row);
  }


  // Add the table to the cart element
  cartElement.appendChild(table);

  // Display the total cost