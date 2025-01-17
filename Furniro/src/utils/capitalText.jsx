import React from 'react'

const capitalText = (path) => {
  const onlyCapitalPath = path.split("/")[1];
  const onlyPath = onlyCapitalPath.charAt(0).toUpperCase() + onlyCapitalPath.slice(1);
  return onlyPath
}

export default capitalText
