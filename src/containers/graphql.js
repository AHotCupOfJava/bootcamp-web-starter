import gql from 'graphql-tag'

export const LOGIN = gql`
    mutation LOGIN ($email: String!, $password: String! ) {
    login(email: $email, password: $password) {
        user {
        id
        username
        email
        firstName
        }
        token
    }
}
`

export const REGISTER = gql`
    mutation REGISTER ($input: RegisterInput!) {
    register(input: $input) {
        token
        user {
        id
        username
        email
        firstName
        }
    }
    }
`
