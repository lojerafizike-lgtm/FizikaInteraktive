
import React, { useState } from 'react';
import { useFirebase } from '../contexts/FirebaseContext';
import { db, doc, updateDoc, handleFirestoreError, OperationType } from '../firebase';
import { motion, AnimatePresence } from 'motion/react';

export const ProfileSetupModal: React.FC = () => {
  const { user, profile } = useFirebase();
  const [username, setUsername] = useState('');
  const [school, setSchool] = useState('');
  const [role, setRole] = useState<'mesues' | 'nxenes' | 'admin' | ''>('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [forceShow, setForceShow] = useState(false);

  // Show modal if user is logged in but profile is incomplete
  const needsSetup = forceShow || (user && profile && (!profile.username || !profile.school || !profile.role));

  React.useEffect(() => {
    const handleOpen = () => {
      if (profile) {
        setUsername(profile.username || '');
        setSchool(profile.school || '');
        setRole(profile.role || '');
      }
      setForceShow(true);
    };
    window.addEventListener('open-profile-setup', handleOpen);
    return () => window.removeEventListener('open-profile-setup', handleOpen);
  }, [profile]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !username || !school || !role) return;

    setIsSubmitting(true);
    try {
      const profileRef = doc(db, 'profiles', user.uid);
      await updateDoc(profileRef, {
        username: username.trim(),
        school: school.trim(),
        role: role,
      });
      setForceShow(false);
    } catch (error) {
      handleFirestoreError(error, OperationType.UPDATE, `profiles/${user.uid}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!needsSetup) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#4a4e69]/80 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="bg-white w-full max-w-md rounded-[2rem] shadow-2xl border-4 border-white"
        >
          <div className="bg-gradient-to-br from-[#ffc8dd] to-[#ffafcc] p-5 md:p-6 text-white text-center relative">
            {forceShow && (
              <button 
                onClick={() => setForceShow(false)}
                className="absolute top-3 right-3 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <i className="fas fa-times text-sm"></i>
              </button>
            )}
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-3 backdrop-blur-md">
              <i className="fas fa-user-edit text-2xl"></i>
            </div>
            <h2 className="text-2xl md:text-3xl font-black tracking-tighter">Plotëso Profilin</h2>
            <p className="text-white/80 font-medium text-xs md:text-sm mt-1">Na trego pak më shumë për veten që të fillojmë!</p>
          </div>

          <form onSubmit={handleSubmit} className="p-5 md:p-6 space-y-4">
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 ml-2">Username i dëshiruar</label>
              <input 
                type="text" 
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="p.sh. fizikanti2026"
                className="w-full px-4 py-2.5 md:py-3 rounded-xl bg-slate-50 border-2 border-transparent focus:border-[#ffafcc] focus:bg-white outline-none transition-all font-bold text-slate-700 text-sm"
              />
            </div>

            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 ml-2">Shkolla juaj</label>
              <input 
                type="text" 
                required
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                placeholder="p.sh. Hydajet Lezha"
                className="w-full px-4 py-2.5 md:py-3 rounded-xl bg-slate-50 border-2 border-transparent focus:border-[#ffafcc] focus:bg-white outline-none transition-all font-bold text-slate-700 text-sm"
              />
            </div>

            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1.5 ml-2">Roli juaj</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setRole('mesues')}
                  className={`py-3 rounded-xl font-black text-[10px] md:text-xs uppercase tracking-widest transition-all border-2 ${role === 'mesues' ? 'bg-[#4a4e69] text-white border-[#4a4e69]' : 'bg-slate-50 text-slate-400 border-transparent hover:border-slate-200'}`}
                >
                  <i className="fas fa-chalkboard-teacher mb-1.5 block text-base md:text-lg"></i>
                  Mësues
                  <span className="block text-[7px] md:text-[8px] opacity-60 mt-0.5 lowercase font-medium">(Zhbllokon Planet Mësimore)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setRole('nxenes')}
                  className={`py-3 rounded-xl font-black text-[10px] md:text-xs uppercase tracking-widest transition-all border-2 ${role === 'nxenes' ? 'bg-[#4a4e69] text-white border-[#4a4e69]' : 'bg-slate-50 text-slate-400 border-transparent hover:border-slate-200'}`}
                >
                  <i className="fas fa-user-graduate mb-1.5 block text-base md:text-lg"></i>
                  Nxënës
                </button>
              </div>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting || !username || !school || !role}
              className="w-full py-3 md:py-4 bg-[#ffafcc] text-white rounded-xl font-black text-xs md:text-sm uppercase tracking-[0.2em] shadow-lg hover:bg-[#ff8fab] transition-all disabled:opacity-50 disabled:cursor-not-allowed mt-2"
            >
              {isSubmitting ? 'Duke u ruajtur...' : 'Ruaj Profilin'}
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
