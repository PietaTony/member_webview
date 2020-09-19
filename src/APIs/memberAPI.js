const ip = '192.168.1.148';

export async function reqLogin({ email, password }) {
  let url = new URL('http://' + ip + ':8080/user/login');

  return fetch(url, {
    body: JSON.stringify({ email: email, password: password }),
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json',
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  })
    .then((res) => res.json())
    .catch((error) => console.error('Error:', error));
}

export async function reqNewUser({ email, password }) {
  let url = new URL('http://' + ip + ':8080/user');

  try {
    const res = await fetch(url, {
      body: JSON.stringify({ email: email, password: password }),
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
        'user-agent': 'Mozilla/4.0 MDN Example',
        'content-type': 'application/json',
      },
      method: 'POST',
      mode: 'cors',
      redirect: 'follow',
      referrer: 'no-referrer',
    });
    return await res.json();
  } catch (error) {
    return console.error('Error:', error);
  }
}

export async function forgetPassword({ email }) {
  let url = new URL('http://' + ip + ':8080/user/forget-password');

  return fetch(url, {
    body: JSON.stringify({ email: email }),
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json',
    },
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  })
    .then((res) => res.json())
    .catch((error) => console.error('Error:', error));
}

export async function updatePassword({ name, password }) {
  let url = new URL('http://' + ip + ':8080/user/password');
  // Object.keys(params).forEach((key) =>
  //   url.searchParams.append(key, params[key])
  // );identifying

  return fetch(url, {
    body: JSON.stringify({ name: name, password: password }),
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, same-origin, *omit
    headers: {
      'user-agent': 'Mozilla/4.0 MDN Example',
      'content-type': 'application/json',
    },
    method: 'PUT', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, cors, *same-origin
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // *client, no-referrer
  })
    .then((res) => res.json())
    .catch((error) => console.error('Error:', error));
}
