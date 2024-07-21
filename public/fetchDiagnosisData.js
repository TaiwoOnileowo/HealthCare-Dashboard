export function fetchDiagnosisData(authToken) {
  fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
    headers: {
      Authorization: `Basic ${authToken}`,
    },
  })
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then((data) => renderDiagnosisData(data[3].diagnosis_history[0]))
    .catch((error) => console.error("Error fetching diagnosis data:", error));
}

function renderDiagnosisData(data) {
  const results = [
    {
      value: data.heart_rate.value,
      image: "assets/HeartBPM.png",
      heading: "Heart Rate",
      unit: "bpm",
      levels: data.heart_rate.levels
    },
    {
      value: data.respiratory_rate.value,
      image: "assets/respiratory rate.png",
      heading: "Respiratory Rate",
      unit: "bpm",
      levels: data.respiratory_rate.levels
    },
    {
      value: data.temperature.value,
      image: "assets/temperature.png",
      heading: "Temperature",
      unit: "&deg;F",
      levels: data.temperature.levels
    },
  ];
console.log(data.temperature)
  const resultLists = document.getElementById("other-health-results");
  resultLists.innerHTML = "";

  const fragment = document.createDocumentFragment();
  results.forEach((result, index) => {
    fragment.appendChild(createResultListItem(result, index));
  });

  resultLists.appendChild(fragment);
}

function createResultListItem(result, index) {
  const resultList = document.createElement("div");
  resultList.classList.add("results-list");
console.log(result)
  resultList.innerHTML = `
    <div>
      <img src="${result.image}" alt="Result Image">
      <h5 style="font-size:16px; font-weight:500;">${result.heading}</h5>
      <p style="font-size:30px; font-weight:1000;">${result.value}${
    result.unit
  }</p>
    </div>
    <p class="body-regular-14" style="margin-top:10px; display:flex; align-items:center; gap:0.5rem;">
      <span><img src="assets/ArrowDown.png" style="${
        index === 0 ? "display:inline-block" : "display:none"
      }"></span>
      ${result.levels}
    </p>
  `;

  return resultList;
}
