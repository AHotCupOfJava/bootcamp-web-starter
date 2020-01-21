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


const App = () => (
  <Router>
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <div className="App">
          <Switch>
            <Route path="/" component={Welcome} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/home" component={MainPage} />
          </Switch>
        </div>
      </ApolloProvider>
    </ThemeProvider>
  </Router>
)

export default App
