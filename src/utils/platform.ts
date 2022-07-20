
export function isOperatingSystemKnow(window: Window & typeof globalThis) {
    let operatingSystem = 'Not known';
    if (window.navigator.userAgentData.platform.indexOf('Win') !== -1) { operatingSystem = 'Windows'; }
    if (window.navigator.userAgentData.platform.indexOf('Linux') !== -1) { operatingSystem = 'Linux'; }

    return operatingSystem;
}
  