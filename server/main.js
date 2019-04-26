import { Meteor } from 'meteor/meteor';
import { DDP } from 'meteor/ddp-client';

import '../imports/routers/rest.js';
import './Conector/Conector.js';

if (Meteor.isServer) {
  
  Meteor.startup(() => {

    console.log("Neurone Conector Start");  

    // code to run on server at startup
  });

}
