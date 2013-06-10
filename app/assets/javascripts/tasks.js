$(document).ajaxSuccess(function(event, xhr, settings) {
  $('#tasks li:first-child').before('<li id="task'+xhr.responseJSON.id+'"><input id="complete" type="checkbox" value="completed" name="complete" /><span class="content">'+xhr.responseJSON.content+'</span><select id="user_id"><option value="">Choose One</option><option value="0">Hunter</option><option value="1">Andy</option><option vlaue="2">Michael</option>'+xhr.responseJSON.user_id+'</select><a rel="nofollow" data-method="delete" data-confirm="Are you sure?" href="/tasks/'+xhr.responseJSON.id+'">Destroy</a></td></tr>');
  $('#content-field').val('');
});

$(document).on( "sortupdate", function( event, ui ) {
  $.ajax({
    url: '/tasks/'+ui.item.context.id.substr(4)+'.json',
    type: 'PUT',
    data: {"task": { "position": ui.item.context.childElementCount }},
    success: function(result) {
    }
});
    
} );

$(function() {
  $( "#tasks" ).sortable(
    {
      cursor: 'crosshair',
    });
  //$( "#tasks" ).disableSelection();
});
