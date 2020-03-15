import _ from 'lodash';

let initialData = [//here should be initial data from database or API
  {
    id: 1,
    name: 'Michael',
    email: 'michael.s@mail.com',
    message: 'message from Michael'
  },
  {
    id: 2,
    name: 'Mark',
    email: 'mark.sh@email.com',
    message: 'message from Mark'
  },
  {
    id: 3,
    name: 'Valery',
    email: 'valery.sh@mail.com',
    message: 'message from Valery'
  }
]
const state = () =>{
  return {
    contacts: []
  }
}
const getters = {
  allContacts (state) {
    return state.contacts
  }
}

const actions = {
  initializeData({ commit }) {
    commit('setData', initialData)
  },
  addNewContact({ commit, state }, newContact) {

    newContact.id = state.contacts.length +1;

    const savedData = [...state.contacts];

    let noSameEmail = true;

    savedData.forEach(function(elem) {
      if (elem.email !== newContact.email) {
        noSameEmail = true
      } else {
        noSameEmail = false
      }
    })
    if (noSameEmail) {
      savedData.push(newContact);
    }
    commit('addContact', savedData)
  }
}

const mutations = {
  setData: (state, contacts) => (state.contacts = contacts),
  addContact: (state, savedData) => (state.contacts = savedData )
}


export default { state, getters, mutations, actions}

