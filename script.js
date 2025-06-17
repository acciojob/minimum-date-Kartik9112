function minDate(dates) {
  // Return the minimum date string from the array
  return dates.slice().sort()[0];
}

function handleMinDate() {
  const input = document.getElementById("dateInput").value.trim();

  if (!input) {
    document.getElementById("result").textContent = "Please enter some dates.";
    return;
  }

  // Split input by commas, trim whitespace, and validate format
  const dates = input.split(",").map(date => date.trim());
  const isValidFormat = dates.every(date => /^\d{4}\/\d{2}\/\d{2}$/.test(date));

  if (!isValidFormat) {
    document.getElementById("result").textContent = "Please use the correct format: YYYY/MM/DD.";
    return;
  }

  const earliest = minDate(dates);
  document.getElementById("result").textContent = `Earliest Date: ${earliest}`;
}
