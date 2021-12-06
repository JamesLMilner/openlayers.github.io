"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9932],{60804:function(e,t,n){var r=n(87103),o=n(41376),i=n(14703),a=n(95783),u=n(54354),f=n(96421),l=n(54240),s=n(32275),c=n(62990),d=n(33716);function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=m(e);if(t){var o=m(this).constructor;n=Reflect.construct(r,arguments,o)}else n=r.apply(this,arguments);return p(this,n)}}function p(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var y="blur",x="gradient",b="radius",w=["#00f","#0ff","#0f0","#ff0","#f00"];var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(i,e);var t,n,r,o=h(i);function i(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i);var n=e||{},r=(0,s.f0)({},n);delete r.gradient,delete r.radius,delete r.blur,delete r.weight,(t=o.call(this,r)).gradient_=null,t.addChangeListener(x,t.handleGradientChanged_),t.setGradient(n.gradient?n.gradient:w),t.setBlur(void 0!==n.blur?n.blur:15),t.setRadius(void 0!==n.radius?n.radius:8);var a=n.weight?n.weight:"weight";return t.weightFunction_="string"==typeof a?function(e){return e.get(a)}:a,t.setRenderOrder(null),t}return t=i,(n=[{key:"getBlur",value:function(){return this.get(y)}},{key:"getGradient",value:function(){return this.get(x)}},{key:"getRadius",value:function(){return this.get(b)}},{key:"handleGradientChanged_",value:function(){this.gradient_=function(e){for(var t=1,n=256,r=(0,d.E4)(t,n),o=r.createLinearGradient(0,0,t,n),i=1/(e.length-1),a=0,u=e.length;a<u;++a)o.addColorStop(a*i,e[a]);return r.fillStyle=o,r.fillRect(0,0,t,n),r.canvas}(this.getGradient())}},{key:"setBlur",value:function(e){this.set(y,e)}},{key:"setGradient",value:function(e){this.set(x,e)}},{key:"setRadius",value:function(e){this.set(b,e)}},{key:"createRenderer",value:function(){return new l.Z(this,{className:this.getClassName(),attributes:[{name:"weight",callback:function(e){var t=this.weightFunction_(e);return void 0!==t?(0,c.uZ)(t,0,1):1}.bind(this)}],vertexShader:"\n        precision mediump float;\n        uniform mat4 u_projectionMatrix;\n        uniform mat4 u_offsetScaleMatrix;\n        uniform float u_size;\n        attribute vec2 a_position;\n        attribute float a_index;\n        attribute float a_weight;\n\n        varying vec2 v_texCoord;\n        varying float v_weight;\n\n        void main(void) {\n          mat4 offsetMatrix = u_offsetScaleMatrix;\n          float offsetX = a_index == 0.0 || a_index == 3.0 ? -u_size / 2.0 : u_size / 2.0;\n          float offsetY = a_index == 0.0 || a_index == 1.0 ? -u_size / 2.0 : u_size / 2.0;\n          vec4 offsets = offsetMatrix * vec4(offsetX, offsetY, 0.0, 0.0);\n          gl_Position = u_projectionMatrix * vec4(a_position, 0.0, 1.0) + offsets;\n          float u = a_index == 0.0 || a_index == 3.0 ? 0.0 : 1.0;\n          float v = a_index == 0.0 || a_index == 1.0 ? 0.0 : 1.0;\n          v_texCoord = vec2(u, v);\n          v_weight = a_weight;\n        }",fragmentShader:"\n        precision mediump float;\n        uniform float u_blurSlope;\n\n        varying vec2 v_texCoord;\n        varying float v_weight;\n\n        void main(void) {\n          vec2 texCoord = v_texCoord * 2.0 - vec2(1.0, 1.0);\n          float sqRadius = texCoord.x * texCoord.x + texCoord.y * texCoord.y;\n          float value = (1.0 - sqrt(sqRadius)) * u_blurSlope;\n          float alpha = smoothstep(0.0, 1.0, value) * v_weight;\n          gl_FragColor = vec4(alpha, alpha, alpha, alpha);\n        }",hitVertexShader:"\n        precision mediump float;\n        uniform mat4 u_projectionMatrix;\n        uniform mat4 u_offsetScaleMatrix;\n        uniform float u_size;\n        attribute vec2 a_position;\n        attribute float a_index;\n        attribute float a_weight;\n        attribute vec4 a_hitColor;\n\n        varying vec2 v_texCoord;\n        varying float v_weight;\n        varying vec4 v_hitColor;\n\n        void main(void) {\n          mat4 offsetMatrix = u_offsetScaleMatrix;\n          float offsetX = a_index == 0.0 || a_index == 3.0 ? -u_size / 2.0 : u_size / 2.0;\n          float offsetY = a_index == 0.0 || a_index == 1.0 ? -u_size / 2.0 : u_size / 2.0;\n          vec4 offsets = offsetMatrix * vec4(offsetX, offsetY, 0.0, 0.0);\n          gl_Position = u_projectionMatrix * vec4(a_position, 0.0, 1.0) + offsets;\n          float u = a_index == 0.0 || a_index == 3.0 ? 0.0 : 1.0;\n          float v = a_index == 0.0 || a_index == 1.0 ? 0.0 : 1.0;\n          v_texCoord = vec2(u, v);\n          v_hitColor = a_hitColor;\n          v_weight = a_weight;\n        }",hitFragmentShader:"\n        precision mediump float;\n        uniform float u_blurSlope;\n\n        varying vec2 v_texCoord;\n        varying float v_weight;\n        varying vec4 v_hitColor;\n\n        void main(void) {\n          vec2 texCoord = v_texCoord * 2.0 - vec2(1.0, 1.0);\n          float sqRadius = texCoord.x * texCoord.x + texCoord.y * texCoord.y;\n          float value = (1.0 - sqrt(sqRadius)) * u_blurSlope;\n          float alpha = smoothstep(0.0, 1.0, value) * v_weight;\n          if (alpha < 0.05) {\n            discard;\n          }\n\n          gl_FragColor = v_hitColor;\n        }",uniforms:{u_size:function(){return 2*(this.get(b)+this.get(y))}.bind(this),u_blurSlope:function(){return this.get(b)/Math.max(1,this.get(y))}.bind(this)},postProcesses:[{fragmentShader:"\n            precision mediump float;\n\n            uniform sampler2D u_image;\n            uniform sampler2D u_gradientTexture;\n\n            varying vec2 v_texCoord;\n\n            void main() {\n              vec4 color = texture2D(u_image, v_texCoord);\n              gl_FragColor.a = color.a;\n              gl_FragColor.rgb = texture2D(u_gradientTexture, vec2(0.5, color.a)).rgb;\n              gl_FragColor.rgb *= gl_FragColor.a;\n            }",uniforms:{u_gradientTexture:function(){return this.gradient_}.bind(this)}}]})}},{key:"renderDeclutter",value:function(){}}])&&_(t.prototype,n),r&&_(t,r),i}(f.Z),S=n(42010),k=document.getElementById("blur"),R=document.getElementById("radius"),M=new C({source:new a.Z({url:"data/kml/2012_Earthquakes_Mag5.kml",format:new r.ZP({extractStyles:!1})}),blur:parseInt(k.value,10),radius:parseInt(R.value,10),weight:function(e){var t=e.get("name");return parseFloat(t.substr(2))-5}}),j=new S.Z({source:new i.Z({layer:"toner"})});new o.Z({layers:[j,M],target:"map",view:new u.ZP({center:[0,0],zoom:2})});var z=function(){M.setBlur(parseInt(k.value,10))};k.addEventListener("input",z),k.addEventListener("change",z);var E=function(){M.setRadius(parseInt(R.value,10))};R.addEventListener("input",E),R.addEventListener("change",E)}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(60804)}]);
//# sourceMappingURL=heatmap-earthquakes.js.map