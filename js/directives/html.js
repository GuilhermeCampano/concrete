//diretriz para mostrar html não "seguro"
app.directive('html', function() {
    function link(scope, element, attrs) {

        var update = function() {
            element.html(scope.html);
        }

        attrs.$observe('html', function(value) {
            update();
        });
    }

    return {
        link: link,
        scope:  {
            html:   '='
        }
    };
});