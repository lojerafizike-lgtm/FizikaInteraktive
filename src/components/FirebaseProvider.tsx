import React, { useEffect, useState } from 'react';
import { auth, onAuthStateChanged, User, signInWithPopup, googleProvider, signOut, initUserProfile, db, doc, onSnapshot, handleFirestoreError, OperationType } from '../firebase';
import { FirebaseContext, Profile } from '../contexts/FirebaseContext';

export const FirebaseProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [profile, setProfile] = useState<Profile | null>(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState<string | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        await initUserProfile(currentUser);
        // Listen to profile changes
        const profileRef = doc(db, 'profiles', currentUser.uid);
        const unsubProfile = onSnapshot(profileRef, (doc) => {
          if (doc.exists()) {
            setProfile(doc.data() as Profile);
          }
        }, (error) => {
          handleFirestoreError(error, OperationType.GET, `profiles/${currentUser.uid}`);
        });
        setLoading(false);
        return () => unsubProfile();
      } else {
        setProfile(null);
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const login = async () => {
    setAuthError(null);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error: unknown) {
      const firebaseError = error as { code?: string };
      if (firebaseError.code === 'auth/popup-closed-by-user') {
        console.log("User closed the login popup.");
      } else if (firebaseError.code === 'auth/popup-blocked') {
        setAuthError("Shfletuesi bllokoi dritaren e hyrjes. Ju lutem lejoni pop-ups për këtë faqe dhe provoni përsëri.");
        console.error("Popup blocked:", firebaseError);
      } else {
        setAuthError("Dështoi hyrja me Google. Ju lutem provoni përsëri.");
        console.error("Login failed:", firebaseError);
      }
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const clearAuthError = () => setAuthError(null);

  return (
    <FirebaseContext.Provider value={{ user, profile, loading, authError, login, logout, clearAuthError }}>
      {children}
    </FirebaseContext.Provider>
  );
};
