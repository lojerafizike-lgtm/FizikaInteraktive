export interface Instrument {
  cat: string;
  name: string;
  sym: string;
  unit: string;
  nature: 'Vektoriale' | 'Skalare';
  instrument: string;
  icon: string;
  desc: string;
  simType: string;
  color: string;
}

export const instrumentsData: Instrument[] = [
  // ═══ KINEMATIKA ═══
  { cat: 'Kinematika', name: 'Koordinata', sym: 'x, y, z', unit: 'm', nature: 'Vektoriale',
    instrument: 'Vizore / Shirit matës', icon: '📏',
    desc: 'Vizorja dhe shiriti matës janë mjetet themelore për matjen e koordinatave dhe pozicionit. Vizorja ka shkallëzim milimetrik, ndërsa shiriti matës mund të matë gjatësi deri në disa metra.',
    simType: 'ruler', color: '#FFB6C1' },

  { cat: 'Kinematika', name: 'Zhvendosja', sym: 'Δx', unit: 'm', nature: 'Vektoriale',
    instrument: 'Shirit matës / Vizore', icon: '📐',
    desc: 'Shiriti matës dhe vizorja përdoren për të matur largësinë midis pozicionit fillestar dhe atij përfundimtar të trupit. Shiriti matës është ideal për sipërfaqe të lakuara.',
    simType: 'ruler', color: '#FFB6C1' },

  { cat: 'Kinematika', name: 'Koha', sym: 't', unit: 's', nature: 'Skalare',
    instrument: 'Kronometër / Orë', icon: '⏱️',
    desc: 'Kronometri është instrumenti kryesor për matjen e kohës në fizikë. Kronometrat modernë digjitalë mund të matin me saktësi deri në 1/1000 të sekondës. Përdoret në eksperimente kinematikë.',
    simType: 'stopwatch', color: '#C8A8E9' },

  { cat: 'Kinematika', name: 'Interval kohor', sym: 'Δt', unit: 's', nature: 'Skalare',
    instrument: 'Kronometër', icon: '⏲️',
    desc: 'Kronometri mat intervalin kohor Δt = t − t₀. Përdoret për të matur sa kohë kalon midis dy ngjarjeve fizike, p.sh. koha e rënies së një trupi.',
    simType: 'stopwatch', color: '#C8A8E9' },

  { cat: 'Kinematika', name: 'Perioda', sym: 'T', unit: 's', nature: 'Skalare',
    instrument: 'Kronometër / Oskiloskop', icon: '🕐',
    desc: 'Kronometri mat periodën T të lëvizjeve periodike duke llogaritur kohën e një rrotullimi ose lakundije të plotë. Oskiloskopi përdoret për perioda shumë të shkurtra.',
    simType: 'stopwatch', color: '#C8A8E9' },

  { cat: 'Kinematika', name: 'Frekuenca', sym: 'f', unit: 'Hz', nature: 'Skalare',
    instrument: 'Oskiloskop / Frekuencëmatës', icon: '📡',
    desc: 'Oskiloskopi tregon vizualisht valët dhe mat frekuencën f = 1/T. Frekuencëmatësi elektronik jep lexim të drejtpërdrejtë në Hz, kHz ose MHz.',
    simType: 'oscilloscope', color: '#A8D8EA' },

  { cat: 'Kinematika', name: 'Këndi', sym: 'θ', unit: 'rad', nature: 'Skalare',
    instrument: 'Raportor / Gonometër', icon: '📐',
    desc: 'Raportori mat këndet në gradë, ndërsa gonometri mat me saktësi kënde të imëta. Përdoren në gjeometri dhe fizikë për matjen e trajektoreve rrethore.',
    simType: 'protractor', color: '#FFB6C1' },

  // ═══ DINAMIKA ═══
  { cat: 'Dinamika', name: 'Forca', sym: 'F', unit: 'N', nature: 'Vektoriale',
    instrument: 'Dinamometër', icon: '🔩',
    desc: 'Dinamometri mat forcën duke shfrytëzuar shformimin elastik të një suste. Kur ushtrohet forcë, susta shformohet dhe treguesi jep vlerën e forcës në Njuton (N).',
    simType: 'dynamometer', color: '#C8A8E9' },

  { cat: 'Dinamika', name: 'Masa', sym: 'm', unit: 'kg', nature: 'Skalare',
    instrument: 'Peshore', icon: '⚖️',
    desc: 'Peshorja mat masën e trupave duke e krahasuar atë me peshat standarde ose përmes sensorëve elektronikë të saktësisë së lartë.',
    simType: 'scale', color: '#A8D8EA' },

  { cat: 'Dinamika', name: 'Pesha', sym: 'P', unit: 'N', nature: 'Vektoriale',
    instrument: 'Dinamometër / Peshore elektronike', icon: '🏋️',
    desc: 'Dinamometri mat peshën P të trupit të varur. Peshorja elektronike me sensor e jep peshën drejtpërdrejt në Njuton ose në kilogramë.',
    simType: 'dynamometer', color: '#C8A8E9' },

  { cat: 'Dinamika', name: 'Forca e rëndesës', sym: 'G', unit: 'N', nature: 'Vektoriale',
    instrument: 'Dinamometër / Peshore elektronike', icon: '🌍',
    desc: 'Forca e rëndesës G = m·g matet me dinamometrin duke e varur trupin lirshëm, ose me peshoren elektronike që e njeh raportin G/m = g ≈ 9,81 m/s².',
    simType: 'dynamometer', color: '#C8A8E9' },

  { cat: 'Dinamika', name: 'Forca e fërkimit', sym: 'F_f', unit: 'N', nature: 'Vektoriale',
    instrument: 'Dinamometër horizontal', icon: '🔧',
    desc: 'Dinamometri mat forcën e fërkimit duke tërhequr një trup me shpejtësi konstante mbi një sipërfaqe. Në gjendje ekuilibri, forca e tërheqjes barazohet me forcën e fërkimit.',
    simType: 'dynamometer', color: '#C8A8E9' },

  { cat: 'Dinamika', name: 'Forca elastike', sym: 'F_e', unit: 'N', nature: 'Vektoriale',
    instrument: 'Dinamometër me sustë', icon: '🌀',
    desc: 'Dinamometri me sustë mat forcën elastike F_e = kx. Shformimi i sustës është në përpjesëtim të drejtë me forcën elastike (Ligji i Hukut).',
    simType: 'dynamometer', color: '#C8A8E9' },

  { cat: 'Dinamika', name: 'Konstanta elastike', sym: 'k', unit: 'N/m', nature: 'Skalare',
    instrument: 'Dinamometër + Vizore', icon: '📏',
    desc: 'Duke matur forcën me dinamometrin dhe shformimin me vizore, llogarisim k = F/x. Ky eksperiment përdoret për të verifikuar Ligjin e Hukut.',
    simType: 'dynamometer', color: '#C8A8E9' },

  { cat: 'Dinamika', name: 'Impulsi i forcës', sym: 'J', unit: 'N·s', nature: 'Vektoriale',
    instrument: 'Dinamometër + Kronometër', icon: '💥',
    desc: 'Impulsi i forcës J = F·Δt matet duke kombinuar dinamometrin (forca) me kronometrin (koha e veprimit). Përdoret në eksperimente me goditje.',
    simType: 'dynamometer', color: '#C8A8E9' },

  { cat: 'Dinamika', name: 'Impuls i trupit', sym: 'p', unit: 'kg·m/s', nature: 'Vektoriale',
    instrument: 'Peshore + Shpejtësimatës', icon: '🚀',
    desc: 'Sasia e lëvizjes p = m·v matet duke kombinuar peshoren (masa m) dhe shpejtësimatësin (shpejtësia v). Përdoret në eksperimente me përplasje.',
    simType: 'scale', color: '#A8D8EA' },

  // ═══ ENERGJIA ═══
  { cat: 'Energjia', name: 'Energjia kinetike', sym: 'E_k', unit: 'J', nature: 'Skalare',
    instrument: 'Shpejtësimatës + Peshore', icon: '⚡',
    desc: 'E_k = ½mv² llogaritet duke kombinuar peshoren për masën dhe shpejtësimatësin për shpejtësinë. Foto-sensori mat shpejtësinë e kalimit.',
    simType: 'scale', color: '#A8D8EA' },

  { cat: 'Energjia', name: 'Energjia potenciale gravitacionale', sym: 'E_p', unit: 'J', nature: 'Skalare',
    instrument: 'Peshore + Vizore/Shirit matës', icon: '🏔️',
    desc: 'E_p = mgh matet duke kombinuar peshoren (masa) dhe shiritin matës (lartësia h). Shprehet në Xhul (J).',
    simType: 'scale', color: '#A8D8EA' },

  { cat: 'Energjia', name: 'Puna', sym: 'A', unit: 'J', nature: 'Skalare',
    instrument: 'Dinamometër + Vizore', icon: '💪',
    desc: 'A = F·s·cosθ — forca matet me dinamometrin, zhvendosja me vizore dhe këndi me raportor. Përdoret për verifikimin e energjisë mekanike.',
    simType: 'dynamometer', color: '#C8A8E9' },

  { cat: 'Energjia', name: 'Fuqia', sym: 'P', unit: 'W', nature: 'Skalare',
    instrument: 'Wattmetër / Multimetër', icon: '🔌',
    desc: 'Wattmetri mat fuqinë elektrike drejtpërdrejt. Multimetri mat tensionin dhe rrymën, dhe llogarit P = U·I. 1 Watt = 1 Xhul/sekondë.',
    simType: 'multimeter', color: '#FFD6E0' },

  { cat: 'Energjia', name: 'Energjia e brendshme termike', sym: 'U', unit: 'J', nature: 'Skalare',
    instrument: 'Kalorimetër + Termometër', icon: '🔥',
    desc: 'Kalorimetri mat nxehtësinë e thithur ose të çliruar nga një sistem. Termometri mat ndryshimin e temperaturës. Q = mcΔT jep energjinë termike.',
    simType: 'calorimeter', color: '#FFD6B0' },

  { cat: 'Energjia', name: 'Energjia elektrike', sym: 'E_e', unit: 'J', nature: 'Skalare',
    instrument: 'Multimetër / Energjimatës', icon: '⚡',
    desc: 'Multimetri mat U dhe I, dhe energjia E_e = P·t = U·I·t. Energjimatësi në çelësa përdoret për matjen e konsumit elektrik në kWh.',
    simType: 'multimeter', color: '#FFD6E0' },

  // ═══ ELEKTRICITETI ═══
  { cat: 'Elektriciteti', name: 'Intensiteti i rrymës', sym: 'I', unit: 'A', nature: 'Skalare',
    instrument: 'Ampermetër / Multimetër', icon: '🔋',
    desc: 'Ampermetri lidhet në seri me qarkun elektrik për të matur rrymën. Multimetri modern mat rrymën si AC, ashtu edhe DC. Përdoret në të gjitha eksperimentet elektrike.',
    simType: 'ammeter', color: '#FFB6C1' },

  { cat: 'Elektriciteti', name: 'Rezistenca elektrike', sym: 'R', unit: 'Ω', nature: 'Skalare',
    instrument: 'Ohmmeter / Multimetër', icon: '🔌',
    desc: 'Ohmetri mat rezistencën duke aplikuar një tension të njohur dhe duke matur rrymën. Multimetri digjital mat rezistenca deri në 40 MΩ.',
    simType: 'multimeter', color: '#FFD6E0' },

  { cat: 'Elektriciteti', name: 'Tensioni', sym: 'U', unit: 'V', nature: 'Skalare',
    instrument: 'Voltmetër / Multimetër', icon: '⚡',
    desc: 'Voltmetri lidhet në paralel me elementin e qarkut. Multimetri digjital mat tensionin AC dhe DC me saktësi të lartë.',
    simType: 'voltmeter', color: '#FFB6C1' },

  { cat: 'Elektriciteti', name: 'Fuqia e rrymës', sym: 'P', unit: 'W', nature: 'Skalare',
    instrument: 'Wattmetër / Multimetër', icon: '💡',
    desc: 'Wattmetri mat fuqinë elektrike duke kombinuar tensionin dhe rrymën: P = U·I. Multimetri modern e llogarit automatikisht fuqinë.',
    simType: 'multimeter', color: '#FFD6E0' },

  { cat: 'Elektriciteti', name: 'Intensiteti i fushës elektrike', sym: 'E', unit: 'N/C', nature: 'Vektoriale',
    instrument: 'Sensor i fushës elektrike', icon: '🌐',
    desc: 'Sensori i fushës elektrike mat intensitetin E = F/q në çdo pikë të fushës. Përdoret në eksperimente me kondensatorë dhe ngarkesa.',
    simType: 'gauge', color: '#fde68a' },

  { cat: 'Elektriciteti', name: 'Kapaciteti elektrik', sym: 'C', unit: 'F', nature: 'Skalare',
    instrument: 'Kapacimetër / Multimetër', icon: '🔋',
    desc: 'Kapacimetri mat kapacitetin e kondensatorëve në Farad. Multimetri modern ka funksion të integruar për matjen e kapacitetit: C = q/V.',
    simType: 'multimeter', color: '#FFD6E0' },

  { cat: 'Elektriciteti', name: 'Potenciali elektrik', sym: 'V', unit: 'V', nature: 'Skalare',
    instrument: 'Voltmetër / Elektrometër', icon: '📊',
    desc: 'Voltmetri me rezistencë të lartë interne mat potencialin elektrik në raport me një pikë referencë (tokëzim). Elektrometri mat potenciale shumë të vogla me saktësi të lartë.',
    simType: 'voltmeter', color: '#FFB6C1' },

  { cat: 'Elektriciteti', name: 'Ngarkesa elektrike', sym: 'q', unit: 'C', nature: 'Skalare',
    instrument: 'Elektroskop + Coulombmetër', icon: '✨',
    desc: 'Elektroskopi zbulon praninë e ngarkesës (gjethët metalike hapen). Coulombmetri mat saktë q = I·t duke integruar rrymën në kohë, ndërsa elektrometri modern mat ngarkesa deri në fC (10⁻¹⁵ C).',
    simType: 'gauge', color: '#fde68a' },

  // ═══ TERMODINAMIKA ═══
  { cat: 'Termodinamika', name: 'Vëllimi', sym: 'V', unit: 'm³', nature: 'Skalare',
    instrument: 'Menzurë / Enë e shkallëzuar', icon: '🥛',
    desc: 'Menzura shërben për të matur saktë vëllimin e lëngjeve. Për trupat e ngurtë përdoret zhytja në lëng, ndërsa për gazet — ena përkatëse e shkallëzuar.',
    simType: 'calorimeter', color: '#FFD6B0' },

  { cat: 'Termodinamika', name: 'Temperatura', sym: 'T', unit: 'K', nature: 'Skalare',
    instrument: 'Termometër', icon: '🌡️',
    desc: 'Termometri mat temperaturën. Zgjerimi i lëngut (alkool/zhivë) ose ndryshimi i rezistencës elektrike tregon vlerën e saktë termike.',
    simType: 'thermometer', color: '#FFB6C1' },

  { cat: 'Termodinamika', name: 'Shtypja', sym: 'p', unit: 'Pa', nature: 'Skalare',
    instrument: 'Barometër / Manometër', icon: '🎚️',
    desc: 'Barometri mat shtypjen atmosferike, ndërsa manometri mat shtypjen e gazeve ose lëngjeve në hapësira të mbyllura. Shtypja shprehet në Pascal (Pa = N/m²).',
    simType: 'manometer', color: '#FFB6C1' },

  { cat: 'Termodinamika', name: 'Nxehtësia specifike e lëndës', sym: 'c', unit: 'J/(kg·K)', nature: 'Skalare',
    instrument: 'Kalorimetër', icon: '🔬',
    desc: 'Kalorimetri përdoret për të përcaktuar sasinë e nxehtësisë të nevojshme për të ndryshuar temperaturën e trupave — matje e saktë e nxehtësisë specifike.',
    simType: 'calorimeter', color: '#FFD6B0' },

  { cat: 'Termodinamika', name: 'Nxehtësia specifike e shkrirjes', sym: 'L_sh', unit: 'J/kg', nature: 'Skalare',
    instrument: 'Kalorimetër + Termometër', icon: '🧊',
    desc: 'Përdoret për të llogaritur nxehtësinë e kërkuar gjatë procesit të kthimit fazor nga i ngurtë në lëng, pa ndryshuar temperaturën.',
    simType: 'calorimeter', color: '#FFD6B0' },

  { cat: 'Termodinamika', name: 'Nxehtësia specifike e avullimit', sym: 'L_av', unit: 'J/kg', nature: 'Skalare',
    instrument: 'Kalorimetër avullues', icon: '♨️',
    desc: 'Nxehtësia e nevojshme për avullimin e plotë të një mase uji pas arritjes së vlimit, e matur me metodën kalorimetrike.',
    simType: 'calorimeter', color: '#FFD6B0' },

  // ═══ MAGNETIZMI ═══
  { cat: 'Magnetizmi', name: 'Induksioni magnetik', sym: 'B', unit: 'T', nature: 'Vektoriale',
    instrument: 'Teslametër / Sensor Hall', icon: '🧲',
    desc: 'Teslametri mat fushën magnetike duke përdorur efektin Hall. Sensori Hall mat B në Tesla (T). Përdoret për karakterizimin e magneteve dhe elektromagnetëve.',
    simType: 'manometer', color: '#FFB6C1' },

  { cat: 'Magnetizmi', name: 'Fluksi magnetik', sym: 'Φ', unit: 'Wb', nature: 'Skalare',
    instrument: 'Fluksmetër / Teslametër + Sipërfaqe', icon: '🌀',
    desc: 'Fluksmetri mat Φ = B·S·cosα. Kombinimi i teslametrit për B dhe matjeve gjeometrike për sipërfaqen S jep fluksin magnetik në Weber (Wb).',
    simType: 'manometer', color: '#FFB6C1' },

  { cat: 'Magnetizmi', name: 'F.e.m. e induktuar', sym: 'ε', unit: 'V', nature: 'Skalare',
    instrument: 'Voltmetër / Galvanometër', icon: '🔄',
    desc: 'Galvanometri dhe voltmetri matin f.e.m.-në e induktuar ε = −N·ΔΦ/Δt. Përdoret në eksperimentet e induksionit elektromagnetik të Faraday.',
    simType: 'galvanometer', color: '#A8D8EA' },

  { cat: 'Magnetizmi', name: 'Rryma e induktuar', sym: 'I_in', unit: 'A', nature: 'Skalare',
    instrument: 'Galvanometër', icon: '⚡',
    desc: 'Galvanometri është instrumenti më i ndjeshëm për matjen e rrymave të induktuara të vogla. Tregon edhe drejtimin e rrymës së induktuar sipas Ligjit të Lenzit.',
    simType: 'galvanometer', color: '#A8D8EA' },

  // ═══ FIZIKA KUANTIKE ═══
  { cat: 'Fizika Kuantike', name: 'Energjia e fotonit', sym: 'E', unit: 'J', nature: 'Skalare',
    instrument: 'Spektrometër', icon: '🌈',
    desc: 'Spektrometri e ndan dritën sipas gjatësisë valore duke përdorur një prizmë ose rrjetë difraksioni. Çdo element kimik lëshon spektër karakteristik — si "gjurmë gishti" e dritës.',
    simType: 'spektrometri', color: '#bae6fd' },

  { cat: 'Fizika Kuantike', name: 'Puna e daljes', sym: 'A_d', unit: 'J', nature: 'Skalare',
    instrument: 'Qelizë Fotoelektrike', icon: '🌟',
    desc: 'Qeliza fotoelektrike ka një katodë metalike brenda. Kur rrezatimi bie mbi katodë, elektronet shpëtojnë nga sipërfaqja nëse E ≥ A_d. Galvanometri mat rrymën e krijuar nga elektronet e çliruar.',
    simType: 'fotoelektrike', color: '#fce7f3' },

  { cat: 'Fizika Kuantike', name: 'Gjatësia e valës së De Broglie', sym: 'λ', unit: 'm', nature: 'Skalare',
    instrument: 'Difraktometër Elektronësh', icon: '〰️',
    desc: 'Difraktometri i elektronëve dërgon tufë elektronesh mbi një kristal. Elektronet difraktohen nga rrjeta kristalore — si dritë me valë! Unazat e Bragg-ut në ekran tregojnë gjatësinë valore λ.',
    simType: 'difraktometri', color: '#e9d5ff' },

  { cat: 'Fizika Kuantike', name: 'Perioda e gjysmëzbërthimit', sym: 'T_½', unit: 's', nature: 'Skalare',
    instrument: 'Detektor Geiger-Müller', icon: '☢️',
    desc: 'Detektori Geiger-Müller ka një tub të mbushur me gaz inert. Kur grimca rrezuese hyn, ai jonizon gazin dhe krijohet impuls elektrik. Duke regjistruar klikimet me kalimin e kohës, gjendet perioda e gjysmëzbërthimit.',
    simType: 'geiger', color: '#d1fae5' }
];

