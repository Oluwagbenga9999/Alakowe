import { useState } from "react";

interface FAQProps {
  question: string;
  answer: string;
}

export default function FAQ({ question, answer }: FAQProps) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div
      className={`border rounded-xl mb-2 overflow-hidden transition-colors ${
        open ? "border-purple-200" : "border-gray-200"
      }`}
    >
      <button
        className="w-full flex justify-between items-center px-4 py-3 text-sm font-medium text-gray-900 text-left hover:bg-gray-50 transition-colors gap-2 bg-white"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
      >
        <span>{question}</span>
        <i
          className={`ti ti-plus text-gray-400 text-[15px] flex-shrink-0 transition-transform duration-200 ${
            open ? "rotate-45" : ""
          }`}
          aria-hidden="true"
        />
      </button>
      {open && (
        <div className="px-4 pb-4 pt-3 text-sm text-gray-500 leading-relaxed border-t border-gray-200 bg-gray-50">
          {answer}
        </div>
      )}
    </div>
  );
}
