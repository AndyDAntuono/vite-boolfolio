<template>
    <nav>
      <ul>
        <li><router-link to="/">Homepage</router-link></li>
        <li><router-link to="/portfolio">Portfolio</router-link></li>
      </ul>
    </nav>
  </template>
  
  <style scoped>
  nav ul {
    display: flex;
    list-style: none;
  }
  nav ul li {
    margin-right: 10px;
  }
  </style>
  