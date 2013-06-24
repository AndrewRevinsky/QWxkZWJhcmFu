/**
 * Created with JetBrains PhpStorm.
 * User: ANDREW
 * Date: 6/25/13
 * Time: 2:07 AM
 * To change this template use File | Settings | File Templates.
 */
$(function(){
	var markup = [];
	for(var i = 1000; i; i--) {
		markup.push('<div class="color"></div>')
	}
	$('#color_wrap').html(markup.join(''));
});