export interface FillBlankQ { sentence: string; answer: string; }
export interface McqQ { question: string; options: string[]; correct: number; solution: string; }
export interface MatchPair { left: string; right: string; }
export interface BuildFormulaQ { termName: string; formula: string; pieces: string[]; applications: { question: string; answer: string }[]; }
export interface TrueFalseQ { statement: string; correct: boolean; explanation: string; }
export interface UnitQ { symbol: string; variable: string; unit: string; measuringTool: string; }
