if ('serviceWorker' in navigator) {
  window.addEventListener('load', () =>
      navigator.serviceWorker.register('serviceWorker.js')
  )
}

window.addEventListener('online', function () {
  document.querySelector('.connectivity-status').innerText = 'online'
})

window.addEventListener('offline', function () {
  document.querySelector('.connectivity-status').innerText = 'offline'
})

console.log(document.location.search)


if (window.matchMedia('(display-mode: standalone)').matches) {
  console.log("This is running as standalone.");
  navigator.registerProtocolHandler("web+pwa", "https://pwa-starter-kit.vercel.app/?query=%s", "Protocol handler")
} else {
  console.log("this is running in browser")
}