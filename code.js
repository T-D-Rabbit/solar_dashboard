const showDetails = (panelNumber) => {
  let data;
  if (panelNumber == 3 || panelNumber == 5) {
    data = {
      Status: "Dusty", Voltage: "33.8V", Current: "10.5A",
      "Power Output": "355W", "Expected Power": "400W", "Power-loss": "11.25%",
      Efficiency: "18%", Temperature: "55°C", Dust: "High",
      Crack: "Not Detected", Hotspot: "Not Detected", "Physical Damage": "None"
    };
  } else if (panelNumber == 8) {
    data = {
      Status: "Defective", Voltage: "31.5V", Current: "8.9A",
      "Power Output": "280W", "Expected Power": "400W", "Power-loss": "30%",
      Efficiency: "14%", Temperature: "70°C", Dust: "High",
      Crack: "Detected", Hotspot: "Detected", "Physical Damage": "Detected"
    };
  } else {
    data = {
      Status: "Healthy", Voltage: "34.2V", Current: "11.7A",
      "Power Output": "400W", "Expected Power": "400W", "Power-loss": "0%",
      Efficiency: "20%", Temperature: "45°C", Dust: "Low",
      Crack: "Not Detected", Hotspot: "Not Detected", "Physical Damage": "None"
    };
  }

  const panelDetails = document.getElementById("panelDetails");
  const rows = Object.entries(data)
    .map(([label, value]) => `<p><span class="label">${label}:</span> ${value}</p>`)
    .join("");
  panelDetails.innerHTML = `<span class="panel-badge">P${panelNumber}</span>${rows}`;
  panelDetails.style.display = "flex";
  document.getElementById("clearDetails").style.display = "inline-block";
  const cleanBtn = document.getElementById("cleanDetails");
  cleanBtn.textContent = `Clean P${panelNumber}`;
  cleanBtn.style.display = "inline-block";
  document.getElementById("mapBox").classList.add("open");
  document.getElementById("mapCol").classList.add("open");
};

const clearDetails = () => {
  const panelDetails = document.getElementById("panelDetails");
  panelDetails.style.display = "none";
  panelDetails.innerHTML = "";
  document.getElementById("clearDetails").style.display = "none";
  document.getElementById("cleanDetails").style.display = "none";
  document.getElementById("mapBox").classList.remove("open");
  document.getElementById("mapCol").classList.remove("open");
};
