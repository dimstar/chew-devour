// Frontend Scripting for Burger Joint

let BJ = {
    init: function(){
        $('#submitBurger').on('click', function(event){
            event.preventDefault();
            BJ.addBurger();
        });

        $('.devourIt').on('click', function(event){
            event.preventDefault();
            BJ.devourBurger($(this));
        })
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
        }else{
            BJ.printMssg('Please fill in the burger name!', 'error')
        }
    },
    devourBurger: function($thisBuger){
        let burger_id = $thisBuger.attr('data-burger') || false;
        if(burger_id){
            $.ajax({
                url: "/burger/"+burger_id,
                data: {"devoured": 1},
                method: 'PUT'
              }).done(function() {
                $( this ).addClass( "done" );
              });   
        }
    },
    printMssg: function(mssg, mssg_type){
        $('.mssgOutput').text(mssg).addClass('active ' + mssg_type);
        setTimeout(function(){ 
            $('.mssgOutput').removeClass('active');
        }, 3000);
    }
}

BJ.init();
