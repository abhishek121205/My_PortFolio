export const handleDownload = () => {
  // Create a link element
  const link = document.createElement('a')
  
  // Set the href to the resume file path
  link.href = '/resume.pdf'
  
  // Set download attribute with desired filename
  link.download = 'abhishek_khachar_resume.pdf'
  
  // Append link to document
  document.body.appendChild(link)
  
  // Trigger download
  link.click()
  
  // Clean up
  document.body.removeChild(link)
}