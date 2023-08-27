import classes from './RanQuotes.module.css'


const QUOTES = [
    {
      id: 1,
      quote: "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      author: "Jane Austen",
      book: "Pride and Prejudice"
    },
    {
      id: 2,
      quote: "It was the best of times, it was the worst of times.",
      author: "Charles Dickens",
      book: "A Tale of Two Cities"
    },
    {
      id: 3,
      quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
      author: "Ralph Waldo Emerson",
      book: "Self-Reliance"
    },
    {
      id: 4,
      quote: "The only way to do great work is to love what you do.",
      author: "Steve Jobs",
      book: "N/A"
    },
    {
      id: 5,
      quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      author: "Winston Churchill",
      book: "N/A"
    },
    {
      id: 6,
      quote: "Don't watch the clock; do what it does. Keep going.",
      author: "Sam Levenson",
      book: "N/A"
    },
    {
      id: 7,
      quote: "Life is what happens when you're busy making other plans.",
      author: "John Lennon",
      book: "N/A"
    },
    {
      id: 8,
      quote: "The best time to plant a tree was 20 years ago. The second best time is now.",
      author: "Chinese Proverb",
      book: "N/A"
    },
    {
      id: 9,
      quote: "In three words I can sum up everything I've learned about life: it goes on.",
      author: "Robert Frost",
      book: "N/A"
    }
]


const RanQuotes = () => {

    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    const randomQuote = QUOTES[randomIndex];

    return (
    <div className={classes.wrapper} >
        <div className={classes.heading}>Quote of the Day</div>
        <div className={classes.quote}> {randomQuote.quote} </div>
        <div className={classes.author}>{randomQuote.author}-{randomQuote.title}</div>
        <div className={classes.line}>______________</div>
        
        
    </div>
    )
}




export default RanQuotes