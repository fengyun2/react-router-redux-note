import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Footer extends Component {
  constructor (props) {
      super(props)
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    const {addItem, deleteAll} = this.props
    return (
      <div style={{textAlign: 'center'}}>
        <button style={{marginRight: '10px'}} onClick={addItem}>add</button>
        <button onClick={deleteAll}>deleteAll</button>
      </div>
    )
  }
}

export default Footer
