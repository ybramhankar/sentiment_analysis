$('#analyse_btn').click(function(){

    var review = $('#review_text').val().trim();
    review_analysis(review)
    $("#loader").fadeIn();



})

$("#review_text").click(function(){
    var review = $('#review_text').val().trim();
    if(review == '')
    {
        $('#analyse_btn').attr('disabled', true);
        $('.result').removeClass('block').addClass('none')
        $('.result').css('display,none')
    }
    else
    {
        $('#analyse_btn').attr('disabled', false);
    }
})

$("#review_text").keyup(function(){
    var review = $('#review_text').val().trim();
    if(review == '')
    {
        $('#analyse_btn').attr('disabled', true);
    }
    else
    {
        $('#analyse_btn').attr('disabled', false);
    }

 })



function active_btn(){
    var review = $('#review_text').val().trim();
    if(review == '')
    {
        $('#review_btn').attr('disabled', true);
    }
    else
    {
        $('#review_btn').attr('disabled', false);
    }
}


function review_analysis(review){
  $.ajax({
    type:'POST',
    url:"/review_analysis",
    data:{'review':review},
    success: function(recs){
//     console.log(recs);


        $('.result').removeClass('none').addClass('block')
        $("#loader").fadeIn();

        $("#loader").delay(50000).fadeOut();
        $('#review_result').html(recs)


    },
    error: function(){
      alert("error recs");
      $("#loader").delay(5000).fadeOut();
    },
  });
}