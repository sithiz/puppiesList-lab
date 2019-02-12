import React, { Component } from 'react'

export default class PuppieList extends Component {

    render() {

        const listPups = this.props.dogs.map((item, index) => {
            return (
                <li key={index} className="puppy">
                    <h1 className="puppy">{item.name}</h1>
                    {/* @TODO : ADD A DELETE BUTTON */}
                </li>

            )
        })
        return (
            <div>
            <ul>
                {listPups}
            </ul>
            <button onClick={this.props.deleteDog}> 
                    Remove Dogs</button>
            </div>
        )
    }
}