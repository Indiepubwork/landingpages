// ==========================================
// ROSA TYPTESTER - Quiz Logic
// ==========================================

const questions = [
    {
        question: "Dein Kaffee wird kalt, weil du zu lange auf Instagram warst. Deine Reaktion?",
        answers: [
            { text: "Drama! Ich poste eine Story über diesen tragischen Moment in Glitzerrosa-Filter 😭", type: "hotpink" },
            { text: "Naja, passt zum Iced Latte Aesthetic. Sehr Puderrosa von mir. 📸", type: "millennial" },
            { text: "Ich trinke ihn trotzdem und denke über die Vergänglichkeit nach... wie Staubrosa ☕", type: "dusty" },
            { text: "NEUER KAFFEE! JETZT! SCHNELL! ⚡ LEUCHTROSA-ENERGIE!", type: "neon" },
            { text: "Ich atme tief ein und spüre, wie mich innere Ruhe durchflutet 🧘", type: "chaotic" }
        ]
    },
    {
        question: "Welches dieser Rosas spricht dich am meisten an?",
        answers: [
            { text: "Barbiepink - ikonisch, laut, unvergesslich 👑", type: "hotpink" },
            { text: "Marzipanrosa oder Crèmerosa - dezent, aber teuer 🍰", type: "millennial" },
            { text: "Kirschblütenrosa oder Rosenrosa - poetisch und vergänglich 🌸", type: "dusty" },
            { text: "Knallrosa oder Flamingopink - man sieht mich von der ISS 🦩", type: "neon" },
            { text: "Schweinchenrosa oder Bonbonrosa - süß wie ich 🐷", type: "baby" },
            { text: "Baker-Miller Pink - das Rosa, das wissenschaftlich beruhigt 🧠", type: "chaotic" }
        ]
    },
    {
        question: "Jemand klaut dir den Parkplatz, auf den du schon 5 Minuten gewartet hast. Was tust du?",
        answers: [
            { text: "Aussteigen, Haare schwenken in Goldrosa-Schimmer. Die werden schon verstehen.", type: "hotpink" },
            { text: "Innerlich sterben, aber lächeln in Porzellanrosa und weiterfahren 🙃", type: "millennial" },
            { text: "Karma regelt das. Ich fahre weiter und höre Sad-Girl-Playlist in Veilchenrosa-Stimmung.", type: "dusty" },
            { text: "HUPEN. LICHTHUPE. FARBE: GRELLROSA. LAUT.", type: "neon" },
            { text: "Gar kein Problem! Ich parke woanders und summe fröhlich 🌸", type: "baby" },
            { text: "Ich strahle beruhigende Aura aus. Der Dieb entschuldigt sich vermutlich gleich.", type: "chaotic" }
        ]
    },
    {
        question: "Dein Outfit für eine Hochzeit, zu der dein Ex auch eingeladen ist?",
        answers: [
            { text: "Revenge Dress in Rubinrosa. Die Braut wird schon verstehen.", type: "hotpink" },
            { text: "Dezent teuer in Salonrosa. Sieht aus wie 'hab ich gerade im Schrank gefunden'.", type: "millennial" },
            { text: "Romantisch fließend in Altrosa, mit einer versteckten Träne im Augenwinkel.", type: "dusty" },
            { text: "Neonpink. So laut, dass der DJ mich als Dekoration bucht.", type: "neon" },
            { text: "Was Süßes in Blütenrosa mit Blümchen. Ich bin hier für Torte, nicht Drama.", type: "baby" },
            { text: "Korallenpink - elegant aber unterschätzt, wie ich.", type: "chaotic" }
        ]
    },
    {
        question: "Was beschreibt deine Energie am besten?",
        answers: [
            { text: "Einhornrosa: magisch, majestätisch, und ein bisschen unrealistisch ✨", type: "hotpink" },
            { text: "Tüllrosa: leicht, luftig, schwebt quasi durch den Tag 🩰", type: "millennial" },
            { text: "Magnolienrosa: klassisch schön, mit einer tiefen Seele 🌺", type: "dusty" },
            { text: "Partypink: WO IST DIE PARTY? ICH BIN DIE PARTY! 🎉", type: "neon" },
            { text: "Primelrosa: sanft, unaufdringlich, aber trotzdem da 🌷", type: "baby" },
            { text: "Quarzrosa: heilend, kristallin, irgendwie mystisch 💎", type: "chaotic" }
        ]
    },
    {
        question: "Wie würden deine Freunde deinen Tanzstil beschreiben?",
        answers: [
            { text: "Main Character Energy. Alle anderen sind Statisten in meinem Glitzerrosa-Film.", type: "hotpink" },
            { text: "Ironic Dancing in Hautrosa. Aber auch irgendwie gut?", type: "millennial" },
            { text: "Langsam, gefühlvoll, wie ein Hortensienrosa-Blütenblatt im Wind.", type: "dusty" },
            { text: "ALS HÄTTE JEMAND MIR ENERGY DRINKS IN FLAMINGOPINK INS BLUT INJIZIERT.", type: "neon" },
            { text: "Süß und ein bisschen unsicher in Puppenrosa, aber alle finden es cute.", type: "baby" },
            { text: "Meditativ. Ich bewege mich, als würde ich negative Energie austreiben.", type: "chaotic" }
        ]
    },
    {
        question: "Dein ideales Frühstück am Sonntag?",
        answers: [
            { text: "Avocado Toast, aber nur fürs Foto. Danach Pizza vom Vortag. Sehr Lachsrosa.", type: "hotpink" },
            { text: "Etwas in Perlrosa Ästhetik aus einem Café, das ich gegoogelt habe.", type: "millennial" },
            { text: "Croissant und schwarzer Kaffee, während ich aus dem Fenster starre. Eisrosa-Stimmung.", type: "dusty" },
            { text: "Frühstück?! Es ist 14 Uhr und ich wache gerade erst auf! Regenwurmrosa-Energie!", type: "neon" },
            { text: "Pancakes in Herzchenform mit ganz viel Ahornsirup 🥞 Mandelblütenrosa!", type: "baby" },
            { text: "Grüner Smoothie und Meditation. Innen fühle ich mich Lichtrosa.", type: "chaotic" }
        ]
    },
    {
        question: "Jemand sagt dir, Rosa sei 'kindisch'. Deine Antwort?",
        answers: [
            { text: "*lacht in Designer-Handtasche* Sicher, Schatz. *strahlt in Pfingstrosenpink*", type: "hotpink" },
            { text: "Rosa ist literally das neue Schwarz. Google mal Graurosa, Schatz.", type: "millennial" },
            { text: "*seufzt poetisch* Manche verstehen Elfenblumenrosa einfach nicht.", type: "dusty" },
            { text: "UND?! *tanzt aggressiv in Garnelenpink-Leggins davon*", type: "neon" },
            { text: "*blinzelt in Ferkelrosa* Aber... aber es ist so hübsch?", type: "baby" },
            { text: "Wissenschaftlich gesehen beruhigt mein Rosa aggressive Menschen. Du zum Beispiel.", type: "chaotic" }
        ]
    }
];

