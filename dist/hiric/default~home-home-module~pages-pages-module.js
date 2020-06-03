(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~home-home-module~pages-pages-module"],{

/***/ "./node_modules/angular-particle/index.js":
/*!************************************************!*\
  !*** ./node_modules/angular-particle/index.js ***!
  \************************************************/
/*! exports provided: ParticlesModule, ParticlesComponent, ParticlesDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticlesModule", function() { return ParticlesModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticlesComponent", function() { return ParticlesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticlesDirective", function() { return ParticlesDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var ParticlesComponent = (function () {
    function ParticlesComponent() {
        this.width = 100;
        this.height = 100;
        this.style = {};
    }
    return ParticlesComponent;
}());
ParticlesComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'particles',
                template: "\n        <div [ngStyle]=\"style\" class=\"particles-container\">\n            <canvas d-particles [params]=\"params\" [style.width.%]=\"width\" [style.height.%]=\"height\"></canvas>\n        </div>\n    "
            },] },
];
/**
 * @nocollapse
 */
ParticlesComponent.ctorParameters = function () { return []; };
ParticlesComponent.propDecorators = {
    'width': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'height': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'params': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'style': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
};

var hexToRgb = function (hex) {
    var /** @type {?} */ shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    hex = hex.replace(shorthandRegex, function (m, r, g, b) {
        return r + r + g + g + b + b;
    });
    var /** @type {?} */ result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
    } : null;
};
var clamp = function (number, min, max) {
    return Math.min(Math.max(number, min), max);
};
var isInArray = function (value, array) {
    return array.indexOf(value) > -1;
};
var deepExtend = function (destination, source) {
    for (var /** @type {?} */ property in source) {
        if (source[property] &&
            source[property].constructor &&
            source[property].constructor === Object) {
            destination[property] = destination[property] || {};
            deepExtend(destination[property], source[property]);
        }
        else {
            destination[property] = source[property];
        }
    }
    return destination;
};
var getColor = function (colorObject) {
    var /** @type {?} */ color = {};
    if (typeof (colorObject) == 'object') {
        if (colorObject instanceof Array) {
            var /** @type {?} */ selectedColor = colorObject[Math.floor(Math.random() * colorObject.length)];
            color.rgb = hexToRgb(selectedColor);
        }
        else {
            var r = colorObject.r, g = colorObject.g, b = colorObject.b;
            if (r !== undefined && g !== undefined && b !== undefined) {
                color.rgb = { r: r, g: g, b: b };
            }
            else {
                var h = colorObject.h, s = colorObject.s, l = colorObject.l;
                if (h !== undefined && g !== undefined && b !== undefined) {
                    color.hsl = { h: h, s: s, l: l };
                }
            }
        }
    }
    else if (colorObject == 'random') {
        color.rgb = {
            r: (Math.floor(Math.random() * 255) + 1),
            g: (Math.floor(Math.random() * 255) + 1),
            b: (Math.floor(Math.random() * 255) + 1)
        };
    }
    else if (typeof (colorObject) == 'string') {
        color.rgb = hexToRgb(colorObject);
    }
    return color;
};
var getDefaultParams = function () {
    return {
        particles: {
            number: {
                value: 100,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#FFF'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                },
                polygon: {
                    nb_sides: 5
                },
                image: {
                    src: '',
                    width: 100,
                    height: 100
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false,
                    speed: 40,
                    size_min: 0,
                    sync: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#FFF',
                opacity: 0.6,
                width: 1,
                shadow: {
                    enable: false,
                    blur: 5,
                    color: 'lime'
                }
            },
            move: {
                enable: true,
                speed: 3,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: true,
                attract: {
                    enable: false,
                    rotateX: 3000,
                    rotateY: 3000
                }
            },
            array: []
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 200,
                    line_linked: {
                        opacity: 1
                    }
                },
                bubble: {
                    distance: 200,
                    size: 80,
                    duration: 0.4
                },
                repulse: {
                    distance: 200,
                    duration: 0.4
                },
                push: {
                    particles_nb: 4
                },
                remove: {
                    particles_nb: 2
                }
            },
            mouse: {}
        },
        retina_detect: true
    };
};
/**
 * @param {?} params
 * @param {?} tmp
 * @return {?}
 */
function loadImg(params, tmp) {
    var particles = this.params.particles;
    tmp.img_error = undefined;
    if (particles.shape.type == 'image' && particles.shape.image.src != '') {
        if (tmp.img_type == 'svg') {
            var /** @type {?} */ xhr_1 = new XMLHttpRequest();
            xhr_1.open('GET', particles.shape.image.src);
            xhr_1.onreadystatechange = function (data) {
                if (xhr_1.readyState == 4) {
                    if (xhr_1.status == 200) {
                        tmp.source_svg = data.currentTarget.response;
                        if (tmp.source_svg == undefined) {
                            var /** @type {?} */ check = void 0;
                            tmp.checkAnimFrame = requestAnimationFrame(check);
                        }
                    }
                    else {
                        tmp.img_error = true;
                        throw "Error : image not found";
                    }
                }
            };
            xhr_1.send();
        }
        else {
            var /** @type {?} */ img_1 = new Image();
            img_1.addEventListener('load', function () {
                tmp.img_obj = img_1;
                cancelAnimationFrame(tmp.checkAnimFrame);
            });
            img_1.src = particles.shape.image.src;
        }
    }
    else {
        tmp.img_error = true;
        throw "Error : no image.src";
    }
}
/**
 * @param {?} particle
 * @param {?} tmp
 * @return {?}
 */
function createSvgImg(particle, tmp) {
    var /** @type {?} */ svgXml = tmp.source_svg;
    var /** @type {?} */ rgbHex = /#([0-9A-F]{3,6})/gi;
    var /** @type {?} */ coloredSvgXml = svgXml.replace(rgbHex, function (m, r, g, b) {
        var /** @type {?} */ color_value;
        if (particle.color.rgb) {
            var _a = particle.color.rgb, r_1 = _a.r, g_1 = _a.g, b_1 = _a.b;
            color_value = "rgba( " + r_1 + ", " + g_1 + ", " + b_1 + ", " + particle.opacity + " )";
        }
        else {
            var _b = particle.color.hsl, h = _b.h, s = _b.s, l = _b.l;
            color_value = "rgba( " + h + ", " + s + ", " + l + ", " + particle.opacity + " )";
        }
        return color_value;
    });
    var /** @type {?} */ svg = new Blob([coloredSvgXml], {
        type: 'image/svg+xml;charset=utf-8'
    });
    var /** @type {?} */ DOMURL = window.URL || window;
    var /** @type {?} */ url = DOMURL.createObjectURL(svg);
    var /** @type {?} */ img = new Image();
    img.addEventListener('load', function () {
        particle.img.obj = img;
        particle.img.loaded = true;
        DOMURL.revokeObjectURL(url);
        tmp.count_svg++;
    });
    img.src = url;
}

var CanvasManager$$1 = (function () {
    /**
     * @param {?} _canvasParams
     * @param {?} _params
     * @param {?} _tmpParams
     */
    function CanvasManager$$1(_canvasParams, _params, _tmpParams) {
        this._canvasParams = _canvasParams;
        this._params = _params;
        this._tmpParams = _tmpParams;
        this._onWindowResize = this._onWindowResize.bind(this);
        this._retinaInit();
        this._canvasSize();
        this.particlesManager = new ParticlesManager$$1(this._canvasParams, this._params, this._tmpParams);
        this.particlesManager.particlesCreate();
        this._densityAutoParticles();
        var particles = this._params.particles;
        particles.line_linked.color_rgb_line = hexToRgb(particles.line_linked.color);
    }
    /**
     * @return {?}
     */
    CanvasManager$$1.prototype.draw = function () {
        var particles = this._params.particles;
        if (particles.shape.type == 'image') {
            if (this._tmpParams.img_type == 'svg') {
                if (this._tmpParams.count_svg >= particles.number.value) {
                    this.particlesManager.particlesDraw();
                    if (!particles.move.enable) {
                        cancelAnimationFrame(this._tmpParams.drawAnimFrame);
                    }
                    else {
                        this._tmpParams.drawAnimFrame = requestAnimationFrame(this.draw.bind(this));
                    }
                }
                else {
                    if (!this._tmpParams.img_error) {
                        this._tmpParams.drawAnimFrame = requestAnimationFrame(this.draw.bind(this));
                    }
                }
            }
            else {
                if (this._tmpParams.img_obj != undefined) {
                    this.particlesManager.particlesDraw();
                    if (!particles.move.enable) {
                        cancelAnimationFrame(this._tmpParams.drawAnimFrame);
                    }
                    else {
                        this._tmpParams.drawAnimFrame = requestAnimationFrame(this.draw.bind(this));
                    }
                }
                else {
                    if (!this._tmpParams.img_error) {
                        this._tmpParams.drawAnimFrame = requestAnimationFrame(this.draw.bind(this));
                    }
                }
            }
        }
        else {
            this.particlesManager.particlesDraw();
            if (!particles.move.enable) {
                cancelAnimationFrame(this._tmpParams.drawAnimFrame);
            }
            else {
                this._tmpParams.drawAnimFrame = requestAnimationFrame(this.draw.bind(this));
            }
        }
    };
    /**
     * @return {?}
     */
    CanvasManager$$1.prototype._densityAutoParticles = function () {
        var particles = this._params.particles;
        if (particles.number.density.enable) {
            var /** @type {?} */ area = this._canvasParams.el.width * this._canvasParams.el.height / 1000;
            if (this._tmpParams.retina) {
                area = area / (this._canvasParams.pxratio * 2);
            }
            var /** @type {?} */ nb_particles = area * particles.number.value / particles.number.density.value_area;
            var /** @type {?} */ missing_particles = particles.array.length - nb_particles;
            if (missing_particles < 0) {
                this.particlesManager.pushParticles(Math.abs(missing_particles));
            }
            else {
                this.particlesManager.removeParticles(missing_particles);
            }
        }
    };
    /**
     * @return {?}
     */
    CanvasManager$$1.prototype._retinaInit = function () {
        if (this._params.retina_detect && window.devicePixelRatio > 1) {
            this._canvasParams.pxratio = window.devicePixelRatio;
            this._tmpParams.retina = true;
            this._canvasParams.width = this._canvasParams.el.offsetWidth * this._canvasParams.pxratio;
            this._canvasParams.height = this._canvasParams.el.offsetHeight * this._canvasParams.pxratio;
            this._params.particles.size.value = this._tmpParams.obj.size_value * this._canvasParams.pxratio;
            this._params.particles.size.anim.speed = this._tmpParams.obj.size_anim_speed * this._canvasParams.pxratio;
            this._params.particles.move.speed = this._tmpParams.obj.move_speed * this._canvasParams.pxratio;
            this._params.particles.line_linked.distance = this._tmpParams.obj.line_linked_distance * this._canvasParams.pxratio;
            this._params.interactivity.modes.grab.distance = this._tmpParams.obj.mode_grab_distance * this._canvasParams.pxratio;
            this._params.interactivity.modes.bubble.distance = this._tmpParams.obj.mode_bubble_distance * this._canvasParams.pxratio;
            this._params.particles.line_linked.width = this._tmpParams.obj.line_linked_width * this._canvasParams.pxratio;
            this._params.interactivity.modes.bubble.size = this._tmpParams.obj.mode_bubble_size * this._canvasParams.pxratio;
            this._params.interactivity.modes.repulse.distance = this._tmpParams.obj.mode_repulse_distance * this._canvasParams.pxratio;
        }
        else {
            this._canvasParams.pxratio = 1;
            this._tmpParams.retina = false;
        }
    };
    /**
     * @return {?}
     */
    CanvasManager$$1.prototype._canvasClear = function () {
        this._canvasParams.ctx.clearRect(0, 0, this._canvasParams.width, this._canvasParams.height);
    };
    /**
     * @return {?}
     */
    CanvasManager$$1.prototype._canvasPaint = function () {
        this._canvasParams.ctx.fillRect(0, 0, this._canvasParams.width, this._canvasParams.height);
    };
    /**
     * @return {?}
     */
    CanvasManager$$1.prototype._canvasSize = function () {
        this._canvasParams.el.width = this._canvasParams.width;
        this._canvasParams.el.height = this._canvasParams.height;
        if (this._params && this._params.interactivity.events.resize) {
            window.addEventListener('resize', this._onWindowResize);
        }
    };
    /**
     * @return {?}
     */
    CanvasManager$$1.prototype._onWindowResize = function () {
        this._canvasParams.width = this._canvasParams.el.offsetWidth;
        this._canvasParams.height = this._canvasParams.el.offsetHeight;
        if (this._tmpParams.retina) {
            this._canvasParams.width *= this._canvasParams.pxratio;
            this._canvasParams.height *= this._canvasParams.pxratio;
        }
        this._canvasParams.el.width = this._canvasParams.width;
        this._canvasParams.el.height = this._canvasParams.height;
        if (!this._params.particles.move.enable) {
            this.particlesManager.particlesEmpty();
            this.particlesManager.particlesCreate();
            this.particlesManager.particlesDraw();
            this._densityAutoParticles();
        }
        this._densityAutoParticles();
    };
    return CanvasManager$$1;
}());

