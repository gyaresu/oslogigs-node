$("#venues").live("pageshow",function(){$("#listview").hasClass("loaded")||($.parse.init({app_id:"9vbpyfY5iHZqFmq4Fjh2mbUeCAs9vXLjfnIgmUm5",rest_key:"ptYuPEQ4l6mugCYtu2uRHi5X4S0taWNc4Tdd61rC"}),$.parse.get("Pub",{limit:1E3},function(b){var c="",d;$.each(b.results,function(b,e){var a=encodeURI(e.pub_address),h=encodeURI(e.pub_name);d=99===e.beer_price?"?":e.beer_price;c+='<li><a href="http://maps.google.com/?saddr=Current%20Location&daddr='+a+"+("+h+')&dirflg=w&t=h">'+e.pub_name+" "+d+" kr.</a></li>"});
$("#listview").append(c).listview("refresh");$("#listview").addClass("loaded")}))});$(".page-map").live("pageshow",function(){$.parse.init({app_id:"9vbpyfY5iHZqFmq4Fjh2mbUeCAs9vXLjfnIgmUm5",rest_key:"ptYuPEQ4l6mugCYtu2uRHi5X4S0taWNc4Tdd61rC"});$.parse.get("Pub",{limit:1E3},function(b){var c=new google.maps.LatLng(59.92,10.75),d=new google.maps.Map(document.getElementById("map-canvas"),{zoom:12,center:c,backgroundColor:"black",mapTypeControlOptions:{style:google.maps.MapTypeControlStyle.DROPDOWN_MENU},mapTypeId:google.maps.MapTypeId.HYBRID}),g=new google.maps.InfoWindow;$.each(b.results,
function(b,a){var c,i=encodeURI(a.pub_address),j=encodeURI(a.pub_name),f=new google.maps.LatLng(a.lat,a.lng),f=new google.maps.Marker({animation:!0===a.pub_bounce?google.maps.Animation.BOUNCE:null,map:d,icon:"img/"+a.beer_price+".png",shadow:"img/shadow.png",position:f,title:a.pub_name});99===a.beer_price?f.setZIndex(1):f.setZIndex(100);google.maps.event.addListener(f,"click",function(){c=99===a.beer_price?"?":a.beer_price;tweet='<a href="https://twitter.com/share" class="twitter-share-button" data-url="http://oslogigs.com" data-text="'+
a.pub_name+" "+a.beer_price+' kr." data-lang="en" data-via="OsloGigs" data-hashtags="oslo, oslogigs, norway">Tweet</a>';content_string="<h1>"+a.pub_name+'</h1><p><a href="http://maps.google.com/?saddr=Current%20Location&daddr='+i+"+("+j+')&dirflg=w&t=h">Google Maps Directions</a></p><p>Phone:<a href="tel:'+a.pub_phone+'">'+a.pub_phone+"</a></p><p>Halvliterpris: NOK <b>"+c+"</b></p><p>"+tweet+"</p>";g.setContent(content_string);g.open(d,this);twttr.widgets.load()})})})});$(function(){$("form").submit(function(){confirm("Are you sure you got all the info right?")&&(json_data=$("form").text(JSON.stringify($("form").serializeObject())),data='{"Pub": '+$.text(json_data)+"}",$.ajax({url:"/rest/Pub",type:"POST",data:data,success:function(){alert("Venue added!");return!1},contentType:"application/json"}))})});
$.fn.serializeObject=function(){var b={},c=this.serializeArray();$.each(c,function(){void 0!==b[this.name]?(b[this.name].push||(b[this.name]=[b[this.name]]),b[this.name].push(this.value||"")):b[this.name]=this.value||""});return b};