function importAll(r) {
  return r.keys().map(r);
}

const images = importAll(require.context('../images/partners', false, /\.(png|jpe?g|svg)$/));

const imageSrc = images.map((image) => image);

const defaultPartners = [
  {
    title: 'Партнер 1',
  },
  {
    title: 'Партнер 2',
  },
  {
    title: 'Партнер 3',
  },
  {
    title: 'Партнер 4',
  },
  {
    title: 'Партнер 5',
  },
  {
    title: 'Партнер 6',
  },
  {
    title: 'Партнер 7',
  },
];

/*добавляю к масиву картинки*/
export const partnersList = defaultPartners.map((partner, index) => {
  const newPartner = { ...partner, image: imageSrc[index] };
  return newPartner;
});