let date = new Date();

function startTransaction(name, riderID, quantity, price, transactionID) {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  let mmddyy = `${month}/${day}/${year}`;

  document.querySelector(".orderName").innerHTML = name;
  document.querySelector(".riderID").innerHTML = riderID;
  document.querySelector(".quantity").innerHTML = quantity;
  document.querySelector(".price").innerHTML = price;

  document.querySelector(".orderID").innerHTML = transactionID;
  document.querySelector(".datetime").innerHTML = mmddyy;
}
