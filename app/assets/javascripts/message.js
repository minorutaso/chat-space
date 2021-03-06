$(function(){ 
    function buildHTML(message){
     if ( message.image ) {
       var html =
        `<div class="message" data-message-id=${message.id}>
           <div class="upper-message">
             <div class="upper-message__user-name">
               ${message.user_name}
             </div>
             <div class="upper-message__date">
               ${message.created_at}
             </div>
           </div>
           <div class="lower-message">
             <p class="lower-message__content">
               ${message.content}
             </p>
           </div>
           <img src=${message.image} >
         </div>`
       return html;
     } else {
       var html =
        `<div class="message" data-message-id=${message.id}>
           <div class="upper-message">
             <div class="upper-message__user-name">
               ${message.user_name}
             </div>
             <div class="upper-message__date">
               ${message.created_at}
             </div>
           </div>
           <div class="lower-message">
             <p class="lower-message__content">
               ${message.content}
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
      $('.messagebox').append(html);      
      $('form')[0].reset();
      $('.messagebox').animate({ scrollTop: $('.messagebox')[0].scrollHeight});
    })
    .fail(function() {
      alert("文字を入力して下さい");
    })
    .always(function(){
        $('.foom__box__send--btn').removeAttr('disabled');
    })
    })
    var reloadMessages = function() {
        last_message_id = $('.message:last').data("message-id");
        $.ajax({
            url: "api/messages",
            type: 'get',
            dataType: 'json',
            data: {id: last_message_id}
        })
        .done(function(messages) {
            if (messages.length !== 0) {
            var insertHTML = '';
            $.each(messages, function(i, message) {
            insertHTML += buildHTML(message)
            });
        $('.messagebox').append(insertHTML);
        $('.messagebox').animate({ scrollTop: $('.messagebox')[0].scrollHeight});
        }   
        })
    };
    if (document.location.href.match(/\/groups\/\d+\/messages/)) {
        setInterval(reloadMessages, 7000);
      }
});