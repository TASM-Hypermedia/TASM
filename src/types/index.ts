export type Teacher = {
  teacherId: number
  name: string
  image: string
  mantra: string
  url: string
  activityTags: Array<{ text: string }>
}

export type ActivityCard = {
  title: string
  shortDescription: string
  image: string
  url: string
  yogaCategory: number
}


export type Activity = {
  title: string
  image: string
  url: string
}

export type Event = {
  title: string
  eventId?: number
  eventImage: string
  hostImage: string
  hostName: string
  date: string
  startTime: string
  endTime: string
  location: string
  url: string
  activityTags: Array<{ text: string }>
}

export type Price = {
  title: string
  subtitle: string
  price: number
  pricingItems: {
    item: string
  }[]
  darkMode: boolean
};

export type Faq = {
  question: string
  answer: string
}

export type YogaCenter = {
  title: string,
  subtitle?: string,
  description?: string,
  imgUrl?: string,
  altDescription?: string,
  imageOnTheRight: boolean
}

export type Room = {
  name: string
  text: string
  urlImage: string
  altDescription: string
  imageOnTheRight: boolean
}

export type ContentCard = {
  title: string
  subtitle?: string
  description?: string
  imgUrl?: string
  altDescription?: string
  imageOnTheRight: boolean
}

// type for a single event page
export interface EventType {
  title: string
  subtitle?: string
  url: string
  mainImageURL: string
  shortDesc: string
  description: string
  infostr: string
  programstr: string
  teachers: Teacher[]
  guest?: {
    name: string
    imageURL: string
    description: string
  }
}

// type for a single activity page
export interface ActivityType {
  title: string
  mainImageURL: string
  description: string
  url: string
  nextLessons: {
    date: string
    time: string
    name: string
    difficulty: string
  }[]
  teachers: Teacher[]
  info: {
    name: string
    description: string
  }[][]
  images: {
    URL: string
    alt: string
  }[]
}

export type  ResponseData = {
  yogaCenter: YogaCenter,
  activities: Activity[],
  events: Event[],
  teachers: Teacher[],
}