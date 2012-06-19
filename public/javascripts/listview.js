$("#venues").live('pageshow', function() {
if (!$('#listview').hasClass('loaded')) {

$.parse.init({
    app_id: "9vbpyfY5iHZqFmq4Fjh2mbUeCAs9vXLjfnIgmUm5",
    rest_key: "ptYuPEQ4l6mugCYtu2uRHi5X4S0taWNc4Tdd61rC"
});
    $.parse.get("Pub", { limit : 1000}, function(data){
        var output = '';
        var beer;
        $.each(data.results, function(key, pub){
            if (pub.beer_price === 99) {
                beer = "?";
            } else {
                beer = pub.beer_price;
            }
                output += '<li>' + pub.pub_name + ': øl pris ' + beer + ' kr.</li>';
        });
        $('#listview').append(output).listview('refresh');
        $('#listview').addClass('loaded');
    });
    }
});
)
