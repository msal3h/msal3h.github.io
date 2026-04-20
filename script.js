



const saveTripbtn = document.getElementById("save-trip");

saveTripbtn.addEventListener('click',() => {

    const tripinfo = {
      id: Date.now(),
      name: document.getElementById("trip-name"),
      destination: document.getElementById("trip-destination"),
      startDate: document.getElementById("trip-start-date"),
      endDate: document.getElementById("trip-end-date"),
      budget: document.getElementById("trip-budget"),
      description: document.getElementById("trip-description")
    };
})

let trips = JSON.parse(localStorage.getitem("trips")) || [];

trips.push(trip);

localStorage.setItem("trips", JSON.stringify(trips));

console.log("Saved trips:", trips);

/*
🟢 Before clicking save

let trips = [];

🟢 User adds first trip
trip = {
  name: "Tokyo",
  budget: "2000"
}

Then:

trips.push(trip);

👉 Now:

trips = [
  { name: "Tokyo", budget: "2000" }
]

🟢 Then this runs:
localStorage.setItem("trips", JSON.stringify(trips));

👉 It saves:

"[{ name: 'Tokyo', budget: '2000' }]"
*/