const results = {
    hotpink: {
        title: "Barbiepink-Ikone",
        emoji: "👑💖",
        color: "#FF69B4",
        colorName: "Barbiepink",
        description: "Du bist der Hauptcharakter und alle anderen sind NPCs in deinem Videospiel namens Leben. Dein Barbiepink schreit 'Ich bin hier!' und flüstert gleichzeitig 'Und ich bin fabelhaft.' Du trinkst wahrscheinlich Champagner zum Frühstück (oder tust zumindest so für die Story).",
        traits: ["Dramatisch", "Iconic", "Unapologetic", "Glitzerrosa-Energie"],
        celebrity: "Dein Seelenverwandter: Paris Hilton mit Einhornrosa-Aura"
    },
    millennial: {
        title: "Puderrosa Trendsetter",
        emoji: "📱✨",
        color: "#F3CFC6",
        colorName: "Puderrosa / Salonrosa",
        description: "Du besitzt mindestens drei Gegenstände in Marzipanrosa, weil sie 'aesthetic' sind, obwohl du sie nie benutzt. Dein Puderrosa ist sophisticated, gedämpft und sagt 'Ich mache das für mich, nicht für die Likes.' (Aber die Likes sind trotzdem nice.)",
        traits: ["Aesthetic", "Porzellanrosa-Vibes", "Self-aware", "Crèmerosa-Eleganz"],
        celebrity: "Dein Spirit Animal: Eine Matcha Latte in Tüllrosa"
    },
    dusty: {
        title: "Altrosa Romantikerin",
        emoji: "🥀💭",
        color: "#D4A5A5",
        colorName: "Altrosa / Staubrosa",
        description: "Du hörst wahrscheinlich gerade Lana Del Rey und starrst aus einem regennassen Fenster. Dein Altrosa (RAL 3014!) hat Tiefe, Geschichte und einen Hauch von beautiful Melancholie. Du schreibst Tagebuch mit Füllfederhalter und findest Tragik... irgendwie schön?",
        traits: ["Romantisch", "Rosenrosa-Seele", "Poetisch", "Veilchenrosa-Stimmung"],
        celebrity: "Deine Vibe: Kirschblütenrosa im Herbstregen"
    },
    neon: {
        title: "Neonpink Partyrakete",
        emoji: "🚀💥",
        color: "#FF6EC7",
        colorName: "Neonpink / Knallrosa / Leuchtrosa",
        description: "Du bist die Person, die um 3 Uhr nachts schreit 'NOCH EINE RUNDE!' und irgendwie IMMER noch Energie hat. Dein Knallrosa leuchtet im Dunkeln (definitiv auch ohne Schwarzlicht). Du bist praktisch ein wandelnder Textmarker in Leuchtrosa.",
        traits: ["Grellrosa", "Wild", "Partypink", "Flamingopink-Energy"],
        celebrity: "Dein Vorbild: Ein Flamingo auf Red Bull in Garnelenpink"
    },
    baby: {
        title: "Kirschblütenrosa Sonnenschein",
        emoji: "🌸🧸",
        color: "#FFD1DC",
        colorName: "Babyrosa / Zartrosa / Blütenrosa",
        description: "Du bist die süßeste Person im Raum und weißt es wahrscheinlich nicht mal. Dein Zartrosa ist sanft wie Apfelblütenrosa, einladend wie Bonbonrosa und gibt allen das Gefühl, dass alles gut wird. Du sammelst wahrscheinlich Plüschtiere in Puppenrosa.",
        traits: ["Elfenblumenrosa", "Mandelblütenrosa", "Optimistisch", "Hortensienrosa-Herz"],
        celebrity: "Dein Spirit Animal: Ein Welpe in Schweinchenrosa"
    },
    chaotic: {
        title: "Baker-Miller Pink Enigma",
        emoji: "🧠💗",
        color: "#FF91AF",
        colorName: "Baker-Miller Pink / Drunk-Tank Pink",
        description: "Interessanter Fakt: Dein Rosa wurde wissenschaftlich bewiesen, aggressives Verhalten zu reduzieren! Du bist so chill, dass Gefängniszellen in deiner Farbe gestrichen werden. Du bist das lebende Äquivalent eines 'Beruhig dich'-Schildes, aber in schön.",
        traits: ["Beruhigend", "Mysteriums", "Wissenschaftlich", "Malvenrosa-Magie"],
        celebrity: "Dein Vorbild: Eine Therapeutin mit Quarzrosa-Kristallen"
    }
};

