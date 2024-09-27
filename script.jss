let resourceCount = 0;
let resourcePerSecond = 0;
let resourcePerClick = 1;
let upgradeCost = 10;

const resourceDisplay = document.getElementById('resource-count');
const resourcePerSecondDisplay = document.getElementById('resource-per-second');
const manualButton = document.getElementById('manual-button');
const upgradeButton = document.getElementById('upgrade-button');

// Manual resource generation (button click)
manualButton.addEventListener('click', function () {
    resourceCount += resourcePerClick;
    updateDisplay();
});

// Buy an upgrade
upgradeButton.addEventListener('click', function () {
    if (resourceCount >= upgradeCost) {
        resourceCount -= upgradeCost;
        resourcePerSecond += 1;  // Increase resource generation rate
        upgradeCost *= 2;  // Double the cost for the next upgrade
        upgradeButton.innerText = `Buy Upgrade (Cost: ${upgradeCost} Resources)`;
        updateDisplay();
    }
});

// Resource generation over time (idle mechanism)
function generateResources() {
    resourceCount += resourcePerSecond;
    updateDisplay();
}

// Update the displayed values
function updateDisplay() {
    resourceDisplay.innerText = resourceCount;
    resourcePerSecondDisplay.innerText = resourcePerSecond;
}

// Run the resource generator every second
setInterval(generateResources, 1000);
