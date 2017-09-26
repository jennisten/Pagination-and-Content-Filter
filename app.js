//variable for studenlistitems
let $studentList = $('.student-list').children();
//variable for the amount of items shown per page
const itemsPerPage = 10;
//variable for page links
let $pageLinks;

//create function showPage which displays the page of 10 students the user has selected
const showPage = (pageNr, showList) => {
  //first hide the list
 $($studentList).hide();
 //then determine the current list length
 let $showListLength = $studentList.length;
 //and loop through all the items in the student list
 for (let i = 0; i < $showListLength; i += 1) {
   if (i < pageNr * itemsPerPage && i + 1 > (pageNr - 1) * itemsPerPage) {
     // show the selected list of items
     $(showList[i]).show();
    }
  }
};

//create function for adding page links and loading studentitems according to which page the user selects
const appendPageLinks = (appendStudentList) => {
  //determine page amount for current student list
  let $pages = Math.ceil(document.querySelector('.student-list').childElementCount / itemsPerPage);
  // create a page link section
  let $pagination = $('<div class="pagination"></div>');
   $('.page').append($pagination);
  let $ul = $('<ul></ul>');
  $('.pagination').append($ul);
   // go through all pages
  for (var i = 1; i <= $pages; i += 1) {
    //add a page link to the page link section
    let $pageLinks = $($ul).append('<li><a href="#">' + i + '</a></li>');
    //create the default page for first 10 student items = page 1
    if (i === 1) {
       //call showPage function to show first 10 items
       showPage(1, appendStudentList);
       //add class 'active' to default page 1
       $('.pagination ul li a').attr('class', 'active');
       }
    }
     // Then determine what should happen when one of the page links are clicked
    $('.pagination li a').click(function() {
       // variable to hold the value of the links (this = pagination links)
       let $aClicked = $(this).text();
       // call the showPage function to display the page for the clicked link
       showPage($aClicked, appendStudentList);
       //remove 'active' class and then add it to the chosen active page
       $('.active').removeClass('active');
       $(this).addClass('active');
    })
  };

//Call the function
appendPageLinks($studentList);
