<!-- Use Ctrl/Cmd + Shift + V in VS Code to preview this Markdown file. -->

# Collections Grid Section

This small project was to practice using Grid style css. Utilizing GreatFrontEnd's styling guide and layout, design was aimed to be as as close to the images provided. For this implementation, desktop design was prioritized first. Medium and small screen size will be implemented in the future using React. There is a lot of repetitive code that could have been optimized using forEach or mapping function but the goal was to mainly get comfortable with using grid style css.

## Techstack and Approach

HTML and CSS was used here along with javascript to fetch data for collections. First step was to play around with display: grid and grid-template properties to get a feel for it. Once everything is laid out, we put the text contents of each grid item in a flex box using flex-direction: column-reverse to start them from the bottom-left of each square. Gaps and padding were added where necessary especially between grid items. 

## Lessons Learned

Grid CSS is especially useful for creating layouts. Drawing the lay out first gives you a better sense of how many rows are required and which columns need to be split. grid-template was especially useful for when splitting columns. For example, urban oasis section and fresh fusion section were split into two rows by having the parent div having a display property of grid with a grid-template-rows of 1fr 1fr. This ends up spliting the right column into two items with equal amount of space being taken. I can see this method of grid styling for page layouts and can be a great foundation for any web app. 

## Future plans

Will start from scratch using React framework in order to optimize code to create views for both medium and small screens. This is a great opporunity for more grid practice as well. 