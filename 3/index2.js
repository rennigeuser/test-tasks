


/**
 * 
 * @param {() => void} cb 
 * @returns {void}
 * 
 */
const $ = (cb) => {

    document.addEventListener('readystatechange', () => {
        if (document.readyState === "interactive") {
            cb()
            console.log(`${"-".repeat(10)}Before DOMContentLoaded${"-".repeat(10)}`)
        }
    })

    window.addEventListener('DOMContentLoaded', () => {
        cb()
        console.log(`${"-".repeat(10)}After DOMContentLoaded${"-".repeat(10)}`)
    })
}


$(() => console.log("Hello world"))




