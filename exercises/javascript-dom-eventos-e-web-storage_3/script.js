function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  let buttonsContainer = document.getElementsByClassName('buttons-container');

  generateMonthDays();
  generateHolidayButton('Feriados');
  generateFridayButton('Sexta-feira');
  dayZoon();
  taskCreator('Cozinhar');
  
  function generateMonthDays() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    let daysList = document.getElementById('days');

    for (let index = 0; index < dezDaysList.length; index += 1) {
        let day = dezDaysList[index];
        let dayItem = document.createElement('li');

        if (day === 24 | day === 31) {
            dayItem.className = 'day holiday';
            dayItem.innerHTML = day;
        } else if (day === 25) {
            dayItem.className = 'day holiday friday';
            dayItem.innerHTML = day;
        } else if (day === 4 | day === 11 | day === 18) {
            dayItem.className = 'day friday';
            dayItem.innerHTML = day;    
        } else {
            dayItem.className = 'day';
            dayItem.innerHTML = day;
        };
        daysList.appendChild(dayItem);
    };
  };

  function generateHolidayButton(buttonName) {    
    let button = document.createElement('button');
    button.id = 'btn-holiday';
    button.innerHTML = buttonName;
    buttonsContainer[0].appendChild(button);

    let showHolidays = false;    
    button.addEventListener('click', function() {
        let holidayDays = document.getElementsByClassName('holiday');
        showHolidays = !showHolidays;
        
        if (showHolidays) {
            for (let day of holidayDays) {
                day.style.backgroundColor = 'white';
            }            
        } else {
            for (let day of holidayDays) {
                day.style.backgroundColor = 'rgb(238,238,238)';
            }
        }
    })
  };

  function generateFridayButton (buttonName) {
    let button = document.createElement('button');
    button.innerHTML = buttonName;
    button.id = 'btn-friday';
    buttonsContainer[0].appendChild(button);

    let show = false;
    let fridayDays = document.getElementsByClassName('friday');

    let originalValues = [];
    for (let index = 0; index < fridayDays.length; index += 1) {
        originalValues.push(fridayDays[index].innerHTML);
    };

    button.addEventListener('click', function() {        
        console.log(originalValues);
        show = !show;

        if (show) {
            for (let day of fridayDays) {
                day.innerHTML = 'Sextouuuu!'
            }
        } else {
            let index = 0
            for (let day of fridayDays) {
                day.innerHTML = originalValues[index];
                index += 1;
            }
        };      
    });
  };

  function dayZoon() {
    let days = document.getElementsByClassName('day');

    for (let day of days) {        
        day.addEventListener('mouseover', function(sourceEvent) {
            sourceEvent.target.style.fontSize = '30px';
        });

        day.addEventListener('mouseleave', function(sourceEvent) {
            sourceEvent.target.style.fontSize = '20px';
        });
    };
  };

  function taskCreator(task) {
    let myTaskContainer = document.getElementsByClassName('my-tasks');
    let taskSpan = document.createElement('span');
    taskSpan.innerHTML = task;
    myTaskContainer[0].appendChild(taskSpan);
  };