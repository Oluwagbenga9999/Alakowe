import { useState } from "react";
import { topics, faqs } from "./data";
import HeyReader from "./HeyReader";
import HeroSearch from "./HeroSearch";
import TopicGrid from "./TopicGrid";
import FAQList from "./FAQList";

export default function HowItWorks() {
  const [search, setSearch] = useState<string>("");

  const filteredFaqs = faqs.filter((f) =>
    f.q.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="w-full py-10 font-sans">      
         <HeyReader />      
      <HeroSearch search={search} onSearchChange={setSearch} />

      {!search && <TopicGrid topics={topics} />}

      <FAQList faqs={filteredFaqs} search={search} />

      {/* Contact bar */}
      <div className="mt-6 bg-slate-900 border border-gray-200 rounded-xl px-5 py-4 mx-16 md:mx-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <span className="text-sm text-gray-500 flex items-center gap-2">
          <i className="ti ti-mail text-indigo-600 text-base" aria-hidden="true" />
          Still have questions? We&apos;re always here to help.
        </span>
        <a
          href="mailto:thealakowe@gmail.com"
          className="text-sm font-medium text-indigo-700 hover:underline"
        >
          thealakowe@gmail.com
        </a>
      </div>
    </section>
  );
}