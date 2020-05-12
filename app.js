var line1 = "Name: Maggie Thompson"
console.log(line1.toUpperCase(line1));
console.log("Career: NonProfit Program Assistant");
console.log("Description: I am often thinking of the Big Picture. However, my attention to detail allows me to find creative ways to reach my goals and solve problems.");
console.log("My Interests:")
console.log("* Community");
console.log("* Inclusivity");
console.log("* Women's Rights");
console.log("My Previous Experience:");
let experience = [ 
    {
        title: "* Program Assistant",
        company: "GirlSpring",
        duties: "- Assists with all aspects of GirlSpring",
    },
    {
        title: "* Event Coordinator",
        company: " R&R Events",
        duties: " - Established order of sales operations and assisted with the revival of business and client relations within the community",
    }];
function displayPosition(title, company, duties) {
    console.log(title + " at " + company + duties);
};
displayPosition(experience[0].title, experience[0].company, experience[0].duties);
displayPosition(experience[1].title, experience[1].company, experience[1].duties);
console.log("My Skills:");
let skills = [
    {
        skillname: "Search Engine Optimization",
        val: "true", 
    },
    {
        skillname: "Wordpress",
        val: "false",
    },
    {
        skillname: "Fundraising",
        val: "false",
    },
    {
        skillname: "Donor Relations",
        val: "true",
    },
    {
        skillname: "Tap Dancing",
        val: "true",
    }];
function displaySkills(skillname, val) {
    if (val == "true") {
        console.log("*BAM: " + skillname)
    } else {
        console.log("*" + skillname)    
    }};
displaySkills(skills[0].skillname, skills[0].val);
displaySkills(skills[1].skillname, skills[1].val);
displaySkills(skills[2].skillname, skills[2].val);
displaySkills(skills[3].skillname, skills[3].val);
displaySkills(skills[4].skillname, skills[4].val);