const xs = 480
const sm = 768
const md = 960
const lg = 1120
const xl = 1280

export const extraSmall = (styles) => ({
  [`@media (min-width: ${xs}px)`]: styles
})

export const small = (styles) => ({
  [`@media (min-width: ${sm}px)`]: styles
})

export const medium = (styles) => ({
  [`@media (min-width: ${md}px)`]: styles
})

export const large = (styles) => ({
  [`@media (min-width: ${lg}px)`]: styles
})

export const extraLarge = (styles) => ({
  [`@media (min-width: ${xl}px)`]: styles
})
