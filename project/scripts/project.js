const currentyear = document.querySelector("#currentyear");
currentyear.textContent = new Date().getFullYear();

const lastModified = document.lastModified;
document.querySelector("#lastModified").textContent = lastModified;

const frecuencies = [
    {
        id: "daily",
        name: "Daily"
    },

    {
        id: "weekly",
        name: "Weekly"
    },

    {
        id: "monthly",
        name: "Monthly"
    },

    {
        id: "rarely",
        name: "Rarely"
    }
];

const selectElement = document.querySelector("#frecuency");
frecuencies.forEach(frecuency => {
    let option = document.createElement("option");
    option.value = frecuency.id;
    option.textContent = frecuency.name;
    selectElement.appendChild(option)
});


const styles = [
    {
        id: "attacker",
        name: "Attacker 🔥"
    },

    {
        id: "defender",
        name: "Defender 🛡️"
    },

    {
        id: "allround",
        name: "All-rounder ⚖️"
    },

    {
        id: "spinner",
        name: "SSpinner 🎢",
    },
    {
        id: "casual",
        name: "Casual 😎"
    }
];

const selectOption = document.querySelector("#style");
styles.forEach(style => {
    let option = document.createElement("option");
    option.value = style.id;
    option.textContent = style.name;
    selectOption.appendChild(option)
});

const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
    event.preventDefault();
    const freq = document.querySelector("#frecuency").value;
    const style = document.querySelector("#style").value;
    const username = document.querySelector("#username").value;

    let extraMessage = "";
    if (freq === "daily") {
        extraMessage = "Wow, you play every day! 🏆";
    } else if (freq === "weekly") {
        extraMessage = "Nice! Weekly practice keeps you sharp. 💪";
    } else if (freq === "monthly") {
        extraMessage = "Monthly games are a fun way to stay connected. 🎉";
    } else if (freq === "rarely") {
        extraMessage = "Even rare matches can be exciting! ✨";
    }

    const message = `Hello ${username}! You play ping pong ${freq} as a ${style}. ${extraMessage}`;

    alert(message);

    const surveyResult = {
        username: username,
        frequency: freq,
        style: style
    };

    localStorage.setItem("surveyResult", JSON.stringify(surveyResult));

});
