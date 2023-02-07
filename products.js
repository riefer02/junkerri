const products = {
  development: [
    {
      id: "price_1MUHhrKDgRurOd7XxvaL3k9g",
      name: "Abandoned Attraction",
      price: 3500,
      currency: "USD",
      image: "/art/abandoned-attraction.jpg",
      rating: {
        count: 85,
        rate: 4.5,
      },
    },
    {
      id: "price_1MWmvDKDgRurOd7Xp4GtsZxy",
      name: "Transformers",
      price: 3500,
      currency: "USD",
      image: "/art/transformers.jpg",
      rating: {
        count: 85,
        rate: 4.5,
      },
    },
    {
      id: "price_1MWmupKDgRurOd7XgokBdVWL",
      name: "Forsaken Magic",
      price: 3500,
      currency: "USD",
      image: "/art/forsaken-magic.jpg",
      rating: {
        count: 137,
        rate: 4.5,
      },
    },
    {
      id: "price_1MWmtwKDgRurOd7X22avXwdd",
      name: "Wistful Whispers",
      price: 3500,
      currency: "USD",
      image: "/art/wistful-whispers.jpg",
      rating: {
        count: 85,
        rate: 4.5,
      },
    },
  ],
  production: [
    {
      id: "price_1MYgmgKDgRurOd7XyDJBzREp",
      name: "Abandoned Attraction",
      price: 3500,
      currency: "USD",
      image: "/art/abandoned-attraction.jpg",
      rating: {
        count: 85,
        rate: 4.5,
      },
    },
    {
      id: "price_1MYgnwKDgRurOd7XbmZo2gqE",
      name: "Transformers",
      price: 3500,
      currency: "USD",
      image: "/art/transformers.jpg",
      rating: {
        count: 85,
        rate: 4.5,
      },
    },
    {
      id: "price_1MYgohKDgRurOd7XUZ89Nr7d",
      name: "Forsaken Magic",
      price: 3500,
      currency: "USD",
      image: "/art/forsaken-magic.jpg",
      rating: {
        count: 137,
        rate: 4.5,
      },
    },
    {
      id: "price_1MYgpSKDgRurOd7XOuJ07e5N",
      name: "Wistful Whispers",
      price: 3500,
      currency: "USD",
      image: "/art/wistful-whispers.jpg",
      rating: {
        count: 85,
        rate: 4.5,
      },
    },
    {
      id: "price_1MYwdeKDgRurOd7XaUJ75YVv",
      name: "After Hours",
      price: 3500,
      currency: "USD",
      image: "/art/after-hours.jpg",
      rating: {
        count: 85,
        rate: 4.5,
      },
    },
     {
      id: "price_1MYwf0KDgRurOd7XBm6haIlp",
      name: "Interlude",
      price: 3500,
      currency: "USD",
      image: "/art/interlude.jpg",
      rating: {
        count: 85,
        rate: 4.5,
      },
    },
     {
      id: "price_1MYwfgKDgRurOd7X9xmajQtl",
      name: "Flat Feelings",
      price: 3500,
      currency: "USD",
      image: "/art/flat-feelings.jpg",
      rating: {
        count: 85,
        rate: 4.5,
      },
    },
     {
      id: "price_1MYwgSKDgRurOd7XbQNUfMfa",
      name: "Love and Death",
      price: 3500,
      currency: "USD",
      image: "/art/love-and-death.jpg",
      rating: {
        count: 85,
        rate: 4.5,
      },
    },
  ],
};

export default process.env.NODE_ENV !== "production"
  ? products.development
  : products.production;
