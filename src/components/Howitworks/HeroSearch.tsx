interface HeroSearchProps {
  search: string;
  onSearchChange: (value: string) => void;
}

export default function HeroSearch({ search, onSearchChange }: HeroSearchProps) {
  return (
    <div className="bg-purple-100 rounded-2xl px-8 py-14 text-center mb-8">
      <p className="text-[11px] tracking-widest uppercase text-purple-600 font-medium mb-3">
        How it works
      </p>
      <h2
        className="text-3xl md:text-4xl font-semibold text-purple-950 leading-snug mb-6"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Answers, info, and guidance
        <br className="hidden sm:block" /> from the Alakowe team
      </h2>
      <div className="flex items-center gap-3 bg-white border border-purple-200 rounded-xl px-5 py-3 max-w-xl mx-auto shadow-sm">
        <i className="ti ti-search text-purple-600 text-xl" aria-hidden="true" />
        <input
          type="text"
          placeholder="Search topics..."
          value={search}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onSearchChange(e.target.value)
          }
          className="border-none outline-none text-sm text-gray-800 placeholder-gray-400 bg-transparent w-full"
        />
      </div>
    </div>
  );
}
