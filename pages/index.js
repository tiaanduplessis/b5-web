import { Component } from 'react'
import Layout from '../components/Layout'
import Item from '../components/Item'
const { getItems } = require('b5-johnson-120-ipip-neo-pi-r')

export default class Index extends Component {
  constructor (props) {
    super(props)
    this.state = {
      answers: {},
      items: false
    }
    this.addOne = this.addOne.bind(this)
    this.subtractOne = this.subtractOne.bind(this)
  }

  async componentDidMount () {
    this.setState({items: getItems('en', true)})
  }

  addOne () {
    const number = this.state.number
    const newNumber = number + 1
    this.setState({number: newNumber})
  }

  subtractOne () {
    const number = this.state.number
    const newNumber = number - 1
    this.setState({number: newNumber})
  }

  render () {
    return (
      <Layout>
        <div>
          <h1>Big Five Test</h1>
          {this.state.items !== false
          ? this.state.items.map(item => <Item data={item} />)
          : null}
        </div>
        <style jsx>
          {`
            h2 {
              color: red;
              font-size: 48px;
              text-align: center;
            }
            a, a:visited {
              color: white;
            }
            button {
              background-color: white;
              border-radius: 2px;
              color: black;
              padding: 15px 32px;
              text-align: center;
              text-decoration: none;
              display: inline-block;
              font-size: 16px;
              width: 150px;
              margin: 10px;
              cursor: pointer;
            }
            button:focus {
              outline:0;
            }
            
            button:active {
              outline: 0;
            }
          `}
        </style>
      </Layout>
    )
  }
}
