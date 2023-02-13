const quote = document.getElementById('quote');

const refresh = document.getElementById('refresh');

const getQuote = () => {
    fetch('https://api.quotable.io/random')
    .then((reponse) => reponse.json())
    .then((data) => {
        quote.innerHTML = data.content;
    });
};

refresh.addEventListener('click', () => getQuote());
getQuote();