/**
 * Created with JetBrains PhpStorm.
 * User: ANDREW
 * Date: 6/25/13
 * Time: 2:07 AM
 * To change this template use File | Settings | File Templates.
 */
$(function(){
	var markup = [];
	for(var i = 100; i; i--) {
		markup.push('<div class="card c' + Math.floor(1 + Math.random() * 3) + '"></div>')
	}
	$('#card_wrap').html(markup.join(''));
});