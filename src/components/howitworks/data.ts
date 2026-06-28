import type { Topic, FaqItem } from "./types";

export const topics: Topic[] = [

  {
    id: "buying",
    icon: "ti-book",
    title: "Buying on Alakowe",
    desc: "Ordering & Payment, Delivery & Tracking, Receiving Your Book, Requests & Discovery.",
  },
  {
    id: "selling",
    icon: "ti-tag",
    title: "Selling on Alakowe",
    desc: "Listing Your Book, Drop-off & Pickup, Payment & Earnings, Managing Your Listings.",
    featured: true,
  },
  {
    id: "bookstore",
    icon: "ti-store",
    title: "Your Bookstore",
    desc: "Your personal space where all your listed books live. Free and no setup required.",
  },
  {
    id: "availability",
    icon: "ti-toggle-right",
    title: "Availability & Control",
    desc: "Managing availability, pausing your listings, and best practices.",
  },
  {
    id: "disputes",
    icon: "ti-scale",
    title: "Disputes & Protection",
    desc: "Buyer protection, seller protection, and how we protect both sides.",
  },
  {
    id: "listings",
    icon: "ti-list-check",
    title: "Listings & Guidelines",
    desc: "What You Can Sell, Book Conditions, Listing Standards, Photography Tips.",
  },
  {
    id: "general",
    icon: "ti-help-circle",
    title: "General Help",
    desc: "Payments & Safety, Community, and Support.",
  },
  {
    id: "faqs",
    icon: "ti-message-circle-question",
    title: "Other Questions (FAQs)",
    desc: "What if my book doesn't sell? Can I sell from outside Lagos? And more.",
  },
];

export const faqs: FaqItem[] = [
  {
    q: "How do I buy a book?",
    a: "Finding and buying a book on Alákòwé is simple. Browse by title, author, or category. Click a book to see details, condition, and seller notes. Add to cart and pay securely. Once payment is confirmed, the seller is notified. The seller sends the book, we inspect it, and deliver it to you.",
  },
  {
    q: "Is my payment safe?",
    a: "Yes. Your payment is held securely. The seller is only paid after you confirm delivery and you are satisfied with your purchase. This ensures you receive the correct book and the condition matches what was listed.",
  },
  {
    q: "How do I list a book?",
    a: "Listing on Alákòwé is straightforward. Add title, condition, price, photos, and any important note. Submit for review. Once approved, your book goes live.",
  },
  {
    q: "How does delivery work?",
    a: "Lagos: 3 to 7 working days (excluding weekends). Other states: 5 to 8 working days (excluding weekends).",
  },
  {
    q: "What if something is wrong with my order?",
    a: "Go to My Purchases → Track Order → Report Issue within 12 hours. Upload photos of the issue with the book and explain. Valid reasons: Wrong book, Wrong edition, Condition much worse. Not valid: Change of mind, Minor wear already stated.",
  },
  {
    q: "What is My Bookstore?",
    a: "One of the nicest things about Alakowe is this feature. Once your book is approved, you automatically have your own bookstore. This is your personal space where all your listed books live. Anyone can visit it, browse your books, and buy from you. You don't need money or any setup to create a store.",
  },
  {
    q: "When do I get paid?",
    a: "Once the buyer pays, the money is held securely by Alakowe. You can always check your expected earnings under \"My Earnings.\" When the buyer receives the book and confirms delivery, your payment is released within 12 hours.",
  },
  {
    q: "What if my book doesn't sell?",
    a: "That's okay. You can adjust your price, update your description, or leave it listed. There's no penalty for keeping your book on the platform.",
  },
];