// State
let currentQuestion = 0;
let scores = {
    hotpink: 0,
    millennial: 0,
    dusty: 0,
    neon: 0,
    baby: 0,
    chaotic: 0
};

// DOM Elements
const heroSection = document.getElementById('hero');
const quizSection = document.getElementById('quiz');
const resultSection = document.getElementById('result');
const startButton = document.getElementById('startQuiz');
const restartButton = document.getElementById('restartQuiz');
const shareButton = document.getElementById('shareResult');
const questionText = document.getElementById('questionText');
const answersContainer = document.getElementById('answers');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');

// Initialize
function init() {
    startButton.addEventListener('click', startQuiz);
    restartButton.addEventListener('click', restartQuiz);
    shareButton.addEventListener('click', shareResult);
    createFloatingHearts();
}

// Create floating hearts
function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    const heartEmojis = ['💕', '💖', '💗', '💓', '💝', '🌸', '✨'];

    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.textContent = heartEmojis[Math.floor(Math.random() * heartEmojis.length)];
        heart.style.cssText = `
            position: absolute;
            font-size: ${Math.random() * 1.5 + 1}rem;
            left: ${Math.random() * 100}%;
            animation: floatHeart ${Math.random() * 15 + 15}s linear infinite;
            animation-delay: ${Math.random() * 20}s;
            opacity: 0.3;
        `;
        container.appendChild(heart);
    }
}

// Start Quiz
function startQuiz() {
    document.body.classList.add('quiz-active');
    heroSection.style.display = 'none';
    quizSection.classList.add('active');
    showQuestion();
}

