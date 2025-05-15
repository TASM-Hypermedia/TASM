export type Teacher = {
    name: string,
    image: string,
    mantra: string,
    activityTags: Array<{ text: string }>,
};

export type Activity = {
    title: string,
    image: string,
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

export type ContentCard = {
  title: string,
  subtitle?: string,
  description?: string,
  imgUrl?: string,
  altDescription?: string,
  imageOnTheRight: boolean,
}