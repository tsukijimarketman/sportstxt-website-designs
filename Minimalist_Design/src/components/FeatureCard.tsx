import React from 'react';
import { BoxIcon } from 'lucide-react';
interface FeatureCardProps {
  icon: BoxIcon;
  title: string;
  description: string;
  className?: string;
}
export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  className = ''
}: FeatureCardProps) => {
  return <div className={`bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow ${className}`}>
      <div className="inline-flex items-center justify-center p-3 bg-blue-50 rounded-lg mb-4">
        <Icon size={24} className="text-blue-600" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>;
};