<!doctype html>
<html>
	<head>
		<meta charset="utf-8" />
		<title>Teste 1</title>

		<script language="JavaScript" type="text/javascript" src="libs/head.js"></script>

		<script>

			head.js(
				"libs/jquery-1.8.0.min.js",
				"libs/jquery.gamequery-0.7.0.js",
				"js/globals.js",
				"js/Player.js",
				"js/gamequery_player_teste.js",
				"js/gamequery_background_teste.js");

		</script>
		<!-- <script language="JavaScript" type="text/javascript" src="libs/jquery-1.8.0.min.js"></script> -->
		<!-- <script language="JavaScript" type="text/javascript" src="libs/jquery.gamequery-0.7.0.js"></script> -->

		<!-- <script language="JavaScript" type="text/javascript" src="js/gamequery_background_teste.js"></script> -->
		<!-- <script language="JavaScript" type="text/javascript" src="js/Player.js"></script> -->
		<!-- <script language="JavaScript" type="text/javascript" src="js/gamequery_player_teste.js"></script> -->
	</head>
	<body style="margin:0px;padding:0px;">
		<div id="playground" 
			style="
				border:1px solid #000;
			">
			<div id ="splash">
			
				<a id="start">Start</a>
				
				<div id="loadbar" style="background: 000; height: 32px; overflow: visible;">
					<span id="loadtext" style="color: red"></span>
				</div>
				
			</div>
		</div>
	</body>
</html>