# script for determining the counties for the locations page
```
echo -e "Address\tCounty\n"\
"$(paste \
  <(grep ", WI" index.html | grep -v CiderHouseWI | grep -v sumptuous | sed 's/  //g') \
  <(grep ", WI" index.html | grep -v CiderHouseWI | grep -v sumptuous | cut -d'>' -f2 | cut -d' ' -f3 -f4 | sed 's/WI //g' | \
    xargs -I {} curl -s 'http://uscounties.com/zipcodes/search.pl?query={}&stpos=0' | grep '"results"' | cut -d'>' -f9 | cut -d'<' -f1 | sed 's/^ //g') | \
sort -k2 -t$'\t')" > address_by_county.csv
```

# script for getting geocodes for list of addresses
```
npm install @google/maps
node code_address.js
```
