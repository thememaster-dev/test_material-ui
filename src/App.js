
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';



import './App.css';
import DashBoard from './view/DashBoard';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: orange[500],
    },
    secondary: {
      main: '#fff',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DashBoard/>
    </ThemeProvider>
  );
}

export default App;
