<?php header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$section = $_POST['section'];

define('DB_HOST', '127.0.0.1');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', 'password');
define('DB_NAME', 'finaleperk');

$mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);

if(!$mysqli){
	die("Connection failed: " . $mysqli->error);
}

/*$query = sprintf("SELECT DISTINCT actions.student_id, actions.session_id, actions.battle_num, actions.action_num, actions.topic, actions.difficulty, actions.time, actions.result FROM actions,students WHERE students.section='$section' AND actions.student_id =15 ORDER BY actions.student_id, actions.session_id, actions.battle_num, actions.topic, actions.action_num");
$result = $mysqli->query($query);*/
/**/
$query = sprintf("SELECT DISTINCT actions.student_id, actions.session_id, actions.battle_num, actions.action_num, actions.topic, actions.difficulty, actions.time, actions.result FROM actions,students WHERE students.section='$section' AND students.student_id = actions.student_id ORDER BY actions.student_id, actions.session_id, actions.battle_num, actions.topic, actions.action_num");
$result = $mysqli->query($query);

$data = array();
foreach ($result as $row) {
	$data[] = $row;
}

$query = sprintf("SELECT visits.student_id, visits.session_id, visits.location FROM visits,students WHERE students.section='$section' AND students.student_id = visits.student_id ORDER BY visits.student_id, visits.session_id");
$result = $mysqli->query($query);

$data1 = array();
foreach ($result as $row) {
	$data1[] = $row;
}

class Datum {
    public $student = "";
    public $visits  = "";
}

$d = new Datum();
$d->student = $data;
$d->visits  = $data1;

$result->close();
$mysqli->close();

print json_encode($d);
?>