// index.js
const apiKey = 'Ve7lWsCziMuKJ1GTx8VsXQ==RcEfYgkXT5BPH1FY';

const fetchQuote = () => {
    const quoteElement = document.getElementById('quote');
    const authorElement = document.getElementById('author'); 
    const category = 'movies';

    $.ajax({
        method: 'GET',
        url: 'https://api.api-ninjas.com/v1/quotes?category=' + category,
        headers: { 'X-Api-Key': apiKey },
        contentType: 'application/json',
        success: function(result) {
            console.log(result);
            quoteElement.innerText = result[0].quote;
            authorElement.innerHTML = `<i>${result[0].author}</i>`; 
        },
        error: function ajaxError(jqXHR) {
            console.error('Error: ', jqXHR.responseText);
        }
    });
};

const markFavorite = () => {
    const quote = document.getElementById('quote').innerText;

    localStorage.setItem('favoriteQuote', quote);
};

const removeFavorite = () => {
    localStorage.removeItem('favoriteQuote');
};
