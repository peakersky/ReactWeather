var React = require('react');
//
// var WeatherMessage = React.createClass({
//   render: function(location, temp) {
//     var {temp, location} = this.props;
//       return (
//         <p>It is {temp} in {location}</p>
//     )
//   }
// });

var WeatherMessage = ({temp, location})=> {
  return (
      <p>It is {temp} in {location}</p>
  )
};


module.exports = WeatherMessage;
