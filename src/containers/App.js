import React, { Component } from 'react'
import { connect } from 'react-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import * as ItemsActions from 'ACTIONS'
import { bindActionCreators } from 'redux'

class App extends Component {
  constructor (props) {
      super(props)
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
      let styles = {
          width: '200px',
          margin: '30px auto 0',
      }

    const {items, filter, actions, children} = this.props

    return (
      <div style={styles}>
        <h2>Manage Items</h2>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    items: state.items,
    filter: state.filter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(ItemsActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
