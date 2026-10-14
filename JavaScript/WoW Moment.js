// 1. Email Validation
function validateEmail(executionContext) {

    var formContext = executionContext.getFormContext();

    var email = formContext.getAttribute("ns_emailaddress").getValue();

    if (email && email.toLowerCase().endsWith("@nsquarexperts.com")) {

        alert("Email address from @nsquarexperts.com is not allowed.");

        formContext.getAttribute("ns_emailaddress").setValue(null);
    }
}


// 2. Filter Shop based on Occasion
function filterShop(executionContext) {

    var formContext = executionContext.getFormContext();

    var shopControl = formContext.getControl("ns_shops");

    if (shopControl) {

        shopControl.addPreSearch(function () {

            var occasion =
                formContext.getAttribute("ns_occasion").getValue();

            if (occasion != null) {

                var filter =
                    "<filter type='and'>" +
                    "<condition attribute='ns_eventsorganizedhere' operator='eq' value='" +
                    occasion +
                    "' />" +
                    "</filter>";

                shopControl.addCustomFilter(filter);
            }
        });
    }
}

// 3. Clear and Lock Shop
function occasionChange(executionContext) {

    var formContext = executionContext.getFormContext();

    var occasion =
        formContext.getAttribute("ns_occasion").getValue();

    if (occasion == null) {

        formContext.getAttribute("ns_shops").setValue(null);

        formContext.getControl("ns_shops").setDisabled(true);
    }
    else {

        formContext.getControl("ns_shops").setDisabled(false);
    }
}


// 4. Spouse Name Visibility
function spouseVisibility(executionContext) {

    var formContext = executionContext.getFormContext();

    var occasion =
        formContext.getAttribute("ns_occasion").getValue();

    // Replace with actual Wedding Shoot value
    if (occasion == 125010002) {

        formContext.getControl("ns_spousename").setVisible(true);

        formContext.getAttribute("ns_spousename")
            .setRequiredLevel("required");
    }
    else {

        formContext.getControl("ns_spousename").setVisible(false);

        formContext.getAttribute("ns_spousename")
            .setRequiredLevel("none");

        formContext.getAttribute("ns_spousename")
            .setValue(null);
    }
}


// 5. Lock Fields
function lockFields(executionContext) {

    var formContext = executionContext.getFormContext();

    var approval =
        formContext.getAttribute("ns_managementapproval").getValue();

    if (approval != null) {

        formContext.getControl("ns_title").setDisabled(true);
        formContext.getControl("ns_firstname").setDisabled(true);
        formContext.getControl("ns_lastname").setDisabled(true);
        formContext.getControl("ns_emailaddress").setDisabled(true);
        formContext.getControl("ns_mobilenumber").setDisabled(true);
        formContext.getControl("ns_occasion").setDisabled(true);
        formContext.getControl("ns_shops").setDisabled(true);
        formContext.getControl("ns_wowmomentdate").setDisabled(true);
    }
}


// 6. Wow Moment Date Validation
function validateDate(executionContext) {

    var formContext = executionContext.getFormContext();
    var eventArgs = executionContext.getEventArgs();

    var wowDate =
        formContext.getAttribute("ns_wowmomentdate").getValue();

    if (wowDate == null)
        return;

    wowDate.setHours(0, 0, 0, 0);

    var today = new Date();
    today.setHours(0, 0, 0, 0);

    var minDate = new Date(today);
    minDate.setDate(today.getDate() + 2);

    var maxDate = new Date(today);
    maxDate.setDate(today.getDate() + 180);

    if (wowDate < minDate || wowDate > maxDate) {

        alert("Wow Moment Date must be between 2 and 180 days from today.");

        eventArgs.preventDefault();
    }
}


// 7. First Name Validation
function validateFirstName(executionContext) {

    var formContext = executionContext.getFormContext();

    var firstName =
        formContext.getAttribute("ns_firstname").getValue();

    var regex = /^[A-Za-z-]{2,}$/;

    if (firstName && !regex.test(firstName)) {

        alert("Invalid First Name");

        formContext.getAttribute("ns_firstname")
            .setValue(null);
    }
}


// 7. Last Name Validation
function validateLastName(executionContext) {

    var formContext = executionContext.getFormContext();

    var lastName =
        formContext.getAttribute("ns_lastname").getValue();

    var regex = /^[A-Za-z-]{2,}$/;

    if (lastName && !regex.test(lastName)) {

        alert("Invalid Last Name");

        formContext.getAttribute("ns_lastname")
            .setValue(null);
    }
}


// 8. Mobile Validation
function validateMobile(executionContext) {

    var formContext = executionContext.getFormContext();

    var mobile =
        formContext.getAttribute("ns_mobilenumber").getValue();

    var regex = /^\+91\d{10}$/;

    if (mobile && !regex.test(mobile)) {

        alert("Invalid Mobile Number");

        formContext.getAttribute("ns_mobilenumber")
            .setValue(null);
    }
}


// 9. Rejection Remarks Validation
function rejectionRemarks(executionContext) {

    var formContext = executionContext.getFormContext();

    var approval =
        formContext.getAttribute("ns_managementapproval").getValue();

    // Replace with actual Rejected value
    if (approval == 125010002) {

        formContext.getControl("ns_details")
            .setVisible(true);

        formContext.getAttribute("ns_details")
            .setRequiredLevel("required");
    }
    else {

        formContext.getControl("ns_details")
            .setVisible(false);

        formContext.getAttribute("ns_details")
            .setRequiredLevel("none");

        formContext.getAttribute("ns_details")
            .setValue(null);
    }
}