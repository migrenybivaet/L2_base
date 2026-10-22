function domainName(url) {
  var domain = url.replace("http://", "");
  domain = domain.replace("https://", "");
  domain = domain.replace("www.", "");
  var dotIndex = domain.indexOf(".");
  var result = domain.slice(0, dotIndex);
  return result;
}