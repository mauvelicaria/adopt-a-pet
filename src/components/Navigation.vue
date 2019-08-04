<template>
  <div class="nav"> 
    <nav id="nav-menu">
      <div class="logo">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/01/Yamato_Transport_logo.svg/1200px-Yamato_Transport_logo.svg.png" class="logo-img">        
      </div>
      <div class="menu-links">
        <router-link class="spacing" v-for="routes in links" v-bind:key="routes.id" :to="`${routes.page}`">
          {{routes.text}}
        </router-link>
      </div>      
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      links: [        
        {
          id: 0,
          text: 'Home',
          page:'/'
        },
        {
          id: 1,
          text: 'Find a Pet',
          page:'/FindAPet'
        },
        {
          id: 2,
          text: 'How It Works',
          page:'/HowItWorks'
        },
        {
          id: 3,
          text: 'Contact',
          page:'/Contact'
        },
        {
          id: 4,
          text: 'Register',
          page:'/Register'
        }
      ]
    }
  }
}
</script>

<style>
.nav {
  background: black;
}
.spacing {
  margin-right: 40px;
  margin-bottom: 10px;
  text-transform: uppercase;
}
#nav-menu {  
  padding: 20px; 
  border-bottom: 6px solid #DFA956;
  display: inline-flex;
}
.logo {
  width: 50%;
}
.logo-img {
  float: left; 
  width: 20%; 
  height: auto;
}
.menu-links {
  float: right;
  margin-top: 40px;
} 
.menu-links a, .spacing:visited {
  padding-bottom: 5px;
  text-decoration: none !important;
  color: #fff;
}
.spacing:hover {
  text-decoration: underline !important;
  padding-bottom: 5px;
}
.spacing:active, .router-link-active {
  font-weight: 700;
  text-decoration: underline;
  color: #DFA956 !important;
}
a {
  font-family: 'Montserrat', sans-serif;
}
</style>

