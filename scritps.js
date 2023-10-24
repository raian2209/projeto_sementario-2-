// Sample seed data
const seeds = [
    { name: "Seed 1", description: "Description for Seed 1" },
    { name: "Seed 2", description: "Description for Seed 2" },
    // Add more seed objects
];

// Function to populate the left panel with seeds
function populateLeftPanel() {
    const leftPanel = document.querySelector(".left");
    leftPanel.innerHTML = "";

    seeds.forEach((seed, index) => {
        const seedElement = document.createElement("div");
        seedElement.className = "seed";
        seedElement.textContent = seed.name;

        // Attach an event listener to show descriptions on click
        seedElement.addEventListener("click", () => {
            displayDescription(seed);
        });

        leftPanel.appendChild(seedElement);
    });
}

// Function to display descriptions on the right panel
function displayDescription(seed) {
    const rightPanel = document.querySelector(".right");
    rightPanel.innerHTML = seed.description;
}

// Initial setup
populateLeftPanel();
