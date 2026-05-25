import { showNotification } from "./notification.js";

let notificationStarted = false;

export default function scheduleDailyNotifications() {
  if (notificationStarted) return;

  notificationStarted = true;

  setTimeout(() => {
    showNotification(
      "React Time",
      "Start your deep work session."
    );
  }, 10000);
}