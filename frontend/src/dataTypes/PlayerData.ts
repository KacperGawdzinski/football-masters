interface PlayerData {
  player: {
    age: string;
    firstname: string;
    height: string;
    id: number;
    injured: boolean;
    lastname: string;
    name: string;
    nationality: string;
    photo: string;
    weight: string;
    birth: {
      country: string;
      date: string;
      place: string;
    };
  };
  statistics: [
    {
      cards: {
        yellow: number;
        yellowred: number;
        red: number;
      };
      dribbles: {
        attempts: number;
        success: number;
        past: number;
      };
      duels: {
        total: number;
        won: number;
      };
      fouls: {
        drawn: number;
        committed: number;
      };
      games: {
        appearences: number;
        captain: boolean;
        lineups: number;
        minutes: number;
        number: number;
        position: string;
        rating: string;
      };
      goals: {
        assists: number;
        conceded: number;
        saves: number;
        total: number;
      };
      league: {
        country: string;
        flag: string;
        id: number;
        logo: string;
        name: string;
        season: number;
      };
      passes: {
        accuracy: number;
        key: number;
        total: number;
      };
      penalty: {
        commited: number;
        missed: number;
        saved: number;
        scored: number;
        won: number;
      };
      shots: {
        on: number;
        total: number;
      };
      substitutes: {
        bench: number;
        in: number;
        out: number;
      };
      tackles: {
        blocks: number;
        interceptions: number;
        total: number;
      };
      team: {
        id: number;
        logo: string;
        name: string;
      };
    }
  ];
}

export default PlayerData;
