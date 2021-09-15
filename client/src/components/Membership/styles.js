import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(3),
    },
    heroMedia: {
      paddingTop: '56.25%', // 16:9
      margin: '10px 0px',
    },
    heroCardMedia: {
      backgroundImage: `url(https://wallpaperaccess.com/full/215112.jpg)`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      padding: '12% 0%',
      marginTop:'-100px',
      opacity: '0.7 !important',
      color: 'white',
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '120.25%', // 16:9
      margin: '10px 0px',
    },
    cardContent: {
      flexGrow: 1,
    },
  }));

  export default useStyles;