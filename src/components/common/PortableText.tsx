import React from 'react';
import { cn } from '@/lib/utils';
import { urlFor } from '@/lib/sanity';

interface PortableTextProps {
  value: any[];
  className?: string;
}

const PortableText: React.FC<PortableTextProps> = ({ value, className }) => {
  if (!value) return null;

  const renderBlock = (block: any) => {
    switch (block._type) {
      case 'block':
        return renderTextBlock(block);
      case 'image':
        return renderImage(block);
      default:
        return <p>Unsupported block type: {block._type}</p>;
    }
  };

  const renderTextBlock = (block: any) => {
    // Get style and children
    const style = block.style || 'normal';
    
    if (!block.children) {
      return null;
    }

    // Process marks (strong, em, etc.)
    const text = block.children.map((child: any, i: number) => {
      // Skip empty children
      if (!child.text) {
        return null;
      }

      // Check for marks
      let textNode = child.text;
      
      if (child.marks && child.marks.length > 0) {
        child.marks.forEach((mark: string) => {
          switch (mark) {
            case 'strong':
              textNode = <strong key={i}>{textNode}</strong>;
              break;
            case 'em':
              textNode = <em key={i}>{textNode}</em>;
              break;
            case 'underline':
              textNode = <u key={i}>{textNode}</u>;
              break;
            case 'strike-through':
              textNode = <s key={i}>{textNode}</s>;
              break;
            // Annotations like links would need specific handling here
            default:
              // Handle link annotations if they exist
              if (mark.startsWith('link-')) {
                const linkKey = mark.replace('link-', '');
                const link = block.markDefs?.find((def: any) => def._key === linkKey);
                if (link) {
                  textNode = (
                    <a 
                      key={i} 
                      href={link.href} 
                      target={link.blank ? '_blank' : undefined}
                      rel={link.blank ? 'noopener noreferrer' : undefined}
                      className="text-church-burgundy hover:text-church-gold underline"
                    >
                      {textNode}
                    </a>
                  );
                }
              }
              break;
          }
        });
      }
      
      return <React.Fragment key={i}>{textNode}</React.Fragment>;
    });

    // Render the appropriate HTML tag based on style
    switch (style) {
      case 'h1':
        return <h1 className="text-3xl font-bold mt-6 mb-4">{text}</h1>;
      case 'h2':
        return <h2 className="text-2xl font-bold mt-5 mb-3">{text}</h2>;
      case 'h3':
        return <h3 className="text-xl font-bold mt-4 mb-2">{text}</h3>;
      case 'h4':
        return <h4 className="text-lg font-bold mt-3 mb-2">{text}</h4>;
      case 'blockquote':
        return (
          <blockquote className="pl-4 border-l-4 border-church-gold italic my-4 text-gray-700">
            {text}
          </blockquote>
        );
      default:
        return <p className="my-3">{text}</p>;
    }
  };

  const renderImage = (block: any) => {
    if (!block.asset) return null;
    
    return (
      <figure className="my-6">
        <img 
          src={urlFor(block).url()} 
          alt={block.alt || ''}
          className="w-full rounded-lg"
        />
        {block.caption && (
          <figcaption className="text-sm text-gray-600 text-center mt-2">
            {block.caption}
          </figcaption>
        )}
      </figure>
    );
  };

  return (
    <div className={cn("prose max-w-none text-gray-800", className)}>
      {value.map((block, index) => (
        <React.Fragment key={block._key || index}>
          {renderBlock(block)}
        </React.Fragment>
      ))}
    </div>
  );
};

export default PortableText;
