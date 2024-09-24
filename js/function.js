// theme-slider
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.sliders');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');
    let currentIndex = 0;
  

    function moveSlider(index) {
        const sliderWidth = document.querySelector('.slider').offsetWidth;
        slider.style.transform = `translateX(${-index * sliderWidth}px)`;
  
        // 버튼 표시
        if (index === 0) {
            prevBtn.style.display = 'none';
        } else {
            prevBtn.style.display = 'block';
        }
  
        if (index === slider.children.length - 1) {
            nextBtn.style.display = 'none';
        } else {
            nextBtn.style.display = 'block';
        }
    }
  
    // 이전
    prevBtn.addEventListener('click', function(event) {
        event.preventDefault();
        if (currentIndex > 0) {
            currentIndex--;
            moveSlider(currentIndex);
        }
    });
  
    // 다음
    nextBtn.addEventListener('click', function(event) {
        event.preventDefault();
        if (currentIndex < slider.children.length - 1) {
            currentIndex++;
            moveSlider(currentIndex);
        }
    });
  

    moveSlider(currentIndex);
  });
  
  // theme-slider_2
  document.addEventListener('DOMContentLoaded', function() {
    const slider2 = document.querySelector('.sliders_2');
    const prevBtn2 = document.querySelector('.slider_2 .prev');
    const nextBtn2 = document.querySelector('.slider_2 .next');
    const gnbItems2 = document.querySelectorAll('.slider_2 .gnb ul li');
    let currentIndex2 = 0;
    let autoSlideInterval ='';
  

    function moveSlider2(index) {
        const sliderWidth = document.querySelector('.slider_2').offsetWidth;
        slider2.style.transform = `translateX(${-index * sliderWidth}px)`;
  

        gnbItems2.forEach((item, i) => {
            if (i === index) {
                item.classList.add('on');
            } else {
                item.classList.remove('on');
            }
        });


        if (index === 0) {
            prevBtn2.style.display = 'none';
        } else {
            prevBtn2.style.display = 'block';
        }
  
        if (index === slider2.querySelectorAll('ul li').length - 1) {
            nextBtn2.style.display = 'none';
        } else {
            nextBtn2.style.display = 'block';
        }
    }
  

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }
  
    // 이전 버튼 
    prevBtn2.addEventListener('click', function(event) {
        event.preventDefault();
        stopAutoSlide();
        if (currentIndex2 > 0) {
            currentIndex2--;
            moveSlider2(currentIndex2);
        }
        startAutoSlide();
    });
  
    // 다음 버튼 
    nextBtn2.addEventListener('click', function(event) {
        event.preventDefault();
        stopAutoSlide();
        if (currentIndex2 < slider2.querySelectorAll('ul li').length - 1) {
            currentIndex2++;
            moveSlider2(currentIndex2);
        }
        startAutoSlide();
    });
  
    // gnb 
    gnbItems2.forEach((item, index) => {
        item.addEventListener('click', function(event) {
            event.preventDefault();
            stopAutoSlide();
            currentIndex2 = index;
            moveSlider2(currentIndex2);
            startAutoSlide();
        });
    });
  
        // 자동 슬라이더
        function startAutoSlide() {
            autoSlideInterval = setInterval(() => {
                if (currentIndex2 < slider2.querySelectorAll('ul li').length - 1) {
                    currentIndex2++;
                } else {
                    currentIndex2 = 0;
                }
                moveSlider2(currentIndex2);
            }, 3000); 
        }

    moveSlider2(currentIndex2);
    startAutoSlide(); 
  });
  
  // hotple
  document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.slider-container ul');
    const prevBtn = document.querySelector('.hotple .prev');
    const nextBtn = document.querySelector('.hotple .next');
    const items = document.querySelectorAll('.slider-container ul li');
    const itemsPerSlide = 4; 
    const maxIndex = 4;
    let currentIndex = 0;
  

    function moveSlider(index) {
        const itemWidth = items[0].offsetWidth + 20; // padding 포함
        sliderContainer.style.transform = `translateX(${-index * itemWidth * itemsPerSlide}px)`;
  

        prevBtn.style.display = index === 0 ? 'none' : 'block';
        nextBtn.style.display = index === maxIndex ? 'none' : 'block';
    }
  
    // 이전 버튼
    prevBtn.addEventListener('click', function(event) {
        event.preventDefault();
        if (currentIndex > 0) {
            currentIndex--;
            moveSlider(currentIndex);
        }
    });
  
    // 다음 버튼
    nextBtn.addEventListener('click', function(event) {
        event.preventDefault();
        if (currentIndex < maxIndex) {
            currentIndex++;
            moveSlider(currentIndex);
        }
    });
  

    moveSlider(currentIndex);
  });
  
  // required-ticket
  document.addEventListener('DOMContentLoaded', function() {
    const sliderContainer = document.querySelector('.required-ticket .slider-container ul');
    const prevBtn = document.querySelector('.required-ticket .prev');
    const nextBtn = document.querySelector('.required-ticket .next');
    const items = document.querySelectorAll('.required-ticket .slider-container ul li');
    const itemsPerSlide = 4; 
    const totalItems = items.length;
    const maxIndex = Math.ceil(totalItems / itemsPerSlide) - 1;
    let currentIndex = 0;
  

    function moveSlider(index) {
        const itemWidth = items[0].offsetWidth + 19; 
        sliderContainer.style.transform = `translateX(${-index * itemWidth * itemsPerSlide}px)`;
  

        prevBtn.style.display = index === 0 ? 'none' : 'block';
        nextBtn.style.display = index === maxIndex ? 'none' : 'block';
    }
  
    // 이전 버튼
    prevBtn.addEventListener('click', function(event) {
        event.preventDefault();
        if (currentIndex > 0) {
            currentIndex--;
            moveSlider(currentIndex);
        }
    });
  
    // 다음 버튼
    nextBtn.addEventListener('click', function(event) {
        event.preventDefault();
        if (currentIndex < maxIndex) {
            currentIndex++;
            moveSlider(currentIndex);
        }
    });
  

    moveSlider(currentIndex);
  });
  
  // info
  document.addEventListener('DOMContentLoaded', function() {
      const sliderContainer = document.querySelector('.traffic .slider-container ul');
      const prevBtn = document.querySelector('.traffic .prev');
      const nextBtn = document.querySelector('.traffic .next');
      const items = document.querySelectorAll('.traffic .slider-container ul li');
      const itemsPerSlide = 4; 
      const totalItems = items.length;
      const maxIndex = Math.ceil(totalItems / itemsPerSlide) - 1;
      let currentIndex = 0;
  
    
      function moveSlider(index) {
          const itemWidth = items[0].offsetWidth + 19;
          sliderContainer.style.transform = `translateX(${-index * itemWidth * itemsPerSlide}px)`;
  

          prevBtn.style.display = index === 0 ? 'none' : 'block';
          nextBtn.style.display = index === maxIndex ? 'none' : 'block';
      }
  
      // 이전 버튼
      prevBtn.addEventListener('click', function(event) {
          event.preventDefault();
          if (currentIndex > 0) {
              currentIndex--;
              moveSlider(currentIndex);
          }
      });
  
      // 다음 버튼
      nextBtn.addEventListener('click', function(event) {
          event.preventDefault();
          if (currentIndex < maxIndex) {
              currentIndex++;
              moveSlider(currentIndex);
          }
      });
  

      moveSlider(currentIndex);
  });
  

  document.addEventListener('DOMContentLoaded', function() {
      const $mnus = document.querySelectorAll('header nav ul li a');
      const arrTopVal = [];
      const extraOffset = -10; 
    

      document.querySelectorAll('main section').forEach(($section, idx) => {
        arrTopVal[idx] = $section.offsetTop;
      });
    
      console.log('arrTopVal =', arrTopVal);
    
      
      let nowIdx = 0;
      let oldIdx = nowIdx;
    
      // 메뉴
      $mnus.forEach(($mnu, idx) => {
        $mnu.addEventListener('click', function(evt) {
          evt.preventDefault();
          window.scrollTo({
            top: arrTopVal[idx] - document.querySelector('header').offsetHeight + extraOffset,
            behavior: "smooth"
          });
        });
      });
    
      // 스크롤 
      window.addEventListener('scroll', ()=>{
        const scrollTop = Math.ceil(window.scrollY);
    
        for (let i = 0; i < $mnus.length; i++) {
          if (scrollTop >= arrTopVal[i] - document.querySelector('header').offsetHeight + extraOffset) {
            oldIdx = nowIdx;
            nowIdx = i;
            $mnus[oldIdx].parentElement.classList.remove('on');
            $mnus[nowIdx].parentElement.classList.add('on');
          } else if (scrollTop < arrTopVal[0] - document.querySelector('header').offsetHeight + extraOffset) {
            $mnus[nowIdx].parentElement.removeAttribute('class');
          }
        }
      });
    
      // 로고와 top
      const $logo = document.querySelector('.logo>a');
      const $top = document.querySelector('aside .top');
    
      $logo.addEventListener('click', function(evt) {
        evt.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    
      $top.addEventListener('click', function(evt) {
        evt.preventDefault();
        $logo.click();
      });
    });
    




    document.getElementById('languageButton').addEventListener('click', function(event) {
        event.stopPropagation();
        document.querySelector('.dropdown').classList.toggle('show');
    });
    
    document.querySelectorAll('input[name="language"]').forEach((input) => {
        input.addEventListener('change', function(event) {
            const selectedLanguage = event.target.value;
            switchLanguage(selectedLanguage);
            document.querySelector('.dropdown').classList.remove('show');
        });
    });
    
    //버튼바꾸기
    function switchLanguage(language) {
        const buttonText = document.getElementById('buttonText');
        if (language === 'ko') {
            buttonText.innerText = '한국어';
        } else if (language === 'en') {
            buttonText.innerText = 'English';
        }
    }

    //영어버전일때 도시이름바꾸기
    document.querySelectorAll('input[name="language"]').forEach((radio) => {
        radio.addEventListener('change', function() {
          const language = this.value;
          document.querySelectorAll('.city-name').forEach((city) => {
            city.textContent = city.getAttribute(`data-${language}`);
          });
        });
      });