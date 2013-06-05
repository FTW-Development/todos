$(document).ajaxSuccess(function(event, xhr, settings) {
  $('#tasks-table tr:first-child').after('<tr><td id="content">'+xhr.responseJSON.content+'</td><td></td><td><a rel="nofollow" data-method="delete" data-confirm="Are you sure?" href="/tasks/'+xhr.responseJSON.id+'">Destroy</a></td></tr>');
  $('#content-field').val('');
});
$(function() {
  $( "#tasks" ).sortable();
  //$( "#tasks" ).disableSelection();
});
