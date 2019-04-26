//Bookmarks of user 
Router.route('/bookmark',{where: 'server'})
    .post(function(){
        var response;
        if(this.request.body.userName === undefined || this.request.body.url === undefined ||
            this.request.body.time === undefined ) {
            response = {
                "error" : true,
                "message" : "invalid data to bookmark"
            };
        } else {

            //console.log("bookmark post");
            localTime = new Date(this.request.body.time).getTime();

            var bookmark = {
                userId : 'Extension',
                username : this.request.body.userName,
                action : this.request.body.type,
                title : this.request.body.title,
                url: this.request.body.url,
                docId: 'Ext',
                relevant: true,
                userMade: true,
                rating: 0,
                reason: 'Ext',
                localTimestamp: localTime

            };

            Meteor.apply('storeBookmark', [ bookmark ]);

            response = {
                "error" : false,
                "message" : "New bookmark added."
            }
        }
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
});