const LinksSocialMidia = {
  github: 'andrelonr5',
  youtube: 'channel/',
  facebook: 'andrelon.brito',
  instagram: 'andre_lonbrito',
  twitter: 'andrelonbrito'
}
function chageSocialMdediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMidia[social]}`
  }
}

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMidia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      UserImage.src = data.avatar_url
      userLogin.textContent = data.login
    })
}

getGitHubProfileInfos()
