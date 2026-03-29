import React, { useState } from 'react';
import { motion } from 'motion/react';
import { db, collection, addDoc, serverTimestamp, handleFirestoreError, OperationType } from '../firebase';
import { useFirebase } from '../contexts/FirebaseContext';

export default function AddMaterialModal({ onClose }: { onClose: () => void }) {
  const { user, profile } = useFirebase();
  const [type, setType] = useState('Planet Mësimore');
  const [topic, setTopic] = useState('Kinematika');
  const [title, setTitle] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user) return;
    if (!file) {
      alert('Ju lutem zgjidhni një skedar!');
      return;
    }

    setIsSubmitting(true);
    try {
      console.log("Starting file upload process...");
      
      const reader = new FileReader();
      reader.onload = async (event) => {
        try {
          const base64 = event.target?.result as string;
          
          // Check size (Firestore limit is 1MB, base64 adds ~33% overhead)
          // Limit to ~700KB actual file size
          if (base64.length > 900000) {
            alert('Skedari është shumë i madh. Ju lutem ngarkoni një skedar më të vogël se 600KB.');
            setIsSubmitting(false);
            return;
          }

          const materialData = {
            type,
            topic,
            title,
            authorId: user.uid,
            authorName: profile?.displayName || user.displayName || 'Mësues',
            createdAt: serverTimestamp(),
            fileUrl: base64,
            fileName: file.name
          };

          console.log("Adding document to Firestore:", materialData);
          await addDoc(collection(db, 'materials'), materialData);
          console.log("Document added successfully.");
          
          alert('Materiali u shtua me sukses!');
          onClose();
        } catch (error) {
          console.error('Error adding material (detailed):', error);
          handleFirestoreError(error, OperationType.CREATE, 'materials');
        } finally {
          setIsSubmitting(false);
        }
      };
      
      reader.onerror = (error) => {
        console.error('Error reading file:', error);
        alert('Gabim gjatë leximit të skedarit.');
        setIsSubmitting(false);
      };
      
      reader.readAsDataURL(file);
    } catch (error) {
      console.error('Error in file upload process:', error);
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] bg-slate-900/50 backdrop-blur-sm flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
      >
        <div className="bg-gradient-to-r from-[#a2d2ff] to-[#bde0fe] p-6 text-white flex justify-between items-center">
          <h2 className="text-2xl font-black">Shto Material</h2>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/40 transition-colors">
            <i className="fas fa-times"></i>
          </button>
        </div>
        
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          <div>
            <label className="block text-sm font-bold text-slate-600 mb-2">Lloji i Materialit</label>
            <select 
              value={type} 
              onChange={(e) => setType(e.target.value)}
              className="w-full p-3 rounded-xl border-2 border-slate-100 focus:border-[#a2d2ff] outline-none"
            >
              <option value="Planet Mësimore">Plani Mësimor</option>
              <option value="Lojëra">Lojëra</option>
              <option value="Kuize">Kuize</option>
              <option value="Fletë Pune">Fletë Pune</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-bold text-slate-600 mb-2">Fusha / Tema</label>
            <select 
              value={topic} 
              onChange={(e) => setTopic(e.target.value)}
              className="w-full p-3 rounded-xl border-2 border-slate-100 focus:border-[#a2d2ff] outline-none"
            >
              <option value="Kinematika">Kinematika</option>
              <option value="Dinamika">Dinamika</option>
              <option value="Energjia">Energjia</option>
              <option value="Elektriciteti">Elektriciteti</option>
              <option value="Magnetizmi">Magnetizmi</option>
              <option value="Fizika Kuantike">Fizika Kuantike</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-bold text-slate-600 mb-2">Titulli</label>
            <input 
              type="text" 
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Titulli i materialit..."
              className="w-full p-3 rounded-xl border-2 border-slate-100 focus:border-[#a2d2ff] outline-none"
            />
          </div>
          
          <div>
            <label className="block text-sm font-bold text-slate-600 mb-2">Ngarko Skedarin (PDF, etj.)</label>
            <input 
              type="file" 
              onChange={(e) => setFile(e.target.files?.[0] || null)}
              className="w-full p-3 rounded-xl border-2 border-slate-100 focus:border-[#a2d2ff] outline-none file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-bold file:bg-[#bde0fe] file:text-slate-700 hover:file:bg-[#a2d2ff]"
            />
          </div>
          
          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full py-4 mt-4 bg-gradient-to-r from-[#a2d2ff] to-[#bde0fe] text-white rounded-xl font-black text-lg shadow-lg hover:scale-105 transition-transform disabled:opacity-50 disabled:scale-100"
          >
            {isSubmitting ? 'DUKE U SHTUAR...' : 'SHTO MATERIALIN'}
          </button>
        </form>
      </motion.div>
    </div>
  );
}
