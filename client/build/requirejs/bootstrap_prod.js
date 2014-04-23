/**
 *  Use aysnc script loader, configure the application module (for AngularJS)
 *  and initialize the application ( which configures routing )
 *
 *  @author Thomas Burleson
 */

 (function( window, head ) {
    "use strict";

    head.js(

      // Pre-load these for splash-screen progress bar...

          { angular      : "vendor/angular/angular.js"                     }
        , { ngSanitize   : "vendor/angular-sanitize/angular-sanitize.js"   }
        , { ngAnimate    : "vendor/angular-animate/angular-animate.js"     }
        , { uiRoute      : "vendor/angular-ui-router/release/angular-ui-router.js" }
        , { uibootstrap  : "vendor/angular-bootstrap/ui-bootstrap-tpls.js" }

        , { jquery       : "vendor/jquery/jquery.min.js"                   }
        , { toastr       : "vendor/toastr/toastr.js"                       }

        , { breeze_debug : "vendor/breeze/breeze.debug.js"                 }
        , { breeze_ng    : "vendor/breeze/breeze.angular.js"               }
        , { breeze_mongo : "vendor/breeze/breeze.dataservice.mongo.js"     }
        , { breeze_meta  : "vendor/breeze/breeze.metadata-helper.js"       }

        , { require      : "vendor/requirejs/require.js"                   }

        , { zza          : "./assets/js/zza.js"                            }

    )
    .ready("ALL", function()
    {
        // All application code is concat/uglified in 1 file:  `quizzler.js`

        require( [ "Zza" ], function( app )
        {
            // Application has bootstrapped and started...
        });


    });



}( window, head ));
