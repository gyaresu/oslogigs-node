$(function() {
    $('form').submit(function() {
        if (confirm("Are you sure you got all the info right?")) {
        json_data = $('form').text(JSON.stringify($('form').serializeObject())); 

        data = '{"Pub": ' + $.text(json_data) + "}"; 
        //data = '{"Pub": {"pub_name":"Ptang Wooble","pub_address":"Jernbanetorget 1","pub_phone":"+47 22 17 50 30","beer_price":"72","marker_icon":"static/images/grey72.png","pub_bounce":"false"}}';
        //alert(data.text());
        $.ajax({
            url: "/rest/Pub",
            type: "POST",
            data: data,
            success: function() {
                alert("Venue added!");
                return false;
            },
            contentType: 'application/json'
        });
        }
    });
});

$.fn.serializeObject = function()
{
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
        if (o[this.name] !== undefined) {
            if (!o[this.name].push) {
                o[this.name] = [o[this.name]];
            }
            o[this.name].push(this.value || '');
        } else {
            o[this.name] = this.value || '';
        }
    });
    return o;
};

