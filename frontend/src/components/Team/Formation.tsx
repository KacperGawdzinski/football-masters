import { Typography } from '@mui/material';

interface Props {
  formationString: string;
}

const Formation = (props: Props) => {
  const formationNumbers = props.formationString.split('-');
  console.log(formationNumbers);

  return (
    <div style={{ height: '650px', width: '400px' }}>
      <div
        style={{
          position: 'relative',
          backgroundImage: `url(/football_field.png)`,
          height: '600px',
          width: '400px',
          backgroundSize: '100% 100%',
          borderRadius: '20px'
        }}
      >
        {formationNumbers.reverse().map((line, idx) => {
          return (
            <div key={idx}>
              <hr
                style={{
                  width: '100%',
                  position: 'absolute',
                  top: idx * (500 / formationNumbers.length) + 98,
                  border: '2px solid black'
                }}
              ></hr>

              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  position: 'absolute',
                  top: idx * (500 / formationNumbers.length) + 73,
                  width: '100%'
                }}
              >
                {[...Array(parseInt(formationNumbers[idx]))].map(el => {
                  return (
                    <div
                      key={el}
                      style={{
                        backgroundColor: '#ECF87F',
                        maxWidth: '50px',
                        minWidth: '50px',
                        maxHeight: '50px',
                        minHeight: '50px',
                        borderRadius: '50%',
                        borderStyle: 'solid'
                      }}
                    >
                      &nbsp;
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <Typography variant="h4" style={{ textAlign: 'center' }}>
        {props.formationString}
      </Typography>
    </div>
  );
};

export default Formation;
