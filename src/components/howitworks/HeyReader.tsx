export default function HeyReader() {
  return (
    <div className="mb-8 bg-slate-900 rounded-2xl px-8 py-14 pb-28">
      <h1
        className="text-4xl md:text-5xl font-bold text-gray-100 mb-4"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Hey Reader,
      </h1>
      <p className="text-sm md:text-base text-gray-100 leading-relaxed mb-2">
        You've found our How it Works page!
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 mb-6 mt-16">
        {/* Buyers */}
        <div className="flex gap-4 bg-indigo-50 border border-indigo-100 rounded-2xl p-5">
          <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center flex-shrink-0">
            <i className="ti ti-book text-indigo-100 text-lg" aria-hidden="true" />
          </div>
          <div>
            <p className="text-sm font-semibold text-[#172131] mb-1">If you are new here, or just trying to understand how everything works</p>
            <p className="text-sm text-[#172131] leading-relaxed">
        You're in the right place. We have put this together to guide you
        through buying, selling, delivery, payments, and everything in between.
        Take your time, explore, and you'll find what you need.
            </p>
          </div>
        </div>
      </div>
      <p className="text-sm md:text-base text-gray-100 leading-relaxed">
        And if something still isn't clear, we're always here to help.
      </p>
    </div>
  );
}