//Esto copiar en la vista	
	<div id="loading-screen" style="display:none">
		<img src="img/spinning-circles.svg">
	</div>
//Fin copiar en la vista  
  
  
  var screen = $('#loading-screen');
    configureLoadingScreen(screen);

    function configureLoadingScreen(screen) {
        $(document)
            .ajaxStart(function () {
                screen.fadeIn();
            })
            .ajaxStop(function () {
                screen.fadeOut();
            });
    }