var ParticlesManager$$1 = (function () {
    /**
     * @param {?} _canvasParams
     * @param {?} _params
     * @param {?} _tmpParams
     */
    function ParticlesManager$$1(_canvasParams, _params, _tmpParams) {
        this._canvasParams = _canvasParams;
        this._params = _params;
        this._tmpParams = _tmpParams;
        this._interaction = new ParticleInteraction();
    }
    /**
     * @return {?}
     */
    ParticlesManager$$1.prototype.particlesCreate = function () {
        var _a = this._params.particles, color = _a.color, opacity = _a.opacity;
        for (var /** @type {?} */ i = 0; i < this._params.particles.number.value; i++) {
            this._params.particles.array.push(new Particle$$1(this._canvasParams, this._params, this._tmpParams, color, opacity.value));
        }
    };
    /**
     * @return {?}
     */
    ParticlesManager$$1.prototype._particlesUpdate = function () {
        var _this = this;
        this._params.particles.array.forEach(function (particle, i) {
            if (_this._params.particles.move.enable) {
                var /** @type {?} */ ms = _this._params.particles.move.speed / 2;
                particle.x += particle.vx * ms;
                particle.y += particle.vy * ms;
            }
            if (_this._params.particles.opacity.anim.enable) {
                if (particle.opacity_status == true) {
                    if (particle.opacity >= _this._params.particles.opacity.value)
                        particle.opacity_status = false;
                    particle.opacity += particle.vo;
                }
                else {
                    if (particle.opacity <= _this._params.particles.opacity.anim.opacity_min)
                        particle.opacity_status = true;
                    particle.opacity -= particle.vo;
                }
                if (particle.opacity < 0)
                    particle.opacity = 0;
            }
            if (_this._params.particles.size.anim.enable) {
                if (particle.size_status == true) {
                    if (particle.radius >= _this._params.particles.size.value)
                        particle.size_status = false;
                    particle.radius += particle.vs;
                }
                else {
                    if (particle.radius <= _this._params.particles.size.anim.size_min)
                        particle.size_status = true;
                    particle.radius -= particle.vs;
                }
                if (particle.radius < 0)
                    particle.radius = 0;
            }
            var /** @type {?} */ new_pos;
            if (_this._params.particles.move.out_mode == 'bounce') {
                new_pos = {
                    x_left: particle.radius,
                    x_right: _this._canvasParams.width,
                    y_top: particle.radius,
                    y_bottom: _this._canvasParams.height
                };
            }
            else {
                new_pos = {
                    x_left: -particle.radius,
                    x_right: _this._canvasParams.width + particle.radius,
                    y_top: -particle.radius,
                    y_bottom: _this._canvasParams.height + particle.radius
                };
            }
            if (particle.x - particle.radius > _this._canvasParams.width) {
                particle.x = new_pos.x_left;
                particle.y = Math.random() * _this._canvasParams.height;
            }
            else if (particle.x + particle.radius < 0) {
                particle.x = new_pos.x_right;
                particle.y = Math.random() * _this._canvasParams.height;
            }
            if (particle.y - particle.radius > _this._canvasParams.height) {
                particle.y = new_pos.y_top;
                particle.x = Math.random() * _this._canvasParams.width;
            }
            else if (particle.y + particle.radius < 0) {
                particle.y = new_pos.y_bottom;
                particle.x = Math.random() * _this._canvasParams.width;
            }
            switch (_this._params.particles.move.out_mode) {
                case 'bounce':
                    if (particle.x + particle.radius > _this._canvasParams.width)
                        particle.vx = -particle.vx;
                    else if (particle.x - particle.radius < 0)
                        particle.vx = -particle.vx;
                    if (particle.y + particle.radius > _this._canvasParams.height)
                        particle.vy = -particle.vy;
                    else if (particle.y - particle.radius < 0)
                        particle.vy = -particle.vy;
                    break;
            }
            if (isInArray('grab', _this._params.interactivity.events.onhover.mode)) {
                _this._grabParticle(particle);
            }
            if (isInArray('bubble', _this._params.interactivity.events.onhover.mode) ||
                isInArray('bubble', _this._params.interactivity.events.onclick.mode)) {
                _this._bubbleParticle(particle);
            }
            if (isInArray('repulse', _this._params.interactivity.events.onhover.mode) ||
                isInArray('repulse', _this._params.interactivity.events.onclick.mode)) {
                _this._repulseParticle(particle);
            }
            if (_this._params.particles.line_linked.enable || _this._params.particles.move.attract.enable) {
                for (var /** @type {?} */ j = i + 1; j < _this._params.particles.array.length; j++) {
                    var /** @type {?} */ link = _this._params.particles.array[j];
                    if (_this._params.particles.line_linked.enable)
                        _this._interaction.linkParticles(particle, link, _this._params, _this._canvasParams);
                    if (_this._params.particles.move.attract.enable)
                        _this._interaction.attractParticles(particle, link, _this._params);
                    if (_this._params.particles.move.bounce)
                        _this._interaction.bounceParticles(particle, link);
                }
            }
        });
    };
    /**
     * @return {?}
     */
    ParticlesManager$$1.prototype.particlesDraw = function () {
        this._canvasParams.ctx.clearRect(0, 0, this._canvasParams.width, this._canvasParams.height);
        this._particlesUpdate();
        this._params.particles.array.forEach(function (particle) {
            particle.draw();
        });
    };
    /**
     * @return {?}
     */
    ParticlesManager$$1.prototype.particlesEmpty = function () {
        this._params.particles.array = [];
    };
    /**
     * @param {?} nb
     * @return {?}
     */
    ParticlesManager$$1.prototype.removeParticles = function (nb) {
        this._params.particles.array.splice(0, nb);
        if (!this._params.particles.move.enable) {
            this.particlesDraw();
        }
    };
    /**
     * @param {?} nb
     * @param {?=} pos
     * @return {?}
     */
    ParticlesManager$$1.prototype.pushParticles = function (nb, pos) {
        this._tmpParams.pushing = true;
        for (var /** @type {?} */ i = 0; i < nb; i++) {
            this._params.particles.array.push(new Particle$$1(this._canvasParams, this._params, this._tmpParams, this._params.particles.color, this._params.particles.opacity.value, {
                x: pos ? pos.pos_x : Math.random() * this._canvasParams.width,
                y: pos ? pos.pos_y : Math.random() * this._canvasParams.height
            }));
            if (i == nb - 1) {
                if (!this._params.particles.move.enable) {
                    this.particlesDraw();
                }
                this._tmpParams.pushing = false;
            }
        }
    };
    /**
     * @param {?} particle
     * @return {?}
     */
    ParticlesManager$$1.prototype._bubbleParticle = function (particle) {
        var _this = this;
        if (this._params.interactivity.events.onhover.enable &&
            isInArray('bubble', this._params.interactivity.events.onhover.mode)) {
            var /** @type {?} */ dx_mouse = particle.x - this._params.interactivity.mouse.pos_x;
            var /** @type {?} */ dy_mouse = particle.y - this._params.interactivity.mouse.pos_y;
            var /** @type {?} */ dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);
            var /** @type {?} */ ratio = 1 - dist_mouse / this._params.interactivity.modes.bubble.distance;
            var /** @type {?} */ init = function () {
                particle.opacity_bubble = particle.opacity;
                particle.radius_bubble = particle.radius;
            };
            if (dist_mouse <= this._params.interactivity.modes.bubble.distance) {
                if (ratio >= 0 && this._params.interactivity.status == 'mousemove') {
                    if (this._params.interactivity.modes.bubble.size != this._params.particles.size.value) {
                        if (this._params.interactivity.modes.bubble.size > this._params.particles.size.value) {
                            var /** @type {?} */ size = particle.radius + (this._params.interactivity.modes.bubble.size * ratio);
                            if (size >= 0) {
                                particle.radius_bubble = size;
                            }
                        }
                        else {
                            var /** @type {?} */ dif = particle.radius - this._params.interactivity.modes.bubble.size;
                            var /** @type {?} */ size = particle.radius - (dif * ratio);
                            if (size > 0) {
                                particle.radius_bubble = size;
                            }
                            else {
                                particle.radius_bubble = 0;
                            }
                        }
                    }
                    if (this._params.interactivity.modes.bubble.opacity != this._params.particles.opacity.value) {
                        if (this._params.interactivity.modes.bubble.opacity > this._params.particles.opacity.value) {
                            var /** @type {?} */ opacity = this._params.interactivity.modes.bubble.opacity * ratio;
                            if (opacity > particle.opacity && opacity <= this._params.interactivity.modes.bubble.opacity) {
                                particle.opacity_bubble = opacity;
                            }
                        }
                        else {
                            var /** @type {?} */ opacity = particle.opacity - (this._params.particles.opacity.value - this._params.interactivity.modes.bubble.opacity) * ratio;
                            if (opacity < particle.opacity && opacity >= this._params.interactivity.modes.bubble.opacity) {
                                particle.opacity_bubble = opacity;
                            }
                        }
                    }
                }
            }
            else {
                init();
            }
            if (this._params.interactivity.status == 'mouseleave') {
                init();
            }
        }
        else if (this._params.interactivity.events.onclick.enable &&
            isInArray('bubble', this._params.interactivity.events.onclick.mode)) {
            if (this._tmpParams.bubble_clicking) {
                var /** @type {?} */ dx_mouse = particle.x - this._params.interactivity.mouse.click_pos_x;
                var /** @type {?} */ dy_mouse = particle.y - this._params.interactivity.mouse.click_pos_y;
                var /** @type {?} */ dist_mouse_1 = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);
                var /** @type {?} */ time_spent_1 = (new Date().getTime() - this._params.interactivity.mouse.click_time) / 1000;
                if (time_spent_1 > this._params.interactivity.modes.bubble.duration) {
                    this._tmpParams.bubble_duration_end = true;
                }
                if (time_spent_1 > this._params.interactivity.modes.bubble.duration * 2) {
                    this._tmpParams.bubble_clicking = false;
                    this._tmpParams.bubble_duration_end = false;
                }
                var /** @type {?} */ process = function (bubble_param, particles_param, p_obj_bubble, p_obj, id) {
                    if (bubble_param != particles_param) {
                        if (!_this._tmpParams.bubble_duration_end) {
                            if (dist_mouse_1 <= _this._params.interactivity.modes.bubble.distance) {
                                var /** @type {?} */ obj = void 0;
                                if (p_obj_bubble != undefined) {
                                    obj = p_obj_bubble;
                                }
                                else {
                                    obj = p_obj;
                                }
                                if (obj != bubble_param) {
                                    var /** @type {?} */ value = p_obj - (time_spent_1 * (p_obj - bubble_param) / _this._params.interactivity.modes.bubble.duration);
                                    if (id == 'size')
                                        particle.radius_bubble = value;
                                    if (id == 'opacity')
                                        particle.opacity_bubble = value;
                                }
                            }
                            else {
                                if (id == 'size')
                                    particle.radius_bubble = undefined;
                                if (id == 'opacity')
                                    particle.opacity_bubble = undefined;
                            }
                        }
                        else {
                            if (p_obj_bubble != undefined) {
                                var /** @type {?} */ value_tmp = p_obj - (time_spent_1 * (p_obj - bubble_param) / _this._params.interactivity.modes.bubble.duration);
                                var /** @type {?} */ dif = bubble_param - value_tmp;
                                var /** @type {?} */ value = bubble_param + dif;
                                if (id == 'size')
                                    particle.radius_bubble = value;
                                if (id == 'opacity')
                                    particle.opacity_bubble = value;
                            }
                        }
                    }
                };
                if (this._tmpParams.bubble_clicking) {
                    process(this._params.interactivity.modes.bubble.size, this._params.particles.size.value, particle.radius_bubble, particle.radius, 'size');
                    process(this._params.interactivity.modes.bubble.opacity, this._params.particles.opacity.value, particle.opacity_bubble, particle.opacity, 'opacity');
                }
            }
        }
    };
    /**
     * @param {?} particle
     * @return {?}
     */
    ParticlesManager$$1.prototype._repulseParticle = function (particle) {
        var _this = this;
        if (this._params.interactivity.events.onhover.enable &&
            isInArray('repulse', this._params.interactivity.events.onhover.mode) &&
            this._params.interactivity.status == 'mousemove') {
            var /** @type {?} */ dx_mouse = particle.x - this._params.interactivity.mouse.pos_x;
            var /** @type {?} */ dy_mouse = particle.y - this._params.interactivity.mouse.pos_y;
            var /** @type {?} */ dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);
            var /** @type {?} */ normVec = { x: dx_mouse / dist_mouse, y: dy_mouse / dist_mouse };
            var /** @type {?} */ repulseRadius = this._params.interactivity.modes.repulse.distance;
            var /** @type {?} */ velocity = 100;
            var /** @type {?} */ repulseFactor = clamp((1 / repulseRadius) * (-1 * Math.pow(dist_mouse / repulseRadius, 2) + 1) * repulseRadius * velocity, 0, 50);
            var /** @type {?} */ pos = {
                x: particle.x + normVec.x * repulseFactor,
                y: particle.y + normVec.y * repulseFactor
            };
            if (this._params.particles.move.out_mode == 'bounce') {
                if (pos.x - particle.radius > 0 && pos.x + particle.radius < this._canvasParams.width)
                    particle.x = pos.x;
                if (pos.y - particle.radius > 0 && pos.y + particle.radius < this._canvasParams.height)
                    particle.y = pos.y;
            }
            else {
                particle.x = pos.x;
                particle.y = pos.y;
            }
        }
        else if (this._params.interactivity.events.onclick.enable &&
            isInArray('repulse', this._params.interactivity.events.onclick.mode)) {
            if (!this._tmpParams.repulse_finish) {
                this._tmpParams.repulse_count++;
                if (this._tmpParams.repulse_count == this._params.particles.array.length)
                    this._tmpParams.repulse_finish = true;
            }
            if (this._tmpParams.repulse_clicking) {
                var /** @type {?} */ repulseRadius = Math.pow(this._params.interactivity.modes.repulse.distance / 6, 3);
                var /** @type {?} */ dx_1 = this._params.interactivity.mouse.click_pos_x - particle.x;
                var /** @type {?} */ dy_1 = this._params.interactivity.mouse.click_pos_y - particle.y;
                var /** @type {?} */ d = dx_1 * dx_1 + dy_1 * dy_1;
                var /** @type {?} */ force_1 = -repulseRadius / d * 1;
                var /** @type {?} */ process = function () {
                    var /** @type {?} */ f = Math.atan2(dy_1, dx_1);
                    particle.vx = force_1 * Math.cos(f);
                    particle.vy = force_1 * Math.sin(f);
                    if (_this._params.particles.move.out_mode == 'bounce') {
                        var /** @type {?} */ pos = {
                            x: particle.x + particle.vx,
                            y: particle.y + particle.vy
                        };
                        if (pos.x + particle.radius > _this._canvasParams.width)
                            particle.vx = -particle.vx;
                        else if (pos.x - particle.radius < 0)
                            particle.vx = -particle.vx;
                        if (pos.y + particle.radius > _this._canvasParams.height)
                            particle.vy = -particle.vy;
                        else if (pos.y - particle.radius < 0)
                            particle.vy = -particle.vy;
                    }
                };
                if (d <= repulseRadius) {
                    process();
                }
            }
            else {
                if (this._tmpParams.repulse_clicking == false) {
                    particle.vx = particle.vx_i;
                    particle.vy = particle.vy_i;
                }
            }
        }
    };
    /**
     * @param {?} particle
     * @return {?}
     */
    ParticlesManager$$1.prototype._grabParticle = function (particle) {
        var _a = this._params, interactivity = _a.interactivity, particles = _a.particles;
        if (interactivity.events.onhover.enable &&
            interactivity.status == 'mousemove') {
            var /** @type {?} */ dx_mouse = particle.x - interactivity.mouse.pos_x;
            var /** @type {?} */ dy_mouse = particle.y - interactivity.mouse.pos_y;
            var /** @type {?} */ dist_mouse = Math.sqrt(dx_mouse * dx_mouse + dy_mouse * dy_mouse);
            if (dist_mouse <= interactivity.modes.grab.distance) {
                var grab = interactivity.modes.grab;
                var /** @type {?} */ opacity_line = grab.line_linked.opacity - (dist_mouse / (1 / grab.line_linked.opacity)) / grab.distance;
                if (opacity_line > 0) {
                    var /** @type {?} */ color_line = particles.line_linked.color_rgb_line;
                    var r = color_line.r, g = color_line.g, b = color_line.b;
                    this._canvasParams.ctx.strokeStyle = "rgba( " + r + ", " + g + ", " + b + ", " + opacity_line + " )";
                    this._canvasParams.ctx.lineWidth = particles.line_linked.width;
                    this._canvasParams.ctx.beginPath();
                    this._canvasParams.ctx.moveTo(particle.x, particle.y);
                    this._canvasParams.ctx.lineTo(interactivity.mouse.pos_x, interactivity.mouse.pos_y);
                    this._canvasParams.ctx.stroke();
                    this._canvasParams.ctx.closePath();
                }
            }
        }
    };
    return ParticlesManager$$1;
}());

