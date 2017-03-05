
    var emailCount = 0;

    function emailCallBack(message) {
        alert(message);
        emailCount += 1;
    }

    function sendEmail() {
        var name = $("#input-name").val();
        var email = $("#input-mail").val();
        var message = $('#input-message').val();

        if(emailCount < 10){
            var requestModel = {
                name: name,
                email: email,
                message: message
            };

            var requestUrl = "http://www.selfboardapi.com/api/mail";
            // $.post(requestUrl, requestModel, emailCallBack);
            var options = {
                method:"OPTIONS",
                url:requestUrl,
                data:requestModel,
                contentType:"json"
            };
            $.ajax(options).success(function(response){
                alert(response);
            });
        }
    }