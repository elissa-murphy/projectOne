let instructions = document.getElementById("instructions");
//Order Class
class Order {
  name;
  date;
  time;
  type;
  notes;

  constructor(name, type) {
    this.name = document.getElementById("name").value;
    this.date = document.getElementById("date").value;
    this.time = document.getElementById("time").value;
    this.type = document.getElementById("type").value;
    this.notes = document.getElementById("notes").value;
  }

  //Place a new order
  placeOrder() {
    let results = document.getElementById("results");
    results.innerHTML +=
      `<div class="indivOrder" id="indivOrder">` +
      `<h3> ORDER: </h3>` +
      `<div>Name: </div>` +
      this.name +
      `</br>` +
      `<div>Date: </div>` +
      this.date +
      `</br>` +
      `<div>Time: </div>` +
      this.time +
      `</br>` +
      `<div>Food Order: </div>` +
      this.type +
      `</br>` +
      `<div>Notes:  </div>` +
      `<div class="notes"> ${this.notes} </div>` +
      `<button id="deleteOrder" onClick="removeOrder();">DELETE ORDER</button>` +
      `</div>`;

    this.addHeight();
  }

  addHeight() {
    // Adding Height to Bar Graph
    let bar = document.getElementById("bar");
    let height = bar.offsetHeight;
    let newHeight = height + 20;
    bar.style.height = newHeight + "px";
  }
}

//Display the Order in List and in Bar Graph
class DisplayOrder extends Order {
  constructor() {
    super();

    //Empty Input Fields
    document.getElementById("name").value = "";
    document.getElementById("date").value = "";
    document.getElementById("time").value = "";
    document.getElementById("type").value = "";
    document.getElementById("notes").value = "";
  }
}

function createOrder() {
  //Form Error Alerts
  if (document.getElementById("name").value == "") {
    alert("Please enter your name.");
  } else if (document.getElementById("date").value == "") {
    alert("Please enter the date");
  } else if (document.getElementById("time").value == "") {
    alert("Please enter the time");
  } else if (document.getElementById("type").value == "") {
    alert("Please select the type of food");
  } else {
    let newOrder = new DisplayOrder().placeOrder();
  }
}

//Increase order count in bar graph
var count = 0;
function addCount() {
  count++;
  if (count == 1) {
    document.getElementById("bar").innerHTML = count + " Cheese Pizza Order";
  } else {
    document.getElementById("bar").innerHTML = count + " Cheese Pizza Orders";
    3;
  }
}

function removeOrder() {
  let indivOrder = document.getElementById("indivOrder");
  indivOrder.outerHTML = "";

  count--;
  if (count == 1) {
    document.getElementById("bar").innerHTML = count + " Cheese Pizza Order";
  } else {
    document.getElementById("bar").innerHTML = count + " Cheese Pizza Orders";
    3;
  }

  removeHeight();
}

function removeHeight() {
  let bar = document.getElementById("bar");
  let height = bar.offsetHeight;
  let newHeight = height - 20;
  bar.style.height = "20px";
  console.log("removed height");
}

function go() {
  TweenMax.to(instructions, {
    duration: 0.5,
    y: -2000,
    x: 0,
    delay: 0.1,
  });
}
