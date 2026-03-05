
export interface PhysicsTerm {
  id?: number;
  name: string;
  sym: string;
  form: string;
  unit: string;
  otherUnits?: string;
  teTjera?: string;
  nature: 'Vektoriale' | 'Skalare' | '-';
  desc: string;
  phetUrl?: string;
  html?: string;
  catName?: string;
  img?: string;
  vid?: string;
  gameUrl?: string;
}

export type CategoryName = "Kinematika" | "Dinamika" | "Energjia" | "Elektriciteti" | "Magnetizmi" | "Libri Interaktiv";

export interface PhysicsData {
  [key: string]: PhysicsTerm[];
}

export interface Simulation {
  title: string;
  url: string;
  category: string;
  icon: string;
}

export interface PhysicsGame {
  title: string;
  description: string;
  materials: string[];
  steps: string[];
  type: 'home' | 'school' | 'digital';
  url?: string;
}

export interface DigitalGame {
  id: string;
  title: string;
  category: string;
  html: string;
  type?: 'digital' | 'school';
  url?: string;
}

export interface Movie {
  id: number;
  title: string;
  poster: string;
  desc: string;
}
