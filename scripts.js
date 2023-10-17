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
        let box = document.createElement('div')
        let photo = document.createElement('img')
        photo.src = customer.picture.medium
        box.appendChild(photo)
        box.classList.add("customerCard")
        let customerName = document.createElement('h3')
        customerName.innerText = (customer.name.first + " " + customer.name.last)
        box.appendChild(customerName)
        customerContainer.appendChild(box)
        let custEmail = document.createElement('div')
        custEmail.innerText = customer.email
        box.appendChild(custEmail)
        let custAddress = document.createElement('div')
        custAddress.innerText = (customer.location.street.number + " " + customer.location.street.name + " " + customer.location.city)
        box.appendChild(custAddress)
    }
}
buildCustomers(customers)