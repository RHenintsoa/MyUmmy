


//Animation page1
$(document).ready(function(){
	var section7=('#section7'), voirplus=('#voirplus'),voirmoins=('#voirmoins'), section8=('.section8'),tmg1=('#tmg1'),
	tmg2=('#tmg2'),tmg3=('#tmg3'),next=('#next')
	//Animation section témoignage
		//au chargement du navigateur
		$(section7).show();
		$(section8).hide();
		//Pour ouvrir la partie témoignage
		$(voirplus).on('click', function(){
			$(section7).hide();
			$(section8).toggle('1000');
		
			
			});

		
			//Pour ouvrir le deuxième témoignage
				$('#next').on('click',function(){
					$(section7).hide();
					$(tmg1).hide();
					$(tmg2).fadeIn();
					$(voirmoins).fadeIn();
				});
			$(voirmoins).fadeIn();
			//Pour fermer la partie témoignage et revenir à la structure initiale
			$(voirmoins).on('click', function(){
				$(tmg1).fadeOut();
				$(tmg2).fadeOut();
				$(section7).show();
				$(voirmoins).hide();
			});
	
		

		//Animation contenu header qui se passe au chargement de la page
	
		$('.enjoy').animate({'font-size':'64px','opacity':'0'},500);
		$('.enjoy').animate({'font-size':'64px','opacity':'1'},1000);
		$('.section2').animate({'font-size':'64px','opacity':'0'},100);
		$('.section2').animate({'font-size':'64px','opacity':'1'},1000);
		
	//Animation events
	$('.carousel').carousel({
  interval: 3000, 
	});

		
	
	

});

 


	
