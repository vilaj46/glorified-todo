import styles from "../AuthenticationPage.module.css";

/**
 * emphasizeUserErrorMessage
 *
 * @param {Number} time - The amount of time allowed between clicks.
 * @param {Hook} setLastClicked - The time we last click the login button.
 * @param {Number} usernameMessage - Index of the message we want to display.
 * @param {Date} lastClicked - Time of our last click.
 *
 * Will only do the animation if we are not spamming the login button.
 * Checks the difference in time, if it is too soon we don't emphasize.
 *
 * We are also removing the password bolding and email bolding because it was bugged
 * and bolding even if it was not an error.
 */
const emphasizeUserErrorMessage = (
  time,
  setLastClicked,
  usernameMessage,
  lastClicked
) => {
  if (Date.now() - time < lastClicked) return;
  setLastClicked(Date.now());
  const prevMessage = usernameMessage;
  if (usernameMessage > 0 && prevMessage === usernameMessage) {
    const element = document.getElementById("usernameId");
    const emailId = document.getElementById("emailId");
    const passwordId = document.getElementById("passwordId");
    passwordId.classList.remove("bold");
    emailId.classList.remove("bold");
    element.classList.add(styles.bold);
    setTimeout(() => {
      element.classList.remove(styles.bold);
    }, time);
  }
};

/**
 * emphasizePassErrorMessage
 *
 * @param {Number} time - The amount of time allowed between clicks.
 * @param {Hook} setLastClicked - The time we last click the login button.
 * @param {Number} passwordMessage - Index of the message we want to display.
 * @param {Date} lastClicked - Time of our last click.
 *
 * Will only do the animation if we are not spamming the login button.
 * Checks the difference in time, if it is too soon we don't emphasize.
 *
 * We are also removing the username bolding and email bolding because it was bugged
 * and bolding even if it was not an error.
 */
const emphasizePassErrorMessage = (
  time,
  setLastClicked,
  passwordMessage,
  lastClicked
) => {
  if (Date.now() - time < lastClicked) return;
  setLastClicked(Date.now());
  const prevMessage = passwordMessage;
  const usernameId = document.getElementById("usernameId");
  const emailId = document.getElementById("emailId");
  if (passwordMessage > 0 && prevMessage === passwordMessage) {
    const element = document.getElementById("passwordId");
    usernameId.classList.remove("bold");
    emailId.classList.remove("bold");
    element.classList.add(styles.bold);
    setTimeout(() => {
      element.classList.remove(styles.bold);
    }, time);
  }
};

/**
 * emphasizeEmailErrorMessage
 *
 * @param {Number} time - The amount of time allowed between clicks.
 * @param {Hook} setLastClicked - The time we last click the login button.
 * @param {Number} passwordMessage - Index of the message we want to display.
 * @param {Date} lastClicked - Time of our last click.
 *
 * Will only do the animation if we are not spamming the login button.
 * Checks the difference in time, if it is too soon we don't emphasize.
 *
 * We are also removing the username bolding and password bolding because it was bugged
 * and bolding even if it was not an error.
 */
const emphasizeEmailErrorMessage = (
  time,
  setLastClicked,
  emailMessage,
  lastClicked
) => {
  if (Date.now() - time < lastClicked) return;
  setLastClicked(Date.now());
  const prevMessage = emailMessage;
  const usernameId = document.getElementById("usernameId");
  const passwordId = document.getElementById("passwordId");
  if (emailMessage > 0 && prevMessage === emailMessage) {
    const element = document.getElementById("emailId");
    usernameId.classList.remove("bold");
    passwordId.classList.remove("bold");
    element.classList.add(styles.bold);
    setTimeout(() => {
      element.classList.remove(styles.bold);
    }, time);
  }
};

export default {
  userErrorMessage: emphasizeUserErrorMessage,
  passErrorMessage: emphasizePassErrorMessage,
  emailErrorMessage: emphasizeEmailErrorMessage,
};
