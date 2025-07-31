export const playSound = (type: "success" | "error"): void => {
  const audio = new Audio(
    type === "success" ? "/sounds/service_up.wav" : "/sounds/service_down.wav"
  );

  audio.play().catch((err) => {
    console.warn("Ses çalınamadı:", err);
  });
};
