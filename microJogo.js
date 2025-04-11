let numero = Math.floor(Math.random()*100)+1;
		let Contador = 0;
		let IntentosMax = 10;
		
		function ComparaNum (){
			Contador++;
			
			let mi_num_input = document.getElementById("numero");
			let mi_num = mi_num_input.value;
			
			let resultado = document.getElementById("resultaado");
			
			let buto = document.getElementById("field");
			buto.value = "Adivina ("+Contador+")";
			
			if (Contador > IntentosMax){
				buto.disabled = true;
			}
			if(mi_num > numero){
				resultado.innerHTML = "<em class=\"error\">El numero es mas pequeño que "+mi_num+"</em>";
				mi_num_input.classList.add("input-error"); 
			}
			else if(mi_num < numero){
				resultado.innerHTML = "<em class=\"error\">El numero es mas grande que "+mi_num+"</em>";
				mi_num_input.classList.add("input-error"); 
			}
			else{
				resultado.innerHTML = "<em class=\"win\">OLE OLE era "+mi_num+" Intentos: "+Contador+"</em>";
				
			}	
			mi_num_input.value = "";
			mi_num_input.focus();
		}