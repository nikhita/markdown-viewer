console.log(marked('I am using __markdown__.'));
var markedText = "";
var text = document.getElementById('text');

function markDownFunc(value) {
  markedText = value;
  var MarkdownPreview = React.createClass({
    input: function() {
      markedText= marked(markedText)
      return {
        __html: markedText
      }
    },
    render: function() {
      return ( 
        <span dangerouslySetInnerHTML={this.input()}></span>
      );
    }
  });

  ReactDOM.render( < MarkdownPreview / > ,
    document.getElementById('box2')
  );
  console.log("aaa");
};

markDownFunc(text.value);
