javascript:
var url = document.location.href;
var urlsplit = url.split("/");
urlsplit[0]+="/";
urlsplit[3] = `ACNH/modunogay.github.io/${urlsplit[3]}`;
window.open(urlsplit.join("/"), '_blank');