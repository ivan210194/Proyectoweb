<<<<<<< HEAD
$(document).ready(function(){
		$("#buscacategoria").click(function(){
		$(".buscados").remove();
		if ($("#campo").val().trim()=="") {
			window.alert("Introduce Un valor en el Campo de Texto");
		}else{
		$.getJSON("http://api.remix.bestbuy.com/v1/products(type="+$("#campo").val()+")?format=json&apiKey=4vcptfuhsw4ezkbqss49ng3c",
		function(data){
			//console.log(this.response);
			$.each(json.name.type, function(index, data){
				var div2 = $("#main").append("<div class='buscados'><p>"+data.name+"</p></a></div>");
			});
	});
	}
});

		$("#buscarproducto").click(function(){
			$(".busqueda").remove();
			if ($("#campo1").val().trim() == ""){
			window.alert("No Ha Introducido Nada en el Campo de Texto");
    }else{
    	$.getJSON("http://api.remix.bestbuy.com/v1/products(name="+$("#campo1").val()+")?show=name&pageSize=10&page=5Y&format=json&apiKey=4vcptfuhsw4ezkbqss49ng3c",
    	function(data){
    		$.each(json.name,function(index, data){
    			for (var i = 0; i >= 10; i++) {
    		    div = $("#main").append("<div class='busqueda'><a href='"+data.url+"'><img src='"+data.images[i].url+"'/></a><p>"+data.name+"</p</div");
    		};		
    		});
    	});	
    		}
		});


});
 
=======
jd
>>>>>>> 732f6327b64c532cc7e88f92b537d3f2a45583cd
