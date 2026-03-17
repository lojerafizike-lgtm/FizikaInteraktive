import { createContext, useContext } from 'react';
import { User } from '../firebase';

export interface Profile {
  displayName: string;
  username?: string;
  role?: 'mesues' | 'nxenes' | 'admin';
  school?: string;
  photoURL: string;
  totalScore: number;
}

export interface FirebaseContextType {
  user: User | null;
  profile: Profile | null;
  loading: boolean;
  authError: string | null;
  isLoggingIn: boolean;
  login: () => Promise<void>;
  logout: () => Promise<void>;
  clearAuthError: () => void;
}

export const FirebaseContext = createContext<FirebaseContextType | undefined>(undefined);

export const useFirebase = () => {
  const context = useContext(FirebaseContext);
  if (context === undefined) {
    throw new Error('useFirebase must be used within a FirebaseProvider');
  }
  return context;
};
