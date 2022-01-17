# duckduckgo-google-bang-counter

### Status

1. Bang is completely stored correctly 
2. Add and reset work properly
3. Got a decent icon

TODO:
1. Build out UI which shows the users bang counter

MAYBE TODO:
1. When you do "search !g" on duckduckgo, you can intercept the request to google and it will record its
origin url as duckduckgo. This could be leveraged in some way.
    - need <all_urls> permission
I tested this out, it doesn't work for every bang. For instance; !w would result in origin url 
"https://duckduckgo.com/l/?uddg=https%3A%2F%2Fen.wikipedia.or…fa1931f2bc74890db1026821d26e1031ea91a9c48d4c4bfebbbe3e6f9287"
which cannot be relaibly matched. I might revisit this, but there is no problem with my current implementation other than that we only have the bang, not the endpoint.