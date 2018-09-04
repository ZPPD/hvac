/* in the form:
    your request has been send successfuly ;
    phone validation    !!!
*/

//make alert pop up
 function submitForm(message, className){
    
    const div = document.createElement('div');
    div.className = `alert ${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('.container-form');
    const form = document.querySelector('#appointment');
    container.insertBefore(div, form);

    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);
     
};
//clear fields after submit
function clearFields(){
    document.querySelector('#firstName').value = '';
    document.querySelector('#lastName').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#phone').value = '';
    document.querySelector('#serviceAddress').value = '';
    document.querySelector('#billingAddress').value = '';
    document.querySelector('#message').value = '';
}
//submit function
const submit = document.querySelector('.submit-btn');
submit.addEventListener('click', function(e){
    //form values
    const first = document.querySelector('#firstName').value;
    const last = document.querySelector('#lastName').value;
    const email = document.querySelector('#email').value;
    const phone = document.querySelector('#phone').value;
    const address = document.querySelector('#serviceAddress').value;
    const message = document.querySelector('#message').value;
    const submit = document.querySelector('.submit-btn');
//validate inputs
if(first === '' || last === '' || email === '' || phone === '' || address === '' || message === ''){   
    submitForm('Please fill in all the requested fields!', 'alert-danger');
} else {
    submitForm('Your request has been send!', 'alert-success');
     clearFields();
}
e.preventDefault();
});

/* in products make buttons and switch between commercial and residential */

// Google Maps For Contacts page 
function initMap(){
    const options = {
        zoom: 13,
        center: {
            lat: 35.791538,
            lng: -78.781120
        }
    }
    //new map 
    const map = new google.maps.Map(document.getElementById('map'), options);
    //marker
    // const marker = [{
    //     coords: {
    //         lat: 35.791538,
    //         lng: -78.781120
    //     },
    //     content: '<h1>RJD Heating and Cooling</h1>'
    // }];
    // 
    var marker = new google.maps.Marker({position: options.center, map: map, content: '<h1>RJD Heating and Cooling</h1>'})
}