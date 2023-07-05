document.addEventListener('DOMContentLoaded' , () => {
    const btn = document.getElementById('btn')

    function getQuote(){

    fetch('https://api.quotable.io/quotes')
    .then(response => response.json())
    .then(data => {

    }) 
    }
    btn.addEventListener('click', getQuote)






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

