<template>
  <div id="how-it-works">
    <div class="how-info">
      <h1>How it Works?</h1>
      <div class="how-content">
        <div class="row">
                <div class="column">
                    <div class="card">                        
                        <div class="container">
                            <h2>Register</h2>                            
                            <p>Some text that describes me Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>                                                    
                        </div>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">                        
                        <div class="container">
                            <h2>Screen</h2>                            
                            <p>Some text that describes me Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>                                                    
                        </div>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">                        
                        <div class="container">
                            <h2>Adopt</h2>                            
                            <p>Some text that describes me Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>                                                    
                        </div>
                    </div>
                </div>
            </div>            
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HowItWorks' 
}
</script>

<style scoped>
.column {
  float: left;
  width: 32%;
  margin-bottom: 16px;
  padding: 0 8px;
}

@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background: #E8CE9A;
  padding: 5% 20px;
}

.card img {
  width: 100%;
  height: 300px;
  vertical-align: middle;
}

.container {
  padding: 0 16px;
}

.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}
</style>
