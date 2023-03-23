import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

const font = 'Nunito, sans-serif';

const theme = createTheme({
  palette: {
    background: {
      default: "#eee",
      list:"#F5F5F5"
    },
    primary: {
      main: '#fff',
    },
    myColor: {
      main: "#fff",
      dark:"#000000",
      green:"#009242"
    },
    pink: {
      deep: '#FF1493',
      hot: '#FF69B4',
      medium: '#C71585',
      pale: '#DB7093',
      light: '#FFB6C1',
    },
  },
  typography: {
    fontFamily: font,
    h3: {
      '@media (min-width:600px)': {
        fontSize: '2.5rem', // Change the font size for md screens
      },
      '@media (max-width:599.95px)': {
        fontSize: '1.2rem', // Change the font size for xs screens
      },
    },
    button: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      color: '#000000',
      height: 30,
      fontSize: '20px',
      padding: '10px',
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      textTransform: 'none',
    }
  },
  root: {
    "& .MuiDataGrid-columnHeaders": {
      fontSize: 17.8,
    },
    "& .MuiDataGrid-row Mui-selected": {
      backgroundColor: "red"
    }
  },
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0px',
      height: '10px',
    },
    '*::-webkit-scrollbar-thumb': {
      width: '0rem',
      backgroundColor: '#D5073C',
      borderRadius: "2rem",
    },
  },
});

export default theme;