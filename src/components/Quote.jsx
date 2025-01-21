import React from "react";

const Quote = () => {
  const quotes = [
    "Success is not final; failure is not fatal: It is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "The only way to do great work is to love what you do.",
    "Dream big and dare to fail.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "Success usually comes to those who are too busy to be looking for it.",
    "Don’t watch the clock; do what it does. Keep going.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "You don’t have to be great to start, but you have to start to be great.",
    "The best way to predict the future is to create it.",
    "Act as if what you do makes a difference. It does.",
    "It always seems impossible until it's done.",
    "Keep your face always toward the sunshine, and shadows will fall behind you.",
    "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart.",
    "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.",
    "Start where you are. Use what you have. Do what you can.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Don’t limit your challenges. Challenge your limits.",
    "Dream it. Believe it. Build it.",
    "Failure is the condiment that gives success its flavor.",
    "Great things never come from comfort zones.",
    "What you get by achieving your goals is not as important as what you become by achieving your goals.",
    "Success doesn’t just find you. You have to go out and get it.",
    "Wake up determined. Go to bed satisfied.",
    "Small progress is still progress.",
    "If you feel like giving up, just look back on how far you are already.",
    "Do what you can, with what you have, where you are.",
    "Don’t stop until you’re proud.",
    "Push yourself, because no one else is going to do it for you.",
    "Doubt kills more dreams than failure ever will.",
    "Discipline is the bridge between goals and accomplishment.",
    "Make each day your masterpiece.",
  ];
  
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

  return (
    <div className="text-center my-8">
      <p className="text-2xl font-bold text-gray-300 italic">
        "{randomQuote}"
      </p>
    </div>
  );
};

export default Quote;
