const ratio = .1
const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}

const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add('reveal-visible')
      observer.unobserve(entry.target)
    }
  })
}

const observer = new IntersectionObserver(handleIntersect, options)
document.querySelectorAll('[class*="revealright-"]').forEach(function(r) {
    observer.observe(r)
})


const ratio2 = .1
const options2 = {
  root: null,
  rootMargin: '0px',
  threshold: ratio2
}

const handleIntersect2 = function (entries, observer2) {
  entries.forEach(function (entry) {
    if (entry.intersectionratio2 > ratio2) {
      entry.target.classList.add('reveal-visible')
      observer2.unobserve(entry.target)
    }
  })
}

const observer2 = new IntersectionObserver(handleIntersect2, options2)
document.querySelectorAll('[class*="revealleft-"]').forEach(function(r) {
    observer.observe(r)
})
