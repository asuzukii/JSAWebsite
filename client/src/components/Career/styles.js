import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    heroContent: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(8, 0, 4),
    },
    heroButtons: {
      margin: theme.spacing(4, 0, 12),
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
      marginTop:'10px',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
      backgroundSize: 'contain'
    },
    noteIframe: {
      border: 0,
      display: 'block',
      maxWidth: '100%',
      width: '600px',
      height: '220px',
      padding: 0,
      margin: '0px 0px',
      position: 'static',
    },
  }));

  export default useStyles;