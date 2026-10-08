// work data

export const Work = [
  {
    id: 1,
    name: "WiFi-based Motion Detection",
    category: "software",
    description: "A non-intrusive motion detection system utilizing Wi-Fi signal disturbances (CSI / RSSI Analysis) for ambient sensing.",
    tags: ["wifi", "iot", "python", "motion-detection", "esp32"],
    demo: "https://github.com/Rakshugow/WiFi-based-motion-detection",
    github: "https://github.com/Rakshugow/WiFi-based-motion-detection"
  },
  {
    id: 2,
    name: "Offline AI",
    category: "software",
    description: "An offline, privacy-first local AI system running edge LLMs and intelligence models locally without internet connectivity.",
    tags: ["ai", "offline-llm", "python", "edge-computing", "machine-learning"],
    demo: "https://github.com/Rakshugow/Offline-AI",
    github: "https://github.com/Rakshugow/Offline-AI"
  },
  {
    id: 3,
    name: "Autonomous FPV Drone",
    category: "hardware",
    description: "Custom-built carbon fiber quadcopter with STM32 flight controller, real-time FPV telemetry, and custom PID tuning.",
    tags: ["drone", "hardware", "stm32", "fpv", "pcb-design", "embedded"],
    image: "/images/drone_build_1.png",
    gallery: [
      {
        url: "/images/drone_build_1.png",
        title: "Carbon Fiber Frame Assembly",
        caption: "Custom 5-inch carbon fiber quadcopter build on the soldering workbench with custom motor wiring."
      },
      {
        url: "/images/drone_build_2.png",
        title: "STM32 Flight Controller PCB",
        caption: "High-precision STM32 flight controller board with integrated gyro sensors and custom firmware."
      },
      {
        url: "/images/drone_build_3.png",
        title: "High-Speed Flight Test",
        caption: "Field testing aerobatic manoeuvres and real-time telemetry streaming at sunset."
      },
      {
        url: "/images/drone_build_4.png",
        title: "FPV Pilot Ground Station",
        caption: "RadioMaster transmitter with custom telemetry display paired with high-res FPV OLED goggles."
      },
      {
        url: "/images/drone_build_5.png",
        title: "Night Flight & LED Telemetry",
        caption: "Long-exposure night flight testing featuring neon LED illumination and precision landing pad auto-approach."
      }
    ]
  },
  {
    id: 4,
    name: "WiFi & Bluetooth Jammer",
    category: "hardware",
    description: "Dual-band RF signal attenuator and deauther built with ESP32 and NRF24L01 modules with real-time OLED packet display.",
    tags: ["hardware", "esp32", "rf-security", "jammer", "bluetooth", "wifi"],
    image: "/images/jammer_hardware.png"
  },
  {
    id: 5,
    name: "MockGPS",
    category: "software",
    description: "A high-performance Android mock location & route simulator featuring Anycast satellite mapping, dual real-time joysticks, calibrated velocities, and multi-waypoint walking.",
    tags: ["android", "java", "mock-location", "gps-simulation", "osmdroid"],
    demo: "https://github.com/Rakshugow/mockgps",
    github: "https://github.com/Rakshugow/mockgps"
  },
  {
    id: 6,
    name: "IgotU",
    category: "software",
    description: "Hardware-level GPS and anti-spoof sentinel for Android detecting mock coordinate injection, root/Magisk bypasses, and LSPosed hooks with 24/7 background alerts.",
    tags: ["android", "security", "anti-spoof", "gps-sentinel", "root-detection"],
    demo: "https://github.com/Rakshugow/IgotU",
    github: "https://github.com/Rakshugow/IgotU"
  }
];