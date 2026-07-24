import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

/*
 * MathText renders text containing KaTeX formulas ($$...$$, $...$, or \(...\))
 * as well as HTML elements like <u> (underlined text).
 * Uses \displaystyle and CSS scaling so nested fractions & exponents render large and clear.
 */
export default function MathText({ text, className }) {
  if (!text) return null;

  // 1. Preprocess: replace raw 'squart' typo with '\sqrt' if present
  let processedText = String(text).replace(/squart/gi, '\\sqrt');

  // Match $$...$$, $...$, or \(...\)
  const mathRegex = /(\$\$.*?\$\$|\$.*?\$|\\\(.*?\\\))/g;

  // If there are no math delimiters ($$, $, \() but string contains \sqrt or \frac, wrap in $$...$$
  if (!/\$\$|\$|\\\(/.test(processedText)) {
    if (processedText.includes('\\sqrt') || processedText.includes('\\frac')) {
      processedText = `$$${processedText.trim()}$$`;
    }
  }

  const parts = processedText.split(mathRegex);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        let formula = null;
        let isDisplay = false;

        if (part.startsWith('$$') && part.endsWith('$$')) {
          formula = part.slice(2, -2);
        } else if (part.startsWith('$') && part.endsWith('$')) {
          formula = part.slice(1, -1);
        } else if (part.startsWith('\\(') && part.endsWith('\\)')) {
          formula = part.slice(2, -2);
        }

        if (formula !== null) {
          // Remove any stray '$' characters inside formula
          formula = formula.replace(/\$/g, '').trim();

          if (formula) {
            try {
              // Force \displaystyle so fractions & square roots render large and clear
              const formulaToRender = '\\displaystyle ' + formula;
              const html = katex.renderToString(formulaToRender, {
                throwOnError: false,
                displayMode: isDisplay,
              });
              return (
                <span
                  key={index}
                  className="math-formula-rendered"
                  dangerouslySetInnerHTML={{ __html: html }}
                />
              );
            } catch (err) {
              return <span key={index}>{part}</span>;
            }
          }
        }

        // Render non-math text, supporting HTML tags like <u>, <b>, <i>
        if (/<[a-z][\s\S]*>/i.test(part)) {
          return (
            <span
              key={index}
              dangerouslySetInnerHTML={{ __html: part }}
            />
          );
        }

        return <span key={index}>{part}</span>;
      })}
    </span>
  );
}

