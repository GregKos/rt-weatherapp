var React = require('react');
var Timestamp = require('react-timestamp');
var PropTypes = require('prop-types');

class IconW extends React.Component {
	render() {
		var data = this.props.resp;
		var id = this.props.id;
		return (
			<div className='column paleri'>
				<img src={'/app/images/weather-icons/' + data.list[id].weather[0].icon + ".svg"} />
				<div className='smallSpacer'><Timestamp time={data.list[id].dt} format='date' includeDay /></div>
			</div>
		)
	}
}

IconW.propTypes = {
	resp: PropTypes.object.isRequired,
	id: PropTypes.number.isRequired
}

module.exports = IconW;