// create variables for exersiceDB
var upperLegs = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/upper%20legs';
var waist = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/waist';
var lowerLegs = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/lower%20legs';
var back = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/back';
var cardio = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/cardio';
var chest = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/chest';
var shoulders = 'https://exercisedb.p.rapidapi.com/exercises/bodyPart/shoulders';
var counter = 0;

// DOM elements
var workoutSundayEl = document.querySelector('#workoutSunday');
var workoutMondayEl = document.querySelector('#workoutMonday');
var workoutTuesdayEl = document.querySelector('#workoutTuesday');
var workoutWednesdayEl = document.querySelector('#workoutWednesday');
var workoutThursdayEl = document.querySelector('#workoutThursday');
var workoutFridayEl = document.querySelector('#workoutFriday');
var workoutSaturdayEl = document.querySelector('#workoutSaturday');


//5 upper legs workouts
function Sunday() {
    $("#workOutBtn").on('click', (function () {

        var resetWorkout = '';

        for (i = 0; i < 5; i++) {
            const settings = {
                "async": true,
                "crossDomain": true,
                "url": upperLegs,
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
                    "x-rapidapi-key": "de8e14ca10msh892e42abbcd4964p12db82jsnbc1393fd740a"
                }
            };

            $.ajax(settings).done(function (response) { 
                resetWorkout = resetWorkout + '' + response[i++].name + '<br> <br>';
                workoutSundayEl.innerHTML = resetWorkout;
                counter++;
                if (counter==5) {
                    Monday();
                }
            });
        }

    })
    )};

    function Monday() {

        var resetWorkout = '';

        for (i = 0; i < 5; i++) {
            const settings = {
                "async": true,
                "crossDomain": true,
                "url": waist,
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
                    "x-rapidapi-key": "de8e14ca10msh892e42abbcd4964p12db82jsnbc1393fd740a"
                }
            }

            $.ajax(settings).done(function (response) { 
                resetWorkout = resetWorkout + '' + response[i++].name + '<br> <br>';
                workoutMondayEl.innerHTML = resetWorkout;
                counter++;
                if (counter==10) {
                    Tuesday();
                }
            });
        }
    }

    function Tuesday() {

        var resetWorkout = '';

        for (i = 0; i < 5; i++) {
            const settings = {
                "async": true,
                "crossDomain": true,
                "url": lowerLegs,
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
                    "x-rapidapi-key": "de8e14ca10msh892e42abbcd4964p12db82jsnbc1393fd740a"
                }
            }

            $.ajax(settings).done(function (response) { 
                resetWorkout = resetWorkout + '' + response[i++].name + '<br> <br>';
                workoutTuesdayEl.innerHTML = resetWorkout;
                counter++;
                if (counter==15) {
                    Wednesday();
                }
            });
        }
    }

    function Wednesday() {

        var resetWorkout = '';

        for (i = 0; i < 5; i++) {
            const settings = {
                "async": true,
                "crossDomain": true,
                "url": back,
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
                    "x-rapidapi-key": "de8e14ca10msh892e42abbcd4964p12db82jsnbc1393fd740a"
                }
            }

            $.ajax(settings).done(function (response) { 
                resetWorkout = resetWorkout + '' + response[i++].name + '<br> <br>';
                workoutWednesdayEl.innerHTML = resetWorkout;
                counter++;
                if (counter==20) {
                    Thursday();
                }
            });
        }
    }

    function Thursday() {

        var resetWorkout = '';

        for (i = 0; i < 5; i++) {
            const settings = {
                "async": true,
                "crossDomain": true,
                "url": cardio,
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
                    "x-rapidapi-key": "de8e14ca10msh892e42abbcd4964p12db82jsnbc1393fd740a"
                }
            }

            $.ajax(settings).done(function (response) { 
                resetWorkout = resetWorkout + '' + response[i++].name + '<br> <br>';
                workoutThursdayEl.innerHTML = resetWorkout;
                counter++;
                if (counter==25) {
                    Friday();
                }
            });
        }
    }

    function Friday() {

        var resetWorkout = '';

        for (i = 0; i < 5; i++) {
            const settings = {
                "async": true,
                "crossDomain": true,
                "url": chest,
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
                    "x-rapidapi-key": "de8e14ca10msh892e42abbcd4964p12db82jsnbc1393fd740a"
                }
            }

            $.ajax(settings).done(function (response) { 
                resetWorkout = resetWorkout + '' + response[i++].name + '<br> <br>';
                workoutFridayEl.innerHTML = resetWorkout;
                counter++;
                if (counter==30) {
                    Saturday();
                }
            });
        }
    }

    function Saturday() {

        var resetWorkout = '';

        for (i = 0; i < 5; i++) {
            const settings = {
                "async": true,
                "crossDomain": true,
                "url": shoulders,
                "method": "GET",
                "headers": {
                    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
                    "x-rapidapi-key": "de8e14ca10msh892e42abbcd4964p12db82jsnbc1393fd740a"
                }
            }

            $.ajax(settings).done(function (response) { 
                resetWorkout = resetWorkout + '' + response[i++].name + '<br> <br>';
                workoutSaturdayEl.innerHTML = resetWorkout;
                // safety check for nutrition functions
                counter++;
                // if (counter==35) {
//safegaurd for pressing the generate nutrition button too quickly.
                // }
            });
        }
    }


