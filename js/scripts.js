const factText = document.getElementById("fact");
const btn = document.getElementById("btn");

function getSoftColor() {
  const r = Math.floor(Math.random() * 100) + 155;
  const g = Math.floor(Math.random() * 100) + 155;
  const b = Math.floor(Math.random() * 100) + 155;

  return `rgb(${r}, ${g}, ${b})`;
}

async function loadFact() {
  factText.textContent = "Loading...";

  try {
    const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
    const data = await response.json();

    factText.textContent = data.text;

    document.body.style.backgroundColor = getSoftColor();

  } catch (error) {
    factText.textContent = "Something went wrong.";
  }
}

btn.addEventListener("click", loadFact);