import React from 'react';
import DeleteablePainting from './DeleteablePainting';

class PaintingList extends React.Component {
  constructor () {
    super();

  }
  render() {
    const deleteablePaintings = this.props.paintings.map(painting => {
      return (
        <DeleteablePainting
          handleVote={this.props.handleVote}
          painting={painting}
          deletePainting={this.props.deletePainting}
          key={painting.id}
        />
      );
    });

    return (
      <div>
        <h1>All the Paintings</h1>
        <div className="ui items">
          {deleteablePaintings}
        </div>
      </div>
    );
  }
}

export default PaintingList;
