'use strict';

/**
 * @ngdoc function
 * @name materialBoilerplateApp.controller:NavCtrl
 * @description
 * # NavCtrl
 * Controller of the materialBoilerplateApp
 */
angular.module('materialBoilerplateApp')
    .controller('NavCtrl', function ($scope, $mdSidenav, $timeout, $mdDialog, menu, $location, $rootScope, $window, $log, $mdBottomSheet, $mdToast, $animate, breadcrumbs) {
        /* 
        It is not best practice to mix Self and $scope however this code is based on: https://material.angularjs.org/latest/ and they do so. 
        Also this mix is my own pre cursor to using only Self when Angular v2.0 is released as $scope will be depricated. 
        */
        var self = this;
        // See the Menu Factory for more details on what this is and does. 
        $scope.menu = menu;
        // This needs revised as although the breadcrumbs directive works very well, its not is use currently and the toolbar page names are being generated manually.
        $scope.breadcrumbs = breadcrumbs;
    // *********************
    // DETAILS NEEDED
    // *********************
        $scope.goHome = goHome;
    // Open Left Nav
        $scope.openMenu = openMenu;
    // Close Left Nav
        $scope.closeMenu = closeMenu;
    // Open Right Nav -- This is the Contact Form
        $scope.openRight = openRight;
    // Close Right Nav -- This is the Contact Form
        $scope.closeRight = closeRight;
    // Submit the contact form if Valid (!contactForm.$error)
        $scope.submit = submit;
    // FAB button function opening the $mdBottomSheet
        $scope.openBottom = openBottom;
    // $mdToast creates pop up notifications together with $animate -- currently set to top left 
        $scope.showToast = showToast;
        $scope.isSectionSelected = isSectionSelected;
        $rootScope.$on('$locationChangeSuccess', openPage);
        $scope.focusMainContent = focusMainContent;

        //-- Define a fake model for the related page selector
        Object.defineProperty($rootScope, 'relatedPage', {
            get: function () {
                return null;
            },
            set: angular.noop,
            enumerable: true,
            configurable: true
        });
        $rootScope.redirectToUrl = function (url) {
            $window.location.hash = url;
            $timeout(function () {
                $rootScope.relatedPage = null;
            }, 100);
        };

        // Methods used by menuLink and menuToggle directives
        this.isOpen = isOpen;
        this.isSelected = isSelected;
        this.toggleOpen = toggleOpen;
        this.autoFocusContent = false;


        var mainContentArea = document.querySelector("[role='main']");

        // *********************
        // Internal methods
        // *********************

        function closeMenu() {
            $timeout(function () {
                $mdSidenav('left').close();
            });
        }

        function openMenu() {
            $timeout(function () {
                $mdSidenav('left').open();
            });
        }

        function closeRight() {
            $timeout(function () {
                $mdSidenav('right').close();
            });
        }

        function openRight() {
            $timeout(function () {
                $mdSidenav('right').open();
            });
        }

        function submit() {
            $timeout(function () {
                showToast('Submitted!');
            });
        }

        function openBottom($event) {
            $scope.alert = '';
            $mdBottomSheet.show({
                templateUrl: 'views/partials/bottom-sheet-grid.tmpl.html',
                controller: 'BottomsheetCtrl',
                targetEvent: $event
            }).then(function (clickedItem) {
                showToast(clickedItem.name);
            });
        }

        function path() {
            return $location.path();
        }

        function goHome($event) {
            menu.selectPage(null, null);
            $location.path('/');
        }

        function openPage() {
            $scope.closeMenu();

            if (self.autoFocusContent) {
                focusMainContent();
                self.autoFocusContent = false;
            }
        }

        function focusMainContent($event) {
            // prevent skip link from redirecting
            if ($event) {
                $event.preventDefault();
            }

            $timeout(function () {
                mainContentArea.focus();
            }, 90);

        }

        function isSelected(page) {
            return menu.isPageSelected(page);
        }

        function isSectionSelected(section) {
            var selected = false;
            var openedSection = menu.openedSection;
            if (openedSection === section) {
                selected = true;
            } else if (section.children) {
                section.children.forEach(function (childSection) {
                    if (childSection === openedSection) {
                        selected = true;
                    }
                });
            }
            return selected;
        }

        function isOpen(section) {
            return menu.isSectionSelected(section);
        }

        function toggleOpen(section) {
            menu.toggleSelectSection(section);
        }


        function showToast(content) {
            var toasty = content || 'Cheers!';
            $mdToast.show(
                $mdToast.simple()
                .content(toasty)
                .position('top left')
                .hideDelay(2000)
            );
        }
    });