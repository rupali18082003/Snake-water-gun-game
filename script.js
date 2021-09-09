function play() {
			var rand  = Math.floor((Math.random() * 3)+1);
			var usr = document.getElementById('users_choice').value;
			let user = usr.toLowerCase();
			console.log("user "+user);
			
			let computer;
			if(rand <= 1){
				computer="snake";
			}
			if(rand >= 2 && rand <= 3){
				computer = 'water';
    		}

			else{
				computer = 'gun';
			}
			console.log("computer "+computer);

			if(user != "water" && user != "snake" && user !="gun"){
				document.getElementById('res').innerHTML = "INVALID INPUT";
			}
			else{
				document.getElementById('chs').innerHTML = "computer's choice : "+computer+"<br>"+"your choice : "+user;
				
				let res = swg(user,computer);
				result = Number(res);

				console.log("result "+result)
				if(result == 0){
					document.getElementById('res').innerHTML = "DRAW!";
				}
				
				else if(result == 1){
					document.getElementById('res').innerHTML = "YOU WON!";
				}
				
				else{
					document.getElementById('res').innerHTML = "YOU LOST!";
				}
			}
		}

		/*game logic starts....*/
		function swg(user, computer){
			let user_scr=0, computer_scr=0;
				if(user == computer){
					return 0;
				}
				if(user == 'snake' && computer == 'water'){
					//scr1++;
					return 1;
				}
				
				else if(user == 'water' && computer == 'snake'){
					//scr2++;
					return -1;
				}
				
				if(user == 'gun' && computer == 'snake'){
					//scr1++;
					return 1;
				}
				
				else  if(user == 'snake' && computer == 'gun'){
					//scr2++;
					return -1;
				}
				
				if(user == 'water' && computer == 'gun'){
					//scr1++;
					return 1;
				}
				else if(user == 'gun' && computer == 'water'){
					//scr2++;
					return -1;
				}
		}