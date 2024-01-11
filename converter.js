const conversionRatios = {
    Bit: { Nibble: 1 / 4, Byte: 1 / 8, Word: 1 / 32, Kilobyte: 1 / Math.pow(2, 13), Megabyte: 1 / Math.pow(2, 23), Gigabyte: 1 / Math.pow(2, 33), Terrabyte: 1 / Math.pow(2, 43), Petabyte: 1 / Math.pow(2, 53), Exabyte: 1 / Math.pow(2, 63), Zettabyte: 1 / Math.pow(2, 73), Yottabyte: 1 / Math.pow(2, 83) },
    Nibble: { Bit: 4, Byte: 1 / 2, Word: 1 / 8, Kilobyte: 1 / Math.pow(2, 11), Megabyte: 1 / Math.pow(2, 21), Gigabyte: 1 / Math.pow(2, 31), Terrabyte: 1 / Math.pow(2, 41), Petabyte: 1 / Math.pow(2, 51), Exabyte: 1 / Math.pow(2, 61), Zettabyte: 1 / Math.pow(2, 71), Yottabyte: 1 / Math.pow(2, 81) },
    Byte: { Bit: 8, Nibble: 2, Word: 1 / 4, Kilobyte: 1 / 1024, Megabyte: 1 / Math.pow(2, 20), Gigabyte: 1 / Math.pow(2, 30), Terrabyte: 1 / Math.pow(2, 40), Petabyte: 1 / Math.pow(2, 50), Exabyte: 1 / Math.pow(2, 60), Zettabyte: 1 / Math.pow(2, 70), Yottabyte: 1 / Math.pow(2, 80) },
    Word: { Bit: 32, Nibble: 8, Byte: 4, Kilobyte: 1 / 256, Megabyte: 1 / Math.pow(2, 18), Gigabyte: 1 / Math.pow(2, 28), Terrabyte: 1 / Math.pow(2, 38), Petabyte: 1 / Math.pow(2, 48), Exabyte: 1 / Math.pow(2, 58), Zettabyte: 1 / Math.pow(2, 68), Yottabyte: 1 / Math.pow(2, 78) },
    Kilobyte: { Bit: Math.pow(2, 13), Nibble: Math.pow(2, 11), Byte: 1024, Word: 256, Megabyte: 1 / 1024, Gigabyte: 1 / Math.pow(2, 20), Terrabyte: 1 / Math.pow(2, 30), Petabyte: 1 / Math.pow(2, 40), Exabyte: 1 / Math.pow(2, 50), Zettabyte: 1 / Math.pow(2, 60), Yottabyte: 1 / Math.pow(2, 70) },
    Megabyte: { Bit: Math.pow(2, 23), Nibble: Math.pow(2, 21), Byte: Math.pow(2, 20), Word: Math.pow(2, 18), Kilobyte: 1024, Gigabyte: 1 / 1024, Terrabyte: 1 / Math.pow(2, 20), Petabyte: 1 / Math.pow(2, 30), Exabyte: 1 / Math.pow(2, 40), Zettabyte: 1 / Math.pow(2, 50), Yottabyte: 1 / Math.pow(2, 60) },
    Gigabyte: { Bit: Math.pow(2, 33), Nibble: Math.pow(2, 31), Byte: Math.pow(2, 30), Word: Math.pow(2, 28), Kilobyte: Math.pow(2, 20), Megabyte: 1024, Terrabyte: 1 / 1024, Petabyte: 1 / Math.pow(2, 20), Exabyte: 1 / Math.pow(2, 30), Zettabyte: 1 / Math.pow(2, 40), Yottabyte: 1 / Math.pow(2, 50) },
    Terrabyte: { Bit: Math.pow(2, 43), Nibble: Math.pow(2, 41), Byte: Math.pow(2, 40), Word: Math.pow(2, 38), Kilobyte: Math.pow(2, 30), Megabyte: Math.pow(2, 20), Gigabyte: 1024, Petabyte: 1 / 1024, Exabyte: 1 / Math.pow(2, 20), Zettabyte: 1 / Math.pow(2, 30), Yottabyte: 1 / Math.pow(2, 40) },
    Petabyte: { Bit: Math.pow(2, 53), Nibble: Math.pow(2, 51), Byte: Math.pow(2, 50), Word: Math.pow(2, 48), Kilobyte: Math.pow(2, 40), Megabyte: Math.pow(2, 30), Gigabyte: Math.pow(2, 20), Terrabyte: 1024, Exabyte: 1 / 1024, Zettabyte: 1 / Math.pow(2, 20), Yottabyte: 1 / Math.pow(2, 30) },
    Exabyte: { Bit: Math.pow(2, 63), Nibble: Math.pow(2, 61), Byte: Math.pow(2, 60), Word: Math.pow(2, 58), Kilobyte: Math.pow(2, 50), Megabyte: Math.pow(2, 40), Gigabyte: Math.pow(2, 30), Terrabyte: Math.pow(2, 20), Petabyte: 1024, Zettabyte: 1 / 1024, Yottabyte: 1 / Math.pow(2, 20) },
    Zettabyte: { Bit: Math.pow(2, 73), Nibble: Math.pow(2, 71), Byte: Math.pow(2, 70), Word: Math.pow(2, 68), Kilobyte: Math.pow(2, 60), Megabyte: Math.pow(2, 50), Gigabyte: Math.pow(2, 40), Terrabyte: Math.pow(2, 30), Petabyte: Math.pow(2, 20), Exabyte: 1024, Yottabyte: 1 / 1024 },
    Yottabyte: { Bit: Math.pow(2, 83), Nibble: Math.pow(2, 81), Byte: Math.pow(2, 80), Word: Math.pow(2, 78), Kilobyte: Math.pow(2, 70), Megabyte: Math.pow(2, 60), Gigabyte: Math.pow(2, 50), Terrabyte: Math.pow(2, 40), Petabyte: Math.pow(2, 30), Exabyte: Math.pow(2, 20), Zettabyte: 1024 },
};

