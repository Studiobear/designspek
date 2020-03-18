// string assignments for improved minification

const a = 'a'
const A = 'A'
const c = 'c'
const C = 'C'
const m = 'margin'
const p = 'padding'
const t = 'top'
const T = 'Top'
const r = 'right'
const R = 'Right'
const b = 'bottom'
const B = 'Bottom'
const l = 'left'
const L = 'Left'
const w = 'width'
const h = 'height'
const W = 'Width'
const H = 'Height'
const d = 'display'
const min = 'min'
const max = 'max'
const brd = 'border'
const bx = 'box'
const shd = 'shadow'
const grid = 'grid'
const inl = 'inline'
const ap = 'ap'
const gap = `g${ap}`
const Gap = `G${ap}`
const sp = 'space'
const end = 'End'
const fst = 'first'
const lst = 'last'
const strt = 'Start'
const cent = 'center'
const ev = 'Evenly'
const arnd = 'Around'
const btwn = 'Between'
const slf = 'self'
const str = 'stretch'
const bsl = 'baseline'
const row = 'row'
const Row = 'Row'
const rev = 'rev'
const Rev = 'Reverse'
const col = 'col'
const Col = 'Column'
const color = `${col}or`
const column = `${col}umn`
const cont = 'cont'
const content = `${cont}ent`
const flex = 'flex'
const bas = 'Basis'
const no = 'no'
const sf = 'safe'
const unsf = `un${sf}`
const wrap = 'Wrap'
const shr = 'Shrink'
const grow = 'Grow'
const dir = 'dir'
const Dir = 'Direction'
const deco = 'deco'
const Deco = 'Decoration'
const direction = `${dir}ection`
const ord = 'order'
const temp = 'temp'
const Temp = 'Template'
const align = 'align'
const just = 'justify'
const place = 'place'
const items = 'Items'
const area = 'area'
const Area = 'Area'
const auto = 'auto'
const flow = 'flow'
const Flow = 'Flow'
const bg = 'bg'
const bkgd = 'background'
const image = 'Image'
const size = 'Size'
const pos = 'pos'
const position = `${pos}ition`
const repeat = 'repeat'
const attachment = 'Attachment'
const lign = 'lign'
const olor = 'olor'
const uto = 'uto'
const txt = 'text'
const f = 'fill'
const s = 'stroke'
const Op = 'Opacity'
const Lc = 'Linecap'

