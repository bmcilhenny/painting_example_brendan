import React from 'react';

export const PaintingCard = props => {
  return (
    <div className="item">
      <div className="ui small image">
        <img src={props.painting.image} alt={props.painting.slug} />
      </div>
      <div className="middle aligned content">
        <div className="header">{`"${props.painting.title}"`}</div>
        <div className="meta">{props.painting.artist.name}</div>
        <div className="description">
          <a onClick={() => props.handleVote(props.painting.id)}>
            <i className="large caret up icon" />
            {props.painting.votes} votes
          </a>
        </div>
        <div className="content">
          <div className="ui basic red button" onClick={props.changeDeleteView }>
            <i className="trash icon" />
            Delete
          </div>
        </div>
      </div>
    </div>
  );
};

export const DeleteCard = props => {
  debugger
  return (

    <div>
      <div className="ui small image">
        <img src={props.painting.image} alt={props.painting.slug} />
      </div>
      <h3>Are you sure you want to delete {props.painting.title}</h3>
      <button onClick={() =>  props.deletePainting(props.painting.id)} >YES</button>
      <button onClick={props.changeDeleteView}>NO</button>
    </div>
  )
}
