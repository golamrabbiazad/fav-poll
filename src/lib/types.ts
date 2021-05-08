export type Field = {
  question: string;
  answerA: string;
  answerB: string;
};

export type Poll = Field & {
  votesA: number;
  votesB: number;
  id: number;
};
