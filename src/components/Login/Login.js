import React,{Component} from 'react';
import {
        AppRegistry,
        StyleSheet,
        View,
        Text,
        Image,
        TextInput,
        KeyboardAvoidingView} from 'react-native';


import LoginForm from './LoginForm.js';

export default class Login extends Component{
    render(){
        return(


          <KeyboardAvoidingView behavior="padding" style = {login.container}>
            <View style={login.logo}>
                <Image style = {login.logoImage}
                  source = {require('../images/phone.png')}/>
               <Text   style= {login.logoText}> 
                Register Your Iphone Here! </Text>
            </View>
            <View style ={login.formContainer}>
                <LoginForm/>
            </View>    
        </KeyboardAvoidingView>
             
        );        
    }
    
}

 const login = StyleSheet.create({
     
     container:{
         flex:1,
         backgroundColor:'#3498db',
         
     },
     
     logo:{
         justifyContent:'center',
         alignItems:'center',
         flexGrow:1,
         },
     
     logoText:{
         color:'#ffffff',
         fontSize:20,
         opacity:0.4,
         marginTop:20,   
     },
     
     logoImage:{
         width:120,
         height:200,
     },
     
     
 });


AppRegistry.registerComponent('Login', () => Login);