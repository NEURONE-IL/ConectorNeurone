//Querys of user 
Router.route('/query',{where: 'server'})
    .post(function(){
        var response;
        if(this.request.body.userName === undefined || this.request.body.query === undefined ||
            this.request.body.time === undefined ) {
            response = {
                "error" : true,
                "message" : "invalid data to query"
            };
        } else {

            //console.log("query post");

            localTime = new Date(this.request.body.time).getTime();

            var query = {
                userId: 'Extension',
                username : this.request.body.userName,
                query: this.request.body.query,
                title: this.request.body.title,
                url: this.request.body.url,
                localTimestamp: localTime,
            };

            Meteor.apply('storeQuery', [ query ]);

            response = {
                "error" : false,
                "message" : "New query added."
            }
        }
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
});