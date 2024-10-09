const handleShare = async (data: ShareData) => {
  if (navigator.share) {
    try {
      await navigator.share(data)
    } catch (error) {
      alert(`Failed to share : ${error}`)
    }
  } else {
    alert('Sharing not supported on this browser.')
  }
}

export default handleShare
