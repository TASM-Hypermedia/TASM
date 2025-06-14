export type Teacher = {
  teacherId: number
  name: string
  image: string
  mantra: string
  activityTags: Array<{ text: string }>
}

export type Activity = {
  title: string
  image: string
}

export type Event = {
  title: string
  eventId: number
  eventImage: string
  hostImage: string
  hostName: string
  date: string
  startTime: string
  endTime: string
  location: string
  activityTags: Array<{ text: string }>
}

export type Price = {
  title: string,
  subtitle?: string,
  price: number,
  pricingItems?: Array<{ Item: string }>,
  darkMode: boolean,
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
  highlights: {
     highlightEvents: Event[],
     highlightActivities: Activity[]
  }
}