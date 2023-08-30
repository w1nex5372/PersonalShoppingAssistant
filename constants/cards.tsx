
interface Card {
  img: string;
  title: string;
}

interface Cards {
  [key: string]: Card;
}

const cards: Cards = {
  card: {
    img: "cardsImages/archery.png",
    title: "Activewear",
  },
  card2: {
      img: "cardsImages/archery.png",
    title: "Matching Sets",
  },
  card3: {
      img: "cardsImages/archery.png",
    title: "Accessories",
  },
  card4: {
    img: "cardsImages/archery.png",
    title: "Sweats & Hoodies",
  },
  card5: {
      img: "cardsImages/archery.png",
    title: "Rompers",
  },
  card6: {
      img: "cardsImages/archery.png",
    title: "Shoes",
  },
  card7: {
      img: "cardsImages/archery.png",
    title: "Handbags",
  },
};

export default cards;
