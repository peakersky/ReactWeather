var React = require('react');

var WeatherMessage = ({temp, location})=> {
  return (
      <h3 className="text-center">It is {temp}'C in {location}</h3>
  )
};


module.exports = WeatherMessage;

// Object Destructuring.
// var temp = this.props.temp;
// var {temp} = this.props
// just put in the {temp} in the parameter