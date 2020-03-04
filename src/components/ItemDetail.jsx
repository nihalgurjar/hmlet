import React from 'react';
import {BASE_IMG_URL} from '../AppConfig'

const ItemDetail = ({ activity, handleClick }) => {
  return (
    <div className="row" key={activity.id}>
        <div className="col s12 m10">
          <div className="card">
            <div className="card-image">
              <img src={`${BASE_IMG_URL}${activity.poster_path}`} alt="poster" />
            <span className="card-title">{activity.title}</span>
            </div>
            <div className="card-content">
              {activity.overview}
            </div>
            <div className="card-action">
              <button onClick = {handleClick}>Go back</button>
            </div>
          </div>
        </div>
    </div>
  )
}
export default ItemDetail