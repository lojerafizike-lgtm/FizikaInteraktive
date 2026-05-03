const fs = require('fs');
let text = fs.readFileSync('src/constants.ts', 'utf8');

const svg1 = '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><line x1="40" y1="20" x2="40" y2="180" stroke="black" stroke-width="2"/><line x1="30" y1="140" x2="280" y2="140" stroke="black" stroke-width="2"/><text x="15" y="100" transform="rotate(-90 15,100)" font-family="Arial" font-size="14">Temperatura / °C</text><text x="240" y="160" font-family="Arial" font-size="14">Koha</text><text x="20" y="145" font-family="Arial" font-size="12">0</text><text x="10" y="65" font-family="Arial" font-size="12">100</text><line x1="35" y1="60" x2="40" y2="60" stroke="black" stroke-width="1"/><line x1="40" y1="60" x2="260" y2="60" stroke="black" stroke-dasharray="5,5"/><polyline points="40,170 80,140 120,140 200,60 260,60 280,30" fill="none" stroke="#22d3ee" stroke-width="3"/><text x="45" y="175" font-family="Arial" font-size="12">A</text><text x="75" y="135" font-family="Arial" font-size="12">B</text><text x="115" y="135" font-family="Arial" font-size="12">C</text><text x="200" y="75" font-family="Arial" font-size="12">D</text><text x="260" y="75" font-family="Arial" font-size="12">E</text><text x="280" y="25" font-family="Arial" font-size="12">F</text></svg>';
const svg2 = '<svg width="320" height="200" xmlns="http://www.w3.org/2000/svg"><text x="15" y="20" font-family="Arial" font-size="12">temperatura °C</text><line x1="40" y1="30" x2="40" y2="160" stroke="black" stroke-width="2"/><line x1="40" y1="160" x2="300" y2="160" stroke="black" stroke-width="2"/><text x="290" y="150" font-family="Arial" font-size="12">t(min)</text><text x="15" y="165" font-family="Arial" font-size="10">0</text><text x="15" y="145" font-family="Arial" font-size="10">40</text><text x="15" y="125" font-family="Arial" font-size="10">80</text><text x="10" y="105" font-family="Arial" font-size="10">120</text><text x="10" y="85" font-family="Arial" font-size="10">160</text><text x="10" y="65" font-family="Arial" font-size="10">200</text><text x="10" y="45" font-family="Arial" font-size="10">240</text><text x="62" y="175" font-family="Arial" font-size="10">1</text><text x="87" y="175" font-family="Arial" font-size="10">2</text><text x="112" y="175" font-family="Arial" font-size="10">3</text><text x="137" y="175" font-family="Arial" font-size="10">4</text><text x="162" y="175" font-family="Arial" font-size="10">5</text><text x="187" y="175" font-family="Arial" font-size="10">6</text><text x="212" y="175" font-family="Arial" font-size="10">7</text><text x="237" y="175" font-family="Arial" font-size="10">8</text><text x="262" y="175" font-family="Arial" font-size="10">9</text><line x1="40" y1="120" x2="65" y2="120" stroke="black" stroke-dasharray="2,2"/><line x1="65" y1="160" x2="65" y2="120" stroke="black" stroke-dasharray="2,2"/><line x1="90" y1="160" x2="90" y2="120" stroke="black" stroke-dasharray="2,2"/><line x1="40" y1="60" x2="165" y2="60" stroke="black" stroke-dasharray="2,2"/><line x1="165" y1="160" x2="165" y2="60" stroke="black" stroke-dasharray="2,2"/><line x1="215" y1="160" x2="215" y2="60" stroke="black" stroke-dasharray="2,2"/><line x1="40" y1="40" x2="240" y2="40" stroke="black" stroke-dasharray="2,2"/><line x1="240" y1="160" x2="240" y2="40" stroke="black" stroke-dasharray="2,2"/><polyline points="40,160 65,120 90,120 165,60 215,60 240,40" fill="none" stroke="black" stroke-width="2"/></svg>';
const svg3 = '<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><text x="15" y="25" font-family="Arial" font-size="12">t(°C)</text><line x1="40" y1="30" x2="40" y2="160" stroke="black" stroke-width="2"/><line x1="40" y1="160" x2="260" y2="160" stroke="black" stroke-width="2"/><text x="245" y="175" font-family="Arial" font-size="12">t(min)</text><text x="20" y="165" font-family="Arial" font-size="10">0</text><text x="20" y="135" font-family="Arial" font-size="10">2</text><text x="20" y="105" font-family="Arial" font-size="10">4</text><text x="20" y="75" font-family="Arial" font-size="10">6</text><text x="20" y="45" font-family="Arial" font-size="10">8</text><text x="75" y="175" font-family="Arial" font-size="10">2</text><text x="115" y="175" font-family="Arial" font-size="10">4</text><text x="155" y="175" font-family="Arial" font-size="10">6</text><text x="195" y="175" font-family="Arial" font-size="10">8</text><text x="230" y="175" font-family="Arial" font-size="10">10</text><text x="45" y="155" font-family="Arial" font-size="10">O</text><text x="115" y="110" font-family="Arial" font-size="10">A</text><text x="175" y="110" font-family="Arial" font-size="10">B</text><text x="245" y="35" font-family="Arial" font-size="10">C</text><line x1="40" y1="115" x2="120" y2="115" stroke="black" stroke-dasharray="4,4"/><line x1="120" y1="160" x2="120" y2="115" stroke="black" stroke-dasharray="4,4"/><line x1="180" y1="160" x2="180" y2="115" stroke="black" stroke-dasharray="4,4"/><line x1="40" y1="40" x2="240" y2="40" stroke="black" stroke-dasharray="4,4"/><line x1="240" y1="160" x2="240" y2="40" stroke="black" stroke-dasharray="4,4"/><polyline points="40,160 120,115 180,115 240,40" fill="none" stroke="black" stroke-width="2"/></svg>';

