
import React from 'react';
import { PhysicsTerm } from '../types';

interface TermCardProps {
  term: PhysicsTerm;
  onClick: (term: PhysicsTerm) => void;
  category?: string;
}

export const TermCard: React.FC<TermCardProps> = ({ term, onClick, category }) => {
  return (
    <div 
      onClick={() => onClick(term)}
      className="group relative term-card-custom rounded-[3rem] shadow-sm hover:shadow-2xl transition-all duration-700 cursor-pointer overflow-hidden transform hover:-translate-y-3 active:scale-95"
    >
      {/* Visual Preview */}
      <div className="h-44 bg-white/50 flex items-center justify-center p-6 overflow-hidden relative">
        <img 
          src={term.img || 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800'} 
          className="max-w-full max-h-full object-contain group-hover:scale-105 transition-transform duration-700 z-10" 
          alt={term.name} 
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-[#bde0fe]/30 to-transparent"></div>
      </div>

      <div className="p-8 relative z-20 -mt-6 bg-inherit rounded-t-[3rem] shadow-[0_-20px_40px_-15px_rgba(0,0,0,0.03)]">
        <h3 className="text-xl font-black mb-2 group-hover:text-[#4a4e69] transition-colors leading-tight tracking-tight">
          {term.name}
        </h3>
        
        {category && (
          <span className="inline-block px-3 py-1 rounded-xl bg-white text-[#4a4e69] text-[8px] font-black uppercase tracking-widest mb-6 border border-white group-hover:bg-[#ffafcc] group-hover:text-white transition-all">
            {category}
          </span>
        )}
        
        <div className="flex flex-col gap-3 mt-1">
            <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center border border-slate-100 group-hover:border-[#ffafcc] transition-colors">
                    <span className="text-[10px] font-black text-slate-400 group-hover:text-[#4a4e69] font-mono italic">{term.sym}</span>
                </div>
                <div className="text-[8px] text-slate-400 font-black uppercase tracking-widest">Simboli</div>
            </div>
            
            <div className="flex items-center gap-3">
                <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center border border-slate-100 group-hover:border-[#ffafcc] transition-colors">
                    <span className="text-[9px] font-black text-slate-400 group-hover:text-[#4a4e69]">{term.unit}</span>
                </div>
                <div className="text-[8px] text-slate-400 font-black uppercase tracking-widest">Njësia SI</div>
            </div>
        </div>
        
        <div className="mt-6 flex items-center text-[#4a4e69] text-[9px] font-black tracking-widest opacity-0 group-hover:opacity-100 transition-all translate-x-4 group-hover:translate-x-0">
            DETAJET <i className="fas fa-arrow-right ml-2 text-[7px]"></i>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white group-hover:bg-[#ffafcc] transition-colors"></div>
    </div>
  );
};
