function matchRuleShort(str, rule) {
  rule = rule.replace(/[*]/g, ".*").toLowerCase().trim();
  return new RegExp(rule, "i").test(str);
}

function isPrime(){
  return (document.getElementsByClassName('a-icon-prime').length>0);
}

function isFBA(){
  return (matchRuleShort(document.getElementById('merchant-info').innerHTML, "Versand durch Amazon") || matchRuleShort(document.getElementById('merchant-info').innerHTML, "Versandt und verkauft von Amazon"));
}

(function() {
  
  if(!isFBA() && isPrime()){
    
    var imgURL = chrome.extension.getURL("prime_reseller.png");

    document.getElementsByClassName('a-icon-prime')[0].style.display= "none";
    document.getElementById('ourprice_shippingmessage').innerHTML = "<img height='16' src=\'"+imgURL+"\' />";
  }

})();