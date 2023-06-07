<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $previousReading = $_POST["previousReading"];
  $currentReading = $_POST["currentReading"];
  $unit = $_POST["unit"];

  // Calculate monthly electric consumption
  $consumption = ($currentReading - $previousReading) * $unit;

  // Send the response back to JavaScript
  echo $consumption;
}
?>
