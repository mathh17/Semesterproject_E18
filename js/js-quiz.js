 $(document).ready(function () {
                // Sending data from the client via AJAX
                var arr=[];
                var quest = 1;
                var a1 = 2;
                var a2 = 3;
                var a3 = 4;
                var facit = 5;
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
                        $('#facit').text(arr[facit]);
                    
                }
                           
                function nextQuestion (){
                    quest = quest + 6;
                    a1 = a1 + 6;
                    a2 = a2 + 6;
                    a3 = a3 + 6;
                    facit = facit +6;
                    loadQuestion();
                }
                
                $('#svar1').click(function(){
                   nextQuestion(); 
                });
                
            });