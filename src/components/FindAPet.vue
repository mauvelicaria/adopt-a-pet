<template>
    <div id="find-a-pet">
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

                    <button class="search-btn">SEARCH</button> 
                </div>                         
            </form>
        </div>  

        <div class="find-a-pet-content">
            <h2>Lorem Ipsum Dolor Sit</h2>
            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
            eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam 
            voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem 
            sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non 
            numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis 
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum 
            iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo 
            voluptas nulla pariatur?</p>
        </div>

        <div class="pet-results">
            <div class="row">
                <div class="column">
                    <div class="card">
                        <img src="https://kittenrescue.org/wp-content/uploads/2016/11/KittenRescue_WhyAdopt1.jpg" alt="Jane">
                        <div class="container">
                            <h2>Jane</h2>
                            <p class="title">Tabby</p>
                            <p>Some text that describes me Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>                        
                            <p><button class="button">Contact</button></p>
                        </div>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                        <img src="https://www.thesprucepets.com/thmb/IZkS14DcPaaISDXgsDvCwqdFtn8=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/TwoTabbyCats4592x3448-5795194e3df78c1734d4a8f0.jpg" alt="Mike">
                        <div class="container">
                            <h2>Mike &amp; Ross</h2>
                            <p class="title">Tabby &amp; Ginger</p>
                            <p>Some text that describes me Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>                        
                            <p><button class="button">Contact</button></p>
                        </div>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                        <img src="https://static1.squarespace.com/static/57242faa7da24f738c3b9c32/t/5b887cf040ec9ac78c3dd962/1535671548710/_DSC0065.jpg?format=500w" alt="John">
                        <div class="container">
                            <h2>John</h2>
                            <p class="title">Tabby</p>
                            <p>Some text that describes me Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>                        
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>

            <div class="row">
                <div class="column">
                    <div class="card">
                        <img src="https://images.squarespace-cdn.com/content/v1/5b42b03196d4557961ec9ad3/1556671216597-CCGT5MLEP5M5TIV5DHNS/ke17ZwdGBToddI8pDm48kFEm4ojFG55lQHC5TU2r3Ut7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QPOohDIaIeljMHgDF5CVlOqpeNLcJ80NK65_fV7S1UVMxaXaK2xLsxwdqx2FK9FalBol25ySqXw6ICSRuFIcK1rSt1bkQUEt50h35cOOikg/Kat+529783.JPG" alt="Batman">
                        <div class="container">
                            <h2>Batman</h2>
                            <p class="title">Toxido</p>
                            <p>Some text that describes me Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>                        
                            <p><button class="button">Contact</button></p>
                        </div>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                        <img src="https://www.safehavenforcats.org/images/pet_images/9763-0.jpg" alt="Orange">
                        <div class="container">
                            <h2>Orange</h2>
                            <p class="title">Persian</p>
                            <p>Some text that describes me Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>                        
                            <p><button class="button">Contact</button></p>
                        </div>
                        </div>
                    </div>

                    <div class="column">
                        <div class="card">
                        <img src="https://pet-net.net/wp-content/uploads/Bella-Siamese-Cat-For-Adoption-in-Wylie-Texas-5.jpg" alt="Junior">
                        <div class="container">
                            <h2>Junior</h2>
                            <p class="title">Siamese</p>
                            <p>Some text that describes me Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>                        
                            <p><button class="button">Contact</button></p>
                        </div>
                    </div>
                </div>
            </div>        
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
    }
  }
}
</script>

<style scoped>
.find-a-pet-content {
    background: #E8CE9A;
    padding: 2px;   
}
.find-a-pet-content p {
    padding: 0% 10%;
}
.img-responsive {
    width: 80%;
    height: auto;
    margin: auto;
    display: block;
    padding: 10px; 
    background-color: #000;
}
.search-btn {
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
.pet-results {
    padding: 5% 50px;
}

/* Three columns side by side */
.column {
  float: left;
  width: 32%;
  margin-bottom: 16px;
  padding: 0 8px;
}

/* Display the columns below each other instead of side by side on small screens */
@media screen and (max-width: 650px) {
  .column {
    width: 100%;
    display: block;
  }
}

/* Add some shadows to create a card effect */
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  background: #E8CE9A;
}

.card img {
  width: 100%;
  height: 300px;
  vertical-align: middle;
}

/* Some left and right padding inside the container */
.container {
  padding: 0 16px;
}

/* Clear floats */
.container::after, .row::after {
  content: "";
  clear: both;
  display: table;
}

.title {
  color: grey;
}

.button {
  border: none;
  outline: 0;
  display: inline-block;
  padding: 8px;
  color: white;
  background-color: #000;
  text-align: center;
  cursor: pointer;
  width: 100%;
}

.button:hover {
  background-color: #555;
}
</style>