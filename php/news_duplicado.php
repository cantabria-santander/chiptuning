	    


<?php 

$xml = simplexml_load_file('https://elpais.com/tag/rss/deportes_motor/');



 for($i=11;$i<=16;$i++){
            //   $data = $xml->channel[0]->item[$i]->pubDate;
                 $img =  $xml->channel[0]->item[$i]->enclosure['url'];
                // $title = $xml->channel[0]->item[$i]->title;
                // $title = preg_replace( '/"([^"]*)"/', "«$1»", $title );
                // $ssilka =  $xml->channel[0]->item[$i]->link;
                // $description = $xml->channel[0]->item[$i]->description;
  
// $img2 = str_replace('https://elpais.com/',  '', $img); 
// $play = 'noticias/?reparacion-modulos-electronicos&img='.$img2;

// $ssilka = str_replace('https://elpais.com/',  $play, $ssilka);
// $ssilka = '/';

 echo '
                      <div class="col-sm-2">
			             <img src="'.$img.'" alt="Copia y reparacion llaves mandos de coche">
		              </div>
 		';				

};		