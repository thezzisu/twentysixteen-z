;(function ($) {
  var primary = $('#primary')

  $(document)
    .pjax('#page a', '#primary', { fragment: '#primary', timeout: 6000 })
    .on('submit', 'form[method="get"]', function (e) {
      e.preventDefault()
      $.pjax.submit(e, '#primary', { fragment: '#primary', timeout: 6000 })
    })
    .on('pjax:send', function () {
      primary.addClass('pjax-loading')
      NProgress.start()
    })
    .on('pjax:complete', function () {
      primary.removeClass('pjax-loading')
      NProgress.done()
      Prism.highlightAll()
    })
})(jQuery)
