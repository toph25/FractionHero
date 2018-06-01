<?php header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');

$stud = $_POST['student'];

define('DB_HOST', '127.0.0.1');
define('DB_USERNAME', 'root');
define('DB_PASSWORD', 'password');
define('DB_NAME', 'finaleperk');

$mysqli = new mysqli(DB_HOST, DB_USERNAME, DB_PASSWORD, DB_NAME);

if(!$mysqli){
	die("Connection failed: " . $mysqli->error);
}


$query = sprintf("SELECT DISTINCT student_id, session_id, battle_num, action_num, topic, difficulty, time, result FROM actions WHERE student_id = '$stud' ORDER BY student_id, session_id, battle_num, topic, action_num");
$result = $mysqli->query($query);

$data = array();
foreach ($result as $row) {
	$data[] = $row;
}

$query = sprintf("SELECT DISTINCT student_id, session_id, location FROM visits WHERE student_id = '$stud' ORDER BY student_id, session_id");
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