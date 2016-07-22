<?php
	$param1 = $_GET['param1'];
	$param2 = $_GET['param2'];
	$res = array( 
		'status' => 200,
		'message' => 'get success',
		'data' => array(
			'param1' => $param1,
			'param2' => $param2
		)
	);
	echo json_encode($res);