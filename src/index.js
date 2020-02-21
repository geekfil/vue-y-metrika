/* istanbul ignore file */
import { updateConfig, checkConfig, loadScript, createMetrika, startTracking } from './helpers'

export default function install (Vue, options = {}) {
    updateConfig(options); // Merge options and default config
    checkConfig(); // Check if all required options are presented
    Vue.prototype.$metrikaEvents = Vue.$metrikaEvents = new Vue(); // Events metrika
    loadScript(() => { // Load Metrika script
        const metrika = createMetrika(Vue); // Create Metrika
        startTracking(metrika); // Start autotracking
        Vue.$metrikaEvents.$emit('ym:ready', metrika);
    }, options.scriptSrc)
}
