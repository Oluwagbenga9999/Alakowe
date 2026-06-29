import type { FaqItem } from "./types";
import FAQ from "./FAQ";

interface FAQListProps {
  faqs: FaqItem[];
  search: string;
}

export default function FAQList({ faqs, search }: FAQListProps) {
  return (
    <div id="faq-section" className="px-16 md:px-4">
      <p className="text-[11px] tracking-widest uppercase text-slate-900 font-medium mb-3">
        {search ? `Results for "${search}"` : "Most viewed"}
      </p>

      {faqs.length > 0 ? (
        faqs.map((faq, i) => (
          <FAQ key={i} question={faq.q} answer={faq.a} />
        ))
      ) : (
        <div className="text-center py-10 text-sm text-gray-400">
          No results found for &quot;{search}&quot;. Try a different keyword.
        </div>
      )}
    </div>
  );
}
