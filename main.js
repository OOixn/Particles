particlesJS("background", {
  particles: {
    number: {
      value: 15, // 생성할 입자의 수
      density: {
        enable: true, // 밀도 설정을 사용할지 여부
        value_area: 300, // 입자가 존재할 영역의 크기
      },
    },
    color: {
      value: "#ffffff", // 입자의 색상
    },
    shape: {
      // 입자의 모양
      // type: "triangle",
      type: "circle",
    },
    opacity: {
      value: 0.8, // 입자의 기본 투명도
      random: true, // 무작위 투명도 여부
      anim: {
        enable: true, // 투명도 애니메이션 사용 여부
        speed: 1, // 애니메이션 속도
        opacity_min: 0.1, // 최소 투명도
        sync: false, // 애니메이션을 동기화할지 여부
      },
    },
    size: {
      value: 5, // 입자의 기본 크기
      random: true, // 무작위 크기 여부
      anim: {
        enable: true, // 크기 애니메이션 사용 여부
        speed: 4, // 애니메이션 속도
        size_min: 0.3, // 최소 크기
        sync: false, // 애니메이션을 동기화할지 여부
      },
    },
    line_linked: {
      enable: true, // 입자 간 연결선 사용 여부
      distance: 150, // 입자 간 연결 거리
      color: "#ffffff", // 연결선 색상
      opacity: 0.4, // 연결선 투명도
      width: 1, // 연결선 너비
    },
    move: {
      enable: true, // 입자 움직임 사용 여부
      speed: 2, // 입자의 이동 속도
      direction: "none", // 입자의 이동 방향
      random: false, // 무작위 이동 여부
      straight: false, // 입자가 직선으로 이동할지 여부
      out_mode: "bounce", // 입자가 화면 바깥으로 나갈 때의 처리 방법
    },
  },
  interactivity: {
    detect_on: "canvas", // 상호작용을 감지할 위치
    events: {
      onhover: {
        enable: true, // 마우스 호버(위로 올렸을 때) 상호작용 사용 여부
        // mode: "repulse", // 호버 상호작용 모드
      },
      onclick: {
        // 클릭 상호작용 사용 여부
        enable: false,
        // enable: true,
        // mode: "push", // 클릭 상호작용 모드
      },
      resize: true, // 창 크기 변경에 대한 반응 여부
    },
  },
  retina_detect: true, // 고해상도 디스플레이에서 입자 효과 사용 여부
});

// https://github.com/VincentGarreau/particles.js 자세한 효과를 확인하려면 이용
