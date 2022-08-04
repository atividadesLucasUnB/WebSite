export function isOperatingSystemKnow(window: Window & typeof globalThis) {
    let operatingSystem;
    if (window.navigator.platform.indexOf('Win') !== -1) { operatingSystem = 'Windows'; }
    if (window.navigator.platform.indexOf('Linux') !== -1) { operatingSystem = 'Linux'; }

    return operatingSystem;
}
  