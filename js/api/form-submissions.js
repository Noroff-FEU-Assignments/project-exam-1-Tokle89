export async function formSubmission(event) {
  const formElement = event.target,
    { action, method } = formElement,
    body = new FormData(formElement);

  try {
    const respone = await fetch(action, {
      method,
      body,
    });
    const result = respone.json();
  } catch (error) {}
}
