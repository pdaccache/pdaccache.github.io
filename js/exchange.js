$.getJSON("https://script.googleusercontent.com/macros/echo?user_content_key=9wJ5gjMbOmCRkAjRMwv9Nl2sNSrXffrgq0MTy7xFKDBhAIdmp7u5dqRAjGCFoPyk48Oqrbkua2gBV_FFA5DZamTKi8Pl3Z11m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnC2kto250DuS-ndszbLOC2z1Hv4eAjxIJVlUmdVxmJzn0CQ-NhgeYfa8GSodrA1_vaV-rV9yhQ38&lib=MDXXf7HyteRttMy-qahQmQ0KkhXDGw_ZZ", function(data1){
	console.log(data1);
	
	var officialbuy = data1.user[4].C;
	var officialsell = data1.user[4].D;
	var blackbuy = data1.user[5].C;
	var blacksell = data1.user[5].D;
	
	$('.officialbuy').append(officialbuy);
	$('.officialsell').append(officialsell);
	$('.blackbuy').append(blackbuy);
	$('.blacksell').append(blacksell);
});