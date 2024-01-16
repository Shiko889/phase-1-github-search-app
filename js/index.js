// Assuming your HTML has an element with id 'github-form'
let form = document.getElementById('github-form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Correcting the typo in 'document' and 'getElementById'
  let search = document.getElementById('search').value;

  // Remove spaces in between when searching for two names
  let realName = search.split(' ').join('');

  fetch(`https://api.github.com/users/${realName}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('User not found');
      }
      return response.json();
    })
    .then((data) => {
      console.log(data);
      // Correcting the typos in the HTML and creating a link to the user's GitHub profile
      let repoLink = `<a target="_blank" href="https://github.com/${realName}"><img src="${data.avatar_url}" alt="Avatar" placeholder="Open my repos"/>`;

      // Correcting the typo in 'innerHTML'
      document.getElementById('response').innerHTML = repoLink;
    })
    .catch((error) => {
      console.error(error.message);
      // Handle error, e.g., display a user-friendly message to the user
    });
});
