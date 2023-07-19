
function customFade(node, { delay = 0, duration = 600}) {
    const o = +getComputedStyle(node).opacity;

    return {
        delay,
        duration,
        css: (t) => `opacity: ${t * o}`
    }
}

export default customFade;