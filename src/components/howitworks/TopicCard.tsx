import { Link } from "react-router-dom";
import type { Topic } from "./types";

interface TopicCardProps extends Topic {
  onClick?: () => void;
}

export default function TopicCard({ id, icon, title, desc, featured }: TopicCardProps) {
  return (
    <Link
      to={`/how-it-works/${id}`}
      className={`text-left bg-slate-100 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg hover:border-indigo-200 hover:bg-slate-800 hover:text-gray-100 w-full h-full flex flex-col gap-3 no-underline ${
        featured ? "border-2 bg-indigo-100 shadow-sm" : "border border-gray-200"
      }`}
    >
      <div className="w-11 h-11 rounded-full bg-indigo-500 flex items-center justify-center flex-shrink-0">
        <i className={`ti ${icon} text-indigo-100 text-xl`} aria-hidden="true" />
      </div>
      <div>
        <p className="text-sm font-semibold text-inherit mb-1.5 leading-snug">{title}</p>
        <p className="text-[13px] text-inherit leading-relaxed">{desc}</p>
      </div>
    </Link>
  );
}