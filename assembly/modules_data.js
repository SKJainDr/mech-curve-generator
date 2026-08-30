// Colours match the blueprint/demo palette throughout.
const COL = { board:0xe9e2cf, part:0xc9d6e3, metal:0x9aa7b3, fixed:0xd8cdb0, ink:0x3a4453, accent:0x8a3a24, pencil:0x2b2b2b };

// Each part: {type:'box'|'cyl', size:[w,h,d] or [rTop,rBot,h], pos:[x,y,z], rot:[rx,ry,rz] (deg, optional), color, label, explode:[dx,dy,dz] (mm, direction+distance moved at full explode)}
const MODULES = {

  m1: { name:'Module 1 — Elliptical Trammel', unit:'Draws circle, ellipse, degenerate line', camera:[420,340,420], parts: [
    {type:'box', size:[320,6,320], pos:[0,3,0], color:COL.board, label:'Base board — cross-slot'},
    {type:'box', size:[260,1,8], pos:[0,6.6,0], color:COL.ink, label:null},
    {type:'box', size:[8,1,260], pos:[0,6.6,0], color:COL.ink, label:null},
    {type:'box', size:[340,6,25], pos:[57.5,9,47.5], rot:[0,-39.56,0], color:COL.part, label:'Trammel beam', explode:[0,60,0]},
    {type:'cyl', size:[9,9,2], pos:[0,4,95], color:COL.metal, label:null, explode:[0,-40,0]},
    {type:'cyl', size:[3,3,20], pos:[0,14,95], color:COL.metal, label:'Slider A (M6 bolt)', explode:[0,40,0]},
    {type:'box', size:[16,6,10], pos:[0,25,95], color:COL.metal, label:'Wingnut', explode:[0,70,0]},
    {type:'cyl', size:[9,9,2], pos:[115,4,0], color:COL.metal, label:null, explode:[0,-40,0]},
    {type:'cyl', size:[3,3,20], pos:[115,14,0], color:COL.metal, label:'Slider B (M6 bolt)', explode:[0,40,0]},
    {type:'box', size:[16,6,10], pos:[115,25,0], color:COL.metal, label:'Wingnut', explode:[0,70,0]},
    {type:'box', size:[26,15,26], pos:[73,16,35], rot:[0,-39.56,0], color:COL.part, label:'Pen holder', explode:[30,90,-30]},
    {type:'cyl', size:[3,3,26], pos:[73,36,35], color:COL.pencil, label:'Pencil', explode:[30,140,-30]},
  ]},

  m2: { name:'Module 2 — Focus & Directrix Rig', unit:'Draws a parabola', camera:[420,320,420], parts: [
    {type:'box', size:[400,6,260], pos:[0,3,0], color:COL.board, label:'Base board'},
    {type:'box', size:[10,14,240], pos:[-140,10,0], color:COL.part, label:'Directrix rail', explode:[-70,0,0]},
    {type:'cyl', size:[4,4,12], pos:[0,9,0], color:COL.metal, label:'Focus pin', explode:[0,50,0]},
    {type:'box', size:[20,14,60], pos:[-127,10,60], color:COL.part, label:'T-square fence', explode:[0,0,60]},
    {type:'box', size:[250,9,14], pos:[-15,7.5,60], color:COL.part, label:'T-square blade', explode:[0,0,60]},
    {type:'box', size:[20,20,15], pos:[60,10,60], color:COL.part, label:'Pencil (on blade)', explode:[0,60,0]},
    {type:'cyl', size:[2.5,2.5,26], pos:[60,26,60], color:COL.pencil, label:null, explode:[0,90,0]},
    {type:'thread', from:[0,9,0], to:[60,10,60], label:'Thread, F to pencil'},
  ]},

  m3: { name:'Module 3 — Two-Focus Rod & Thread', unit:'Draws a hyperbola branch', camera:[420,320,420], parts: [
    {type:'box', size:[420,6,160], pos:[0,3,0], color:COL.board, label:'Base board'},
    {type:'cyl', size:[4,4,12], pos:[-130,9,0], color:COL.metal, label:'F1 (pivot)', explode:[0,40,0]},
    {type:'cyl', size:[4,4,12], pos:[30,9,0], color:COL.metal, label:'F2', explode:[0,40,0]},
    {type:'box', size:[260,6,20], pos:[10,10,0], rot:[0,18,0], color:COL.part, label:'Hyperbola rod', explode:[0,60,0]},
    {type:'thread', from:[113,13,49], to:[30,10,0], label:'Thread, rod-end to F2'},
    {type:'box', size:[20,15,20], pos:[60,10,19], color:COL.part, label:'Pencil block (in groove)', explode:[0,80,20]},
    {type:'cyl', size:[2.5,2.5,26], pos:[60,26,19], color:COL.pencil, label:null, explode:[0,110,20]},
  ]},

  m4: { name:'Module 4 — Angle-Lock Ruler Pair', unit:'Draws a pair of straight lines', camera:[380,300,380], parts: [
    {type:'cyl', size:[9,9,10], pos:[0,8,0], color:COL.metal, label:'Pivot bolt', explode:[0,50,0]},
    {type:'box', size:[300,6,30], pos:[131,10,-70], rot:[0,-28,0], color:COL.part, label:'Ruler 1', explode:[0,50,-30]},
    {type:'box', size:[300,6,30], pos:[131,10,70], rot:[0,28,0], color:COL.part, label:'Ruler 2', explode:[0,50,30]},
    {type:'cyl', size:[40,40,2], pos:[0,6.2,0], color:COL.fixed, label:'Protractor disc', explode:[0,-30,0]},
  ]},

  c1: { name:'Module C1 — Rolling Disc (cardioid config)', unit:'Draws a cycloid (rail) or cardioid (shown)', camera:[360,300,360], parts: [
    {type:'cyl', size:[50,50,6], pos:[0,3,0], color:COL.fixed, label:'Fixed disc', explode:[0,0,0]},
    {type:'box', size:[106,10,20], pos:[50,10,0], color:COL.part, label:'Pivot arm', explode:[0,60,0]},
    {type:'cyl', size:[4,4,14], pos:[0,10,0], color:COL.metal, label:'Pivot bolt', explode:[0,-40,0]},
    {type:'cyl', size:[50,50,6], pos:[100,13,0], color:COL.part, label:'Rolling disc', explode:[60,60,0]},
    {type:'cyl', size:[3,3,14], pos:[100,13,0], color:COL.metal, label:'Free axle', explode:[60,90,0]},
    {type:'cyl', size:[2.5,2.5,20], pos:[150,16,0], color:COL.pencil, label:'Rim pen hole', explode:[90,80,0]},
  ]},

  c2: { name:'Module C2 — Spiral Arm', unit:'Draws an Archimedean spiral', camera:[380,300,380], parts: [
    {type:'box', size:[260,6,25], pos:[110,9,0], color:COL.part, label:'Slotted arm', explode:[0,60,0]},
    {type:'cyl', size:[8,8,15], pos:[0,13.5,0], color:COL.metal, label:'Traverse-rate unit (post)', explode:[0,-50,0]},
    {type:'box', size:[70,10,25], pos:[0,4,45], color:COL.board, label:'Idler bracket (base-mounted)', explode:[0,0,60]},
    {type:'cyl', size:[7,7,10], pos:[20,10,45], color:COL.metal, label:'Idler wheel', explode:[0,40,60]},
    {type:'thread', from:[20,15,45], to:[220,12,0], label:'Cord to pencil block'},
    {type:'box', size:[24,15,24], pos:[220,9,0], color:COL.part, label:'Free-sliding pencil block', explode:[60,60,0]},
    {type:'cyl', size:[3,3,26], pos:[220,26,0], color:COL.pencil, label:null, explode:[60,90,0]},
  ]},

  c3: { name:'Module C3 — Helix Rig', unit:'Draws a helix (side view)', camera:[520,340,420], parts: [
    {type:'box', size:[420,10,90], pos:[0,5,0], color:COL.board, label:'Base rail', explode:[0,0,0]},
    {type:'box', size:[24,24,24], pos:[-180,17,0], color:COL.part, label:'Pillow block', explode:[0,60,0]},
    {type:'box', size:[24,24,24], pos:[180,17,0], color:COL.part, label:'Pillow block', explode:[0,60,0]},
    {type:'cyl', size:[3,3,380], pos:[0,17,0], rot:[0,0,90], color:COL.metal, label:'Main shaft', explode:[0,0,80]},
    {type:'cyl', size:[50,50,6], pos:[-150,17,0], rot:[0,0,90], color:COL.fixed, label:'Drive disc', explode:[0,0,-40]},
    {type:'box', size:[70,10,25], pos:[-150,4,35], color:COL.board, label:'Idler bracket (pitch)', explode:[0,0,60]},
    {type:'cyl', size:[7,7,10], pos:[-150,10,35], rot:[90,0,0], color:COL.metal, label:'Idler wheel (pitch)', explode:[0,40,60]},
    {type:'box', size:[140,20,15], pos:[-70,27,0], color:COL.part, label:'Crank arm (radius r)', explode:[0,70,0]},
    {type:'cyl', size:[3,3,20], pos:[-10,37,0], color:COL.metal, label:'Crank pin', explode:[0,90,0]},
    {type:'box', size:[26,50,15], pos:[0,42,0], color:COL.part, label:'Yoke block', explode:[0,110,0]},
    {type:'box', size:[40,14,60], pos:[0,12,0], color:COL.part, label:'Axial carriage', explode:[0,-40,0]},
    {type:'cyl', size:[3,3,26], pos:[0,60,0], color:COL.pencil, label:'Pencil', explode:[0,140,0]},
  ]},

  c4: { name:'Module C4 — Spiralling Helix Rig', unit:'Draws a spiralling / conical helix', camera:[520,340,420], parts: [
    {type:'box', size:[420,10,90], pos:[0,5,0], color:COL.board, label:'Base rail', explode:[0,0,0]},
    {type:'box', size:[24,24,24], pos:[-180,17,0], color:COL.part, label:'Pillow block', explode:[0,60,0]},
    {type:'box', size:[24,24,24], pos:[180,17,0], color:COL.part, label:'Pillow block', explode:[0,60,0]},
    {type:'cyl', size:[3,3,380], pos:[0,17,0], rot:[0,0,90], color:COL.metal, label:'Main shaft', explode:[0,0,80]},
    {type:'cyl', size:[50,50,6], pos:[-150,17,0], rot:[0,0,90], color:COL.fixed, label:'Drive disc (pitch)', explode:[0,0,-40]},
    {type:'box', size:[70,10,25], pos:[-150,4,35], color:COL.board, label:'Idler bracket (pitch)', explode:[0,0,60]},
    {type:'cyl', size:[7,7,10], pos:[-150,10,35], rot:[90,0,0], color:COL.metal, label:'Idler wheel (pitch)', explode:[0,40,60]},
    {type:'cyl', size:[45,45,6], pos:[-70,17,0], rot:[0,0,90], color:COL.fixed, label:'Drive disc (flare)', explode:[0,0,-40]},
    {type:'box', size:[65,10,22], pos:[-70,4,-32], color:COL.board, label:'Idler bracket (flare)', explode:[0,0,-60]},
    {type:'cyl', size:[6,6,9], pos:[-70,9,-32], rot:[90,0,0], color:COL.metal, label:'Idler wheel (flare)', explode:[0,40,-60]},
    {type:'box', size:[100,16,14], pos:[-20,27,0], color:COL.part, label:'Radial slider arm', explode:[0,70,0]},
    {type:'cyl', size:[3,3,20], pos:[10,35,0], color:COL.metal, label:'Slider pin', explode:[0,90,0]},
    {type:'box', size:[26,50,15], pos:[20,40,0], color:COL.part, label:'Yoke block', explode:[0,110,0]},
    {type:'box', size:[40,14,60], pos:[0,12,0], color:COL.part, label:'Axial carriage', explode:[0,-40,0]},
    {type:'cyl', size:[3,3,26], pos:[20,58,0], color:COL.pencil, label:'Pencil', explode:[0,140,0]},
  ]},

};
