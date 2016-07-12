
var url = 'https://h502000001.education.scholastic.com/HMHCentral/?cb=1468268146349;0.408462481187881#/dataAnalytics?class=orljsmjj7vb6d81le936gli6_1cqnue0&report=103.1'

var fs = require('fs');
var CookieJar = "cookiejar.json";

var page = require('webpage').create();


page.paperSize = {
    width: '8in',
    height: '11.5in',
    border: '0px',
    margin: '0px',
    header: {
    	height: '2cm',
    	contents: phantom.callback(function (pageNum, numPages) {
            return '<div style="text-align: left; font-size: 12px;">This is the header, lovely, no?</div>';
        })
    },
    footer: {
        height: '3cm',
        contents: phantom.callback(function (pageNum, numPages) {
            return '<div style="text-align: right; font-size: 12px;">' + pageNum + ' / ' + numPages + '</div>';
        })
    }
};

if(fs.isFile(CookieJar)) {
    Array.prototype.forEach.call(JSON.parse(fs.read(CookieJar)), function(x){
        phantom.addCookie(x);
        console.log("added " + JSON.stringify(x));
    });
}


page.open(url, function(status) {

	console.log('here');
	console.log('typeof window.setTimeout: ' + (typeof window.setTimeout));
	window.setTimeout(function() {
		console.log('hello!');
	    page.render('tcpage.pdf')
	    phantom.exit();
	}, 5000);

});

