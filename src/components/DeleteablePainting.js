import React from 'react'
import { PaintingCard, DeleteCard } from './PaintingCard.js'

class DeleteablePainting extends React.Component {
  constructor() {
    super();

    this.state = {
      deleteView: false
    }
  }

  changeDeleteView = () => {
    this.setState( prevState => {
      return {deleteView: !prevState.deleteView
      }
    })
  }

  render() {
    return (
      <div>
        {!this.state.deleteView ? <PaintingCard painting={this.props.painting} changeDeleteView={this.changeDeleteView}/> : <DeleteCard painting={this.props.painting} changeDeleteView={this.changeDeleteView} deletePainting={this.props.deletePainting}/>}
      </div>
    )
  }
}

export default DeleteablePainting
