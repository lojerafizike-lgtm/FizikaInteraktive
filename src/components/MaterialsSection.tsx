import React, { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ALL_PHYSICS_DATA } from '../constants';
import { gjeneroKuizPerKategorine } from '../utils/quizGenerator';
import { PhysicsData, DigitalGame } from '../types';
import { useFirebase } from '../contexts/FirebaseContext';
import { updateUserScore, db, collection, onSnapshot, query, orderBy } from '../firebase';
import html2pdf from 'html2pdf.js';
// import { DIGITAL_GAMES } from '../gameContent'; // Removed unused import


type MaterialType = 'Lojëra' | 'Kuize' | 'Fletë Pune' | 'Për Mësuesit';
type MaterialTopic = 'Kinematika' | 'Dinamika' | 'Energjia' | 'Elektriciteti' | 'Magnetizmi' | 'Fizika Kuantike' | 'Gjithëpërfshirëse';

interface Material {
  id: string;
  type: MaterialType;
  topic: MaterialTopic;
  title: string;
  description: string;
  content?: string;
  icon: string;
  actionText: string;
  actionUrl: string;
  isFavorite?: boolean;
  gameData?: DigitalGame;
  fileUrl?: string;
}

interface QuizQuestion {
  pyetja: string;
  opsionet: string[];
  pergjgjjaESakte: string;
}

