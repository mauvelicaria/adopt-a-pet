<template>
  <div class="nav"> 
    <nav id="nav-menu">
      <div class="logo">
        <img href="https://www.pngkey.com/png/detail/10-106610_orange-cat-paw-orange-paw-print-clip-art.png" class="logo-img">        
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
    name: 'NavigationFooter',
    data() {
        return {
            links: [
                {
                    id: 0.
                    text: 'Home',
                    page: '/'
                },
                {
                    id: 1,
                    text: 'Find a Pet',
                    page: '/FindAPet'
                },
                {
                    id: 2,
                    text: 'How It Works',
                    page: '/HowItWorks'
                },
                {
                    id: 3,
                    text: 'Contact',
                    page: '/Contact'
                },
                {
                    id: 4,
                    text: 'Register',
                    page: '/Register'
                }
            ]
        }
    }
}
</script>