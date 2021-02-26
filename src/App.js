
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';




import './App.css';
import DashBoard from './view/DashBoard';

const theme = createMuiTheme({
  palette: {
    // secondary: {
    //   main: '#fff',
    // },
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
