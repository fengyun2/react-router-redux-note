import React, {Component} from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import classNames from 'classnames'
import {isEmpty} from 'lodash'

class Content extends Component {
  constructor (props) {
      super(props)
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    const items = this.props.items.toArray()
    const {filter, deleteItem} = this.props

    return (
      <ul>
        {items.map(v => <ListItem filter={filter} item={v} key={v} deleteItem={deleteItem} />)}
      </ul>
    )
  }
}

class ListItem extends Component {
  constructor (props) {
      super(props)
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this)
  }

  render () {
    const {filter, item, deleteItem} = this.props

    console.log(`filter: ${filter}`)
    console.log(`item: ${item}`)

    const liClass = classNames({hidden: !isEmpty(filter) && filter != item})

    return (
      <li className={liClass}>
        <span style={{marginRight: '4px'}}>{item}</span>
        <button onClick={deleteItem.bind(this, item)}>delete</button>
      </li>
    )
  }
}

export default Content
