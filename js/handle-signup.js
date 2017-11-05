(function() {

function sendData(url, email, cb) {
  var XHR = new XMLHttpRequest();
  var urlEncodedData = 'email=' + encodeURIComponent(email);
  if (typeof cb === 'function') {
    XHR.addEventListener('load', cb);
  }
  XHR.open('POST', url);
  XHR.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
  XHR.send(urlEncodedData);
}

document.addEventListener('DOMContentLoaded', function() {
  var forms = document.querySelectorAll('.signup-form');
  var isSubmitting = false;
  for (var i = 0; i < forms.length; i++) {
    forms[i].addEventListener('submit', function(evt) {
      evt.preventDefault();
      if (isSubmitting) {
        return;
      }
      isSubmitting = true;
      var form = this;
      var url = form.action;
      var input = form.querySelector('input[name="email"]');
      var email = input.value;

      form.className += ' signup-success';
      sendData(url, email, function() {
        isSubmitting = false;
      });
    })
  }
}, false);

}())
