import React from 'react'
import { BASE_IMG_URL } from '../AppConfig'

const imgStyle = {
  height: '100% !important',
  width: '100% !important',
  margin: '0 auto'
};

const Item = ({ item, clickFunction }) => {
  return (
  <div className="col s12 m3 item" key={item.id} onClick={() => clickFunction(item,false)}>
    <div className="card hoverable">
      <div className="card-image" style={imgStyle}>
        <img width="100" src={`${BASE_IMG_URL}${item.poster_path}`} alt="poster" />
      </div>
      <div className="card-action">
        <div  className="item_detail"> 
            <p className="">{item.title}</p>
            <p className=""> {item.release_date}</p>                       
        </div>
      </div>
    </div>
    </div>
  )
}

export default Item