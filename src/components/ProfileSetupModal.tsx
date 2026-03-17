
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
          className="bg-white w-full max-w-md rounded-[2.5rem] shadow-2xl overflow-hidden border-4 border-white"
        >
          <div className="bg-gradient-to-br from-[#ffc8dd] to-[#ffafcc] p-8 text-white text-center relative">
            {forceShow && (
              <button 
                onClick={() => setForceShow(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
              >
                <i className="fas fa-times"></i>
              </button>
            )}
            <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-4 backdrop-blur-md">
              <i className="fas fa-user-edit text-3xl"></i>
            </div>
            <h2 className="text-3xl font-black tracking-tighter">Plotëso Profilin</h2>
            <p className="text-white/80 font-medium text-sm mt-2">Na trego pak më shumë për veten që të fillojmë!</p>
          </div>

          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-2">Username i dëshiruar</label>
              <input 
                type="text" 
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="p.sh. fizikanti2026"
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#ffafcc] focus:bg-white outline-none transition-all font-bold text-slate-700"
              />
            </div>

            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-2">Shkolla juaj</label>
              <input 
                type="text" 
                required
                value={school}
                onChange={(e) => setSchool(e.target.value)}
                placeholder="p.sh. Hydajet Lezha"
                className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-[#ffafcc] focus:bg-white outline-none transition-all font-bold text-slate-700"
              />
            </div>

            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-2">Roli juaj</label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setRole('mesues')}
                  className={`py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all border-2 ${role === 'mesues' ? 'bg-[#4a4e69] text-white border-[#4a4e69]' : 'bg-slate-50 text-slate-400 border-transparent hover:border-slate-200'}`}
                >
                  <i className="fas fa-chalkboard-teacher mb-2 block text-lg"></i>
                  Mësues
                  <span className="block text-[8px] opacity-60 mt-1 lowercase font-medium">(Zhbllokon Planet Mësimore)</span>
                </button>
                <button
                  type="button"
                  onClick={() => setRole('nxenes')}
                  className={`py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all border-2 ${role === 'nxenes' ? 'bg-[#4a4e69] text-white border-[#4a4e69]' : 'bg-slate-50 text-slate-400 border-transparent hover:border-slate-200'}`}
                >
                  <i className="fas fa-user-graduate mb-2 block text-lg"></i>
                  Nxënës
                </button>
              </div>
            </div>

            <button 
              type="submit"
              disabled={isSubmitting || !username || !school || !role}
              className="w-full py-5 bg-[#ffafcc] text-white rounded-2xl font-black text-sm uppercase tracking-[0.2em] shadow-xl hover:bg-[#ff8fab] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Duke u ruajtur...' : 'Ruaj Profilin'}
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
