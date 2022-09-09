import { GoogleOAuthProvider } from '@react-oauth/google'

import { MetaTags } from '@redwoodjs/web'
import { Toaster } from '@redwoodjs/web/toast'

import GoogleAuth from 'src/components/GoogleAuth/GoogleAuth'

const HomePage = () => {
  return (
    <>
      <Toaster />
      <MetaTags title="Authentication" description="Authentication page" />

      <h1>Authentication Page</h1>
      <GoogleOAuthProvider clientId={`${process.env.GOOGLE_CLIENT_ID}`}>
        <GoogleAuth />
      </GoogleOAuthProvider>
    </>
  )
}
export default HomePage
