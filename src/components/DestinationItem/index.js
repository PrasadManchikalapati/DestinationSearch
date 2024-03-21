import './index.css'

const DestinationItem =  => {
  return (
    <li>
      <img src={imgUrl} alt="image" />
      <h1>{name}</h1>
    </li>
  )
}
export default DestinationItem
