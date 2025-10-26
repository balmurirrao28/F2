// Rainfall Bar Chart demo
new Chart(document.getElementById('rainfallChart'), {
    type: 'bar',
    data: {
        labels: ["Kerala", "Tamil Nadu", "Maharashtra"],
        datasets: [{ label: 'Rainfall (mm)', data: [368, 230, 245], backgroundColor: '#4e9fa3' }]
    }
});

// Temperature Line Chart demo
new Chart(document.getElementById('temperatureChart'), {
    type: 'line',
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr"],
        datasets: [{ label: 'Avg. Temperature (°C)', data: [24, 26, 28, 29], borderColor: "#f39c12", fill: false }]
    }
});

// Rainfall Pie Chart demo
new Chart(document.getElementById('rainfallPie'), {
    type: 'pie',
    data: {
        labels: ["Kerala", "Tamil Nadu", "Maharashtra"],
        datasets: [{ data: [368, 230, 245], backgroundColor: ["#3498db", "#2ecc71", "#e67e22"] }]
    }
});

// State Wise Data Table demo
const states = [
    ["Kerala", 368, 28, 62],
    ["Tamil Nadu", 230, 33.8, 58],
    ["Maharashtra", 245, 31, 55]
];
const tbody = document.getElementById('dataTable').getElementsByTagName("tbody")[0];
states.forEach(state => {
    const row = document.createElement("tr");
    state.forEach(val => {
        const td = document.createElement("td");
        td.textContent = val;
        row.appendChild(td);
    });
    tbody.appendChild(row);
});
