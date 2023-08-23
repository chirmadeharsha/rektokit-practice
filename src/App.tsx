import './App.css'
import './index.css'
import { ThemeProvider, createTheme, makeStyles, Box } from '@material-ui/core'
import HeaPage from './features/hea/components/heaPage'

// ** Creating Them From Material UI
const theme = createTheme({
  palette: {
    primary: {
      main: '#353450'
    },
    secondary: {
      main: '#f73563'
    }
  },
  typography: {
    fontFamily: 'Roboto, sans-serif'
  }
})
const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: '#f5f8fb',
    width: '100%'
  },
  content: {
    padding: '0 2%',
    height: '100vh'
  }
}))

const App: React.FC = () => {
  
  const classes = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.container}>
        <Box className={classes.content}>
        <HeaPage/>
        </Box>
      </Box>
    </ThemeProvider>
  )
}

export default App
