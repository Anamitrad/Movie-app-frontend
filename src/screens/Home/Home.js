import React,{Component} from 'react';
import './Home.css'
import Header from '../../common/Header/Header';
import {withStyles} from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import moviesData from '../../common/moviesData';
const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper
    },
    upcomingMoviesHeading: {
        textAlign: 'center',
        background: '#ff9999',
        padding: '8px',
        fontSize: '1rem'
    },
    gridListUpcomingMovies: {
        flexWrap: 'nowrap',
        transform: 'translateZ(0)',
        width: '100%'
    },
    gridListMain: {
        transform: 'translateZ(0)',
        cursor: 'pointer'
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 240,
        maxWidth: 240
     },
     title: {
        color: theme.palette.primary.light,
     }
 });
class Home extends Component{

     
    render()
    {
        const { classes } = this.props;
        return(
            <div>
                <div>
                    <Header />
                    <div>
                    <span className= {classes.upcomingMoviesHeading}>Upcoming Movies</span>
                    </div>
                </div>
                <GridList cols={5} className={classes.gridListUpcomingMovies}>
                {moviesData.map(movie=>(
                    <GridListTile key={movie.id}>
                        <img src={movie.poster_url} alt={movie.title}/>
                        <GridListTileBar title={movie.title}/>
                    </GridListTile>
                ))}
            </GridList>
            <div className="flex-container">
                <div className="left">
                    <GridList cellHeight={350}  cols={4} className={classes.gridListMain}>
                        {moviesData.map(movie=>(
                            <GridListTile  className="released-movie-grid-item" key={movie.id} >
                                <img className= "movie-poster"src={movie.poster_url} alt={movie.title}/>
                                <GridListTileBar title={movie.title} subtitle={<span>Release Date: {new Date(movie.release_date).toDateString()}</span>}/>
                            </GridListTile>
                        ))}
                    </GridList>
                </div>
            </div>
        </div>
        )
    }
}
export default withStyles(styles)(Home);