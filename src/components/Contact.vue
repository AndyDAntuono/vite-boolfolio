<template>
    <div>
      <h1>Contattaci</h1>
      <form @submit.prevent="sendContactForm">
        <div>
          <label for="name">Nome:</label>
          <input v-model="formData.name" id="name" type="text" required />
        </div>
        <div>
          <label for="surname">Cognome:</label>
          <input v-model="formData.surname" id="surname" type="text" required />
        </div>
        <div>
          <label for="email">Email:</label>
          <input v-model="formData.email" id="email" type="email" required />
        </div>
        <div>
          <label for="phone">Telefono:</label>
          <input v-model="formData.phone" id="phone" type="text" required />
        </div>
        <div>
          <label for="content">Messaggio:</label>
          <textarea v-model="formData.content" id="content" required></textarea>
        </div>
        <button type="submit">Invia</button>
      </form>
  
      <!-- Messaggio di successo o errore -->
      <p v-if="message" :class="{ 'success': isSuccess, 'error': !isSuccess }">{{ message }}</p>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        formData: {
          name: '',
          surname: '',
          email: '',
          phone: '',
          content: ''
        },
        message: '',
        isSuccess: false
      };
    },
    methods: {
      async sendContactForm() {
        try {
          const response = await axios.post('http://localhost:8000/api/contact', this.formData);
          this.message = response.data.message;
          this.isSuccess = true;
        } catch (error) {
          if (error.response) {
            this.message = error.response.data.error || 'Errore durante l\'invio del form.';
          } else if (error.request) {
            this.message = 'Errore di rete. Controlla la tua connessione.';
          } else {
            this.message = 'Errore imprevisto durante l\'invio del form.';
          }
          this.isSuccess = false;
        }
      }
    }
  };
  </script>
  