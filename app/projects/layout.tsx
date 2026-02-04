import React from 'react';

export const metadata = {
  title: 'Projects | Hector John',
  description: 'A showcase of high-end digital products, frontend architectures, and technical solutions engineered by Hector John.',
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      {children}
    </main>
  );
}

