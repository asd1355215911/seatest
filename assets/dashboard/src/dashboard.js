define(function(require, exports, module){
	var $ = require('jquery');

	require('./test.less'); //test for less. should be deleted

	var a = require('./test.coffee');
	console.log(a.foo);	// test for coffee, should be deleted

	var dust = require('../../dust/src/dust.js');
	// var dust = require('dust');

	var tpl = require('./dashboard.tpl');

	$(function(){

		var tplc = dust.compile(tpl, 'dashboard');
		var a = dust.loadSource(tplc);
		var data = {'text': 'world'};
		dust.render('dashboard', data, function(err, out){
			$('#main').html(out);
		});
	})

})
