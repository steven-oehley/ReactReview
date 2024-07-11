import { v4 as uuidv4 } from "uuid";

const FeedbackData = [
  {
    id: uuidv4(),
    rating: 10,
    text: "React is like a magical unicorn that sprinkles joy on my code. Every time I use hooks, I feel like I'm hacking the Matrix. 10/10 would debug again.",
  },
  {
    id: uuidv4(),
    rating: 9,
    text: "I love React! It's like the Swiss Army knife of web development. Just wish it had a 'make coffee' hook. 9/10, would recommend but bring your own caffeine.",
  },
  {
    id: uuidv4(),
    rating: 8,
    text: "React is amazing, but using it with Redux sometimes feels like training a dragon. Powerful, but oh boy, does it breathe fire on my patience. 8/10, keep your fire extinguisher handy.",
  },
  {
    id: uuidv4(),
    rating: 7,
    text: "React is like a best friend who occasionally borrows your stuff and forgets to return it. Great to hang out with, but the missing pieces can drive you nuts. 7/10, still my buddy though.",
  },
  {
    id: uuidv4(),
    rating: 6,
    text: "React and I have a love-hate relationship. It's like dating a supermodel who insists you learn quantum physics. 6/10, she's gorgeous but my brain hurts.",
  },
];

export default FeedbackData;