var Particle$$1 = (function () {
    /**
     * @param {?} _canvasParams
     * @param {?} _params
     * @param {?} _tmpParams
     * @param {?=} color
     * @param {?=} opacity
     * @param {?=} position
     */
    function Particle$$1(_canvasParams, _params, _tmpParams, color, opacity, position) {
        this._canvasParams = _canvasParams;
        this._params = _params;
        this._tmpParams = _tmpParams;
        this._setupSize();
        this._setupPosition(position);
        this._setupColor(color);
        this._setupOpacity();
        this._setupAnimation();
    }
    /**
     * @return {?}
     */
    Particle$$1.prototype._setupSize = function () {
        this.radius = (this._params.particles.size.random ? Math.random() : 1) * this._params.particles.size.value;
        if (this._params.particles.size.anim.enable) {
            this.size_status = false;
            this.vs = this._params.particles.size.anim.speed / 100;
            if (!this._params.particles.size.anim.sync)
                this.vs = this.vs * Math.random();
        }
    };
    /**
     * @param {?=} position
     * @return {?}
     */
    Particle$$1.prototype._setupPosition = function (position) {
        this.x = position ? position.x : Math.random() * this._canvasParams.width;
        this.y = position ? position.y : Math.random() * this._canvasParams.height;
        if (this.x > this._canvasParams.width - this.radius * 2) {
            this.x = this.x - this.radius;
        }
        else if (this.x < this.radius * 2) {
            this.x = this.x + this.radius;
        }
        if (this.y > this._canvasParams.height - this.radius * 2) {
            this.y = this.y - this.radius;
        }
        else if (this.y < this.radius * 2) {
            this.y = this.y + this.radius;
        }
        if (this._params.particles.move.bounce) {
            this._checkOverlap(this, position);
        }
    };
    /**
     * @param {?} p1
     * @param {?=} position
     * @return {?}
     */
    Particle$$1.prototype._checkOverlap = function (p1, position) {
        var _this = this;
        var particles = this._params.particles;
        particles.array.forEach(function (particle) {
            var /** @type {?} */ p2 = particle;
            var /** @type {?} */ dx = p1.x - p2.x;
            var /** @type {?} */ dy = p1.y - p2.y;
            var /** @type {?} */ dist = Math.sqrt(dx * dx + dy * dy);
            if (dist <= p1.radius + p2.radius) {
                p1.x = position ? position.x : Math.random() * _this._canvasParams.width;
                p1.y = position ? position.y : Math.random() * _this._canvasParams.height;
                _this._checkOverlap(p1);
            }
        });
    };
    /**
     * @param {?=} color
     * @return {?}
     */
    Particle$$1.prototype._setupColor = function (color) {
        this.color = getColor(color.value);
    };
    /**
     * @return {?}
     */
    Particle$$1.prototype._setupOpacity = function () {
        this.opacity = (this._params.particles.opacity.random ? Math.random() : 1) * this._params.particles.opacity.value;
        if (this._params.particles.opacity.anim.enable) {
            this.opacity_status = false;
            this.vo = this._params.particles.opacity.anim.speed / 100;
            if (!this._params.particles.opacity.anim.sync) {
                this.vo = this.vo * Math.random();
            }
        }
    };
    /**
     * @return {?}
     */
    Particle$$1.prototype._setupAnimation = function () {
        var /** @type {?} */ velbase = null;
        switch (this._params.particles.move.direction) {
            case 'top':
                velbase = { x: 0, y: -1 };
                break;
            case 'top-right':
                velbase = { x: 0.5, y: -0.5 };
                break;
            case 'right':
                velbase = { x: 1, y: 0 };
                break;
            case 'bottom-right':
                velbase = { x: 0.5, y: 0.5 };
                break;
            case 'bottom':
                velbase = { x: 0, y: 1 };
                break;
            case 'bottom-left':
                velbase = { x: -0.5, y: 1 };
                break;
            case 'left':
                velbase = { x: -1, y: 0 };
                break;
            case 'top-left':
                velbase = { x: -0.5, y: -0.5 };
                break;
            default:
                velbase = { x: 0, y: 0 };
                break;
        }
        if (this._params.particles.move.straight) {
            this.vx = velbase.x;
            this.vy = velbase.y;
            if (this._params.particles.move.random) {
                this.vx = this.vx * (Math.random());
                this.vy = this.vy * (Math.random());
            }
        }
        else {
            this.vx = velbase.x + Math.random() - 0.5;
            this.vy = velbase.y + Math.random() - 0.5;
        }
        this.vx_i = this.vx;
        this.vy_i = this.vy;
        var /** @type {?} */ shape_type = this._params.particles.shape.type;
        if (typeof (shape_type) == 'object') {
            if (shape_type instanceof Array) {
                var /** @type {?} */ shape_selected = shape_type[Math.floor(Math.random() * shape_type.length)];
                this.shape = shape_selected;
            }
        }
        else {
            this.shape = shape_type;
        }
        if (this.shape == 'image') {
            var /** @type {?} */ sh = this._params.particles.shape;
            this.img = {
                src: sh.image.src,
                ratio: sh.image.width / sh.image.height
            };
            if (!this.img.ratio)
                this.img.ratio = 1;
            if (this._tmpParams.img_type == 'svg' && this._tmpParams.source_svg != undefined) {
                createSvgImg(this, this._tmpParams);
                if (this._tmpParams.pushing) {
                    this.img.loaded = false;
                }
            }
        }
    };
    /**
     * @param {?} c
     * @param {?} startX
     * @param {?} startY
     * @param {?} sideLength
     * @param {?} sideCountNumerator
     * @param {?} sideCountDenominator
     * @return {?}
     */
    Particle$$1.prototype._drawShape = function (c, startX, startY, sideLength, sideCountNumerator, sideCountDenominator) {
        var /** @type {?} */ sideCount = sideCountNumerator * sideCountDenominator;
        var /** @type {?} */ decimalSides = sideCountNumerator / sideCountDenominator;
        var /** @type {?} */ interiorAngleDegrees = (180 * (decimalSides - 2)) / decimalSides;
        var /** @type {?} */ interiorAngle = Math.PI - Math.PI * interiorAngleDegrees / 180;
        c.save();
        c.beginPath();
        c.translate(startX, startY);
        c.moveTo(0, 0);
        for (var /** @type {?} */ i = 0; i < sideCount; i++) {
            c.lineTo(sideLength, 0);
            c.translate(sideLength, 0);
            c.rotate(interiorAngle);
        }
        c.fill();
        c.restore();
    };
    /**
     * @return {?}
     */
    Particle$$1.prototype.draw = function () {
        var _this = this;
        var particles = this._params.particles;
        var /** @type {?} */ radius;
        if (this.radius_bubble != undefined) {
            radius = this.radius_bubble;
        }
        else {
            radius = this.radius;
        }
        var /** @type {?} */ opacity;
        if (this.opacity_bubble != undefined) {
            opacity = this.opacity_bubble;
        }
        else {
            opacity = this.opacity;
        }
        var /** @type {?} */ color_value;
        if (this.color.rgb) {
            var _a = this.color.rgb, r = _a.r, g = _a.g, b = _a.b;
            color_value = "rgba( " + r + ", " + g + ", " + b + ", " + opacity + " )";
        }
        else {
            var _b = this.color.hsl, h = _b.h, s = _b.s, l = _b.l;
            color_value = "hsla( " + h + ", " + s + ", " + l + ", " + opacity + " )";
        }
        this._canvasParams.ctx.fillStyle = color_value;
        this._canvasParams.ctx.beginPath();
        switch (this.shape) {
            case 'circle':
                this._canvasParams.ctx.arc(this.x, this.y, radius, 0, Math.PI * 2, false);
                break;
            case 'edge':
                this._canvasParams.ctx.rect(this.x - radius, this.y - radius, radius * 2, radius * 2);
                break;
            case 'triangle':
                this._drawShape(this._canvasParams.ctx, this.x - radius, this.y + radius / 1.66, radius * 2, 3, 2);
                break;
            case 'polygon':
                this._drawShape(this._canvasParams.ctx, this.x - radius / (this._params.particles.shape.polygon.nb_sides / 3.5), this.y - radius / (2.66 / 3.5), radius * 2.66 / (this._params.particles.shape.polygon.nb_sides / 3), this._params.particles.shape.polygon.nb_sides, 1);
                break;
            case 'star':
                this._drawShape(this._canvasParams.ctx, this.x - radius * 2 / (this._params.particles.shape.polygon.nb_sides / 4), this.y - radius / (2 * 2.66 / 3.5), radius * 2 * 2.66 / (this._params.particles.shape.polygon.nb_sides / 3), this._params.particles.shape.polygon.nb_sides, 2);
                break;
            case 'image':
                var /** @type {?} */ draw = function (img_obj) {
                    _this._canvasParams.ctx.drawImage(img_obj, _this.x - radius, _this.y - radius, radius * 2, radius * 2 / _this.img.ratio);
                };
                var /** @type {?} */ img_obj = void 0;
                if (this._tmpParams.img_type == 'svg') {
                    img_obj = this.img.obj;
                }
                else {
                    img_obj = this._tmpParams.img_obj;
                }
                if (img_obj)
                    draw(img_obj);
                break;
        }
        this._canvasParams.ctx.closePath();
        if (this._params.particles.shape.stroke.width > 0) {
            this._canvasParams.ctx.strokeStyle = this._params.particles.shape.stroke.color;
            this._canvasParams.ctx.lineWidth = this._params.particles.shape.stroke.width;
            this._canvasParams.ctx.stroke();
        }
        this._canvasParams.ctx.fill();
    };
    return Particle$$1;
}());