const kuicStr = `kuic: {
              titulli: "Nxehtësia dhe Ndryshimi i Gjendjes",
              pyetjet: [
                {
                  pyetja: "1. Në pjesën DE të grafikut të varësisë së temperaturës nga koha gjatë ngrohjes me shpejtësi konstante për ujin, gjendja e lëndës është:",
                  opsionet: [
                    "A) avull dhe ujë i lëngshëm",
                    "B) ujë i lëngshëm",
                    "C) akull dhe ujë i lëngshëm",
                    "D) avull"
                  ],
                  sakte: 0,
                  svg: \`${svg1}\`
                },
                {
                  pyetja: "2. Grafiku tregon ndryshimin e temperaturës në funksion të kohës për 2kg të një lënde që merr nxehtësi në mënyrë konstante prej 80000J/min. Në fillim të ngrohjes lënda është në gjendje të ngurtë. Nxehtësia e fshehtë e avullimit të lëndës është:",
                  opsionet: [
                    "A) 20kJ/kg",
                    "B) 40 kJ/kg",
                    "C) 60 kJ/kg",
                    "D) 80 kJ/kg"
                  ],
                  sakte: 3,
                  svg: \`${svg2}\`
                },
                {
                  pyetja: "3. Një sasi prej 2kg ujë fillimisht në temperaturën 80°C shndërrohet plotësisht në avull. Sasia e nxehtësisë që merr uji është: (cu=4200J/kgK dhe Lv=2,26MJ/kg)",
                  opsionet: [
                    "A) 4,688J",
                    "B) 4,688kJ",
                    "C) 4,688MJ",
                    "D) 4,688TJ"
                  ],
                  sakte: 2
                },
                {
                  pyetja: "4. Një sasi hekuri me masë 100kg ndodhet në gjendje të lëngët në temperaturën e shkrirjes. Gjatë procesit të ngurtësimit të kësaj mase hekuri, sasia e nxehtësisë dhe kahu i shkëmbimit të saj janë: (Lfe=33kJ/kg)",
                  opsionet: [
                    "A) hekuri jep 3 kJ nxehtësi.",
                    "B) hekuri nuk shkëmben nxehtësi.",
                    "C) hekuri merr 33·10⁵ J nxehtësi.",
                    "D) hekuri jep 33·10⁵ J nxehtësi."
                  ],
                  sakte: 3
                },
                {
                  pyetja: "5. Grafiku tregon ndryshimin e temperaturës së 2kg lënde gjatë ngrohjes me shpejtësi konstante prej 2000J/min. Në fillim të ngrohjes lënda është në gjendje të ngurtë. Treshja e vlerave të nxehtësisë specifike të ngrohjes së trupit të ngurtë, të nxehtësisë latente të shkrirjes dhe nxehtësisë specifike të ngrohjes së lëngut është:",
                  opsionet: [
                    "A) 8000 J/kg°C ; 6000 J/kg ; 3000 J/kg°C",
                    "B) 1330 J/kg°C ; 6000 J/kg ; 600 J/kg°C",
                    "C) 4000 J/kg°C ; 3000 J/kg ; 1200 J/kg°C",
                    "D) 1330 J/kg°C ; 3000 J/kg ; 600 J/kg°C"
                  ],
                  sakte: 3,
                  svg: \`${svg3}\`
                }
              ]
            }`;

// Clean up term 6
text = text.replace(/teTjera: "Q = c · m · Δt \( kur trupi ngrohet ose ftohet \)",\s*unit: "J\/kg/, 'teTjera: "Q = c · m · Δt ( kur trupi ngrohet ose ftohet )",\n            ' + kuicStr + ',\n            unit: "J/kg'); // wait the format is unit before teTjera
text = text.replace(/teTjera:\s*"Q = c · m · Δt[^"]*"\s*\+\s*"<div class=\\"space-y-6 mt-8\\">.*?<\/div>"\s*,\s*nature:\s*"Skalare",/s, 'teTjera: "Q = c · m · Δt",\n            ' + kuicStr + ',\n            nature: "Skalare",');

// Regex alternative: Match everything between teTjera and nature
text = text.replace(/unit:\s*"J\/kg·K",\s*otherUnits:\s*"",\s*teTjera:\s*".*?",\s*nature:\s*"Skalare",/s,
\`unit: "J/kg·K", otherUnits: "", teTjera: "Q = c · m · Δt", \n            \${kuicStr},\n            nature: "Skalare",\`);

text = text.replace(/unit:\s*"J\/kg",\s*otherUnits:\s*"",\s*teTjera:\s*"Q = L_sh · m.*?",\s*nature:\s*"Skalare",/s,
\`unit: "J/kg", otherUnits: "", teTjera: "Q = L_sh · m", \n            \${kuicStr},\n            nature: "Skalare",\`);

text = text.replace(/unit:\s*"J\/kg",\s*otherUnits:\s*"",\s*teTjera:\s*"Q_av = L_av · m.*?",\s*nature:\s*"Skalare",/s,
\`unit: "J/kg", otherUnits: "", teTjera: "Q_av = L_av · m", \n            \${kuicStr},\n            nature: "Skalare",\`);

fs.writeFileSync('src/constants.ts', text);
