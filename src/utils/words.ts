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

export const getGuessColours = (
  words: string[],
  answers: AnswersData[]
): string[] => {
  const colours: string[] = [];
  const options = ["yellow", "green", "blue", "purple"];

  for (const word of words)
    for (const answer of answers)
      if (answer.members.includes(word)) colours.push(options[answer.level]);

  return colours;
};

export const exactlyThreeMatches = (
  words: string[],
  answers: AnswersData[]
): boolean => {
  for (const answer of answers)
    if (words.filter((word) => answer.members.includes(word)).length === 3)
      return true;
  return false;
};
