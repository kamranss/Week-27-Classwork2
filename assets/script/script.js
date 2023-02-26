function myFunction() {
    let password = document.getElementById("myInput")
      if (password.type === "password") {
        password.type = "text";
      } else {
        password.type = "password";
      }
    }

    let button = document.getElementById("btn");
        button.addEventListener("click", function(event){
            event.preventDefault();
            let password = document.getElementById("myInput")
            let email = document.getElementById("exampleInputEmail1");
            
            if (email.value == "") {
               
              
                
                email.nextElementSibling.style.display = "block"
                
            }
        
        
            if (password.value == "") {
                let span = document.createElement("span")
                span.innerText = "Bos Qoyma";
            }
      });





   

   