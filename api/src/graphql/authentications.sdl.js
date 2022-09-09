const { OAuth2Client } = require('google-auth-library')

export const authenticate = async ({ code }) => {
  const oAuth2Client = new OAuth2Client(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET,
    'http://localhost:8910'
  )

  console.log(oAuth2Client)
  const { tokens } = await oAuth2Client.getToken(code)

  console.log(tokens)

  //TODO: store these tokens in the DB too

  return {
    accessToken: tokens.access_token,
    refreshToken: tokens.refresh_token,
    expiryDate: tokens.expiry_date,
  }
}

export const schema = gql`
  type Authentication {
    id: String!
    accessToken: String!
    refreshToken: String!
    createdAt: DateTime!
  }

  type Query {
    authentications: [Authentication!]! @requireAuth
    authentication(id: String!): Authentication @requireAuth
  }

  input CreateAuthenticationInput {
    accessToken: String!
    refreshToken: String!
  }

  input UpdateAuthenticationInput {
    accessToken: String
    refreshToken: String
  }

  type Mutation {
    createAuthentication(input: CreateAuthenticationInput!): Authentication!
      @requireAuth
    updateAuthentication(
      id: String!
      input: UpdateAuthenticationInput!
    ): Authentication! @requireAuth
    deleteAuthentication(id: String!): Authentication! @requireAuth
  }
`
