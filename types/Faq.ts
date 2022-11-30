export type FaqCategory = {
  question: string;
  answer: string;
};

export type Faq = {
  categoryName: string;
  data: FaqCategory[];
};
