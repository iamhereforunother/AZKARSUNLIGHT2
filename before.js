let currentPage = 1;

const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const pageNumber = document.getElementById('pageNumber');
const content = document.getElementById('content');

const pages = [
  {
    arabic: "الحمدُ للهِ الَّذِي أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُورُ",
    transcription: "Аль-хамду ли-Лляхи ллязи ахйа-на баʻда ма амата-на ва иляй-хи н-нушур",
    translation: "Вся хвала Аллаху, Который оживил нас после того, как умертвил нас, и к Которому мы вернёмся после воскрешения."
  },
  {
    arabic: " - ",
    transcription: "Ля иляха илля Ллаху вахда-ху ля шарика ля-ху. Ля-ху ль-мульку, ва ля-ху ль-хамду, ва хуа 'аля кулли шай'ин кадир. Субхана Ллахи валь-хамду ли-Лляхи ва ля иляха илля Ллаху ва-Ллаху акбару, ва ля хауля ва ля куввата илля би-Лляхи ль-'Алиййи ль-'Азым. <br> Рабби гфир ли!",
    translation: "Нет бога, достойного поклонения, кроме одного лишь Аллаха, у Которого нет сотоварища. Ему принадлежит власть; хвала Ему — Он всё может. Пречист Аллах, хвала Аллаху, нет бога, кроме Аллаха, Аллах велик и нет мощи и силы ни у кого, кроме Аллаха, Высокого, Великого. Господь мой, прости меня!
      "Если человек проснётся ночью и произнесет эти слова - будет ему прощено, если же он обратится к Аллау с какой-нибудь иной мольбой, то на мольбу его будет дан ответ, если же он совершит омовение и помолится, то молитва его будет принята."
  },
  {
    arabic: " - ",
    transcription: " - ",
    translation: " - "
  },
];

function updateContent() {
  const page = pages[currentPage - 1];
  document.querySelector('.arabic').textContent = page.arabic;
  document.querySelector('.transcription').textContent = page.transcription;
  document.querySelector('.translation').textContent = page.translation;
  pageNumber.textContent = currentPage;
}

prevBtn.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    updateContent();
  }
});

nextBtn.addEventListener('click', () => {
  if (currentPage < pages.length) {
    currentPage++;
    updateContent();
  }
});

// Initialize with the first page
updateContent();
