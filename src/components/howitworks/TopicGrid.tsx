import type { Topic } from "./types";
import TopicCard from "./TopicCard";

interface TopicGridProps {
  topics: Topic[];
}

export default function TopicGrid({ topics }: TopicGridProps) {
  return (
    <div className="mb-6 px-16 md:px-4">
      <p className="text-[11px] tracking-widest uppercase text-gray-400 font-medium mb-3">
        Browse by topic
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {topics.map((topic) => (
          <TopicCard key={topic.id} {...topic} />
        ))}
      </div>
    </div>
  );
}