$(function(){
  function buildHTML(message){
    image = ( message.image )? ( message.image ) : ""; 
      var html = 
      `
      <div class="chatmain__center__box" data-message-id=${message.id}>
      <div class="chatmain__center__box__namebox">
      <div class="chatmain__center__box__namebox__name"> ${message.user_name}</div>
      <div class="chatmain__center__box__namebox__days"> ${message.created_at}</div>
      </div>
      <div class="chatmain__center__box__textbox>
      <p class="chatmain__center__box__textbox">${message.body} </p>
      <img src="${image}" > 
      </div>
      </div>`
      return html;
    
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

  var reloadMessages = function(){
    if (window.location.href.match(/\/groups\/\d+\/messages/)){
      last_message_id = $('.chatmain__center__box:last').data("message-id");
      $.ajax({
        url: 'api/messages#index {:format=>"json"}', 
        type: 'get',
        dataType: 'json',
        data: {id: last_message_id} 
      })
      .done(function(messages) { 
        var insertHTML = '';
        messages.forEach(function(message){ 
          insertHTML = buildHTML(message);  
        $('.chatmain__center').append(insertHTML); 
        $('.chatmain__center').animate({scrollTop: $('.chatmain__center')[0].scrollHeight}, 'fast');   
        });
      })
      .fail(function(messages) {
        alert('自動更新に失敗しました');
      });
    };
  
  };
  setInterval(reloadMessages, 5000);
})