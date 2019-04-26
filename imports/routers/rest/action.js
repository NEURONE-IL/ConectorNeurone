//api actions, only server side
Router.route('/action',{where: 'server'})
    .post(function(){
        var response;
        if(this.request.body.userName === undefined || this.request.body.action === undefined || this.request.body.idtab === undefined ||
             this.request.body.url === undefined || this.request.body.title === undefined ) {
            response = {
                "error" : true,
                "message" : "invalid data to save action of user"
            };
        } else {

            var action = {
                userId: 'Extension',
                Username : this.request.body.userName,
                action :  this.request.body.action,
                idTab : this.request.body.idtab,
                url:  this.request.body.url,
                title:  this.request.body.title,
                localTimestamp:  this.request.body.time
            };

            Meteor.apply('storeAction', [ action ]);


            response = {
                "error" : false,
                "message" : "Action added."
            }
        }
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
});
