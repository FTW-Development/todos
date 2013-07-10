$(document).ajaxSuccess(function(event, xhr, settings) {
  $('#tasks li:first-child').before('<li id="task'+xhr.responseJSON.id+'"><input id="complete" type="checkbox" value="completed" name="complete" /><span class="content">'+xhr.responseJSON.content+'</span><select id="user_id"><option value="0">Hunter</option><option value="1">Andy</option><option vlaue="2">Michael</option>'+xhr.responseJSON.user_id+'</select><a rel="nofollow" data-method="delete" data-confirm="Are you sure?" href="/tasks/'+xhr.responseJSON.id+'">Destroy</a></td></tr>');
  $('#content-field').val();
  $('#user_id').val();
  $('#edit-content').hide();
});

$(document).on( "sortupdate", function( event, ui ) {
  $.ajax({
    url: '/tasks/'+ui.item.context.id.substr(4)+'.json',
    type: 'PUT',
    data: {"task": { "position": ui.item.context.childElementCount }},
    success: function(result) {
    }
});

$'(#edit-content').on("click", function() {
  $('#edit-content').show();
  $('.content').hide(); 
});
$(document).on('click', ':not(#edit-content)', function(e) { 
  if(e.target.id !== 'edit-content') {
    $('#edit-content').hide();
    $('.content').show();
  }    
});
} );

$(function() {
  $( "#tasks" ).sortable(
    {
      cursor: 'crosshair',
    });
  $( "#tasks" ).disableSelection();
});
$(document).ready(function() {
  $('.new_task').on('mouseleave', function(
      $(this).closest('.new_task').val(function(index,currentvalue));
  );
});

