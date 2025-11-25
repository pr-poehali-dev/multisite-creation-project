import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface DiagonalCardProps {
  children: ReactNode;
  className?: string;
  variant?: 'default' | 'blue' | 'dark';
}

export const DiagonalCard = ({ children, className, variant = 'default' }: DiagonalCardProps) => {
  const variants = {
    default: 'bg-white border-none shadow-lg hover:shadow-xl',
    blue: 'bg-gradient-to-br from-[#2B6EE6] to-[#1E50B8] text-white shadow-lg hover:shadow-2xl',
    dark: 'bg-gradient-to-br from-[#1A2332] to-[#0F1419] text-white shadow-lg hover:shadow-2xl'
  };

  return (
    <div 
      className={cn(
        'relative overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1',
        variants[variant],
        className
      )}
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
      <div className="relative z-10">
        {children}
      </div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#2B6EE6] via-[#4080FF] to-[#2B6EE6] opacity-0 group-hover:opacity-100 transition-opacity"></div>
    </div>
  );
};

export default DiagonalCard;
