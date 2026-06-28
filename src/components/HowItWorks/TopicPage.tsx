import { useParams, Link, Navigate } from "react-router-dom";
import { topicContent } from "./TopicContent";
import FAQ from "./FAQ";

export default function TopicPage() {
  const { topicId } = useParams<{ topicId: string }>();
  const topic = topicContent.find((t) => t.id === topicId);

  if (!topic || !topic.sections) return <Navigate to="/" replace />;

  const totalArticles = topic.sections.reduce(
    (sum, s) => sum + s.faqs.length,
    0
  );

  return (
    <section className="w-full py-10 font-sans">
      {/* Back link */}
      <div className="mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-purple-700 font-medium hover:underline no-underline"
        >
          <i className="ti ti-arrow-left text-base" aria-hidden="true" />
          Back to How it works
        </Link>
      </div>

      {/* Topic hero */}
      <div className="bg-purple-100 rounded-2xl px-8 py-12 mb-8">
        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center mb-4 shadow-sm">
          <i className={`ti ${topic.icon} text-purple-700 text-2xl`} aria-hidden="true" />
        </div>
        <p className="text-[11px] tracking-widest uppercase text-purple-600 font-medium mb-2">
          How it works
        </p>
        <h1
          className="text-3xl md:text-4xl font-semibold text-purple-950 leading-snug mb-3"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          {topic.title}
        </h1>
        <p className="text-sm text-purple-800 max-w-xl leading-relaxed">
          {topic.intro}
        </p>
        <p className="text-xs text-purple-500 mt-3">
          {totalArticles} articles in this section
        </p>
      </div>

      {/* Sections */}
      <div className="space-y-8 mb-8">
        {topic.sections.map((section: { heading: string; faqs: { q: string; a: string }[] }) => (
          <div key={section.heading}>
            {/* Sub-section heading */}
            <div className="flex items-center gap-3 mb-3">
              <span className="text-sm font-semibold text-gray-800">
                {section.heading}
              </span>
              <div className="flex-1 h-px bg-gray-200" />
              <span className="text-xs text-gray-400">
                {section.faqs.length} {section.faqs.length === 1 ? "article" : "articles"}
              </span>
            </div>

            {/* FAQs under this sub-section */}
            {section.faqs.map((faq: { q: string; a: string }, i: number) => (
              <FAQ key={i} question={faq.q} answer={faq.a} />
            ))}
          </div>
        ))}
      </div>

      {/* Contact bar */}
      <div className="mt-8 bg-gray-50 border border-gray-200 rounded-xl px-5 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <span className="text-sm text-gray-500 flex items-center gap-2">
          <i className="ti ti-mail text-purple-600 text-base" aria-hidden="true" />
          Still have questions? We&apos;re always here to help.
        </span>
        <a
          href="mailto:thealakowe@gmail.com"
          className="text-sm font-medium text-purple-700 hover:underline"
        >
          thealakowe@gmail.com
        </a>
      </div>
    </section>
  );
}