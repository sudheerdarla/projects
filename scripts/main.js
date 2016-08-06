var state = {
  slideIndex: 0
};


var slides  = [
  {
    title: 'Headings',
    code: '<h1>Heading 1</h1>\n<h2>Heading 2</h2>\n<h3>Heading 3</h3>\n<h4>Heading 4</h4>\n<h5>Heading 5</h5>'
  },
  {
    title: 'Paragraph',
    code: '<p>Lorem Ipsum</p><p>Lorem Ipsum</p>'
  },
  {
    title: 'Division',
    code: '<div>Heading 1</div>'
  },
  {
    title: 'Spans',
    code: '<span>Heading 1</span>'
  },
  {
    title: 'Links',
    code: '<a href="https://google.co.in">Google</a>'
  },
    {
    title: 'Images',
    code: '<img src="http://i.imgur.com/Ru37gzO.png" />'
  },
];


var editor = CodeMirror(document.querySelector('.editor'),
  {
    mode: "htmlmixed"
  }
);

editor.setOption('lineNumbers', true);

editor.on('change', function (editorInstance) {
  var htmlText = editorInstance.getValue()
  
  $('.rendered').html(htmlText)
});


$('.title').html(slides[0].title)
editor.setValue(slides[0].code)

$('.left-button').click(function () {
  if (state.slideIndex > 0) {
    state.slideIndex -= 1;
    
    $('.title').html(slides[state.slideIndex].title);
    editor.setValue(slides[state.slideIndex].code);
  }
})

$('.right-button').click(function () {
  if (state.slideIndex < slides.length - 1) {
    state.slideIndex += 1;
    
    $('.title').html(slides[state.slideIndex].title);
    editor.setValue(slides[state.slideIndex].code);
  }
})
