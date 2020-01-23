import gql from 'graphql-tag'

export const GET_VIEWER = gql`
  query GET_VIEWER {
    getViewer {
      username
      firstName
      lastName
      prefs {
        searchBar
        weatherCur
        greeting
      }
    }
  }
`
export const PREFERENCES = gql`
  mutation PREFERENCES ($input: NewPrefsInput!){
    updatePreferences(input: $input){
      searchBar,
      weatherCur,
      greeting,
    }
  }
`
