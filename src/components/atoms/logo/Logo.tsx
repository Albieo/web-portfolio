import { ReactElement, useState } from 'react'
import './logo.scss'

const Logo = (): ReactElement => {
  const [name, setName] = useState('AlbieoDev')
  return (
    <div className="logo">
      <button>
        {name}
      </button>
    </div>
  )
}
export default Logo
