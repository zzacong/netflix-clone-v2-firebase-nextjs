import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { isEmail } from 'validator'
import { FooterContainer } from '../containers/footer'
import { HeaderContainer } from '../containers/header'
import { Form } from '../components'
import { useAuth } from '../hooks'

export default function Signup() {
  const { signUp } = useAuth()
  const router = useRouter()
  const {
    register,
    handleSubmit,
    errors,
    setError,
    clearErrors,
    reset,
  } = useForm()

  // TODO: check form input elements are valid email and password
  const handleSignin = async data => {
    try {
      const result = await signUp(data.email, data.password)
      await result.user.updateProfile({
        displayName: data.name,
        photoURL: Math.floor(Math.random() * 5) + 1,
      })
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
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {errors.name && <Form.Error>{errors.name?.message}</Form.Error>}
          {errors.email && <Form.Error>{errors.email?.message}</Form.Error>}
          {errors.password && (
            <Form.Error>{errors.password?.message}</Form.Error>
          )}
          {errors.firebase && (
            <Form.Error>{errors.firebase?.message}</Form.Error>
          )}

          <Form.Base onSubmit={handleSubmit(handleSignin, onError)}>
            <Form.Input
              name="name"
              placeholder="Name"
              ref={register({ required: 'Name is required' })}
            />
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
            />
            <Form.Submit type="submit" disabled={Object.keys(errors).length}>
              Sign Up
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Already a user? <Form.Link href="/signin">Sign in now.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. Learn more.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  )
}
