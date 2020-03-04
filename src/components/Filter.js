import React from 'react';

let styles = {
  filterContainer: {
    display: 'flex',
    justifyContent: 'spaceAround',
    alignitem:'center'
  } 
}

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false,
      searchItem: '',
    };
    this.timeout = null
  }

  handleChange(type, event) {
    this.setState({
      [type]: event.target.value,
    })
  }

  debounce = (func, delay) => { 
    let debounceTimer;
    return function() { 
      const context = this
      const args = arguments 
      clearTimeout(debounceTimer) 
      debounceTimer = setTimeout(() => {
        func.apply(context, args)
      }, delay)  
    } 
  }  

  debounceFunction = this.debounce(this.props.getActivities, 250);

  render() {
    return (
      <div style={styles.filterContainer}>
        <div className="row">
          <div className="input-field col s12">
            <i className="material-icons prefix">search</i>
            <input onKeyDown={this.debounceFunction.bind(this, this.state.searchItem)} type="text" placeholder="Search Movies" value={this.state.searchItem} onChange={this.handleChange.bind(this,'searchItem')} />
          </div> 
        </div>
      </div>
    );
  }

};

export default Filter;
