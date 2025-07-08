import { ReactElement } from 'react'
import Image from '../image/Image'
import logo from '../../../img/AMlogo(clean).svg';
import './logo.scss'

const Logo = (): ReactElement => {
    return (
        <div className="logo">
            <Image className='logo--img' src={logo} alt="web logo" />
        </div>
    )
}
export default Logo
