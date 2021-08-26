const quotesContainer = document.getElementById("quotes-container");
let quotes = "";

const fetchedQuotes = () => {
  const requestOptions = {
    method: "GET",
  };

  fetch("http://localhost:5000/quotes", requestOptions)
    .then((data) => data.json())
    .then((json) => {
      renderQuotes(json.quotes);
      console.table(json.quotes);
    });
};

const renderQuotes = (fetchedQuotes) => {
  fetchedQuotes.map(({ quote, author }) => {
    quotes += quoteHTML(quote, author) + "\n";
  });
  quotesContainer.innerHTML += quotes;
};

fetchedQuotes();

const quoteHTML = (quote, author) => {
  return `
    <div>
        <q>${quote}</q>
        <small>${author}</small>
    </div>`;
};
