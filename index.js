    document.addEventListener('DOMContentLoaded', () => {

    const the_quote = document.getElementById('the-quote')
    const author = document.getElementById('author')
    const new_quote= document.getElementById('new-quote')
    const commentButton = document.getElementById('comment-button');
    const commentInput = document.getElementById('comment-input');
    const commentList = document.getElementById('comment-list');

    // To display a random quote when the page loads.

    function displayRandomQuote() {
        fetch('https://api.quotable.io/random')
        .then(response => response.json())
        .then(data => {
            the_quote.innerHTML = data.content;
            author.innerHTML = data.author;
        });
    }
    
    displayRandomQuote();

    new_quote.addEventListener('click', displayRandomQuote);

    function addComment() {
        const comment = commentInput.value.trim();
        if (comment !== '') {
          const newComment = document.createElement('li');
          newComment.innerText = comment;
          commentList.appendChild(newComment);
          commentInput.value = '';
        }
      }
      
      commentButton.addEventListener('click', addComment);
    






    const form = document.getElementById('create-quote');
    const inputBox = document.getElementById('new-quote');
    const quotes = document.getElementById('quotes');

  function addQuote(e) {
    e.preventDefault();

      let li = document.createElement('li');
      li.textContent = inputBox.value;
      quotes.appendChild(li);
      let span = document.createElement('span');
      span.textContent = '   x';
      li.appendChild(span); 
      inputBox.value = "";
    
  }
  form.addEventListener('submit', addQuote)

  quotes.addEventListener('click', (e) => {
    e.target.parentElement.remove();
  })

})
