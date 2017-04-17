(function(jQuery){
	jQuery(document).ready( function(){

		console.log('shit', jQuery('select#dbqp-sort-by') );

		//var sortBy = document.getElementById('dbqp-sort-by');
		//sortBy.addEventListener('change', sortHandler.bind(this), false);
		//sortBy.addEventListener('change', function(event){console.log(event);}, false);

		var elapsedSort = function(a, b){
			parsedA = parseFloat(a.dataset.ms_elapsed.replace(/,/g, ''));
			parsedB = parseFloat(b.dataset.ms_elapsed.replace(/,/g, ''));
			//console.log('a', parseFloat(a.dataset.ms_elapsed), 'b', parseFloat(b.dataset.ms_elapsed));
			if(parsedA < parsedB) {
				return 1;
			}
			if(parsedA > parsedB) {
				return -1;
			}
			return 0;
		}

		var ordinalSort = function(a, b){
			parsedA = parseInt(a.dataset.count.replace(/,/g, ''));
			parsedB = parseInt(b.dataset.count.replace(/,/g, ''));
			//console.log('a', a.dataset.count, 'b', b.dataset.count);
			if(parseInt(a.dataset.count) > parseInt(b.dataset.count)) {
				return 1;
			}
			if(parseInt(a.dataset.count) < parseInt(b.dataset.count)) {
				return -1;
			}
			return 0;
		}

		jQuery('select#dbqp-sort-by').on('change', function(e) {
			if( 'elapsed' == e.target.value) {
				// Sort by Elapsed time.
				jQuery('.dbqp-list-item').sort( elapsedSort ).appendTo('.dbqp-queries');
			} else {
				// Assume execution order.
				jQuery('.dbqp-list-item').sort( ordinalSort ).appendTo('.dbqp-queries');
			}

		});
	});
})(jQuery);