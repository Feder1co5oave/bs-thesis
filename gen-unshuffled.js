var nInstances = 200000, noiseAttr = 9, i;

function noise(n) {
	var r = "", j;
	for (j = 0; j < n; j++)
		r += Math.random().toFixed(3) + ",";
	return r;
}

for (i = 0; i < nInstances/2; i++)
	console.log(noise(noiseAttr + 1) + "A");
for (i = 0; i < nInstances/2; i++)
	console.log("" + (1 + Math.random()).toFixed(3) + "," + noise(noiseAttr) + "B");
