export function fetchPatientData(authToken) {
  fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
    headers: {
      Authorization: `Basic ${authToken}`,
    },
  })
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then((data) => renderPatientData(data))
    .catch((error) => console.error("Error fetching patient data:", error));
}

function renderPatientData(data) {
  const patientLists = document.getElementById("patients-list");
  patientLists.innerHTML = "";

  const fragment = document.createDocumentFragment();
  data.forEach((patient) => {
    fragment.appendChild(createPatientListItem(patient));
  });

  patientLists.appendChild(fragment);
}

function createPatientListItem(patient) {
  const patientList = document.createElement("li");
  patientList.classList.add("patients-list-item");

  patientList.innerHTML = `
  <div class="patient-card">
  <img src="${patient.profile_picture}" class="patient-card__image" alt="${patient.name} picture">
  <div class="patient-card__info flex-col">
    <h5 class="patient-card__name">${patient.name}</h5>
    <h5 class="patient-card__details">${patient.gender}, ${patient.age}</h5>
  </div>
</div>
<div>
  <img src="/assets/morehorizontal.svg" alt="more">
</div>

  `;

  return patientList;
}
