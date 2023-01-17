interface FixtureData {
  fixture: {
    id: number;
    referee: string;
    timezone: string;
    date: string;
    timestamp: number;
  };
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
    round: string;
  };
  teams: {
    home: {
      id: number;
      name: string;
      logo: string;
      winner: string;
    };
    away: {
      id: number;
      name: string;
      logo: string;
      winner: string;
    };
  };
}

export default FixtureData;
