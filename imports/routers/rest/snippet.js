//fragments of text 
Router.route('/snipper',{where: 'server'})
    .post(function(){
        var response;
        if(this.request.body.userName === undefined || this.request.body.text === undefined || this.request.body.url === undefined ||
            this.request.body.time === undefined ) {
            response = {
                "error" : true,
                "message" : "invalid data to save snipper"
            };
        } else {

            //console.log("snippet post");
            
            localTime = new Date(this.request.body.time).getTime();

            var snippet = {
                userId: 'Extension',
                username : this.request.body.userName,
                action : this.request.body.type,
                snippetId: 0,
                snippedText: this.request.body.text,
                title: this.request.body.title,
                url: this.request.body.url,
                docId: 'Ext',
                localTimestamp: localTime
            };

            Meteor.apply('storeSnippet', [ snippet ]);

            response = {
                "error" : false,
                "message" : "New snipper added."
                
            }
        }
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
});
