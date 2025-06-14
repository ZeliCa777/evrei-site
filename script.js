document.querySelectorAll('nav button').forEach(btn => {
  btn.addEventListener('click', () => {
    loadBook(btn.dataset.book);
  });
});

async function loadBook(book) {
  const res = await fetch(`data/${book}.json`);
  const data = await res.json();
  const sec = document.getElementById('verseSection');
  sec.innerHTML = '';
  data.verses.forEach(v => {
    const div = document.createElement('div');
    div.className = 'verse';
    div.innerHTML = `<strong>${v.number}. </strong>${v.text}
                     <div class="comment">${v.comment}</div>
                     <div class="qa">
                       <h4>Въпрос:</h4><p>${v.question}</p>
                       <h4>Отговор:</h4><p>${v.answer}</p>
                     </div>`;
    sec.appendChild(div);
  });
}

loadBook('genesis');
