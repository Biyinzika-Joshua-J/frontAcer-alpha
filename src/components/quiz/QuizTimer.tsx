"use client";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Children = ({ remainingTime }: { remainingTime: any }) => {
  const minutes = Math.floor(remainingTime / 60);
  const seconds = remainingTime % 60;

  return `${minutes}:${seconds}`;
};

const QuizTimer = () => (
  <CountdownCircleTimer
    isPlaying
    duration={60}
    colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
    colorsTime={[30, 15, 10, 0]}
    size={60}
    strokeWidth={6}
  >
    {({ remainingTime }) => {
      const minutes = Math.floor(remainingTime / 60);
      const seconds = remainingTime % 60;

      return `${minutes}:${seconds}`;
    }}
  </CountdownCircleTimer>
);

export default QuizTimer;
