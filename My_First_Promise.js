<script>
    function wait(ms) {
        return new Promise(function(resolve) {
            console.log(this);
            window.setTimeout(function() {
                resolve();
            }, ms);
        });
    }; 

    var milliseconds = 2000;
    wait(milliseconds).then(finish);
</script>