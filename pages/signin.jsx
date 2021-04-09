import Head from 'next/head'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { isEmail } from 'validator'

import { useAuth } from '../hooks'
import { FooterContainer } from '../containers/FooterContainer'
import { HeaderContainer } from '../containers/HeaderContainer'
import { Form } from '../components'
import { IsUserRedirect } from '../helpers/routes'

export default function Signin() {
  const { signIn } = useAuth()
  const router = useRouter()
  const {
    register,
    handleSubmit,
    // watch,
    errors,
    setError,
    clearErrors,
    reset,
  } = useForm()
  // const watchEmail = watch('email')

  // TODO: check form input elements are valid email and password
  const handleSignin = async data => {
    try {
      await signIn(data.email, data.password)
      router.push('/browse')
    } catch (err) {
      console.log('[ERROR]', err)
      reset({ email: '', password: '' })
      setError('firebase', {
        type: 'manual',
        message: err.message,
      })
      setTimeout(() => clearErrors(['firebase']), 8000)
    }
  }
  const onError = (errs, e) => console.log(errs, e)

  return (
    <IsUserRedirect next="/browse">
      <Head>
        <title>Signin | Netflix</title>
      </Head>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {errors.email && <Form.Error>{errors.email?.message}</Form.Error>}
          {errors.password && (
            <Form.Error>{errors.password?.message}</Form.Error>
          )}
          {errors.firebase && (
            <Form.Error>{errors.firebase?.message}</Form.Error>
          )}

          <Form.Base onSubmit={handleSubmit(handleSignin, onError)}>
            <Form.Input
              name="email"
              placeholder="Email address"
              ref={register({
                required: 'Email is required',
                validate: v => isEmail(v) || 'Email is invalid',
              })}
            />
            <Form.Input
              name="password"
              placeholder="Password"
              type="password"
              autoComplete="off"
              ref={register({ required: 'Password is required' })}
              // disabled={!watchEmail}
            />
            <Form.Submit type="submit" disabled={Object.keys(errors).length}>
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            New to Netflix? <Form.Link href="/signup">Sign up now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </IsUserRedirect>
  )
}
