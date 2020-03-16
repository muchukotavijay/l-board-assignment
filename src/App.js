import React, { Component } from 'react';
import Age from './components/Age';
import Name from './components/Name';
import Points from './components/Points';
import Rank from './components/Rank';
import Table from './components/Table';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      sortBy: ""
    }

    // binding handlers in the constructor 
    this.handleClickAge = this.handleClickAge.bind(this);
    this.handleClickName = this.handleClickName.bind(this);
    this.handleClickPoints = this.handleClickPoints.bind(this);
    this.handleClickRank = this.handleClickRank.bind(this);

  }

  componentDidMount() {
    // get path name from the url
    const pathName = window.location.pathname.split('/')[1] || '';
    // check if path is valid
    const isValidPath = (['age', 'name', 'points', 'rank'].indexOf(pathName) > -1)
    // if it is valid then set sortBy with pathName value
    if(isValidPath) {
      this.setState({
        sortBy:pathName
      })
    }
	}

  // suggestion : single handle method can used for all 4 handlers

  // Method to handle click of age button
  handleClickAge() {
    this.setState({
      sortBy: 'age'
    })
  }

  // Method to handle click of name button
  handleClickName() {
    this.setState({
      sortBy: 'name'
    })
  }

  // Method to handle click of points button
  handleClickPoints() {
    this.setState({
      sortBy: 'points'
    })
  }

  // Method to handle click of rank button
  handleClickRank() {
    this.setState({
      sortBy: 'rank'
    })
  }

  render() {
    return (
      <div className="text-center buttons">
        <header className="text-center">
          <h1>Leaderboard</h1>
        </header>
        <div className="text-center buttons">
          <Age clicked = {() => {this.handleClickAge()}}></Age>
          <Name clicked = {() => {this.handleClickName()}}></Name>
          <Points clicked = {() => {this.handleClickPoints()}}></Points>
          <Rank clicked = {() => {this.handleClickRank()}}></Rank>
          <Table sortBy={this.state.sortBy}></Table>
        </div>
      </div>
    );
  }
}

