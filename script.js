const donors = [
    { name: "Ravi", blood: "A+", location: "Vijayawada" },
    { name: "Sita", blood: "B+", location: "Guntur" },
    { name: "Arjun", blood: "O+", location: "Hyderabad" },
    { name: "Priya", blood: "AB+", location: "Vijayawada" },
    { name: "Kiran", blood: "A-", location: "Chennai" }
];

const form = document.getElementById("searchForm");
const resultsDiv = document.getElementById("results");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    const bloodGroup = document.getElementById("bloodGroup").value;
    const location = document.getElementById("location").value.toLowerCase();

    resultsDiv.innerHTML = "";

    const filteredDonors = donors.filter(donor => 
        donor.blood === bloodGroup &&
        donor.location.toLowerCase().includes(location)
    );

    if (filteredDonors.length === 0) {
        resultsDiv.innerHTML = "<p>No donors found.</p>";
        return;
    }

    filteredDonors.forEach(donor => {
        const card = document.createElement("div");
        card.classList.add("donor-card");

        card.innerHTML = `
            <h3>${donor.name}</h3>
            <p><strong>Blood Group:</strong> ${donor.blood}</p>
            <p><strong>Location:</strong> ${donor.location}</p>
        `;

        resultsDiv.appendChild(card);
    });
});