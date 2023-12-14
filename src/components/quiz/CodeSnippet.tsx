import React from 'react'

const CodeSnippet = () => {
  return (
    <div>
         <pre >
          <code className="language-javascript ">
            {
              `
              if ('this_is' == /an_example/) {
                of_beautifier();
              } else {
                var a = b ? (c % d) : e[f];
              }
              
              `
            }
          </code>
        </pre>
    </div>
  )
}

export default CodeSnippet