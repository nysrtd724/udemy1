import './Footer.css'

type Props = {
  message: string
}

const Footer = (props: Props) => {
  return (
  <div className='container'>
    <h1> {props.message} Footer </h1>
  </div>
  )
}

export default Footer