import React, { Component } from 'react'
import { connect } from 'react-redux'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import * as ItemsActions from 'ACTIONS'
import { bindActionCreators } from 'redux'

import SearchBar from 'COMPONENTS/Items/SearchBar'

import styles from './style.css'

class App extends Component {
  constructor (props) {
      super(props)
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {

    const {items, filter, actions, children} = this.props

    return (
      <div className={styles.normal}>
        <h1>Manage Items</h1>
        <SearchBar filterItem={actions.filterItem} />
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
