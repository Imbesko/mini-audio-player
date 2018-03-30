(function () {
	var currentSong = 0,
		player = $('#aPlayer'),		
		playlist_li = $('#playlist li');
		player[0].src = $('#playlist li a')[0];

	$('#playlist li a').click(function(e){
		e.preventDefault();
		player[0].src = this;
		player[0].play();
		playlist_li.removeClass('current-song');    	
		currentSong = $(this).parent().index();
		console.log(currentSong);
		$(this).parent().addClass('current-song');
	});

	player[0].addEventListener('ended', function(){
		currentSong++;
		if (currentSong == $('#playlist li a').length)
			currentSong = 0;
		playlist_li.removeClass('current-song');
		console.log(currentSong);
		$('#playlist li:eq('+currentSong+')').addClass('current-song');
		player[0].src = $('#playlist li a')[currentSong];
		player[0].play();
	});
})();

