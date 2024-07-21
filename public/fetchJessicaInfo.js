export function fetchJessicaInfo(authToken) {
  fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
    headers: {
      Authorization: `Basic ${authToken}`,
    },
  })
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then((data) => renderJessicaData(data[3]))
    .catch((error) =>
      console.error("Error fetching Jessica's information:", error)
    );
}

function renderJessicaData(data) {
  const jessicaInfo = document.getElementById("jessica-info");
  jessicaInfo.innerHTML = "";

  const profileSection = `
    <div class="flex-col center">
      <img src="${data.profile_picture}" alt="Profile Picture" class="profile-picture">
      <p class="card-title-24pt">${data.name}</p>
    </div>
  `;
  jessicaInfo.innerHTML += profileSection;

  const infoItems = [
    {
      icon: "assets/BirthIcon.png",
      text: "Date of Birth",
      content: data.date_of_birth,
    },
    { icon: "assets/FemaleIcon.png", text: "Gender", content: data.gender },
    {
      icon: "assets/PhoneIcon.png",
      text: "Contact Info",
      content: data.phone_number,
    },
    {
      icon: "assets/PhoneIcon.png",
      text: "Emergency Contacts",
      content: data.emergency_contact,
    },
    {
      icon: "assets/InsuranceIcon.png",
      text: "Insurance Provider",
      content: data.insurance_type,
    },
  ];

  infoItems.forEach((item) => {
    const infoItem = `
      <div class="flex-row">
        <img src="${item.icon}" alt="${item.text} icon" class="icon-image">
        <div class="flex-col">
          <p style="font-weight:500;" class="body-regular-14">${item.text}</p>
          <p style="font-weight:700;" class="body-regular-14">${item.content}</p>
        </div>
      </div>
    `;
    jessicaInfo.innerHTML += infoItem;
  });

  const button = `<button style="font-weight:700;" class="body-regular-14">Show All Information</button>`;
  jessicaInfo.innerHTML += button;
}