export function buildSim(type: string) {
  switch(type) {
    case 'ruler': return `
      <div class="sim-container ruler-sim">
        <div style="position:relative;width:85%;display:flex;flex-direction:column;align-items:flex-start;gap:30px;">
          <div class="ruler-track">
            <div class="ruler-value">Δx = 4.2 cm</div>
            <div class="ruler-object">Trupi</div>
            <div class="ruler-bracket left"></div>
            <div class="ruler-bracket right"></div>
            <div class="ruler" style="width:100%;position:relative;margin-top:8px;">
              <div class="ruler-marks">
                ${[0,1,2,3,4,5,6,7,8,9,10].map(n => `
                  <div class="ruler-mark" style="position:relative;">
                    <span class="line big"></span>
                    <span class="label">${n}</span>
                  </div>`).join('')}
              </div>
            </div>
          </div>
          <div style="text-align:center;font-size:11px;font-weight:700;color:var(--text-light);font-family:var(--font-body);">Vizore / Shirit matës</div>
        </div>
      </div>`;

    case 'protractor': return `
      <div class="sim-container ruler-sim">
        <div style="position:relative;width:100%;display:flex;flex-direction:column;align-items:center;gap:10px;">
          <div style="position:relative;width:140px;height:70px;border-top-left-radius:70px;border-top-right-radius:70px;border:2px solid #A89A20;border-bottom:2px solid #A89A20;background:rgba(255,245,200,0.6);box-sizing:border-box;overflow:hidden;">
            <div style="position:absolute;bottom:-2px;left:50%;width:6px;height:6px;background:#7A6C10;border-radius:50%;transform:translateX(-50%);"></div>
            <div class="protractor-ray"></div>
            ${[0, 15, 30, 45, 60, 75, 90, 105, 120, 135, 150, 165, 180].map(deg => `
              <div style="position:absolute;bottom:0;left:50%;width:1px;height:70px;transform-origin:bottom center;transform:translateX(-50%) rotate(${deg - 90}deg);">
                <div style="width:100%;height:${deg % 30 === 0 ? '8px' : '5px'};background:#A89A20;"></div>
                ${deg % 30 === 0 ? `<div style="position:absolute;top:10px;left:-6px;font-size:8px;font-weight:bold;color:#7A6C10;font-family:var(--font-mono);transform:rotate(${-(deg - 90)}deg);">${deg}°</div>` : ''}
              </div>
            `).join('')}
          </div>
          <div style="text-align:center;font-size:11px;font-weight:700;color:var(--text-light);font-family:var(--font-body);">Raportor / Gonometër</div>
        </div>
      </div>`;

    case 'thermometer': return `
      <div class="sim-container thermo-sim">
        <div style="display:flex;gap:12px;align-items:flex-end;">
          <div class="thermometer">
            <div class="thermo-tube"><div class="thermo-mercury"></div></div>
            <div class="thermo-bulb"></div>
          </div>
          <div class="thermo-scale">
            <span class="thermo-label">100</span>
            <span class="thermo-label">75</span>
            <span class="thermo-label">50</span>
            <span class="thermo-label">25</span>
            <span class="thermo-label">0</span>
          </div>
        </div>
        <div class="thermo-reading" style="font-family:var(--font-mono);">T = 36.6 °C</div>
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
            ${[12,3,6,9].map(n=>`<span style="font-family:var(--font-mono);font-size:7px;font-weight:800;color:var(--text-light);">${n}</span>`).join('')}
          </div>
        </div>
        <div class="sw-display"></div>
      </div>`;

    case 'scale': return `
      <div class="sim-container scale-sim">
        <div style="position:relative;width:210px;height:130px;display:flex;align-items:center;justify-content:center;">
          <div style="position:absolute;top:30px;width:100%;">
            <div style="position:relative;display:flex;align-items:flex-start;justify-content:center;">
              <div class="balance-beam" style="position:relative;">
                <div class="balance-pivot"></div>
                <div class="balance-pan left">
                  <div class="balance-weight" style="background:linear-gradient(135deg,var(--pink-deep),var(--lavender));width:30px;height:20px;">500g</div>
                </div>
                <div class="balance-pan right">
                  <div class="balance-weight" style="background:linear-gradient(135deg,var(--blue),var(--lavender));width:30px;height:20px;">?g</div>
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
          <div class="hanging-weight">F = ? N</div>
          <div style="font-size:10px;font-weight:700;color:var(--text-light);font-family:var(--font-body);">Dinamometër</div>
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
            <span class="multi-reading">12.34</span>
          </div>
          <div class="multi-dial">
            <div class="multi-dial-marker"></div>
          </div>
          <div style="font-family:var(--font-mono);font-size:9px;font-weight:700;color:#AAA;margin-bottom:4px;letter-spacing:2px;">MULTIMETËR</div>
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
          <div style="position:absolute;top:12px;font-family:var(--font-mono);font-size:8px;font-weight:700;color:var(--text-light);">MAX</div>
        </div>
      </div>`;

    case 'gauge': return `
      <div class="sim-container manometer-sim">
        <div class="pressure-gauge" style="background:radial-gradient(circle at center, #fff, #fef3c7);">
          <div class="gauge-needle gauge-needle--charge"></div>
          <div class="gauge-center" style="background:#d97706;"></div>
          <div class="gauge-label" style="color:#b45309;">⚡ Q</div>
          <div style="position:absolute;top:12px;font-family:var(--font-mono);font-size:8px;font-weight:900;color:#d97706;">CHARGE</div>
          <div style="position:absolute;bottom:15px;display:flex;gap:10px;">
            <div style="width:4px;height:4px;background:#f59e0b;border-radius:50%;animation:pulse 1s infinite;"></div>
            <div style="width:4px;height:4px;background:#f59e0b;border-radius:50%;animation:pulse 1s infinite .5s;"></div>
          </div>
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
          <div class="osc-label">f = 50 Hz</div>
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
          <div class="meter-name" style="color:var(--blue);">G</div>
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
        <div style="font-size:10px;font-weight:700;color:var(--text-light);text-align:center;font-family:var(--font-body);">Kalorimetër</div>
      </div>`;

    case 'spektrometri': return `
      <div class="sim-container" style="background:rgba(186,230,253,0.3)">
        <div class="spec-wrap">
          <div class="spec-beam-in"></div>
          <div class="spec-prism"></div>
          <div class="spec-rainbow">
            <div class="spec-line" style="background:#f87171;animation-delay:0s"></div>
            <div class="spec-line" style="background:#fb923c;animation-delay:.15s"></div>
            <div class="spec-line" style="background:#fcd34d;animation-delay:.3s"></div>
            <div class="spec-line" style="background:#4ade80;animation-delay:.45s"></div>
            <div class="spec-line" style="background:#38bdf8;animation-delay:.6s"></div>
            <div class="spec-line" style="background:#818cf8;animation-delay:.75s"></div>
            <div class="spec-line" style="background:#c084fc;animation-delay:.9s"></div>
          </div>
        </div>
      </div>`;

    case 'fotoelektrike': return `
      <div class="sim-container" style="background:rgba(249,168,212,0.25)">
        <div class="photo-wrap">
          <div style="font-family:var(--font-mono);font-size:.65rem;font-weight:700;color:var(--lav-deep);margin-bottom:2px;">h·f ≥ A_d → e⁻</div>
          <div class="photo-cell">
            <div class="photo-photon">🌟</div>
            <div class="photo-cathode"></div>
            <div class="photo-electron"></div>
            <div class="photo-anode"></div>
          </div>
          <div class="photo-arrow">
            <span>e⁻ →</span>
            <div class="photo-galv">🔌 Galvanometri</div>
          </div>
        </div>
      </div>`;

    case 'difraktometri': return `
      <div class="sim-container" style="background:rgba(196,181,253,0.25)">
        <div class="diffr-wrap">
          <div style="display:flex;align-items:center;gap:10px;">
            <div class="diffr-gun"></div>
            <div class="diffr-beam-row">
              <div class="diffr-beam-dot"></div>
              <div class="diffr-beam-dot"></div>
              <div class="diffr-beam-dot"></div>
              <div class="diffr-beam-dot"></div>
              <div class="diffr-beam-dot"></div>
            </div>
            <div class="diffr-crystal">💎</div>
          </div>
          <svg class="diffr-rings-svg" width="100" height="60" viewBox="0 0 100 60">
            <circle class="diffr-ring" cx="50" cy="30" r="18" stroke="#f9a8d4" stroke-dasharray="120 10"/>
            <circle class="diffr-ring" cx="50" cy="30" r="26" stroke="#c4b5fd" stroke-dasharray="170 10"/>
            <circle class="diffr-ring" cx="50" cy="30" r="34" stroke="#7dd3fc" stroke-dasharray="220 10"/>
          </svg>
        </div>
      </div>`;

    case 'geiger': return `
      <div class="sim-container" style="background:rgba(167,243,208,0.25)">
        <div class="geiger-wrap">
          <div class="geiger-radi">
            <div class="radi-wave"></div>
            <div class="radi-wave"></div>
            <div class="radi-wave"></div>
          </div>
          <div class="geiger-tube"><span class="geiger-label">GEIGER-MÜLLER</span></div>
          <div class="geiger-clicks">
            <div class="g-dot"></div>
            <div class="g-dot"></div>
            <div class="g-dot"></div>
            <div class="g-dot"></div>
            <div class="g-dot"></div>
          </div>
          <div class="geiger-display">
            ☢️ <span class="geiger-num">247</span> <span style="font-size:.72rem;color:var(--muted);">CPM</span>
          </div>
        </div>
      </div>`;

    default: return `<div class="sim-container ruler-sim"><div style="font-size:2rem;">🔬</div></div>`;
  }
}
