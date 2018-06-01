<?php header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

define('DB_HOST', '127.0.0.1');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', 'password');
define('DB_NAME', 'finaleperk');

$mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);

if(!$mysqli){
	die("Connection failed: " . $mysqli->error);
}

$query = sprintf("SELECT DISTINCT student_id, session_id, use_type, used FROM uses ORDER BY student_id, session_id");
$result = $mysqli->query($query);

$data = array();
foreach ($result as $row) {
	$data[] = $row;
}


$result->close();
$mysqli->close();

print json_encode($data);
?>

<!-- $query = sprintf("SELECT DISTINCT battles.student_id, battles.session_id, battles.battle_num, battles.finished, actions.action_num, actions.topic, actions.difficulty, actions.time, actions.result FROM battles,actions WHERE actions.student_id=battles.student_id AND battles.session_id=actions.session_id  ORDER BY actions.student_id, battles.session_id, battles.battle_num, actions.topic, actions.action_num");
$result = $mysqli->query($query); -->

<!-- $query = sprintf("SELECT DISTINCT student_id, session_id, battle_num, action_num, topic, difficulty, time, result FROM actions ORDER BY student_id, session_id, battle_num, topic, action_num"); -->