// Show Question
function showQuestion() {
    const question = questions[currentQuestion];
    questionText.textContent = question.question;

    // Update progress
    const progress = ((currentQuestion + 1) / questions.length) * 100;
    progressFill.style.width = `${progress}%`;
    progressText.textContent = `Frage ${currentQuestion + 1} von ${questions.length}`;

    // Clear and populate answers
    answersContainer.innerHTML = '';

    // Shuffle answers for variety
    const shuffledAnswers = [...question.answers].sort(() => Math.random() - 0.5);

    shuffledAnswers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.className = 'answer-button';
        button.textContent = answer.text;
        button.style.animationDelay = `${index * 0.1}s`;
        button.addEventListener('click', () => selectAnswer(answer.type));
        answersContainer.appendChild(button);
    });
}

// Select Answer
function selectAnswer(type) {
    scores[type]++;

    if (currentQuestion < questions.length - 1) {
        currentQuestion++;

        // Animate transition
        const card = document.getElementById('questionCard');
        card.style.animation = 'none';
        card.offsetHeight; // Trigger reflow
        card.style.animation = 'cardAppear 0.5s ease';

        showQuestion();
    } else {
        showResult();
    }
}

// Show Result
function showResult() {
    quizSection.classList.remove('active');
    resultSection.classList.add('active');

    // Find winning type
    const winningType = Object.keys(scores).reduce((a, b) =>
        scores[a] > scores[b] ? a : b
    );

    const result = results[winningType];

    // Populate result
    document.getElementById('resultEmoji').textContent = result.emoji;
    document.getElementById('resultTitle').textContent = result.title;

    const colorDiv = document.getElementById('resultColor');
    colorDiv.style.backgroundColor = result.color;
    colorDiv.setAttribute('title', result.colorName);

    // Add color name label below the color circle
    let colorLabel = document.getElementById('colorNameLabel');
    if (!colorLabel) {
        colorLabel = document.createElement('p');
        colorLabel.id = 'colorNameLabel';
        colorLabel.className = 'color-name-label';
        colorDiv.parentNode.insertBefore(colorLabel, colorDiv.nextSibling);
    }
    colorLabel.textContent = result.colorName;

    document.getElementById('resultDescription').textContent = result.description;

    // Add traits
    const traitsContainer = document.getElementById('resultTraits');
    traitsContainer.innerHTML = result.traits.map(trait =>
        `<span class="trait-tag">${trait}</span>`
    ).join('');

    // Add celebrity
    document.getElementById('resultCelebrity').textContent = result.celebrity;

    // Confetti!
    createConfetti();
}

// Create Confetti
function createConfetti() {
    const colors = ['#FF69B4', '#FF1493', '#FF00FF', '#FFB6C1', '#FF6EC7', '#FFC1CC'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = `${Math.random() * 100}vw`;
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.width = `${Math.random() * 10 + 5}px`;
            confetti.style.height = confetti.style.width;
            confetti.style.animationDuration = `${Math.random() * 2 + 2}s`;
            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 3000);
        }, i * 50);
    }
}

// Restart Quiz
function restartQuiz() {
    currentQuestion = 0;
    scores = {
        hotpink: 0,
        millennial: 0,
        dusty: 0,
        neon: 0,
        baby: 0,
        chaotic: 0
    };

    resultSection.classList.remove('active');
    quizSection.classList.add('active');
    showQuestion();
}

// Share Result
function shareResult() {
    const winningType = Object.keys(scores).reduce((a, b) =>
        scores[a] > scores[b] ? a : b
    );
    const result = results[winningType];

    const shareText = `Ich bin "${result.title}"! 💖 Welches Rosa passt zu dir? Finde es heraus!`;

    if (navigator.share) {
        navigator.share({
            title: 'Mein Rosa-Typ',
            text: shareText,
            url: window.location.href
        }).catch(() => {
            // Fallback to clipboard
            copyToClipboard(shareText);
        });
    } else {
        copyToClipboard(shareText);
    }
}

// Copy to Clipboard
function copyToClipboard(text) {
    navigator.clipboard.writeText(text + ' ' + window.location.href).then(() => {
        const button = document.getElementById('shareResult');
        const originalText = button.innerHTML;
        button.innerHTML = '<span>✅ Kopiert!</span>';
        setTimeout(() => {
            button.innerHTML = originalText;
        }, 2000);
    });
}

// Start
init();
