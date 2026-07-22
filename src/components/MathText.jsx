import React from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css';

/*
 * MathText component renders text containing KaTeX formulas like $$...$$
 * into beautifully formatted mathematical equations.
 */
export default function MathText({ text, className }) {
  if (!text) return null;

  // Split text by $$...$$ or \(...\) delimiters
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
            const html = katex.renderToString(formula, {
              throwOnError: false,
              displayMode: isDisplay,
            });
            return (
              <span
                key={index}
                dangerouslySetInnerHTML={{ __html: html }}
                style={{ padding: '0 2px', display: 'inline-inline' }}
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
