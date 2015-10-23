module.exports = [
{
  request: {
             path: 'https://api.github.com/search/users',
             method: 'GET'
           },
  response: {
    data: {
      "total_count": 1,
      "incomplete_results": false,
      "items": [
        {
          "login": "spikezilla",
          "id": 7307631,
          "avatar_url": "https://avatars.githubusercontent.com/u/7307631?v=3",
          "gravatar_id": "",
          "url": "https://api.github.com/users/spikezilla",
          "html_url": "https://github.com/spikezilla",
          "followers_url": "https://api.github.com/users/spikezilla/followers",
          "following_url": "https://api.github.com/users/spikezilla/following{/other_user}",
          "gists_url": "https://api.github.com/users/spikezilla/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/spikezilla/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/spikezilla/subscriptions",
          "organizations_url": "https://api.github.com/users/spikezilla/orgs",
          "repos_url": "https://api.github.com/users/spikezilla/repos",
          "events_url": "https://api.github.com/users/spikezilla/events{/privacy}",
          "received_events_url": "https://api.github.com/users/spikezilla/received_events",
          "type": "User",
          "site_admin": false,
          "score": 91.97505
        }
      ]
    }
  }
}
]
