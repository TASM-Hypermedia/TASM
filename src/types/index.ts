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
