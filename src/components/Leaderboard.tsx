import React, { useEffect, useState, useMemo } from 'react';
import { db, collection, onSnapshot, handleFirestoreError, OperationType } from '../firebase';
import { User as UserIcon } from 'lucide-react';
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

// Normalizon emrin e shkollës
function normalizeSchool(school?: string): string {
  if (!school) return '';

  const s = school
    .trim()
    .replace(/["""''\u2018\u2019\u201C\u201D\u00AB\u00BB:]/g, '')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();

  if (s.includes('hydajet') || s.includes('lezha')) {
    return 'Gjimnazi \u201CHydajet Lezha\u201D';
  }
  
  if (s.includes('rogacionistet') || s.includes('ragacionistet') || s.includes('rragacionistet')) {
    return 'Gjimnazi Jopublik Rogacionistet';
  }

  return s.replace(/\b\w/g, c => c.toUpperCase());
}

export const Leaderboard: React.FC = () => {
  const { profile, user } = useFirebase();
  const [allLeaders, setAllLeaders] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSchool, setSelectedSchool] = useState<string>('Të gjitha shkollat');

  // Update selected school when profile loads
  useEffect(() => {
    if (profile?.school && selectedSchool === 'Të gjitha shkollat') {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSelectedSchool(normalizeSchool(profile.school));
    }
  }, [profile?.school, selectedSchool]);

  useEffect(() => {
    // Fetch all profiles to filter and sort in memory (avoids composite index requirement for prototype)
    const unsubscribe = onSnapshot(collection(db, 'profiles'), (snapshot) => {
      const data = snapshot.docs.map(doc => {
        const d = doc.data();
        return {
          uid: doc.id,
          ...d,
          school: normalizeSchool(d.school),
        };
      }) as Profile[];
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

  const topThree = displayedLeaders.slice(0, 3);
  const restOfLeaders = displayedLeaders.slice(3);

  // We need to display 2nd, 1st, 3rd for the podium layout
  const podiumOrder = [
    topThree[1] || null,
    topThree[0] || null,
    topThree[2] || null
  ];

  const userRank = user ? displayedLeaders.findIndex(l => l.uid === user.uid) + 1 : 0;
  
  return (
    <div className="w-full max-w-6xl mx-auto flex flex-col pt-4 md:pt-8 pb-12 font-sans px-4">
      {/* Header and Controls */}
      <div className="flex flex-col items-center justify-center mb-10">
        <h2 className="text-3xl md:text-5xl font-black text-slate-800 mb-6 tracking-tighter flex items-center gap-4">
          <i className="fas fa-trophy text-[#ffb703]"></i>
          Renditja e Nxënësve
          <i className="fas fa-star text-[#ffafcc]"></i>
        </h2>
        
        {/* School Dropdown */}
        <div className="bg-white p-2 rounded-full flex shadow-sm border border-slate-100 max-w-md w-full">
          <div className="flex-1 relative border-r border-slate-100">
            <select 
              value={selectedSchool}
              onChange={(e) => setSelectedSchool(e.target.value)}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            >
              {schools.map(school => (
                <option key={school} value={school}>{school}</option>
              ))}
            </select>
            <div className="py-2.5 px-4 text-slate-600 hover:text-[#a2d2ff] text-center font-bold text-sm truncate flex items-center justify-center gap-2 transition-colors cursor-pointer">
              <span className="truncate max-w-[200px]">{selectedSchool === 'Të gjitha shkollat' ? 'Të gjitha shkollat' : selectedSchool}</span> 
              <i className="fas fa-caret-down opacity-50"></i>
            </div>
          </div>
          <div className="px-6 py-2.5 bg-slate-50 text-slate-400 font-bold text-sm rounded-r-full flex items-center justify-center pointer-events-none uppercase tracking-widest text-xs">
            Filtri
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start w-full">
        
        {/* Left Column: Rank & Podium */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:sticky lg:top-8">
          {/* User Rank Banner */}
          {userRank > 0 && (
            <div className="w-full mb-12 animate__animated animate__fadeInUp">
              <div className="bg-gradient-to-r from-[#ffafcc]/10 to-[#ffc8dd]/20 border border-[#ffafcc]/30 rounded-3xl p-6 flex items-center gap-6 shadow-sm">
                <div className="bg-white text-[#ffafcc] font-black text-2xl w-16 h-16 flex items-center justify-center rounded-2xl shadow-sm shrink-0 border border-[#ffafcc]/20">
                  #{userRank}
                </div>
                <div>
                  <div className="font-bold text-slate-700 text-lg">Pikët e tua</div>
                  <div className="text-slate-500 font-medium text-sm">
                    Ke grumbulluar <span className="font-black text-[#ffafcc]">{profile?.totalScore}</span> pikë deri tani. Vazhdo kështu!
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Podium */}
          <div className="flex items-end justify-center gap-2 md:gap-6 w-full pt-4 md:pt-10">
            {/* 2nd Place */}
            {podiumOrder[0] && (
              <div className="flex flex-col items-center flex-1 pb-4 group relative">
                <div className="absolute -top-4 w-full flex justify-center opacity-0 group-hover:opacity-100 transition-opacity transform -translate-y-2 group-hover:translate-y-0 duration-300">
                   <span className="bg-white text-slate-700 text-xs font-bold py-1 px-3 rounded-full shadow-md border border-slate-100">{podiumOrder[0].totalScore} Pikë</span>
                </div>
                <div className="relative mb-3 group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="absolute -top-3 -right-2 text-slate-300 text-2xl drop-shadow-sm z-20 transform rotate-12"><i className="fas fa-medal"></i></div>
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-4 border-[#a2d2ff] bg-white overflow-hidden z-10 relative shadow-md">
                    {podiumOrder[0].photoURL ? (
                      <img src={podiumOrder[0].photoURL} alt="2nd" className="w-full h-full object-cover" />
                    ) : (
                      <UserIcon className="w-full h-full p-4 text-[#a2d2ff]/50" />
                    )}
                  </div>
                </div>
                <div className="text-slate-700 font-black text-xs md:text-sm truncate w-full text-center px-1 mb-2">{podiumOrder[0].username || podiumOrder[0].displayName?.split(' ')[0]}</div>
                <div className="w-full bg-gradient-to-b from-[#a2d2ff] to-[#bde0fe] rounded-t-2xl h-24 md:h-40 flex items-start justify-center pt-4 relative overflow-hidden shadow-sm border border-[#a2d2ff]/20">
                   <span className="text-white font-black text-5xl md:text-7xl absolute -bottom-2 md:-bottom-4 opacity-80">2</span>
                </div>
              </div>
            )}

            {/* 1st Place */}
            {podiumOrder[1] && (
              <div className="flex flex-col items-center flex-1 -mt-8 md:-mt-16 z-10 group relative">
                <div className="absolute -top-4 w-full flex justify-center opacity-0 group-hover:opacity-100 transition-opacity transform -translate-y-2 group-hover:translate-y-0 duration-300 z-30">
                   <span className="bg-white text-slate-700 text-xs font-bold py-1 px-3 rounded-full shadow-md border border-slate-100">{podiumOrder[1].totalScore} Pikë</span>
                </div>
                <div className="relative mb-4 group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="absolute -top-6 md:-top-8 left-1/2 -translate-x-1/2 text-[#ffb703] text-3xl md:text-5xl drop-shadow-md z-20 animate-bounce">
                    <i className="fas fa-crown"></i>
                  </div>
                  <div className="w-20 h-20 md:w-32 md:h-32 rounded-full border-[6px] border-[#ffb703] bg-white overflow-hidden z-10 relative shadow-xl">
                    {podiumOrder[1].photoURL ? (
                      <img src={podiumOrder[1].photoURL} alt="1st" className="w-full h-full object-cover" />
                    ) : (
                      <UserIcon className="w-full h-full p-5 md:p-6 text-[#ffb703]/50" />
                    )}
                  </div>
                </div>
                <div className="text-slate-800 font-black text-sm md:text-base truncate w-full text-center px-1 mb-3">{podiumOrder[1].username || podiumOrder[1].displayName?.split(' ')[0]}</div>
                <div className="w-full bg-gradient-to-b from-[#ffafcc] to-[#ffc8dd] rounded-t-3xl h-36 md:h-56 flex items-start justify-center pt-4 md:pt-6 relative overflow-hidden shadow-md border border-[#ffafcc]/20">
                   <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                   <span className="text-white font-black text-6xl md:text-8xl absolute -bottom-2 md:-bottom-4 drop-shadow-md opacity-90">1</span>
                </div>
              </div>
            )}

            {/* 3rd Place */}
            {podiumOrder[2] && (
              <div className="flex flex-col items-center flex-1 pb-4 group relative">
                <div className="absolute -top-4 w-full flex justify-center opacity-0 group-hover:opacity-100 transition-opacity transform -translate-y-2 group-hover:translate-y-0 duration-300">
                   <span className="bg-white text-slate-700 text-xs font-bold py-1 px-3 rounded-full shadow-md border border-slate-100">{podiumOrder[2].totalScore} Pikë</span>
                </div>
                <div className="relative mb-3 group-hover:-translate-y-2 transition-transform duration-300">
                  <div className="absolute -top-3 -right-2 text-[#cdb4db] text-2xl drop-shadow-sm z-20 transform -rotate-12"><i className="fas fa-medal"></i></div>
                  <div className="w-16 h-16 md:w-24 md:h-24 rounded-full border-4 border-[#cdb4db] bg-white overflow-hidden z-10 relative shadow-md">
                    {podiumOrder[2].photoURL ? (
                      <img src={podiumOrder[2].photoURL} alt="3rd" className="w-full h-full object-cover" />
                    ) : (
                      <UserIcon className="w-full h-full p-4 text-[#cdb4db]/50" />
                    )}
                  </div>
                </div>
                <div className="text-slate-700 font-black text-xs md:text-sm truncate w-full text-center px-1 mb-2">{podiumOrder[2].username || podiumOrder[2].displayName?.split(' ')[0]}</div>
                <div className="w-full bg-gradient-to-b from-[#cdb4db] to-[#e0c3fc] rounded-t-2xl h-20 md:h-32 flex items-start justify-center pt-4 relative overflow-hidden shadow-sm border border-[#cdb4db]/20">
                   <span className="text-white font-black text-5xl md:text-7xl absolute -bottom-2 md:-bottom-4 opacity-80">3</span>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: List - Blended Wide */}
        <div className="w-full lg:w-1/2 z-20 relative">
          {restOfLeaders.length > 0 ? (
            <div className="space-y-3">
              {restOfLeaders.map((leader, index) => (
                <div key={leader.uid} className="flex items-center gap-4 md:gap-6 bg-white p-4 md:p-5 rounded-3xl shadow-[0_2px_15px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_10px_30px_rgba(0,0,0,0.06)] hover:border-[#a2d2ff]/50 hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center font-black text-slate-400 text-sm md:text-base shrink-0 group-hover:bg-[#a2d2ff]/10 group-hover:text-[#a2d2ff] transition-colors">
                    {index + 4}
                  </div>
                  
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-slate-100 overflow-hidden shrink-0 border-2 border-white shadow-sm group-hover:border-[#a2d2ff] transition-colors">
                    {leader.photoURL ? (
                      <img src={leader.photoURL} alt={leader.displayName} className="w-full h-full object-cover" />
                    ) : (
                      <UserIcon className="w-full h-full p-2.5 text-slate-400" />
                    )}
                  </div>
                  
                  <div className="flex-grow min-w-0 flex flex-col justify-center">
                    <div className="font-bold text-slate-800 text-base md:text-lg truncate group-hover:text-[#a2d2ff] transition-colors">{leader.username || leader.displayName}</div>
                    {leader.school && selectedSchool === 'Të gjitha shkollat' && (
                      <div className="text-xs text-slate-400 truncate mt-0.5"><i className="fas fa-school mr-1 opacity-70"></i> {leader.school}</div>
                    )}
                  </div>

                  <div className="text-right shrink-0">
                     <div className="text-sm md:text-base font-black text-slate-700 bg-slate-50 group-hover:bg-[#a2d2ff]/10 group-hover:text-[#a2d2ff] transition-colors px-4 py-2 rounded-2xl border border-slate-100">
                       {leader.totalScore} <span className="opacity-50 font-semibold text-xs ml-1">PIKË</span>
                     </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
             <div className="text-center text-slate-400 font-medium pt-12 pb-24 flex flex-col items-center gap-4">
               <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mb-2">
                 <i className="fas fa-users-slash text-4xl opacity-40"></i>
               </div>
               <span>{topThree.length === 0 ? 'Ende nuk ka nxënës në renditje.' : 'Nuk ka lojtarë të tjerë në këtë listë.'}</span>
             </div>
          )}
        </div>
      </div>
    </div>
  );
};
