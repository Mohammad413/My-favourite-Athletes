const displayedImage = document.querySelector('.displayed-img');
      const thumbBar = document.querySelector('.thumb-bar');
      
      const btn = document.querySelector('button');
      const overlay = document.querySelector('.overlay');
      
      /* Declaring the array of image filenames */
      const imgar=new Array();
      imgar[0]=new Image();
      imgar[0].src='https://images0.persgroep.net/rcs/7-QBXUweCXCiCxef_VNOaucV3-A/diocontent/212761032/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8&desiredformat=webp';
      imgar[1]=new Image();
      imgar[1].src='https://images0.persgroep.net/rcs/foP7FYETgQRfoHUE0AL34lZq8co/diocontent/212501143/_fitwidth/694/?appId=21791a8992982cd8da851550a453bd7f&quality=0.8';
      imgar[2]=new Image();
      imgar[2].src="https://www.vi.nl/.imaging/mte/vinl-website-theme/760x506/dam/articles/2021/08/25/copyright-proshots-13029194.jpg/jcr:content/copyright-proshots-13029194.jpg";
      imgar[3]=new Image();
      imgar[3].src="https://library.sportingnews.com/2021-12/lebron-james-los-angeles-lakers_kej02uf93prj18vqxkh8dfnqk.png";
      imgar[2]=new Image();
      imgar[2].src="https://www.vi.nl/.imaging/mte/vinl-website-theme/760x506/dam/articles/2021/08/25/copyright-proshots-13029194.jpg/jcr:content/copyright-proshots-13029194.jpg";
      
 
  
      /* Looping through images */
      for(let i=0;i<imgar.length;i++){
      const newImage = document.createElement('img');
      newImage.setAttribute('src', imgar[i].src);
      thumbBar.appendChild(newImage);
      newImage.addEventListener('click',change);
      function change(){     
           
            displayedImage.src=newImage.src;
           }
      
      }
      
      
 btn.addEventListener('click', (e) => {
  if (e.target.className == 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
}

 else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
}
});
  