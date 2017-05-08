(function() {
    var successSentMessage = getQueryParameter('message');
    var errorSentMessage = getQueryParameter('error');

    if (successSentMessage !== null) {
        $.alert({
            title: 'Success!',
            content: successSentMessage,
        });
    }
    if (errorSentMessage !== null) {
        $.alert({
            title: 'Error!',
            content: errorSentMessage,
        });
    }

    function getQueryParameter(name) {
        var url = window.location.href;
        name = name.replace(/[\[\]]/g, "\\$&");
        var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
            results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, " "));
    }
})();