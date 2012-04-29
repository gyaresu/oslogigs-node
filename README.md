This effort has come from a desire to learn about Node.js so I spent a weekend going through the tutorial at [Node Beginner](http://nodebeginner.org) (which I recommend) and I ended up re-writing the server side of [Oslo Gigs](http://oslogigs.com). 



Oslo Gigs was my 'learn JavaScript/Python' app. It's essentially a [Google Maps](https://developers.google.com/maps/documentation/javascript/reference) with numbered markers that designate the price of a pint of beer at different venues.

I originally wrote it to work on Google Appengine with their data store. Then I moved to Appengine based REST API. Then I thought a Node.js implementation might be fun to learn and that's what we've got here. It's a [Heroku](http://heroku.com) hosted node.js app using [ExpressJS](http://expressjs.com/) with [Jade](https://github.com/visionmedia/jade) templating engine. All of this JavaScript wouldn't be the same without some data to process and that's handled by the new but awesome [Parse REST API](http://parse.com). 

Also check out this very useful page of [Node related links](http://filer.progstr.com/1/post/2012/04/my-nodejs-linksheet.html).

All of the pretty front end is of course from [jQuery Mobile](http://jquerymobile.com/).

