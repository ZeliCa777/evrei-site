const nav = document.querySelector('nav');
for (let i = 1; i <= 50; i++) {
  const btn = document.createElement('button');
  btn.textContent = `Глава ${i}`;
  btn.dataset.chapter = i;
  nav.appendChild(btn);
  btn.addEventListener('click', () => loadChapter(i));
}

async function loadChapter(chapterNum) {
  const res = await fetch(`data/genesis-ch${chapterNum}.json`);
  ...
}
