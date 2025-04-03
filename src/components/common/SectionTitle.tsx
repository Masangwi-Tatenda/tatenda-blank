
import React from 'react';
import { cn } from '@/lib/utils';

type SectionTitleProps = {
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  align = 'center',
  className = '',
  titleClassName = '',
  subtitleClassName = '',
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <div className={cn('mb-10', alignmentClasses[align], className)}>
      <h2 className={cn(
        'text-3xl md:text-4xl font-bold text-church-burgundy relative inline-block',
        'after:content-[""] after:block after:w-1/2 after:h-1 after:bg-church-gold after:mt-2 after:mx-auto',
        align === 'left' && 'after:ml-0',
        align === 'right' && 'after:mr-0',
        titleClassName
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn('mt-4 text-lg text-gray-600 max-w-3xl mx-auto', subtitleClassName)}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