var ParticleInteraction = (function () {
    function ParticleInteraction() {
    }
    /**
     * @param {?} p1
     * @param {?} p2
     * @param {?} params
     * @param {?} canvasParams
     * @return {?}
     */
    ParticleInteraction.prototype.linkParticles = function (p1, p2, params, canvasParams) {
        var /** @type {?} */ dx = p1.x - p2.x;
        var /** @type {?} */ dy = p1.y - p2.y;
        var /** @type {?} */ dist = Math.sqrt(dx * dx + dy * dy);
        var line_linked = params.particles.line_linked;
        if (dist <= params.particles.line_linked.distance) {
            var /** @type {?} */ opacity_line = params.particles.line_linked.opacity - (dist / (1 / params.particles.line_linked.opacity)) / params.particles.line_linked.distance;
            if (opacity_line > 0) {
                var /** @type {?} */ color_line = params.particles.line_linked.color_rgb_line;
                var r = color_line.r, g = color_line.g, b = color_line.b;
                canvasParams.ctx.save();
                canvasParams.ctx.strokeStyle = "rgba( " + r + ", " + g + ", " + b + ", " + opacity_line + " )";
                canvasParams.ctx.lineWidth = params.particles.line_linked.width;
                canvasParams.ctx.beginPath();
                if (line_linked.shadow.enable) {
                    canvasParams.ctx.shadowBlur = line_linked.shadow.blur;
                    canvasParams.ctx.shadowColor = line_linked.shadow.color;
                }
                canvasParams.ctx.moveTo(p1.x, p1.y);
                canvasParams.ctx.lineTo(p2.x, p2.y);
                canvasParams.ctx.stroke();
                canvasParams.ctx.closePath();
                canvasParams.ctx.restore();
            }
        }
    };
    /**
     * @param {?} p1
     * @param {?} p2
     * @param {?} params
     * @return {?}
     */
    ParticleInteraction.prototype.attractParticles = function (p1, p2, params) {
        var /** @type {?} */ dx = p1.x - p2.x;
        var /** @type {?} */ dy = p1.y - p2.y;
        var /** @type {?} */ dist = Math.sqrt(dx * dx + dy * dy);
        if (dist <= params.particles.line_linked.distance) {
            var /** @type {?} */ ax = dx / (params.particles.move.attract.rotateX * 1000);
            var /** @type {?} */ ay = dy / (params.particles.move.attract.rotateY * 1000);
            p1.vx -= ax;
            p1.vy -= ay;
            p2.vx += ax;
            p2.vy += ay;
        }
    };
    /**
     * @param {?} p1
     * @param {?} p2
     * @return {?}
     */
    ParticleInteraction.prototype.bounceParticles = function (p1, p2) {
        var /** @type {?} */ dx = p1.x - p2.x;
        var /** @type {?} */ dy = p1.y - p2.y;
        var /** @type {?} */ dist = Math.sqrt(dx * dx + dy * dy);
        var /** @type {?} */ dist_p = p1.radius + p2.radius;
        if (dist <= dist_p) {
            p1.vx = -p1.vx;
            p1.vy = -p1.vy;
            p2.vx = -p2.vx;
            p2.vy = -p2.vy;
        }
    };
    return ParticleInteraction;
}());