const MOCK_MATERIALS: Material[] = [
  { 
    id: 'fp1', 
    type: 'Fletë Pune', 
    topic: 'Gjithëpërfshirëse' as MaterialTopic, 
    title: 'Testi i Përgjithshëm i Fizikës', 
    description: 'Test vlerësues me 10 pyetje. Mund të printohet si PDF.', 
    icon: 'fa-file-pdf', 
    actionText: 'Shkarko PDF', 
    actionUrl: 'flete-pune-fizika.html',
    isFavorite: true
  },
  { 
    id: 'fp2', 
    type: 'Fletë Pune', 
    topic: 'Kinematika', 
    title: 'Fletë Pune: Kinematika', 
    description: 'Ushtrime mbi shpejtësinë, zhvendosjen dhe nxitimin.', 
    icon: 'fa-file-alt', 
    actionText: 'Hap Fletën', 
    actionUrl: 'flete-pune-kinematika.html'
  },
  { 
    id: 'fp3', 
    type: 'Fletë Pune', 
    topic: 'Dinamika', 
    title: 'Fletë Pune: Dinamika', 
    description: 'Ushtrime mbi forcat, fërkimin dhe ligjet e Njutonit.', 
    icon: 'fa-file-alt', 
    actionText: 'Hap Fletën', 
    actionUrl: 'flete-pune-dinamika.html'
  },
  // Kinematika
  { 
    id: 'k1', 
    type: 'Për Mësuesit', 
    topic: 'Kinematika', 
    title: '1.1 Gjeometria e Lëvizjes', 
    description: 'Përcaktimi i pozicionit të një trupi dhe dallimi i rrugës nga zhvendosja.', 
    content: `### Fjalët kyç
Koordinata (x, y, z), Zhvendosja (Δx), Rruga e përshkruar (l), Koha (t), Interval kohor (Δt).

### Koha e sugjeruar
45 - 60 minuta

### Objektivat
Të përcaktojmë pozicionin e një trupi dhe të dallojmë rrugën (skalare) nga zhvendosja (vektoriale).

### Ngacmimi Fillestar
Lojë në klasë. Mësuesi i mbyll sytë një nxënësi dhe e udhëzon të gjejë një objekt vetëm duke i dhënë koordinata (p.sh., "3 hapa para, 2 djathtas"). Kjo nxit diskutimin rreth rëndësisë së pikës së referimit (origjinës).

### Eksplorimi Aktiv
"Ecja Vektoriale". Nxënësit dalin në oborr. Një nxënës ecën 4 metra në Veri dhe 3 metra në Lindje. Përmes një rrote matëse ata gjejnë rrugën e përshkruar (l = 7 m). Më pas, tërheqin një fije spangoje nga pika e nisjes tek ajo e mbërritjes për të matur zhvendosjen (Δx = 5 m). Ata matin intervalin kohor Δt me kronometër.

### Integrimi Digjital
Nxënësit futen në tabletat ose kompjuterët e shkollës tek fizikainteraktive.com. Aty luajnë lojëra të ndryshme dhe kuptojnë më mirë fizikën përmes simulimeve. Shohin video dhe foto, si dhe mjetin matës.

### Pyetja Kyç
"Nëse ecni 10 km sot rreth qytetit dhe ktheheni fiks aty ku nisët, a është zhvendosja juaj zero?"

### Reflektimi
Nxënësit vizatojnë një hartë të thjeshtë të rrugës së tyre nga shtëpia në shkollë, duke shënuar zhvendosjen me një shigjetë të drejtë.`,
    icon: 'fa-map-marker-alt', 
    actionText: 'Shiko Planin', 
    actionUrl: '#', 
    isFavorite: true 
  },
  { 
    id: 'k2', 
    type: 'Për Mësuesit', 
    topic: 'Kinematika', 
    title: '1.2 Dinamika e Lëvizjes', 
    description: 'Llogaritja e shpejtësisë dhe nxitimit, përfshirë rënien e lirë.', 
    content: `### Fjalët kyç
Shpejtësia mesatare (v_mes), Shpejtësia e çastit (v), Nxitimi (a), Nxitimi i rënies së lirë (g).

### Koha e sugjeruar
60 minuta

### Objektivat
Të llogaritim shpejtësinë dhe nxitimin, si dhe të masim empirikisht nxitimin e rënies së lirë.

### Ngacmimi Fillestar
Shfaqet një video e shkurtër e pultit të një makine garash. Diskutohet: Çfarë tregon kilometrazhi në atë sekondë? Shpejtësi mesatare apo shpejtësi të çastit?

### Eksplorimi Aktiv
- **Nxitimi:** Karrocat lëshohen në një rrafsh të pjerrët duke tërhequr një shirit letre përmes një kohëmatësi. Prerja dhe ngjitja e shiritave krijon një grafik vizual të nxitimit.
- **Rënia e lirë:** Nxënësit lëshojnë topa metali nga lartësi të ndryshme. Filmojnë rënien me celular në opsionin "slow-motion" për të llogaritur saktësisht g ≈ 9.8 m/s².

### Integrimi Digjital
Nxënësit futen në tabletat ose kompjuterët e shkollës tek fizikainteraktive.com. Aty luajnë lojëra të ndryshme dhe kuptojnë më mirë fizikën përmes simulimeve. Shohin video dhe foto, si dhe mjetin matës.

### Pyetja Kyç
"A mundet një tren të ecë me 200 km/h, por të ketë nxitim 0 m/s²?"

### Reflektimi
Diskutim se pse gjethet dhe guri bien me shpejtësi të ndryshme në realitet (rezistenca e ajrit).`,
    icon: 'fa-tachometer-alt', 
    actionText: 'Shiko Planin', 
    actionUrl: '#', 
    isFavorite: true 
  },
  { 
    id: 'k3', 
    type: 'Për Mësuesit', 
    topic: 'Kinematika', 
    title: '1.3 Lëvizja Rrethore dhe Lëkundjet', 
    description: 'Dallimi mes parametrave linearë dhe këndorë në lëvizjen rrethore.', 
    content: `### Fjalët kyç
Perioda (T), Frekuenca (f), Shpejtësia këndore (ω), Shpejtësia lineare (v), Nxitimi qendërsynues (a_c), Këndi (θ), Nxitimi këndor (α).

### Koha e sugjeruar
60 minuta

### Objektivat
Të bëjmë dallimin mes parametrave linearë dhe këndorë në lëvizjen rrethore.

### Ngacmimi Fillestar
Mësuesi sjell një rrotë biçiklete. Ngjit dy etiketa me ngjyra: një pranë boshtit dhe një tek goma e jashtme. Kur rrota rrotullohet, cila etiketë ecën më shpejt?

### Eksplorimi Aktiv
- **Lëkundjet:** Nxënësit ndërtojnë një lavjerrës të thjeshtë me spango dhe një gur. Sfida është të gjejnë gjatësinë e fijes që jep saktësisht periodën T = 1 s. Këtu kuptojnë se masa e gurit nuk ndikon në frekuencë.
- **Lëvizja rrethore:** Rrotullimi i një tape të lidhur med spango. Nxjerra e konkluzionit se ndryshimi i drejtimit të shpejtësisë lineare kërkon domosdoshmërisht një nxitim qendërsynues.

### Integrimi Digjital
Nxënësit futen në tabletat ose kompjuterët e shkollës tek fizikainteraktive.com. Aty luajnë lojëra të ndryshme dhe kuptojnë më mirë fizikën përmes simulimeve. Shohin video dhe foto, si dhe mjetin matës.

### Pyetja Kyç
"Nëse spangoja e tapës që po rrotullohet këputet, si do të fluturojë tapa: në vijë të drejtë (tangjente) apo drejt jashtë (rrezore)?"

### Reflektimi
Lidhja e formulave me dizajnin e thepisur të kthesave në autostrada ose pistat e garave.`,
    icon: 'fa-circle-notch', 
    actionText: 'Shiko Planin', 
    actionUrl: '#' 
  },

  // Dinamika
  { 
    id: 'd1', 
    type: 'Për Mësuesit', 
    topic: 'Dinamika', 
    title: '2.1 Inercia, Masa dhe Forca', 
    description: 'Zbatimi i Ligjit të Dytë të Njutonit dhe kuptimi i inercisë.', 
    content: `### Fjalët kyç
Forca (F), Masa (m), Pesha (P), Forca e rëndesës (G).

### Koha e sugjeruar
45 minuta

### Objektivat
Të zbatojmë Ligjin e Dytë të Njutonit dhe të kuptojmë pse masa nuk është e njëjtë me peshën.

### Ngacmimi Fillestar
Demonstrimi i mbulesës së tavolinës. Mësuesi tërheq me një lëvizje të shpejtë mbulesën nën disa gota plastike. Gotat nuk lëvizin falë inercisë (masës së tyre).

### Eksplorimi Aktiv
Nxënësit marrin objekte të ndryshme nga klasa. Fillimisht i masin me peshore elektronike për të gjetur masën në kilogramë. Më pas, i varin objektet tek dinamometra me sustë për të lexuar tërheqjen e Tokës në Njuton. Kështu, nxjerrin lidhjen P = mg.

### Integrimi Digjital
Nxënësit futen në tabletat ose kompjuterët e shkollës tek fizikainteraktive.com. Aty luajnë lojëra të ndryshme dhe kuptojnë më mirë fizikën përmes simulimeve. Shohin video dhe foto, si dhe mjetin matës.

### Pyetja Kyç
"Një astronaut në Stacionin Hapësinor nuk ka peshë. A i duhet atij të ushtrojë forcë për të shtyrë një kuti atje lart?"

### Reflektimi
Diskutim se si inercia shpjegon arsyen pse na duhet rripi i sigurimit në makinë.`,
    icon: 'fa-weight', 
    actionText: 'Shiko Planin', 
    actionUrl: '#', 
    isFavorite: true 
  },
  { 
    id: 'd2', 
    type: 'Për Mësuesit', 
    topic: 'Dinamika', 
    title: '2.2 Fërkimi dhe Elasticiteti', 
    description: 'Studimi i sipërfaqeve të kontaktit dhe aftësia e trupave për t\'u shformuar.', 
    content: `### Fjalët kyç
Forca e fërkimit (F_f), Koeficienti i fërkimit (μ), Forca elastike (F_e), Konstanta elastike (k).

### Koha e sugjeruar
60 minuta

### Objektivat
Të studiojmë sipërfaqet e kontaktit dhe aftësinë e trupave për t'u shformuar.

### Ngacmimi Fillestar
Dy libra të trashë u gërshetohen fletët një e nga një. Ftohen dy nxënës t'i ndajnë duke i tërhequr. Është e pamundur për shkak të forcës së fërkimit.

### Eksplorimi Aktiv
- **Fërkimi:** Rrëshqitja e një klade druri mbi xham, letër zmerile dhe gomë për të parë se forca varet vetëm nga ashpërsia e sipërfaqes.
- **Ligji i Hukut:** Nxënësit varin gurë peshe në susta të ndryshme dhe masin zgjatimin. Mbledhin të dhënat në një grafik për të gjetur konstantën elastike k.

### Integrimi Digjital
Nxënësit futen në tabletat ose kompjuterët e shkollës tek fizikainteraktive.com. Aty luajnë lojëra të ndryshme dhe kuptojnë më mirë fizikën përmes simulimeve. Shohin video dhe foto, si dhe mjetin matës.

### Pyetja Kyç
"A ekziston fërkimi në faqen e saj më të ngushtë, a do të ndryshojë forca e fërkimit gjatë rrëshqitjes?"

### Reflektimi
Vizatimi i grafikut Forcë-Zgjatim dhe gjetja e pikës ku susta prishet (Kufiri i elasticitetit).`,
    icon: 'fa-compress-arrows-alt', 
    actionText: 'Shiko Planin', 
    actionUrl: '#' 
  },
  { 
    id: 'd3', 
    type: 'Për Mësuesit', 
    topic: 'Dinamika', 
    title: '2.3 Goditjet dhe Ekuilibri', 
    description: 'Analizimi i sasisë së lëvizjes në goditje dhe kushtet e ekuilibrit statik.', 
    content: `### Fjalët kyç
Forca gravitacionale (F_G), Impulsi i forcës (Δp), Impulsi i trupit (p), Momenti i forcës (M), Krahu (d), Shtypja (P).

### Koha e sugjeruar
60 minuta

### Objektivat
Të analizojmë sasinë e lëvizjes në goditje dhe kushtet e ekuilibrit statik.

### Ngacmimi Fillestar
Lëshohen dy vezë: njëra bie në dysheme të ashpër (thyhet), tjetra mbi një jastëk të butë (shpëton). Të dyja patën të njëjtin impuls, atëherë pse rezultati është i ndryshëm?

### Eksplorimi Aktiv
- **Impulset:** Diskutohet se jastëku rrit kohën e goditjes Δt, duke zvogëluar forcën shkatërruese. Nxënësit dizenjojnë airbag-ë të vegjël prej letre për karrocat e laboratorit.
- **Momenti:** Sfida tek dera e klasës. Një nxënës shtyn derën afër menteshës, tjetri e mban afër dorezës. Kuptohet rëndësia e krahut të forcës (M = F * d).

### Integrimi Digjital
Nxënësit futen në tabletat ose kompjuterët e shkollës tek fizikainteraktive.com. Aty luajnë lojëra të ndryshme dhe kuptojnë më mirë fizikën përmes simulimeve. Shohin video dhe foto, si dhe mjetin matës.

### Pyetja Kyç
"Përse mjekët përdorin gjilpëra me majë shumë të hollë kur bëjnë një injeksion?"

### Reflektimi
Llogaritja e shtypjes që secili nxënës ushtron mbi dysheme kur qëndron me dy këmbë dhe kur qëndron me një këmbë.`,
    icon: 'fa-balance-scale', 
    actionText: 'Shiko Planin', 
    actionUrl: '#' 
  },

  // Energjia
  { 
    id: 'e1', 
    type: 'Për Mësuesit', 
    topic: 'Energjia', 
    title: '3.1 Ruajtja e Energjisë Mekanike', 
    description: 'Demonstrojmë se energjia nuk zhduket, por transferohet.', 
    content: `### Fjalët kyç
Energjia kinetike (E_k), Energjia potenciale gravitacionale (E_p), Energjia potenciale elastike (E_e), Energjia mekanike (E_m), Puna (A), Fuqia (P).

### Koha e sugjeruar
60 minuta

### Objektivat
Të demonstrojmë se energjia nuk zhduket, por transferohet, dhe të llogaritim Punën dhe Fuqinë.

### Ngacmimi Fillestar
Një top i rëndë metalik varet në tavan. Mësuesi e afron topin tek hunda e tij dhe e lëshon. Topi lëkundet dhe kthehet pas, por ndalon pak milimetra para fytyrës së mësuesit. Pse nuk e goditi?

### Eksplorimi Aktiv
"Gara e Shkallëve". Nxënësit ngjisin shkallët e shkollës. Duke ditur peshën e tyre dhe lartësinë vertikale të shkallëve, llogaritin Punën që kryen trupi i tyre (A = mgh). Duke regjistruar kohën me kronometër, ata llogaritin Fuqinë personale në Vatt (P = A/t).

### Integrimi Digjital
Nxënësit futen në tabletat ose kompjuterët e shkollës tek fizikainteraktive.com. Aty luajnë lojëra të ndryshme dhe kuptojnë më mirë fizikën përmes simulimeve. Shohin video dhe foto, si dhe mjetin matës.

### Pyetja Kyç
"Nëse dyfishoni shpejtësinë tuaj ndërsa vraponi, a dyfishohet energjia juaj kinetike? (Kujdes: formula është 1/2 mv²)."

### Reflektimi
Llogaritja e fuqisë së një makine në Kuaj Fuqi (1 HP = 745.7 W).`,
    icon: 'fa-energy', 
    actionText: 'Shiko Planin', 
    actionUrl: '#', 
    isFavorite: true 
  },
  { 
    id: 'e2', 
    type: 'Për Mësuesit', 
    topic: 'Energjia', 
    title: '3.2 Nxehtësia dhe Format e Tjera të Energjisë', 
    description: 'Analizojmë dallimin midis temperaturës dhe energjisë termike.', 
    content: `### Fjalët kyç
E. e brendshme termike (U), Energjia elektrike (E_e), Energjia kimike (E_kim), Energjia bërthamore (E = mc²).

### Koha e sugjeruar
45 - 60 minuta

### Objektivat
Të analizojmë dallimin midis temperaturës dhe energjisë termike, si dhe të kuptojmë burimet e energjisë.

### Ngacmimi Fillestar
Vendosen 100 çark-minj në një kuti xhami, ku secili mban një top ping-pongu. Lëshimi i një topi të vetëm shkakton një shpërthim masiv të topave të tjerë, duke simuluar reaksionin zinxhir në fisionin bërthamor.

### Eksplorimi Aktiv
- **Nxehtësia:** Ngrohet saktësisht me të njëjtën sasi nxehtësie një gotë me ujë dhe një gotë me vaj gatimi. Vaji nxehet shumë më shpejt. Kjo tregon inercinë e lartë termike të ujit.
- **Transformimet:** Nxënësit përdorin limonë, monedha bakri dhe vida zinku për të krijuar një bateri kimike që ndez një llambë të vogël.

### Integrimi Digjital
Nxënësit futen në tabletat ose kompjuterët e shkollës tek fizikainteraktive.com. Aty luajnë lojëra të ndryshme dhe kuptojnë më mirë fizikën përmes simulimeve. Shohin video dhe foto, si dhe mjetin matës.

### Pyetja Kyç
"Cila ka më shumë energji termike: një filxhan çaji 90°C apo akullnaja e Oqeanit Arktik?"

### Reflektimi
Diskutim se si lidhet formula e Ajnshtajnit E = mc² me dritën e Diellit.`,
    icon: 'fa-thermometer-half', 
    actionText: 'Shiko Planin', 
    actionUrl: '#' 
  },

  // Elektriciteti
  { 
    id: 'el1', 
    type: 'Për Mësuesit', 
    topic: 'Elektriciteti', 
    title: '4.1 Qarqet Elektrike', 
    description: 'Kuptojmë rrjedhën e elektroneve përmes një modeli hidraulik.', 
    content: `### Fjalët kyç
Intensiteti i rrymës (I), Rezistenca elektrike (R), Fuqia e rrymës (P), Tensioni (U).

### Koha e sugjeruar
60 minuta

### Objektivat
Të kuptojmë rrjedhën e elektroneve përmes një modeli hidraulik dhe të verifikojmë Ligjin e Ohmit.

### Ngacmimi Fillestar
Mësuesi vizaton analogjinë e ujit: Pompa është Tensioni (U) që jep presion, sasia e ujit që rrjedh është Intensiteti (I), dhe një tub i ngushtuar plot me gurë është Rezistenca (R).

### Eksplorimi Aktiv
"Qarqet me Brumë". Për të shmangur telat standardë që mund të duken abstraktë, nxënësit ndërtojnë qarqe duke përdorur brumë përcjellës dhe llamba LED. Kur e bëjnë brumin më të gjatë ose më të hollë, llamba ndriçon më pak. Kjo vërteton praktikisht ligjin e rezistencës R = ρL/S.

### Integrimi Digjital
Nxënësit futen në tabletat ose kompjuterët e shkollës tek fizikainteraktive.com. Aty luajnë lojëra të ndryshme dhe kuptojnë më mirë fizikën përmes simulimeve. Shohin video dhe foto, si dhe mjetin matës.

### Pyetja Kyç
"Bateria prodhon elektrone të reja, apo thjesht shtyn elektronet që gjenden tashmë brenda telit të bakrit?"

### Reflektimi
Leximi i etiketave të pajisjeve elektroshtëpiake për të llogaritur koston e energjisë në kilovat-orë (kWh).`,
    icon: 'fa-bolt', 
    actionText: 'Shiko Planin', 
    actionUrl: '#', 
    isFavorite: true 
  },
  { 
    id: 'el2', 
    type: 'Për Mësuesit', 
    topic: 'Elektriciteti', 
    title: '4.2 Elektrostatika', 
    description: 'Zbulojmë forcat in distancë dhe mënyrën se si ruhet ngarkesa in izolatorë.', 
    content: `### Fjalët kyç
Ngarkesa elektrike (q), Intensiteti i fushës (E), Kapaciteti elektrik (C), Potenciali elektrik (V).

### Koha e sugjeruar
45 - 60 minuta

### Objektivat
Të zbulojmë forcat në distancë dhe mënyrën se si ruhet ngarkesa në izolatorë.

### Ngacmimi Fillestar
Sfidë me tullumbace. Fërkohen tullumbacet në flokë dhe nxënësit sfidohen t'i ngjisin ato në mur pa përdorur ngjitës.

### Eksplorimi Aktiv
- **Fusha Elektrike:** Hidhen fara të imëta bari në një enë me vaj izolues, ku ndodhen dy elektroda të lidhura me tension të lartë. Farat e barit rreshtohen vizualisht sipas vijave të fushës elektrike.
- **Kapaciteti:** Çmontimi i kujdesshëm i një kondensatori industrial të vjetër. Nxënësit shohin fletët e gjata prej alumini të ndara me letër izoluese, duke kuptuar gjeometrinë e aftësisë për të mbajtur ngarkesa.

### Integrimi Digjital
Nxënësit futen në tabletat ose kompjuterët e shkollës tek fizikainteraktive.com. Aty luajnë lojëra të ndryshme dhe kuptojnë më mirë fizikën përmes simulimeve. Shohin video dhe foto, si dhe mjetin matës.

### Pyetja Kyç
"A ekziston fusha elektrike rreth një elektroni të vetmuar, edhe nëse nuk ka asnjë ngarkesë tjetër pranë për të provuar forcën?"

### Reflektimi
Shpjegimi se si energjia grumbullohet në re dhe shkarkohet në formën e rrufesë.`,
    icon: 'fa-atom', 
    actionText: 'Shiko Planin', 
    actionUrl: '#' 
  },

  // Magnetizmi
  { 
    id: 'm1', 
    type: 'Për Mësuesit', 
    topic: 'Magnetizmi', 
    title: '5.1 Fusha Magnetike dhe Forca e Amperit', 
    description: 'Vizualizojmë format 3D të magnetizmit.', 
    content: `### Fjalët kyç
Induksioni magnetik (B), Forca e Amperit (F_A).

### Koha e sugjeruar
45 minuta

### Objektivat
Të vizualizojmë format 3D të magnetizmit dhe të vërtetojmë konvertimin e elektricitetit në forcë mekanike.

### Ngacmimi Fillestar
Derdhet lëng ferro-magnetik mbi një pllakë xhami. Kur një magnet i fortë neodiumi afrohet nga poshtë, lëngu ngrihet duke formuar majuca të zinj, sipas drejtimit të fushës.

### Eksplorimi Aktiv
"Motori Homopolar". Nxënësve u jepet një bateri, një magnet neodiumi dhe një tel bakri. Duke i montuar si duhet, teli fillon të rrotullohet menjëherë rreth baterisë. Ky është zbatimi praktik i Forcës së Amperit dhe rregullit të dorës së majtë.

### Integrimi Digjital
Nxënësit futen në tabletat ose kompjuterët e shkollës tek fizikainteraktive.com. Aty luajnë lojëra të ndryshme dhe kuptojnë më mirë fizikën përmes simulimeve. Shohin video dhe foto, si dhe mjetin matës.

### Pyetja Kyç
"Çfarë ndodh me një tel që përcjell rrymë nëse e vendosim saktësisht paralelisht me vijat e fushës së magnetit?"

### Reflektimi
Si shfrytëzohet ky fenomen brenda altoparlantëve të celularëve tanë?`,
    icon: 'fa-magnet', 
    actionText: 'Shiko Planin', 
    actionUrl: '#', 
    isFavorite: true 
  },
  { 
    id: 'm2', 
    type: 'Për Mësuesit', 
    topic: 'Magnetizmi', 
    title: '5.2 Induksioni Elektromagnetik', 
    description: 'Demonstrojmë se si prodhohet energjia elektrike pa përdorur bateri.', 
    content: `### Fjalët kyç
Fluksi Magnetik (Φ), F.e.m. e induktuar (ε), Rryma e induktuar (I_in).

### Koha e sugjeruar
60 minuta

### Objektivat
Të demonstrojmë se si prodhohet energjia elektrike pa përdorur bateri, përmes zbulimeve të Faradeit.

### Ngacmimi Fillestar
Mësuesi lëshon dy magnetë njëkohësisht. Njëri lëshohet në një tub plastike dhe bie menjëherë. Tjetri lëshohet në një tub bakri dhe bie jashtëzakonisht ngadalë. Kjo vërteton Ligjin e Lencit.

### Eksplorimi Aktiv
Nxënësit marrin në dorë gjeneratorë të thjeshtë edukativë me manivelë. Ata rrotullojnë magnetin pranë një bobine dhe shohin një llambë LED të ndizet. Ata zbulojnë se rrotullimi më i shpejtë shkakton ndriçim më të fortë të llambës.

### Integrimi Digjital
Nxënësit futen në tabletat ose kompjuterët e shkollës tek fizikainteraktive.com. Aty luajnë lojëra të ndryshme dhe kuptojnë më mirë fizikën përmes simulimeve. Shohin video dhe foto, si dhe mjetin matës.

### Pyetja Kyç
"Kur prodhoni dritë me gjeneratorin me dorë, cili është burimi i vërtetë i energjisë: magneti, teli i bakrit, apo energjia e muskujve tuaj?"

### Reflektimi
Skicimi i një hidrocentrali duke i treguar ujit rolin e manivelës që rrotullon turbinën.`,
    icon: 'fa-plug', 
    actionText: 'Shiko Planin', 
    actionUrl: '#' 
  },

  // Fizika Kuantike
  { 
    id: 'q1_plan', 
    type: 'Për Mësuesit', 
    topic: 'Fizika Kuantike', 
    title: '6.1 Fotoefekti dhe Energjia Kuantike', 
    description: 'Zbulojmë se drita vjen in formë paketash (foton).', 
    content: `### Fjalët kyç
Energjia e fotonit (E = hf), Puna e daljes (A_d = hf_prag).

### Koha e sugjeruar
60 minuta

### Objektivat
Të zbulojmë se drita vjen në formë paketash (fotone) dhe të zgjidhim probleme bazuar në ekuacionin e fotoefektit.

### Ngacmimi Fillestar
Mësuesi ndriçon një pllakë zinku të lidhur me një elektroskop. Një dritë e kuqe jashtëzakonisht e fortë nuk shkakton asnjë efekt. Kurse një dritë shumë e zbehtë ultravjollcë i bën fletët të mbyllen menjëherë. Pse ngjyra ka rëndësi, dhe jo fuqia e dritës?

### Eksplorimi Aktiv
Zgjidhja e ushtrimeve praktike:
- **Ushtrim 1:** Një rrezatim ka frekuencën f = 4.0 * 10^18 Hz. Gjeni energjinë e fotonit (Konstanta e Plankut h = 6.63 * 10^-34 J * s). Zgjidhja: Përdorim formulën E = hf. E = 6.63 * 10^-34 * 4.0 * 10^18 ≈ 2.7 * 10^-15 J.
- **Ushtrim 2:** Mbi një pllakë metali bie rrezatim. Puna e daljes për metalin është A_d = 3 eV (ose 4.8 * 10^-19 J). Gjeni gjatësinë valore λ maksimale që shkakton fotoefekt. Alternativat: A) 0.4μm, B) 0.5μm, C) 0.6μm, D) 0.7μm. Zgjidhja: λ = hc/A_d = (6.62 * 10^-34 * 3 * 10^8) / 4.8 * 10^-19 = 0.4μm. Përgjigjja e saktë është A.

### Integrimi Digjital
Nxënësit futen në tabletat ose kompjuterët e shkollës tek fizikainteraktive.com. Aty luajnë lojëra të ndryshme dhe kuptojnë më mirë fizikën përmes simulimeve. Shohin video dhe foto, si dhe mjetin matës (psh. Spektrometri dhe Qeliza Fotoelektrike).

### Pyetja Kyç
"A ndikon intensiteti i dritës në shkëputjen e elektronit nëse secilit foton është e vogël se puna e daljes?"

### Reflektimi
Si shfrytëzohet ky parim në panelet diellore fotovoltaike.`,
    icon: 'fa-bolt', 
    actionText: 'Shiko Planin', 
    actionUrl: '#', 
    isFavorite: true 
  },
  { 
    id: 'q2_plan', 
    type: 'Për Mësuesit', 
    topic: 'Fizika Kuantike', 
    title: '6.2 Valët e Lëndës (Hipoteza e Broglie)', 
    description: 'Çdo grimcë in lëvizje ka një valë të shoqëruar.', 
    content: `### Fjalët kyç
Gjatësia e valës së de Broglie (λ = h/mv).

### Koha e sugjeruar
45 minuta

### Objektivat
Të kuptojmë se çdo grimcë në lëvizje ka një valë të shoqëruar.

### Ngacmimi Fillestar
A mundet një elektron i vetëm të kalojë përmes dy çarjeve paralele dhe të bëjë interferencë me vetveten?

### Eksplorimi Aktiv
Analizë e eksperimentit ku një tufë elektronesh kalon përmes kristaleve dhe krijon unaza difraksioni njëlloj si valët.
- **Ushtrim:** Një elektron ka E_k = 2 eV. Gjej gjatësinë e valës së de Broglie. Alternativat: A) 0.65 nm, B) 0.75 nm, C) 0.87 nm, D) 0.88 nm. Zgjidhja: Gjejmë shpejtësinë nga v = sqrt(2E_k/m). E zëvendësojmë në λ = h/mv dhe vlera del 0.87 nm. Përgjigjja e saktë është C.

### Integrimi Digjital
Nxënësit futen në tabletat ose kompjuterët e shkollës tek fizikainteraktive.com. Aty luajnë lojëra të ndryshme dhe kuptojnë më mirë fizikën përmes simulimeve. Shohin video dhe foto, si dhe mjetin matës (psh. Difraktometri i elektroneve).

### Pyetja Kyç
"Pse kur luajmë futboll ne nuk shohim që topi të sillet si valë?"

### Reflektimi
Si u zhvillua Mikroskopi Elektronik duke shfrytëzuar gjatësinë e shkurtër të valës së elektronit për të parë detaje më të vogla se ato që tregon drita.`,
    icon: 'fa-wave-square', 
    actionText: 'Shiko Planin', 
    actionUrl: '#' 
  },
  { 
    id: 'q3_plan', 
    type: 'Për Mësuesit', 
    topic: 'Fizika Kuantike', 
    title: '6.3 Ligji i Zbërthimit dhe Radioaktiviteti', 
    description: 'Llogaritja e kohës gjatë së cilës zbërthehet gjysma e bërthamave radioaktive.', 
    content: `### Fjalët kyç
Perioda e gjysmëzbërthimit (T_1/2 = ln 2 / λ).

### Koha e sugjeruar
45 - 60 minuta

### Objektivat
Të llogaritim kohën gjatë së cilës zbërthehet gjysma e bërthamave radioaktive.

### Ngacmimi Fillestar
Nxënësit marrin 100 monedha metalike dhe i hedhin mbi tavolinë. Çdo monedhë që bie "stemë" konsiderohet e zbërthyer dhe hiqet. Ritmi me të cilin bie numri i monedhave demonstron ligjin e zbërthimit radioaktiv.

### Eksplorimi Aktiv
- Analizohen grafikët e numrit të bërthamave të mbetura sipas kohës.
- **Ushtrim:** Një izotop radioaktiv e ka periodën e gjysmëzbërthimit 2 orë. Sa pjesë ka mbetur pas 4 orësh? Alternativat: A) 1/16, B) 1/8, C) 1/4, D) 1/2. Zgjidhja: Pas 2 orësh izotopi përgjysmohet (1/2). Pas 4 orësh përgjysmohet sërish (1/4). Përgjigjja e saktë është C.

### Integrimi Digjital
Nxënësit futen në tabletat ose kompjuterët e shkollës tek fizikainteraktive.com. Aty luajnë lojëra të ndryshme dhe kuptojnë më mirë fizikën përmes simulimeve. Shohin video dhe foto, si dhe mjetin matës (psh. Detektori Geiger).

### Pyetja Kyç
"A mund të parashikojmë saktësisht se cila prej këtyre bërthamave do të zbërthehet e para?"

### Reflektimi
Si e përdorin shkencëtarët Karbonin-14 për të gjetur moshën e fosileve të lashta.`,
    icon: 'fa-radiation', 
    actionText: 'Shiko Planin', 
    actionUrl: '#' 
  },

  // Kuize të gjeneruara automatikisht
  { id: 'q1', type: 'Kuize', topic: 'Kinematika', title: 'Kuiz: Kinematika', description: 'Testo njohuritë mbi lëvizjen, shpejtësinë dhe nxitimin.', icon: 'fa-question-circle', actionText: 'Fillo Kuizin', actionUrl: '#', isFavorite: true },
  { id: 'q2', type: 'Kuize', topic: 'Dinamika', title: 'Kuiz: Dinamika', description: 'Testo njohuritë mbi forcat dhe ligjet e Njutonit.', icon: 'fa-question-circle', actionText: 'Fillo Kuizin', actionUrl: '#', isFavorite: true },
  { id: 'q3', type: 'Kuize', topic: 'Energjia', title: 'Kuiz: Energjia', description: 'Testo njohuritë mbi punën, fuqinë dhe energjinë.', icon: 'fa-question-circle', actionText: 'Fillo Kuizin', actionUrl: '#', isFavorite: true },
  { id: 'q4', type: 'Kuize', topic: 'Elektriciteti', title: 'Kuiz: Elektriciteti', description: 'Testo njohuritë mbi rrymën, tensionin dhe rezistencën.', icon: 'fa-question-circle', actionText: 'Fillo Kuizin', actionUrl: '#', isFavorite: true },
  { id: 'q5', type: 'Kuize', topic: 'Magnetizmi', title: 'Kuiz: Magnetizmi', description: 'Testo njohuritë mbi fushën magnetike dhe induksionin.', icon: 'fa-question-circle', actionText: 'Fillo Kuizin', actionUrl: '#', isFavorite: true },
  { id: 'q6', type: 'Kuize', topic: 'Fizika Kuantike', title: 'Kuiz: Fizika Kuantike', description: 'Testo njohuritë mbi fotonet dhe radioaktivitetin.', icon: 'fa-question-circle', actionText: 'Fillo Kuizin', actionUrl: '#', isFavorite: true }
];

