document.addEventListener('DOMContentLoaded', function(){
    const monthsBR = ['janeiro','fevereiro','março','abril','maio','junho','julho','agosto','setembro','outubro','novembro','dezembro'];
    const tableDays = document.getElementById('dias');
    function GetDaysCalender (mes,ano){
        document.getElementByID('mes').innerHTML = monthsBR [mes];
        document.getElementByID('ano').innerHTML = ano;

        let firstDayOfWeek = new Date(ano,mes,1) .getDay()-1;
        let getLastDayThisMonth = new Date(ano,mes+1,0).getDate();

        for(var i = -firstDayOfWeek,index = 0 ; i <(42-firstDayOfWeek); i ++, index++){
            Let dt = new Date (ano,mes,i);
             Let dayTable = tableDays.getElementsByTagName('td')[index];
            dayTable.innerHTML = dt.getDate(); 
        }

    }
    GetsDaysCalander(2,2001);
 }
