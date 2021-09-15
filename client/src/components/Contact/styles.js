import { makeStyles } from '@material-ui/core/styles'
import Events from '../../images/Events.jpg';
const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      backgroundColor: theme.palette.background.paper,
    },
    heroButtons: {
      marginBottom: theme.spacing(6),
    },
    heroCardMedia: {
      backgroundImage: `url(${Events})`,
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      padding: '12% 0%',
      marginTop:'-100px',
      opacity: '0.8 !important',
      color: 'white',
    },
    container: {
      marginTop: theme.spacing(6),
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
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    contactBox: {
      // display: 'flex',
    },
    contactInfo: {
      // display: 'flex',
    },
    paper: {
      padding: theme.spacing(2),
      margin: 'auto',
      maxWidth: 500,
    },
    mailDiv: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
    }
  }));

  export default useStyles;