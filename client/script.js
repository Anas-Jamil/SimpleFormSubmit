document.addEventListener("DOMContentLoaded", function () {

    const form = document.querySelector(".Form_1");

    form.addEventListener("submit", async function (event){
        event.preventDefault();

        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            dob: document.getElementById("dob").value,
            gender: document.querySelector("input[name='gender']:checked").nextElementSibling.innerText,
            description: document.getElementById(description).value
        };


        try {
            const response = await fetch("http://localhost:3000/submit", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(formData)
            });
            
            const result = await response.json();
            alert(result.message);

            if (result.success) {
                form.reset();
            }
        }catch (error) {
            console.error("error submitting form: ", error);
            alert("There was an error");
        }
    });


});