var bio={
    "name":"Ali Sassi",
    "role":"Web Application Test Analyst",
    "contacts":{
      "mobile":"123-456-7890",
      "email":"first.last@gmail.com",
      "github":"alisassi1208",
      "twitter":"@IdontHaveAnAccount",
      "born": "Casablanca, Morocco",
      "location": "Winter Park, FL"
    },
    "welcomeMessage":"I am working as a Web Application Test Analyst at AT&T, Inc. in Orlando, FL",
    "skills":["Quality Assurane", "Mobile device Expert", "Speak three languages", "Enjoy the outdoors!!", "Saving the World", "Love watching sport & movies", "Enjoy eating awesome food"],
    "biopic":"images/fry.jpg"
}

var education = {
	"schools": [
    { "name": "ENSISA",
      "location": "Mulhouse, France",
      "degree": "Masters",
      "major": "Electrical and Control Engineering",
      "dates": "2003 - 2007",
      "url": "http://www.ensisa.uha.fr/?lg=en"
    }  
  ],
  "onlineClasses": [
    { "title": "Intro to jQuery",
      "school": "Udacity",
      "date": "April 2015",
      "url": "https://www.udacity.com/course/viewer#!/c-ud245-nd/l-3314378535/m-3316638682"
    },
    { "title": "Javascript Basics",
      "school": "Udacity",
      "date": "April 2015",
      "url": "https://www.udacity.com/course/viewer#!/c-ud804-nd/l-1946788554/m-2550568535"
    },
    { "title": "Responsive Images",
      "school": "Udacity",
      "date": "March 2015",
      "url": "https://www.udacity.com/course/viewer#!/c-ud882-nd/l-3532609279/m-3916878757"
    },  
    { "title": "Responsive Web Design Fundamentals",
      "school": "Udacity",
      "date": "March 2015",
      "url": "https://www.udacity.com/course/viewer#!/c-ud893-nd/l-3523969367/m-3551129148"
    },
    { "title": "Intro to HTML and CSS",
      "school": "Udacity",
      "date": "March 2015",
      "url": "https://www.udacity.com/course/viewer#!/c-ud304-nd/l-2617868617/m-2698138588"
    }
  ]
}

var work = {
	"jobs": [
	{
		"employer": "AT&T",
     	"title": "Web Application Test Analyst",
     	"location": "Orlando, FL",
      	"dates": "January 2013 - Current",
      	"description": "Work within a Software Development Lifecycle environment HP Quality Center, and JIRA for test management, reporting and defect tracking of New Enhancement as well as regression within an Agile environment.",
      	"url": "http://www.att.com"
    },
	{
		"employer": "Joann Fabrics",
      	"title": "Customer Service",
      	"location": "Orlando, FL",
      	"dates": "September 2011 - December 2012",
      	"description": "Deliver products in a way that allows the customer to access them in the most efficient, fair and cost effective.",
      	"url": "http://www.joann.com/"
	},
	{
		"employer": "KEP Technologies",
      	"title": "Internship",
      	"location": "Nancy, France",
      	"dates": "February 2007 - September 2007",
      	"description": "Design a new computer assisted manufacturing ERP (Enterprise Resource Planning) under SILOG. The development encompassed meeting the needs of all employment entities within the company, starting with the ordering of the product by the client until its forwarding, while passing by the various stages of manufacture.",
      	"url": "http://www.kep-technologies.com/"
	}
	]
}

var projects = {
	"projects": [
	{
		"title": "Portfolio Site",
      	"dates": "April 2015",
      	"description": "Build a Portfolio site as part of Udacity's Front-End Web Developer Nanodegree.",
      	"images": "images/portfoliosite.jpg",
      	"url": "https://www.udacity.com/course/viewer/#!/c-nd001/l-2736698543/m-2654108573"
	},
	{
		"title": "Intro HTML5 Hello World",
      	"dates": "March 2015",
      	"description": "Write HelloWorld in red font using HTML and CSS.",
      	"images": "images/helloworld.jpg",
      	"url": "https://www.udacity.com/course/viewer/#!/c-nd001/l-3747478668"
	}
	]
}

bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	for (contact in bio.contacts) {
    var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[contact]);
    formattedContact = formattedContact.replace("%contact%", contact);
    $("#topContacts").append(formattedContact);
  	}

	var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);
	$("#header").append(formattedBioPic);
	$("#header").append(formattedWelcomeMsg);

	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
	
		for(skill in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);
			$("#skills").append(formattedSkill);
		}
	}

	for (contact in bio.contacts) {
    var formattedContact = HTMLcontactGeneric.replace("%data%", bio.contacts[contact]);
    formattedContact = formattedContact.replace("%contact%", contact);
    $("#footerContacts").append(formattedContact);
  	}
}

bio.display();

work.display = function() {
	for (job in work.jobs){
		$("#workExperience").append(HTMLworkStart);
	
		var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer).replace("#", work.jobs[job].url);
		var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);		
		var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
		var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);
		$(".work-entry:last").append(formattedLocation);		
		$(".work-entry:last").append(formattedDates);		
		$(".work-entry:last").append(formattedDescription);
	}
}

work.display();

projects.display = function() {
	for (project in projects.projects) {
		$("#projects").append(HTMLprojectStart);
		
		var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title).replace("#", projects.projects[project].url);
		var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);

		$(".project-entry:last").append(formattedTitle);	
		$(".project-entry:last").append(formattedDates);	
		$(".project-entry:last").append(formattedDescription);	
		$(".project-entry:last").append(formattedImage);	
	}
}

projects.display();

education.display = function() {
	for (schl in education.schools) {
		$("#education").append(HTMLschoolStart);
			
		var formattedSchool = HTMLschoolName.replace("%data%", education.schools[schl].name).replace("#", education.schools[schl].url);
		var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[schl].degree);			
		var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[schl].location);
		var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[schl].dates);
		var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[schl].major);
		var formattedSchoolDegree = formattedSchool + formattedDegree;

		$(".education-entry:last").append(formattedSchoolDegree);			
		$(".education-entry:last").append(formattedSchoolLocation);			
		$(".education-entry:last").append(formattedSchoolDates);			
		$(".education-entry:last").append(formattedSchoolMajor);
	}

	$("#education").append(HTMLonlineClasses);
	for(onln in education.onlineClasses) {	
		$("#education").append(HTMLschoolStart);

		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[onln].title).replace("#", education.onlineClasses[onln].url);
		var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[onln].school);
		var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineClasses[onln].date);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", education.onlineClasses[onln].url).replace("#", education.onlineClasses[onln].url);
		var formattedOnlineTitleSchool = formattedOnlineTitle + formattedOnlineSchool;

		$(".education-entry:last").append(formattedOnlineTitleSchool);
		$(".education-entry:last").append(formattedOnlineDates);
		$(".education-entry:last").append(formattedOnlineURL);
	}

}

education.display();

$("#mapDiv").append(googleMap);