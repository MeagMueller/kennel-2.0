import React, { Component } from 'react'
import EmployeeList from './employees/EmployeeList'
import LocationsList from './locations/LocationsList'

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

    state = {
        employees: this.employeesFromAPI,
        locations: this.locationsFromAPI
    }

    render() {
        console.log(this.state.employees)
        return (
            <article className="kennel">
                <LocationsList locations={this.state.locations} />
                <EmployeeList employees={this.state.employees} />
            </article>
        )
    }
}

export default Kennel

