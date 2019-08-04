<template>
    <div id="register">
        <div class="register-info">
            <h1>Why Register?</h1>
            <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>                
            </ul>
            
        </div>        
        <form class="register-form">
            <div>
                <h1>Register</h1>                
                
                <input placeholder="Full Name">
                
                <input placeholder="Email Address">
                
                <input placeholder="Username">
                
                <input type="password" placeholder="Password">
                
                <input type="password" placeholder="Confirm Password">
                
                <input placeholder="Address">
            </div>
            <button class="register-btn">REGISTER</button>
        </form>
    </div>
</template>

<style scope>
input {
  border: 1px solid #C8C7C5;
  border-radius: 5px; 
  padding: 10px; 
  width: 80%;
  font-size: 14px;
  margin-bottom: 10px;
}
.register-btn {
    font-size: 18px;
    padding: 10px 5%;    
    background-color: #DFA956;
    border: none;
    color: white;    
    text-align: center;
    text-decoration: none;
    display: inline-block;    
}
#register {
    margin-top: 50px;
    margin-bottom: 65px;
    display: inline-flex;
    width: 80%;
}
.register-info {
    background: #DFA956;
    padding: 2px 5%;
    font-size: 16px;
    text-align: left;
    line-height: 35px;
}
.register-info, .register-form {
    width: 50%;
}
ul {
    font-size: 14px;
}
</style>