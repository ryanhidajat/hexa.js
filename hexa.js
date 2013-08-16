/*
Apache License
Version 2.0, January 2004
http://www.apache.org/licenses/

TERMS AND CONDITIONS FOR USE, REPRODUCTION, AND DISTRIBUTION

Copyright [2013] [Ryan Hidajat]

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
   
   @ryanhidajat
   http://dewitech.com
*/

var hexa = $('<div class="hexshape"><div class="hexshape">');
$('.hexa img').wrap($(hexa));
$('.hexa img').addClass('hexrot');
$('.hexa li').addClass(function(x) 
	{ 	
	if (x%2 == 0 && (x >5)) 
		return 'oddline2';
	if (x%2 == 1 && (x >5)) 
		return 'evenline2';
	});
