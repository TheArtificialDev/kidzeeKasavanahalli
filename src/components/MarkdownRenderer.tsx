import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  // Simple markdown parser for our specific content structure
  const parseMarkdown = (text: string) => {
    // Split content into lines
    const lines = text.split('\n');
    const elements: React.ReactElement[] = [];
    let currentParagraph: string[] = [];
    let listItems: string[] = [];
    let inList = false;

    const flushParagraph = () => {
      if (currentParagraph.length > 0) {
        const paragraphText = currentParagraph.join(' ').trim();
        if (paragraphText) {
          elements.push(
            <p key={elements.length} className="mb-6 leading-relaxed text-gray-700 text-lg">
              {parseInlineFormatting(paragraphText)}
            </p>
          );
        }
        currentParagraph = [];
      }
    };

    const flushList = () => {
      if (listItems.length > 0) {
        // Check if it's a numbered list by looking at the first item
        const isOrderedList = /^\d+\./.test(lines.find(line => line.trim().match(/^\d+\.\s/)) || '');
        
        if (isOrderedList) {
          elements.push(
            <ol key={elements.length} className="mb-6 ml-6 space-y-2 list-decimal">
              {listItems.map((item, index) => (
                <li key={index} className="text-gray-700 leading-relaxed text-lg">
                  {parseInlineFormatting(item)}
                </li>
              ))}
            </ol>
          );
        } else {
          elements.push(
            <ul key={elements.length} className="mb-6 ml-6 space-y-2">
              {listItems.map((item, index) => (
                <li key={index} className="text-gray-700 leading-relaxed list-disc text-lg">
                  {parseInlineFormatting(item)}
                </li>
              ))}
            </ul>
          );
        }
        listItems = [];
        inList = false;
      }
    };

    lines.forEach((line) => {
      const trimmedLine = line.trim();

      // Empty line
      if (!trimmedLine) {
        if (inList) {
          flushList();
        } else {
          flushParagraph();
        }
        return;
      }

      // Headings
      if (trimmedLine.startsWith('# ')) {
        flushParagraph();
        flushList();
        elements.push(
          <h1 key={elements.length} className="text-3xl md:text-4xl font-bold text-purple-700 mb-6 mt-8">
            {trimmedLine.slice(2)}
          </h1>
        );
        return;
      }

      if (trimmedLine.startsWith('## ')) {
        flushParagraph();
        flushList();
        elements.push(
          <h2 key={elements.length} className="text-2xl md:text-3xl font-bold text-purple-700 mb-4 mt-8">
            {trimmedLine.slice(3)}
          </h2>
        );
        return;
      }

      if (trimmedLine.startsWith('### ')) {
        flushParagraph();
        flushList();
        elements.push(
          <h3 key={elements.length} className="text-xl md:text-2xl font-bold text-purple-700 mb-3 mt-6">
            {trimmedLine.slice(4)}
          </h3>
        );
        return;
      }

      if (trimmedLine.startsWith('#### ')) {
        flushParagraph();
        flushList();
        elements.push(
          <h4 key={elements.length} className="text-lg md:text-xl font-bold text-purple-700 mb-3 mt-4">
            {trimmedLine.slice(5)}
          </h4>
        );
        return;
      }

      // List items
      if (trimmedLine.startsWith('- ')) {
        flushParagraph();
        inList = true;
        listItems.push(trimmedLine.slice(2));
        return;
      }

      // Bold text lines (like **Strategies that Work:**)
      if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
        flushParagraph();
        flushList();
        elements.push(
          <div key={elements.length} className="font-bold text-purple-700 mb-3 mt-4 text-lg">
            {trimmedLine.slice(2, -2)}
          </div>
        );
        return;
      }

      // Handle numbered lists
      if (/^\d+\.\s/.test(trimmedLine)) {
        flushParagraph();
        if (!inList) {
          inList = true;
          listItems = [];
        }
        listItems.push(trimmedLine.replace(/^\d+\.\s/, ''));
        return;
      }

      // Regular paragraph content
      if (!inList) {
        currentParagraph.push(trimmedLine);
      } else {
        flushList();
        currentParagraph.push(trimmedLine);
      }
    });

    // Flush any remaining content
    flushParagraph();
    flushList();

    return elements;
  };

  // Parse inline formatting (bold, italic, links)
  const parseInlineFormatting = (text: string): React.ReactNode => {
    // Handle links [text](url)
    let result: React.ReactNode = text;
    
    // Handle bold **text**
    result = String(result).split(/(\*\*[^*]+\*\*)/).map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={index} className="font-bold text-purple-700">
            {part.slice(2, -2)}
          </strong>
        );
      }
      return part;
    });

    // Flatten and handle other formatting if needed
    const flattened = React.Children.toArray(result).map((child, index) => {
      if (typeof child === 'string') {
        // Handle links in string parts
        return child.split(/(\[[^\]]+\]\([^)]+\))/).map((part, partIndex) => {
          const linkMatch = part.match(/\[([^\]]+)\]\(([^)]+)\)/);
          if (linkMatch) {
            const [, linkText, linkUrl] = linkMatch;
            return (
              <a 
                key={`${index}-${partIndex}`} 
                href={linkUrl} 
                className="text-purple-700 hover:underline font-medium"
                target={linkUrl.startsWith('http') ? '_blank' : '_self'}
                rel={linkUrl.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {linkText}
              </a>
            );
          }
          return part;
        });
      }
      return child;
    });

    return flattened;
  };

  const elements = parseMarkdown(content);

  return (
    <div className="prose prose-lg max-w-none">
      {elements}
    </div>
  );
};

export default MarkdownRenderer;
