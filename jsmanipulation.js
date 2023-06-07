<!DOCTYPE html>
<html>
<head>
	<title>Javascript 1</title>
</head>
<body>

	<h1 id="headings">Heading 1</h1>
	<p class="mouse">Paragraph with class mouse</p>

	<div id="divid">
		<p class="banana">Paragraph 1 with class banana</p>
		<p class="banana">Paragraph 2 with class banana</p>
		<p class="banana">Paragraph 3 with class banana</p>
	</div>

	<script type="text/javascript">

		let jsid = document.getElementById('headings')
		jsid.innerHTML = "This is the manipulation for headings 1 ID"


		let jsclass = document.getElementsByClassName('mouse')
		jsclass[0].innerHTML = "This is the manipulation for mouse class"

		// let jsid1 = document.getElementById('divid')
		// jsid1.innerHTML = "This is the manipulation for divid ID"


		let jsclass1 = document.getElementsByClassName('banana')
		for (let x = 0; x < jsclass1.length; x++){
			jsclass1[x].innerHTML = "This is the manipulation for the banana class"
		}

		let jstagname = document.getElementsByTagName('p')
		for (let y = 0; y < jstagname.length; y++){
			jstagname[y].innerHTML = "This is the manipulation for p Tag"
		}


		
		
	</script>
</body>
</html>
