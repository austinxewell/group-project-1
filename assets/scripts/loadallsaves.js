var savedList = document.querySelector('.saved-table');
var allSavedData = JSON.parse(localStorage.getItem("saves")) || [];
var clearBtn = document.querySelector('#clear-btn');

var displaySaves = function() {
    var workouts = allSavedData.workout


    allSavedData.forEach(element => {
        // var linkEl = document.createElement('a');
        var listItem = document.createElement('li');

        listItem.textContent = element.name+' - '+element.nutrition+element.workout;

        savedList.appendChild(listItem);
        
    });
}

displaySaves();

$(clearBtn).on('click', function(){
    localStorage.clear();
    window.location.reload();
})