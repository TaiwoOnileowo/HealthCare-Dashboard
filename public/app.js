document.addEventListener("DOMContentLoaded", () => {
  fetchAuthToken()
    .then((authToken) => {
      fetchPatientData(authToken);
    })
    .catch((error) => console.error("Error fetching auth token:", error));
});
