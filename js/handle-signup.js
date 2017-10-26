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
  for (var i = 0; i < forms.length; i++) {
    forms[i].addEventListener('submit', function(evt) {
      var form = this;
      evt.preventDefault();
      var url = form.action;
      var input = form.querySelector('input[name="email"]');
      var email = input.value;
      sendData(url, email, function() {
        form.className += ' signup-success';
      });
    })
  }
}, false);

}())
