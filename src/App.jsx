// AnimationPlayground.jsx
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { animations } from "./utils/animations"; // ✅ import from your file

export default function AnimationPlayground() {
  const [cards, setCards] = useState([1, 2, 3]);
  const [animation, setAnimation] = useState("scale");

  const addCard = () => {
    setCards((prev) => [...prev, prev.length + 1]);
  };

  const removeCard = (id) => {
    setCards((prev) => prev.filter((c) => c !== id));
  };

  return (
    <div className="p-6">
      <div className="flex gap-4 mb-4">
        <button
          onClick={addCard}
          className="px-4 py-2 bg-blue-500 text-white rounded-lg"
        >
          Add Card
        </button>

        <select
          value={animation}
          onChange={(e) => setAnimation(e.target.value)}
          className="px-3 py-2 border rounded-lg"
        >
          {Object.keys(animations).map((key) => (
            <option key={key} value={key}>
              {key.charAt(0).toUpperCase() + key.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <motion.div layout className="grid grid-cols-3 gap-4">
        <AnimatePresence>
          {cards.map((id) => (
            <motion.div
              key={id}
              layout
              initial={animations[animation].initial}
              animate={animations[animation].animate}
              exit={animations[animation].exit}
              transition={{
                ...animations[animation].transition,
                layout: { duration: 0.3, ease: "easeInOut" },
              }}
              className="p-6 bg-[bisque] rounded-xl shadow-lg cursor-pointer"
              onClick={() => removeCard(id)}
            >
              Card {id}
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
