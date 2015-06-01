$(document).ready(function(){
		$("#buscacategoria").click(function(){
		
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
			
			if ($("#campo1").val().trim() == ""){
			window.alert("No Ha Introducido Nada en el Campo de Texto");
    }else{
    	$.getJSON("http://api.remix.bestbuy.com/v1/products(name="+$("#campo1").val()+")?show=name&pageSize=10&page=5Y&format=json&apiKey=4vcptfuhsw4ezkbqss49ng3c",
    	function(data){
    		$.each(json.name,function(index, data){
    			for (var i = 0; i >= 10; i++) {
    		    div = $("#main").append("<div class='busqueda'><a href='"+data.url+"'><img src='"+data.images[i].url+"'/></a><p>"+data.name+"</p></div>");
    		};		
    		});
    	});	
    		}
		});

		$("#buscartienda").click(function(){
			
			if ($("#campo2").val().trim() == ""){
			window.alert("No Ha Introducido Nada en el Campo de Texto");
    }else{
    	$.getJSON("http://api.remix.bestbuy.com/v1/stores(area("+$("#campo2").val()+"))?format=json&apiKey=td2mtjmpv7gdfevh2c2tkzyq",
    	function(data){
    		$.each(json.name,function(index, data){
    			div = $("#main").append("<div class='busqueda'><p>"+data.city+"</p><p>"+data.name+"</p</div>");	
    		});
    	});	
    		}
		});



});


