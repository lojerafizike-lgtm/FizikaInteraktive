import React, { useState } from 'react';
import { motion } from 'motion/react';

interface KuicTabProps {
  kuic: {
    titulli: string;
    pyetjet: {
      pyetja: string;
      opsionet: string[];
      sakte: number;
      svg?: string;
    }[];
  };
}

const KuicTab: React.FC<KuicTabProps> = ({ kuic }) => {
  const [answers, setAnswers] = useState<Record<number, number>>({});

  const handleSelect = (qIdx: number, optIdx: number) => {
    setAnswers(prev => ({ ...prev, [qIdx]: optIdx }));
  };

  return (
    <div className="animate__animated animate__fadeInUp max-w-4xl mx-auto py-8">
      <div className="text-center mb-10">
        <h3 className="text-3xl font-black text-slate-800 tracking-tighter mb-2">{kuic.titulli}</h3>
        <p className="text-slate-500 font-medium">Zgjidh alternativën e saktë për secilën pyetje.</p>
      </div>

      <div className="space-y-12">
        {kuic.pyetjet.map((q, qIdx) => {
          const isAnswered = answers[qIdx] !== undefined;

          return (
            <div key={qIdx} className="bg-white p-6 md:p-10 rounded-[2rem] shadow-sm border border-slate-100 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-2 h-full bg-[#ffb703]"></div>
              
              <h4 className="text-xl font-bold text-slate-700 leading-relaxed mb-6">{q.pyetja}</h4>
              
              {q.svg && (
                <div className="mb-8 w-full overflow-x-auto flex justify-center bg-slate-50 p-6 rounded-2xl border border-slate-100" dangerouslySetInnerHTML={{ __html: q.svg }} />
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {q.opsionet.map((opt, optIdx) => {
                  let btnClass = "text-left p-4 rounded-xl border-2 transition-all font-medium flex items-center justify-between";
                  
                  if (isAnswered) {
                    if (optIdx === q.sakte) {
                      btnClass += " bg-emerald-50 border-emerald-500 text-emerald-800 shadow-sm";
                    } else if (answers[qIdx] === optIdx) {
                      btnClass += " bg-rose-50 border-rose-400 text-rose-800";
                    } else {
                      btnClass += " bg-slate-50 border-slate-200 text-slate-400 opacity-70";
                    }
                  } else {
                    btnClass += " bg-white border-slate-200 text-slate-600 hover:border-[#ffb703] hover:bg-[#fffdf7] hover:shadow-md cursor-pointer";
                  }

                  return (
                    <button
                      key={optIdx}
                      disabled={isAnswered}
                      onClick={() => handleSelect(qIdx, optIdx)}
                      className={btnClass}
                    >
                      <span>{opt}</span>
                      {isAnswered && optIdx === q.sakte && (
                         <motion.i initial={{ scale: 0 }} animate={{ scale: 1 }} className="fas fa-check-circle text-emerald-500 text-xl ml-3"></motion.i>
                      )}
                      {isAnswered && answers[qIdx] === optIdx && optIdx !== q.sakte && (
                         <motion.i initial={{ scale: 0 }} animate={{ scale: 1 }} className="fas fa-times-circle text-rose-500 text-xl ml-3"></motion.i>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default KuicTab;
