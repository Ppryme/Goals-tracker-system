export async function requestNotificationPermission() {
    
  if (!("Notification" in window)) {
    alert("Browser does not support notifications");
    return false;
  }

  const permission = await Notification.requestPermission();

  return permission === "granted";
}

export function showNotification(title, body) {
  if (Notification.permission === "granted") {
    new Notification(title, {
      body,
      icon: "/vite.svg", // optional
    });
  }
}