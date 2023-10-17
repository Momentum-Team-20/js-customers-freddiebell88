console.log("connected")

const customerContainer = document.querySelector('#directory')
/* <div class = customerCard>
            <img src="https://randomuser.me/api/portraits/women/62.jpg" alt="">
            <h3>Sophia Burns</h3>
            <div>sophia.burns@example.com</div>
            <div>4339 Green Rd Great Falls, AL 66032</div>
            <div>DOB: Jul 28, 1990</div>
            <div>Customer since: Mar 9, 2012</div>
        </div> */

// location.street
// location.city.state.postcode
function buildCustomers(customerArray) {
    for (let customer of customerArray) {
        //create a div container for each box
        let box = document.createElement('div')
        //assign it the class of customerCard
        box.classList.add("customerCard")
        //create div for photo and add to box
        let photo = document.createElement('img')
        photo.src = customer.picture.large
        box.appendChild(photo)
        //create div for name and add to box
        let customerName = document.createElement('h3')
        customerName.innerText = (customer.name.first + " " + customer.name.last)
        customerName.classList.add("name")
        box.appendChild(customerName)
        customerContainer.appendChild(box)
        //create div for email and add to box
        let custEmail = document.createElement('div')
        custEmail.classList.add("email")
        custEmail.innerText = customer.email
        box.appendChild(custEmail)
        //create div for address and add to box
        let custAddress = document.createElement('div')
        custAddress.innerText = `${customer.location.street.number} ${customer.location.street.name} \n ${customer.location.city}, ${nameToAbbr(customer.location.state)} ${customer.location.postcode}`
        custAddress.classList.add("address")
        box.appendChild(custAddress)
        //create div for birthdate and add to box
        let birthdate = document.createElement('div')
        birthdate.innerText = `DOB: ${moment(customer.dob.date).format("ll")}`
        box.appendChild(birthdate)
        //create div for registration date and add to box
        let customerSince = document.createElement('div')
        customerSince.innerText = `Customer since: ${moment(customer.registered.date).format('ll')}`
        box.appendChild(customerSince)
    }
}
buildCustomers(customers)