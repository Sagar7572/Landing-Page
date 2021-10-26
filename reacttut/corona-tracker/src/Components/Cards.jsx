import { Typography, makeStyles, Box, CircularProgress, Grid} from "@material-ui/core";
import Card from "./Card"
const useStyles = makeStyles({
    component : {
        margin : '50px 0',
        flexDirection : 'column',
        alignItems : 'center',
        display : 'flex'
    },
    container : {
color : "#8ACA2B",
marginBottom : 40,
    }
}
    
)

const Cards = ({data : {confirmed, deaths, recovered, lastUpdate}}) => {
    const classes = useStyles();
    if(!confirmed){
        return <CircularProgress/>
    }
    return(
        <Box className = {classes.compinent}>
        <Typography className = {classes.container} varinat= "h4" gutterBottom> COVID-19 Cases Globally </Typography>
    <Grid container spacing = {3} justify = "center">
    <Card 
        cardTitle = "Infected"
        value = {confirmed.value}
        desc = "Number of infected Cases from Covid-19"
        lastUpdate = {lastUpdate}
    />
    <Card
        cardTitle = "Recovered"
        value = {recovered.value}
        desc = "Number of recovered Cases from Covid-19"
        lastUpdate = {lastUpdate}
    />
    <Card
        cardTitle = "Deaths"
        value = {deaths.value}
        desc = "Number of deaths caused by Covid-19"
        lastUpdate = {lastUpdate}
    />
    </Grid>
    </Box>
    )
}
export default Cards;