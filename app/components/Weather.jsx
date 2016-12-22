var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        }
    },
    handleSearch: function (location) {
        var that = this;

        this.setState({isLoading: true});

        openWeatherMap.getTemp(location).then(function(temp){
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
        }, function(errorMessage) {
            that.setState({isLoading: false});
            alert(errorMessage);
        });

    },
    render: function() {
        var {isLoading, temp, location} = this.state;

        function renderMessage() {
            if (isLoading){
                return <h3>Fetching Weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage location={location} temp={temp} />
            }
        }

        return(
           <div>
                <h1>Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}/>
                {renderMessage()}
           </div>
        )
    }
});

module.exports = Weather;


// What must be created.

// 1 Weather Component. - Container component (manages the state)
// 2 Weather Form Component - input box and the button.
// 3 Weather Message Component - outputs the text.
