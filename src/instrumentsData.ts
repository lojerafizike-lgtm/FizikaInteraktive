export const instrumentsData = [
  // KINEMATIKA
  { cat: 'Kinematika', name: 'Koordinata', sym: 'x, y, z', unit: 'm', nature: 'Vektoriale',
    instrument: 'Vizore / Shirit matës', icon: '📏',
    desc: 'Vizoreja dhe shiriti matës janë mjetet themelore për matjen e koordinatave dhe pozicionit. Vizoreja ka shkallëzim milimetrik, ndërsa shiriti matës mund të matë gjatësi deri në disa metra.',
    simType: 'ruler', color: '#FFB6C1' },

  { cat: 'Kinematika', name: 'Zhvendosja', sym: 'Δx', unit: 'm', nature: 'Vektoriale',
    instrument: 'Shirit matës / Vizore', icon: '📐',
    desc: 'Shiriti matës dhe vizoreja përdoren për të matur largësinë midis pozicionit fillestar dhe atij përfundimtar të trupit. Shiriti matës fleksibël është ideal për sipërfaqe të lakuara.',
    simType: 'ruler', color: '#FFB6C1' },

  { cat: 'Kinematika', name: 'Koha', sym: 't', unit: 's', nature: 'Skalare',
    instrument: 'Kronometër / Orë', icon: '⏱️',
    desc: 'Kronometri është instrumenti kryesor për matjen e kohës në fizikë. Kronometrat modernë digjitalë mund të matin me saktësi deri në 1/1000 sekondë. Perdoret ne eksperimente kinetike.',
    simType: 'stopwatch', color: '#C8A8E9' },

  { cat: 'Kinematika', name: 'Interval kohor', sym: 'Δt', unit: 's', nature: 'Skalare',
    instrument: 'Kronometër', icon: '⏲️',
    desc: 'Kronometri mat intervalin kohor Δt = t - t₀. Perdoret per te matur sa kohe kalon midis dy ngjarjeve fizike, p.sh. koha e renies se nje trupi.',
    simType: 'stopwatch', color: '#C8A8E9' },

  { cat: 'Kinematika', name: 'Perioda', sym: 'T', unit: 's', nature: 'Skalare',
    instrument: 'Kronometër / Oshiloskop', icon: '🕐',
    desc: 'Kronometri mat perioden T te levizjeve periodike duke llogaritur kohen e nje rrotullimi ose lukundjeje te plote. Oskiloskopit perdoret per perioda shume te shkurtra.',
    simType: 'stopwatch', color: '#C8A8E9' },

  { cat: 'Kinematika', name: 'Frekuenca', sym: 'f', unit: 'Hz', nature: 'Skalare',
    instrument: 'Oshiloskop / Frekuencëmatës', icon: '📡',
    desc: 'Oskiloskopit tregon vizualisht valët dhe mat frekuencën f = 1/T. Frekuencëmatësi elektronik jep lexim direkt në Hz, kHz ose MHz.',
    simType: 'oscilloscope', color: '#A8D8EA' },

  { cat: 'Kinematika', name: 'Këndi', sym: 'θ', unit: 'rad', nature: 'Skalare',
    instrument: 'Raportore / Gonometër', icon: '📐',
    desc: 'Raportoreja mat këndet në gradë, ndërsa gonometri mat me saktësi kënde te imëta. Perdoren ne gjeometri dhe fizike per matjen e traektoreve rrethore.',
    simType: 'ruler', color: '#FFB6C1' },

  // DINAMIKA
  { cat: 'Dinamika', name: 'Forca', sym: 'F', unit: 'N', nature: 'Vektoriale',
    instrument: 'Dinamometër', icon: '🔩',
    desc: 'Dinamometri mat forcën duke shfrytëzuar shformimin elastik të një sustave. Kur aplikohet forca, sustaja shformohet dhe treguesi tregon vlerën e forcës në Njutone (N).',
    simType: 'dynamometer', color: '#C8A8E9' },

  { cat: 'Dinamika', name: 'Masa', sym: 'm', unit: 'kg', nature: 'Skalare',
    instrument: 'Peshore / Balancë analitike', icon: '⚖️',
    desc: 'Peshorja mat masën e trupave duke krahasuar me peshat standarde. Balanca analitike arrin saktësi deri 0.0001g dhe perdoret ne laborator.',
    simType: 'scale', color: '#A8D8EA' },

  { cat: 'Dinamika', name: 'Pesha', sym: 'P', unit: 'N', nature: 'Vektoriale',
    instrument: 'Dinamometër / Peshore elektronike', icon: '🏋️',
    desc: 'Dinamometri mat peshen P = N (reaksioni normal). Peshorja elektronike me sensor mat peshen direkt ne Njutone ose konverton nga kg duke shumezuar me g = 9.81.',
    simType: 'dynamometer', color: '#C8A8E9' },

  { cat: 'Dinamika', name: 'Forca e fërkimit', sym: 'F_f', unit: 'N', nature: 'Vektoriale',
    instrument: 'Dinamometër horizontal', icon: '🔧',
    desc: 'Dinamometri mat forcen e ferkimit duke terheqer nje trup me shpejtesi konstante mbi nje siperfaqe. Forca e terhequr barazohet me forcen e ferkimit ne gjendje ekuilibri.',
    simType: 'dynamometer', color: '#C8A8E9' },

  { cat: 'Dinamika', name: 'Forca elastike', sym: 'F_e', unit: 'N', nature: 'Vektoriale',
    instrument: 'Dinamometër me sustë', icon: '🌀',
    desc: 'Dinamometri me suste mat forcen elastike F = kx. Shformimi i sustes eshte drejtperdrejt proporcional me forcen e aplikuar (Ligji i Hukut).',
    simType: 'dynamometer', color: '#C8A8E9' },

  { cat: 'Dinamika', name: 'Konstanta elastike', sym: 'k', unit: 'N/m', nature: 'Skalare',
    instrument: 'Dinamometër + Vizore', icon: '📏',
    desc: 'Duke matur forcen me dinamometrin dhe shformimin me vizore, llogarisim k = F/x. Ky experiment perdoret per te verifikuar Ligjin e Hukut.',
    simType: 'dynamometer', color: '#C8A8E9' },

  { cat: 'Dinamika', name: 'Shtypja', sym: 'P', unit: 'Pa', nature: 'Skalare',
    instrument: 'Manometër / Barometër', icon: '🌡️',
    desc: 'Manometri mat shtypjen e gazrave dhe lengjeve. Barometri mat shtypjen atmosferike. Shtypja jepet ne Pascal (Pa = N/m²) ose atmosfera (atm).',
    simType: 'manometer', color: '#FFB6C1' },

  { cat: 'Dinamika', name: 'Impulsi i forcës', sym: 'Δp', unit: 'N·s', nature: 'Vektoriale',
    instrument: 'Dinamometër + Kronometër', icon: '💥',
    desc: 'Impulsi mat me dinamometrin (forca) dhe kronometrin (koha). Kombinimi Δp = F·Δt jep impuls total. Perdoret ne eksperimente me goditje.',
    simType: 'dynamometer', color: '#C8A8E9' },

  { cat: 'Dinamika', name: 'Impuls i trupit', sym: 'p', unit: 'kg·m/s', nature: 'Vektoriale',
    instrument: 'Peshore + Shpejtësimatës', icon: '🚀',
    desc: 'Sasia e levizjes p = mv matet duke kombinuar peshojen (masa m) dhe shpejtesimatësin (shpejtesia v). Perdoret ne eksperimente me perplasje.',
    simType: 'scale', color: '#A8D8EA' },

  // ENERGJIA
  { cat: 'Energjia', name: 'Energjia kinetike', sym: 'Ek', unit: 'J', nature: 'Skalare',
    instrument: 'Shpejtësimatës + Peshore', icon: '⚡',
    desc: 'Ek = ½mv² llogaritet duke kombinuar peshojen per mase dhe shpejtesimatësin per shpejtesi. Foto-sensori mat shpejtësinë e kalimit.',
    simType: 'scale', color: '#A8D8EA' },

  { cat: 'Energjia', name: 'Energjia potenciale gravitacionale', sym: 'Ep', unit: 'J', nature: 'Skalare',
    instrument: 'Peshore + Vizore/Shirit matës', icon: '🏔️',
    desc: 'Ep = mgh matet duke kombinuar peshojen (masa) dhe shiriti mates (lartesia h). Shprehet ne Xhul (J).',
    simType: 'scale', color: '#A8D8EA' },

  { cat: 'Energjia', name: 'Puna', sym: 'A', unit: 'J', nature: 'Skalare',
    instrument: 'Dinamometër + Vizore', icon: '💪',
    desc: 'A = F·s·cosθ — forca matet me dinamometrin, zhvendosja me vizore. Këndi matet me raportore. Perdoret per verifikimin e energjise mekanike.',
    simType: 'dynamometer', color: '#C8A8E9' },

  { cat: 'Energjia', name: 'Fuqia', sym: 'P', unit: 'W', nature: 'Skalare',
    instrument: 'Wattmetër / Multimetër', icon: '🔌',
    desc: 'Wattmetri mat fuqine elektrike direkt. Multimetri mat tensionin dhe rrymën, dhe llogarit P = U·I. 1 Watt = 1 Joule/sekondë.',
    simType: 'multimeter', color: '#FFD6E0' },

  { cat: 'Energjia', name: 'Energjia e brendshme termike', sym: 'U', unit: 'J', nature: 'Skalare',
    instrument: 'Kalorimetër + Termometër', icon: '🔥',
    desc: 'Kalorimetri mat nxehtësine e absorbuar ose te liruar nga nje sistem. Termometri mat ndryshimin e temperatures. Q = mcΔT jep energjine termike.',
    simType: 'calorimeter', color: '#FFD6B0' },

  { cat: 'Energjia', name: 'Energjia elektrike', sym: 'Ee', unit: 'J', nature: 'Skalare',
    instrument: 'Multimetër / Energjimatës', icon: '⚡',
    desc: 'Multimetri mat U dhe I, energjia Ee = P·t = U·I·t. Energjimatesi ne çeltet perdoret per matje te konsumit elektrik ne kWh.',
    simType: 'multimeter', color: '#FFD6E0' },

  // ELEKTRICITETI
  { cat: 'Elektriciteti', name: 'Intensiteti i rrymes', sym: 'I', unit: 'A', nature: 'Skalare',
    instrument: 'Ampermetër / Multimetër', icon: '🔋',
    desc: 'Ampermetri matet duke u lidhur ne seri me qarkun elektrik. Multimetri modern mat rrymën si AC ashtu edhe DC. Perdoret ne te gjitha eksperimentet elektrike.',
    simType: 'ammeter', color: '#FFB6C1' },

  { cat: 'Elektriciteti', name: 'Rezistenca elektrike', sym: 'R', unit: 'Ω', nature: 'Skalare',
    instrument: 'Ohmmeter / Multimetër', icon: '🔌',
    desc: 'Ohmetri mat rezistencen duke aplikuar nje tension te njohur dhe duke matur rrymën. Multimetri digital ka funksion te integruar per matje te rezistencess se deri 40MΩ.',
    simType: 'multimeter', color: '#FFD6E0' },

  { cat: 'Elektriciteti', name: 'Tensioni', sym: 'U', unit: 'V', nature: 'Skalare',
    instrument: 'Voltmetër / Multimetër', icon: '⚡',
    desc: 'Voltmetri matet duke u lidhur ne paralel me elementin e qarkut. Multimetri digital mat tensionin AC dhe DC me saktësi te larte.',
    simType: 'voltmeter', color: '#FFB6C1' },

  { cat: 'Elektriciteti', name: 'Fuqia e rrymes', sym: 'P', unit: 'W', nature: 'Skalare',
    instrument: 'Wattmetër / Multimetër', icon: '💡',
    desc: 'Wattmetri mat fuqine elektrike duke kombinuar tensionin dhe rrymën. P = U·I. Multimetri modern llogarit automatikisht fuqinë.',
    simType: 'multimeter', color: '#FFD6E0' },

  { cat: 'Elektriciteti', name: 'Intensiteti i fushes elektrike', sym: 'E', unit: 'N/C', nature: 'Vektoriale',
    instrument: 'Sensor i fushës elektrike', icon: '🌐',
    desc: 'Sensori i fushes elektrike mat intensitetin E = F/q ne cdo pike te fushes. Perdoret ne eksperimente me kondensatore dhe ngarkesa.',
    simType: 'manometer', color: '#FFB6C1' },

  { cat: 'Elektriciteti', name: 'Kapaciteti elektrik', sym: 'C', unit: 'F', nature: 'Skalare',
    instrument: 'Kapacimetër / Multimetër', icon: '🔋',
    desc: 'Kapacimetri mat kapacitetin e kondensatoreve ne Farad. Multimetri modern ka funksion per matje kapaciteti. C = q/V.',
    simType: 'multimeter', color: '#FFD6E0' },

  { cat: 'Elektriciteti', name: 'Potenciali elektrik', sym: 'V', unit: 'V', nature: 'Skalare',
    instrument: 'Voltmetër / Elektrometër', icon: '📊',
    desc: 'Voltmetri me rezistencë të lartë interne mat potencialin elektrik ne raport me nje pikë reference (tok). Elektrometri mat potenciale te vogla me saktësi të lartë.',
    simType: 'voltmeter', color: '#FFB6C1' },

  // MAGNETIZMI
  { cat: 'Magnetizmi', name: 'Induksioni magnetik', sym: 'B', unit: 'T', nature: 'Vektoriale',
    instrument: 'Teslametër / Hall sensori', icon: '🧲',
    desc: 'Teslametri mat fushen magnetike duke perdorur efektin Hall. Sensori Hall mat B ne Tesla (T). Perdoret per karakterizimin e magneteve dhe elektromagneteve.',
    simType: 'manometer', color: '#FFB6C1' },

  { cat: 'Magnetizmi', name: 'Fluksi Magnetik', sym: 'Φ', unit: 'Wb', nature: 'Skalare',
    instrument: 'Fluksmetër / Teslametër + Sipërfaqe', icon: '🌀',
    desc: 'Fluksmetri mat Φ = B·S·cosα. Kombinimet e teslametrit per B dhe matjeve gjeometrike per siperfaqen S japin fluksin magnetik ne Weber (Wb).',
    simType: 'manometer', color: '#FFB6C1' },

  { cat: 'Magnetizmi', name: 'F.e.m. e induktuar', sym: 'ε', unit: 'V', nature: 'Skalare',
    instrument: 'Voltmetër / Galvanometër', icon: '🔄',
    desc: 'Galvanometri dhe voltmetri mat f.e.m. e induktuar ε = -NΔΦ/Δt. Perdoret ne eksperimentet e induksionit elektromagnetik te Faraday.',
    simType: 'galvanometer', color: '#A8D8EA' },

  { cat: 'Magnetizmi', name: 'Rryme e induktuar', sym: 'I_in', unit: 'A', nature: 'Skalare',
    instrument: 'Galvanometër', icon: '⚡',
    desc: 'Galvanometri eshte instrumenti me i ndjeshëm per matjen e rrymave te induktuara te vogla. Tregon edhe drejtimin e rrymazës se induktuara sipas Ligjit te Lenz.',
    simType: 'galvanometer', color: '#A8D8EA' },
];

