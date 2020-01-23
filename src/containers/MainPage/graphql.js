import gql from 'graphql-tag'

const GET_VIEWER = gql`
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
export default GET_VIEWER

export const PREFERENCES = gql`
    mutation PREFERENCES ($input: NewPrefsInput!){
    updatePreferences(input: $input){
        searchBar,
        weatherCur,
        greeting,
    }
    }
`
