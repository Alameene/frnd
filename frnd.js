document.getElementById('details-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var enteredName = document.getElementById('friend-name').value.trim().toUpperCase();

    // Valid friend names
    var validNames = [
        "AUNTY KHADEEJAH",
        "AUNTY LADIDI",
        "FAHEEDAH",
        "FATEEMAH",
        "NEE'MAH",
        "NEEMAH",
        "SOBUR",
        "ABDUL KABEER",
        "AISHAH",
        "AGNES",
        "ALAMEEN",
        "AL-AMEEN",
        "AMAKA",
        "ASMAU",
        "AYOMIDE",
        "ZAINAB",
        "BIODUN",
        "BUSHRAT",
        "CHIMAOBI",
        "CHUCKS",
        "DANA",
        "DANIEL",
        "DAVID",
        "MR DAVID",
        "DORRIS",
        "EBUKA",
        "ELIJAH",
        "ELVAN",
        "EMMA",
        "EMMANUEL",
        "ENNY",
        "ENIOLA",
        "ERNEST",
        "EVIDENCE",
        "EZE",
        "SOLOMON",
        "EZEKIEL",
        "FAITH",
        "FARIDAH",
        "FAREEDAH",
        "FATEEMAH",
        "TEEMAH",
        "FATIU",
        "FAVOUR",
        "FAWAZ",
        "FELICIA",
        "ISSAC",
        "FEMI",
        "FLORENCE",
        "FRANK",
        "FRANKLYN",
        "GERALD",
        "GHANIYYAH",
        "GHANIYAH",
        "GOODLUCK",
        "GRACE",
        "HAFSY",
        "HAMZAH",
        "HANNAN",
        "HASSANAH",
        "HAUWA",
        "HEESHA",
        "HONOR",
        "IMTIAZ",
        "JACKSON",
        "JESINTA",
        "JOY",
        "KACHI",
        "KELECHI",
        "KHADEEJAH",
        "KHADEEJAT",
        "KADEEJAH",
        "KADEEJAT",
        "KING",
        "LUCY",
        "MARYAM",
        "MAXWELL",
        "MAYOWA",
        "MARK",
        "MR MARK",
        "MUBARAK",
        "MUDIROH",
        "MUHAMMAD",
        "MUHEEBUDEEN",
        "MUIZ",
        "MUNIROH",
        "MUQADDIM",
        "MUSTAKEEM",
        "MUSTAPHA",
        "OGA KC",
        "ABDUL SALAM",
        "ONAH",
        "PAUL",
        "PAULA",
        "PEACE LOVE",
        "PRECIOUS",
        "ROQEEB",
        "ROSEMARY",
        "RUQAYYAT",
        "JOSHUA",
        "SALEEM",
        "SAMUEL",
        "SAMAD",
        "SEKINAT",
        "SHARORN",
        "SIS ESTHER",
        "ESTHER",
        "SULEIMAN",
        "UJU",
        "YHUSRAH",
        "DESOLA",
        "ZION"
        // Add more names as needed
    ];

    // Check if entered name is valid
    if (!validNames.includes(enteredName)) {
        alert("Sorry, this message is only for our dear friends. Please enter a valid name.");
        return;
    }

    var message = generateBirthdayMessage(enteredName);
    document.getElementById('message').innerHTML = message;
    document.getElementById('form-container').style.display = 'none';
    document.getElementById('card').style.display = 'block';
});

function generateBirthdayMessage(name) {
    // Customize your birthday message here
    return `
        Today, on my special day, I want to take a moment to thank you for being such an amazing friend.
        Your friendship means more to me than words can express. I appreciate your support, laughter, and
        all the wonderful memories we've created together.
        <br><br>
        Thank you for being a part of my journey.
        <br><br>
        With heartfelt gratitude,
        <br>
        ${name}
    `;
}

function playAudio() {
    var audio = document.getElementById('audio');
    audio.play();
}
