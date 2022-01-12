
users ={
    1000:{acno:1000,uname:"Neer",password:"1000",balance:5000,transaction:[]},
    1001:{acno:1001,uname:"Laisha",password:"1001",balance:5000,transaction:[]},
    1002:{acno:1002,uname:"Vyom",password:"1002",balance:5000,transaction:[]}
  }

  //register definition

 const  register = (acno,password,uname)=>{
    
    // let db=this.users
    if(acno in users){
      return {
        statusCode:401,
          status:false,
        message:"Account already exist .. please login !!"}
     
    }
    else{
      users[acno]={
        acno,
        password,
        uname,
        balance:0,
        transaction:[]
      }
      
      return{
        statusCode:200,
       status:true,
       message:"account is created"
      }
      
    }
    // console.log();
    
  }

  //login 

   const login= (acno,password)=>{
    
    let database=users

    if(acno in database){

      if(password==database[acno]["password"]){
        // alert("login successfull")
        currentAcno=acno
        currentUserName=database[acno]["uname"]
        
      
       
       return {
        statusCode:200,
        status:true,
        message:"sucessfully loged in ",
        currentAcno,
        currentUserName
    }
        
      }
      else{
        // alert("incorrect password")
        return {
          statusCode:401,
        status:false,
        message:"incorrect password"
    }
      }
    }
    else{
    //    alert("invalid acccount no")
      return {
        statusCode:401,
         status: false,
        message:"invalid acccount no"}
    }
}

//deposit

 const deposit =(acno,password,amt)=>{
  var amount=parseInt(amt)
 
   let db=users
   
   if(acno in db){
     
     if(password==db[acno]["password"]){
       db[acno]["balance"]=db[acno]["balance"]+=amount
       db[acno].transaction.push({
         amount:amount,
         type:"CREDIT"
       })
 
       return {
         statusCode:200,
        status: true,
        message: amount+"credited new balance is :"+ db[acno]["balance"]
       }  
      

     }
     else{
      //  alert("invalid password")
      return{
        statusCode:401,
       status:false,
       message:"invalid password"
      } 
     }
   }
   else{
    
    //  alert("account does not exist")
     return {
      statusCode:401,
       status:false,
       message:"account does not exist"
    }
   }
 
 }
 
 //withdrawal
 
  const withdrawal=(acno,password,amt)=>{
  var amount=parseInt(amt)
  let db=users
 
 if(acno in db){
   
   if(password==db[acno]["password"]){
     if(db[acno]["balance"]>amount){
     db[acno]["balance"]=db[acno]["balance"]-=amount

     
     return {
      statusCode:200,
      status: true,
      message:"debited new balance is"+ db[acno]["balance"]
     }
     
    
     }
     else{
      //  alert("insufficient balance")
      return{
        message:"insufficient balance"
      }

     }
   }
   else{
    //  alert("invalid password")
     return {
      statusCode:401,
      status:false,
      message:"invalid password"
     }
     
   }
 }
 else{
  
  //  alert("account does not exist")
  return {
    statusCode:401,
    status:false,
    message:"account does not exist"
   }
 }

}

//transaction

 const getTransaction = (acno)=>{
    if(acno in users){
      return {
        statusCode:200,
        status:true,
        transaction:users[acno].transaction
      }  
    }
    else{
      return  {
        statusCode:401,
        status:false,
        message:"account doesnot exist"
       } 
      
    }
 }

  //export
  module.exports={
      register,
      login,
      deposit,
      withdrawal,
      getTransaction
  }


 