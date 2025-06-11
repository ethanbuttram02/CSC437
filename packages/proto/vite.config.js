import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
const __dirname = dirname(fileURLToPath(import.meta.url))
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        // Main pages
        main: resolve(__dirname, './index.html'),
        terranBuilds: resolve(__dirname, './terran/terranBuilds.html'),
        protossBuilds: resolve(__dirname, './protoss/protossBuilds.html'),
        zergBuilds: resolve(__dirname, './zerg/zergBuilds.html'),
       
        // Terran builds
        threeCC: resolve(__dirname, './terran/builds/3cc.html'),
        threeRax: resolve(__dirname, './terran/builds/3rax.html'),
        bansheeRush: resolve(__dirname, './terran/builds/banshee-rush.html'),
        bioMine: resolve(__dirname, './terran/builds/bio-mine.html'),
        marineDrop: resolve(__dirname, './terran/builds/marine-drop.html'),
        mech: resolve(__dirname, './terran/builds/mech.html'),
       
        // Protoss builds
        fourGate: resolve(__dirname, './protoss/builds/4gate.html'),
        twoBaseColossus: resolve(__dirname, './protoss/builds/2base-colossus.html'),
        dtRush: resolve(__dirname, './protoss/builds/dt-rush.html'),
        pvzFFE: resolve(__dirname, './protoss/builds/pvz-ffe.html'),
        proxyStargate: resolve(__dirname, './protoss/builds/proxy-stargate.html'),
        carrierRush: resolve(__dirname, './protoss/builds/carrier-rush.html'),
       
        // Zerg builds
        zvzSpeedling: resolve(__dirname, './zerg/builds/zvz-speedling.html'),
        zvtMacro: resolve(__dirname, './zerg/builds/zvt-macro.html'),
        zvpRoach: resolve(__dirname, './zerg/builds/zvp-roach.html'),
        twelvePool: resolve(__dirname, './zerg/builds/12pool.html'),
        lingBaneMuta: resolve(__dirname, './zerg/builds/ling-bane-muta.html'),
        roachHydra: resolve(__dirname, './zerg/builds/roach-hydra.html'),
       
        // Other pages
        forums: resolve(__dirname, './forums.html'),
      },
    },
  },
})