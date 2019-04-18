import React, { Component } from 'react'
import EmployeeList from './employees/EmployeeList'
import LocationsList from './locations/LocationsList'
import AnimalList from './animals/AnimalList'

class Kennel extends Component {

    employeesFromAPI = [
        { id: 1, name: "Morticia Addams"},
        { id: 2, name: "Rebecca Bunch"},
        { id: 3, name: "Seven Opossums in a Trenchcoat"},
        { id: 4, name: "A Bog Witch"}
    ]

    locationsFromAPI = [
        { id: 1, name: "Nashville North", address: "500 Doggo Lane" },
        { id: 2, name: "Nashville South", address: "500 The Bog" }
    ]

    animals = [
        { id: 1, name: "Doggle", breed: "Mix"},
        { id: 2, name: "Gandarf", breed: "Irish Wolfhound"},
        { id: 3, name: "Sir Fluffington the 3rd", breed: "Cavalier King Charles"},
        { id: 4, name: "Woofer", breed: "Samoyed"},
        { id: 5, name: "Subwoofer", breed: "Shiba Inu"},
        { id: 6, name: "Bup", breed: "Whatever Chica is"},
        { id: 7, name: "Yes, This is Dog", breed: "Woof"}
    ]

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI,
        animals: this.animals
    }

    render() {
        console.log(this.state.employees)
        return (
            <article className="kennel">
                <LocationsList locations={this.state.locations} />
                <EmployeeList employees={this.state.employees} />
                <AnimalList animals={this.state.animals} />
            </article>
        )
    }
}

export default Kennel