export function buildSim(type: string) {
  switch(type) {
    case 'ruler': return `
      <div class="sim-container ruler-sim">
        <div style="position:relative;width:85%;display:flex;flex-direction:column;align-items:flex-start;gap:30px;">
          <div style="position:relative;width:100%;">
            <div class="ruler-object">Trupi</div>
            <div class="ruler" style="width:100%;position:relative;margin-top:8px;">
              <div class="ruler-marks">
                ${[0,1,2,3,4,5,6,7,8,9,10].map(n => `
                  <div class="ruler-mark" style="position:relative;">
                    <span class="line big"></span>
                    <span class="line small" style="display:block;width:1px;height:7px;background:#A89A20;margin-top:2px;"></span>
                    <span class="label" style="font-size:8px;font-weight:700;color:#7A6C10;position:absolute;bottom:2px;left:-3px;">${n}</span>
                  </div>`).join('')}
              </div>
            </div>
          </div>
          <div style="text-align:center;font-size:11px;font-weight:700;color:var(--text-light);">Vizore / Shirit matës</div>
        </div>
      </div>`;

    case 'stopwatch': return `
      <div class="sim-container stopwatch-sim">
        <div class="stopwatch">
          <div class="stopwatch-crown"></div>
          <div class="stopwatch-btn"></div>
          <div class="sw-hand minutes"></div>
          <div class="sw-hand seconds"></div>
          <div class="sw-center"></div>
          <div style="position:absolute;bottom:22px;display:flex;gap:8px;">
            ${[12,3,6,9].map(n=>`<span style="font-size:7px;font-weight:800;color:var(--text-light);">${n}</span>`).join('')}
          </div>
        </div>
        <div class="sw-display" id="swDisp_${Math.random().toString(36).slice(2,6)}"></div>
      </div>`;

    case 'scale': return `
      <div class="sim-container scale-sim">
        <div style="position:relative;width:210px;height:130px;display:flex;align-items:center;justify-content:center;">
          <div style="position:absolute;top:30px;width:100%;">
            <div style="position:relative;display:flex;align-items:flex-start;justify-content:center;">
              <div class="balance-beam" style="position:relative;">
                <div class="balance-pivot"></div>
                <div class="balance-pan left">
                  <div class="balance-weight" style="background:linear-gradient(135deg,var(--pink-deep,#FF8FA3),var(--lavender,#C8A8E9));width:30px;height:20px;">500g</div>
                </div>
                <div class="balance-pan right">
                  <div class="balance-weight" style="background:linear-gradient(135deg,var(--blue,#A8D8EA),var(--lavender,#C8A8E9));width:30px;height:20px;">?g</div>
                </div>
              </div>
            </div>
          </div>
          <div style="position:absolute;bottom:0;display:flex;flex-direction:column;align-items:center;">
            <div class="balance-stand"></div>
            <div class="balance-base"></div>
          </div>
        </div>
      </div>`;

    case 'dynamometer': return `
      <div class="sim-container dynamo-sim">
        <div class="spring-scale">
          <div class="spring-hook-top"></div>
          <div class="spring-body">
            <div class="spring-coils">
              ${Array(8).fill('<div class="coil"></div>').join('')}
            </div>
            <div class="spring-pointer"></div>
            <div class="spring-scale-marks">
              ${Array(8).fill('<div class="spring-mark"></div>').join('')}
            </div>
          </div>
          <div class="spring-hook-bottom"></div>
        </div>
        <div style="display:flex;flex-direction:column;align-items:center;gap:4px;">
          <div class="hanging-weight">F=?N</div>
          <div style="font-size:10px;font-weight:700;color:var(--text-light);">Dinamometër</div>
        </div>
      </div>`;

    case 'ammeter': return `
      <div class="sim-container meter-sim">
        <div class="analog-meter">
          <div class="meter-scale-arc"></div>
          <div class="meter-needle"></div>
          <div class="meter-labels">
            <span class="meter-label">0</span>
            <span class="meter-label">1</span>
            <span class="meter-label">2</span>
            <span class="meter-label">5</span>
          </div>
          <div class="meter-name">A</div>
          <div class="meter-terminals">
            <div class="terminal pos">+</div>
            <div class="terminal neg">−</div>
            <div class="terminal com">COM</div>
          </div>
        </div>
      </div>`;

    case 'voltmeter': return `
      <div class="sim-container meter-sim">
        <div class="analog-meter">
          <div class="meter-scale-arc"></div>
          <div class="meter-needle"></div>
          <div class="meter-labels">
            <span class="meter-label">0</span>
            <span class="meter-label">5</span>
            <span class="meter-label">10</span>
            <span class="meter-label">20</span>
          </div>
          <div class="meter-name">V</div>
          <div class="meter-terminals">
            <div class="terminal pos">+</div>
            <div class="terminal neg">−</div>
          </div>
        </div>
      </div>`;

    case 'multimeter': return `
      <div class="sim-container multi-sim">
        <div class="multimeter-body">
          <div class="multi-display">
            <span class="multi-reading" id="mr_${Math.random().toString(36).slice(2,6)}">12.34</span>
          </div>
          <div class="multi-dial">
            <div class="multi-dial-marker"></div>
          </div>
          <div style="font-size:9px;font-weight:700;color:#AAA;margin-bottom:4px;">MULTIMETËR</div>
          <div class="multi-probes">
            <div class="probe red"></div>
            <div class="probe com"></div>
            <div class="probe black"></div>
          </div>
        </div>
      </div>`;

    case 'manometer': return `
      <div class="sim-container manometer-sim">
        <div class="pressure-gauge">
          <div class="gauge-needle"></div>
          <div class="gauge-center"></div>
          <div class="gauge-label">Pa / T</div>
          <div style="position:absolute;top:12px;font-size:8px;font-weight:700;color:var(--text-light);">MAX</div>
        </div>
      </div>`;

    case 'oscilloscope': return `
      <div class="sim-container oscillo-sim">
        <div class="oscilloscope">
          <div class="osc-grid"></div>
          <svg class="osc-wave" viewBox="0 0 160 120" preserveAspectRatio="none">
            <path d="M0,60 Q20,20 40,60 Q60,100 80,60 Q100,20 120,60 Q140,100 160,60" 
              fill="none" stroke="#00FF88" stroke-width="2.5" opacity="0.9">
              <animate attributeName="d" 
                values="M0,60 Q20,20 40,60 Q60,100 80,60 Q100,20 120,60 Q140,100 160,60;
                        M0,60 Q20,10 40,60 Q60,110 80,60 Q100,10 120,60 Q140,110 160,60;
                        M0,60 Q20,20 40,60 Q60,100 80,60 Q100,20 120,60 Q140,100 160,60"
                dur="2s" repeatCount="indefinite"/>
            </path>
          </svg>
          <div class="osc-label">f=50Hz</div>
        </div>
      </div>`;

    case 'galvanometer': return `
      <div class="sim-container meter-sim" style="background:linear-gradient(135deg,#F0F8FF,#F5EEFF);">
        <div class="analog-meter" style="background:linear-gradient(180deg,#E8F5FF,#D6EEFF);">
          <div class="meter-scale-arc"></div>
          <div class="meter-needle" style="animation: needleSwingG 2s ease-in-out infinite;"></div>
          <div class="meter-labels">
            <span class="meter-label">−</span>
            <span class="meter-label">0</span>
            <span class="meter-label">+</span>
          </div>
          <div class="meter-name" style="color:var(--blue,#A8D8EA);">G</div>
          <div class="meter-terminals">
            <div class="terminal pos">+</div>
            <div class="terminal neg">−</div>
          </div>
        </div>
      </div>`;

    case 'calorimeter': return `
      <div class="sim-container calori-sim">
        <div class="calorimeter">
          <div class="calo-outer">
            <div class="calo-water">
              <div class="calo-bubbles">
                ${Array(5).fill(0).map((_,i)=>`<div class="heat-bubble" style="width:${5+i*3}px;height:${5+i*3}px;left:${15+i*12}%;animation-delay:${i*0.4}s;animation-duration:${1.5+i*0.3}s;"></div>`).join('')}
              </div>
            </div>
            <div class="calo-thermo"><div class="calo-thermo-fill" style="height:50%;"></div></div>
          </div>
          <div class="heat-source"></div>
        </div>
        <div style="font-size:10px;font-weight:700;color:var(--text-light);text-align:center;">Kalorimetër</div>
      </div>`;

    default: return `<div class="sim-container ruler-sim"><div style="font-size:2rem;">🔬</div></div>`;
  }
}
