import { Meteor } from 'meteor/meteor';
import { DDP } from 'meteor/ddp-client';

var remote = DDP.connect('http://localhost:3000/');

Meteor.methods({
    storeMouseClick: function(jsonObject) {
        //console.log('storeMouseClick save');
        remote.call('storeMouseClick', jsonObject);
    },
    storeMouseCoordinate: function(jsonObject) {
        //console.log('storeMouseCoordinate save');
        remote.call('storeMouseCoordinate', jsonObject);
    },
    storeKeystroke: function(jsonObject) {
        //console.log('storeKeystroke save');
        remote.call('storeKeystroke', jsonObject);
    },

    storeBookmark: function(jsonObject) {
        //console.log('storeBookmark save');
        remote.call('storeBookmark', jsonObject);
    },
    storeSnippet: function(jsonObject) {
        //console.log('storeSnippet save');
        remote.call('storeSnippet', jsonObject);
    },
    
    storeUrl: function(jsonObject) {
        //console.log('storeUrl save');
        remote.call('storeVisitedLink', jsonObject);
    },
    storeQuery: function(jsonObject) {
        //console.log('storeQuery save');
        remote.call('storeQuery', jsonObject);
    },

    storeUrlFull: function(jsonObject) {
        //console.log('storeUrlFull save');
        remote.call('storeUrlExtension', jsonObject);
    },
    storeAction: function(jsonObject) {
        //console.log('storeAction save');
        remote.call('storeTabExtension', jsonObject);
    }
});