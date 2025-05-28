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

export type Event ={
  title: string,
  eventImage: string,
  hostImage: string,
  hostName: string,
  date: string,
  startTime: string,
  endTime: string,
  location: string,
  activityTags: Array<{ text: string }>,
};

export type Price = {
  title: string,
  subtitle?: string,
  price: number,
  pricingItems?: Array<{ Item: string }>,
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
