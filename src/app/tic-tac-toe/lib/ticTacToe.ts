import { useMemo } from "react";

interface UseGameResultProps {
  userScore: number;
  computerScore: number;
  roundLimit?: number;
}

export const useGameResult = ({
  userScore,
  computerScore,
  roundLimit = 10,
}: UseGameResultProps) => {
  const endOfGame = useMemo(
    () => userScore === roundLimit || computerScore === roundLimit,
    [userScore, computerScore, roundLimit]
  );

  const resultMessage = useMemo(() => {
    try {
      if (userScore > roundLimit) {
        throw new Error("User scored higher than round limit.");
      }
      if (computerScore > roundLimit) {
        throw new Error("Computer scored higher than round limit.");
      }

      if (userScore > computerScore) {
        return endOfGame ? "You've won!" : "You're winning";
      }
      if (userScore === computerScore) {
        return endOfGame ? "It's a tie!" : "You're in a draw for now";
      }
      return endOfGame ? "You've lost!" : "You're losing";
    } catch (error) {
      console.error("Game error:", error);
      return "Game cannot continue due to an error.";
    }
  }, [userScore, computerScore, endOfGame, roundLimit]);

  return { resultMessage, endOfGame };
};
