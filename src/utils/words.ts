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

export const exactlyThreeMatches = (
  words: string[],
  answers: AnswersData[]
): boolean => {
  for (const answer of answers) {
    let matchCount = 0;
    for (let i = 0; i < 4; i++)
      if (words[i] === answer.members[i]) matchCount++;
    console.log(matchCount);
    if (matchCount === 3) return true;
  }
  return false;
};
