let instructions = document.getElementById("instructions");

//Order Class
class Order {
  name;
  date;
  time;
  type;
  notes;

  constructor(name, type) {
    //Retrieve input values
    this.name = document.getElementById("name").value;
    this.date = document.getElementById("date").value;
    this.time = document.getElementById("time").value;
    this.type = document.getElementById("type").value;
    this.notes = document.getElementById("notes").value;
  }

  //Place a new order
  placeOrder() {
    //Displaying the order
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
      `<button id="deleteOrder" onClick="removeOrder();">DELETE ORDER FROM LIST</button>` +
      `</div>`;

    //Invoking Add Height function
    this.addHeight();
  }

  //Add height to bar chart
  addHeight() {
    if (this.type == "Cheese Pizza") {
      // Adding Height to Bar Graph
      let bar = document.getElementById("bar");
      let height = bar.offsetHeight;
      let newHeight = height + 20;
      bar.style.height = newHeight + "px";
    } else if (this.type == "Pepperoni Pizza") {
      let bar2 = document.getElementById("bar2");
      let height = bar2.offsetHeight;
      let newHeight = height + 20;
      bar2.style.height = newHeight + "px";
    } else if (this.type == "Veggie Pizza") {
      let bar3 = document.getElementById("bar3");
      let height = bar3.offsetHeight;
      let newHeight = height + 20;
      bar3.style.height = newHeight + "px";
    } else if (this.type == "Meat Lovers Pizza") {
      let bar4 = document.getElementById("bar4");
      let height = bar4.offsetHeight;
      let newHeight = height + 20;
      bar4.style.height = newHeight + "px";
    } else if (this.type == "BBQ Chicken Pizza") {
      let bar5 = document.getElementById("bar5");
      let height = bar5.offsetHeight;
      let newHeight = height + 20;
      bar5.style.height = newHeight + "px";
    } else {
      return;
    }
  }
}

//Add the Order
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
    //Create order if all form alerts are filled out
    let newOrder = new DisplayOrder().placeOrder();
  }
}

//Remove order from list if user clicks button
function removeOrder() {
  let indivOrder = document.getElementById("indivOrder");
  indivOrder.outerHTML = "";
}

// Menu screen animation
function go() {
  TweenMax.to(instructions, {
    duration: 0.5,
    y: -3000,
    x: 0,
    delay: 0.1,
  });
}
