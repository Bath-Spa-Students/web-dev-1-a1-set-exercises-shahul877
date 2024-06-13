const pricePerLiter = 1.72;

function calculateCost() {
    const liters = document.getElementById('liters').value;
    const cost = liters * pricePerLiter;
    document.getElementById('result').innerText = `Total cost:${cost.toFixed(2)}`;
}
