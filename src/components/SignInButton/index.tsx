import { FaGithub } from 'react-icons/fa'
import { FiX } from 'react-icons/fi'
import styles from './styles.module.scss'

export const SignInButton = () => {
  const isUserLoggedIn = true;

  return(
    <button type="button" className={styles.signInButton}>
      { isUserLoggedIn ? (
        <>
          <FaGithub color="#04d361" />
          Jessica Castro
          <FiX color="#737380" className={styles.closeIcon} />
        </>
      ) : (
        <>
          <FaGithub color="#eba417" />
          Sign in with Github
        </>
      ) }
    </button>
  )
}