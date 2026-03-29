import React, { useState } from 'react';
import { useFirebase } from '../contexts/FirebaseContext';
import { db, doc, updateDoc, handleFirestoreError, OperationType } from '../firebase';

export const OnboardingModal: React.FC = () => {
  const { user, profile } = useFirebase();
  const [username, setUsername] = useState('');
  const [role, setRole] = useState<'mesues' | 'nxenes'>('nxenes');
  const [school, setSchool] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Only show if logged in and missing profile info
  if (!user || !profile || (profile.username && profile.role && profile.school)) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() || !school.trim()) {
      setError('Të lutem plotëso të gjitha fushat.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      const profileRef = doc(db, 'profiles', user.uid);
      await updateDoc(profileRef, {
        username: username.trim(),
        role,
        school: school.trim(),
      });
    } catch (err) {
      console.error(err);
      setError('Pati një problem gjatë ruajtjes. Ju lutem provoni përsëri.');
      handleFirestoreError(err, OperationType.UPDATE, `profiles/${user.uid}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[10000] bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-[2rem] p-5 md:p-8 w-full max-w-md shadow-2xl border-4 border-[#ffafcc]/20">
        <div className="text-center mb-4 md:mb-6">
          <div className="w-16 h-16 bg-[#ffafcc]/20 text-[#ffafcc] rounded-full flex items-center justify-center text-3xl mx-auto mb-3">
            <i className="fas fa-user-astronaut"></i>
          </div>
          <h2 className="text-2xl md:text-3xl font-black tracking-tighter text-slate-800">Mirësevini!</h2>
          <p className="text-slate-500 text-sm mt-1">Le të krijojmë profilin tuaj për t'u bashkuar me renditjen e shkollës suaj.</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-500 p-2 rounded-xl text-xs font-medium mb-4 text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1.5">Username (Nofka)</label>
            <input 
              type="text" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="p.sh. Fizikanti123"
              className="w-full px-3 py-2 md:py-3 rounded-xl border-2 border-slate-200 focus:border-[#ffafcc] focus:ring-4 focus:ring-[#ffafcc]/20 outline-none transition-all font-medium text-sm"
              maxLength={30}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Roli juaj</label>
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setRole('nxenes')}
                className={`py-3 rounded-xl font-bold border-2 transition-all ${role === 'nxenes' ? 'border-[#ffafcc] bg-[#ffafcc]/10 text-[#ffafcc]' : 'border-slate-200 text-slate-500 hover:border-slate-300'}`}
              >
                <i className="fas fa-user-graduate mr-2"></i> Nxënës
              </button>
              <button
                type="button"
                onClick={() => setRole('mesues')}
                className={`py-3 rounded-xl font-bold border-2 transition-all ${role === 'mesues' ? 'border-[#ffafcc] bg-[#ffafcc]/10 text-[#ffafcc]' : 'border-slate-200 text-slate-500 hover:border-slate-300'}`}
              >
                <i className="fas fa-chalkboard-teacher mr-2"></i> Mësues
              </button>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Shkolla</label>
            <input 
              type="text" 
              value={school}
              onChange={(e) => setSchool(e.target.value)}
              placeholder="p.sh. Gjimnazi Sami Frashëri"
              className="w-full px-4 py-3 rounded-xl border-2 border-slate-200 focus:border-[#ffafcc] focus:ring-4 focus:ring-[#ffafcc]/20 outline-none transition-all font-medium"
              maxLength={80}
              required
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-4 bg-[#ffafcc] hover:bg-[#ff9ebb] text-white rounded-xl font-black uppercase tracking-widest transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-4"
          >
            {loading ? 'Po ruhet...' : 'Ruaj Profilin'}
          </button>
        </form>
      </div>
    </div>
  );
};
