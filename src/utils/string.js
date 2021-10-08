export function decryptEmail(encoded) {
    window.location.href = 'mailto:' + atob(encoded);
}
