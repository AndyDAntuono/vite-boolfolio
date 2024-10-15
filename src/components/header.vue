<template>
    <nav>
      <ul>
        <!-- questo li sa lo store per le voci del menù -->
        <li v-for="item in store.menu" :key="item.name">
          <router-link :to="item.path">{{ item.name }}</router-link>
        </li>
      </ul>
    </nav>
  </template>
  
  <script>
  import { store } from '../store/store'; // importazione dello store
  
  export default {
    name: 'Header',
    setup() {
      return {
        store // rende lo store disponibile nel template
      };
    }
  };
  </script>
  
  <style scoped>
  nav ul {
    display: flex;
    list-style: none;
  }
  nav ul li {
    margin-right: 10px;
  }
  </style>
  