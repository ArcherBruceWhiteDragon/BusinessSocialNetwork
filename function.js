
[...document.querySelectorAll('.single-column')].map(column => {
	column.style.setProperty('--animation', 'slide');
	column.style.setProperty('height', '200%');
	column.innerHTML = column.innerHTML + column.innerHTML;
});


$(function () {
	$('[data-toggle="tooltip"]').tooltip()
  })
  $(document).ready(function(){

	$(".navbar-brand").click(function(){
	$(".navbar-toggler").addClass("collapsed");
	$(".navbar-toggler").attr("aria-expanded","false");
	$(".navbar-collapse").removeClass("show");
	});
	
	});