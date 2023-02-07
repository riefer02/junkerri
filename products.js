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
};

export default process.env.NODE_ENV !== "production"
  ? products.development
  : products.production;