export const shortHandAttributes = new Map([
  ['m', [m]],
  ['mt', [`${m}${T}`]],
  ['mr', [`${m}${R}`]],
  ['mb', [`${m}${B}`]],
  ['ml', [`${m}${L}`]],
  ['mx', [`${m}${L}`, `${m}${R}`]],
  ['my', [`${m}${T}`, `${m}${B}`]],
  ['p', [p]],
  ['pt', [`${p}${T}`]],
  ['pr', [`${p}${R}`]],
  ['pb', [`${p}${B}`]],
  ['pl', [`${p}${L}`]],
  ['px', [`${p}${L}`, `${p}${R}`]],
  ['py', [`${p}${T}`, `${p}${B}`]],
  [bg, [`${bkgd}${C}${olor}`]],
  [`${bg}${image}`, [`${bkgd}${image}`]],
  [`${bg}${size}`, [`${bkgd}${size}`]],
  [`${bg}${pos}`, [`${bkgd}${position}`]],
  [`${bg}${repeat}`, [`${bkgd}${repeat}`]],
  [`${bg}${attachment}`, [`${bkgd}${attachment}`]],
  ['w', [w]],
  ['h', [h]],
  ['t', [t]],
  ['l', [l]],
  ['r', [r]],
  ['b', [b]],
  [`${pos}`, [`${position}`]],
  [size, [w, h]],
  ['d', [d]],
  [`${min}w`, [`${min}${W}`]],
  [`${min}-w`, [`${min}${W}`]],
  [`${max}w`, [`${max}${W}`]],
  [`${max}-w`, [`${max}${W}`]],
  [`${min}h`, [`${min}${H}`]],
  [`${min}-h`, [`${min}${H}`]],
  [`${max}h`, [`${max}${H}`]],
  [`${max}-h`, [`${max}${H}`]],
  ['brd', [brd]],
  ['brdCol', [`${brd}${C}${olor}`]],
  ['bt', [`${brd}${T}`]],
  ['br', [`${brd}${R}`]],
  ['bb', [`${brd}${B}`]],
  ['bl', [`${brd}${L}`]],
  ['bx', [`${brd}${L}`, `${brd}${R}`]],
  ['by', [`${brd}${T}`, `${brd}${B}`]],
  ['shd', [`${bx}-${shd}`]],
  [content, [content]],
  [align, [`${align}${items}`]],
  [`just`, [`${just}${items}`]],
  [`place`, [`${place}${items}`]],
  [`${align}${c}`, [`${align}Content`]],
  [`just${c}`, [`${just}Content`]],
  ['slf', [`${align}Self`]],
  ['wrap', ['wrap']],
  ['strt', 'Start'],
  [`${slf}${strt}`, [`${slf}${strt}`]],
  ['end', ['end']],
  [`${slf}${end}`, [`${slf}${end}`]],
  ['bsl', [bsl]],
  [`${fst}${bsl}`, [`${fst} ${bsl}`]],
  [`${lst}${bsl}`, [`${lst} ${bsl}`]],
  ['str', [str]],
  ['sf', [sf]],
  ['unsf', [unsf]],
  ['cent', [cent]],
  [`${sp}${btwn}`, [`${sp}${btwn}`]],
  [`${sp}${arnd}`, [`${sp}${arnd}`]],
  [`${sp}${ev}`, [`${sp}${ev}`]],
  [`${flex}${grow}`, [`${flex}${grow}`]],
  [direction, [`${flex}${Dir}`]],
  [`${flex}`, [`${flex}`]],
  [`${flex}${wrap}`, [`${flex}${wrap}`]],
  [`${flex}${shr}`, [`${flex}${shr}`]],
  [`${no}${wrap}`, [`${no}${wrap}`]],
  [`${wrap}rev`, [`${wrap}${rev}`]],
  [`${flex}${dir}`, [`${flex}${Dir}`]],
  [`${flex}${flow}`, [`${flex}${flow}`]],
  [`${flex}bas`, [`${flex}${bas}`]],
  [`${flex}${strt}`, [`${flex}${strt}`]],
  [`${flex}${end}`, [`${flex}${end}`]],
  ['ord', [ord]],
  [gap, [gap]],
  [grid, [grid]],
  [`in${grid}`, [`${inl}Grid`]],
  [`${grid}${gap}`, [`${grid}${Gap}`]],
  [`${row}`, [`${grid}${Row}`]],
  [`${row}${rev}`, [`${row}${Rev}`]],
  [`${row}${gap}`, [`${grid}${Row}${Gap}`]],
  [`${column}`, [`${grid}${Col}`]],
  [`${col}${rev}`, [`${col}${Rev}`]],
  [`${col}${gap}`, [`${grid}${Col}${Gap}`]],
  [`${area}`, [`${grid}${Area}`]],
  [`${auto}${flow}`, [`${grid}${A}${uto}${flow}`]],
  [`${auto}${row}s`, [`${grid}${A}${uto}${Row}s`]],
  [`${auto}${col}s`, [`${grid}${A}${uto}${column}s`]],
  [`${temp}${row}s`, [`${grid}${Temp}${Row}s`]],
  [`${temp}${col}s`, [`${grid}${Temp}${Col}s`]],
  [`${grid}${area}s`, [`${grid}${Temp}${Area}s`]],
  [`txt${A}${lign}`, [`${txt}${A}${lign}`]],
  [`txt${deco}`, [`${txt}${Deco}`]],
  ['f', [f]],
  ['s', [s]],
  ['swidth', [`${s}${W}`]],
  ['sOp', [`${s}${Op}`]],
  ['sLc', [`${s}${Lc}`]],
])
