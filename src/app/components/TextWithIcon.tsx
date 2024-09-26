import React from 'react';

interface TextWithIconProps {
  icon: React.ReactNode;
  title: string;
  body: string;
}

const TextWithIcon: React.FC<TextWithIconProps> = ({ icon, title, body }) => {
  return (
    <div className="flex flex-col items-start text-left p-4">
      <div className="mb-2">{icon}</div>
      <h2 className="text-16px font-medium mb-2">{title}</h2>
      <p className="text-12px">{body}</p>
    </div>
  );
};

export default TextWithIcon;