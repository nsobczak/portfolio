document.write('\
<nav class="navbar navbar-expand-lg navbar-default navbar-fixed-top navbar-fnt navbar-backgrnd">\
    <div class="container-fluid">\
\
        <div class="navbar-header">\
            <button class="navbar-toggle" type="button" data-toggle="collapse"\
                    data-target="#navbarSupportedContent"\
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\
                <span class="icon-bar"></span>\
                <span class="icon-bar"></span>\
                <span class="icon-bar"></span>\
            </button>\
            <a class="navbar-brand">Navbar title</a>\
        </div>\
\
        <div id="navbarSupportedContent" class="navbar-collapse collapse">\
            <ul class="nav navbar-nav mr-auto">'
);


// Active tab handling
var currentLocation = window.location.toString();
var n = currentLocation.lastIndexOf("\/") + 1;
var currentPage = currentLocation.slice(n, -5);
console.log(currentPage);

document.write('\
                <li class='
);
if (currentPage === 'index') document.write('"nav-item active"');
else document.write('"nav-item"');

document.write('\
                >\
        <a class="nav-link" href="index.html">Home (infos)<span class="sr-only"></span></a>\
    </li>\
    <li class='
);
if (currentPage === 'skills') document.write('"nav-item active"');
else document.write('"nav-item"');

document.write('\
                >\
        <a class="nav-link" href="skills.html">Skills</a>\
    </li>\
    <li class='
);
if (currentPage === 'projects') document.write('"nav-item active"');
else document.write('"nav-item"');


document.write('\
                >\
                    <a class="nav-link" href="projects.html">Projects</a>\
                </li>\
                <!-- <li class="nav-item"> -->\
                    <!-- <a class="nav-link" href="#">Contact</a> -->\
                <!-- </li> -->\
            </ul>\
        </div>\
\
    </div>\
</nav>'
);

