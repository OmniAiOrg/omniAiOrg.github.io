
function auto_copyright($year){var $currentdate=new Date();var $currentyear=$currentdate.getFullYear();var $cty=$currentyear.toString();var $sty=$year.toString();if($currentyear>$year){document.write($sty+' - '+$cty);console.log($cty);}else{document.write($cty);}}