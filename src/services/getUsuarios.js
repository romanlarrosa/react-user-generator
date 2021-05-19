const apiURL = "https://randomuser.me/api/"

export default function getUsuarios(numUsers = 25) {
  return fetch(apiURL + `?results=${numUsers}`)
    .then((res) => res.json())
    .then((response) => {
      const { results = [] } = response
      if (Array.isArray(results)) {
        return results.map((singleResult) => {
          const username = singleResult.name.first
          const { gender, email } = singleResult
          const avatar = singleResult.picture.large
          const id = singleResult.login.uuid
          return { username, gender, email, avatar, id }
        })
      }
    })
}
