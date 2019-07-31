

$(document).ready(function(){
    $('#submitBurger').on('click',function(){
        var name = $("#burgerName").val().trim()

        var newBurger={
            burgerName:name,
            devoured:false,
           
        }
        
    $.post('/addBurger',newBurger,function(data){
        
        location.reload()
    })


})
    $(".devourBtn").on('click',function(){ 
        var ID=$(this).attr('data-type')
        var customer=$(`#custName${ID}`).val().trim()
       
       console.log(this.customer+"line 23")
        if(customer===""){
            alert("customer name required")
            return
        }else{
        var update ={
             id:$(this).attr('data-type'),
                devoured:true
                }
        var customerName={
            customerName:customer
        }
            $.ajax("/update",{
                type:'PUT',
                data:{update,customerName}
            }).then(function(data){
                location.reload()
            })
        }
            
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