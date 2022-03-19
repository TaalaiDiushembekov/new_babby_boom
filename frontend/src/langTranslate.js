let  arrLang = {
    'en': {
        'linkMain': 'Main'
    },
    'ru': {
        'linkMain': 'На главную'
    }
}

$(function () {
  $('translate').click(function () {
    let lang = $(this).attr('id')

      $('lang').each(function () {
        $(this).text(arrLang[lang][$(this).attr('key')])
      })
})
})
