// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
import "typeface-nunito"
import "typeface-alegreya"

require("typeface-open-sans")
require("typeface-muli")
require("typeface-noto-sans")
require("@openfonts/ibarra-real-nova_latin")
require("typeface-cousine")

// trigger an immediate page refresh when an update is found
export const onServiceWorkerUpdateReady = () => window.location.reload()
