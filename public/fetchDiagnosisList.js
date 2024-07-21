export function fetchDiagnosisList(authToken) {
  fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
    headers: {
      Authorization: `Basic ${authToken}`,
    },
  })
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then(data => {
      const diagnosisList = data[3].diagnostic_list;
      renderDiagnosisList(diagnosisList);
    })
    .catch(error => console.error("Error fetching diagnosis data:", error));
}

function renderDiagnosisList(diagnosisList) {
  const diagnosisTable = document.getElementById("diagnosis-table");
  diagnosisTable.innerHTML = "";

  const tableHeader = `
    <thead>
      <tr class="body-emphasized-14pt">
        <th>Problem/Diagnosis</th>
        <th>Description</th>
        <th>Status</th>
      </tr>
    </thead>
  `;
  diagnosisTable.innerHTML += tableHeader;

  const tableBody = document.createElement("tbody");
  diagnosisList.forEach(diagnosis => {
    const row = document.createElement("tr");
    row.classList.add("body-regular-14");
    row.innerHTML = `
      <td>${diagnosis.name}</td>
      <td>${diagnosis.description}</td>
      <td>${diagnosis.status}</td>
    `;
    tableBody.appendChild(row);
  });

  diagnosisTable.appendChild(tableBody);
}
