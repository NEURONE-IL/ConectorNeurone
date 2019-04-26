//url web page visit
Router.route('/webpage',{where: 'server'})
    .post(function(){
        var response;
        if(this.request.body.userName === undefined || this.request.body.url === undefined || this.request.body.title === undefined ||
            this.request.body.timeZero === undefined || this.request.body.timeFinal === undefined ||
             this.request.body.timeInThePage === undefined || this.request.body.idTab === undefined) {
            response = {
                "error" : true,
                "message" : "invalid data to save web page"
            };
        } else {

            localTime = new Date(this.request.body.timeZero).getTime();
            finalTime = new Date(this.request.body.timeFinal).getTime();
            totalTime = new Date(this.request.body.timeInThePage).getTime();

            var url = {
                userId: 'Extension',
                username : this.request.body.userName,
                state: 'Ext',
                title: this.request.body.title,
                url: this.request.body.url,
                localTimestamp: localTime
                //finalTimestamp: finalTime,
                //totalTimestamp: totalTime,
                //idTab: this.request.body.idTab
            };

            Meteor.apply('storeUrl', [ url ]);

            var urlFull = {
                userId: 'Extension',
                username : this.request.body.userName,
                state: 'Ext',
                title: this.request.body.title,
                url: this.request.body.url,
                localTimestamp: localTime,
                finalTimestamp: finalTime,
                totalTimestamp: totalTime,
                idTab: this.request.body.idTab
            };
            
            Meteor.apply('storeUrlFull', [ urlFull ]);

            response = {
                "error" : false,
                "message" : "New page visit added."
            }
        }
        this.response.setHeader('Content-Type','application/json');
        this.response.end(JSON.stringify(response));
});