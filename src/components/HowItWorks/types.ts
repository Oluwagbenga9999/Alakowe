export interface Topic {
  id: string;
  icon: string;
  title: string;
  intro: string;
  sections: SubSection[];
  featured?: boolean;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface SubSection {
  heading: string;
  faqs: FaqItem[];
}

export interface TopicContent {
  id: string;
  title: string;
  icon: string;
  intro: string;
  sections: SubSection[];
}