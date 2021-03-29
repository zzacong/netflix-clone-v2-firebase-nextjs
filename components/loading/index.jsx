import { LockBody, ReleaseBody, Spinner, Picture } from './styles/loading'

export default function Loading({ src, ...props }) {
  return (
    <Spinner {...props}>
      <LockBody />
      <Picture src={`/images/users/${src}.png`} />
    </Spinner>
  )
}

Loading.ReleaseBody = () => <ReleaseBody />
