var React = require('react');
var PropTypes = require('prop-types');

function SelectData (props) {
  var data = ['All', 'Planets', 'Spaceships', 'Vehicles', 'People', 'Films', 'Species'];

  return(
    <ul className="data">
      <p>Selected Item : {props.selectedItem}</p>
      {data.map(function(item) {
        return(
          <li
            style={item === props.selectedItem ? { color: '#d0021b'}: null}
            onClick={props.onSelect.bind(null, item)}
            key={item}>
            {item}
          </li>
        )
      })}
    </ul>
  );
}

SelectData.PropTypes = {
  selectedItem:PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired, 
}

class Universe extends React.Component {
  constructor(props) {
    // This is useful when you want to call function of the object's parent.
    super(props);
    this.state = {
      selectedItem: "All",
    };
    // bind property takes in a context (using console.log allows us to see context is Universe)
    this.updateItem = this.updateItem.bind(this);
    console.log("up above: " + this);
  }
    updateItem(item) {
      this.setState(function() {
        return {
          selectedItem: item,
        }
      });

  }
  render() {
    console.log("up above: " + this);
    return (
      <div>
        <SelectData
          selectedItem={this.state.selectedItem}
          onSelect={this.updateItem}
        />
      </div>
    )
  }
}

module.exports = Universe;
