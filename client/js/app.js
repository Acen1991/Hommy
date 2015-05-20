//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

//jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});


$(function(){
    new WOW().init();
});


angular.module('hommy-app', ['ngMaterial','angular-google-analytics'])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('altTheme')
    .primaryPalette('deep-orange');
})
.config(function(AnalyticsProvider) {
     AnalyticsProvider.setAccount('UA-63117322-1');
})
.controller('baseController', [
    '$scope',
    '$rootScope',
    '$http',
    '$mdDialog',
    'Analytics',
    function($scope, $rootScope, $http, $mdDialog, Analytics){

    $scope.showAlert = function(ev, store){
        Analytics.trackEvent('mobile', 'store', store);

        console.log(Analytics);
        console.log("");
        console.log( Analytics.trackEvent('mobile', 'store', store));
        
        $mdDialog.show(
            $mdDialog.alert()
            .theme('altTheme')
            .title("The App is still under construction")
            .content("If you want to keep in touch with us, send us your email, we will give news asap ;)")
            .ariaLabel('Password notification')
            .ok('Got it!')
            .disableParentScroll(false).hasBackdrop(true)
            .targetEvent(ev)
        );
    };

    $scope.playstore = ['mobile', 'store', 'playstore'];
    $scope.appstore = ['mobile', 'store', 'appstore'];

}]);