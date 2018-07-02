<template>
  <nav>
    <div class="nav-wrapper">
      <div class="brand-logo">
        <router-link to="/">
          TOP
        </router-link>
      </div>
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li>
          <router-link to="about">
            About
          </router-link>
        </li>
        <li>
          <router-link to="contact">
            Contact
          </router-link>
        </li>
      </ul>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </nav>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
h1 {
  font-size: 1.5rem;
}
</style>
