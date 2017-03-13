var isAndroid = window.navigator.appVersion.match(/android/gi);
var foot = $('footer');
var foot_a = $('footer a');
if(isAndroid){
	foot.css({
		'height':'55px'
	});
	foot_a.css({
		'height':'55px',
		'font-size':'12px',
		'padding-top':'33px',
		'background':'no-repeat center 12px',
		'background-size':'21px',
		'line-height':'20px'
	})
}