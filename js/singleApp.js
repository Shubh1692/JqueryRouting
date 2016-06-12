$(function() {
    var defaultView = {
        url: 'about',
        templateUrl: 'views/home.html'
    }; //default route object
    var routeElementId = 'route'; //route element id
    var routeObj = [{ // route js Array
        url: 'contactUs',
        templateUrl: 'views/contactUs.html'
    }, {
        url: 'about',
        templateUrl: 'views/about.html'
    }, {
        url: 'gallery',
        templateUrl: 'views/gallery.html'
    }, {
        url: 'home',
        templateUrl: 'views/home.html'
    }];
    /** Function for Load HTMl in Route Element
		input : src (string) template Url
		output : null
	*/
    function _loadUrl(src) {
        $('#' + routeElementId).load(src)
    }
    /** Function for find correct template for route
		input : hash (string) hash Url
		output : null
	*/
    function _findRouteTemplateUrl(hash) {
        var src;
        var i;
        if (hash !== '') {
            for (i = 0; i < routeObj.length; i++) {
                if (hash === '#' + routeObj[i].url) {
                    src = routeObj[i].templateUrl;
                    _loadUrl(src);
                }
            }
        } else {
            _loadUrl(defaultView.templateUrl);
        }
    }
    /** Function for call after any hash url change
		input : null
		output : null
	*/
    function _onhashchange() {
        _findRouteTemplateUrl(location.hash);
    };
    // call hashchange function on window hash url change
    $(window).on("hashchange", _onhashchange);
    // call onload function on window for first time
    $('#body').ready(function() {
        alert(location.hash)
        _findRouteTemplateUrl(location.hash);
    });
});