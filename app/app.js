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
      `<div class="indivOrder">` +
      `<h3> Order: </h3>` +
      this.name +
      `</br>` +
      this.date +
      `</br>` +
      this.time +
      `</br>` +
      this.type +
      `</br>` +
      this.notes +
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
    document.getElementById("bar").innerHTML = count + " Order";
  } else {
    document.getElementById("bar").innerHTML = count + " Orders";
    3;
  }
}

function removeOrder() {
  let results = document.getElementById("results");
  $("#results div:last").remove();
}

//NOTES
//Need to determine styling/design
//Need 'bar chart' for each type of food order. Only add to bar chart with corresponding type
