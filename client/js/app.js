//jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});


$(function(){
    new WOW().init();

    //jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');

        event.preventDefault();
    });

    if(window.matchMedia("(min-width: 900px)").matches){
        
        //Add slide effect only for sections
        $(".featurette > div.wow:nth-child(1)").addClass("slideInLeft");
        $(".featurette > div.wow:nth-child(2)").addClass("slideInRight");

        $(".call-to-action > h2").addClass("tada");
        $(".call-to-action > div.wow:nth-child(2)").addClass("bounceInRight");
        $(".call-to-action > div.wow:nth-child(3)").addClass("bounceInLeft");

    } else {

    }
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
        Analytics.trackEvent('mobile', store, 'ok');

        $mdDialog.show(
            $mdDialog.alert()
            .theme('altTheme')
            .title("Hommy is still under construction")
            .content("If you want to keep in touch with us, send us your email, we will give news asap ;)")
            .ok('Got it!')
            .disableParentScroll(false).hasBackdrop(true)
            .targetEvent(ev)
        );
    };
}]);