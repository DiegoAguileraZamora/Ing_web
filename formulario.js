
$("#infoUser").click(function(){

    
    $("#infoUser").ready(function(){

        $("#infoUser").validate({
            rules : {
                nombre: {
                    required : true
                },
                correo: {
                    required : true
                },
                contraseña: {
                    required : true
                },
                recontra: {
                    required : true
                }
            },
        })
    })
})