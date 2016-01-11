var React = require('react');

var ListItems = React.createClass({
	render: function() {
		var items = this.props.items.map(function(item, index){
			return <li className="list-group-item" key={index}>{item['.value']}</li>
		})
		return (
			<ul className="list-group">
				{items}
			</ul>
		)
	}
});

module.exports = ListItems;