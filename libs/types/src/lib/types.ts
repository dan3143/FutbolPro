interface Country {
  name: string;
  code: string;
  flag: string;
}

interface Team {
  id: number;
  name: string;
  country: string;
  founded: number;
  national: boolean;
  logo: string;
}

interface Venue {
  id: number;
  name: string;
  address: string;
  city: string;
  capacity: number;
  surface: string;
  image: string;
}

interface Player {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  nationality: string;
  photo: string;
}

export type { Country, Team, Player, Venue };
