import {
  FETCH_CONTACT_SUCCESS,
  ADD_CONTACT,
  UPDATE_CONTACT,
  EDIT_CONTACT,
  DELETE_CONTACT,
} from '../actions/actionType';

const initialState = {
  contacts: [],
  error: null
}
export default function contactlist(state = initialState, action) {
   switch (action.type) {
     case FETCH_CONTACT_SUCCESS:
        return {
          ...state,
          contacts: action.contacts.data
        };

      case ADD_CONTACT:
         return {
           ...state,
            contacts: [...state.contacts, action.contact.data]
         };

       case EDIT_CONTACT:
          return {
            ...state,
             contact: action.contact.data
          };
      case UPDATE_CONTACT:
         return {
           ...state,
            contact:  action.contact.data
         };

     case DELETE_CONTACT:
        return {
          ...state,
          contacts: state.contacts.filter(contact => contact._id !== action.id)
        };

      default:
       return state;
   }
}
