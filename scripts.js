let menuBar = document.getElementById("navbar"),
hamburguer = document.getElementById("hamburguer")

function showMenu(){
    if(menuBar.style.left == "0px"){
        
       menuBar.style.left = "-100%"
       
       
       
       

    }else{
        menuBar.style.left = "0px"
        
        
    }
}

$('.menu .list .btn').click(function(){
    $(this).addClass('active').siblings().removeClass('active');
    let src =$(this).attr('data-src');
    $('#menu-img').attr('src',src)
})