var ParticlesDirective = (function () {
    /**
     * @param {?} el
     */
    function ParticlesDirective(el) {
        this.el = el;
        this._tmpParams = {};
    }
    Object.defineProperty(ParticlesDirective.prototype, "params", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            var /** @type {?} */ defaultParams = getDefaultParams();
            this._params = deepExtend(defaultParams, value);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ParticlesDirective.prototype.ngAfterViewInit = function () {
        this._canvasParams = {
            el: this.el.nativeElement,
            ctx: this.el.nativeElement.getContext('2d'),
            width: this.el.nativeElement.offsetWidth,
            height: this.el.nativeElement.offsetHeight
        };
        this._tmpParams.obj = {
            size_value: this._params.particles.size.value,
            size_anim_speed: this._params.particles.size.anim.speed,
            move_speed: this._params.particles.move.speed,
            line_linked_distance: this._params.particles.line_linked.distance,
            line_linked_width: this._params.particles.line_linked.width,
            mode_grab_distance: this._params.interactivity.modes.grab.distance,
            mode_bubble_distance: this._params.interactivity.modes.bubble.distance,
            mode_bubble_size: this._params.interactivity.modes.bubble.size,
            mode_repulse_distance: this._params.interactivity.modes.repulse.distance
        };
        this._params.interactivity.el = (this._params.interactivity.detect_on == 'window') ? window : this._canvasParams.el;
        if (isInArray('image', this._params.particles.shape.type)) {
            this._tmpParams.img_type = this._params.particles.shape.image.src.substr(this._params.particles.shape.image.src.length - 3);
            loadImg(this._params, this._tmpParams);
        }
        this._canvasManager = new CanvasManager$$1(this._canvasParams, this._params, this._tmpParams);
        this._canvasManager.draw();
    };
    /**
     * Mouse move event
    \@param event
     * @param {?} event
     * @return {?}
     */
    ParticlesDirective.prototype.onMouseMove = function (event) {
        var interactivity = this._params.interactivity;
        if (interactivity.events.onhover.enable ||
            interactivity.events.onclick.enable) {
            var /** @type {?} */ pos = void 0;
            if (interactivity.el == window) {
                pos = {
                    x: event.clientX,
                    y: event.clientY
                };
            }
            else {
                pos = {
                    x: event.offsetX || event.clientX,
                    y: event.offsetY || event.clientY
                };
            }
            interactivity.mouse.pos_x = pos.x;
            interactivity.mouse.pos_y = pos.y;
            if (this._tmpParams.retina) {
                interactivity.mouse.pos_x *= this._canvasParams.pxratio;
                interactivity.mouse.pos_y *= this._canvasParams.pxratio;
            }
            interactivity.status = 'mousemove';
        }
    };
    /**
     * Mouse leave event
     * @return {?}
     */
    ParticlesDirective.prototype.onMouseLeave = function () {
        var interactivity = this._params.interactivity;
        if (interactivity.events.onhover.enable ||
            interactivity.events.onclick.enable) {
            interactivity.mouse.pos_x = null;
            interactivity.mouse.pos_y = null;
            interactivity.status = 'mouseleave';
        }
    };
    /**
     * Click event
     * @return {?}
     */
    ParticlesDirective.prototype.onClick = function () {
        var _this = this;
        var _a = this._params, interactivity = _a.interactivity, particles = _a.particles;
        if (interactivity.events.onclick.enable) {
            interactivity.mouse.click_pos_x = interactivity.mouse.pos_x;
            interactivity.mouse.click_pos_y = interactivity.mouse.pos_y;
            interactivity.mouse.click_time = new Date().getTime();
            switch (interactivity.events.onclick.mode) {
                case 'push':
                    if (particles.move.enable) {
                        this._canvasManager.particlesManager.pushParticles(interactivity.modes.push.particles_nb, interactivity.mouse);
                    }
                    else {
                        if (interactivity.modes.push.particles_nb == 1) {
                            this._canvasManager.particlesManager.pushParticles(interactivity.modes.push.particles_nb, interactivity.mouse);
                        }
                        else if (interactivity.modes.push.particles_nb > 1) {
                            this._canvasManager.particlesManager.pushParticles(interactivity.modes.push.particles_nb);
                        }
                    }
                    break;
                case 'remove':
                    this._canvasManager.particlesManager.removeParticles(interactivity.modes.remove.particles_nb);
                    break;
                case 'bubble':
                    this._tmpParams.bubble_clicking = true;
                    break;
                case 'repulse':
                    this._tmpParams.repulse_clicking = true;
                    this._tmpParams.repulse_count = 0;
                    this._tmpParams.repulse_finish = false;
                    setTimeout(function () {
                        _this._tmpParams.repulse_clicking = false;
                    }, interactivity.modes.repulse.duration * 1000);
                    break;
            }
        }
    };
    return ParticlesDirective;
}());
ParticlesDirective.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                selector: '[d-particles]'
            },] },
];
/**
 * @nocollapse
 */
ParticlesDirective.ctorParameters = function () { return [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], },
]; };
ParticlesDirective.propDecorators = {
    'params': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"] },],
    'onMouseMove': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mousemove', ['$event'],] },],
    'onMouseLeave': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['mouseleave',] },],
    'onClick': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['click',] },],
};

var ParticlesModule = (function () {
    function ParticlesModule() {
    }
    return ParticlesModule;
}());
ParticlesModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
                ],
                declarations: [
                    ParticlesComponent,
                    ParticlesDirective
                ],
                exports: [
                    ParticlesComponent,
                    ParticlesDirective
                ]
            },] },
];
/**
 * @nocollapse
 */
ParticlesModule.ctorParameters = function () { return []; };




/***/ }),

/***/ "./node_modules/ngx-youtube-player/fesm5/ngx-youtube-player.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ngx-youtube-player/fesm5/ngx-youtube-player.js ***!
  \*********************************************************************/
/*! exports provided: win, YouTubeRef, YouTubePlayerRef, defaultSizes, YoutubePlayerService, YoutubePlayerComponent, NgxYoutubePlayerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "win", function() { return win; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YouTubeRef", function() { return YouTubeRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YouTubePlayerRef", function() { return YouTubePlayerRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultSizes", function() { return defaultSizes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubePlayerService", function() { return YoutubePlayerService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YoutubePlayerComponent", function() { return YoutubePlayerComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxYoutubePlayerModule", function() { return NgxYoutubePlayerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @return {?}
 */
function win() {
    return window;
}
/**
 * @return {?}
 */
function YouTubeRef() {
    return win()['YT'];
}
/**
 * @return {?}
 */
function YouTubePlayerRef() {
    return YouTubeRef().Player;
}
/** @type {?} */
var defaultSizes = {
    height: 270,
    width: 367
};
var YoutubePlayerService = /** @class */ (function () {
    function YoutubePlayerService(zone) {
        this.zone = zone;
        this.ytApiLoaded = false;
        this.api = new rxjs__WEBPACK_IMPORTED_MODULE_1__["ReplaySubject"](1);
        this.createApi();
    }
    /**
     * @param {?} options
     * @return {?}
     */
    YoutubePlayerService.prototype.loadPlayerApi = /**
     * @param {?} options
     * @return {?}
     */
    function (options) {
        /** @type {?} */
        var doc = win().document;
        if (!this.ytApiLoaded) {
            this.ytApiLoaded = true;
            /** @type {?} */
            var playerApiScript = doc.createElement('script');
            playerApiScript.type = 'text/javascript';
            playerApiScript.src = options.protocol + "://www.youtube.com/iframe_api";
            doc.body.appendChild(playerApiScript);
        }
    };
    /**
     * @param {?} elementId
     * @param {?} outputs
     * @param {?} sizes
     * @param {?=} videoId
     * @param {?=} playerVars
     * @return {?}
     */
    YoutubePlayerService.prototype.setupPlayer = /**
     * @param {?} elementId
     * @param {?} outputs
     * @param {?} sizes
     * @param {?=} videoId
     * @param {?=} playerVars
     * @return {?}
     */
    function (elementId, outputs, sizes, videoId, playerVars) {
        var _this = this;
        if (videoId === void 0) { videoId = ''; }
        /** @type {?} */
        var createPlayer = (/**
         * @return {?}
         */
        function () {
            if (YouTubePlayerRef) {
                _this.createPlayer(elementId, outputs, sizes, videoId, playerVars);
            }
        });
        this.api.subscribe(createPlayer);
    };
    /**
     * @param {?} player
     * @return {?}
     */
    YoutubePlayerService.prototype.play = /**
     * @param {?} player
     * @return {?}
     */
    function (player) {
        player.playVideo();
    };
    /**
     * @param {?} player
     * @return {?}
     */
    YoutubePlayerService.prototype.pause = /**
     * @param {?} player
     * @return {?}
     */
    function (player) {
        player.pauseVideo();
    };
    /**
     * @param {?} media
     * @param {?} player
     * @return {?}
     */
    YoutubePlayerService.prototype.playVideo = /**
     * @param {?} media
     * @param {?} player
     * @return {?}
     */
    function (media, player) {
        /** @type {?} */
        var id = media.id.videoId ? media.id.videoId : media.id;
        player.loadVideoById(id);
        this.play(player);
    };
    /**
     * @param {?} player
     * @return {?}
     */
    YoutubePlayerService.prototype.isPlaying = /**
     * @param {?} player
     * @return {?}
     */
    function (player) {
        // because YT is not loaded yet 1 is used - YT.PlayerState.PLAYING
        /** @type {?} */
        var isPlayerReady = player && player.getPlayerState;
        /** @type {?} */
        var playerState = isPlayerReady ? player.getPlayerState() : {};
        /** @type {?} */
        var isPlayerPlaying = isPlayerReady
            ? playerState !== YouTubeRef().PlayerState.ENDED &&
                playerState !== YouTubeRef().PlayerState.PAUSED
            : false;
        return isPlayerPlaying;
    };
    /**
     * @param {?} elementId
     * @param {?} outputs
     * @param {?} sizes
     * @param {?=} videoId
     * @param {?=} playerVars
     * @return {?}
     */
    YoutubePlayerService.prototype.createPlayer = /**
     * @param {?} elementId
     * @param {?} outputs
     * @param {?} sizes
     * @param {?=} videoId
     * @param {?=} playerVars
     * @return {?}
     */
    function (elementId, outputs, sizes, videoId, playerVars) {
        var _this = this;
        if (videoId === void 0) { videoId = ''; }
        if (playerVars === void 0) { playerVars = {}; }
        /** @type {?} */
        var playerSize = {
            height: sizes.height || defaultSizes.height,
            width: sizes.width || defaultSizes.width
        };
        /** @type {?} */
        var ytPlayer = YouTubePlayerRef();
        return new ytPlayer(elementId, Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"])({}, playerSize, { events: {
                onReady: (/**
                 * @param {?} ev
                 * @return {?}
                 */
                function (ev) {
                    _this.zone.run((/**
                     * @return {?}
                     */
                    function () { return outputs.ready && outputs.ready.next(ev.target); }));
                }),
                onStateChange: (/**
                 * @param {?} ev
                 * @return {?}
                 */
                function (ev) {
                    _this.zone.run((/**
                     * @return {?}
                     */
                    function () { return outputs.change && outputs.change.next(ev); }));
                })
            }, playerVars: playerVars,
            videoId: videoId }));
    };
    /**
     * @param {?} player
     * @param {?} isFullScreen
     * @return {?}
     */
    YoutubePlayerService.prototype.toggleFullScreen = /**
     * @param {?} player
     * @param {?} isFullScreen
     * @return {?}
     */
    function (player, isFullScreen) {
        var height = defaultSizes.height, width = defaultSizes.width;
        if (!isFullScreen) {
            height = window.innerHeight;
            width = window.innerWidth;
        }
        player.setSize(width, height);
    };
    // adpoted from uid
    // adpoted from uid
    /**
     * @return {?}
     */
    YoutubePlayerService.prototype.generateUniqueId = 
    // adpoted from uid
    /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var len = 7;
        return Math.random()
            .toString(35)
            .substr(2, len);
    };
    /**
     * @private
     * @return {?}
     */
    YoutubePlayerService.prototype.createApi = /**
     * @private
     * @return {?}
     */
    function () {
        var _this = this;
        /** @type {?} */
        var onYouTubeIframeAPIReady = (/**
         * @return {?}
         */
        function () {
            if (win()) {
                _this.api.next(YouTubeRef());
            }
        });
        win()['onYouTubeIframeAPIReady'] = onYouTubeIframeAPIReady;
    };
    YoutubePlayerService.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"], args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    YoutubePlayerService.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"] }
    ]; };
    /** @nocollapse */ YoutubePlayerService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["defineInjectable"])({ factory: function YoutubePlayerService_Factory() { return new YoutubePlayerService(Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"])); }, token: YoutubePlayerService, providedIn: "root" });
    return YoutubePlayerService;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var YoutubePlayerComponent = /** @class */ (function () {
    function YoutubePlayerComponent(playerService, elementRef, renderer) {
        this.playerService = playerService;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.videoId = '';
        this.height = defaultSizes.height;
        this.width = defaultSizes.width;
        /**
         * \@description sets the protocol by the navigator object
         * if there is no window, it sets a default http protocol
         * unless the protocol is set from outside
         */
        this.protocol = this.getProtocol();
        this.playerVars = {};
        // player created and initialized - sends instance of the player
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
        // state change: send the YT event with its state
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["EventEmitter"]();
    }
    /**
     * @return {?}
     */
    YoutubePlayerComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var htmlId = this.playerService.generateUniqueId();
        /** @type {?} */
        var playerSize = { height: this.height, width: this.width };
        /** @type {?} */
        var container = this.renderer.selectRootElement('#yt-player-ngx-component');
        this.renderer.setAttribute(container, 'id', htmlId);
        this.playerService.loadPlayerApi({
            protocol: this.protocol
        });
        this.playerService.setupPlayer(htmlId, {
            change: this.change,
            ready: this.ready
        }, playerSize, this.videoId, this.playerVars);
    };
    /**
     * @return {?}
     */
    YoutubePlayerComponent.prototype.getProtocol = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var hasWindow = window && window.location;
        /** @type {?} */
        var protocol = hasWindow
            ? window.location.protocol.replace(':', '')
            : 'http';
        return protocol;
    };
    YoutubePlayerComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"], args: [{
                    changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
                    selector: 'youtube-player',
                    template: "\n    <div id=\"yt-player-ngx-component\"></div>\n  "
                }] }
    ];
    /** @nocollapse */
    YoutubePlayerComponent.ctorParameters = function () { return [
        { type: YoutubePlayerService },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }
    ]; };
    YoutubePlayerComponent.propDecorators = {
        videoId: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        height: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        width: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        protocol: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        playerVars: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"] }],
        ready: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }],
        change: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Output"] }]
    };
    return YoutubePlayerComponent;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var NgxYoutubePlayerModule = /** @class */ (function () {
    function NgxYoutubePlayerModule() {
    }
    /**
     * @return {?}
     */
    NgxYoutubePlayerModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: NgxYoutubePlayerModule,
            providers: [YoutubePlayerService]
        };
    };
    NgxYoutubePlayerModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    declarations: [YoutubePlayerComponent],
                    imports: [],
                    providers: [YoutubePlayerService],
                    exports: [YoutubePlayerComponent]
                },] }
    ];
    return NgxYoutubePlayerModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */



//# sourceMappingURL=ngx-youtube-player.js.map

/***/ }),

/***/ "./src/app/pages/about/about.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/about/about.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcGFnZXMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/about/about.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/about/about.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section\" id=\"about\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-8 offset-lg-2\">\n                <div class=\"about-title mx-auto text-center\">\n                    <h2 class=\"font-weight-light\">A Digital web studio creating stunning  &amp; Engaging online Experiences </h2>\n                    <p class=\"text-muted pt-4\">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis.</p>\n                </div>\n            </div>\n        </div>\n        <div class=\"row margin-t-50\">\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"team-box text-center\">\n                    <div class=\"team-wrapper\">\n                        <div class=\"team-member\">\n                            <img alt=\"\" src=\"assets/images/team/img-1.jpg\" class=\"img-fluid rounded\">\n                        </div>\n                    </div>\n                    <h4 class=\"team-name\">Frank Johnson</h4>\n                    <p class=\"text-uppercase team-designation\">CEO</p>\n                </div>\n            </div>\n\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"team-box text-center\">\n                    <div class=\"team-wrapper\">\n                        <div class=\"team-member\">\n                            <img alt=\"\" src=\"assets/images/team/img-2.jpg\" class=\"img-fluid rounded\">\n                        </div>\n                    </div>\n                    <h4 class=\"team-name\">Elaine Stclair</h4>\n                    <p class=\"text-uppercase team-designation\">Designer</p>\n                </div>\n            </div>\n\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"team-box text-center\">\n                    <div class=\"team-wrapper\">\n                        <div class=\"team-member\">\n                            <img alt=\"\" src=\"assets/images/team/img-3.jpg\" class=\"img-fluid rounded\">\n                        </div>\n                    </div>\n                    <h4 class=\"team-name\">Wanda Arthur</h4>\n                    <p class=\"text-uppercase team-designation\">Developer</p>\n                </div>\n            </div>\n\n            <div class=\"col-lg-3 col-sm-6\">\n                <div class=\"team-box text-center\">\n                    <div class=\"team-wrapper\">\n                        <div class=\"team-member\">\n                            <img alt=\"\" src=\"assets/images/team/img-4.jpg\" class=\"img-fluid rounded\">\n                        </div>\n                    </div>\n                    <h4 class=\"team-name\">Joshua Stemple</h4>\n                    <p class=\"text-uppercase team-designation\">Manager</p>\n                </div>\n            </div>\n\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/pages/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/pages/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/pages/blog/blog.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/blog/blog.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcGFnZXMvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/blog/blog.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/blog/blog.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section bg-light\" id=\"blog\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-8 offset-lg-2\">\n                <h1 class=\"section-title text-center\">Latest News</h1>\n                <div class=\"section-title-border margin-t-20\"></div>\n                <p class=\"section-subtitle text-muted text-center font-secondary padding-t-30\">Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean class at a euismod mus luctus quam.</p>\n            </div>\n        </div>\n\n        <div class=\"row margin-t-30\">\n            <div class=\"col-lg-4\">\n                <div class=\"blog-box margin-t-30\">\n                    <img src=\"assets/images/blog/img-1.jpg\" class=\"img-fluid rounded\" alt=\"\">\n                    <div>\n                        <h5 class=\"mt-4 text-muted\">UI & UX Design</h5>\n                        <h4 class=\"mt-3\"><a routerLink=\"#\" class=\"blog-title\"> Doing a cross country road trip </a></h4>\n                        <p class=\"text-muted\">She packed her seven versalia, put her initial into the belt and made herself on the way..</p>\n                        <div class=\"mt-3\">\n                            <a routerLink=\"#\" class=\"read-btn\">Read More <i class=\"mdi mdi-arrow-right\"></i></a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-lg-4\">\n                <div class=\"blog-box margin-t-30\">\n                    <img src=\"assets/images/blog/img-2.jpg\" class=\"img-fluid rounded\" alt=\"\">\n                    <div>\n                        <h5 class=\"mt-4 text-muted\">Digital Marketing</h5>\n                        <h4 class=\"mt-3\"><a routerLink=\"#\" class=\"blog-title\">New exhibition at our Museum</a></h4>\n                        <p class=\"text-muted\">Pityful a rethoric question ran over her cheek, then she continued her way.</p>\n                        <div class=\"mt-3\">\n                            <a routerLink=\"#\" class=\"read-btn\">Read More <i class=\"mdi mdi-arrow-right\"></i></a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n            <div class=\"col-lg-4\">\n                <div class=\"blog-box margin-t-30\">\n                    <img src=\"assets/images/blog/img-3.jpg\" class=\"img-fluid rounded\" alt=\"\">\n                    <div>\n                        <h5 class=\"mt-4 text-muted\">Travelling</h5>\n                        <h4 class=\"mt-3\"><a routerLink=\"#\" class=\"blog-title\">Why are so many people..</a></h4>\n                        <p class=\"text-muted\">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>\n                        <div class=\"mt-3\">\n                            <a routerLink=\"#\" class=\"read-btn\">Read More <i class=\"mdi mdi-arrow-right\"></i></a>\n                        </div>\n                    </div>\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/pages/blog/blog.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/blog/blog.component.ts ***!
  \**********************************************/
/*! exports provided: BlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BlogComponent", function() { return BlogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var BlogComponent = /** @class */ (function () {
    function BlogComponent() {
    }
    BlogComponent.prototype.ngOnInit = function () {
    };
    BlogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-blog',
            template: __webpack_require__(/*! ./blog.component.html */ "./src/app/pages/blog/blog.component.html"),
            styles: [__webpack_require__(/*! ./blog.component.css */ "./src/app/pages/blog/blog.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BlogComponent);
    return BlogComponent;
}());



/***/ }),

/***/ "./src/app/pages/client/client.component.css":
/*!***************************************************!*\
  !*** ./src/app/pages/client/client.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcGFnZXMvY2xpZW50L2NsaWVudC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/pages/client/client.component.html":
/*!****************************************************!*\
  !*** ./src/app/pages/client/client.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section-sm bg-light\">\n          <div class=\"container\">\n              <div class=\"row\">\n                  <div class=\"col-md-3\">\n                      <div class=\"client-images my-3 my-md-0\">\n                          <img src=\"assets/images/clients/1.png\" alt=\"logo-img\" class=\"mx-auto img-fluid d-block\">\n                      </div>\n                  </div>\n\n                  <div class=\"col-md-3\">\n                      <div class=\"client-images my-3 my-md-0\">\n                          <img src=\"assets/images/clients/2.png\" alt=\"logo-img\" class=\"mx-auto img-fluid d-block\">\n                      </div>\n                  </div>\n\n                  <div class=\"col-md-3 \">\n                      <div class=\"client-images my-3 my-md-0\">\n                          <img src=\"assets/images/clients/3.png\" alt=\"logo-img\" class=\"mx-auto img-fluid d-block\">\n                      </div>\n                  </div>\n\n                  <div class=\"col-md-3\">\n                      <div class=\"client-images my-3 my-md-0\">\n                          <img src=\"assets/images/clients/4.png\" alt=\"logo-img\" class=\"mx-auto img-fluid d-block\">\n                      </div>\n                  </div>\n              </div>\n          </div>\n      </section>"

/***/ }),

/***/ "./src/app/pages/client/client.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/client/client.component.ts ***!
  \**************************************************/
/*! exports provided: ClientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientComponent", function() { return ClientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClientComponent = /** @class */ (function () {
    function ClientComponent() {
    }
    ClientComponent.prototype.ngOnInit = function () {
    };
    ClientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-client',
            template: __webpack_require__(/*! ./client.component.html */ "./src/app/pages/client/client.component.html"),
            styles: [__webpack_require__(/*! ./client.component.css */ "./src/app/pages/client/client.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClientComponent);
    return ClientComponent;
}());



/***/ }),

