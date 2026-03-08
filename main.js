// ================================================================
// ASSEED LP — main.js
// ================================================================

// ========== UTM Parameter Preservation ==========
;(function () {
  var params = new URLSearchParams(location.search)
  ;['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(function (key) {
    var val = params.get(key)
    if (val) sessionStorage.setItem(key, val)
  })
})()

// ========== Scroll Fade-in Animations ==========
var fadeObserver = new IntersectionObserver(
  function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
        fadeObserver.unobserve(entry.target)
      }
    })
  },
  { threshold: 0.12, rootMargin: '0px 0px -30px 0px' }
)

// Apply fade-in to sections, stories, therapists, flow steps, etc.
document.querySelectorAll([
  '.section',
  '.story',
  '.therapist',
  '.hero__stat-card',
  '.hero__authority',
  '.hero__cta',
  '.empathy__list li',
  '.why__col',
  '.why__result-box',
  '.flow__steps li',
  '.final-push__item',
  '.price-card',
  '.pricing__value',
  '.booking__line',
  '.salon-space__hero',
  'details'
].join(',')).forEach(function (el) {
  el.classList.add('fade-in')
  fadeObserver.observe(el)
})

// ========== Fixed CTA (mobile) ==========
// Show after scrolling past hero, hide near booking section
var fixedCta = document.querySelector('.fixed-cta')
var heroEl = document.getElementById('hero')
var bookingEl = document.getElementById('booking')

if (fixedCta && heroEl) {
  window.addEventListener('scroll', function () {
    var scrollY = window.scrollY
    var pastHero = scrollY > (heroEl.offsetTop + heroEl.offsetHeight - 100)
    var nearBooking = bookingEl ? scrollY > (bookingEl.offsetTop - window.innerHeight) : false
    fixedCta.classList.toggle('visible', pastHero && !nearBooking)
  }, { passive: true })
}

// ========== Smooth scroll for anchor links ==========
document.querySelectorAll('a[href^="#"]').forEach(function (link) {
  link.addEventListener('click', function (e) {
    var target = document.querySelector(link.getAttribute('href'))
    if (target) {
      e.preventDefault()
      var headerHeight = document.querySelector('.header') ? document.querySelector('.header').offsetHeight : 0
      var top = target.getBoundingClientRect().top + window.scrollY - headerHeight
      window.scrollTo({ top: top, behavior: 'smooth' })
    }
  })
})

// ========== formrun Lazy Load ==========
;(function () {
  var formContainer = document.getElementById('formrun-embed')
  if (!formContainer) return

  var formObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          loadFormrun(formContainer)
          formObserver.unobserve(formContainer)
        }
      })
    },
    { rootMargin: '400px' }
  )
  formObserver.observe(formContainer)

  function loadFormrun(container) {
    var formUrl = 'https://form.run/embed/@info-1638325946'

    // Append stored UTM params
    var utmParams = []
    ;['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(function (key) {
      var val = sessionStorage.getItem(key)
      if (val) utmParams.push(key + '=' + encodeURIComponent(val))
    })
    if (utmParams.length > 0) {
      formUrl += (formUrl.indexOf('?') === -1 ? '?' : '&') + utmParams.join('&')
    }

    var iframe = document.createElement('iframe')
    iframe.src = formUrl
    iframe.title = 'ASSEED\u4f53\u9a13\u30bb\u30c3\u30b7\u30e7\u30f3\u4e88\u7d04\u30d5\u30a9\u30fc\u30e0'
    iframe.style.cssText = 'width:100%;min-height:480px;border:none;'
    iframe.loading = 'lazy'

    // Replace loading spinner with iframe
    container.innerHTML = ''
    container.appendChild(iframe)
  }
})()

// ========== FAQ Accordion (for details elements without native animation) ==========
// Native <details> already works, but we add smooth transitions
document.querySelectorAll('details').forEach(function (details) {
  var summary = details.querySelector('summary')
  if (!summary) return

  summary.addEventListener('click', function (e) {
    // Let browser handle open/close natively
    // The CSS handles the + rotation via [open]
  })
})
