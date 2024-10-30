const quote = document.querySelector("#quote");
const author = document.querySelector("#author");
const button = document.querySelector("#button");
const random = () => Math.floor(Math.random() * quotes.length);

const quotes = [
    { quote: "The only limit to our realization of tomorrow is our doubts of today.", author: "Franklin D. Roosevelt" },
    { quote: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { quote: "Do not wait for leaders; do it alone, person to person.", author: "Mother Teresa" },
    { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.", author: "Martin Luther King Jr." },
    { quote: "Happiness is not something ready-made. It comes from your own actions.", author: "Dalai Lama" },
    { quote: "If you look at what you have in life, you'll always have more.", author: "Oprah Winfrey" },
    { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", author: "Ralph Waldo Emerson" },
    { quote: "Be kind whenever possible. It is always possible.", author: "Dalai Lama" },
    { quote: "The best way to predict the future is to create it.", author: "Peter Drucker" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "If you can dream it, you can do it.", author: "Walt Disney" },
    { quote: "The purpose of life is not to be happy. It is to be useful, to be honorable, to be compassionate.", author: "Ralph Waldo Emerson" },
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "Act as if what you do makes a difference. It does.", author: "William James" },
    { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", author: "Ralph Waldo Emerson" },
    { quote: "Don't watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { quote: "Keep your face always toward the sunshine—and shadows will fall behind you.", author: "Walt Whitman" },
    { quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
    { quote: "If you want to lift yourself up, lift up someone else.", author: "Booker T. Washington" },
    { quote: "When you arise in the morning, think of what a precious privilege it is to be alive.", author: "Marcus Aurelius" },
    { quote: "The secret of getting ahead is getting started.", author: "Mark Twain" },
    { quote: "The journey of a thousand miles begins with one step.", author: "Lao Tzu" },
    { quote: "The best revenge is massive success.", author: "Frank Sinatra" },
    { quote: "What we think, we become.", author: "Buddha" },
    { quote: "Life isn't about waiting for the storm to pass; it's about learning to dance in the rain.", author: "Vivian Greene" },
    { quote: "The only impossible journey is the one you never begin.", author: "Tony Robbins" },
    { quote: "Our lives begin to end the day we become silent about things that matter.", author: "Martin Luther King Jr." },
    { quote: "You only live once, but if you do it right, once is enough.", author: "Mae West" },
    { quote: "Whether you think you can or you think you can't, you're right.", author: "Henry Ford" },
    { quote: "It does not matter how slowly you go as long as you do not stop.", author: "Confucius" },
    { quote: "What you get by achieving your goals is not as important as what you become by achieving your goals.", author: "Zig Ziglar" },
    { quote: "The best and most beautiful things in the world cannot be seen or even touched—they must be felt with the heart.", author: "Helen Keller" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { quote: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
    { quote: "Success is not how high you have climbed, but how you make a positive difference to the world.", author: "Roy T. Bennett" },
    { quote: "Don't count the days, make the days count.", author: "Muhammad Ali" },
    { quote: "The future belongs to those who prepare for it today.", author: "Malcolm X" },
    { quote: "I find that the harder I work, the more luck I seem to have.", author: "Thomas Jefferson" },
    { quote: "You miss 100% of the shots you don't take.", author: "Wayne Gretzky" },
    { quote: "Success usually comes to those who are too busy to be looking for it.", author: "Henry David Thoreau" },
    { quote: "It is our choices that show what we truly are, far more than our abilities.", author: "J.K. Rowling" },
    { quote: "If you're going through hell, keep going.", author: "Winston Churchill" },
    { quote: "The successful warrior is the average man, with laser-like focus.", author: "Bruce Lee" },
    { quote: "Opportunities don't happen. You create them.", author: "Chris Grosser" },
    { quote: "Success is walking from failure to failure with no loss of enthusiasm.", author: "Winston Churchill" },
    { quote: "I attribute my success to this: I never gave or took any excuse.", author: "Florence Nightingale" },
    { quote: "The road to success and the road to failure are almost exactly the same.", author: "Colin R. Davis" },
    { quote: "Dream big and dare to fail.", author: "Norman Vaughan" }
];

button.addEventListener("click", () => {
    const index = random();
    quote.textContent = quotes[index]['quote'];
    author.textContent = quotes[index]['author'];
})