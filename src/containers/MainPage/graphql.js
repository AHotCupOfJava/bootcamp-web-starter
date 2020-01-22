import gql from 'graphql-tag'

const GET_VIEWER = gql`
    query ViewerInfo {
        username
        firstName
        lastName
        prefs {
            searchBar
            weatherCur
            greetings
        }

    }



`
export default GET_VIEWER
