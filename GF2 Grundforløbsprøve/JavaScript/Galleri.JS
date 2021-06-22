let thumbnail = document.querySelectorAll('.thumbnail');

thumbnail.forEach(element => 
    element.addEventListener('click', function(event){
        if(event.target.className == 'thumbnail'){
        //console.log(event.target.attributes.src.nodeValue)//
        let imageSrc = event.target.attributes.src.nodeValue 
        let largeImage = document.querySelector('#large-image');
        largeImage.setAttribute('src', imageSrc)
        }
}));