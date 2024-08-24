// Global Imports
import { type ReactNode } from 'react';

// Internal Imports

// Types

type MainLayoutProps = {
  children: ReactNode;
};

// Component
const MainLayout = ({ children }: MainLayoutProps) => {
  return <div>{children}</div>;
};

// Exports
export default MainLayout;
