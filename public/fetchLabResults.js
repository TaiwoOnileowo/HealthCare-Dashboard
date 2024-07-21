export function fetchLabResults(authToken) {
  fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
    headers: {
      Authorization: `Basic ${authToken}`,
    },
  })
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then((data) => renderLabResults(data[3].lab_results))
    .catch((error) => console.error("Error fetching lab results:", error));
}

function renderLabResults(data) {
  const labResultLists = document.getElementById("lab-results-list");
  labResultLists.innerHTML = "";

  const fragment = document.createDocumentFragment();
  data.forEach((result) => {
    const item = document.createElement("li");
    item.classList.add("lab-results-list-item");
    item.innerHTML = `
      <h5>${result}</h5>
      <img src="assets/download.png" alt="download">
    `;
    fragment.appendChild(item);
  });

  labResultLists.appendChild(fragment);
}
