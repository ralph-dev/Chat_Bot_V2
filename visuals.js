(function() {
    setInterval(function() {
        $('h3').fadeOut(500, function() {
            var $this = $(this);
            $this.text($this.text() == 'Connected' ? '2457' : 'Connected');
            $this.fadeIn(500);
        });
    }, 2000);​
}).call(this);