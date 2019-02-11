import React, { Component } from 'react'
import DogForm from './DogForm'
import PuppiesList from './PuppiesList'

export default class MainContainer extends Component {

    state = {
        dogs: [{ name: 'spock', age: 3, breed: 'Boxer' }]
    }

    addDog = (dog) => {
        let newDogs = this.state.dogs
        newDogs.push(dog)
        this.setState({
            dogs: newDogs
        })
    }

    render() {

        return (
            <div>
                <h1>Helloooo {this.props.username}</h1>
                <div className="list-wrapper">
                    <ul className="list">
                        <PuppiesList dogs={this.state.dogs} />
                    </ul>
                </div>
                <DogForm addDog={this.addDog} />
            </div >
        )
    }

}
