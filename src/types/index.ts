export type Teacher = {
  TeacherId: number,
    Name: string,
    MainImageURL: string,
    Mantra: string,
    ActivityTags: Array<{ text: string }>,
};

export type Activity = {
    Title: string,
    MainImageURL: string,
};

export type Price = {
  title: string,
  price: number,
  pricingItems?: Array<{ text: string }>,
  darkMode: boolean,
};

export type Faq = {
  question: string,
  answer: string,
};