export function bloodPressureChart() {
  const ctx = document.getElementById("chart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: [
        "Oct 2023",
        "Nov 2023",
        "Dec 2023",
        "Jan 2024",
        "Feb 2024",
        "May 2024",
      ],
      datasets: [
        {
          label: "Dataset 1",
          data: [103, 103, 111, 86, 73, 78],
          borderColor: "#C26EB4",
          borderWidth: 2,
          fill: false,
          tension: 0.4,
          pointBackgroundColor: "#E66FD2",
          pointBorderColor: "#fff",
          pointBorderWidth: 1,
          pointRadius: 6,
        },
        {
          label: "Dataset 2",
          data: [125, 173, 91, 128, 119, 160],
          borderColor: "#7E6CAB",
          borderWidth: 2,
          fill: false,
          tension: 0.4,
          pointBackgroundColor: "#8C6FE6",
          pointBorderColor: "#fff",
          pointBorderWidth: 1,
          pointRadius: 6,
        },
      ],
    },
    options: {
      scales: {
        x: {
          grid: {
            display: false,
          },
        },
        y: {
          grid: {
            display: true,
            color: "rgba(200, 200, 200, 0.3)",
            borderDash: [5, 5],
          },
        },
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });
}
