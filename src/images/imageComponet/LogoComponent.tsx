import Image from 'next/image'
import logo from '../logo.svg'

export const Logo = (props) => {
    return (
      <Image
        src={logo}
        alt="Picture of the author"
    />
)}