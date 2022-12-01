$(document).ready(()=>{
    let urls = 
    ["./Images/SunsetStockImage.jpeg", "./Images/StarryNightStockImage.jpeg", "./Images/NightSkyStockImage.jpeg", 
    "./Images/SparklesStockImage.jpg", "./Images/CherryBlossomStockImage.jpeg", "./Images/ForestStockImage.jpg", 
    "./Images/TreesStockImage.jpg"]

    for(let i = 0; i < parseInt(urls.length / 3); i++){
        //Each Row
        $('#gallery').append("<div class='row' id='galleryRow" + i +"'></div>")
        let id = '#galleryRow' + i
        for(let j = 0; j < 3; j++){
            $(id).append("<div class='col-4 invImage'><img src='" + urls[(i * 3) + j]  +"' class='invImage' id = 'img" + ((i * 3) + j) + "'></div>")
        }
        $('gallery').append("</div>")
    }
    if(urls.length % 3 > 0){
        $('#gallery').append("<div class='row' id='galleryRow" + parseInt(urls.length / 3) +"'></div>")
        let whiteSpace = 12
        id = '#galleryRow' + parseInt(urls.length / 3)
        for(let i = 0; i < (urls.length % 3); i++){
            $(id).append("<div class='col-4 invImage'><img src='" + urls[(3 * (parseInt(urls.length / 3))) + i]  +"' class='invImage' id='img" + ( (3 * (parseInt(urls.length / 3))) + i ) + "'></div>")
            whiteSpace -= 4;
        }
        $(id).append("<div class='col-" + whiteSpace +" invImage'></div>")
    }
})