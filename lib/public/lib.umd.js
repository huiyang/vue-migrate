(function(global, factory) {
  typeof exports === "object" && typeof module !== "undefined" ? factory(require("vue")) : typeof define === "function" && define.amd ? define(["vue"], factory) : (global = typeof globalThis !== "undefined" ? globalThis : global || self, factory(global.Vue));
})(this, function(vue) {
  "use strict";
  window.Ant.booting(function(app) {
    console.log("addon booting", app.version);
    app.component("custom-field2", vue.defineAsyncComponent(() => Promise.resolve().then(() => Field$1)));
  });
  const _export_sfc = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
      target[key] = val;
    }
    return target;
  };
  const _sfc_main = {
    data() {
      return {
        contentValue: ""
      };
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("div", null, [
      vue.createTextVNode(" Addon " + vue.toDisplayString($data.contentValue) + " ", 1),
      vue.withDirectives(vue.createElementVNode("input", {
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.contentValue = $event)
      }, null, 512), [
        [vue.vModelText, $data.contentValue]
      ])
    ]);
  }
  const Field = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
  const Field$1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
    __proto__: null,
    default: Field
  }, Symbol.toStringTag, { value: "Module" }));
});
