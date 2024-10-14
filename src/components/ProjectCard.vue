<template>
    <div class="project-card">
      <h2>{{ project.title }}</h2>
      <p>{{ project.description }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProjectCard',
    props: {
      project: {
        type: Object,
        required: true
      }
    }
  };
  </script>
  
  <style scoped>
  .project-card {
    border: 1px solid #ddd;
    padding: 20px;
    margin: 10px 0;
    border-radius: 8px;
    background-color: #f9f9f9;
  }
  
  h2 {
    font-size: 1.5em;
    margin-bottom: 10px;
  }
  
  p {
    font-size: 1.1em;
    color: #555;
  }
  </style>
  