export async function initMSW() {
  if (typeof window === "undefined") {
    const { worker } = await import("../mocks/server");
    worker.listen();
  } else {
    const { worker } = await import("../mocks/browser");
    worker.start();
  }
}
