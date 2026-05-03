
export interface PhysicsTerm {
  id?: number;
  name: string;
  sym: string;
  form: string;
  unit: string;
  otherUnits?: string;
  teTjera?: string;
  ushtrime?: string;
  ushtrimInteraktiv?: {
    pyetja: string;
    zgjidhja: string; // the correct answer string to check against
    hapi1: string;
    hapi2: string;
    hapi3: string;
  };
  kuic?: {
    titulli: string;
    pyetjet: {
      pyetja: string;
      opsionet: string[];
      sakte: number;
      svg?: string;
    }[];
  };
  mjetMat?: string;
  nature: 'Vektoriale' | 'Skalare' | '-';
  desc: string;
  phetUrl?: string;
  html?: string;
  catName?: string;
  img?: string;
  vid?: string;
  gameUrl?: string;
  digitalGameId?: string;
}

export type CategoryName = "Kinematika" | "Dinamika" | "Energjia" | "Elektriciteti" | "Magnetizmi" | "Fizika Kuantike" | "Libri Interaktiv" | "Fizika 8" | "Termodinamika";

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
  html?: string;
  type?: 'digital' | 'school' | 'experiments';
  url?: string;
}

export interface Movie {
  id: number;
  title: string;
  poster: string;
  desc: string;
}
