import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link, useHistory } from 'react-router-dom';

const useStyles = makeStyles({
   root: {
      maxWidth: 345,
   },
   media: {
      height: 140,
   },
});

const Country = (props) => {
   const classes = useStyles();
   const { name, area, capital, flag, nativeName, population, region, } = props.countries;
 
   let history = useHistory();

   const handleClick = () =>{
      history.push(`/country/${name}`)
   }

   return (
      <div className="col-md-4 mb-4">
         <Card className={classes.root}>
            <CardActionArea>
               <CardMedia
                  className={classes.media}
                  image={flag}
                  title="Contemplative Reptile"
               />
               <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                     {name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                     <small>Area: {area}, </small>
                     <small>capital: {capital}, </small>
                     <small>nativeName: {nativeName}, </small>
                     <small>population: {population}, </small>
                     <small>region: {region}, </small>
                  </Typography>
               </CardContent>
            </CardActionArea>
            <CardActions>
               <Link as={Link} to={`/country/${name}`}>
                  <Button size="small" color="primary">
                     More info
                  </Button>
               </Link>
               <Button onClick={handleClick} size="small" color="primary">
                  More info
               </Button>
            </CardActions>
         </Card>
      </div>
   );
};

export default Country;