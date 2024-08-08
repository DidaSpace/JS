<template>
  <div id="app">
    <Header />
    <!-- добавьте остальные компоненты -->
  </div>
</template>

<script>
import Header from './components/Header.vue'


export default {
  name: 'App',
  components: {
    Header,
    
  }
}
</script>

<style>
  * {
  margin: 0;
  padding: 0;
}
a {
  text-decoration: none;
  color: #292f36;
}

.center1 {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}

.center2 {
  padding-left: calc(50% - 600.5px);
  padding-right: calc(50% - 600.5px);
}

.header {
  margin-top: 44px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  color: #292f36;
}

.header__logo {
  display: flex;
  align-content: center;
  gap: 10px;
}
.logo-img {
  margin-top: 8px;
  margin-bottom: 8px;
  width: 34px;
  height: 34px;
}
.logo-text {
  font-size: 40px;
  line-height: 125%;
}
.header__menubar {
  padding-right: 50px;
}
.menubar__list {
  display: flex;
  gap: 50px;
}
.menubar__item {
  display: block;
  font-size: 20px;
  line-height: 125%;
}

</style> 