const PROJECTS: Material[] = [
  {
    id: 'p1',
    type: 'Për Mësuesit',
    topic: 'Gjithëpërfshirëse',
    title: "Sistemi Diellor në Klasë",
    description: "Udhëzues për ndërtimin e një modeli të shkallëzuar të sistemit diellor.",
    icon: "fa-sun",
    actionText: "Shiko Udhëzuesin",
    actionUrl: "#",
    isFavorite: false
  },
  {
    id: 'p2',
    type: 'Për Mësuesit',
    topic: 'Dinamika',
    title: "Makina me Reaksion",
    description: "Si të ndërtoni një makinë të thjeshtë që lëviz me ajër (Ligji i 3-të i Njutonit).",
    icon: "fa-car",
    actionText: "Shiko Eksperimentin",
    actionUrl: "#",
    isFavorite: false
  },
  {
    id: 'p3',
    type: 'Për Mësuesit',
    topic: 'Energjia',
    title: "Spektri i Dritës",
    description: "Poster i printueshëm që shpjegon zbërthimin e dritës së bardhë.",
    icon: "fa-rainbow",
    actionText: "Shkarko Posterin",
    actionUrl: "#",
    isFavorite: false
  }
];

export default function MaterialsSection({ onPlayGame }: { onPlayGame?: (game: DigitalGame) => void }) {
  const { user, profile } = useFirebase();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState<MaterialType | null>(null);
  const [selectedTopic, setSelectedTopic] = useState<MaterialTopic | null>(null);
  const [activeQuiz, setActiveQuiz] = useState<{ topic: string, questions: QuizQuestion[] } | null>(null);
  const [uploadedMaterials, setUploadedMaterials] = useState<Material[]>([]);

  useEffect(() => {
    const q = query(collection(db, 'materials'), orderBy('createdAt', 'desc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      console.log("Materials snapshot received. Count:", snapshot.size);
      const materials: Material[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        console.log("Material data:", data);
        // Map Firestore data to Material interface
        materials.push({
          id: doc.id,
          type: (data.type === 'Planet Mësimore' ? 'Për Mësuesit' : data.type) as MaterialType || 'Për Mësuesit',
          topic: (data.topic as MaterialTopic) || 'Gjithëpërfshirëse',
          title: data.title || 'Material pa titull',
          description: `Ngarkuar nga ${data.authorName || 'Mësues'}`,
          icon: data.type === 'Planet Mësimore' ? 'fa-file-pdf' : 'fa-file-alt',
          actionText: 'Hap PDF',
          actionUrl: data.fileUrl || '#',
          fileUrl: data.fileUrl,
        });
      });
      setUploadedMaterials(materials);
    }, (error) => {
      console.error("Error fetching materials:", error);
    });

    return () => unsubscribe();
  }, []);

  const ALL_MATERIALS = useMemo(() => {
    return [...MOCK_MATERIALS, ...PROJECTS, ...uploadedMaterials];
  }, [uploadedMaterials]);

  const filteredMaterials = useMemo(() => {
    return ALL_MATERIALS.filter(m => {
      const matchesSearch = m.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            m.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesType = selectedType ? m.type === selectedType : true;
      const matchesTopic = selectedTopic ? m.topic === selectedTopic : true;
      return matchesSearch && matchesType && matchesTopic;
    });
  }, [searchTerm, selectedType, selectedTopic, ALL_MATERIALS]);

  const favorites = ALL_MATERIALS.filter(m => m.isFavorite).slice(0, 4);

  const isTeacher = profile?.role === 'mesues' || user?.email === 'lojerafizike@gmail.com';

  const openLessonPlanAsPDF = (plan: Material) => {
    if (plan.fileUrl) {
      window.open(plan.fileUrl, '_blank');
      return;
    }

    const element = document.createElement('div');
    element.innerHTML = `
      <div style="font-family: Arial, sans-serif; padding: 40px; color: #333;">
        <h1 style="color: #4a4e69; border-bottom: 2px solid #ffafcc; padding-bottom: 10px;">${plan.title}</h1>
        <p style="color: #888; font-size: 12px; text-transform: uppercase;">Tema: ${plan.topic}</p>
        <div style="margin-top: 30px; line-height: 1.6;">
          ${plan.content ? plan.content.split('\n\n').map(section => {
            if (section.startsWith('###')) {
              return `<h3 style="color: #4a4e69; margin-top: 20px;">${section.replace('### ', '')}</h3>`;
            }
            if (section.startsWith('- **')) {
              return `<ul style="margin-top: 10px;">
                ${section.split('\n').map(item => `<li>${item.replace('- **', '<strong>').replace('**: ', '</strong>: ')}</li>`).join('')}
              </ul>`;
            }
            if (section.match(/^\d\./)) {
              return `<ol style="margin-top: 10px;">
                ${section.split('\n').map(item => `<li>${item.split('.').slice(1).join('.').trim()}</li>`).join('')}
              </ol>`;
            }
            return `<p style="margin-top: 10px;">${section}</p>`;
          }).join('') : '<p>Përmbajtja po përgatitet...</p>'}
        </div>
      </div>
    `;

    const opt = {
      margin:       10,
      filename:     `${plan.title.replace(/[^a-z0-9]/gi, '_').toLowerCase()}.pdf`,
      image:        { type: 'jpeg' as const, quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' as const }
    };

    html2pdf().set(opt).from(element).toPdf().get('pdf').then((pdf: { output: (type: string) => string }) => {
      window.open(pdf.output('bloburl'), '_blank');
    });
  };

  return (
    <div className="animate__animated animate__fadeIn space-y-20 pb-20">
      {/* Hero Section */}
      <section className="text-center space-y-8 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <h2 className="text-5xl md:text-8xl font-black tracking-tighter text-slate-800">
            Materiale <span className="text-[#ffafcc]">Didaktike</span>
          </h2>
          <p className="text-lg md:text-2xl text-slate-500 max-w-3xl mx-auto font-medium leading-relaxed">
            Gjeni materiale mbështetëse, lojëra dhe ide për projekte për ta bërë orën e fizikës sa më interaktive.
          </p>
        </motion.div>

        {/* Search Bar */}
        <div className="max-w-3xl mx-auto relative group">
          <div className="absolute inset-0 bg-[#ffafcc]/10 blur-2xl rounded-[3rem] group-hover:bg-[#ffafcc]/20 transition-all duration-500"></div>
          <div className="relative bg-white p-2 rounded-[2.5rem] shadow-xl border-2 border-white flex items-center">
            <div className="pl-6 text-slate-400">
              <i className="fas fa-search text-xl"></i>
            </div>
            <input 
              type="text" 
              placeholder="Kërko për një temë (p.sh. Dinamika, Forca e Fërkimit)..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 bg-transparent outline-none font-bold text-lg text-slate-700 placeholder:text-slate-300"
            />
          </div>
        </div>

        {/* Filter Tags */}
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex flex-wrap justify-center gap-3">
            <span className="w-full text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] mb-2">Sipas Llojit</span>
            {['Lojëra', 'Kuize', 'Fletë Pune', ...(isTeacher ? ['Për Mësuesit'] : [])].map(type => (
              <button 
                key={type}
                onClick={() => setSelectedType(selectedType === type ? null : type as MaterialType)}
                className={`px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${selectedType === type ? 'bg-[#ffafcc] text-white shadow-lg scale-105' : 'bg-white text-slate-400 hover:text-[#ffafcc] shadow-sm border border-slate-100'}`}
              >
                {type}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="w-full text-[10px] font-black text-slate-300 uppercase tracking-[0.3em] mb-2">Sipas Fushës</span>
            {['Kinematika', 'Dinamika', 'Energjia', 'Elektriciteti', 'Magnetizmi', 'Fizika Kuantike', 'Gjithëpërfshirëse'].map(topic => (
              <button 
                key={topic}
                onClick={() => setSelectedTopic(selectedTopic === topic ? null : topic as MaterialTopic)}
                className={`px-8 py-3 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${selectedTopic === topic ? 'bg-[#4a4e69] text-white shadow-lg scale-105' : 'bg-white text-slate-400 hover:text-[#4a4e69] shadow-sm border border-slate-100'}`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Favorites of the Month */}
      {!searchTerm && !selectedType && !selectedTopic && (
        <section className="space-y-10">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-[#ffafcc] text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg">
              <i className="fas fa-heart"></i>
            </div>
            <div>
              <h3 className="text-3xl font-black tracking-tighter text-slate-800">Të Preferuarat e Muajit</h3>
              <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">MATERIALET MË TË MIRË PËR KËTË PERIUDHË</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {favorites.map(m => (
              <MaterialCard 
                key={m.id} 
                material={m} 
                onAction={() => {
                  if (m.type === 'Kuize') {
                    const questions = gjeneroKuizPerKategorine(m.topic, ALL_PHYSICS_DATA as unknown as PhysicsData);
                    setActiveQuiz({ topic: m.topic, questions });
                  } else if (m.gameData && onPlayGame) {
                    onPlayGame(m.gameData);
                  } else if (m.type === 'Për Mësuesit') {
                    openLessonPlanAsPDF(m);
                  }
                }}
              />
            ))}
          </div>
        </section>
      )}

      {/* Main Grid */}
      <section className="space-y-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-[#4a4e69] text-white rounded-2xl flex items-center justify-center text-2xl shadow-lg">
              <i className="fas fa-th-large"></i>
            </div>
            <div>
              <h3 className="text-3xl font-black tracking-tighter text-slate-800">
                {searchTerm || selectedType || selectedTopic ? 'Rezultatet e Kërkimit' : 'Të Gjitha Materialet'}
              </h3>
              <p className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{filteredMaterials.length} BURIME TË GJETURA</p>
            </div>
          </div>
        </div>
        
        {filteredMaterials.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredMaterials.map(m => (
              <MaterialCard 
                key={m.id} 
                material={m} 
                onAction={() => {
                  if (m.type === 'Kuize') {
                    const questions = gjeneroKuizPerKategorine(m.topic, ALL_PHYSICS_DATA as unknown as PhysicsData);
                    setActiveQuiz({ topic: m.topic, questions });
                  } else if (m.gameData && onPlayGame) {
                    onPlayGame(m.gameData);
                  } else if (m.type === 'Për Mësuesit') {
                    openLessonPlanAsPDF(m);
                  }
                }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-white rounded-[4rem] border-4 border-dashed border-slate-100">
            <div className="w-24 h-24 bg-slate-50 text-slate-200 rounded-full flex items-center justify-center text-4xl mx-auto mb-6">
              <i className="fas fa-search"></i>
            </div>
            <h4 className="text-2xl font-black text-slate-400 tracking-tight">Nuk u gjet asnjë material</h4>
            <p className="text-slate-300 mt-2 font-medium">Provo të ndryshosh filtrat ose fjalët e kërkimit.</p>
          </div>
        )}
      </section>

      <AnimatePresence>
        {activeQuiz && (
          <QuizModal 
            quiz={activeQuiz} 
            onClose={() => setActiveQuiz(null)} 
          />
        )}
      </AnimatePresence>

      {/* PROJECTS Section */}
      {/* Removed PROJECTS Section */}
    </div>
  );
}

function MaterialCard({ material, onAction }: { material: Material, onAction?: () => void }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="bg-white p-10 rounded-[3.5rem] shadow-sm hover:shadow-2xl transition-all border-2 border-transparent hover:border-[#ffafcc]/20 flex flex-col h-full group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#ffafcc]/5 to-transparent rounded-bl-[5rem]"></div>
      
      <div className="flex items-start justify-between mb-10 relative z-10">
        <div className="w-20 h-20 bg-slate-50 text-slate-300 rounded-[2rem] flex items-center justify-center text-3xl group-hover:bg-[#ffafcc] group-hover:text-white transition-all shadow-inner">
          <i className={`fas ${material.icon}`}></i>
        </div>
        <div className="flex flex-col items-end gap-2">
          <span className="text-[8px] font-black uppercase tracking-widest bg-slate-100 text-slate-400 px-4 py-1.5 rounded-full">
            {material.type}
          </span>
          <span className="text-[8px] font-black uppercase tracking-widest bg-[#4a4e69]/5 text-[#4a4e69] px-4 py-1.5 rounded-full">
            {material.topic}
          </span>
        </div>
      </div>
      
      <h4 className="text-2xl font-black tracking-tighter text-slate-800 mb-4 group-hover:text-[#ffafcc] transition-colors leading-tight">{material.title}</h4>
      <p className="text-slate-500 leading-relaxed font-medium flex-grow mb-10">{material.description}</p>
      
      {material.actionUrl !== '#' ? (
        <a 
          href={material.actionUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full py-5 bg-[#ffafcc] text-white rounded-[2rem] font-black text-[10px] uppercase tracking-[0.2em] shadow-xl hover:bg-[#ff8fab] hover:scale-105 active:scale-95 transition-all relative z-10 text-center block"
        >
          {material.actionText}
        </a>
      ) : (
        <button 
          onClick={onAction}
          className="w-full py-5 bg-[#ffafcc] text-white rounded-[2rem] font-black text-[10px] uppercase tracking-[0.2em] shadow-xl hover:bg-[#ff8fab] hover:scale-105 active:scale-95 transition-all relative z-10"
        >
          {material.actionText}
        </button>
      )}
    </motion.div>
  );
}

function QuizModal({ quiz, onClose }: { quiz: { topic: string, questions: QuizQuestion[] }, onClose: () => void }) {
  const { user, profile } = useFirebase();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleAnswer = (option: string) => {
    if (selectedOption) return;
    setSelectedOption(option);
    const correct = option === quiz.questions[currentQuestion].pergjgjjaESakte;
    setIsCorrect(correct);
    if (correct) setScore(s => s + 1);

    setTimeout(() => {
      if (currentQuestion < quiz.questions.length - 1) {
        setCurrentQuestion(c => c + 1);
        setSelectedOption(null);
        setIsCorrect(null);
      } else {
        setShowResult(true);
        // Award points if student
        if (user && profile?.role !== 'mesues') {
          const points = Math.round((score + (correct ? 1 : 0)) * 5); // 5 points per correct answer
          if (points > 0) {
            updateUserScore(user.uid, points);
          }
        }
      }
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 md:p-6 bg-slate-900/90 backdrop-blur-md"
    >
      <motion.div 
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        className="bg-white w-full max-w-2xl rounded-[2rem] md:rounded-[3rem] shadow-2xl overflow-hidden relative max-h-[90vh] flex flex-col"
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 bg-slate-100 text-slate-800 rounded-full flex items-center justify-center hover:bg-red-500 hover:text-white transition-all z-[110] shadow-md border border-slate-200"
          title="Mbyll"
        >
          <i className="fas fa-times text-lg md:text-xl"></i>
        </button>

        <div className="overflow-y-auto custom-scrollbar flex-1 min-h-0">
          {!showResult ? (
            <div className="p-6 md:p-12 space-y-6 md:space-y-8">
              <div className="space-y-2 pr-12">
                <p className="text-[10px] font-black text-[#ffafcc] uppercase tracking-[0.3em] truncate">KUIZ: {quiz.topic}</p>
                <div className="flex items-center justify-between">
                  <h3 className="text-xl md:text-3xl font-black tracking-tighter text-slate-800">Pyetja {currentQuestion + 1} / {quiz.questions.length}</h3>
                  <div className="w-20 md:w-32 h-2 bg-slate-100 rounded-full overflow-hidden shrink-0 ml-4">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${((currentQuestion + 1) / quiz.questions.length) * 100}%` }}
                      className="h-full bg-[#ffafcc]"
                    />
                  </div>
                </div>
              </div>

              <p className="text-base md:text-xl font-bold text-slate-700 leading-relaxed">
                {quiz.questions[currentQuestion].pyetja}
              </p>

              <div className="grid grid-cols-1 gap-3 md:gap-4 pb-4">
                {quiz.questions[currentQuestion].opsionet.map((option: string, idx: number) => {
                  const isSelected = selectedOption === option;
                  const isCorrectOption = option === quiz.questions[currentQuestion].pergjgjjaESakte;
                  
                  let bgColor = 'bg-slate-50';
                  let textColor = 'text-slate-600';
                  let borderColor = 'border-transparent';

                  if (isSelected) {
                    if (isCorrect) {
                      bgColor = 'bg-emerald-50';
                      textColor = 'text-emerald-600';
                      borderColor = 'border-emerald-200';
                    } else {
                      bgColor = 'bg-red-50';
                      textColor = 'text-red-600';
                      borderColor = 'border-red-200';
                    }
                  } else if (selectedOption && isCorrectOption) {
                    bgColor = 'bg-emerald-50';
                    textColor = 'text-emerald-600';
                    borderColor = 'border-emerald-200';
                  }

                  return (
                    <button
                      key={idx}
                      onClick={() => handleAnswer(option)}
                      disabled={!!selectedOption}
                      className={`w-full p-4 md:p-6 rounded-xl md:rounded-2xl text-left font-bold transition-all border-2 ${bgColor} ${textColor} ${borderColor} hover:scale-[1.01] active:scale-[0.99]`}
                    >
                      <div className="flex items-center gap-3 md:gap-4">
                        <span className="w-6 h-6 md:w-8 md:h-8 rounded-lg bg-white/50 flex items-center justify-center text-[10px] md:text-xs font-black">
                          {String.fromCharCode(65 + idx)}
                        </span>
                        <span className="text-sm md:text-base">{option}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="p-12 md:p-16 text-center space-y-6 md:space-y-8">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-[#ffafcc] text-white rounded-full flex items-center justify-center text-3xl md:text-4xl mx-auto shadow-xl">
                <i className="fas fa-trophy"></i>
              </div>
              <div className="space-y-2">
                <h3 className="text-3xl md:text-4xl font-black tracking-tighter text-slate-800">Përfundoi!</h3>
                <p className="text-slate-500 font-medium">Rezultati yt për temën {quiz.topic}</p>
              </div>
              <div className="text-5xl md:text-6xl font-black text-[#ffafcc]">
                {score} / {quiz.questions.length}
              </div>
              <button 
                onClick={onClose}
                className="w-full py-4 md:py-5 bg-[#4a4e69] text-white rounded-xl md:rounded-[2rem] font-black text-[10px] uppercase tracking-[0.2em] shadow-xl hover:bg-slate-800 transition-all"
              >
                MBYLL KUIZIN
              </button>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}


