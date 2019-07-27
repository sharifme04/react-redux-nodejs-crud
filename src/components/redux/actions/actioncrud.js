import axios from 'axios';
import {
  FETCH_CONTACT_SUCCESS,
  FETCH_CONTACT_FAILURE,
  ADD_CONTACT,
  EDIT_CONTACT,
  UPDATE_CONTACT,
  DELETE_CONTACT,
} from './actionType';

export function fetchContact() {
  return dispatch =>{
      axios.get('/api/contactlist')
      .then( (response)=> {
        console.log(response.data);
        dispatch({
          type:FETCH_CONTACT_SUCCESS,
          contacts:response.data
        })

      })
      .catch((error)=> {
        console.log(error);
      });

  }
}

export function addContact(data) {
  return dispatch => {
   axios.post('/api/contactlist/add', data)
    .then(response =>{
      dispatch({
        type: ADD_CONTACT,
        contact:response.data
      })
    })

  }
}

export function editContact(_id) {
  return dispatch => {
   axios.get(`/api/contactlist/edit/${_id}`)
    .then(response =>{
      dispatch({
        type: EDIT_CONTACT,
        contact:response.data
      })
    })

  }
}

export function updateContact(_id, data) {
  console.log(_id);
  console.log(data);
  return dispatch => {
   axios.post(`/api/contactlist/update/${_id}`, data)
    .then(response =>{
      dispatch({
        type: UPDATE_CONTACT,
        contact:response.data
      })
    })

  }
}

export function deleteContact(_id) {
  console.log(_id);
  return dispatch => {
   axios.get(`/api/contactlist/delete/${_id}`)
    .then(response =>{
      dispatch({
        type: DELETE_CONTACT,
        id:_id,
      })
    })
  }
}
