import React, { useState, useEffect } from "react";
import "./index.css";

/*
const Quote = () => (
  <div className="quote-area">
    <h1>Daily Inspiration</h1>
    <button type="button" id="js-new-quote" className="new-quote button">
      Inspire me!
    </button>
    <div className="quote-text" id="js-quote-text">
      <p>This is a placeholder quote</p>
    </div>
  </div>
);
*/

const Quote = () => {
  const [quotes, setQuotes] = useState("");

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        let randomNum = Math.floor(Math.random() * data.length);
        setQuotes(data[randomNum]);
      });
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <div className="quote-area">
      <div className="quotes">
        <h1 className="inspFont">Daily Inspiration</h1>
        <button className="inspireBtn" onClick={getQuote}>
          Inspire me
        </button>
        <p className="quoteFont">{quotes.text}</p>
        <p className="quoteFont">- {quotes.author}</p>
      </div>
    </div>
  );
};

export default Quote;
