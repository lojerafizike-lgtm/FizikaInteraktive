import React, { useEffect, useState, useMemo } from 'react';
import { db, collection, onSnapshot, handleFirestoreError, OperationType } from '../firebase';
import { Trophy, Medal, User as UserIcon, School } from 'lucide-react';
import { useFirebase } from '../contexts/FirebaseContext';

interface Profile {
  uid: string;
  displayName: string;
  photoURL: string;
  totalScore: number;
  school?: string;
  username?: string;
  role?: string;
}

export const Leaderboard: React.FC = () => {
  const { profile } = useFirebase();
  const [allLeaders, setAllLeaders] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSchool, setSelectedSchool] = useState<string>('Të gjitha shkollat');

  // Update selected school when profile loads
  useEffect(() => {
    if (profile?.school && selectedSchool === 'Të gjitha shkollat') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelectedSchool(profile.school);
    }
  }, [profile?.school, selectedSchool]);

  useEffect(() => {
    // Fetch all profiles to filter and sort in memory (avoids composite index requirement for prototype)
    const unsubscribe = onSnapshot(collection(db, 'profiles'), (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        uid: doc.id,
        ...doc.data()
      })) as Profile[];
      setAllLeaders(data);
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'profiles');
    });

    return () => unsubscribe();
  }, []);

  const schools = useMemo(() => {
    const uniqueSchools = new Set(allLeaders.map(l => l.school).filter(Boolean) as string[]);
    return ['Të gjitha shkollat', ...Array.from(uniqueSchools)].sort();
  }, [allLeaders]);

  const displayedLeaders = useMemo(() => {
    let filtered = allLeaders.filter(l => l.role !== 'mesues');
    if (selectedSchool !== 'Të gjitha shkollat') {
      filtered = filtered.filter(l => l.school === selectedSchool);
    }
    return filtered.sort((a, b) => b.totalScore - a.totalScore).slice(0, 10);
  }, [allLeaders, selectedSchool]);

  if (loading) return <div className="p-8 text-center text-slate-500">Duke ngarkuar renditjen...</div>;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="bg-[#ffafcc] p-6 text-white flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Trophy className="w-6 h-6" />
          <h2 className="text-xl font-bold uppercase tracking-wider">Renditja e Nxënësve</h2>
        </div>
        
        <div className="flex items-center gap-2 bg-white/20 px-3 py-2 rounded-xl backdrop-blur-sm">
          <School className="w-4 h-4" />
          <select 
            value={selectedSchool}
            onChange={(e) => setSelectedSchool(e.target.value)}
            className="bg-transparent border-none text-white font-medium focus:ring-0 cursor-pointer outline-none appearance-none pr-4"
          >
            {schools.map(school => (
              <option key={school} value={school} className="text-slate-800">{school}</option>
            ))}
          </select>
          <i className="fas fa-chevron-down text-xs opacity-70"></i>
        </div>
      </div>
      
      <div className="divide-y divide-slate-50">
        {displayedLeaders.map((leader, index) => (
          <div key={leader.uid} className="flex items-center gap-4 p-4 hover:bg-slate-50 transition-colors">
            <div className="w-8 text-center font-bold text-slate-400">
              {index === 0 ? <Medal className="w-6 h-6 text-yellow-400 mx-auto" /> : 
               index === 1 ? <Medal className="w-6 h-6 text-slate-300 mx-auto" /> :
               index === 2 ? <Medal className="w-6 h-6 text-amber-600 mx-auto" /> :
               index + 1}
            </div>
            
            <div className="w-10 h-10 rounded-full bg-slate-100 overflow-hidden border border-slate-200 flex-shrink-0">
              {leader.photoURL ? (
                <img src={leader.photoURL} alt={leader.displayName} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              ) : (
                <UserIcon className="w-full h-full p-2 text-slate-400" />
              )}
            </div>
            
            <div className="flex-grow">
              <div className="font-bold text-slate-800">{leader.username || leader.displayName}</div>
              {leader.school && selectedSchool === 'Të gjitha shkollat' && (
                <div className="text-xs text-slate-400 flex items-center gap-1 mt-0.5">
                  <School className="w-3 h-3" /> {leader.school}
                </div>
              )}
            </div>
            
            <div className="text-right">
              <div className="text-sm font-black text-[#ffafcc]">{leader.totalScore} PIKË</div>
            </div>
          </div>
        ))}
        
        {displayedLeaders.length === 0 && (
          <div className="p-8 text-center text-slate-400 italic">
            Ende nuk ka nxënës në renditje për këtë shkollë. Bëhu i pari!
          </div>
        )}
      </div>
    </div>
  );
};
