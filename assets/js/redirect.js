(function() {
  const redirect = {
    to_protocol: "https",
    to_domain_path:"ryoyakawai.com/blog",
    replace_reg_exp: new RegExp("^" + document["domain"]),
    arr_to_URL: new Array(),
    str_to_URL: ""
  };
  document["URL"].split('/').map( value => {
    if(value.match(redirect.replace_reg_exp, value) != null) {
      value = redirect.to_domain_path;
    }
    
    redirect.arr_to_URL.push(value);
  });
  redirect.arr_to_URL[0] = redirect.to_protocol + ":";
  redirect.str_to_URL = redirect.arr_to_URL.join("/");
  console.log("Redirecting to: " + redirect.str_to_URL);
  
  window.location.replace(redirect.str_to_URL);
}());