Sunday();
// get calorie value
var calorieInput = document.getElementById("#calories")

    //listen for form submit
    // $( "#workOutBtn" ).click(function() {
    //     const settings = {
    //         "async": true,
    //         "crossDomain": true,
    //         "url": waist,
    //         "method": "GET",
    //         "headers": {
    //             "x-rapidapi-host": "exercisedb.p.rapidapi.com",
    //             "x-rapidapi-key": "de8e14ca10msh892e42abbcd4964p12db82jsnbc1393fd740a"
    //         }
    //     };

    //     $.ajax(settings).done(function (response) {
    //         console.log(response);
    //     });
    //   });



    // get calorie value
    var calorieInput = document.getElementById("#calories")

    $("#nutriBtn").submit(function () {

        // var calories = calorieInput
        var numberRecipe = 21;

        const settings = {

            "url": `https://api.spoonacular.com/recipes/complexSearch?query=paleo&number=${numberRecipe}&addRecipeInformation=true&addRecipeNutrition=true&apiKey=21fc282010dd4a55b9f7abe8cc4b3058`,
            "method": "GET",

        };

        $.ajax(settings).done(function (response) {
            console.log(response);
            for (var i = 0; i < 5; i++) {
                // generate random number to identify make recipe selection random
                var randomRecipe = Math.floor(Math.random() * numberRecipe);

                // store title recipe inside variable
                // var recipeTitle = response.results[randomRecipe].title
                var recipeTitle = response.results[randomRecipe].nutrition.nutrients[0].amount
                // create card for this recipe

                // add recipe title to card title

                // append card to HTML
                console.log(recipeTitle)
            }
        });
    });

    // bulma logic for mobile navbar toggle animation
    document.addEventListener('DOMContentLoaded', () => {

        // Get all "navbar-burger" elements
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {

            // Add a click event on each of them
            $navbarBurgers.forEach(el => {
                el.addEventListener('click', () => {

                    // Get the target from the "data-target" attribute
                    const target = el.dataset.target;
                    const $target = document.getElementById(target);

                    // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
                    el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');

                });
            });
        }
    });




    // get calorie value
    var calorieInput = document.getElementById("#calories")

    $("#nutriBtn").submit(function () {
        // var calories = calorieInput
        var numberRecipe = 21;

        const settings = {

            "url": `https://api.spoonacular.com/recipes/complexSearch?query=paleo&number=${numberRecipe}&addRecipeInformation=true&addRecipeNutrition=true&apiKey=21fc282010dd4a55b9f7abe8cc4b3058`,
            "method": "GET",

        };

        $.ajax(settings).done(function (response) {
            console.log(response);
            for (var i = 0; i < 5; i++) {
                // generate random number to identify make recipe selection random
                var randomRecipe = Math.floor(Math.random() * numberRecipe);

                // store title recipe inside variable
                // var recipeTitle = response.results[randomRecipe].title
                var recipeTitle = response.results[randomRecipe].nutrition.nutrients[0].amount
                // create card for this recipe

                // add recipe title to card title

                // append card to HTML
                console.log(recipeTitle)
            }
        });
    });

//fetch data from APIs using for input