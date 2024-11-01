const calculate = () => {
    let name = document.getElementById("name").value;
    let price = Number(document.getElementById("startingBid").value);

    if (!name || !price) {
        alert("Please enter both name and starting bid.");
        return;
    }

    const education = Number(document.getElementById("education").value);
    const networth = Number(document.getElementById("networth").value);
    const caste = Number(document.getElementById("caste").value);
    
    const ageElement = document.querySelector('input[name="age"]:checked');
    const age = ageElement ? Number(ageElement.value) : 1;

    const skills = Array.from(document.getElementsByClassName("skills"))
        .filter(skill => skill.checked)
        .reduce((acc, skill) => acc + Number(skill.value), 0);

    const badParents = document.getElementById("g_par").checked ? Number(document.getElementById("g_par").value) : 1;
    const badCharacter = document.getElementById("g_char").checked ? Number(document.getElementById("g_char").value) : 1;
    const badPerson = document.getElementById("g_per").checked ? Number(document.getElementById("g_per").value) : 0;
    
    price = price * education * networth * age * badParents * badCharacter + badPerson + caste + skills;

    const loveLetter = document.getElementById("loveLetter").value;

    let person = {
        name: name,
        price: price,
        loveLetter: loveLetter
    };

    const resultText = document.getElementById("resultText");
    resultText.innerHTML = `The price you offer for ${person.name} is $${person.price.toFixed(2)}. 
    <br> Your Love Letter: ${person.loveLetter}`;
    document.getElementById("hiddenElement").style.display = "block";
};

document.getElementById("submit").addEventListener("click", (event) => {
    event.preventDefault();
    calculate();
});
