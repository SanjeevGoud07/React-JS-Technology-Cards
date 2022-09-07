/* eslint-disable jsx-a11y/alt-text */
// Write your code here.
import './index.css'

const CardItem = props => {
  const {cardsList} = props
  const {className, imgUrl, title, description} = cardsList
  const classN = `card ${className}`
  return (
    <li className={classN}>
      <h1 className="card-heading">{title}</h1>
      <p className="card-desc">{description}</p>
      <div className="img-con">
        <img src={imgUrl} alt={title} />
      </div>
    </li>
  )
}

export default CardItem
