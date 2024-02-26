const form = document.querySelector("form");
const subscribeButton = document.querySelector(".subscribe_button");
const emailInput = document.querySelector(".email_input");
const emailErrorMessage = document.querySelector(".email_error_message");
const newsletterComponent = document.querySelector(".newsletter_component");
const subscriptionSuccessfulContainer = document.querySelector(
  ".subscription_successful_container"
);

const dismissThankyouMessage = document.querySelector(
  ".dismiss_message_button"
);

const emailRegex = "/^([a-zd.-]+)@([a-zd-]+).([a-z]{2,8})(.[a-z]{2,8})?$/";

function emailValidation() {
  if (
    !emailInput.value.match(
      /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/
    ) &&
    emailInput.value !== ""
  ) {
    emailErrorMessage.innerHTML = "Valid email required";
    emailInput.classList.add("email_Input_error");
    return true;
  } else {
    emailErrorMessage.innerHTML = "";
    emailInput.classList.remove("email_Input_error");
    return false;
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  emailValidation();
  if (emailValidation) {
  }
  subscriptionSuccessfulContainer.classList.remove("hide");
  newsletterComponent.classList.add("hide");
  emailErrorMessage.innerHTML = "";
  emailInput.value = "";
});

dismissThankyouMessage.addEventListener("click", () => {
  subscriptionSuccessfulContainer.classList.add("hide");
  newsletterComponent.classList.remove("hide");
});
