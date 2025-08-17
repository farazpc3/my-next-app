import { userResultMessage, userScore, computerScore } from '@/app/tic-tac-toe/lib/ticTacToe'

export default function scoreboard() {
  return (
    <div className="scoreboard">
      <h2>{userResultMessage}!</h2>
      <ul>
        <li>User Score: {userScore}</li>
        <li>Computer Score: {computerScore}</li>
      </ul>
    <div/>
  );
}
