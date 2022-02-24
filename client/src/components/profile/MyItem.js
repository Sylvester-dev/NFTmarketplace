import React from 'react'
import axios from 'axios'
import ItemCard from '../home/ItemCard'
import HOST from  '../../env'


class MyItem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            myItemList: null,
            loaded: false
        }
    }

    componentDidMount() {
        axios
            .get(`${HOST}:50667/item/my`, { params: { _id: this.props.accountId } })
            .then(res => this.setState({
                myItemList: res.data,
                loaded: true
            }))
            .catch(_ => window.location = `${HOST}:50666/error`)
    }

    render() {
        return (
            <>
                <h4>My items</h4>
                <div className='py-3 row'>
                    {this.state.loaded ? this.state.myItemList.map(item => <ItemCard item={item} key={item._id} />) : null}
                </div>
            </>
        )
    }
}

export default MyItem