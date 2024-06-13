export interface AnswersData {
  level: number;
  group: string;
  members: string[];
}

interface DataEntry {
  id: number;
  date: string;
  answers: AnswersData[];
}

export const getAllDates = (data: DataEntry[]): string[] => {
  const datesSet = new Set<string>();
  data.forEach((entry) => {
    datesSet.add(entry.date);
  });

  return Array.from(datesSet);
};

export const getDataForDate = (
  data: DataEntry[],
  date: string
): DataEntry | undefined => {
  return data.find((entry) => entry.date === date);
};
