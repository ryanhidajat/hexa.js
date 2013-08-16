var hexa = $('<div class="hexshape"><div class="hexshape">');
$('.hexa img').wrap($(hexa));
$('.hexa img').addClass('hexrot');
$('.hexa li').addClass(function(x) 
	{ 	
	if (x%2 == 0 && (x >5)) 
		return 'oddline2';
	if (x%2 == 1 && (x >5)) 
		return 'evenline2';
	});
