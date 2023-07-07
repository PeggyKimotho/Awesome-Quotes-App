    document.addEventListener('DOMContentLoaded', () => {

    const the_quote = document.getElementById('the-quote')
    const author = document.getElementById('author')
    const new_quote= document.getElementById('new-quote')
    const add_your_comment = document.getElementById('add-your-comment')
    const commentInput = document.getElementById('comment-input');
    const commentList = document.getElementById('comment-list');
    const likeButton = document.getElementById('like-button');
    const form = document.getElementById('create-quote');
    const inputBox = document.getElementById('my-quotes');
    const quotes = document.getElementById('quotes');
    

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

    function addComment(e) {
        e.preventDefault();

        const comment = commentInput.value.trim();
        if (comment !== '') {
          const newComment = document.createElement('li');
          newComment.innerText = comment;
          commentList.appendChild(newComment);
          commentInput.value = '';
        }
      }
      
      
      add_your_comment.addEventListener('submit', addComment);



      function toggleHeart() {
        likeButton.classList.toggle('clicked');
      }
      

    likeButton.addEventListener('click', toggleHeart);
    

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

