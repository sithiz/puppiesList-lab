import React, { Component } from 'react'

export default class PuppieList extends Component {

    render() {
        const listPups = this.props.dogs.map((item, index) => {
            return (
                <li key={index}>
                    <h1>{item.name}</h1>
                    {/* @TODO : ADD A DELETE BUTTON */}
                </li>

            )
        })
        return (
            <ul>
                {listPups}
            </ul>
        )
    }
}