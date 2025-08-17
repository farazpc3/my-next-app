"use client";

import { useState, ReactNode } from "react";
import { Skull, Gauge, Angry, Smile } from "lucide-react";

type Difficulty = {
  value: number;
  label: string;
  icon: ReactNode;
};

const difficulties: Difficulty[] = [
  {
    value: 0,
    label: "Easy",
    icon: <Smile className="w-6 h-6 text-green-500" />,
  },
  {
    value: 1,
    label: "Normal",
    icon: <Gauge className="w-6 h-6 text-yellow-500" />,
  },
  {
    value: 2,
    label: "Hard",
    icon: <Angry className="w-6 h-6 text-orange-500" />,
  },
  {
    value: 3,
    label: "Brutal",
    icon: <Skull className="w-6 h-6 text-red-600" />,
  },
];

export default function DifficultySlider() {
  const [level, setLevel] = useState(1);

  return (
    <div className="flex flex-col items-center gap-4 w-full max-w-md mx-auto p-6">
      <h2 className="text-xl font-bold">Select Difficulty</h2>

      {/* Slider */}
      <input
        type="range"
        min={0}
        max={difficulties.length - 1}
        value={level}
        onChange={(e) => setLevel(Number(e.target.value))}
        className="w-full cursor-pointer accent-red-600"
      />

      {/* Display selected difficulty */}
      <div className="flex items-center gap-2">
        {difficulties[level].icon}
        <span className="text-lg font-medium">{difficulties[level].label}</span>
      </div>
    </div>
  );
}
