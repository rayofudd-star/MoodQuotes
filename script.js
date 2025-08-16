// Sample set of quotes categorized by emotions
const quotes = {
    happy: [
        "Happiness is not something ready made. It comes from your own actions. - Dalai Lama",
        "For every minute you are angry you lose sixty seconds of happiness. - Ralph Waldo Emerson",
        "Happiness depends upon ourselves. - Aristotle",
        "Happiness is not something ready made. It comes from your own actions. — Dalai Lama",
        "For every minute you are angry, you lose sixty seconds of happiness. — Ralph Waldo Emerson",
        "Be happy for this moment. This moment is your life. — Omar Khayyam",
        "The purpose of our lives is to be happy. — Dalai Lama",
        "Happiness is the secret to all beauty. There is no beauty without happiness. — Christian Dior",
        "Count your age by friends, not years. Count your life by smiles, not tears.—  John Lennon",
        "Think of all the beauty still left around you and be happy. — Anne Frank",
        "Happiness depends upon ourselves. — Aristotle",
        "The only joy in the world is to begin. — Cesare Pavese",
        "Success is not the key to happiness. Happiness is the key to success. — Albert Schweitzer"
        
    ],
    sad: [
        "Sadness is but a wall between two gardens. - Kahlil Gibran",
        "The pain you feel today is the strength you feel tomorrow. - Unknown",
        "Tears come from the heart and not from the brain. - Leonardo da Vinci",
        “Stars can’t shine without darkness.”,
        “This too shall pass. Pain is temporary, but growth is permanent.”,
         “Even the darkest night will end, and the sun will rise. – Victor Hugo",
         “Every adversity, every heartbreak, carries with it the seed of an equal or greater benefit.– Napoleon Hill",
         “You never know how strong you are, until being strong is your only choice. – Bob Marley",
         “Sadness gives depth. Happiness gives height. Sadness gives roots. Happiness gives branches. Both are needed. – Osho"
        
    ],
    angry: [
        "Anger is one letter short of danger. - Eleanor Roosevelt",
        "The greatest remedy for anger is delay. - Lucius Annaeus Seneca",
        "Anger is a momentary madness, so control your passion or it will control you. - G. M. Trevelyan"
    ],
    inspired: [
        "The best way to predict the future is to create it. - Peter Drucker",
        "Inspiration exists, but it has to find you working. - Pablo Picasso",
        "The only way to do great work is to love what you do. - Steve Jobs"
    ],
    confident: [
        "Confidence is preparation. Everything else is beyond your control. - Richard Kline",
        "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. - Christian D. Larson",
        "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer"
    ],
    anxious: [
        "Do not anticipate trouble, or worry about what may never happen. Keep in the sunlight. - Benjamin Franklin",
        "Anxiety is a thin stream of fear trickling through the mind. If encouraged, it cuts a channel into which all other thoughts are drained. - Arthur Somers Roche",
        "Nothing in the affairs of men is worthy of great anxiety. - Plato"
    ],
    hopeful: [
        "Hope is being able to see that there is light despite all of the darkness. - Desmond Tutu",
        "The darkest hour has only sixty minutes. - Morris Mandel",
        "Hope is a waking dream. - Aristotle"
    ]
};

// Function to display the quote
function getQuote(emotion) {
    const quoteArray = quotes[emotion];
    const randomQuote = quoteArray[Math.floor(Math.random() * quoteArray.length)];
    
    const quoteDisplay = document.getElementById("quote");

    // Add fade-out effect before displaying the new quote
    quoteDisplay.classList.add("fade-out");
    setTimeout(() => {
        quoteDisplay.innerText = randomQuote;
        quoteDisplay.classList.remove("fade-out");
    }, 500);
}

