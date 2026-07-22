import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

/*
 * MathText renders text containing KaTeX formulas ($$...$$ or \(...\))
 * Uses \displaystyle and CSS scaling so nested fractions & exponents render large and clear.
 */
export default function MathText({ text, className }) {
  if (!text) return null;

  const parts = text.split(/(\$\$.*?\$\$|\\\(.*?\\\))/g);

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
            // Force \displaystyle so inner fractions like \frac{\frac{a}{b}}{\frac{c}{d}} remain large and legible
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

        return <span key={index}>{part}</span>;
      })}
    </span>
  );
}
