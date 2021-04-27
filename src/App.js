import '@/App.css'
import routes from '@/routes.js'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from '@material-ui/core/styles'
import {
  AppBar,
  Container,
  CssBaseline,
  Toolbar,
  Typography,
  useMediaQuery
} from '@material-ui/core'
import blueGrey from '@material-ui/core/colors/blueGrey'
import { GitHub, Instagram, Twitter } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGlow: 1
  },
  title: {
    position: 'absolute',
    flexGlow: 1,
    left: '20px',
    fontSize: '1.25rem',
    lineHeight: '1.5',
    overflow: 'hidden'
  },
  icon: {
    marginLeft: 'auto',
    alignContent: 'center'
  }
}))

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')

  const theme = React.useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: prefersDarkMode ? 'dark' : 'light',
          background: {
            light: 'ffffff',
            main: '121212'
          }
        }
      }),
    [prefersDarkMode]
  )

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Bar />
        <BrowserRouter>
          <Switch>
            {routes.map((config, i) => (
              <Route key={i} {...config} />
            ))}
          </Switch>
        </BrowserRouter>
        <AppBar position="static" color="transparent" elevation={0}>
          <Container maxWidth="md">
            <Toolbar>
              <Typography
                variant="caption"
                style={{
                  marginLeft: 'auto',
                  marginRight: 'auto',
                  color: prefersDarkMode ? 'white' : 'black'
                }}
              >
                {new Date().getFullYear()} <strong>Takashi Ushikoshi</strong>
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </div>
  )
}

function Bar() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{ backgroundColor: blueGrey[700] }}>
        <Toolbar>
          <Typography className={classes.title}>Takashi</Typography>
          <div className={classes.icon}>
            <a
              style={{
                textDecoration: 'none',
                color: 'inherit',
                marginLeft: 12,
                marginRight: 12
              }}
              href="https://github.com/Uhucream"
              rel="noreferrer noopener"
              target="_blank"
            >
              <GitHub />
            </a>
            <a
              style={{
                textDecoration: 'none',
                color: 'inherit',
                marginLeft: 12,
                marginRight: 12
              }}
              href="https://www.instagram.com/cattle19_59.tym.pictures"
              rel="noreferrer noopener"
              target="_blank"
            >
              <Instagram />
            </a>
            <a
              style={{
                textDecoration: 'none',
                color: 'inherit',
                marginLeft: 12
              }}
              href="https://twitter.com/UKokkei95Toyama"
              rel="noreferrer noopener"
              target="_blank"
            >
              <Twitter />
            </a>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default App
