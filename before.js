let currentPage = 1;

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageNumber = document.getElementById('pageNumber');

const pages = [
  {
    arabic: "الحمدُ للهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
    transcription: "Аль-хамду ли-Лляхи ллязи ахйа-на баʻда ма амата-на ва иляй-хи н-нушур",
    translation: "Вся хвала Аллаху, Который оживил нас после того, как умертвил нас, и к Которому мы вернёмся после воскрешения."
  },
  {
    arabic: "لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ",
    transcription: "Ля иляха илля Ллаху вахдаху ля шарика ляху. Ля-ху ль-мульку, ва ля-ху ль-хамду, ва хуа 'аля кулли шай'ин кадир. Субхана Ллахи валь-хамду ли-Лляхи ва ля иляха илля Ллаху ва-Ллаху акбару, ва ля хауля ва ля куввата илля би-Лляхи ль-'Алиййи ль-'Азым. <br> Рабби гфир ли!",
    translation: "Нет бога, достойного поклонения, кроме одного лишь Аллаха, у Которого нет сотоварища. Ему принадлежит власть; хвала Ему — Он всё может. Пречист Аллах, хвала Аллаху, нет бога, кроме Аллаха, Аллах велик и нет мощи и силы ни у кого, кроме Аллаха, Высокого, Великого. Господь мой, прости меня!<br> <br>
"Если человек проснётся ночью и произнесет эти слова - будет ему прощено, если же он обратится к Аллау с какой-нибудь иной мольбой, то на мольбу его будет дан ответ, если же он совершит омовение и помолится, то молитва его будет принята."</div>
  },
  {
    arabic: " - ",
    transcription: " - ",
    translation: " - "
  },
];

function updateContent() {
  const page = pages[currentPage - 1];
  document.querySelector('.arabic').textContent = page.arabic;  // Используем textContent для арабского текста
  document.querySelector('.transcription').innerHTML = page.transcription; // Используем innerHTML для транскрипции с тегами <br>
  document.querySelector('.translation').innerHTML = page.translation; // Используем innerHTML для перевода с тегами <br>
  pageNumber.textContent = `№${currentPage}`; // Обновляем номер страницы
}

prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {  // Если текущая страница больше 1, уменьшаем номер страницы
    currentPage--;
    updateContent();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < pages.length) {  // Если текущая страница меньше длины массива страниц, увеличиваем номер страницы
    currentPage++;
    updateContent();
  }
});

// Initialize with the first page
updateContent();
