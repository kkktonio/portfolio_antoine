var portfolio = [
    			{ "filename" : "./portfolio/img/bg-img/10.jpg"},
    			{ "filename" : "./portfolio/img/bg-img/24.jpg"},
    			{ "filename" : "./portfolio/img/bg-img/30.jpg"}
    	];

myDiv = document.getElementById('portfolioDiv');


function showPortfolio (portfolio, myDiv){
  for (var i = 0; i < portfolio.length; i++) {
    myDiv.innerHTML += "<div class='col-12 col-sm-6 col-lg-3 single_gallery_item country mb-30 wow fadeInUp' data-wow-delay='700ms'>"
        + "<div class='single-portfolio-content'>"
        + "<img src='+ portfolio[i].filename'>" + "<div class='hover-content'>"
        + "<a src='portfolio[i].filename' class='portfolio-img'>"
        + "+" + "</a>"
    + "</div>"
    + "</div>"
    + "</div>";
    	}
    };


myDiv.innerHTML = ' ';
showPortfolio(portfolio, myDiv);
