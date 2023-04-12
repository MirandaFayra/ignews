import { Logo } from '../../images/imageComponet/LogoComponent'
import { SigInButton } from '../SigninButton'
import styles from './styles.module.scss'

export function Header (){
    return(
            <header className={styles.headerContainer}>
                <div className={styles.headerContent}>
                    <Logo/>
                    <nav>
                        <a className={styles.active}>Home</a>
                        <a>Posts</a>
                    </nav>
                    <SigInButton/>
                </div>
            </header>
    )
}