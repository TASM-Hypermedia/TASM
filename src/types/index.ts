export type Teacher = {
  teacherId: number
  name: string
  image: string
  mantra: string
  activityTags: Array<{ text: string }>
}

export type Activity = {
    title: string,
    image: string,
};

export type Event = {
  title: string,
  eventId : number,
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
