const EMAIL_API_URL = "https://flynn.boolean.careers/exercises/api/random/mail";

const emailsContainer = document.querySelector(".emails__container");

const renderEmails = (emails) => {
  emailsContainer.innerHTML = "";

  emails.forEach(
    (email) =>
      (emailsContainer.innerHTML += `<li class="list-item">${email}</li>`)
  );
};

const generateEmails = async (length = 1) => {
  let emails = Array.from(
    { length },
    async (_) => (await axios.get(EMAIL_API_URL)).data.response
  );

  emails = await Promise.all(emails);

  renderEmails(emails);
};

const genEmailsBtn = document.getElementById("generateEmails");

genEmailsBtn.addEventListener("click", () => generateEmails(10));
