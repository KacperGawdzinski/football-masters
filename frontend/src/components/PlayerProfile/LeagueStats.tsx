import { Grid, Box } from '@mui/material';
import { styled } from '@mui/system';
import Stat from '../../dataTypes/Stat';
import PlayerStatsChart from './PlayerStatsChart';
import StatInfoGrid from './StatInfoGrid';
import LeagueHeader from './LeagueHeader';
import PositionRatingCards from './PositionRatingCards';
import PlayerData from '../../dataTypes/PlayerData';
import mapStatsToObject from '../../utils/mapStatsToObject';

const Hr = styled('hr')({
  display: 'block',
  height: '1px',
  border: 0,
  borderTop: '2px solid #5c5c5c',
  margin: '1em auto',
  padding: 0,
  width: '70%'
});

const ChartWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'space-around',
  marginTop: '50px',
  paddingBottom: '50px'
});

const goalsProperties = ['total', 'assists', 'saves'];
const gamesProperties = ['lineups', 'minutes', 'appearences'];
const tacklesProperties = ['total', 'blocks', 'interceptions'];
const substitutesProperties = ['bench', 'in', 'out'];

interface Props {
  playerData: PlayerData;
}

function LeagueStats(props: Props) {
  return (
    <Box>
      {props.playerData.statistics.map(stats => {
        const goalsStats: Stat[] = mapStatsToObject(
          goalsProperties,
          stats.goals,
          'goals'
        );
        const gamesStats: Stat[] = mapStatsToObject(
          gamesProperties,
          stats.games
        );
        const tacklesStats: Stat[] = mapStatsToObject(
          tacklesProperties,
          stats.tackles,
          'tackles'
        );
        const substitutesStats: Stat[] = mapStatsToObject(
          substitutesProperties,
          stats.substitutes
        );

        return (
          <Box key={stats.league.id}>
            <Hr />
            <LeagueHeader
              leagueImageLink={stats.league.logo}
              teamImageLink={stats.team.logo}
              leagueName={stats.league.name}
            ></LeagueHeader>

            <Grid container>
              <Grid item xs={4}>
                <StatInfoGrid statistics={goalsStats} />
                <StatInfoGrid statistics={tacklesStats} />
              </Grid>
              <PositionRatingCards
                position={stats.games.position}
                rating={stats.games.rating}
                yellowCards={stats.cards.yellow}
                redCards={stats.cards.red}
              ></PositionRatingCards>
              <Grid item xs={4}>
                <StatInfoGrid statistics={gamesStats} />
                <StatInfoGrid statistics={substitutesStats} />
              </Grid>
            </Grid>

            <ChartWrapper>
              {Math.round((stats.shots.on / stats.shots.total) * 100) ? (
                <PlayerStatsChart
                  attribute={'Shot Accuracy'}
                  value={Math.round((stats.shots.on / stats.shots.total) * 100)}
                ></PlayerStatsChart>
              ) : null}
              {stats.passes.accuracy ? (
                <PlayerStatsChart
                  attribute={'Pass accuracy'}
                  value={stats.passes.accuracy}
                ></PlayerStatsChart>
              ) : null}
              {Math.round(
                (stats.dribbles.success / stats.dribbles.attempts) * 100
              ) ? (
                <PlayerStatsChart
                  attribute={'Dribble ratio'}
                  value={Math.round(
                    (stats.dribbles.success / stats.dribbles.attempts) * 100
                  )}
                ></PlayerStatsChart>
              ) : null}
              {Math.round(
                (stats.penalty.scored /
                  (stats.penalty.scored + stats.penalty.missed)) *
                  100
              ) ? (
                <PlayerStatsChart
                  attribute={'Penalty ratio'}
                  value={Math.round(
                    (stats.penalty.scored /
                      (stats.penalty.scored + stats.penalty.missed)) *
                      100
                  )}
                ></PlayerStatsChart>
              ) : null}
            </ChartWrapper>
          </Box>
        );
      })}
    </Box>
  );
}

export default LeagueStats;
