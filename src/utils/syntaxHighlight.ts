import cheerio from 'cheerio';
import hljs from 'highlight.js';

export const syntaxHighlighter = (innerHTML: string) => {
  const $ = cheerio.load(innerHTML);
  $('pre code').each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });

  const highlightedInnerHTML = $.html();

  return highlightedInnerHTML;
};
