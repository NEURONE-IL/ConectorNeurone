
Router.route('/mouseclick',{where: 'server'})
    .post(function(){
        var response;
        if(this.request.body.userName === undefined || this.request.body.url === undefined || this.request.body.x_win === undefined ||
            this.request.body.y_win === undefined || this.request.body.time === undefined ) {
            response = {
                "error" : true,
                "message" : "invalid data to mouse clicks"
            };
        } else {

            localTime = new Date(this.request.body.time).getTime();

            var clickOutput = {
                userId: 'Extension',
                username: this.request.body.userName,
                type: 'MouseClick',
                source: 'Extension',
                url: this.request.body.url,
                x_win: this.request.body.x_win,
                y_win: this.request.body.y_win,
                w_win: this.request.body.w_win,
                h_win: this.request.body.h_win,
                x_doc: this.request.body.x_doc,
                y_doc: this.request.body.y_doc,
                w_doc: this.request.body.w_doc,
                h_doc: this.request.body.h_doc,
                localTimestamp: localTime
            };

            Meteor.apply('storeMouseClick', [ clickOutput ]);

            response = {
                "error" : false,
                "message" : "New mouse coordinates added."
            }
        }
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
});