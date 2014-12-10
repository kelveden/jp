jp
==
[JSONPath](http://goessner.net/articles/JsonPath/) parser.

Installation
------------
For now, install from source only. Clone the repo then:

```
npm install
npm link
```

Usage
-----
Pipe your json via stdin; e.g.

```
pbpaste | jp "field1.field2"
```

or in X-land:

```
xclip -o | jp "field1.field2"
```

Credits
-------
Essentially just a command-line wrapper around the [JSONPath nodejs module](https://github.com/s3u/JSONPath)