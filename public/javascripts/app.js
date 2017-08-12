document.addEventListener('DOMContentLoaded', function(){

  document.getElementById('submit-button').onclick = function() {
    event.preventDefault();
    var body = document.getElementById('url-input').value;

    console.log(body);
    $.getJSON('http://anyorigin.com/go?url=https%3A//twitter.com/adamatti/status/895762987679715328&callback=?', function(data){
      var response = data.contents;
      var tweetHtml = $(response).find(".tweet.permalink-tweet").prop('outerHTML');
      window.goForIt = response;
      var tweet = document.createElement('div');
      tweet.classList.add('tweet');
      tweet.style.width = '640px';
      tweet.innerHTML = tweetHtml;
      document.body.appendChild(tweet);
      html2canvas(document.querySelector('.tweet'),{useCORS:true}).then(function(canvas) {
        document.body.appendChild(canvas);
      });
    });
  }
}, false);