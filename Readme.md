# Sit2Play-AutoPlay Chrome Extension
This simple extension allows a user of sit2play to continuously play tv shows with out stopping in between them. Once installed there is nothing to configure, just load your tv show and click play. 


## Worked Out Issues 
While making this, an issue that was occuring was that the website loads pages in fragments and not with full page requests. I had to create an onAddressChange, which grabs the new HTML5 video object everytime the tv show is changed.