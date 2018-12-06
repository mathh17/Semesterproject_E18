 $(document).ready(function () {
                // Sending data from the client via AJAX
                var arr=[];
                var quest = 1;
                var a1 = 2;
                var a2 = 3;
                var a3 = 4;
                var rigtigSvar = 5;
                var facit = 6;
                $.ajax({
                	type: "GET",
                    url: "http://localhost:7000/read",
                    success: function (data) {
                        //console.log(data);
                        // Possible use of the data
                        arr = data.substr(8).split('|'); // cut first 8 char, then convert to array of strings, using '|' as separator
                         for (var i=0;i<arr.length;i++){
                        	console.log( i , arr[i]);
                             
                        }
                        console.log(arr[2]);
                        loadQuestion();
                    },
                    error: function (data) {
                        console.log("error!");
                    },
                    
                });
                
                function loadQuestion (){
                
                    
                        $('#question').text(arr[quest]);
                        $('#svar1').text(arr[a1]);
                        $('#svar2').text(arr[a2]);
                        $('#svar3').text(arr[a3]);
                        $('#facit').text(arr[rigtigSvar]);
                    
                }
                           
                function nextQuestion (){
                    quest = quest + 7;
                    a1 = a1 + 7;
                    a2 = a2 + 7;
                    a3 = a3 + 7;
                    rigtigSvar = rigtigSvar + 7;
                    facit = facit + 7;
                    loadQuestion();
                }
                
                function checkForAnswer (){
                    
                }
     
                $("#buttons button ").click(function(){
                    var buttons = $("#buttons button");
                    console.log(buttons);
                        for(var i = 0; i < 4; i++){
                            if(i == arr[facit] - 1){
                                $(buttons[i]).addClass("rigtigSvar");
                        }
                            else{
                                 $(buttons[i]).addClass("forkertSvar");
                            }
                    }
                });
                $('#svarTjekker').click(function(){
                    $("#buttons button").removeClass("rigtigSvar forkertSvar")
                    
                   nextQuestion(); 
                });
                
            });