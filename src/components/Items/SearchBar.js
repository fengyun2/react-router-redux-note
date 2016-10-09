import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import styles from './style.css'

class SearchBar extends Component {
  constructor (props) {
      super(props)
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    const { filterItem } = this.props

    return (
      <div className={styles.search}>
        <input type="text" onKeyUp={filterItem} placeholder="请输入查找的item" />
      </div>
    )
  }
}

export default SearchBar
