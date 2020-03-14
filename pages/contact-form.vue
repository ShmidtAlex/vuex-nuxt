<template>
  <div class="contact-form">
    <div class="links">
      <nuxt-link to="/">home</nuxt-link>
      <nuxt-link to="/contact-form">contact form</nuxt-link>
    </div>
    <h1>leave your contacts and message here:</h1>
    <div class="input-wrapper">
      <form class="feedback-form" action="">
        <div class="name">
          <label for="recipient-name" class="col-form-label">Ваше имя:</label>
          <input type="text" id="recipient-name" v-model="obj.name" name="name" class="form-control" placeholder="Представьтесь, пожалуйста">
        </div>
        <div class="form-group">
          <label for="recipient-mail" class="col-form-label">Ваш email:</label>
          <input type="email" v-model="obj.email"  name="email" id="recipient-mail" class="form-control" placeholder="example@mail.ru">
        </div>
        <div class="form-group">
          <label for="message-text" class="col-form-label">Сообщение:</label>
          <textarea name="message" v-model="obj.message" id="message-text" class="form-control"></textarea>
        </div>
        <button @click.prevent="addToStore()" type="submit">submit</button>
      </form>
    </div>
    <h3>list of contacts</h3>
    <div class="contacts-list">
      <div class="list-element" v-for="contact in allContacts" :key="contact.id">
        id: {{contact.id}} <br> name: {{contact.name}}<br/> email: {{contact.email}}<br/> message: {{contact.message}}
      </div>
    </div>
  </div>

</template>
<script>
  import { mapMutations, mapGetters, mapActions } from 'vuex'
  export default {
    data() {
      return {
        obj: {
          name: '',
          email: '',
          message: ''
        }
      }
    },
   mounted() {
     console.log(this.showGetters)
   },
    created() {
       this.initializeData()
    },
    methods: {
      ...mapActions({
        initializeData: 'contacts/initializeData',
        addNewContact: 'contacts/addNewContact'
      }),
      addToStore() {
        this.addNewContact(this.obj)
      },
    },
    computed: {
      ...mapGetters({
        allContacts: 'contacts/allContacts',
      }),
      showGetters () {
        return this.allContacts
      }

    },

  }
</script>
<style>
  h1 {
    margin: 20px;
  }
  .contacts-list {
    height: fit-content;
    min-height: 20px;
    width: 300px;
    border: 1px solid rgba(20,20,20,.5)
  }
  .contact-form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  .feedback-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    height: 150px;
    width: 300px;
  }

</style>
