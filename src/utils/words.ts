import { AnswersData } from "./data";

export const isAnswerCorrect = (
  words: string[],
  answers: AnswersData[]
): AnswersData | null => {
  for (const answer of answers) {
    const correct = answer.members;
    if (JSON.stringify(words) === JSON.stringify(correct)) return answer;
  }
  return null;
};
