import { ref as d, onMounted as l, openBlock as p, createElementBlock as c, normalizeStyle as u, normalizeClass as i, unref as r, renderSlot as _ } from "vue";
const f = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [o, a] of e)
    t[o] = a;
  return t;
}, m = {
  __name: "index",
  props: {
    width: {
      type: String,
      default: "auto"
    },
    radius: {
      type: String,
      default: "0px"
    },
    type: {
      type: String,
      default: "up"
    }
  },
  setup(n) {
    const e = n;
    let t = d(!0);
    return l(() => {
      e.type === "up" ? t.value = !0 : e.type === "down" && (t.value = !1);
    }), (o, a) => (p(), c("div", {
      id: "mdPanel",
      style: u({ width: e.width, borderRadius: e.radius }),
      class: i({ md_panel_up: r(t), md_panel_down: !r(t) })
    }, [
      _(o.$slots, "default", {}, void 0, !0)
    ], 6));
  }
}, s = /* @__PURE__ */ f(m, [["__scopeId", "data-v-808f268c"]]), y = [s], x = {
  install(n) {
    y.forEach((e) => {
      n.component(e.name, s);
    });
  }
};
export {
  s as MdPanel,
  x as default
};
