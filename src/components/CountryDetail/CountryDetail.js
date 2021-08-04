import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const useStyles = makeStyles({
   root: {
      maxWidth: 345,
   },
   media: {
      height: 140,
   },
});

const CountryDetail = () => {
   let { CountryName } = useParams();
   const classes = useStyles();
   const [countryDetail, setCountryDetail] = useState([]);

   useEffect(() => {
      const url = `https://restcountries.eu/rest/v2/name/${CountryName}`
      fetch(url)
         .then(res => res.json())
         .then(data => setCountryDetail(data[0]))
   })
   const { name, area, capital, flag, nativeName, population, region, } = countryDetail;

   return (
      <div className="d-flex justify-content-center mt-5">
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
         </Card>
      </div>
   );
};

export default CountryDetail;