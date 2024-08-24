// Global Imports
import { type ReactNode } from 'react';

// Internal Imports

// Types

type AuthLayoutProps = {
  children: ReactNode;
};

// Component
const AuthLayout = ({ children }: AuthLayoutProps) => {
  return <main>{children}</main>;
};

// Exports
export default AuthLayout;
