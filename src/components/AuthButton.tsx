import React from 'react';
import { useFirebase } from '../contexts/FirebaseContext';
import { LogIn, LogOut, User as UserIcon, Trophy } from 'lucide-react';

export const AuthButton: React.FC = () => {
  const { user, profile, login, logout, loading, authError, clearAuthError } = useFirebase();

  if (loading) return <div className="w-8 h-8 rounded-full bg-slate-100 animate-pulse" />;

  if (!user) {
    return (
      <div className="relative">
        <button 
          onClick={login}
          className="flex items-center gap-2 px-4 py-2 bg-[#ffafcc] text-white rounded-full font-bold text-sm hover:bg-[#fbafcc] transition-all shadow-sm"
        >
          <LogIn className="w-4 h-4" />
          <span>HYR ME GOOGLE</span>
        </button>
        {authError && (
          <div className="absolute top-full right-0 mt-2 w-64 bg-red-50 border border-red-200 text-red-600 text-[10px] p-3 rounded-xl shadow-xl z-[9999] animate__animated animate__fadeIn">
            <div className="flex justify-between items-start gap-2">
              <p className="font-bold leading-tight">{authError}</p>
              <button onClick={clearAuthError} className="text-red-400 hover:text-red-600">
                <i className="fas fa-times"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-4">
      <div className="hidden sm:flex flex-col items-end">
        <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Pikët e tua</span>
        <div className="flex items-center gap-1 text-[#ffafcc] font-black">
          <Trophy className="w-4 h-4" />
          <span>{profile?.totalScore || 0}</span>
        </div>
      </div>
      
      <div className="group relative">
        <button className="w-10 h-10 rounded-full border-2 border-[#ffafcc] overflow-hidden hover:scale-105 transition-transform">
          {user.photoURL ? (
            <img src={user.photoURL} alt={user.displayName || ''} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
          ) : (
            <UserIcon className="w-full h-full p-2 text-slate-400" />
          )}
        </button>
        
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-slate-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50 p-2">
          <div className="px-3 py-2 border-bottom border-slate-50">
            <div className="font-bold text-slate-800 truncate">{user.displayName}</div>
            <div className="text-xs text-slate-400 truncate">{user.email}</div>
          </div>
          <button 
            onClick={logout}
            className="w-full flex items-center gap-2 px-3 py-2 text-sm text-red-500 hover:bg-red-50 rounded-lg transition-colors mt-1"
          >
            <LogOut className="w-4 h-4" />
            <span>Dil nga llogaria</span>
          </button>
        </div>
      </div>
    </div>
  );
};
