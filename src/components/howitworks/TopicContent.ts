import type { TopicContent } from "./types";

export const topicContent: TopicContent[] = [
  {
    id: "buying",
    title: "Buying on Alakowe",
    icon: "ti-book",
    intro: "Everything you need to know about finding, paying for, and receiving books on Alakowe.",
    sections: [
      {
        heading: "Ordering & Payment",
        faqs: [
          {
            q: "How do I buy a book?",
            a: "Finding and buying a book on Alákòwé is simple. Browse by title, author, or category. Click a book to see details, condition, and seller notes. Add to cart and pay securely. Once payment is confirmed, the seller is notified. The seller sends the book, we inspect it, and deliver it to you.",
          },
          {
            q: "What happens after I pay?",
            a: "Your order appears under \"My Purchases\" and you can track every stage. Behind the scenes: the seller is notified, the seller sends the book within 48 hours, the book comes to Alákòwé, we inspect and deliver it to you.",
          },
          {
            q: "Is my payment safe?",
            a: "Yes. Your payment is held securely. The seller is only paid after you confirm delivery and you are satisfied with your purchase. This ensures you receive the correct book and the condition matches what was listed.",
          },
          {
            q: "When does the seller get paid?",
            a: "After you confirm delivery.",
          },
          {
            q: "Can I buy multiple books at once?",
            a: "Yes. You can add multiple books and check out once. Even from different sellers, we combine them into one delivery so it's cheaper and more convenient for you.",
          },
        ],
      },
      {
        heading: "Delivery & Tracking",
        faqs: [
          {
            q: "How does delivery work?",
            a: "Lagos: 3 to 7 working days (excluding weekends). Other states: 5 to 8 working days (excluding weekends).",
          },
          {
            q: "Will I receive all my books together?",
            a: "Yes. Orders from multiple sellers are combined into one delivery.",
          },
          {
            q: "Can I track my order?",
            a: "Yes. Go to My Purchases → Track Order.",
          },
        ],
      },
      {
        heading: "Receiving Your Book",
        faqs: [
          {
            q: "What happens when my book arrives?",
            a: "Open and check immediately. If someone receives it for you, ask them to check.",
          },
          {
            q: "How do I confirm delivery?",
            a: "Go to My Purchases → Track Order → Confirm Delivery, then select \"Satisfied\".",
          },
          {
            q: "What if something is wrong?",
            a: "Go to My Purchases → Track Order → Report Issue within 12 hours. Upload photos of the issue with the book and explain. Valid reasons: Wrong book, Wrong edition, Condition much worse. Not valid: Change of mind, Minor wear already stated.",
          },
          {
            q: "What if my book is damaged during delivery?",
            a: "Report within 12 hours with photos. We will review the case and resolve it fairly. You will not be held responsible for damage caused during delivery.",
          },
          {
            q: "What if I miss the 12-hour window?",
            a: "We assume the order was received in good condition and the transaction will be completed. If something serious comes up after that, you can still reach out, and we'll do our best to guide you.",
          },
          {
            q: "Can someone else receive my delivery?",
            a: "Yes, just make sure they can check the book when it arrives and confirm delivery on your behalf as soon as it is received.",
          },
          {
            q: "What should I expect from a used book?",
            a: "Books are pre-loved and may show light wear, creases, or notes. We encourage you to read the condition and description carefully before buying.",
          },
        ],
      },
      {
        heading: "Requests & Discovery",
        faqs: [
          {
            q: "Can I request a book?",
            a: "Yes. Use \"Request a Book\". Search and join an existing request if someone already raised a request for the book or create a new one if no one has. You'll be notified when it becomes available.",
          },
        ],
      },
      {
        heading: "Other Buying Questions",
        faqs: [
          {
            q: "Can I cancel an order?",
            a: "If you need to cancel, contact us as soon as possible. Cancellation depends on how far the order has gone in the process.",
          },
          {
            q: "Can I talk to the seller directly?",
            a: "For now, communication is handled through the platform. This helps us keep transactions safe, clear, properly tracked and for safety.",
          },
        ],
      },
    ],
  },
  {
    id: "selling",
    title: "Selling on Alakowe",
    icon: "ti-tag",
    intro: "Everything you need to know about listing your books, sending them out, and getting paid.",
    sections: [
      {
        heading: "Listing Your Book",
        faqs: [
          {
            q: "How do I list a book?",
            a: "Listing on Alákòwé is straightforward. Add title, condition, price, photos, and any important note. Submit for review. Once approved, your book goes live.",
          },
          {
            q: "Can I edit my listing?",
            a: "Yes, you can update your listing anytime.",
          },
          {
            q: "What if my book is not approved?",
            a: "We'll let you know why. You can make the suggested changes and submit again.",
          },
        ],
      },
      {
        heading: "After Listing",
        faqs: [
          {
            q: "What happens after listing?",
            a: "Your book is reviewed for quality. Once approved, it becomes visible to buyers.",
          },
          {
            q: "How long does approval take?",
            a: "Within 24 hours.",
          },
        ],
      },
      {
        heading: "When Your Book Sells",
        faqs: [
          {
            q: "What happens when my book sells?",
            a: "You'll get an email, notification, and sometimes a call.",
          },
          {
            q: "What should I do next?",
            a: "Go to My Sales → Track Order. Status will show \"Awaiting seller action\". Click on it and choose Drop-off (free) or Pickup (paid).",
          },
        ],
      },
      {
        heading: "Drop-off & Pickup",
        faqs: [
          {
            q: "How does delivery work?",
            a: "Seller → Collection centre → Alákòwé → Buyer.",
          },
          {
            q: "How does drop-off work?",
            a: "Choose the Speedaf collection centre closest to you from the list of location options you are shown. Take your book there within 48 hours (excluding Sundays). When you get there, tell them it's for Alakowe and they will scan and package the book in your presence. Before you leave, make sure you collect your tracking number. Then go back to \"My Sales\" → Track Order, change the status from \"Drop-off scheduled\" to \"Dropped off\", and enter your tracking number. The whole process usually takes less than 10 minutes.",
          },
          {
            q: "Do I need to package my book?",
            a: "No, you don't need to worry about packaging. When you get to the collection centre, they will handle scanning and packaging for you.",
          },
          {
            q: "How does pickup work?",
            a: "Instead of Drop off, select \"Request pickup\". Enter your address and details. A logistics partner will come to collect your book within 48 hours (excluding weekends).",
          },
          {
            q: "Is pickup free?",
            a: "No, a convenience fee applies. Once your book is picked up, you're done. Alakowe handles the rest.",
          },
          {
            q: "What happens after drop-off or pickup?",
            a: "The book comes to us. We inspect and deliver it to the buyer. You can track everything.",
          },
          {
            q: "What if I don't send my book on time?",
            a: "You are expected to send out books within the required time (48 working hours). If there is a delay, we follow up with you. If necessary, the order may be cancelled and the buyer will be refunded if the order cannot be fulfilled.",
          },
        ],
      },
      {
        heading: "Payment & Earnings",
        faqs: [
          {
            q: "When do I get paid?",
            a: "Once the buyer pays, the money is held securely by Alakowe. You can always check your expected earnings under \"My Earnings.\" When the buyer receives the book and confirms delivery, your payment is released within 12 hours.",
          },
          {
            q: "How do I get paid?",
            a: "Your payment goes straight to your bank account.",
          },
        ],
      },
      {
        heading: "Managing Your Listings",
        faqs: [
          {
            q: "Where can I see my books?",
            a: "Your books live inside your account. My Listings — you can view or edit your listed books. My Requests — you can view books you have requested for.",
          },
          {
            q: "Where do I track sales?",
            a: "My Sales → you can manage sold books and track them.",
          },
        ],
      },
    ],
  },
  {
    id: "bookstore",
    title: "Your Bookstore",
    icon: "ti-store",
    intro: "Your own personal space on Alakowe where all your listed books live.",
    sections: [
      {
        heading: "What is My Bookstore?",
        faqs: [
          {
            q: "What is My Bookstore?",
            a: "One of the nicest things about Alakowe is this feature. Once your book is approved, you automatically have your own bookstore. This is your personal space where all your listed books live. Anyone can visit it, browse your books, and buy from you. You don't need money or any setup to create a store. Think of it as your own little corner of Alákòwé.",
          },
          {
            q: "Do I need to pay for it?",
            a: "No. It is free to have a bookstore on Alakowe.",
          },
          {
            q: "How do I find My Bookstore link?",
            a: "Go to your account, click \"My Listings\", and you'll see your store link.",
          },
          {
            q: "What can I do with it?",
            a: "You can share your link anywhere — on WhatsApp, on your social media, with friends. Anyone who opens your link can see all the books you've listed.",
          },
        ],
      },
    ],
  },
  {
    id: "availability",
    title: "Availability & Control",
    icon: "ti-toggle-right",
    intro: "Manage when your listings are visible to buyers and keep the experience smooth.",
    sections: [
      {
        heading: "Managing Availability",
        faqs: [
          {
            q: "How do I pause my listings?",
            a: "You can temporarily pause your listings so buyers don't place orders while you are away. Go to your account, open \"My Listings\", and turn on \"I am unavailable\".",
          },
          {
            q: "What happens when I turn it on?",
            a: "Once this is on, your listings will not be visible to buyers and no new orders can be placed on your books.",
          },
          {
            q: "How do I turn it off?",
            a: "When you're back, simply turn it off. Your listings will become visible again, and buyers can continue to find and purchase your books.",
          },
        ],
      },
      {
        heading: "Best Practices",
        faqs: [
          {
            q: "When should I pause my listings?",
            a: "We encourage you to turn this on if you are traveling, you are not in town, or you are unavailable to drop off books.",
          },
          {
            q: "Why is it important to manage availability?",
            a: "This helps keep the experience smooth for buyers and avoids delays.",
          },
        ],
      },
    ],
  },
  {
    id: "disputes",
    title: "Disputes & Protection",
    icon: "ti-scale",
    intro: "How we protect both buyers and sellers, and how disputes are handled fairly.",
    sections: [
      {
        heading: "Buyer Protection",
        faqs: [
          {
            q: "What should I do if something is wrong with my order?",
            a: "Go to My Purchases → Track Order → Confirm Delivery and choose \"Report an Issue\" within 12 hours. Upload clear photos and explain the problem. You can also return the book through the same courier at the point of delivery if possible.",
          },
          {
            q: "What issues are valid?",
            a: "Wrong book, Wrong edition, Poor condition.",
          },
          {
            q: "What issues are not valid?",
            a: "Change of mind, Minor wear.",
          },
        ],
      },
      {
        heading: "Seller Protection",
        faqs: [
          {
            q: "What happens if a buyer complains?",
            a: "We review everything carefully. We look at the original listing, the photos and description, the book itself, and the buyer's report.",
          },
          {
            q: "What if my listing was accurate?",
            a: "If the book matches what was shown and described, the transaction continues as expected and the seller is paid.",
          },
          {
            q: "What if there is a small issue?",
            a: "If there is a small difference — a small detail that was not clearly shown or described — we may offer a partial refund. The buyer keeps the book and the seller receives adjusted payment.",
          },
          {
            q: "What if it's a major issue?",
            a: "If the book is clearly not what was described, the order may be cancelled, the book may be returned, the buyer will be refunded, and the seller will not be paid for that order and will be advised on how to retrieve the book from the buyer.",
          },
        ],
      },
      {
        heading: "How We Protect Both Sides",
        faqs: [
          {
            q: "How does Alakowe protect both sides?",
            a: "At Alakowe, we believe a simple thing: What you see should be what you receive. Every book goes through two checks — first when we receive it from the seller, then when the buyer confirms delivery. This helps us make sure that books move between people exactly as they were presented.",
          },
          {
            q: "What happens before a book is sent out?",
            a: "When a seller sends a book to us, we take a moment to look at it closely. We compare it with the listing — the condition selected, the photos shared, and the description written. If everything matches, we move forward and send it to the buyer.",
          },
          {
            q: "What if the book doesn't match the listing?",
            a: "If we notice a clear difference between the book and the listing, the order may not go forward, the buyer will be refunded, and the book will be held back. The seller will be contacted and guided on the next step, including how to retrieve the book or have it returned.",
          },
        ],
      },
    ],
  },
  {
    id: "listings",
    title: "Listings & Guidelines",
    icon: "ti-list-check",
    intro: "What you can sell, how to grade your book's condition, and tips for great listings.",
    sections: [
      {
        heading: "What You Can Sell",
        faqs: [
          {
            q: "What can I sell?",
            a: "We accept a wide range of books, as long as they are in readable condition and honestly described. We accept: Fiction (literary, romance, thriller, fantasy, sci-fi, YA, and more), Non-fiction (self-help, business, biography, history, science, politics), Academic books (secondary school and university level textbooks only), Children's books (children's reading books only, not school books that have been written on). Mature or adult content books can be listed, but must be clearly stated in the description.",
          },
          {
            q: "What can I not sell?",
            a: "We do not accept: Books that promote hate, violence, or illegal activity, Extremist or offensive material, Any content that is not suitable for a general reading community, Pirated or photocopied books, Damaged books that are not in readable conditions.",
          },
        ],
      },
      {
        heading: "Book Conditions",
        faqs: [
          {
            q: "What does \"New (Unread)\" mean?",
            a: "Pristine and unused. No marks, no writing, no highlighting. No creases or folds. Pages are clean and fresh. Binding is perfect. (Original packaging is not required.)",
          },
          {
            q: "What does \"Like New\" mean?",
            a: "Almost new, with very little sign of use. Very light wear on cover or edges. No writing or highlighting inside. Pages are clean. Binding is intact and strong.",
          },
          {
            q: "What does \"Very Good\" mean?",
            a: "Clearly used, but well kept. Light creases or small signs of use. Pages are intact. May contain light highlighting or small notes. Cover may show minor wear. This is where most well-kept second-hand books fall.",
          },
          {
            q: "What does \"Good\" mean?",
            a: "Used, but still in solid reading condition. Noticeable wear on cover or edges. Pages may be slightly yellowed. May contain highlighting, notes, or writing. All pages are present and readable.",
          },
          {
            q: "What does \"Fair\" mean?",
            a: "Heavily used, but still readable. Visible wear (scuffed cover, bent corners). Yellowed pages. Writing or markings present. Binding may be slightly loose but not falling apart.",
          },
        ],
      },
      {
        heading: "Listing Standards",
        faqs: [
          {
            q: "Why is honesty important when listing?",
            a: "Honesty helps us make sure that books move between people exactly as they were presented.",
          },
          {
            q: "What happens if my book does not match the listing?",
            a: "If your book does not match the listing or does not meet our standards, it will not be sent to the buyer and the order may be cancelled. You will be contacted with next steps, including how to retrieve your book or have it returned.",
          },
        ],
      },
      {
        heading: "Photography Tips",
        faqs: [
          {
            q: "How should I take photos of my book?",
            a: "Use natural or good lighting. Show front and back cover. Include spine or inside pages if needed. Avoid blurry or dark images.",
          },
          {
            q: "Is a good listing photo that important?",
            a: "Yes. Good photos help your book sell faster and help build trust with buyers.",
          },
        ],
      },
    ],
  },
  {
    id: "general",
    title: "General Help",
    icon: "ti-help-circle",
    intro: "Payments, safety, community, and how to get in touch with us.",
    sections: [
      {
        heading: "Payments & Safety",
        faqs: [
          {
            q: "Is Alakowe safe to use?",
            a: "Yes, Alakowe is safe to use for both sellers and buyers.",
          },
          {
            q: "How does escrow protection work?",
            a: "Every transaction on Alakowe is handled with care. When a buyer makes payment, the money is held safely. The seller is only paid after the book is delivered and confirmed.",
          },
        ],
      },
      {
        heading: "Community",
        faqs: [
          {
            q: "What is the Alakowe community?",
            a: "Alákòwé is more than a marketplace. It's a growing reading community where books keep moving, from one reader to another. A book you've finished might be exactly what someone else needs next. On Alakowe, books move from one reader to another and allow readers to discover books through others.",
          },
          {
            q: "What is a love note?",
            a: "Alakowe allows a personal note from a seller to the next reader. This can be added when listing a book as a seller. Every person who views your book sees this. The note is written and added to the book when we send it to the buyer.",
          },
        ],
      },
      {
        heading: "Support",
        faqs: [
          {
            q: "How do I contact support?",
            a: "If you ever need help, we're here. You can reach us at thealakowe@gmail.com or through the contact page on the site. We're available to support you before, during, and after every order.",
          },
        ],
      },
    ],
  },
  {
    id: "faqs",
    title: "Other Questions (FAQs)",
    icon: "ti-message-circle-question",
    intro: "More questions answered — everything else you might want to know.",
    sections: [
      {
        heading: "Other Questions",
        faqs: [
          {
            q: "What if my book doesn't sell?",
            a: "That's okay. You can adjust your price, update your description, or leave it listed. There's no penalty for keeping your book on the platform.",
          },
          {
            q: "Can I sell from outside Lagos?",
            a: "Yes, you can sell from the Southwest states (Lagos, Oyo, Osun, Ekiti, Ogun and Ondo states). We're gradually expanding to cover more areas.",
          },
          {
            q: "What happens if a seller doesn't send the book?",
            a: "If the seller does not fulfil the order, your payment will not be released. You will be refunded.",
          },
          {
            q: "What if a buyer doesn't confirm delivery?",
            a: "We monitor delivery status. If we don't see an update from the buyer, we assume that everything with the delivery is fine and release payment to the seller after 12 hours.",
          },
          {
            q: "Can I remove my book after listing?",
            a: "Yes, you can. If your book hasn't been sold yet, you can remove it anytime from your listings. If it has already been ordered, you'll need to complete that order.",
          },
          {
            q: "What happens if I enter the wrong address?",
            a: "Contact us immediately. Changes may be limited after shipping.",
          },
          {
            q: "What if a seller never updates \"Dropped Off\"?",
            a: "If a seller does not send the book within the required time, we follow up with them. If there is no response, the order may be cancelled and the buyer will be refunded.",
          },
          {
            q: "What happens if my book does not pass inspection?",
            a: "If your book does not match the listing or does not meet our standards, it will not be sent to the buyer and the order may be cancelled. You will be contacted with next steps, including how to retrieve your book or have it returned.",
          },
        ],
      },
    ],
  },
];