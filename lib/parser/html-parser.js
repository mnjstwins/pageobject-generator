"use strict";

const _ = require('lodash');
const parse5 = require('parse5');
const fs = require('fs');

class HtmlParser {

  constructor(source, isPath) {
    this._source = source;
    this._isPath = isPath;
  }

  parse() {
    let source = this._isPath ? fs.readFileSync(path, 'utf8') : this._source;
    return parse5.parseFragment(source, {treeAdapter: parse5.treeAdapters.htmlparser2});
  }

}

module.exports = HtmlParser;