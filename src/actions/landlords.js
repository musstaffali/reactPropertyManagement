
const BASE_URL = 'https://landlordsapp-rails-backend.herokuapp.com'
// const BASE_URL = 'http://localhost:3001'

export const fetchLandlords = () => {
    //thunk requires a function to be returned

    return (dispatch) => {

        fetch(BASE_URL + '/users')
            .then(resp => resp.json())
            .then(landlords => dispatch({ type: "LOAD_LANDLORDS", landlords }))
    }
}

export const fetchlandlordhouses = (landlord_id) => {
    console.log(landlord_id)
    return (dispatch) => {

        fetch(BASE_URL + '/users/' + landlord_id + '/houses')
            .then(resp => resp.json())
            .then(houses => dispatch({ type: "LOAD_HOUSES", houses }))
    }
}

const addLandlord = (landlord) => {
    return {
        type: "ADD_LANDLORD",
        landlord
    }
}



export const createLandlord = (landlordData) => {
    return (dispatch) => {
        fetch(BASE_URL + '/users', {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(landlordData)
        })
            .then(resp => resp.json())
            .then(landlord => {
                dispatch(addLandlord(landlord))
            })
    }
}

const addLandlordHouse = house => {
    return {
        type: "ADD_LANDLORD_HOUSE",
        house
    }
}

export const createLandlordHouse = (landlord_id, house) => {
    return (dispatch) => {
        fetch(BASE_URL + `/users/${landlord_id}/houses`, {
            method: "POST",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(house)
        })
            .then(resp => resp.json())
            .then(house => {
                dispatch(addLandlordHouse(house))
            })
    }

}


const deleteLandlord = (id) => {
    return {
        type: "DELETE_LANDLORD",
        id
    }
}

export const removeLandlord = id => {
    return (dispatch) => {
        return fetch(BASE_URL + `/users/${id}`, {
            method: 'DELETE',
        })
            .then(resp => dispatch(deleteLandlord(id)))
    }
}

const deleteLandlordHouse = id => {
    return {
        type: "DELETE_LANDLORD_HOUSE",
        id
    }
}

export const removelandlordhouse = (landlordId, houseId) => {
    return (dispatch) => {
        return fetch(BASE_URL + `/users/${landlordId}/houses/${houseId}`, {
            method: 'DELETE',
        })
            .then(resp => dispatch(deleteLandlordHouse(houseId)))
    }
}

const houseUpdate = (house) => {
    return {
        type: "UPDATE_LANDLORD_HOUSE",
        house
    }

}

export const updateLandlordHouse = (landlordId, houseId, house) => {
    return (dispatch) => {
        fetch(BASE_URL + `/users/${landlordId}/houses/${houseId}`, {
            method: "PATCH",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(house)

        })
            .then(resp => resp.json())
            .then(house => {
                dispatch(houseUpdate(house))
            })
    }
}

export const landlordHouseNumber = landlordId => {
    //thunk requires a function to be returned

    return (dispatch) => {

        fetch(BASE_URL + '/users/' + landlordId + '/houses')
            .then(resp => resp.json())
            .then(houses => dispatch({ type: "LOAD_HOUSES_NUMBER", houses }))
    }
}


export function reset_houses() {
    return {
        type: "RESET_HOUSES"
    }
}
