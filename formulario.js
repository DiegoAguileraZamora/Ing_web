$("#infoUser").validate()



$("#infoUser").click(function(){

    $("#infoUser").validate({

        messages : {
            required : "Campo Obligatorio"
        }
    })

    let nombre = $("#nombre").val()
    let correo = $("#correo").val()
    let contraseña = $("#contraseña").val()
    let recontra = $("#recontra").val()
})