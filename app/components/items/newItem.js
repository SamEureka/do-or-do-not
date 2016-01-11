var React = require('react');

var AddItem = React.createClass({
	propType: {
		username: React.PropTypes.string.isRequired,
		addItem: React.PropTypes.func.isRequired
	},
	setTodo: function(todo){
		this.item = todo;
	},
	handleSubmit: function(){
		var newNote = this.note.value;
		this.note.value = '';
		this.props.addItem(newItem)
	},
	render: function(){
		return (
			<div className="input-group">
				<input type="text" className="form-control" placeholder="Add New Todo" ref={this.setTodo} />
				<select className="form-control" value="1">
    					<option value="1">Low</option>
    					<option value="2">Medium</option>
    					<option value="3">High</option>
  				</select>
				<span className="input-group-btn">
					<button className="btn btn-default" type="button" onClick={this.handleSubmit}>Submit</button>
				</span>
			</div> 
		)
	},
});

module.exports = AddItem;