import React from "react";
import { faqs } from "../../../constants/faqs";
const Faqs = () => {
  return (
    <>
      {faqs.map((faq) => {
        return (
          <div>
            <details className="group">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium ">
                <span>Q. {faq.question}</span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                {faq.answer}
              </p>
            </details>
          </div>
        );
      })}
    </>
  );
};

export default Faqs;
