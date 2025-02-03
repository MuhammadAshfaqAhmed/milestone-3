document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resumeForm") as HTMLFormElement;
    const resumePreview = document.getElementById("resumePreview") as HTMLDivElement;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        // Get form values
        const name = (document.getElementById("name") as HTMLInputElement).value;
        const jobTitle = (document.getElementById("jobTitle") as HTMLInputElement).value;
        const phone = (document.getElementById("phone") as HTMLInputElement).value;
        const email = (document.getElementById("email") as HTMLInputElement).value;
        const address = (document.getElementById("address") as HTMLInputElement).value;
        const education = (document.getElementById("education") as HTMLTextAreaElement).value;
        const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;
        const summary = (document.getElementById("summary") as HTMLTextAreaElement).value;
        const experience = (document.getElementById("experience") as HTMLTextAreaElement).value;

        // Populate the resume template
        const resumeName = document.getElementById("resumeName");
        const resumeJobTitle = document.getElementById("resumeJobTitle");
        const resumePhone = document.getElementById("resumePhone");
        const resumeEmail = document.getElementById("resumeEmail");
        const resumeAddress = document.getElementById("resumeAddress");
        const resumeEducation = document.getElementById("resumeEducation");
        const resumeSummary = document.getElementById("resumeSummary");
        const resumeExperience = document.getElementById("resumeExperience");
        const resumeSkills = document.getElementById("resumeSkills");

        if (resumeName) resumeName.textContent = name;
        if (resumeJobTitle) resumeJobTitle.textContent = jobTitle;
        if (resumePhone) resumePhone.textContent = phone;
        if (resumeEmail) resumeEmail.textContent = email;
        if (resumeAddress) resumeAddress.textContent = address;
        if (resumeEducation) resumeEducation.innerHTML = education.replace(/\n/g, "<br>");
        if (resumeSummary) resumeSummary.textContent = summary;
        if (resumeExperience) resumeExperience.innerHTML = experience.replace(/\n/g, "<br>");

        // Update skills list
        if (resumeSkills) {
            resumeSkills.innerHTML = skills
                .split(",")
                .map(skill => `<li>${skill.trim()}</li>`)
                .join("");
        }

        // Show the resume preview
        if (resumePreview) {
            resumePreview.style.display = "block";
        }
    });
});