$(function(){
  function buildHTML(message){
    if ( message.image ){
    var html =
    `
    <div class="chatmain__center__box" data-message-id=${message.id}>
    <div class="chatmain__center__box__namebox__name">
                        ${message.user_name}
    </div>
      <div class="chatmain__center__box__namebox__days">
                        ${message.date}
      </div>
        <div class="chatmain__center__box__textbox">
          <p class="chatmain__center__box__textbox">
                        ${message.body}
          </p>
        </div>
        <img src=${message.image} >
        </div>`
    return html;
  } else{
    var html =

    `<div class="chatmain__center__box" data-message-id=${message.id}>
    <div class="chatmain__center__box__namebox__name">
                        ${message.user_name}
    </div>
      <div class="chatmain__center__box__namebox__days">
                        ${message.date}
      </div>
        <div class="chatmain__center__box__textbox">
          <p class="chatmain__center__box__textbox">
                        ${message.body}
          </p>
        </div>
        </div>`
        return html;
    };
  }




  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action')
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      var html = buildHTML(data);
      $('.chatmain__center').append(html);
      $('.chatmain__center').animate({scrollTop: $('.chatmain__center')[0].scrollHeight}, 'fast');   
      $('#message_body').val('');
    })
    .fail(function(){
      alert('error');
    });
    return false;
  });
});


