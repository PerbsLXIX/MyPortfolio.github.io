document.getElementById("electricForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent form submission

  // Get input values
  var previousReading = parseFloat(document.getElementById("previousReading").value);
  var currentReading = parseFloat(document.getElementById("currentReading").value);
  var unit = parseFloat(document.getElementById("unit").value);

  // Calculate monthly electric consumption
  var consumption = (currentReading - previousReading) * unit;

  // Display result
  document.getElementById("result").textContent = "Monthly Electric Consumption: " + consumption + " kWh";
});
