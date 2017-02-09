import React, {Component} from 'react';

import {
         AppRegistry,
         View,
         TextInput,
         StyleSheet,
         TouchableHighlight, 
         Text,
         KeyboardAvoidingView
} from 'react-native';


export default class LoginForm extends Component{
    
    respond ={() =>{
        console.log('Your phone is registered');
    }}
    
    render(){
        return(
        
            <View  style = {login.textContainer}>
            
              <TextInput 
                    placeholder = " Your Email"
                    placeholderTextColor = "#ffffff"
                    returnKeyType = "next" 
                    onSubmitEditing = {() =>this.passwordInput.focus()}
                    keyboardType = "email-address"
                    autoCorrect= {false}
                    autoCapitalization ="none"
                    style = {login.textbox}
                
              />
              <TextInput 
                    placeholder = " Your Password"
                    placeholderTextColor ="#ffffff"
                    secureTextEntry
                     returnKeyType = "go"
                    style = {login.textbox}
                    autoCorrect= {false}
                    autoCapitalization ="none"
                    ref = {(input) => this.passwordInput = input}
 
              />
             <TouchableHighlight style = {login.buttonContainer} onPress ={this.respond}>
                <Text style = {login.button}>
                 REGISTER
                </Text>
             </TouchableHighlight>
            </View>
            
        
        );
    }
}


const login = StyleSheet.create({
   
    
    textContainer:{
        
        padding:20,
    },
    
    textbox:{
        marginBottom:25,
        height:60,
        borderRadius:5,
        backgroundColor:'rgba(255,255,255,0.4)',    
        paddingHorizontal:20,
        color:'#fff',
        
    },
    
    button:{
            textAlign:'center',
            paddingVertical:10,
            fontWeight:'700',
            color:"#fff",
    },
    
    buttonContainer:{
         backgroundColor:'#2980b9',
         padding:20,
         marginTop:10,
         borderRadius:5,

    },
      
    
});

AppRegistry.registerComponent('LoginForm', () => LoginForm);