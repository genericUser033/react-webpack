import {ADD_JOB, DELETE_JOB, SET_JOB} from "../constants/constants";

export const setJob = payload => {
    return {
        type: SET_JOB,
        payload
    }
}

export const addJob = payload => {
    return {
        type: ADD_JOB,
        // job: '',//shouldnt be used
        payload
    }
}

export const deleteJob = payload => {
    return {
        type: DELETE_JOB,
        payload //id
    }
}