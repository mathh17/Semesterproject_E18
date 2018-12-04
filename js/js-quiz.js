 $(document).ready(function () {
                // Sending data from the client via AJAX
                var arr=[];
                $.ajax({
                	type: "GET",
                    url: "http://localhost:7000/read",
                    success: function (data) {
                        console.log(data);
                        

                        // Possible use of the data
                        arr = data.substr(8).split('|'); // cut first 8 char, then convert to array of strings, using '|' as separator
                        for (var i=0;i<arr.length;i++){
                        	console.log( i , arr[i]);
                        }
                        console.log(arr[1]);
                    
                        $('#question').append(arr[1]);
                        $('#svar1').text(arr[2]);
                        $('#svar2').append(arr[3]);
                        $('#svar3').append(arr[4]);
                        $('#facit').append(arr[5]);
                    },
                    error: function (data) {
                        console.log("error!");
                    },
                    
                });
                
                
                
            });