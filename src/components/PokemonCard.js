import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import img from './../static/images/main-pokemon.png'



const PokemonCard = ({ pokemon }) => {
  console.log(pokemon)
  return (
    <Card sx={{ maxWidth: 120 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="120"
          image={img}
          alt="pokemon"
        />
        <CardContent>
          <Typography gutterBottom component="div">
            {pokemon.name}
          </Typography>
          {/* <Typography gutterBottom component="div">
            {pokemon.url}
          </Typography> */}
        </CardContent>
      </CardActionArea>
      {/* <CardActions>
         <Button size="small" color="primary">
          View details
        </Button> 
      </CardActions> */}
    </Card>
  );
}

export default PokemonCard;