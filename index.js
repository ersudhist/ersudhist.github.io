document.getElementById("resume-link-1").addEventListener("click", () => {
    window.open(
      "https://drive.google.com/file/d/1jOx6OMQksGaXAv01TVGh1jIzNLIB0DBD/view?usp=sharing"
    );
  });
  
  document.getElementById("resume-link-2").addEventListener("click", () => {
    window.open(
      "https://drive.google.com/file/d/1jOx6OMQksGaXAv01TVGh1jIzNLIB0DBD/view?usp=sharing"
    );
  });
  
  let details = document.getElementsByClassName("skill-ed");
  let content = document.getElementsByClassName("contents");
  
  opentab = (name) => {
    for (detail of details) {
      detail.classList.remove("active");
    }
    for (con of content) {
      con.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active");
    document.getElementById(name).classList.add("active-tab");
  };
  
  let sidemenu = document.getElementById("sidemenu");
  
  openmenu = () => {
    sidemenu.style.right = "0";
  };
  
  closemenu = () => {
    sidemenu.style.right = "-200px";
  };
  
  const scriptURL =
    "https://getform.io/f/cf1da311-2ccf-400d-8f87-b150d9841021";
  const form = document.forms["submit-to-google-sheet"];
  const msg = document.getElementById("msg");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        msg.innerHTML = "Message Sent Successfully";
        setTimeout(() => {
          msg.innerHTML = "";
        }, 5000);
        form.reset();
      })
      .catch((error) => console.error("Error!", error.message));
  });
  
  window.addEventListener("scroll", function () {
    let nav = this.document.querySelector("nav");
    nav.classList.toggle("sticky", window.scrollY > 0);
  });
  
  let container = document.getElementById("skill_container");
  
  let skill_arr = [
    
    "./assets/html.png",
    "./assets/css.png",
    "./assets/js.png",
    "./assets/java.png",
    "./assets/MySql_Logo.png",
    "./assets/netlify.png",
    "./assets/git.png",
    "./assets/github.png",
    "./assets/Hibernate_Logo.png",
    "./assets/Maven_Logo.png",
    "./assets/dsa_logo.png",
    "./assets/Spring_Logo.png",
    "./assets/SpringBoot_Logo.png",
    "./assets/sts_logo.png",
    "./assets/postman.png",
    "./assets/swagger.png"
  ];
  let skill_name = [
    "HTML",
    "CSS",
    "JavaScript",
    "Java",
    "MySQL",
    "Netlify",
    "GIT",
    "GitHub",
    "Hibernate",
    "Maven",
    "DSA",
    "Spring",
    "Spring Boot",
    "STS",
    "Postman",
    "Swagger"
  ];
  let count = 0;
  AppendSkills = (arr) => {
    container.innerHTML = null;
    arr.forEach((ele) => {
      let div = document.createElement("div");
  
      div.classList.add("skills-card");
  
      let img = document.createElement("img");
      img.src = ele;
      img.classList.add("skills-card-img");
  
      let name = document.createElement("h2");
      name.classList.add("skills-card-name");
  
      name.innerText = skill_name[count];
      name.style.color = "white";
      count++;
      div.append(img, name);
      container.append(div);
    });
  };
  
  window.addEventListener("load", () => {
    AppendSkills(skill_arr);
  });
  
  //https://drive.google.com/file/d/1jOx6OMQksGaXAv01TVGh1jIzNLIB0DBD/view?usp=sharing 