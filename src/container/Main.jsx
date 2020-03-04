import React from 'react'
import Filter from '../components/Filter';
import Activity from '../components/Activity';
import Loading from '../components/Loading';
import Axios from 'axios';
import { API_BASE_PATH, API_KEY } from '../AppConfig';

const BASE_URL = `${API_BASE_PATH}/search/movie?api_key=${API_KEY}&language=en-US&page=1&include_adult=false`


class Main extends React.Component{

  constructor(props) {
    super(props)
    this.state = {
      moviesList: []
    }
  }

  getActivities = async (searchedItem) => {
    let url = `${BASE_URL}&query=${searchedItem}`
    Axios.get(url)
      .then((response) => {
      this.setState({
        moviesList : response.data.results
      })
    })
    .catch(function (error) {
      // alert(error);
    });
  }


  render() {
    return (
      <div>
        <Filter getActivities={this.getActivities}/>
        <Loading />
        <Activity moviesList={this.state.moviesList}  />
      </div>
    )
  }
}

export default Main