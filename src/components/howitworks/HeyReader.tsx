export default function HeyReader() {
  return (
    <div className="mb-8 h-full bg-slate-100 px-8 py-14 pb-28 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1">
      <h1
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          Hey Reader,
        </h1>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-2">
          You've found our How it Works page!
        </p>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-2">
          If you are new here, or just trying to understand how everything
          works, you're in the right place. We have put this together to guide
          you through buying, selling, delivery, payments, and everything in
          between. Take your time, explore, and you'll find what you need.
        </p>
        <p className="text-sm md:text-base text-gray-600 leading-relaxed mb-8">
          And if something still isn't clear, we're always here to help.
        </p>
    </div>
  );
}