Logan Sanderson
05.20.26

*** LINK TO PAGE: ***
https://lcsanderson.github.io/js_dom_self_assessment/

*** ABOUT ***
This is my work for the Javascript and DOM Self Assessment posted on Canvas. main.css holds all of the styling for the site, app.js is the javascript I wrote (with the help of Claude —see below) to automate generating cards for 50 listings, index.html is the main html doc.

**AI USAGE (Claude Sonnet 4.6):**
*Prompt 1:*
"I want to write some code using javascript in order to parse a json file of 500 objects and format the data from each item into this kind of "card," and then have it displayed on my html page:

<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>

I'll figure out which info from each json object I actually want myself, but could you tell/show me how that code would look to automate just the first 50 items to be formatted as a "card" "