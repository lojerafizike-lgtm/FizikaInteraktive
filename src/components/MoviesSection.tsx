import React, { useState, useEffect } from 'react';
import { Movie } from '../types';
import { moviesData } from '../data/movies';
import { motion, AnimatePresence } from 'framer-motion';

const API_URL = "https://sheetdb.io/api/v1/6q57mvz3dbfop";

interface Review {
  movieId: number;
  stars: string;
  text: string;
  date?: string;
}

const MoviesSection: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [watchlist, setWatchlist] = useState<number[]>([]);
  const [showWatchlist, setShowWatchlist] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [loadingReviews, setLoadingReviews] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('watchlist');
    if (saved) setWatchlist(JSON.parse(saved));
  }, []);

  useEffect(() => {
    if (selectedMovie) {
      fetchReviews(selectedMovie.id);
    }
  }, [selectedMovie]);

  const fetchReviews = async (movieId: number) => {
    setLoadingReviews(true);
    try {
      const res = await fetch(`${API_URL}/search?movieId=${movieId}`);
      const data = await res.json();
      setReviews(Array.isArray(data) ? data.reverse() : []);
    } catch (err) {
      console.error("Error fetching reviews:", err);
      setReviews([]);
    } finally {
      setLoadingReviews(false);
    }
  };

  const postReview = async () => {
    if (!comment || rating === 0 || !selectedMovie) return;
    const payload = { 
      data: [{ 
        movieId: selectedMovie.id, 
        stars: rating, 
        text: comment, 
        date: new Date().toLocaleString() 
      }] 
    };
    try {
      await fetch(API_URL, { 
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify(payload) 
      });
      setComment('');
      setRating(0);
      fetchReviews(selectedMovie.id);
    } catch (err) {
      console.error("Error posting review:", err);
      alert("Gabim gjatë dërgimit të vlerësimit!");
    }
  };

  const toggleWatchlist = (id: number) => {
    const newWatchlist = watchlist.includes(id) 
      ? watchlist.filter(mId => mId !== id) 
      : [...watchlist, id];
    setWatchlist(newWatchlist);
    localStorage.setItem('watchlist', JSON.stringify(newWatchlist));
  };

  const filteredMovies = moviesData.filter(m => 
    m.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const displayedMovies = showWatchlist 
    ? moviesData.filter(m => watchlist.includes(m.id))
    : filteredMovies;

  return (
    <div className="animate__animated animate__fadeIn">
      <button 
        onClick={selectedMovie ? () => setSelectedMovie(null) : onBack} 
        className="mb-8 flex items-center gap-4 font-black uppercase tracking-widest text-[11px] text-slate-400 hover:text-[#ffafcc] transition-colors"
      >
        <i className="fas fa-arrow-left"></i> {selectedMovie ? 'Kthehu te lista' : 'Kthehu mbrapa'}
      </button>

      {!selectedMovie ? (
        <div className="space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-800">Filmat dhe Fizika</h2>
            <p className="max-w-2xl mx-auto text-slate-500 font-medium leading-relaxed">
              🎓 Këta filma rekomandohen të shihen jo vetëm individualisht, por edhe në klasë së bashku me mësuesit për të diskutuar konceptet e fizikës.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <div className="relative w-full max-w-md">
              <i className="fas fa-search absolute left-5 top-1/2 -translate-y-1/2 text-slate-300"></i>
              <input 
                type="text" 
                placeholder="Kërko film..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 rounded-full border-2 border-slate-100 focus:border-[#ffafcc] outline-none transition-all font-bold text-slate-600 shadow-sm"
              />
            </div>
            <button 
              onClick={() => setShowWatchlist(!showWatchlist)}
              className={`px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest transition-all shadow-lg flex items-center gap-3 ${
                showWatchlist ? 'bg-slate-800 text-white' : 'bg-[#ffafcc] text-white hover:bg-[#ff8fab]'
              }`}
            >
              <i className={`fas ${showWatchlist ? 'fa-th-large' : 'fa-bookmark'}`}></i>
              {showWatchlist ? 'Të gjithë filmat' : 'Watchlist Im'}
            </button>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            <AnimatePresence mode="popLayout">
              {displayedMovies.map((movie) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  key={movie.id}
                  onClick={() => setSelectedMovie(movie)}
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[2/3] rounded-2xl overflow-hidden shadow-md group-hover:shadow-xl transition-all group-hover:-translate-y-2">
                    <img 
                      src={movie.poster} 
                      alt={movie.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = 'https://placehold.co/400x600/ffafcc/ffffff?text=' + encodeURIComponent(movie.title);
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4">
                      <span className="text-white font-black text-sm leading-tight">{movie.title}</span>
                    </div>
                    {watchlist.includes(movie.id) && (
                      <div className="absolute top-3 right-3 w-8 h-8 bg-[#ffafcc] rounded-full flex items-center justify-center text-white shadow-lg">
                        <i className="fas fa-bookmark text-xs"></i>
                      </div>
                    )}
                  </div>
                  <h3 className="mt-3 font-bold text-slate-700 text-sm group-hover:text-[#ffafcc] transition-colors truncate">{movie.title}</h3>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
          
          {displayedMovies.length === 0 && (
            <div className="py-20 text-center">
              <div className="text-6xl mb-4">🎬</div>
              <h3 className="text-xl font-bold text-slate-400">Nuk u gjet asnjë film.</h3>
            </div>
          )}
        </div>
      ) : (
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl border border-slate-50 overflow-hidden relative">
            <div className="flex flex-col md:flex-row gap-12 relative z-10">
              <div className="w-full md:w-1/3 shrink-0">
                <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <img 
                    src={selectedMovie.poster} 
                    alt={selectedMovie.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = 'https://placehold.co/400x600/ffafcc/ffffff?text=' + encodeURIComponent(selectedMovie.title);
                    }}
                  />
                </div>
                <button 
                  onClick={() => toggleWatchlist(selectedMovie.id)}
                  className={`w-full mt-6 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center gap-3 ${
                    watchlist.includes(selectedMovie.id) 
                      ? 'bg-slate-100 text-slate-500 hover:bg-slate-200' 
                      : 'bg-[#ffafcc] text-white hover:bg-[#ff8fab] shadow-lg shadow-pink-200'
                  }`}
                >
                  <i className={`fas ${watchlist.includes(selectedMovie.id) ? 'fa-minus' : 'fa-plus'}`}></i>
                  {watchlist.includes(selectedMovie.id) ? 'Hiq nga Watchlist' : 'Shto në Watchlist'}
                </button>
              </div>

              <div className="flex-1 space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-black text-slate-800 tracking-tighter mb-4">{selectedMovie.title}</h2>
                  <div className="w-20 h-2 bg-[#ffafcc] rounded-full mb-8"></div>
                  <p className="text-lg text-slate-600 font-medium leading-relaxed italic">
                    "{selectedMovie.desc}"
                  </p>
                </div>

                <div className="pt-8 border-t border-slate-100">
                  <h3 className="text-xl font-black text-slate-800 mb-6 flex items-center gap-3">
                    <i className="fas fa-star text-[#ffcc00]"></i> Vlerësimet e Vizitorëve
                  </h3>

                  <div className="bg-slate-50 rounded-3xl p-6 md:p-8 space-y-6">
                    <div className="space-y-4">
                      <p className="text-xs font-black text-slate-400 uppercase tracking-widest">Lini një vlerësim anonim</p>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button 
                            key={star}
                            onClick={() => setRating(star)}
                            className={`text-2xl transition-all ${rating >= star ? 'text-[#ffcc00] scale-110' : 'text-slate-200 hover:text-slate-300'}`}
                          >
                            <i className="fas fa-star"></i>
                          </button>
                        ))}
                      </div>
                      <textarea 
                        placeholder="Shkruani mendimin tuaj për këtë film..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="w-full h-32 p-6 rounded-2xl border-2 border-white focus:border-[#ffafcc] outline-none transition-all font-medium text-slate-600 shadow-inner resize-none"
                      />
                      <button 
                        onClick={postReview}
                        disabled={!comment || rating === 0}
                        className="px-10 py-4 bg-slate-800 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-slate-900 transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
                      >
                        Dërgo Vlerësimin
                      </button>
                    </div>

                    <div className="space-y-4 pt-6">
                      {loadingReviews ? (
                        <div className="text-center py-8">
                          <i className="fas fa-circle-notch fa-spin text-[#ffafcc] text-2xl"></i>
                        </div>
                      ) : reviews.length > 0 ? (
                        reviews.map((rev, i) => (
                          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-2">
                            <div className="flex items-center justify-between">
                              <div className="flex gap-1 text-[#ffcc00] text-[10px]">
                                {Array.from({ length: 5 }).map((_, idx) => (
                                  <i key={idx} className={`fas fa-star ${idx < parseInt(rev.stars) ? 'text-[#ffcc00]' : 'text-slate-100'}`}></i>
                                ))}
                              </div>
                              <span className="text-[10px] font-bold text-slate-300 uppercase tracking-widest">{rev.date || 'Sot'}</span>
                            </div>
                            <p className="text-sm font-medium text-slate-600 leading-relaxed">"{rev.text}"</p>
                            <p className="text-[10px] font-black text-[#ffafcc] uppercase tracking-widest">— Vizitor Anonim</p>
                          </div>
                        ))
                      ) : (
                        <p className="text-center py-8 text-slate-400 font-bold italic">Nuk ka vlerësime ende. Bëhu i pari!</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MoviesSection;
