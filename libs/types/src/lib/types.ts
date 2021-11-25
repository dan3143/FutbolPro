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

interface TeamResponse {
  id: number;
  name: string;
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
  name: string;
  age: number;
  number: number | null;
  position: string;
  photo: string;
}

interface PlayersResponse {
  team: TeamResponse;
  players: Array<Player>;
}

export type { Country, Team, Player, Venue, PlayersResponse, TeamResponse };
