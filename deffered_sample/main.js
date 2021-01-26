var d = new $.Deferred;
d.promise().done(sccess);
d.resolve();
d.promise().fail(fail);
d.reject();
// delayHello();

function delayHello() {
    setTimeout(function () {
        d.resolve();
    }, 1000);
    setTimeout(function () {
        d.reject();
    }, 2000);
    // return d.promise();
}
// delayHello().then(sccess, fail);


function sccess() {
    console.log('sccess');
}

function fail() {
    console.log('fail');
}

