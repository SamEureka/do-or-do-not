var React = require('react');
var NotesList = require('./listItems');
var AddNote = require('./newItem');

var Notes = React.createClass({
	propTypes: {
		username: React.PropTypes.string.isRequired,
		items: React.PropTypes.array.isRequired,
		addItem: React.PropTypes.func.isRequired,
	},
	render: function(){
		return (
			<div> 
				<h3> Notes for {this.props.username} </h3>
				<AddItem username={this.props.username} addNote={this.props.addItem} />
				<ListItems items={this.props.items} />
			</div>
		)
	}
});

module.exports = Items;