/**
 * Javascript variables
 */
 
//RTL support
var rtl = false;                                //Set to true if your website is RTL. Otherwise, keep it false.

//ONE-PAGE NAVIGATION HIGHLIGHT
var onepage_nav = true;                         //If true, each menu item will highlight when scrolling to each respective section.

//MOBILE MENU TITLE
var mobile_menu_title = "Menu";                 //The title of the mobile menu.

//HERO FULLSCREEN VARIABLE
var hero_full_screen = true;                    //If true, the hero section will fit to screen size. If false, hero height will be the height of its content.

//HERO BACKGROUND SLIDESHOW IMAGES
var slidehow_images = [
    "images/mj/slideshow_1.jpg",
    "images/mj/slideshow_2.jpg",
    "images/mj/slideshow_3.jpg"
];

//TIMELINE PARALLAX
var timeline_parallax = true;                   //If false, the timeline items will not move on mousemove.


//CONTACT FORM VARIABLES
var contact_form_success_msg = "Form successfully submitted! :)";
var contact_form_error_msg = "Error sending message :(";
var contact_form_recaptcha_error_msg = "Error verifying reCaptcha!";


//COUNTDOWN VARIABLES
var c_days = "DAYS";                            //Countdown "Days" label
var c_hours = "HOURS";                          //Countdown "Hours" label
var c_minutes = "MIN.";                         //Countdown "Minutes" label
var c_seconds = "SEC.";                         //Countdown "Seconds" label
var countdown_end_msg = "Event Started!";       //Message to display when the countdown reaches the end


//GOOGLE MAP VARIABLES
var map_canvas_id = "map_canvas";               //The HTML "id" of the map canvas
var map_color = "#f0f0fe"; ///8eaeba";                      //Google map color
var map_initial_zoom = 17;                      //The initial zoom when Google map loads
var map_initial_latitude = 45.823623;           //Google map initial Latitude. If "null", the latitude of the first marked will be used
var map_initial_longitude = 13.844816;        //Google map initial Longitude. If "null", the longitude of the first marked will be used
var use_default_map_style = false;              //If true, default map style will be used

//List of map markers
var map_markers = [
    // {
    //     "title": "Parking",
    //     "latitude": 45.82386797459058,
    //     "longitude": 13.84252247475232,
    //     "icon": "fas fa-glass-cheers", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
    //     "infoWindow": "Parkirišče - valiko makedamsko parkirišče (100m oddaljeno od vhoda v Štanjel)"
    // },
    {
        "title": "Zbor svatov",
        "latitude": 45.82388523499586,
        "longitude": 13.844293754627977,
        "icon": "fas fa-street-view", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
        "infoWindow": "Zbor svatov pred vhodom v Ferrarijev vrt (velika kovinska vrata)"
    },
    {
        "title": "Fabijanova pot",
        "latitude": 45.82487787797695,
        "longitude": 13.84612206876499,
        "icon": "fas fa-walking", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
        "infoWindow": "Fabijanova pot (10min)"
    },
    {
        "title": "Obred",
        "latitude": 45.823155278121114,
        "longitude": 13.847837023895556,
        "icon": "fas fa-ring", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
        "infoWindow": "Obred, Ferraijev vrt"
    },
    {
        "title": "Zdravica",
        "latitude": 45.82259638704738,
        "longitude": 13.847546024663739,
        "icon": "fas fa-glass-cheers", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
        "infoWindow": "Zdravica, Ferrarijev vrt"
    },
    {
        "title": "Pogostitev in zabava",
        "latitude":  45.82359048464304,
        "longitude": 13.845057886526753,
        "icon": "fas fa-utensils", //Check the full list of icons at http://fortawesome.github.io/Font-Awesome/icons/
        "infoWindow": "Pogostitev in zabava"
    },
];