import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import client from './client'
import Welcome from './containers/Welcome'
import Login from './containers/Login'
import Register from './containers/Register'
import MainPage from './containers/MainPage'


<<<<<<< HEAD
const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <div className="App">
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/home" component={MainPage} />
            <Route path="/" component={Welcome} />
          </Switch>
        </div>
      </ApolloProvider>
    </ThemeProvider>
  </Router>
)
=======
const App = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <ApolloProvider client={client}>
          <div className="App">
            <Switch>
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <Route path="/home" component={MainPage} />
              <Route path="/" component={Welcome} />
            </Switch>
          </div>
        </ApolloProvider>
      </ThemeProvider>
    </Router>
  )
}
>>>>>>> cdaf0b6... Peter's Weather API added

export default App
