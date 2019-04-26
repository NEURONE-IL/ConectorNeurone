Router.route('/key',{where: 'server'})
    .post(function(){
        var response;

        if(this.request.body.userName === undefined || this.request.body.url === undefined || this.request.body.keyCode === undefined ||
             this.request.body.time === undefined ) {
            response = {
                "error" : true,
                "message" : "invalid data to save key pressed"
            };
        } else {

            //console.log('key post');
            localTime = new Date(this.request.body.time).getTime();

            var keyOutput = {
                userId: 'Extension',
                username: this.request.body.userName,
                type: this.request.body.type,
                source: 'Extension',
                keyCode: this.request.body.keyCode,
                which: this.request.body.wich,
                charCode: this.request.body.charCode,
                chr: this.request.body.chr,
                localTimestamp: localTime,
                url:  this.request.body.url
            };

            Meteor.apply('storeKeystroke', [ keyOutput ]);

            response = {
                "error" : false,
                "message" : "Key added."
            }
        }
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
});