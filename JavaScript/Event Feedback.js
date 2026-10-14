//phase 10 validations 
function customerRatingChange(executionContext) {

    var formContext = executionContext.getFormContext();

    var rating = formContext.getAttribute("ns_customerrating").getValue();

    if (rating == 125010000 || rating == 125010001) {

        formContext.getAttribute("ns_feedbackcomments")
            .setRequiredLevel("required");
    }
    else {

        formContext.getAttribute("ns_feedbackcomments")
            .setRequiredLevel("none");
    }

}

//phase 11 validations 
function followUpChange(executionContext) {

    var formContext = executionContext.getFormContext();

    var followUp = formContext.getAttribute("ns_followuprequired").getValue();

    if (followUp == true) {

        formContext.getControl("ns_followupremarks")
            .setVisible(true);

        formContext.getAttribute("ns_followupremarks")
            .setRequiredLevel("required");
    }
    else {

        formContext.getControl("ns_followupremarks")
            .setVisible(false);

        formContext.getAttribute("ns_followupremarks")
            .setRequiredLevel("none");

        formContext.getAttribute("ns_followupremarks")
            .setValue(null);
    }
}