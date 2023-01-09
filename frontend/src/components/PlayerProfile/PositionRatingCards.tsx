import { Grid, Typography, Box, Rating } from '@mui/material';
import { styled } from '@mui/system';
import capitalizeFirstLetter from '../../utils/capitalizeFirstLetter';
import Card from './Card';

const MiddleInfoGridItem = styled(Grid)({
  marginTop: '50px'
});

const Position = styled(Typography)({
  textAlign: 'center'
});

const RatingWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center'
});

const CenteredRating = styled(Rating)({
  margin: '0 auto'
});

const CardWrapper = styled(Box)({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '20px'
});

interface Props {
  position: string;
  rating: string;
  yellowCards: number;
  redCards: number;
}

const PositionRatingCards = (props: Props) => {
  const rating = parseFloat(props.rating) / 2.0;

  return (
    <MiddleInfoGridItem item xs={4}>
      <Position variant="h3">{capitalizeFirstLetter(props.position)}</Position>
      {rating ? (
        <RatingWrapper>
          <CenteredRating
            name="half-rating-read"
            defaultValue={rating ? rating : 0}
            precision={0.25}
            readOnly
            size="large"
          />
        </RatingWrapper>
      ) : null}

      <CardWrapper>
        <Card type={'yellow'} amount={props.yellowCards} />
        <Card type={'red'} amount={props.redCards} />
      </CardWrapper>
    </MiddleInfoGridItem>
  );
};

export default PositionRatingCards;
