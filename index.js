document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resumeForm");
    var resumePreview = document.getElementById("resumePreview");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        // Get form values
        var name = document.getElementById("name").value;
        var jobTitle = document.getElementById("jobTitle").value;
        var phone = document.getElementById("phone").value;
        var email = document.getElementById("email").value;
        var address = document.getElementById("address").value;
        var education = document.getElementById("education").value;
        var skills = document.getElementById("skills").value;
        var summary = document.getElementById("summary").value;
        var experience = document.getElementById("experience").value;
        // Populate the resume template
        var resumeName = document.getElementById("resumeName");
        var resumeJobTitle = document.getElementById("resumeJobTitle");
        var resumePhone = document.getElementById("resumePhone");
        var resumeEmail = document.getElementById("resumeEmail");
        var resumeAddress = document.getElementById("resumeAddress");
        var resumeEducation = document.getElementById("resumeEducation");
        var resumeSummary = document.getElementById("resumeSummary");
        var resumeExperience = document.getElementById("resumeExperience");
        var resumeSkills = document.getElementById("resumeSkills");
        if (resumeName)
            resumeName.textContent = name;
        if (resumeJobTitle)
            resumeJobTitle.textContent = jobTitle;
        if (resumePhone)
            resumePhone.textContent = phone;
        if (resumeEmail)
            resumeEmail.textContent = email;
        if (resumeAddress)
            resumeAddress.textContent = address;
        if (resumeEducation)
            resumeEducation.innerHTML = education.replace(/\n/g, "<br>");
        if (resumeSummary)
            resumeSummary.textContent = summary;
        if (resumeExperience)
            resumeExperience.innerHTML = experience.replace(/\n/g, "<br>");
        // Update skills list
        if (resumeSkills) {
            resumeSkills.innerHTML = skills
                .split(",")
                .map(function (skill) { return "<li>".concat(skill.trim(), "</li>"); })
                .join("");
        }
        // Show the resume preview
        if (resumePreview) {
            resumePreview.style.display = "block";
        }
    });
});
