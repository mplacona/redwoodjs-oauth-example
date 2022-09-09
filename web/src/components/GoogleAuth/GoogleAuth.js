import { useGoogleLogin } from '@react-oauth/google'
import { GoogleLogin } from '@react-oauth/google'

const GoogleAuth = () => {
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse),
    flow: 'auth-code',
    scope: 'https://www.googleapis.com/auth/gmail.settings.basic',
  })
  return (
    <GoogleLogin
      onSuccess={(credentialResponse) => {
        login(credentialResponse)
      }}
      onError={() => {
        console.log('Login Failed')
      }}
    />
  )
}

export default GoogleAuth
