document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".Form_1");

    form.addEventListener("submit", async function (event) {
        event.preventDefault(); // Prevents page reload

        // Correct form data collection
        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            dob: document.getElementById("dob").value,
            gender: document.querySelector("input[name='gender']:checked")?.value || "",
            description: document.getElementById("description").value
        };

        // Debugging: Check if gender is correctly captured
        console.log("Selected gender:", formData.gender);

        // Ensure all required fields are filled
        if (!formData.name || !formData.email || !formData.dob || !formData.gender) {
            alert("Please fill out all required fields.");
            return;
        }

        try {
            const response = await fetch("http://localhost:3000/submit", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData)
            });

            const result = await response.json();
            alert(result.message); // Show success message

            if (result.success) {
                form.reset(); // Reset the form after successful submission
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("There was an error submitting the form.");
        }
    });
});
