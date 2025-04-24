<script setup lang="ts">
</script>

<template>
  <div class="header-div">
    <div class="header-column">
      <img class="header-img" src="../assets/images/headerIcon.svg" alt="headerIcon" />
    </div>
    <div class="header-column">
      <ul>
        <li><a href="#">The Center</a></li>
        <li><a href="#">Our Team</a></li>
        <li><a href="#">Activities</a></li>
        <li><a href="#">Events</a></li>
        <li><a href="#">Pricing</a></li>
        <li><a class="active-link" href="#">Contacts</a></li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

.header-div {
  background-color: white;
}

ul {
  list-style-type: none;
  padding-right: 50px;
}

li {
  float: right;
}

li a {
  display: block;
  color: black;
  text-align: center;
  padding: 5px 10px;
  margin: 10px;
  text-decoration: none;
}

.active-link {
  background-color: #D3D3D3;
  border-radius: 10px;
}

</style>