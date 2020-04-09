<?php 

$xml = simplexml_load_file('https://elpais.com/tag/rss/deportes_motor/');



 for($i=0;$i<=3;$i++){
            //   $data = $xml->channel[0]->item[$i]->pubDate;
                 $img =  $xml->channel[0]->item[$i]->enclosure['url'];
                 $title = $xml->channel[0]->item[$i]->title;
                 $title = preg_replace( '/"([^"]*)"/', "«$1»", $title );
                 $ssilka =  $xml->channel[0]->item[$i]->link;
                 $description = $xml->channel[0]->item[$i]->description;
  
 // $img2 = str_replace('https://elpais.com/',  '', $img); 
 // $play = 'noticias/?reparacion-modulos-electronicos&img='.$img2;
// 
 // $ssilka = str_replace('https://elpais.com/',  $play, $ssilka);
 // $ssilka = '/';

 echo '
                      	<div class="col-md-3">
 							<article class="vertical-item content-padding content-overlapping">
 								<div class="item-media">
 									<img src="'.$img.'" alt="REPARACION DE MODULOS ELECTRONICOS">
 								</div>
 								<div class="item-content with_background with_border">
 									<h4 class="entry-title thin bottommargin_20">
 										<a href="/" target="_blank">
 											'.$title.'
 										</a>
 									</h4>
 									<p>
 									    '.$description.'
 									</p>
 								</div>
 							</article>
 						</div>
 		';				

};