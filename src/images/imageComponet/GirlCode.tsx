import Image from 'next/image'
import girlCoding from '../avatar.svg'

export const GirlCoding = (props) => {
    return (
      <Image
        src={girlCoding}
        alt="Picture of the author"
    />
)}