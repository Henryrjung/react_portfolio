import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import SerialSearch from './images/5.PNG';
import ViralSupport from  './images/6.PNG';
import TeamBuilder from  './images/1.PNG';
import NoteTaker from './images/2.PNG';
import FitnessTracker from './images/4.PNG';
import EmpDatabase from './images/3.PNG';

const useStyles = makeStyles((theme) => ({
 grid: {
   width: '100%',
   margin: '0px'
 },
 paper: {
   padding: theme.spacing(2),
   textAlign: 'center',
   color: theme.palette.text.secondary,
   backgorund: theme.palette.success.light
 }
  
}));

export default function SpacingGrid() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12} md={6} lg={4}>
        <Paper className={classes.paper}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="SerialSearch"
          height="300"
          image={SerialSearch}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            SerialSearch
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            SerialSearch is an SPA that searches for serial killers and gives you relevent TV shows, books, and movies on them.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          <a target="_blank" href='https://github.com/Henryrjung/SerialSearch'>GitHub</a>
        </Button>
        <Button size="small" color="primary">
        <a target="_blank" href='https://henryrjung.github.io/SerialSearch/'>Site</a>
        </Button>
      </CardActions>
    </Card>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Paper className={classes.paper}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="SerialSearch"
          height="300"
          image={ViralSupport}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            ViralSupport
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            ViralSupport is a COVID-19 information hub that shows news, case data, and resources.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <a target="_blank" href='https://github.com/Henryrjung/ViralSupport'>GitHub</a>
        </Button>
        <Button size="small" color="primary">
        <a target="_blank" href='https://viralsupport.herokuapp.com/'>Site</a>
        </Button>
      </CardActions>
    </Card>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Paper className={classes.paper}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="SerialSearch"
          height="300"
          image={TeamBuilder}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            TeamBuilder
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Web app that lets you build a team of employees, where you can add a name, ID, and office.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <a target="_blank" href='https://github.com/Henryrjung/10_Employee_Summary'>GitHub</a>
        </Button>
        <Button size="small" color="primary">
        <a target="_blank" href='https://drive.google.com/file/d/1q_le2jTK2nMjh3iJAffeIMoWLnhHLYCJ/view'>Site</a>
        </Button>
      </CardActions>
    </Card>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Paper className={classes.paper}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="SerialSearch"
          height="300"
          image={NoteTaker}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            NoteTaker
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          Web app that lets you add and delete saved notes, that appear on the left side of the page. using a SQL database, 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <a target="_blank" href='https://github.com/Henryrjung/11_note_taker'>GitHub</a>
        </Button>
        <Button size="small" color="primary">
        <a target="_blank" href='https://vast-plains-35339.herokuapp.com/'>Site</a>
        </Button>
      </CardActions>
    </Card>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Paper className={classes.paper}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="SerialSearch"
          height="300"
          image={FitnessTracker}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            FitnessTracker
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            FitnessTracker is a web page that helps you record workout data, you can then view your data on a chart, using chart.js
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <a target="_blank" href='https://github.com/Henryrjung/17_fitness_tracker'>GitHub</a>
        </Button>
        <Button size="small" color="primary">
        <a target="_blank" href='https://agile-citadel-00802.herokuapp.com/?id=600c86365a2f9e0015e3f5b2'>Site</a>
        </Button>
      </CardActions>
    </Card>
        </Paper>
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <Paper className={classes.paper}>
        <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="SerialSearch"
          height="300"
          image={EmpDatabase}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            EmployeeDatabase
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Employee Database is a CLI that lets you view, add, and update employee information, using inquirer
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <a target="_blank" href='https://github.com/Henryrjung/12_employee_database'>GitHub</a>
        </Button>
        <Button size="small" color="primary">
        <a target="_blank" href='https://drive.google.com/file/d/1E7pK5HXn-6lriKMn3lmMm1nUUkrHbHfM/view'>Site</a>
        </Button>
      </CardActions>
    </Card>
        </Paper>
      </Grid>
     
    </Grid>
  );
}

