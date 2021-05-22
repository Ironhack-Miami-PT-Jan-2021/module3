import React, { Component } from "react";
import service from "../../utils/service";

export default class Celebrity extends Component {
  async componentDidMount() {
    // unique id of the celebrity that we need to display on the page
    // see Celebrities.js to see how this is done
    const celebId = this.props.match.params.id;
    // call the route in the backend that gives us a data about unique celebrity based on an id
    const responseFromServer = await service.getCelebrityInfo(celebId);
    // this would be a good point to store the data in the state
    console.log(responseFromServer);
  }
  render() {
    console.log(this.props);
    return <div>Data for celeb</div>;
  }
}
