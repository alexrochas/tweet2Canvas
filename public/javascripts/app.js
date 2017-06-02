document.addEventListener('DOMContentLoaded', function(){

  document.getElementById('submit-button').onclick = function() {
    event.preventDefault();
    var body = document.getElementById('url-input').value;

    axios.get(body)
        .then(function (response) {
          console.log(response);
          var tweetHtml = $(response.data).find(".tweet.permalink-tweet").prop('outerHTML');
          window.goForIt = response;
          console.log(tweetHtml);
          var tweet = document.createElement('div');
          tweet.classList.add('tweet');
          tweet.style.width = '640px';
          tweet.innerHTML = tweetHtml;
          document.body.appendChild(tweet);
          html2canvas(document.querySelector('.tweet'),{useCORS:true}).then(function(canvas) {
            document.body.appendChild(canvas);
          });

        })
        .catch(function (error) {
          console.log(error);
        });
  }
}, false);