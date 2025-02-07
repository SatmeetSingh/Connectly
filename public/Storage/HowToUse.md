### 8. **How to Use Them**:

Now that we’ve covered the benefits, losses, and key features of each storage type, let's look at how you can use these storage mechanisms in your projects. Here are brief examples of how to implement each of the five types of storage in JavaScript.

---

#### **1. LocalStorage**:

LocalStorage allows you to store data as key-value pairs in the browser. It’s simple to use and provides persistent storage.

##### **Usage**:

- **Setting Data**:

  ```javascript
  localStorage.setItem('username', 'JohnDoe');
  ```

- **Getting Data**:

  ```javascript
  const username = localStorage.getItem('username');
  console.log(username); // JohnDoe
  ```

- **Removing Data**:

  ```javascript
  localStorage.removeItem('username');
  ```

- **Clearing All Data**:
  ```javascript
  localStorage.clear();
  ```

##### **Real-time Example**:

- Storing a user's theme preference (dark/light mode) across sessions.

```javascript
// Save user preference for theme
localStorage.setItem('theme', 'dark');

// Retrieve and apply theme on page load
const theme = localStorage.getItem('theme');
if (theme === 'dark') {
  document.body.classList.add('dark-theme');
}
```

---

#### **2. SessionStorage**:

SessionStorage behaves similarly to LocalStorage but is scoped to a single session (tab/window). Once the tab is closed, the data is cleared.

##### **Usage**:

- **Setting Data**:

  ```javascript
  sessionStorage.setItem('sessionID', '12345');
  ```

- **Getting Data**:

  ```javascript
  const sessionID = sessionStorage.getItem('sessionID');
  console.log(sessionID); // 12345
  ```

- **Removing Data**:

  ```javascript
  sessionStorage.removeItem('sessionID');
  ```

- **Clearing All Data**:
  ```javascript
  sessionStorage.clear();
  ```

##### **Real-time Example**:

- Storing a shopping cart in a single session.

```javascript
// Store cart items in session
sessionStorage.setItem('cart', JSON.stringify(['item1', 'item2']));

// Retrieve cart items from session and display them
const cart = JSON.parse(sessionStorage.getItem('cart'));
console.log(cart); // ['item1', 'item2']
```

---

#### **3. Cookies**:

Cookies are key-value pairs that are sent with each HTTP request. They have an expiration time and are commonly used for session management.

##### **Usage**:

- **Setting Data**:

  ```javascript
  document.cookie =
    'user=JohnDoe; expires=Thu, 31 Dec 2025 12:00:00 UTC; path=/';
  ```

- **Getting Data**:

  ```javascript
  const cookies = document.cookie;
  console.log(cookies); // user=JohnDoe; sessionID=12345
  ```

- **Removing Data**:
  ```javascript
  document.cookie = 'user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
  ```

##### **Real-time Example**:

- Storing a user's login session using cookies.

```javascript
// Set cookie for sessionID
document.cookie =
  'sessionID=abcd1234; expires=Thu, 31 Dec 2025 12:00:00 UTC; path=/';

// Retrieve sessionID cookie
const cookies = document.cookie.split(';');
const sessionCookie = cookies.find((cookie) =>
  cookie.trim().startsWith('sessionID=')
);
const sessionID = sessionCookie ? sessionCookie.split('=')[1] : null;
console.log(sessionID); // abcd1234
```

---

#### **4. IndexedDB**:

IndexedDB allows you to store large amounts of structured data, including files and media, and supports complex queries and transactions.

##### **Usage**:

- **Opening a Database**:

  ```javascript
  const request = indexedDB.open('MyDatabase', 1);

  request.onsuccess = function (event) {
    const db = event.target.result;
    console.log('Database opened successfully');
  };

  request.onerror = function (event) {
    console.log('Error opening database', event);
  };
  ```

- **Creating an Object Store**:

  ```javascript
  const request = indexedDB.open('MyDatabase', 1);

  request.onupgradeneeded = function (event) {
    const db = event.target.result;
    if (!db.objectStoreNames.contains('users')) {
      db.createObjectStore('users', { keyPath: 'id' });
    }
  };
  ```

- **Adding Data**:
  ```javascript
  const db = event.target.result;
  const transaction = db.transaction('users', 'readwrite');
  const store = transaction.objectStore('users');
  const user = { id: 1, name: 'John Doe' };
  store.add(user);
  ```

##### **Real-time Example**:

- Creating an offline-enabled app that stores user data locally.

```javascript
// Open database
const request = indexedDB.open('UserDB', 1);

request.onupgradeneeded = function (event) {
  const db = event.target.result;
  if (!db.objectStoreNames.contains('users')) {
    db.createObjectStore('users', { keyPath: 'id' });
  }
};

// Add a new user
const addUser = (user) => {
  const db = request.result;
  const transaction = db.transaction('users', 'readwrite');
  const store = transaction.objectStore('users');
  store.add(user);
};

addUser({ id: 1, name: 'Alice' });
```

---

#### **5. Cache API**:

The Cache API allows you to store network responses, so you can serve them offline or speed up loading times by using cached assets.

##### **Usage**:

- **Open a Cache**:

  ```javascript
  caches.open('my-cache').then((cache) => {
    console.log('Cache opened');
  });
  ```

- **Add Items to Cache**:

  ```javascript
  caches.open('my-cache').then((cache) => {
    cache.addAll(['/index.html', '/style.css', '/app.js']);
  });
  ```

- **Retrieve Items from Cache**:
  ```javascript
  caches.match('/index.html').then((response) => {
    if (response) {
      console.log('Found in cache:', response);
    }
  });
  ```

##### **Real-time Example**:

- Caching static assets for a PWA to function offline.

```javascript
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('my-cache').then((cache) => {
      return cache.addAll(['/index.html', '/styles.css', '/script.js']);
    })
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});
```

---

### Summary:

| **Storage Type**   | **How to Use**                                                                                                 |
| ------------------ | -------------------------------------------------------------------------------------------------------------- |
| **LocalStorage**   | `localStorage.setItem('key', 'value')`, `localStorage.getItem('key')`, `localStorage.removeItem('key')`        |
| **SessionStorage** | `sessionStorage.setItem('key', 'value')`, `sessionStorage.getItem('key')`, `sessionStorage.removeItem('key')`  |
| **Cookies**        | `document.cookie = 'key=value; expires=...; path=/'`, Retrieve cookies with `document.cookie`                  |
| **IndexedDB**      | Open database with `indexedDB.open()`, create object stores, and add data using transactions.                  |
| **Cache API**      | Open cache with `caches.open()`, cache assets with `cache.addAll()`, retrieve from cache with `caches.match()` |

---
