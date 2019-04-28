fetch('https://jsonblob.com/api/jsonBlob/6766327f-607d-11e9-95ef-9bcb815ba4a4')
    .then((response) => {
        return response.json();
    })
    .then((rdata) => {
        console.log(rdata);
        //console.log(rdata.product[0]);
        console.log(rdata.product[0]['sub-title']);

        const company = rdata.company;
        const developers = rdata.developers;
        const product = rdata.product;

        var pro = '';
        for (var i = 0; i < product.length; i++) {
            // pro += '<li><h3>'+ product[i].title + '</h3><br><p>'+ product[i]['sub-title'] + '</p></li>';
            pro += '<li><a href="#" style="color:blue;">' + product[i].title + '<br>' + product[i]['sub-title'] + '</a></li>';
        }

        var dev = '';
        for (var i = 0; i < developers.length; i++) {
            // pro += '<li><h3>'+ product[i].title + '</h3><br><p>'+ product[i]['sub-title'] + '</p></li>';
            dev += '<li><a href="#" style="color:blue;">' + developers[i].title + '<br>' + developers[i]['sub-title'] + '</a></li>';
        }

        var com = '';
        for (var i = 0; i < company.length; i++) {
            // pro += '<li><h3>'+ product[i].title + '</h3><br><p>'+ product[i]['sub-title'] + '</p></li>';
            com += '<li><a href="#" style="color:blue;">' + company[i].title + '<br>' + company[i]['sub-title'] + '</a></li>';
        }

        document.getElementById('a').innerHTML = pro;
        document.getElementById('b').innerHTML = dev;
        document.getElementById('c').innerHTML = com;


    });


function myFunction() {
    var x = document.getElementById("menu");
    if (x.className === "menu") {
        x.className += " responsive";
    } else {
        x.className = "menu";
    }
}