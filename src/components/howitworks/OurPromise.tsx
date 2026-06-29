export default function OurPromise() {
  return (
    <div className="mb-10 bg-slate-900 rounded-2xl px-8 py-14">
      <h2
        className="text-2xl md:text-3xl font-bold text-gray-100 mb-5"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Our Promise to You
      </h2>

      <p className="text-sm md:text-base text-gray-100 leading-relaxed mb-6">
        At Alakowe, we take your trust seriously. Every part of the process,
        from payment to delivery, is designed to make sure your experience
        feels simple, safe, and worth it.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        {/* Buyers */}
        <div className="flex gap-4 bg-indigo-50 border border-indigo-100 rounded-2xl p-5">
          <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center flex-shrink-0">
            <i className="ti ti-book text-indigo-100 text-lg" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#172131] mb-1">If you are buying</p>
            <p className="text-sm text-[#172131] leading-relaxed">
              We make sure you receive the book you paid for, in the condition
              you expect.
            </p>
          </div>
        </div>

        {/* Sellers */}
        <div className="flex gap-4 bg-indigo-50 border border-indigo-100 rounded-2xl p-5">
          <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center flex-shrink-0">
            <i className="ti ti-tag text-indigo-100 text-lg" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#172131] mb-1">If you are selling</p>
            <p className="text-sm text-[#172131] leading-relaxed">
              We make sure you get paid for every book you successfully sell.
            </p>
          </div>
        </div>
      </div>

      <p className="text-sm md:text-base text-gray-100 leading-relaxed">
        And if anything ever feels off, confusing, or not quite right, we want
        to hear from you. We're here to help, every step of the way. So,
        you're never on your own here.
      </p>
    </div>
  );
}