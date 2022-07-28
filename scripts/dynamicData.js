const speakerPanel = [
  {
    name: 'Ahri The Fox',
    title: 'Berkman Professor of Intellectual Legal studies at Havard Law School',
    about: 'Benkler studios common based peer production, and published his seminal book The wealth of Networks in 2006',
    backimg: 'img/01.jpg',
  },
  {
    name: 'Annie Fire Child',
    title: 'Berkman Professor of Intellectual Legal studies at Havard Law School',
    about: 'Benkler studios common based peer production, and published his seminal book The wealth of Networks in 2006',
    backimg: 'img/02.jpg',
  },
  {
    name: 'Ashe Snow Piercer',
    title: 'Berkman Professor of Intellectual Legal studies at Havard Law School',
    about: 'Benkler studios common based peer production, and published his seminal book The wealth of Networks in 2006',
    backimg: 'img/03.jpg',
  },
  {
    name: 'Karma of Ionia',
    title: 'Berkman Professor of Intellectual Legal studies at Havard Law School',
    about: 'Benkler studios common based peer production, and published his seminal book The wealth of Networks in 2006',
    backimg: 'img/04.jpg',
  },
  {
    name: 'Zoe Star Child',
    title: 'Berkman Professor of Intellectual Legal studies at Havard Law School',
    about: 'Benkler studios common based peer production, and published his seminal book The wealth of Networks in 2006',
    backimg: 'img/05.jpg',
  },
  {
    name: 'Gwen The Tailor',
    title: 'Berkman Professor of Intellectual Legal studies at Havard Law School',
    about: 'Benkler studios common based peer production, and published his seminal book The wealth of Networks in 2006',
    backimg: 'img/06.jpg',
  },
];

const speakersList = document.querySelector('.card-flex-container');

document.addEventListener('DOMContentLoaded', () => {
  // The data to be loaded
  const dataBank = speakerPanel.map((speaker) => `
<div class="speaker-card">
      <div class="speaker-image-container">
          <img src="img/16.jpeg" alt="checkboard" class="bottom-image">
          <img src="${speaker.backimg}" alt="Ahri" class="top-image">
      </div>
      <div class="speaker-details-container">
          <h2>${speaker.name}</h2>
          <p class="top-paragraph-speakers">
          ${speaker.title}
          </p>
          <span></span>
          <p class="bot-paragraph-speakers">
          ${speaker.about}
          </p>
      </div>
  </div>
`).join('');

  speakersList.innerHTML = dataBank;
});