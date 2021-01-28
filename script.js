const videoElement = document.getElementById('video');
const button = document.getElementById('button');

// Select a media stream, pass it to video element and play

async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    };
  } catch (error) {
    //Catch error here
  }
}
button.addEventListener('click', async () => {
    //disable button
    button.disabled = true;
    //start small screen
    await videoElement.requestPictureInPicture();
    //Reset button
    button.disabled = false;
});

//on Load
selectMediaStream();