$(".convertBtn").click(function () {

    changeColor(this.id);
});

function changeColor(id) {

    let buttons = document.querySelectorAll(".convertBtn")
    buttons.forEach(function (currentBtn) {

        currentBtn.style.backgroundColor = "#ff7979";
    })

    document.getElementById(id).style.backgroundColor = "#f9ca24";
}


// regex to format numbers by adding commas
function formatNum(num) {
    return num.toString().replace(/^[+-]?\d+/, function (int) {
        return int.replace(/(\d)(?=(\d{3})+$)/g, '$1,');
    });
}


function convert(value, fromUnit, toUnit) {
    if (conversionRatios[fromUnit] && conversionRatios[fromUnit][toUnit]) {
        return value * conversionRatios[fromUnit][toUnit];
    } else {
        throw new Error("Conversion ratio not defined");
    }
}

// function updateConversions(inputValue, fromUnit) {
//     Object.keys(conversionRatios[fromUnit]).forEach(toUnit => {
//         const result = convert(inputValue, fromUnit, toUnit);
//         console.log(conversionRatios[fromUnit])
//         // console.log(`conversion${toUnit}`)
//         // console.log(toUnit)

//         document.getElementById(`conversion${toUnit}`).innerHTML = formatNum(result);
//     });
// }

function updateConversions(inputValue, fromUnit) {
    Object.keys(conversionRatios[fromUnit]).forEach(toUnit => {
        const result = convert(inputValue, fromUnit, toUnit);
        const elementId = `conversion${toUnit}`;
        const element = document.getElementById(elementId);

        console.log(`Attempting to update element with ID: ${elementId}`);

        if (element) {
            console.log(`Updating element with ID: ${elementId}`);
            element.innerHTML = formatNum(result);
        } else {
            console.error(`Element not found for ID: ${elementId}`);
        }
    });
}


// Event handlers
$(".convertBtn").hover(function () {
    const userInput = parseFloat(document.getElementById("conversionInput").value);
    if (!isNaN(userInput)) {
        updateConversions(userInput, this.id);
        console.log(this.id)
        changeColor(this.id);
    }
});

