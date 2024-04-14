let product, itemID, price, directory, imageFile;
let totalPrice = 0;
let itemArray = [];

let itemCount = 0;

// Close Menu Popup

document.querySelector(".closePopup").addEventListener("click", () => {
  document.querySelector(".cartContainer").classList.add("hide");

  itemCount = 0;
  product = "";
  document.querySelector(".quantity").innerHTML = itemCount;
});

function openCart(ID, productName, presyo, type, folder, image) {
  price = presyo;
  itemID = ID;
  product = productName;
  directory = folder;
  imageFile = image;

  document.querySelector(".items").innerHTML = `<h3>${product}: ${price}</h3>`;
  document.querySelector(".cartContainer").classList.remove("hide");
}

function addToCart() {
  totalPrice = totalPrice + price * itemCount;

  itemArray.push({
    itemID: itemID,
    price: price * itemCount,
    quantity: itemCount,
  });

  document.querySelector(".price").innerHTML = `Total Price: Php ${totalPrice}`;
  document.querySelector(
    ".cartItems"
  ).innerHTML += ` <div class="listing"><h3 class="productName">${product}</h3><h3 class="productQuantity">Quantity: ${itemCount}</h3><div class="productImage"><img width="40px" height="40px" src="${directory}/${imageFile}" alt=""></div></div>`;

  document.querySelector(".cartContainer").classList.add("hide");
  itemCount = 0;
  product = "";
  document.querySelector(".quantity").innerHTML = itemCount;

  window.itemArray = itemArray;
}

function seeOrder(orderID, items, price, quantity, riderID, sendingLoc) {
  document.querySelector(
    ".listItems"
  ).innerHTML = `<div class="parentContainer">
    <div class="listItemsContainer"><div class="itemLabel left"><b>Items:</b></div><div class="serverItems right">${items}</div></div>
    <div class="listItemsContainer"><div class="quantityLabel left"><b>Quantity:</b></div><div class="serverQuantity right">${quantity}</div></div>
    <div class="listItemsContainer"><div class="priceLabel left"><b>Price:</b></div><div class="serverPrice right">${price}</div></div>
    
  </div>`;

  let form = document.querySelector(".orderForm");

  form.orderID.value = orderID;
  form.quantity.value = quantity;
  form.price.value = price;
  form.items.value = items;
  form.userID.value = sessionStorage.getItem("userID");

  if (riderID != "none") {
    document.querySelector(".orderForm").classList.remove("hide");
    window.riderID = riderID;
  } else {
    document.querySelector(".orderForm").classList.add("hide");
    window.riderID == undefined;
  }

  window.sendingLoc = sendingLoc;

  document.querySelector(".itemList").classList.remove("hide");
}

document.querySelector(".closeBtn").addEventListener("click", () => {
  document.querySelector(".itemList").classList.add("hide");

  document.querySelectorAll(".chatBubble").forEach((chats) => {
    chats.parentNode.removeChild(chats);
  });

  window.riderID = undefined;
  window.sendingLoc = undefined;
});

document.querySelector(".openChat").addEventListener("click", () => {
  document.querySelector(".chatContainer").classList.remove("hide");

  document.querySelector(".chats").scrollIntoView({ block: "end" });
});

document.querySelector(".closeChat").addEventListener("click", () => {
  document.querySelector(".chatContainer").classList.add("hide");
});
