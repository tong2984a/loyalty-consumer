Survey
    .StylesManager
    .applyTheme("modern");

var json = {
 "pages": [
  {
   "name": "page1",
   "elements": [
    {
     "type": "text",
     "name": "storeName",
     "title": "Enter store name to send a Data Access Request to",
     "isRequired": true
    },
    {
     "type": "html",
     "name": "question3",
     "html": "\n            <div id=\"dsar\" class=\"card card-signin flex-row my-5\">\n              <div class=\"card-img-left d-none d-md-flex\">\n                <!-- Background image for card set in CSS! -->\n              </div>\n              <div class=\"card-body\">\n                <h5 class=\"card-title text-center\">Opt-Out Request</h5>\n                <form class=\"form-signin\">\n                  <div class=\"form-label-group\">\n                    <input type=\"text\" id=\"inputUserame\" class=\"form-control\" placeholder=\"Username\" required autofocus>\n                    <label for=\"inputUserame\">Username</label>\n                  </div>\n\n                                    <hr>\n\n                  <div class=\"form-label-group\">\n                    <input type=\"email\" id=\"inputEmail\" class=\"form-control\" placeholder=\"Email address\" required>\n                    <label for=\"inputEmail\">Email</label>\n                  </div>\n\n                  <div class=\"form-label-group\">\n                    <input type=\"password\" id=\"inputPassword\" class=\"form-control\" placeholder=\"Password\" required>\n                    <label for=\"inputPassword\">Phone</label>\n                  </div>\n\n                  <div class=\"form-label-group\">\n                    <input type=\"password\" id=\"inputConfirmPassword\" class=\"form-control\" placeholder=\"Password\" required>\n                    <label for=\"inputConfirmPassword\">Mailing address</label>\n                  </div>\n\n                                    <hr class=\"my-4\">\n                  <button class=\"btn btn-lg btn-google btn-block text-uppercase\" type=\"submit\"><i class=\"fab fa-google mr-2\"></i> Sign in with Google</button>\n                  <button class=\"btn btn-lg btn-facebook btn-block text-uppercase\" type=\"submit\"><i class=\"fab fa-facebook-f mr-2\"></i> Sign in with Facebook</button>\n                </form>\n              </div>\n            </div>"
    }
   ],
   "title": "Consumer AI"
  },
  {
   "name": "page2",
   "elements": [
    {
     "type": "expression",
     "name": "question1",
     "title": "The AI cannot find any matching Privacy Notice from {storeName} in your event history",
     "description": "Click 'Next' to send a data access request to {storeName}",
     "descriptionLocation": "underInput"
    }
   ]
  },
  {
   "name": "page3",
   "elements": [
    {
     "type": "expression",
     "name": "question2",
     "title": "Click 'Next' to enter the data access request into your event history."
    }
   ]
  },
  {
   "name": "page4",
   "elements": [
    {
     "type": "expression",
     "name": "question8",
     "title": "This completes the data access request. The AI has added 1 action item to your event history.",
     "description": "Ordinance requires a response from {storeName} within 40 days. I will now add {storeName} to your watch list. The watch list will remind you to expect a response from {storeName} in 40 days.",
     "descriptionLocation": "underInput"
    }
   ]
  }
 ]
};

window.survey = new Survey.Model(json);

survey
.onComplete
.add(function (sender) {
  //$.post(`/survey/suppliers`, {results: JSON.stringify(sender.data, null, 3)}, function(data, status) {
    document
    .querySelector('#surveyResult')
    .textContent = ``;
  //})
});

survey.render("surveyElement");
