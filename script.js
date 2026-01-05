function predict() {
  const resultBox = document.getElementById("result");

  // Read input values
  const city = document.getElementById("city").value;
  const trafficVolume = Number(document.getElementById("traffic").value);
  const hour = Number(document.getElementById("hour").value);

  resultBox.style.display = "block";
  resultBox.className = "result";

  // Simple frontend-based logic (demo purpose)
  let riskLevel;
  let probability;

  if (trafficVolume > 700 || (hour >= 8 && hour <= 10) || (hour >= 17 && hour <= 20)) {
    riskLevel = "High";
    probability = (Math.random() * 0.2 + 0.75).toFixed(2);
    resultBox.className = "result high";
    resultBox.innerText =
      `⚠️ HIGH RISK\nCity: ${city}\nProbability: ${probability}`;
  } else {
    riskLevel = "Low";
    probability = (Math.random() * 0.3 + 0.3).toFixed(2);
    resultBox.className = "result low";
    resultBox.innerText =
      `✅ LOW RISK\nCity: ${city}\nProbability: ${probability}`;
  }
}
