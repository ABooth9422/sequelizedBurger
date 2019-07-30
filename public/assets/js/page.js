

$(document).ready(function(){
    $('#submitBurger').on('click',function(){
        var name = $("#burgerName").val().trim()
        var newBurger={
            burgerName:name,
            devoured:false
        }
    
    $.post('/addBurger',newBurger,function(data){
        
        location.reload()
    })


})
    $(".devourBtn").on('click',function(){ 
        var update ={
             id:$(this).attr('data-type'),
                devoured:true}
            $.ajax("/update",{
                type:'PUT',
                data:update
            }).then(function(data){
                location.reload()
            })
            
    })

    $(".deleteBtn").on('click',function(){
       
        var update={
            id:$(this).attr('data-type')
        }
        $.ajax('/delete',{
            type: 'DELETE',
            data:update
        }).then(function(data){
            
            location.reload()
        })
    })
    
})