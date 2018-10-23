
function getUrl() {
	return window.location.href;
}

function getQueryString() {
	return getQueryString(getUrl());
}

function getQueryString(url) {
	var qidx = url.indexOf('?');
	if ( qidx > 0 ) {
		return url.substring(qidx+1);
	}
    return "";
}

function hasQueryString() {
	return hasQueryString(getUrl());
}

function hasQueryString(url) {
	return url && url.indexOf('?') > 0 && url.indexOf('?') < url.length()-1;
}

function getQueryMap() {
    var qstr = document.location.search.substring(1);
    return getQueryMap(qstr);
}

function appendStr(joined, str) {
    return joined + "=" + str;
}
function getQueryMap(qstr) {
    var qMap = {};
    var vars = qstr.split("&");
    for (var i=0; i< vars.length; i++) {
        var pair = vars[i].split("=");
        if ( pair.length > 2 ) {
            var subpair = Array.from(pair);
            subpair.shift();
            pair[1] = subpair.reduce(appendStr);
        }
        var qpVal = qMap[pair[0]];
        if ( qpVal ) {
            if ( ! Array.isArray(qpVal)) {
            	qpVal = Array.of(qpVal);
            }
            qpVal.push(pair[1]);
            qMap[pair[0]] = qpVal;
        } else {
            qMap[pair[0]] = pair[1];
        }
    }
    return qMap;
}
function getQueryParam(qpName) {
    return getQueryMap()[qpName];
}