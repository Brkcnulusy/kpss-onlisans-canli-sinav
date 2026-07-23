import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

/*
 * MathText renders text containing KaTeX formulas ($$...$$ or \(...\))
 * as well as HTML elements like <u> (underlined text).
 * Uses \displaystyle and CSS scaling so nested fractions & exponents render large and clear.
 */
export default function MathText({ text, className }) {
  if (!text) return null;

  // Preprocess: replace raw 'squart' typo with '\sqrt' if present
  let processedText = String(text).replace(/squart/gi, '\\sqrt');

  // Auto-wrap unwrapped \sqrt or \frac math expressions in $$...$$ if missing delimiters
  if (!processedText.includes('$$') && !processedText.includes('\\(')) {
    if (processedText.includes('\\sqrt') || processedText.includes('\\frac')) {
      processedText = `$$${processedText.trim()}$$`;
    }
  }

  const parts = processedText.split(/(\$\$.*?\$\$|\\\(.*?\\\))/g);

  return (
    <span className={className}>
      {parts.map((part, index) => {
        let formula = null;
        let isDisplay = false;

        if (part.startsWith('$$') && part.endsWith('$$')) {
          formula = part.slice(2, -2);
          isDisplay = false;
        } else if (part.startsWith('\\(') && part.endsWith('\\)')) {
          formula = part.slice(2, -2);
          isDisplay = false;
        }

        if (formula !== null) {
          try {
            // Force \displaystyle so inner fractions like \frac{\frac{a}{b}}{\frac{c}{d}} remain large and clear
            const formulaToRender = '\\displaystyle ' + formula.trim();
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

        // Render non-math text, with support for HTML tags like <u>, <b>, <i>
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
