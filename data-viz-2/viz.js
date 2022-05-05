import vl from "vega-lite-api";

export const viz = vl
  .markBar({
    opacity: 1,
  })
  .encode(
    vl.x().fieldN("Programming language").sort("-y"),
    vl.y().fieldQ("Share").title("share by %"),
    vl.color().fieldN("Programming language").title(""),
    vl.tooltip().fieldN("Programming language")
  );
