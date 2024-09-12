import React from 'react';

export const Avatar = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...props}>{children}</div>
);

export const AvatarImage = (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />;

export const AvatarFallback = ({ children, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <div {...props}>{children}</div>
);