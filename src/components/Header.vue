<template>
  <header class="header" tx="header">
    <nav>
      <router-link
        class="nav-link"
        active-class="active"
        exact
        :to="{ name: 'home' }"
      >
        Home
      </router-link>
      <router-link
        class="nav-link"
        active-class="active"
        exact
        :to="{ name: 'about' }"
      >
        About
      </router-link>
    </nav>
  </header>
</template>

<style>
.header {
  position: fixed;
  display: flex;
  align-items: stretch;
  left: 0;
  top: 0;
  padding: 0 14px;
  width: 100%;
  height: 60px;
  background: #673ab8;
  z-index: 999;
}
.header.overlap {
  z-index: 1000;
}
.header nav {
  display: flex;
  align-items: stretch;
}
.header nav a {
  display: flex;
  align-items: center;
  padding: 14px;
  color: #fff;
  font-size: 120%;
  text-decoration: none;
}
.header nav a:hover {
  background: #370a68;
}
.header nav a:hover,
.header nav a:active {
  background: #370a68;
}

.header nav a.active {
  background: #370a68;
}
</style>