/***/ "./src/app/pages/contact/contact.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcGFnZXMvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/contact/contact.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section \" id=\"contact\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-8 offset-lg-2\">\n                <h1 class=\"section-title text-center\">Get In Touch</h1>\n                <div class=\"section-title-border margin-t-20\"></div>\n                <p class=\"section-subtitle text-muted text-center font-secondary padding-t-30\">We thrive when coming up with innovative ideas but also understand that a smart concept should be supported with measurable results.</p>\n            </div>\n        </div>\n        <div class=\"row\">\n            <div class=\"col-lg-4\">\n                <div class=\"mt-4 pt-4\">\n                    <p class=\"mt-4\"><span class=\"h5\">Office Address:</span><br> <span class=\"text-muted d-block mt-2\">\n                      Zestii Business Centre <br/>33 Dalintober Street, Glasgow G5 8JZ UK</span></p>\n                    <p class=\"mt-4\"><span class=\"h5\">Working Hours:</span><br> <span class=\"text-muted d-block mt-2\">9:00AM To 6:00PM</span></p>\n                </div>\n            </div>\n            <div class=\"col-lg-8\">\n                <div class=\"custom-form mt-4 pt-4\">\n                    <div id=\"message\"></div>\n                    <form method=\"post\" action=\"#\" name=\"contact-form\" id=\"contact-form\">\n                        <div class=\"row\">\n                            <div class=\"col-lg-6\">\n                                <div class=\"form-group mt-2\">\n                                    <input name=\"name\" id=\"name\" type=\"text\" class=\"form-control\" placeholder=\"Your name*\" >\n                                </div>\n                            </div>\n                            <div class=\"col-lg-6\">\n                                <div class=\"form-group mt-2\">\n                                    <input name=\"email\" id=\"email\" type=\"email\" class=\"form-control\" placeholder=\"Your email*\" >\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-12\">\n                                <div class=\"form-group mt-2\">\n                                    <input type=\"text\" class=\"form-control\" id=\"subject\" placeholder=\"Your Subject..\" />\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-12\">\n                                <div class=\"form-group mt-2\">\n                                    <textarea name=\"comments\" id=\"comments\" rows=\"4\" class=\"form-control\" placeholder=\"Your message...\"></textarea>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"row\">\n                            <div class=\"col-lg-12 text-right\">\n                                <input type=\"button\" id=\"submit\" name=\"send\" class=\"submitBnt btn btn-custom\" value=\"Send Message\">\n                                <div id=\"simple-msg\"></div>\n                            </div>\n                        </div>\n                    </form>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/pages/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/pages/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/pages/description/description.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/description/description.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcGFnZXMvZGVzY3JpcHRpb24vZGVzY3JpcHRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/description/description.component.html":
/*!**************************************************************!*\
  !*** ./src/app/pages/description/description.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section bg-web-desc\">\n    <div class=\"bg-overlay\"></div>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-12 text-center\">\n                <h2 class=\"text-white\">Build your dream website today</h2>\n                <p class=\"padding-t-15 home-desc mx-auto\">But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her.</p>\n                <a routerLink=\"#\" class=\"btn btn-bg-white margin-t-30 waves-effect waves-light\">View Plan & Pricing</a>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/pages/description/description.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/description/description.component.ts ***!
  \************************************************************/
/*! exports provided: DescriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DescriptionComponent", function() { return DescriptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DescriptionComponent = /** @class */ (function () {
    function DescriptionComponent() {
    }
    DescriptionComponent.prototype.ngOnInit = function () {
    };
    DescriptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-description',
            template: __webpack_require__(/*! ./description.component.html */ "./src/app/pages/description/description.component.html"),
            styles: [__webpack_require__(/*! ./description.component.css */ "./src/app/pages/description/description.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DescriptionComponent);
    return DescriptionComponent;
}());



/***/ }),

/***/ "./src/app/pages/feature/feature.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/feature/feature.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcGFnZXMvZmVhdHVyZS9mZWF0dXJlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/feature/feature.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/feature/feature.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section\" id=\"features\">\n  <div class=\"container\">\n      <div class=\"row align-items-center\">\n          <div class=\"col-lg-5 order-2 order-lg-1\">\n              <div class=\"features-box mt-5 mt-lg-0\">\n                  <ul class=\"text-muted list-unstyled margin-t-30 features-item-list\">\n                      <li class=\"\">Manage multiple accounts in same time</li>\n                      <li class=\"\">Enable and disable your account.</li>\n                      <li class=\"\">Submit Your Orgnization automaticly.</li>\n                  </ul>\n                  <a routerLink=\"#\" class=\"btn btn-custom margin-t-30 waves-effect waves-light\">Register now <i class=\"mdi mdi-arrow-right\"></i></a>\n              </div>\n          </div>\n          <div class=\"col-lg-7 order-1 order-lg-2\">\n              <div class=\"features-img mx-auto mr-lg-0\">\n                  <img src=\"assets/images/insta.png\" alt=\"Instagram\" class=\"img-fluid\">\n              </div>\n          </div>\n      </div>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/feature/feature.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/feature/feature.component.ts ***!
  \****************************************************/
/*! exports provided: FeatureComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeatureComponent", function() { return FeatureComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FeatureComponent = /** @class */ (function () {
    function FeatureComponent() {
    }
    FeatureComponent.prototype.ngOnInit = function () {
    };
    FeatureComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feature',
            template: __webpack_require__(/*! ./feature.component.html */ "./src/app/pages/feature/feature.component.html"),
            styles: [__webpack_require__(/*! ./feature.component.css */ "./src/app/pages/feature/feature.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FeatureComponent);
    return FeatureComponent;
}());



/***/ }),

/***/ "./src/app/pages/getstart/getstart.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/getstart/getstart.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcGFnZXMvZ2V0c3RhcnQvZ2V0c3RhcnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/getstart/getstart.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/getstart/getstart.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section section-lg bg-get-start\">\n    <div class=\"bg-overlay\"></div>\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-8 offset-lg-2 text-center\">\n                <h1 class=\"get-started-title text-white\">Let's Get Started</h1>\n                <div class=\"section-title-border margin-t-20 bg-white\"></div>\n                <p class=\"section-subtitle font-secondary text-white text-center padding-t-30\">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. </p>\n                <a routerLink=\"#\" class=\"btn btn-bg-white waves-effect margin-t-20\">Get Started <i class=\"mdi mdi-arrow-right\"></i> </a>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/pages/getstart/getstart.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/getstart/getstart.component.ts ***!
  \******************************************************/
/*! exports provided: GetstartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetstartComponent", function() { return GetstartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GetstartComponent = /** @class */ (function () {
    function GetstartComponent() {
    }
    GetstartComponent.prototype.ngOnInit = function () {
    };
    GetstartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-getstart',
            template: __webpack_require__(/*! ./getstart.component.html */ "./src/app/pages/getstart/getstart.component.html"),
            styles: [__webpack_require__(/*! ./getstart.component.css */ "./src/app/pages/getstart/getstart.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GetstartComponent);
    return GetstartComponent;
}());



/***/ }),

/***/ "./src/app/pages/home/home-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _index1_index1_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index1/index1.component */ "./src/app/pages/home/index1/index1.component.ts");




var routes = [
    { path: '', component: _index1_index1_component__WEBPACK_IMPORTED_MODULE_3__["Index1Component"] },
];
var HomeRoutingModule = /** @class */ (function () {
    function HomeRoutingModule() {
    }
    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HomeRoutingModule);
    return HomeRoutingModule;
}());



/***/ }),

/***/ "./src/app/pages/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/pages/home/home-routing.module.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/services.component */ "./src/app/pages/services/services.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _description_description_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../description/description.component */ "./src/app/pages/description/description.component.ts");
/* harmony import */ var _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../pricing/pricing.component */ "./src/app/pages/pricing/pricing.component.ts");
/* harmony import */ var _getstart_getstart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../getstart/getstart.component */ "./src/app/pages/getstart/getstart.component.ts");
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../blog/blog.component */ "./src/app/pages/blog/blog.component.ts");
/* harmony import */ var _feature_feature_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../feature/feature.component */ "./src/app/pages/feature/feature.component.ts");
/* harmony import */ var _client_client_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../client/client.component */ "./src/app/pages/client/client.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _testi_testi_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../testi/testi.component */ "./src/app/pages/testi/testi.component.ts");
/* harmony import */ var ngx_youtube_player__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-youtube-player */ "./node_modules/ngx-youtube-player/fesm5/ngx-youtube-player.js");
/* harmony import */ var angular_particle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! angular-particle */ "./node_modules/angular-particle/index.js");
/* harmony import */ var _index1_index1_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./index1/index1.component */ "./src/app/pages/home/index1/index1.component.ts");

















/*import { Index2Component } from './index2/index2.component';
import { Index3Component } from './index3/index3.component';
import { Index4Component } from './index4/index4.component';
import { Index5Component } from './index5/index5.component';
import { Index6Component } from './index6/index6.component';
import { Index7Component } from './index7/index7.component';
import { Index8Component } from './index8/index8.component';
import { Index9Component } from './index9/index9.component';*/
var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_index1_index1_component__WEBPACK_IMPORTED_MODULE_16__["Index1Component"], _services_services_component__WEBPACK_IMPORTED_MODULE_4__["ServicesComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"], _description_description_component__WEBPACK_IMPORTED_MODULE_6__["DescriptionComponent"], _pricing_pricing_component__WEBPACK_IMPORTED_MODULE_7__["PricingComponent"],
                _getstart_getstart_component__WEBPACK_IMPORTED_MODULE_8__["GetstartComponent"], _blog_blog_component__WEBPACK_IMPORTED_MODULE_9__["BlogComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"], _testi_testi_component__WEBPACK_IMPORTED_MODULE_13__["TestiComponent"], _client_client_component__WEBPACK_IMPORTED_MODULE_11__["ClientComponent"], _feature_feature_component__WEBPACK_IMPORTED_MODULE_10__["FeatureComponent"]
                /*Index2Component, Index3Component, Index4Component, Index5Component, Index6Component,
                Index7Component, Index8Component, Index9Component*/ 
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                ngx_youtube_player__WEBPACK_IMPORTED_MODULE_14__["NgxYoutubePlayerModule"].forRoot(),
                _home_routing_module__WEBPACK_IMPORTED_MODULE_3__["HomeRoutingModule"],
                angular_particle__WEBPACK_IMPORTED_MODULE_15__["ParticlesModule"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/pages/home/index1/index1.component.html":
/*!*********************************************************!*\
  !*** ./src/app/pages/home/index1/index1.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section bg-home home-half\" id=\"home\" data-image-src=\"assets/images/bg-home.jpg\">\n <div class=\"bg-overlay\"></div>\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-8 offset-lg-2 text-white text-center\">\n          <h4 class=\"home-small-title\">We love making things amazing and simple</h4>\n          <h1 class=\"home-title\">Social reactivation made easy.</h1>\n          <p class=\"padding-t-15 home-desc mx-auto\">Don't waste your precious time appealing manually.</p>\n          <a href=\"#\" class=\"btn btn-custom margin-t-20\">Get Started Today</a>\n          <img src=\"assets/images/home-dashboard.png\" alt=\"\" class=\"img-fluid margin-t-20\">\n        </div>\n      </div>\n    </div>\n</section>\n\n\n<app-feature></app-feature>\n<app-services></app-services>\n<app-pricing></app-pricing>\n<app-contact></app-contact>\n\n"

/***/ }),

