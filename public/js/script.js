// Frontend Scripting for Burger Joint

let BJ = {
    init: function(){
        $('#submitBurger').on('click', function(event){
            event.preventDefault();
            BJ.addBurger();
        });
    },
    addBurger: function(){
        let burger_name = $('#burger-name').val() || false;
        if(burger_name){
            $.ajax({
                url: "/burger",
                data: {"name": burger_name},
                method: 'POST'
              }).done(function() {
                $( this ).addClass( "done" );
              });   
        }
    },
    updateBurger: function(){

    },
    printMssg: function(mssg){
        $('.mssgOutput').text(mssg).addClass('active');
    }
}

BJ.init();
