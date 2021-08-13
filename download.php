<?php
// [mpdf root]/data/mpdf.css;

require_once __DIR__ . '/vendor/autoload.php';
$str = file_get_contents('http://localhost/Btn2PDF/html2PDF/index.html');
include('html2PDF/mpdf.php');
// Require composer autoload
// Create an instance of the class:
$mpdf = new \Mpdf\Mpdf();
$stylesheet = file_get_contents('html2PDF/style.css');
// Write some HTML code:
$mpdf->WriteHTML($stylesheet,1);
$mpdf->WriteHTML($str,2);

// Output a PDF file directly to the browser
$mpdf->Output();
exit;
// echo $data;
?>