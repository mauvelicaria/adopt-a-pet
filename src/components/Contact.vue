<template>
    <div id="contact">
        <div class="contact-info">
            <h1>Why Contact Us?</h1>
            <ul>
                <li>{{email}}</li>
                <li>{{contactNumber}}</li>     
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>                
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>                
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>                         
            </ul>
            
        </div>        
        <form class="contact-form">
            <div>
                <h1>Contact</h1>                
                
                <input placeholder="Full Name">
                
                <input placeholder="Email Address">

                <textarea placeholder="Message"></textarea>
            </div>
            <button class="contact-btn">SUBMIT</button>
        </form>
    </div>
</template>

<script>
export default {
  name: 'Contact',
  data(){
    return {
      email: 'adopt@mail.com',
      contactNumber: '0123456789'
    }
  }
}
</script>

<style scope>
input, textarea {
  border: 1px solid #C8C7C5;
  border-radius: 5px; 
  padding: 10px; 
  width: 80%;
  font-size: 14px;
  margin-bottom: 10px;
}
.contact-btn {
    font-size: 18px;
    padding: 10px 5%;    
    background-color: #DFA956;
    border: none;
    color: white;    
    text-align: center;
    text-decoration: none;
    display: inline-block;    
}
#contact {
    margin-top: 50px;
    margin-bottom: 65px;
    display: inline-flex;
    width: 80%;
}
.contact-info {
    background: #DFA956;
    padding: 2px 5%;
    font-size: 16px;
    text-align: left;
    line-height: 35px;
}
.contact-info, .contact-form {
    width: 50%;
}
ul {
    font-size: 14px;
}
</style>
