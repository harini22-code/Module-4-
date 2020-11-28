(function () {
	var names=["Jerome","Stephen","John","Watson","Yaakov","Peter","Joseph"];
		for (var i = 0; i<names.length; i++) {
			var alph=names[i];
			if (alph[0]=="J" || alph[0]=="j") {
				bspk(names[i]);
			} else {
				hsk(names[i]);
			}
		}
})();



