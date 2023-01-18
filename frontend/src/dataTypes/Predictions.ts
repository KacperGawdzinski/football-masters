interface Predictions {
  league: {
    id: number;
    name: string;
    country: string;
    logo: string;
    flag: string;
    season: number;
  };
  teams: {
    home: {
      last_5: {
        form: string;
        att: string;
        def: string;
      };
      league: {
        form: string;
      };
      id: number;
      name: string;
      logo: string;
    };
    away: {
      id: number;
      name: string;
      logo: string;
      league: {
        form: string;
      };
      last_5: {
        form: string;
        att: string;
        def: string;
      };
    };
  };
  comparison: {
    form: {
      home: string;
      away: string;
    };
    att: {
      home: string;
      away: string;
    };
    def: {
      home: string;
      away: string;
    };
    total: {
      home: string;
      away: string;
    };
  };
}

export default Predictions;
