import { Link } from "react-router-dom";
import type { Topic } from "./types";

interface TopicCardProps extends Topic {
  onClick?: () => void;
}

export default function TopicCard({ id, icon, title, desc, featured }: TopicCardProps) {
  return (
    <Link
      to={`/how-it-works/${id}`}
      className={`text-left bg-white rounded-2xl p-6 transition-all hover:shadow-md hover:border-purple-300 w-full h-full flex flex-col gap-3 no-underline ${
        featured ? "border-2 border-purple-600 shadow-sm" : "border border-gray-200"
      }`}
    >
      <div className="w-11 h-11 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
        <i className={`ti ${icon} text-purple-700 text-xl`} aria-hidden="true" />
      </div>
      <div>
        <p className="text-sm font-semibold text-gray-900 mb-1.5 leading-snug">{title}</p>
        <p className="text-[13px] text-gray-500 leading-relaxed">{desc}</p>
      </div>
    </Link>
  );
}