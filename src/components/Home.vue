<template>
  <div id="home-content">
    <div class="search-form" style="background: url(http://static.hogwartsishere.com/media/profile_photos/110717-Sabrina-059-Layout.jpg) no-repeat; 
    background-size: contain; background-position: right;">
        <form class="pet-search-form" style="padding-top: 100px; padding-bottom: 100px;">
          <div>
          <h1 class="search-title">Search for your Puuurfect Cat!</h1>
            <label>Breed: </label>
            <select>            
              <option v-for="option in breedItems" v-bind:value="option.value">
                {{ option.text }}
              </option>
            </select>

            <label>Gender: </label>
            <select>
              <option v-for="option in genderItems" v-bind:value="option.value">
                {{ option.text }}
              </option>
            </select>

            <label>Age: </label>
            <select>
              <option v-for="option in ageItems" v-bind:value="option.value">
                {{ option.text }}
              </option>
            </select>

            <label>Color: </label>
            <select>
              <option v-for="option in colorItems" v-bind:value="option.value">
                {{ option.text }}
              </option>
            </select>

            <label>Size: </label>
            <select>
              <option v-for="option in sizeItems" v-bind:value="option.value">
                {{ option.text }}
              </option>
            </select>
          </div>   
          <button class="search-btn">SEARCH</button>       
        </form>
    </div>  

    <div class="first-content">
      <h2>Searching for your puuurfect companion?</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
      nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
      id est laborum.</p>
    </div>

    <div class="main-content">
      <div class="column-1">
        <div class="pet-of-month">
          <h2>Pet of the Month!</h2>
          <img src="https://pbs.twimg.com/media/EAF-df1UwAAAf8q.jpg" class="img-responsive">          
        </div>

        <div class="birthday">
          <h2>Birthday!</h2>
          <img src="https://www.everypaw.com/uploads/rsz_1british_shorthair_1.jpg" class="img-responsive">          
        </div>
      </div>
      
      <div class="column-2">
        <div class="adopted">
          <h2>Adopted Purrs!</h2>
          <transition-group name="fade" tag="div">
            <div v-for="i in [currentIndex]" :key="i">
              <img :src="currentImg" class="img-responsive"/>
            </div>
          </transition-group>
          <a class="prev" @click="prev">&#10094; Previous</a> | 
          <a class="next" @click="next">Next &#10095; </a>   
        </div>
      </div>
    </div>  

    <div class="footer-content">
      <h2>ABOUT US</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
      dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex 
      ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat 
      nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim 
      id est laborum.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home', 
  data() {
    return {
      breedItems: [
        { text: 'Persian', value: 'Persian' },
        { text: 'Siamese', value: 'Siamese' },
        { text: 'British Shorthair', value: 'British Shorthair' }        
      ],

      genderItems: [
        { text: 'Male', value: 'Male' },
        { text: 'Female', value: 'Female' }        
      ],

      ageItems: [
        { text: 'Kitten', value: 'Kitten' },
        { text: 'Junior', value: 'Junior' },
        { text: 'Prime', value: 'Prime' },
        { text: 'Mature', value: 'Mature' },
        { text: 'Senior', value: 'Senior' },       
      ],

      colorItems: [
        { text: 'White', value: 'White' },
        { text: 'Black', value: 'Black' },
        { text: 'Orange', value: 'Orange' },
        { text: 'Calico', value: 'Calico' },
        { text: 'Tabby', value: 'Tabby' },
        { text: 'Gray', value: 'Gray' }        
      ],

      sizeItems: [
        { text: 'Small', value: 'Small' },
        { text: 'Medium', value: 'Medium' },
        { text: 'Large', value: 'Large' }        
      ],

      adoptedImages: [
        "https://miro.medium.com/max/2625/1*MYG8xruNTQv1CPBbqEPG_A.jpeg",
        "https://d17fnq9dkz9hgj.cloudfront.net/uploads/2012/11/100901720-cat-adoption-first-30-days-632x475.jpg",
        "https://www.thesprucepets.com/thmb/HbmDtCx-yO5XCzOveY0xWjRqasw=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/jane-517481682-58b354bc3df78cdcd8d79f16.jpg",
        "https://www.goodnewsnetwork.org/wp-content/uploads/2018/03/Black-Cat-on-the-Couch-Public-Domain.jpg"
      ],
      timer: null,
      currentIndex: 0
    }
  },
  methods: {
    next: function() {
      this.currentIndex += 1;
    },
    prev: function() {
      this.currentIndex -= 1;
    }
  },
  computed: {
    currentImg: function() {
      return this.adoptedImages[Math.abs(this.currentIndex) % this.adoptedImages.length];
    }
  }
}
</script>

<style scoped>
select {
  border: 1px solid #C8C7C5;
  border-radius: 5px; 
  padding: 5px; 
  width: 150px;
  font-size: 14px;
},
/*.search-form {
  background: url("https://thumbs.dreamstime.com/z/portrait-two-cats-peeking-behind-banner-portrait-two-cats-peeking-behind-banner-isolated-white-114280183.jpg") no-repeat;  
  margin-top: 20px;
  background-position: center;
  background-attachment: fixed;
  background-size: contain;    
}*/
div.pet-search-form{
  /*padding-top: 100px;*/
}
.main-content {
  padding-top: 10px;
  display: inline-flex; 
  width: 100%;
}
.column-1 {
  width: 30%;
  border-right: 6px solid #DFA956;
}
.column-2 {
  width: 70%;
}
.img-responsive {
  width: 80%;
  height: auto;
  margin: auto;
  display: block;
}
.first-content, .footer-content {
  background: #E8CE9A;
  padding: 2px;  
}
.footer-content {
  margin-top: 10px;
}
.footer-content h2,
.footer-content p {
  margin-top: 20px;
}
.subscribe-form{
  display: inline;
}
p, h1, h2, h3, h4, h5, h6, a, label {
  font-family: 'Montserrat', sans-serif;
}
.first-content p,
.footer-content p {
  padding: 0% 10%;
}
.search-btn{
  margin-top: 20px;
  font-size: 18px;
  padding: 10px 5%;    
  background-color: #DFA956;
  border: none;
  color: white;    
  text-align: center;
  text-decoration: none;
  display: inline-block;    
}
.prev, .next {
  margin-top: 20px;
  font-size: 12px;
  padding: 10px 5%;    
  background-color: #DFA956;
  border: none;
  color: white;    
  text-align: center;
  text-decoration: none;
  display: inline-block;   
}
.prev:hover, .next:hover{
  cursor: pointer;
}
</style>

