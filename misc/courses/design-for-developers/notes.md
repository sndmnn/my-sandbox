# Symmetry and Asymmetry

- When employing symmetry on a design, we can break a symmetric pattern at certain points to call the user's attention to those points;

- Though symmetry does convey order in a design, it can be a bit boring and turn the product unremarkable;

- The real world is also not perfectly symmetrical, meaning that asymmetry is more natural to us and perfectly symmetrical things can sometimes throw us off a little;

# Shapes

- Circles draw your eyes more than other shapes;

- Circles also look off (tucked in the alignment) when they're perfectly aligned with straight shapes. You may want to purposefully put them a little to the side so they look more natural in the layout; 

- Diagonals are very dynamic and can be used to break static, "table-based" layouts;

# Scale and Cropping

- Scaling and cropping things in different, somewhat awkward ways can help turning things that by themselves are pretty uninteresting (or straight up look bad) into something that catches our attention;

# Grid and Composition

- Not all of your elements need to have a place ("coordinates") in the grid, they must only be anchored (aligned) to something else. That organizes things enough that your brain doesn't perceive it as a mess, but not so much that it looks unnatural;

# Drawing Shapes on The Web

- Generally when we're trying to draw shapes with CSS, since it's made for layout, we're "hacking" it to produce a shape (which can result in code that's pretty hard to read);

- There is a CSS property called `clip-path` that can be used to draw shapes, but it's not well supported in every browser;

- To avoid hacking into CSS and using `clip-path` we can use SVGs, which are essentially made to build shapes on the web;