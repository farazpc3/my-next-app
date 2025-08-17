import { useState } from "react";
import DifficultySlider from "@/app/tic-tac-toe/components/ui/Slider";
import { motion } from "framer-motion";
import { Skull, Flame, Angry, Meh, Smile } from "lucide-react";
import { ReactElement } from "react";

const difficultyIcons: Record<number, ReactElement> = {
  1: <Smile className="w-8 h-8 text-green-500" />,
  2: <Meh className="w-8 h-8 text-lime-500" />,
  3: <Angry className="w-8 h-8 text-yellow-500" />,
  4: <Flame className="w-8 h-8 text-red-600" />,
  5: <Skull className="w-8 h-8 text-black" />,
};

export default function DifficultySelector() {
  const [difficulty, setDifficulty] = useState(1);

  return (
    <div className="flex flex-col items-center gap-4 p-6 rounded-2xl shadow-lg bg-neutral-100 dark:bg-neutral-900 w-full max-w-md">
      <h2 className="text-xl font-bold">Select Difficulty</h2>

      {/* Icon that reacts */}
      <motion.div
        key={difficulty}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200 }}
      >
        {difficultyIcons[difficulty]}
      </motion.div>

      {/* Slider */}
      <DifficultySlider />

      <p className="font-medium">
        {["Easy", "Normal", "Hard", "Insane", "Brutal"][difficulty - 1]}
      </p>
    </div>
  );
}
