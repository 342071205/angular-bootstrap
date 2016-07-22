<?php
	header("Content-type: application/json");
	$param1 = $_POST['param1'];
	$param2 = $_POST['param2'];
	$res = array( 
		'status' => 200,
		'message' => 'post success',
		'data' => array(
			'param1' => $param1,
			'param2' => $param2
		)
	);
	echo json_encode($res);