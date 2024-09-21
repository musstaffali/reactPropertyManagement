import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import Home from './containers/Home'
import Navbar from './components/Navbar';
import LandlordList from './containers/landlords/LandlordList'
import LandlordForm from './containers/landlords/LandlordForm'
import LandlordShow from './containers/landlords/LandlordShow'
import { fetchLandlords } from './actions/landlords'
import LandlordHousesList from './containers/houses/LandlordHousesList';
import HouseForm from './containers/houses/HouseForm'
import LandlordHouseUpdate from './containers/landlords/LandlordHouseUpdate';
import './App.css'




class App extends Component {

  state = {
    landlords: []
  }
  componentDidMount() {
    this.props.fetchLandlords()
  }

  render() {
    return (
      <Router>
        <div>

          <div class="d-flex justify-content-center align-items-center" >
            <Navbar />
          </div>

          <div class="d-flex justify-content-center align-items-center">
            {/* <img src='images/img-landlord.jpg'/> */}

            <Switch>

              <Route exact path="/" component={Home} />
              <Route exact path="/landlords" component={LandlordList} />
              <Route exact path="/landlords/new" component={LandlordForm} />
              <Route exact path="/houses/new" component={HouseForm} />
              {/* <Route exact path="/landlords/:id" render={props => <LandlordShow {...props} landlords={this.state.landlords} />} /> */}
              <Route exact path="/landlords/:id" component={LandlordShow} />
              <Route exact path="/landlords/:id/houses/new" component={HouseForm} />
              <Route exact path="/landlords/:id/houses" component={LandlordHousesList} />
              <Route exact path="/landlords/:id/houses/:houseid/edit" component={LandlordHouseUpdate} />
              <Route render={() => <div>This page doesnot exist!</div>} />
            </Switch>
          </div>


        </div>

      </Router>

    );
  }

}

export default connect(null, { fetchLandlords })(App);
