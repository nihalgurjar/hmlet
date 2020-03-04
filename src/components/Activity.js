import React from 'react';
import Item from './Item';
import ItemDetail from './ItemDetail';

class Activity extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      article: [],
      showDetail: true,
      activity: [],
      selectedItem: {}
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.moviesList !== nextProps.moviesList) {
      this.setState({
        article : nextProps.moviesList
      })
    }
  }

  handleClick(item, value) {
    this.setState({
      selectedItem: item,
      showDetail: value
    })
  }

  render() {
    const article = this.state.article
    return (
      <div>
        {this.state.showDetail ? 
            <div className="row">
            {
            article.map((item,index) => {
              return (
                <Item key={index}  item={item} clickFunction={this.handleClick.bind(this)} 
                />
              )
            })
            }
          </div>
        :
          <ItemDetail activity={this.state.selectedItem} handleClick={this.handleClick.bind(this, true)}/>
          }
      </div>
    )
  }


}

export default Activity;


