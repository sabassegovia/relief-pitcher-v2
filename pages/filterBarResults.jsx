import React from 'react';

export default function FilterBarResults ({state, zip, type, feature, keyword}) {

  let displayState = state || null;
  let displayzip = zip || null;
  let displaytype = type || null;
  let displayfeature =feature || null;
  let displaykeyword = keyword || null;

  return (
    <div>
      {displayState}, {displayzip}, {displaytype}, {displayfeature}, {displaykeyword}
    </div>
  )
}

//fectch data using this criteria