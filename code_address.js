addresses = [
{
  name: 'PIGGLY WIGGLY',
  link: 'https://goo.gl/maps/MnGEB7hjZT4XKHW88',
  address: '1827 Prairie Ave, Beloit, WI 53511',
},
{
  name: 'SAUK PRAIRIE MARKET',
  link: 'https://goo.gl/maps/m51dFgCdpWhEuBvt7',
  address: '645 3rd St, Prairie Du Sac, WI 53578',
},
{
  name: 'Viking Liquor',
  link: 'https://goo.gl/maps/oHE5U8VMNrpA3cHdA',
  address: '1625 E Main St, Reedsburg, WI 53959',
},
{
  name: 'PIGGLY WIGGLY',
  link: 'https://goo.gl/maps/1mWoJwatCj3P8PPfA',
  address: '8 N County Rd M, Evansville, WI 53536',
}
];
const geocoder = require('@google/maps').createClient({
  key: 'AIzaSyBG3cQZKjSHLPDCJ9xnzAMFCmsEqWX7l1c'
});
function codeAddress(geocoder, address) {
    geocoder.geocode({'address': address.address}, function(error, response) {
        if (!error) {
            //console.log(response.json.results);
            var result = {
                name: address.name.toUpperCase(),
                link: address.link,
                address: address.address.toUpperCase(),
                location: response.json.results[0].geometry.location,
                added: (new Date()).getTime()
            };
            console.log(result);
        } else {
            console.log("Geocode was not successful for the following reason: " + error);
        }
    });
}
for (var i in addresses) {
    codeAddress(geocoder, addresses[i]);
}