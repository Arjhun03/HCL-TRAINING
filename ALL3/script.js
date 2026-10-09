function validate() {
    let name = document.getElementById("name").value;
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    let genderEl = document.querySelector('input[name="gender"]:checked');
    let gender = genderEl ? genderEl.value : "";

    height = height / 100;

    document.getElementById("resname").innerHTML =
        "Name: " + (name ? name : "N/A");

    document.getElementById("resgender").innerHTML =
        "Gender: " + (gender.charAt(0).toUpperCase() + gender.slice(1));

    document.getElementById("resheight").innerHTML =
        "Height: " + height + " m";

    document.getElementById("resweight").innerHTML =
        "Weight: " + weight + " kg";

    let BMI = weight / (height * height);

    if (BMI < 18.5) {
        document.getElementById("result").innerHTML = "Status: Underweight";
    } else if (BMI < 25) {
        document.getElementById("result").innerHTML = "Status: Normal weight";
    } else if (BMI < 30) {
        document.getElementById("result").innerHTML = "Status: Overweight";
    } else {
        document.getElementById("result").innerHTML = "Status: Obesity";
    }

    document.getElementById("bmi").innerHTML =
        "BMI: " + BMI.toFixed(2);

    let resultsCard = document.getElementById("results");
    if (resultsCard) {
        resultsCard.style.display = "flex";
    }
}