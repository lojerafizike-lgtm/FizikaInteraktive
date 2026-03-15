import React, { useEffect, useState } from 'react';
import { db, collection, query, orderBy, limit, onSnapshot, handleFirestoreError, OperationType } from '../firebase';
import { Trophy, Medal, User as UserIcon } from 'lucide-react';

interface Profile {
  uid: string;
  displayName: string;
  photoURL: string;
  totalScore: number;
}

export const Leaderboard: React.FC = () => {
  const [leaders, setLeaders] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'profiles'), orderBy('totalScore', 'desc'), limit(10));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map(doc => ({
        uid: doc.id,
        ...doc.data()
      })) as Profile[];
      setLeaders(data);
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.LIST, 'profiles');
    });

    return () => unsubscribe();
  }, []);

  if (loading) return <div className="p-8 text-center text-slate-500">Duke ngarkuar renditjen...</div>;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
      <div className="bg-[#ffafcc] p-6 text-white flex items-center gap-3">
        <Trophy className="w-6 h-6" />
        <h2 className="text-xl font-bold uppercase tracking-wider">Renditja e Nxënësve</h2>
      </div>
      
      <div className="divide-y divide-slate-50">
        {leaders.map((leader, index) => (
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
              <div className="font-bold text-slate-800">{leader.displayName}</div>
            </div>
            
            <div className="text-right">
              <div className="text-sm font-black text-[#ffafcc]">{leader.totalScore} PIKË</div>
            </div>
          </div>
        ))}
        
        {leaders.length === 0 && (
          <div className="p-8 text-center text-slate-400 italic">
            Ende nuk ka nxënës në renditje. Bëhu i pari!
          </div>
        )}
      </div>
    </div>
  );
};