/***/ "./src/app/pages/home/index1/index1.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/home/index1/index1.component.ts ***!
  \*******************************************************/
/*! exports provided: Index1Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Index1Component", function() { return Index1Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");



var Index1Component = /** @class */ (function () {
    function Index1Component(modalService) {
        this.modalService = modalService;
        this.id = 'JlvxDa7Sges';
        this.playerVars = {
            cc_lang_pref: 'en'
        };
    }
    Index1Component.prototype.onStateChange = function (event) {
        this.ytEvent = event.data;
    };
    Index1Component.prototype.savePlayer = function (player) {
        this.player = player;
    };
    Index1Component.prototype.playVideo = function () {
        this.player.playVideo();
    };
    Index1Component.prototype.pauseVideo = function () {
        this.player.pauseVideo();
    };
    Index1Component.prototype.openWindowCustomClass = function (content) {
        this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg' });
    };
    Index1Component.prototype.ngOnInit = function () {
        document.getElementById('navbar1').classList.add('navbar-white');
        window.onscroll = function () { myFunction(); };
        var navbar1 = document.getElementById("navbar1");
        function myFunction() {
            if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
                navbar1.style.backgroundColor = "#ffffff";
                navbar1.style.padding = "10px";
            }
            else {
                navbar1.style.backgroundColor = "";
            }
        }
    };
    Index1Component = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-index1',
            template: __webpack_require__(/*! ./index1.component.html */ "./src/app/pages/home/index1/index1.component.html"),
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            styles: ["\n    .dark-modal .modal-content {\n      background-color: #000000;\n      color: white;\n      background: none;\n      border: none;\n    }\n    .dark-modal .modal-header {\n      border : none\n    }\n    .dark-modal .close {\n      color: white;\n    }\n  "]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], Index1Component);
    return Index1Component;
}());



/***/ }),

/***/ "./src/app/pages/pricing/pricing.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/pricing/pricing.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcGFnZXMvcHJpY2luZy9wcmljaW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/pricing/pricing.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/pricing/pricing.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section bg-light\" id=\"pricing\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-8 offset-lg-2\">\n                <h1 class=\"section-title text-center\">FLEXIBLE PLANS, NO OTHER HIDDEN COSTS</h1>\n                <div class=\"section-title-border margin-t-20\"></div>\n                <p class=\"section-subtitle font-secondary text-muted text-center padding-t-30\">Call to action pricing table is really crucial to your for your business website. Make your bids stand-out with amazing options.</p>\n            </div>\n        </div>\n        <div class=\"row margin-t-50\">\n            <div class=\"col-lg-4\">\n                <div class=\"text-center pricing-box\">\n                    <h4 class=\"text-uppercase\">Economy</h4>\n                    <h1>$2.90</h1>\n                    <h6 class=\"text-uppercase text-muted\">Billing Per Month</h6>\n                    <div class=\"plan-features margin-t-50\">\n                        <p>1 instagram account</p>\n                        <p>Bot <b class=\"text-custom\">Manager</b></p>\n                    </div>\n                    <a routerLink=\"#\" class=\"btn btn-custom waves-effect waves-light margin-t-30\">Join Now</a>\n                </div>\n            </div>\n            <div class=\"col-lg-4\">\n                <div class=\"text-center pricing-box bg-white price-active\">\n                    <div class=\"ribbon-box\"><span>Popular</span></div>\n                    <h4 class=\"text-uppercase\">Deluxe</h4>\n                    <h1>$7.90</h1>\n                    <h6 class=\"text-uppercase text-muted\">Billing Per Month</h6>\n                    <div class=\"plan-features margin-t-50\">\n                      <p>3 instagram accounts</p>\n                      <p>Bot <b class=\"text-custom\">Manager</b></p>\n                    </div>\n                    <a routerLink=\"#\" class=\"btn btn-custom waves-effect waves-light margin-t-30\">Join Now</a>\n                </div>\n            </div>\n            <div class=\"col-lg-4\">\n                <div class=\"text-center pricing-box\">\n                    <h4 class=\"text-uppercase\">Ultimate</h4>\n                    <h1>$9.90</h1>\n                    <h6 class=\"text-uppercase text-muted\">Billing Per Month</h6>\n                    <div class=\"plan-features margin-t-50\">\n                      <p>3+ instagram accounts</p>\n                      <p>Bot <b class=\"text-custom\">Manager</b>, admin manager</p>\n                    </div>\n                    <a routerLink=\"#\" class=\"btn btn-custom waves-effect waves-light margin-t-30\">Join Now</a>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/pricing/pricing.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/pricing/pricing.component.ts ***!
  \****************************************************/
/*! exports provided: PricingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingComponent", function() { return PricingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PricingComponent = /** @class */ (function () {
    function PricingComponent() {
    }
    PricingComponent.prototype.ngOnInit = function () {
    };
    PricingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pricing',
            template: __webpack_require__(/*! ./pricing.component.html */ "./src/app/pages/pricing/pricing.component.html"),
            styles: [__webpack_require__(/*! ./pricing.component.css */ "./src/app/pages/pricing/pricing.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PricingComponent);
    return PricingComponent;
}());



/***/ }),

/***/ "./src/app/pages/services/services.component.css":
/*!*******************************************************!*\
  !*** ./src/app/pages/services/services.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcGFnZXMvc2VydmljZXMvc2VydmljZXMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/services/services.component.html":
/*!********************************************************!*\
  !*** ./src/app/pages/services/services.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section bg-light\" id=\"services\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-8 offset-lg-2\">\n                <h1 class=\"section-title text-center\">RECOVERING DISABLED ACCOUNTS HAS NEVER BEEN EASIER\n                </h1>\n                <div class=\"section-title-border margin-t-20\"></div>\n            </div>\n        </div>\n        <div class=\"row margin-t-30\">\n            <div class=\"col-lg-4 margin-t-20\">\n                <div class=\"services-box\">\n                    <div class=\"media\">\n                        <i class=\"pe-7s-diamond text-custom\"></i>\n                        <div class=\"media-body ml-4\">\n                            <h4>Friendly pricings</h4>\n                            <p class=\"pt-2 text-muted\">\n                              Hand over your accounts that seek for reactivation and our system will automatically take care of a smart and automated appealing process.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 margin-t-20\">\n                <div class=\"services-box\">\n                    <div class=\"media\">\n                        <i class=\"pe-7s-display2 text-custom\"></i>\n                        <div class=\"media-body ml-4\">\n                            <h4>Quick and easy setup</h4>\n                            <p class=\"pt-2 text-muted\">\n                              During the reactivation process you will be able to see whether our bots are submitting a form, sending an email or waiting for a feedback.\n                            </p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-4 margin-t-20\">\n                <div class=\"services-box\">\n                    <div class=\"media\">\n                        <i class=\"pe-7s-piggy text-custom\"></i>\n                        <div class=\"media-body ml-4\">\n                            <h4>Live progress tracking</h4>\n                            <p class=\"pt-2 text-muted\">You can customize the appealing process identity by deciding whether to use your own emails, selfies... or let the bot generate all the required stuff!</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n"

/***/ }),

/***/ "./src/app/pages/services/services.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/services/services.component.ts ***!
  \******************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    ServicesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/pages/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.css */ "./src/app/pages/services/services.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/pages/testi/testi.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/testi/testi.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAvcGFnZXMvdGVzdGkvdGVzdGkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/testi/testi.component.html":
/*!**************************************************!*\
  !*** ./src/app/pages/testi/testi.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"section\" id=\"testi\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-lg-8 offset-lg-2\">\n                <h1 class=\"section-title text-center\">What they've said</h1>\n                <div class=\"section-title-border margin-t-20\"></div>\n                <p class=\"section-subtitle text-muted text-center font-secondary padding-t-30\">The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli.</p>\n            </div>\n        </div>\n        <div class=\"row margin-t-50\">\n            <div class=\"col-lg-4\">\n                <div class=\"testimonial-box margin-t-30\">\n                    <div class=\"testimonial-decs p-4\">\n                        <div class=\"testi-icon\">\n                            <i class=\"mdi mdi-format-quote-open display-2\"></i>\n                        </div>\n                        <img src=\"assets/images/testimonials/user-1.jpg\" alt=\"\" class=\"img-fluid mx-auto d-block img-thumbnail rounded-circle mb-4\">\n                        <div class=\"p-1\">\n                            <h5 class=\"text-center text-uppercase mb-3\">Dennis Williams - <span class=\"text-muted text-capitalize\">Charleston</span></h5>\n                            <p class=\"text-muted text-center mb-0\">“I feel confident imposing change on myself. It's a lot more fun progressing than looking back. That's why I need to throw curve balls.” </p>\n                        </div>\n                    </div>\n                    \n                </div>\n            </div>\n            <div class=\"col-lg-4\">\n                <div class=\"testimonial-box margin-t-30\">\n                    <div class=\"testimonial-decs p-4\">\n                        <div class=\"testi-icon\">\n                            <i class=\"mdi mdi-format-quote-open display-2\"></i>\n                        </div>\n                        <img src=\"assets/images/testimonials/user-2.jpg\" alt=\"\" class=\"img-fluid mx-auto d-block img-thumbnail rounded-circle mb-4\">\n                        <div class=\"p-1\">\n                            <h5 class=\"text-center text-uppercase mb-3\">Laurie Bell - <span class=\"text-muted text-capitalize\">Worcester</span></h5>\n                            <p class=\"text-muted text-center mb-0\">“Our task must be to free ourselves by widening our circle of compassion to embrace all living creatures and the whole of nature and its beauty.” </p>\n                        </div>\n                    </div>\n                    \n                </div>\n            </div>\n            <div class=\"col-lg-4\">\n                <div class=\"testimonial-box margin-t-30\">\n                    <div class=\"testimonial-decs p-4\">\n                        <div class=\"testi-icon\">\n                            <i class=\"mdi mdi-format-quote-open display-2\"></i>\n                        </div>\n                        <img src=\"assets/images/testimonials/user-3.jpg\" alt=\"\" class=\"img-fluid mx-auto d-block img-thumbnail rounded-circle mb-4\">\n                        <div class=\"p-1\">\n                            <h5 class=\"text-center text-uppercase mb-3\">Howard Kelley - <span class=\"text-muted text-capitalize\">Lynchburg</span></h5>\n                            <p class=\"text-muted text-center mb-0\">“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.” </p>\n                        </div>\n                    </div>\n                    \n                </div>\n            </div>\n        </div>\n    </div>\n</section>"

/***/ }),

/***/ "./src/app/pages/testi/testi.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/testi/testi.component.ts ***!
  \************************************************/
/*! exports provided: TestiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestiComponent", function() { return TestiComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TestiComponent = /** @class */ (function () {
    function TestiComponent() {
    }
    TestiComponent.prototype.ngOnInit = function () {
    };
    TestiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-testi',
            template: __webpack_require__(/*! ./testi.component.html */ "./src/app/pages/testi/testi.component.html"),
            styles: [__webpack_require__(/*! ./testi.component.css */ "./src/app/pages/testi/testi.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TestiComponent);
    return TestiComponent;
}());



/***/ })

}]);
//# sourceMappingURL=default~home-home-module~pages-pages-module.js.map