var jsonPath = require('JSONPath'),
    jsonStream = require('JSONStream'),
    optimist = require('optimist'),
    es = require('event-stream'),
    args = optimist
        .usage('Usage: $0 <path>')
        .describe("path", "The JSONPath")
        .argv;

if ((args._.length === 0) || args.help) {
    optimist.showHelp();
    process.exit();

} else {
    var path = args._[0];

    process.stdin
        .pipe(jsonStream.parse())
        .pipe(es.map(function (data, cb) {
            var results = jsonPath.eval(data, path);

            results.forEach(function (result) {
                console.log(result)
            });
            cb();
        }));
}
