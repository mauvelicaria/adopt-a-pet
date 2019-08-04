<template>
    <div class="footer">  
        <div class="schedule-footer">
          <h3>Schedule</h3>
          <p>We're open daily!</p>
          <p>Every Monday - Friday</p>
          <p>From 9am - 6pm</p>
        </div>

        <div class="subscribe-footer">
          <h3>Subscribe for more updates</h3>
          <form class="subscribe-form">
            <input type="text" placeholder="Enter your Email Address"/>    
            <br/>        
            <button>SUBSCRIBE</button>
          </form>
        </div>

        <div class="menu-links">
            <router-link class="spacing" v-for="routes in links" v-bind:key="routes.id" :to="`${routes.page}`">
            {{routes.text}}
            </router-link>
            <div class="copyright">
              <p>Copyright. &copy; Adopt Pet. 2019</p>
            </div>
        </div> 
    </div>     
</template>

<script>
export default {
  name: 'Footer',
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

<style scoped>
.footer {      
    background: #000;
    height: auto;  
    display: inline-flex;
    width: 100%;      
    padding: 20px 0px;
}

.menu-links {
    width: 40%;
    font-size: 12px;
    margin-top: 30px;
    padding: 5px;
    color: #fff;
}
.schedule-footer, 
.subscribe-footer {
  width: 30%;
}
h3 {
  color: #DFA956;
}
.schedule-footer p {
  color: #fff;
  line-height: 10px;
}
.subscribe-form input {
  border: 1px solid #C8C7C5;
  border-radius: 5px;
  padding: 10px;
  font-size: 14px;
  width: 60%;
}
.subscribe-form button {
  margin-top: 10px;
  font-size: 14px;
  font-weight: 500;
  padding: 5px 5%;
  background-color: #DFA956;
  border: none;
  color: white;
  text-align: center;
  text-decoration: none;
  display: inline-block;   
  border-radius: 5px;
}
.copyright p {
  color: #DFA956;
  text-align: center;
  margin-top: 60px;
}
</style>