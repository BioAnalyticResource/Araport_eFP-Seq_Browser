/** 
 *	 tablefilter v0.2.32 by Max Guglielmi
 *	 build date: 2016-05-26T07:19:35.705Z 
 *	 MIT License  
 */

! function(t, e) {
    if ("object" == typeof exports && "object" == typeof module) module.exports = e();
    else if ("function" == typeof define && define.amd) define([], e);
    else {
        var i = e();
        for (var s in i)("object" == typeof exports ? exports : t)[s] = i[s] } }(this, function() {
    return function(t) {
        function e(i) {
            if (s[i]) return s[i].exports;
            var n = s[i] = { exports: {}, id: i, loaded: !1 };
            return t[i].call(n.exports, n, n.exports, e), n.loaded = !0, n.exports }
        var i = window.webpackJsonp;
        window.webpackJsonp = function(s, r) {
            for (var o, l, a = 0, h = []; a < s.length; a++) l = s[a], n[l] && h.push.apply(h, n[l]), n[l] = 0;
            for (o in r) t[o] = r[o];
            for (i && i(s, r); h.length;) h.shift().call(null, e) };
        var s = {},
            n = { 0: 0 };
        return e.e = function(t, i) {
            if (0 === n[t]) return i.call(null, e);
            if (void 0 !== n[t]) n[t].push(i);
            else { n[t] = [i];
                var s = document.getElementsByTagName("head")[0],
                    r = document.createElement("script");
                r.type = "text/javascript", r.charset = "utf-8", r.async = !0, r.src = e.p + "tf-" + ({}[t] || t) + ".js", s.appendChild(r) } }, e.m = t, e.c = s, e.p = "", e(0) }([function(t, e, i) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : { "default": t } }

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.TableFilter = void 0;
        var r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t },
            o = i(1),
            l = s(o),
            a = i(3),
            h = i(5),
            c = i(4),
            p = i(6),
            u = i(7),
            f = i(2),
            d = i(8),
            g = i(9),
            m = i(12),
            v = i(13),
            b = i(14),
            y = i(15),
            _ = i(18),
            C = i(19),
            w = i(20),
            x = i(21),
            E = i(22),
            T = i(23),
            F = i(24),
            P = i(25),
            S = i(26),
            R = i(11),
            I = f.root.document;
        e.TableFilter = function() {
            function t() {
                var e = this;
                n(this, t), this.id = null, this.version = "0.2.32", this.year = (new Date).getFullYear(), this.tbl = null, this.startRow = null, this.refRow = null, this.headersRow = null, this.cfg = {}, this.nbFilterableRows = 0, this.nbCells = null, this._hasGrid = !1;
                for (var i = arguments.length, s = Array(i), o = 0; i > o; o++) s[o] = arguments[o];
                if (s.forEach(function(t) { "object" === ("undefined" == typeof t ? "undefined" : r(t)) && "TABLE" === t.nodeName ? (e.tbl = t, e.id = t.id || "tf_" + (new Date).getTime() + "_") : (0, c.isString)(t) ? (e.id = t, e.tbl = (0, a.elm)(t)) : (0, c.isNumber)(t) ? e.startRow = t : (0, c.isObj)(t) && (e.cfg = t) }), !this.tbl || "TABLE" !== this.tbl.nodeName || 0 === this.getRowsNb()) throw new Error("Could not instantiate TableFilter: HTML table\n                DOM element not found.");
                var l = this.cfg;
                this.emitter = new d.Emitter, this.refRow = null === this.startRow ? 2 : this.startRow + 1;
                try { this.nbCells = this.getCellsNb(this.refRow) } catch (h) { this.nbCells = this.getCellsNb(0) }
                this.basePath = l.base_path || "tablefilter/", this.fltGrid = l.grid !== !1, this.gridLayout = Boolean(l.grid_layout), this.filtersRowIndex = isNaN(l.filters_row_index) ? 0 : l.filters_row_index, this.headersRow = isNaN(l.headers_row_index) ? 0 === this.filtersRowIndex ? 1 : 0 : l.headers_row_index, this.fltCellTag = (0, c.isString)(l.filters_cell_tag) ? l.filters_cell_tag : R.CELL_TAG, this.fltIds = [], this.fltElms = [], this.validRowsIndex = [], this.fltGridEl = null, this.infDiv = null, this.lDiv = null, this.rDiv = null, this.mDiv = null, this.infDivCssClass = l.inf_div_css_class || "inf", this.lDivCssClass = l.left_div_css_class || "ldiv", this.rDivCssClass = l.right_div_css_class || "rdiv", this.mDivCssClass = l.middle_div_css_class || "mdiv", this.contDivCssClass = l.content_div_css_class || "cont", this.stylePath = l.style_path || this.basePath + "style/", this.stylesheet = l.stylesheet || this.stylePath + "tablefilter.css", this.stylesheetId = this.id + "_style", this.fltsRowCssClass = l.flts_row_css_class || "fltrow", this.enableIcons = l.enable_icons !== !1, this.alternateRows = Boolean(l.alternate_rows), this.hasColWidths = (0, c.isArray)(l.col_widths), this.colWidths = this.hasColWidths ? l.col_widths : null, this.fltCssClass = l.flt_css_class || "flt", this.fltMultiCssClass = l.flt_multi_css_class || "flt_multi", this.fltSmallCssClass = l.flt_small_css_class || "flt_s", this.singleFltCssClass = l.single_flt_css_class || "single_flt", this.enterKey = l.enter_key !== !1, this.onBeforeFilter = (0, c.isFn)(l.on_before_filter) ? l.on_before_filter : null, this.onAfterFilter = (0, c.isFn)(l.on_after_filter) ? l.on_after_filter : null, this.caseSensitive = Boolean(l.case_sensitive), this.hasExactMatchByCol = (0, c.isArray)(l.columns_exact_match), this.exactMatchByCol = this.hasExactMatchByCol ? l.columns_exact_match : [], this.exactMatch = Boolean(l.exact_match), this.linkedFilters = Boolean(l.linked_filters), this.disableExcludedOptions = Boolean(l.disable_excluded_options), this.activeFilterId = null, this.hasVisibleRows = Boolean(l.rows_always_visible), this.visibleRows = this.hasVisibleRows ? l.rows_always_visible : [], this.isExternalFlt = Boolean(l.external_flt_grid), this.externalFltTgtIds = l.external_flt_grid_ids || [], this.externalFltEls = [], this.onFiltersLoaded = (0, c.isFn)(l.on_filters_loaded) ? l.on_filters_loaded : null, this.singleSearchFlt = Boolean(l.single_filter), this.onRowValidated = (0, c.isFn)(l.on_row_validated) ? l.on_row_validated : null, this.customCellDataCols = l.custom_cell_data_cols ? l.custom_cell_data_cols : [], this.customCellData = (0, c.isFn)(l.custom_cell_data) ? l.custom_cell_data : null, this.watermark = l.watermark || "", this.isWatermarkArray = (0, c.isArray)(this.watermark), this.toolBarTgtId = l.toolbar_target_id || null, this.help = (0, c.isUndef)(l.help_instructions) ? void 0 : Boolean(l.help_instructions), this.popupFilters = Boolean(l.popup_filters), this.markActiveColumns = Boolean(l.mark_active_columns), this.activeColumnsCssClass = l.active_columns_css_class || "activeHeader", this.onBeforeActiveColumn = (0, c.isFn)(l.on_before_active_column) ? l.on_before_active_column : null, this.onAfterActiveColumn = (0, c.isFn)(l.on_after_active_column) ? l.on_after_active_column : null, this.displayAllText = l.display_all_text || "Clear", this.enableEmptyOption = Boolean(l.enable_empty_option), this.emptyText = l.empty_text || "(Empty)", this.enableNonEmptyOption = Boolean(l.enable_non_empty_option), this.nonEmptyText = l.non_empty_text || "(Non empty)", this.onSlcChange = l.on_change !== !1, this.sortSlc = l.sort_select !== !1, this.isSortNumAsc = Boolean(l.sort_num_asc), this.sortNumAsc = this.isSortNumAsc ? l.sort_num_asc : [], this.isSortNumDesc = Boolean(l.sort_num_desc), this.sortNumDesc = this.isSortNumDesc ? l.sort_num_desc : [], this.loadFltOnDemand = Boolean(l.load_filters_on_demand), this.hasCustomOptions = (0, c.isObj)(l.custom_options), this.customOptions = l.custom_options, this.rgxOperator = l.regexp_operator || "rgx:", this.emOperator = l.empty_operator || "[empty]", this.nmOperator = l.nonempty_operator || "[nonempty]", this.orOperator = l.or_operator || "||", this.anOperator = l.and_operator || "&&", this.grOperator = l.greater_operator || ">", this.lwOperator = l.lower_operator || "<", this.leOperator = l.lower_equal_operator || "<=", this.geOperator = l.greater_equal_operator || ">=", this.dfOperator = l.different_operator || "!", this.lkOperator = l.like_operator || "*", this.eqOperator = l.equal_operator || "=", this.stOperator = l.start_with_operator || "{", this.enOperator = l.end_with_operator || "}", this.curExp = l.cur_exp || "^[¥£€$]", this.separator = l.separator || ",", this.rowsCounter = Boolean(l.rows_counter), this.statusBar = Boolean(l.status_bar), this.loader = Boolean(l.loader), this.displayBtn = Boolean(l.btn), this.btnText = l.btn_text || (this.enableIcons ? "" : "Go"), this.btnCssClass = l.btn_css_class || (this.enableIcons ? "btnflt_icon" : "btnflt"), this.btnReset = Boolean(l.btn_reset), this.btnResetCssClass = l.btn_reset_css_class || "reset", this.onBeforeReset = (0, c.isFn)(l.on_before_reset) ? l.on_before_reset : null, this.onAfterReset = (0, c.isFn)(l.on_after_reset) ? l.on_after_reset : null, this.paging = Boolean(l.paging), this.nbHiddenRows = 0, this.autoFilter = Boolean(l.auto_filter), this.autoFilterDelay = isNaN(l.auto_filter_delay) ? R.AUTO_FILTER_DELAY : l.auto_filter_delay, this.isUserTyping = null, this.autoFilterTimer = null, this.highlightKeywords = Boolean(l.highlight_keywords), this.noResults = (0, c.isObj)(l.no_results_message) || Boolean(l.no_results_message), this.state = (0, c.isObj)(l.state) || Boolean(l.state), this.defaultDateType = l.default_date_type || "DMY", this.thousandsSeparator = l.thousands_separator || ",", this.decimalSeparator = l.decimal_separator || ".", this.hasColNbFormat = (0, c.isArray)(l.col_number_format), this.colNbFormat = this.hasColNbFormat ? l.col_number_format : null, this.hasColDateType = (0, c.isArray)(l.col_date_type), this.colDateType = this.hasColDateType ? l.col_date_type : null, this.prfxTf = "TF", this.prfxFlt = "flt", this.prfxValButton = "btn", this.prfxInfDiv = "inf_", this.prfxLDiv = "ldiv_", this.prfxRDiv = "rdiv_", this.prfxMDiv = "mdiv_", this.prfxResponsive = "resp", this.extensions = l.extensions, this.hasExtensions = (0, c.isArray)(this.extensions), this.enableDefaultTheme = Boolean(l.enable_default_theme), this.hasThemes = this.enableDefaultTheme || (0, c.isArray)(l.themes), this.themes = l.themes || [], this.themesPath = l.themes_path || this.stylePath + "themes/", this.responsive = Boolean(l.responsive), this.Mod = {}, this.ExtRegistry = {} }
            return t.prototype.init = function() {
                var t = this;
                if (!this._hasGrid) {
                    var e = this.Mod,
                        i = this.singleSearchFlt ? 1 : this.nbCells,
                        s = void 0;
                    if (this["import"](this.stylesheetId, this.stylesheet, null, "link"), this.hasThemes && this.loadThemes(), e.help || (e.help = new T.Help(this)), this.help && e.help.init(), this.state && (e.state || (e.state = new S.State(this)), e.state.init()), this.gridLayout && (e.gridLayout || (e.gridLayout = new g.GridLayout(this)), e.gridLayout.init()), this.loader && (e.loader || (e.loader = new m.Loader(this)), e.loader.init()), this.highlightKeywords && (e.highlightKeyword = new v.HighlightKeyword(this), e.highlightKeyword.init()), this.popupFilters && (e.popupFilter || (e.popupFilter = new b.PopupFilter(this)), e.popupFilter.init()), this.fltGrid) {
                        var n = this._insertFiltersRow();
                        this.nbFilterableRows = this.getRowsNb();
                        for (var r = 0; i > r; r++) { this.emitter.emit("before-filter-init", this, r);
                            var o = (0, a.createElm)(this.fltCellTag),
                                l = this.getFilterType(r);
                            this.singleSearchFlt && (o.colSpan = this.nbCells), this.gridLayout || n.appendChild(o), s = r === i - 1 && this.displayBtn ? this.fltSmallCssClass : this.fltCssClass, this.singleSearchFlt && (l = R.INPUT, s = this.singleFltCssClass), l === R.SELECT || l === R.MULTIPLE ? (e.dropdown || (e.dropdown = new y.Dropdown(this)), e.dropdown.init(r, this.isExternalFlt, o)) : l === R.CHECKLIST ? (e.checkList || (e.checkList = new _.CheckList(this)), e.checkList.init(r, this.isExternalFlt, o)) : this._buildInputFilter(r, s, o), r === i - 1 && this.displayBtn && this._buildSubmitButton(r, o), this.emitter.emit("after-filter-init", this, r) }
                        this.emitter.on(["filter-focus"], function(e, i) {
                            return t.setActiveFilterId(i.id) }) } else this._initNoFilters();
                    this.hasVisibleRows && (this.emitter.on(["after-filtering"], function() {
                        return t.enforceVisibility() }), this.enforceVisibility()), this.rowsCounter && (e.rowsCounter = new C.RowsCounter(this), e.rowsCounter.init()), this.statusBar && (e.statusBar = new w.StatusBar(this), e.statusBar.init()), this.paging && (e.paging ? e.paging.reset() : (e.paging = new x.Paging(this), e.paging.init())), this.btnReset && (e.clearButton = new E.ClearButton(this), e.clearButton.init()), this.hasColWidths && !this.gridLayout && this.setColWidths(), this.alternateRows && (e.alternateRows = new F.AlternateRows(this), e.alternateRows.init()), this.noResults && (e.noResults || (e.noResults = new P.NoResults(this)), e.noResults.init()), this._hasGrid = !0, this.gridLayout || ((0, a.addClass)(this.tbl, this.prfxTf), this.responsive && (0, a.addClass)(this.tbl, this.prfxResponsive)), this.hasExtensions && this.initExtensions(), this.markActiveColumns && (this.emitter.on(["before-filtering"], function() {
                        return t.clearActiveColumns() }), this.emitter.on(["cell-processed"], function(e, i) {
                        return t.markActiveColumn(i) })), this.linkedFilters && this.emitter.on(["after-filtering"], function() {
                        return t.linkFilters() }), this.onFiltersLoaded && this.onFiltersLoaded.call(null, this), this.initialized = !0, this.emitter.emit("initialized", this) } }, t.prototype.detectKey = function(t) {
                if (this.enterKey && t) {
                    var e = l["default"].keyCode(t);
                    e === R.ENTER_KEY ? (this.filter(), l["default"].cancel(t), l["default"].stop(t)) : (this.isUserTyping = !0, f.root.clearInterval(this.autoFilterTimer), this.autoFilterTimer = null) } }, t.prototype.onKeyUp = function(t) {
                function e() { f.root.clearInterval(this.autoFilterTimer), this.autoFilterTimer = null, this.isUserTyping || (this.filter(), this.isUserTyping = null) }
                if (this.autoFilter) {
                    var i = l["default"].keyCode(t);
                    this.isUserTyping = !1, i !== R.ENTER_KEY && i !== R.TAB_KEY && i !== R.ESC_KEY && i !== R.UP_ARROW_KEY && i !== R.DOWN_ARROW_KEY ? null === this.autoFilterTimer && (this.autoFilterTimer = f.root.setInterval(e.bind(this), this.autoFilterDelay)) : (f.root.clearInterval(this.autoFilterTimer), this.autoFilterTimer = null) } }, t.prototype.onKeyDown = function() { this.autoFilter && (this.isUserTyping = !0) }, t.prototype.onInpFocus = function(t) {
                var e = l["default"].target(t);
                this.emitter.emit("filter-focus", this, e) }, t.prototype.onInpBlur = function() { this.autoFilter && (this.isUserTyping = !1, f.root.clearInterval(this.autoFilterTimer)), this.emitter.emit("filter-blur", this) }, t.prototype._insertFiltersRow = function() {
                if (!this.gridLayout) {
                    var t = void 0,
                        e = (0, a.tag)(this.tbl, "thead");
                    return t = e.length > 0 ? e[0].insertRow(this.filtersRowIndex) : this.tbl.insertRow(this.filtersRowIndex), t.className = this.fltsRowCssClass, this.isExternalFlt && (t.style.display = R.NONE), this.emitter.emit("filters-row-inserted", this, t), t } }, t.prototype._initNoFilters = function() { this.fltGrid || (this.refRow = this.refRow > 0 ? this.refRow - 1 : 0, this.nbFilterableRows = this.getRowsNb()) }, t.prototype._buildInputFilter = function(t, e, i) {
                var s = this,
                    n = this.getFilterType(t),
                    r = this.isExternalFlt ? this.externalFltTgtIds[t] : null,
                    o = n === R.INPUT ? "text" : "hidden",
                    h = (0, a.createElm)(R.INPUT, ["id", this.prfxFlt + t + "_" + this.id], ["type", o], ["ct", t]); "hidden" !== o && this.watermark && h.setAttribute("placeholder", this.isWatermarkArray ? this.watermark[t] || "" : this.watermark), h.className = e || this.fltCssClass, l["default"].add(h, "focus", function(t) {
                    return s.onInpFocus(t) }), r ? ((0, a.elm)(r).appendChild(h), this.externalFltEls.push(h)) : i.appendChild(h), this.fltIds.push(h.id), l["default"].add(h, "keypress", function(t) {
                    return s.detectKey(t) }), l["default"].add(h, "keydown", function() {
                    return s.onKeyDown() }), l["default"].add(h, "keyup", function(t) {
                    return s.onKeyUp(t) }), l["default"].add(h, "blur", function() {
                    return s.onInpBlur() }) }, t.prototype._buildSubmitButton = function(t, e) {
                var i = this,
                    s = this.isExternalFlt ? this.externalFltTgtIds[t] : null,
                    n = (0, a.createElm)(R.INPUT, ["id", this.prfxValButton + t + "_" + this.id], ["type", "button"], ["value", this.btnText]);
                n.className = this.btnCssClass, s ? (0, a.elm)(s).appendChild(n) : e.appendChild(n), l["default"].add(n, "click", function() {
                    return i.filter() }) }, t.prototype.feature = function(t) {
                return this.Mod[t] }, t.prototype.initExtensions = function() {
                var t = this.extensions;
                i.p = this.basePath, this.emitter.emit("before-loading-extensions", this);
                for (var e = 0, s = t.length; s > e; e++) {
                    var n = t[e];
                    this.ExtRegistry[n.name] || this.loadExtension(n) }
                this.emitter.emit("after-loading-extensions", this) }, t.prototype.loadExtension = function(t) {
                var e = this;
                if (t && t.name) {
                    var s = t.name,
                        n = t.path,
                        r = void 0;
                    s && n ? r = t.path + s : (s = s.replace(".js", ""), r = "extensions/{}/{}".replace(/{}/g, s)), i.e(1, function(i) {
                        var n = [i(30)("./" + r)];
                        (function(i) {
                            var n = new i["default"](e, t);
                            n.init(), e.ExtRegistry[s] = n }).apply(null, n) }) } }, t.prototype.extension = function(t) {
                return this.ExtRegistry[t] }, t.prototype.hasExtension = function(t) {
                return !(0, c.isEmpty)(this.ExtRegistry[t]) }, t.prototype.destroyExtensions = function() {
                for (var t = this.extensions, e = 0, i = t.length; i > e; e++) {
                    var s = t[e],
                        n = this.ExtRegistry[s.name];
                    n && (n.destroy(), this.ExtRegistry[s.name] = void 0) } }, t.prototype.loadThemes = function() {
                var t = this.themes;
                if (this.emitter.emit("before-loading-themes", this), this.enableDefaultTheme) {
                    var e = { name: "default" };
                    this.themes.push(e) }
                if ((0, c.isArray)(t))
                    for (var i = 0, s = t.length; s > i; i++) {
                        var n = t[i],
                            r = n.name,
                            o = n.path,
                            l = this.prfxTf + r;
                        r && !o ? o = this.themesPath + r + "/" + r + ".css" : !r && n.path && (r = "theme{0}".replace("{0}", i)), this.isImported(o, "link") || this["import"](l, o, null, "link") }
                this.btnResetText = null, this.btnResetHtml = '<input type="button" value="" class="' + this.btnResetCssClass + '" title="Clear filters" />', this.btnPrevPageHtml = '<input type="button" value="" class="' + this.btnPageCssClass + ' previousPage" title="Previous page" />', this.btnNextPageHtml = '<input type="button" value="" class="' + this.btnPageCssClass + ' nextPage" title="Next page" />', this.btnFirstPageHtml = '<input type="button" value="" class="' + this.btnPageCssClass + ' firstPage" title="First page" />', this.btnLastPageHtml = '<input type="button" value="" class="' + this.btnPageCssClass + ' lastPage" title="Last page" />', this.loader = !0, this.loaderHtml = '<div class="defaultLoader"></div>', this.loaderText = null, this.emitter.emit("after-loading-themes", this) }, t.prototype.getStylesheet = function() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? "default" : arguments[0];
                return (0, a.elm)(this.prfxTf + t) }, t.prototype.destroy = function() {
                var t = this;
                if (this._hasGrid) {
                    var e = this.tbl.rows,
                        i = this.Mod,
                        s = this.emitter;
                    this.isExternalFlt && !this.popupFilters && this.removeExternalFlts(), this.infDiv && this.removeToolbar(), this.markActiveColumns && (this.clearActiveColumns(), s.off(["before-filtering"], function() {
                        return t.clearActiveColumns() }), s.off(["cell-processed"], function(e, i) {
                        return t.markActiveColumn(i) })), this.hasExtensions && this.destroyExtensions(), this.validateAllRows(), this.fltGrid && !this.gridLayout && (this.fltGridEl = e[this.filtersRowIndex], this.tbl.deleteRow(this.filtersRowIndex)), s.emit("destroy", this), Object.keys(i).forEach(function(t) {
                        var e = i[t];
                        e && (0, c.isFn)(e.destroy) && e.destroy() }), this.hasVisibleRows && s.off(["after-filtering"], function() {
                        return t.enforceVisibility() }), this.linkedFilters && s.off(["after-filtering"], function() {
                        return t.linkFilters() }), this.emitter.off(["filter-focus"], function(e, i) {
                        return t.setActiveFilterId(i.id) }), (0, a.removeClass)(this.tbl, this.prfxTf), (0, a.removeClass)(this.tbl, this.prfxResponsive), this.nbHiddenRows = 0, this.validRowsIndex = [], this.fltIds = [], this._hasGrid = !1, this.initialized = !1 } }, t.prototype.setToolbar = function() {
                if (!this.infDiv) {
                    var t = (0, a.createElm)("div", ["id", this.prfxInfDiv + this.id]);
                    if (t.className = this.infDivCssClass, this.toolBarTgtId)(0, a.elm)(this.toolBarTgtId).appendChild(t);
                    else if (this.gridLayout) {
                        var e = this.Mod.gridLayout;
                        e.tblMainCont.appendChild(t), t.className = e.gridInfDivCssClass } else {
                        var i = (0, a.createElm)("caption");
                        i.appendChild(t), this.tbl.insertBefore(i, this.tbl.firstChild) }
                    this.infDiv = (0, a.elm)(this.prfxInfDiv + this.id);
                    var s = (0, a.createElm)("div", ["id", this.prfxLDiv + this.id]);
                    s.className = this.lDivCssClass, t.appendChild(s), this.lDiv = (0, a.elm)(this.prfxLDiv + this.id);
                    var n = (0, a.createElm)("div", ["id", this.prfxRDiv + this.id]);
                    n.className = this.rDivCssClass, t.appendChild(n), this.rDiv = (0, a.elm)(this.prfxRDiv + this.id);
                    var r = (0, a.createElm)("div", ["id", this.prfxMDiv + this.id]);
                    r.className = this.mDivCssClass, t.appendChild(r), this.mDiv = (0, a.elm)(this.prfxMDiv + this.id), (0, c.isUndef)(this.help) && (this.Mod.help.enabled = !0, this.emitter.emit("init-help", this)) } }, t.prototype.removeToolbar = function() {
                if (this.infDiv) {
                    (0, a.removeElm)(this.infDiv), this.infDiv = null;
                    var t = this.tbl,
                        e = (0, a.tag)(t, "caption");
                    e.length > 0 && [].forEach.call(e, function(e) {
                        return t.removeChild(e) }) } }, t.prototype.removeExternalFlts = function() {
                if (this.isExternalFlt)
                    for (var t = this.externalFltTgtIds, e = t.length, i = 0; e > i; i++) {
                        var s = t[i],
                            n = (0, a.elm)(s);
                        n && (n.innerHTML = "") } }, t.prototype.isCustomOptions = function(t) {
                return this.hasCustomOptions && -1 !== this.customOptions.cols.indexOf(t) }, t.prototype.getCustomOptions = function(t) {
                if (!(0, c.isEmpty)(t) && this.isCustomOptions(t)) {
                    for (var e = this.customOptions, i = e.cols, s = [], n = [], r = i.indexOf(t), o = e.values[r], l = e.texts[r], a = e.sorts[r], h = 0, p = o.length; p > h; h++) n.push(o[h]), l[h] ? s.push(l[h]) : s.push(o[h]);
                    return a && (n.sort(), s.sort()), [n, s] } }, t.prototype.filter = function() {
                function t(t, e, i) {
                    if (this.highlightKeywords && e) { t = t.replace(b, ""), t = t.replace(y, ""), t = t.replace(_, ""), t = t.replace(C, "");
                        var s = t;
                        (f.test(t) || d.test(t) || g.test(t) || m.test(t) || v.test(t)) && (s = (0, a.getText)(i)), "" !== s && this.emitter.emit("highlight-keyword", this, i, s) } }

                function e(t, e, i) { t = (0, h.matchCase)(t, this.caseSensitive);
                    var s = void 0,
                        n = this.hasColDateType ? this.colDateType[i] : this.defaultDateType,
                        r = g.test(t),
                        a = f.test(t),
                        c = m.test(t),
                        T = d.test(t),
                        F = v.test(t),
                        P = y.test(t),
                        S = b.test(t),
                        R = _.test(t),
                        I = C.test(t),
                        O = w === t,
                        N = x === t,
                        L = E.test(t),
                        k = r && (0, p.isValidDate)(t.replace(g, ""), n),
                        D = a && (0, p.isValidDate)(t.replace(f, ""), n),
                        B = c && (0, p.isValidDate)(t.replace(m, ""), n),
                        A = T && (0, p.isValidDate)(t.replace(d, ""), n),
                        M = F && (0, p.isValidDate)(t.replace(v, ""), n),
                        H = P && (0, p.isValidDate)(t.replace(y, ""), n),
                        j = void 0,
                        U = void 0;
                    if ((0, p.isValidDate)(e, n)) j = (0, p.formatDate)(e, n), k ? (U = (0, p.formatDate)(t.replace(g, ""), n), s = U > j) : D ? (U = (0, p.formatDate)(t.replace(f, ""), n), s = U >= j) : A ? (U = (0, p.formatDate)(t.replace(d, ""), n), s = j >= U) : B ? (U = (0, p.formatDate)(t.replace(m, ""), n), s = j > U) : M ? (U = (0, p.formatDate)(t.replace(v, ""), n), s = j.toString() !== U.toString()) : H ? (U = (0, p.formatDate)(t.replace(y, ""), n), s = j.toString() === U.toString()) : b.test(t) ? s = (0, h.contains)(t.replace(b, ""), e, !1, this.caseSensitive) : (0, p.isValidDate)(t, n) ? (U = (0, p.formatDate)(t, n), s = j.toString() === U.toString()) : s = O ? (0, h.isEmpty)(e) : N ? !(0, h.isEmpty)(e) : (0, h.contains)(t, e, this.isExactMatch(i), this.caseSensitive);
                    else if (this.hasColNbFormat && this.colNbFormat[i] ? (o = (0, u.removeNbFormat)(e, this.colNbFormat[i]), l = this.colNbFormat[i]) : "," === this.thousandsSeparator && "." === this.decimalSeparator ? (o = (0, u.removeNbFormat)(e, "us"), l = "us") : (o = (0, u.removeNbFormat)(e, "eu"), l = "eu"), a) s = o <= (0, u.removeNbFormat)(t.replace(f, ""), l);
                    else if (T) s = o >= (0, u.removeNbFormat)(t.replace(d, ""), l);
                    else if (r) s = o < (0, u.removeNbFormat)(t.replace(g, ""), l);
                    else if (c) s = o > (0, u.removeNbFormat)(t.replace(m, ""), l);
                    else if (F) s = !(0, h.contains)(t.replace(v, ""), e, !1, this.caseSensitive);
                    else if (S) s = (0, h.contains)(t.replace(b, ""), e, !1, this.caseSensitive);
                    else if (P) s = (0, h.contains)(t.replace(y, ""), e, !0, this.caseSensitive);
                    else if (R) s = 0 === e.indexOf(t.replace(_, ""));
                    else if (I) {
                        var V = t.replace(C, "");
                        s = e.lastIndexOf(V, e.length - 1) === e.length - 1 - (V.length - 1) && e.lastIndexOf(V, e.length - 1) > -1 } else if (O) s = (0, h.isEmpty)(e);
                    else if (N) s = !(0, h.isEmpty)(e);
                    else if (L) try {
                        var z = t.replace(E, ""),
                            K = new RegExp(z);
                        s = K.test(e) } catch (W) { s = !1 } else o && this.hasColNbFormat && this.colNbFormat[i] && !this.singleSearchFlt ? (t = (0, u.removeNbFormat)(t, l), s = o === t || (0, h.contains)(t.toString(), o.toString(), this.isExactMatch(i), this.caseSensitive)) : s = (0, h.contains)(t, e, this.isExactMatch(i), this.caseSensitive);
                    return s }
                if (this.fltGrid && this._hasGrid) { this.onBeforeFilter && this.onBeforeFilter.call(null, this), this.emitter.emit("before-filtering", this);
                    var i = this.tbl.rows,
                        s = this.getRowsNb(!0),
                        n = 0;
                    this.validRowsIndex = [];
                    for (var r = this.getFiltersValue(), o = void 0, l = void 0, f = new RegExp(this.leOperator), d = new RegExp(this.geOperator), g = new RegExp(this.lwOperator), m = new RegExp(this.grOperator), v = new RegExp(this.dfOperator), b = new RegExp((0, h.rgxEsc)(this.lkOperator)), y = new RegExp(this.eqOperator), _ = new RegExp(this.stOperator), C = new RegExp(this.enOperator), w = this.emOperator, x = this.nmOperator, E = new RegExp((0, h.rgxEsc)(this.rgxOperator)), T = this.refRow; s > T; T++) { i[T].style.display = "";
                        var F = i[T].cells,
                            P = F.length;
                        if (P === this.nbCells) {
                            for (var S = [], R = !0, I = !1, O = 0; P > O; O++) {
                                var N = r[this.singleSearchFlt ? 0 : O];
                                if ("" !== N) {
                                    var L = (0, h.matchCase)(this.getCellData(F[O]), this.caseSensitive),
                                        k = N.toString().split(this.orOperator),
                                        D = k.length > 1,
                                        B = N.toString().split(this.anOperator),
                                        A = B.length > 1;
                                    if ((0, c.isArray)(N) || D || A) {
                                        var M = void 0,
                                            H = void 0,
                                            j = !1;
                                        H = (0, c.isArray)(N) ? N : D ? k : B;
                                        for (var U = 0, V = H.length; V > U && (M = (0, h.trim)(H[U]), j = e.call(this, M, L, O), t.call(this, M, j, F[O]), !(D && j || A && !j)) && (!(0, c.isArray)(N) || !j); U++);
                                        S[O] = j } else S[O] = e.call(this, (0, h.trim)(N), L, O), t.call(this, N, S[O], F[O]);
                                    S[O] || (R = !1), this.singleSearchFlt && S[O] && (I = !0), this.emitter.emit("cell-processed", this, O, F[O]) } }
                            this.singleSearchFlt && I && (R = !0), R ? this.validateRow(T, !0) : (this.validateRow(T, !1), n++), this.emitter.emit("row-processed", this, T, this.validRowsIndex.length, R) } }
                    this.nbHiddenRows = n, this.onAfterFilter && this.onAfterFilter.call(null, this), this.emitter.emit("after-filtering", this, r) } }, t.prototype.getColValues = function(t) {
                var e = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
                    i = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2],
                    s = arguments.length <= 3 || void 0 === arguments[3] ? [] : arguments[3];
                if (this.fltGrid) {
                    var n = this.tbl.rows,
                        r = this.getRowsNb(!0),
                        o = [];
                    e && o.push(this.getHeadersText()[t]);
                    for (var l = this.refRow; r > l; l++) {
                        var a = !1;
                        s.length > 0 && (a = -1 !== s.indexOf(l));
                        var h = n[l].cells,
                            c = h.length;
                        if (c === this.nbCells && !a)
                            for (var p = 0; c > p; p++)
                                if (p === t && "" === n[l].style.display) {
                                    var f = this.getCellData(h[p]),
                                        d = this.colNbFormat ? this.colNbFormat[t] : null,
                                        g = i ? (0, u.removeNbFormat)(f, d) : f;
                                    o.push(g) } }
                    return o } }, t.prototype.getFilterValue = function(t) {
                if (this.fltGrid) {
                    var e = "",
                        i = this.getFilterElement(t);
                    if (!i) return e;
                    var s = this.getFilterType(t);
                    return s !== R.MULTIPLE && s !== R.CHECKLIST ? e = i.value : s === R.MULTIPLE ? e = this.feature("dropdown").getValues(t) : s === R.CHECKLIST && (e = this.feature("checkList").getValues(t)), ((0, c.isArray)(e) && 0 === e.length || 1 === e.length && "" === e[0]) && (e = ""), e } }, t.prototype.getFiltersValue = function() {
                if (this.fltGrid) {
                    for (var t = [], e = 0, i = this.fltIds.length; i > e; e++) {
                        var s = this.getFilterValue(e);
                        (0, c.isArray)(s) ? t.push(s): t.push((0, h.trim)(s)) }
                    return t } }, t.prototype.getFilterId = function(t) {
                return this.fltGrid ? this.fltIds[t] : void 0 }, t.prototype.getFiltersByType = function(t, e) {
                if (this.fltGrid) {
                    for (var i = [], s = 0, n = this.fltIds.length; n > s; s++) {
                        var r = this.getFilterType(s);
                        if (r === t.toLowerCase()) {
                            var o = e ? s : this.fltIds[s];
                            i.push(o) } }
                    return i } }, t.prototype.getFilterElement = function(t) {
                var e = this.fltIds[t];
                return (0, a.elm)(e) }, t.prototype.getCellsNb = function() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? 0 : arguments[0],
                    e = this.tbl.rows[t];
                return e.cells.length }, t.prototype.getRowsNb = function(t) {
                var e = (0, c.isUndef)(this.refRow) ? 0 : this.refRow,
                    i = this.tbl.rows.length;
                return t && (e = 0), parseInt(i - e, 10) }, t.prototype.getCellData = function(t) {
                var e = t.cellIndex;
                return this.customCellData && -1 !== this.customCellDataCols.indexOf(e) ? this.customCellData.call(null, this, t, e) : (0, a.getText)(t) }, t.prototype.getTableData = function() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0],
                    e = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
                    i = this.tbl.rows,
                    s = this.getRowsNb(!0),
                    n = [];
                if (t) {
                    var r = this.getHeadersText(e);
                    n.push([this.getHeadersRowIndex(), r]) }
                for (var o = this.refRow; s > o; o++) {
                    for (var l = [o, []], a = i[o].cells, h = 0, c = a.length; c > h; h++)
                        if (!(e && this.hasExtension("colsVisibility") && this.extension("colsVisibility").isColHidden(h))) {
                            var p = this.getCellData(a[h]);
                            l[1].push(p) }
                    n.push(l) }
                return n }, t.prototype.getFilteredData = function() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0],
                    e = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1];
                if (!this.validRowsIndex) return [];
                var i = this.tbl.rows,
                    s = [];
                if (t) {
                    var n = this.getHeadersText(e);
                    s.push([this.getHeadersRowIndex(), n]) }
                for (var r = this.getValidRows(!0), o = 0; o < r.length; o++) {
                    for (var l = [this.validRowsIndex[o],
                            []
                        ], a = i[this.validRowsIndex[o]].cells, h = 0; h < a.length; h++)
                        if (!(e && this.hasExtension("colsVisibility") && this.extension("colsVisibility").isColHidden(h))) {
                            var c = this.getCellData(a[h]);
                            l[1].push(c) }
                    s.push(l) }
                return s }, t.prototype.getFilteredDataCol = function(t) {
                var e = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1];
                if ((0, c.isUndef)(t)) return [];
                var i = this.getFilteredData(),
                    s = [];
                e && s.push(this.getHeadersText()[t]);
                for (var n = 0, r = i.length; r > n; n++) {
                    var o = i[n],
                        l = o[1],
                        a = l[t];
                    s.push(a) }
                return s }, t.prototype.getRowDisplay = function(t) {
                return t.style.display }, t.prototype.validateRow = function(t, e) {
                var i = this.tbl.rows[t];
                if (i && "boolean" == typeof e) { this.hasVisibleRows && -1 !== this.visibleRows.indexOf(t) && (e = !0);
                    var s = e ? "" : R.NONE,
                        n = e ? "true" : "false";
                    i.style.display = s, this.paging && i.setAttribute("validRow", n), e && (-1 === this.validRowsIndex.indexOf(t) && this.validRowsIndex.push(t), this.onRowValidated && this.onRowValidated.call(null, this, t), this.emitter.emit("row-validated", this, t)) } }, t.prototype.validateAllRows = function() {
                if (this._hasGrid) { this.validRowsIndex = [];
                    for (var t = this.refRow; t < this.nbFilterableRows; t++) this.validateRow(t, !0) } }, t.prototype.setFilterValue = function(t) {
                var e = arguments.length <= 1 || void 0 === arguments[1] ? "" : arguments[1];
                if (this.fltGrid) {
                    var i = this.getFilterElement(t),
                        s = this.getFilterType(t);
                    if (s !== R.MULTIPLE && s !== R.CHECKLIST) this.loadFltOnDemand && !this.initialized && this.emitter.emit("build-select-filter", this, t, this.linkedFilters, this.isExternalFlt), i.value = e;
                    else if (s === R.MULTIPLE) {
                        var n = (0, c.isArray)(e) ? e : e.split(" " + this.orOperator + " ");
                        this.loadFltOnDemand && !this.initialized && this.emitter.emit("build-select-filter", this, t, this.linkedFilters, this.isExternalFlt), this.emitter.emit("select-options", this, t, n) } else if (s === R.CHECKLIST) {
                        var r = [];
                        this.loadFltOnDemand && !this.initialized && this.emitter.emit("build-checklist-filter", this, t, this.isExternalFlt), (0, c.isArray)(e) ? r = e : (e = (0, h.matchCase)(e, this.caseSensitive), r = e.split(" " + this.orOperator + " ")), this.emitter.emit("select-checklist-options", this, t, r) } } }, t.prototype.setColWidths = function(t) {
                function e() {
                    for (var e = this.nbCells, i = this.colWidths, s = (0, a.tag)(t, "col"), n = s.length > 0, r = n ? null : I.createDocumentFragment(), o = 0; e > o; o++) {
                        var l = void 0;
                        n ? l = s[o] : (l = (0, a.createElm)("col", ["id", this.id + "_col_" + o]), r.appendChild(l)), l.style.width = i[o] }
                    n || t.insertBefore(r, t.firstChild) }
                this.hasColWidths && (t = t || this.tbl, e.call(this)) }, t.prototype.enforceVisibility = function() {
                if (this.hasVisibleRows)
                    for (var t = this.getRowsNb(!0), e = 0, i = this.visibleRows.length; i > e; e++) {
                        var s = this.visibleRows[e];
                        t >= s && this.validateRow(s, !0) } }, t.prototype.clearFilters = function() {
                if (this.fltGrid) { this.emitter.emit("before-clearing-filters", this), this.onBeforeReset && this.onBeforeReset.call(null, this, this.getFiltersValue());
                    for (var t = 0, e = this.fltIds.length; e > t; t++) this.setFilterValue(t, "");
                    this.filter(), this.onAfterReset && this.onAfterReset.call(null, this), this.emitter.emit("after-clearing-filters", this) } }, t.prototype.clearActiveColumns = function() {
                for (var t = 0, e = this.getCellsNb(this.headersRow); e > t; t++)(0, a.removeClass)(this.getHeaderElement(t), this.activeColumnsCssClass) }, t.prototype.markActiveColumn = function(t) {
                var e = this.getHeaderElement(t);
                (0, a.hasClass)(e, this.activeColumnsCssClass) || (this.onBeforeActiveColumn && this.onBeforeActiveColumn.call(null, this, t), (0, a.addClass)(e, this.activeColumnsCssClass), this.onAfterActiveColumn && this.onAfterActiveColumn.call(null, this, t)) }, t.prototype.getActiveFilterId = function() {
                return this.activeFilterId }, t.prototype.setActiveFilterId = function(t) { this.activeFilterId = t }, t.prototype.getColumnIndexFromFilterId = function() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0],
                    e = t.split("_")[0];
                return e = e.split(this.prfxFlt)[1], parseInt(e, 10) }, t.prototype.activateFilter = function(t) {
                (0, c.isUndef)(t) || this.setActiveFilterId(this.getFilterId(t)) }, t.prototype.linkFilters = function() {
                if (this.linkedFilters && this.activeFilterId) {
                    var t = this.getFiltersByType(R.SELECT, !0),
                        e = this.getFiltersByType(R.MULTIPLE, !0),
                        i = this.getFiltersByType(R.CHECKLIST, !0),
                        s = t.concat(e);
                    s = s.concat(i);
                    for (var n = this.getColumnIndexFromFilterId(this.activeFilterId), r = 0, o = s.length; o > r; r++) {
                        var l = (0, a.elm)(this.fltIds[s[r]]),
                            h = this.getFilterValue(s[r]);
                        if (n !== s[r] || this.paging && -1 !== t.indexOf(s[r]) && n === s[r] || !this.paging && (-1 !== i.indexOf(s[r]) || -1 !== e.indexOf(s[r])) || h === this.displayAllText) {
                            if (this.loadFltOnDemand) {
                                var c = (0, a.createOpt)(this.displayAllText, "");
                                l.innerHTML = "", l.appendChild(c) } - 1 !== i.indexOf(s[r]) ? this.emitter.emit("build-checklist-filter", this, s[r]) : this.emitter.emit("build-select-filter", this, s[r], !0), this.setFilterValue(s[r], h) } } } }, t.prototype.isExactMatch = function(t) {
                var e = this.getFilterType(t);
                return this.exactMatchByCol[t] || this.exactMatch || e !== R.INPUT }, t.prototype.isImported = function(t, e) {
                for (var i = !1, s = e ? e : "script", n = "script" === s ? "src" : "href", r = (0, a.tag)(I, s), o = 0, l = r.length; l > o; o++)
                    if (void 0 !== r[o][n] && r[o][n].match(t)) { i = !0;
                        break }
                return i }, t.prototype["import"] = function(t, e, i, s) {
                var n = s ? s : "script",
                    r = this.isImported(e, n);
                if (!r) {
                    var o = this,
                        l = !1,
                        h = void 0,
                        c = (0, a.tag)(I, "head")[0];
                    h = "link" === n.toLowerCase() ? (0, a.createElm)("link", ["id", t], ["type", "text/css"], ["rel", "stylesheet"], ["href", e]) : (0, a.createElm)("script", ["id", t], ["type", "text/javascript"], ["src", e]), h.onload = h.onreadystatechange = function() {
                        l || this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (l = !0, "function" == typeof i && i.call(null, o));
                    }, h.onerror = function() {
                        throw new Error("TableFilter could not load: " + e) }, c.appendChild(h)
                }
            }, t.prototype.hasGrid = function() {
                return this._hasGrid }, t.prototype.getFiltersId = function() {
                return this.fltIds || [] }, t.prototype.getValidRows = function(t) {
                if (!t) return this.validRowsIndex;
                var e = this.getRowsNb(!0);
                this.validRowsIndex = [];
                for (var i = this.refRow; e > i; i++) {
                    var s = this.tbl.rows[i];
                    this.paging ? "true" !== s.getAttribute("validRow") && null !== s.getAttribute("validRow") || this.validRowsIndex.push(s.rowIndex) : this.getRowDisplay(s) !== R.NONE && this.validRowsIndex.push(s.rowIndex) }
                return this.validRowsIndex }, t.prototype.getFiltersRowIndex = function() {
                return this.filtersRowIndex }, t.prototype.getHeadersRowIndex = function() {
                return this.headersRow }, t.prototype.getStartRowIndex = function() {
                return this.refRow }, t.prototype.getLastRowIndex = function() {
                var t = this.getRowsNb(!0);
                return t - 1 }, t.prototype.getHeaderElement = function(t) {
                for (var e = this.gridLayout ? this.Mod.gridLayout.headTbl : this.tbl, i = (0, a.tag)(e, "thead"), s = this.headersRow, n = void 0, r = 0; r < this.nbCells; r++)
                    if (r === t) { 0 === i.length && (n = e.rows[s].cells[r]), 1 === i.length && (n = i[0].rows[s].cells[r]);
                        break }
                return n }, t.prototype.getHeadersText = function() {
                for (var t = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0], e = [], i = 0; i < this.nbCells; i++)
                    if (!(t && this.hasExtension("colsVisibility") && this.extension("colsVisibility").isColHidden(i))) {
                        var s = this.getHeaderElement(i),
                            n = (0, a.getFirstTextNode)(s);
                        e.push(n) }
                return e }, t.prototype.getFilterType = function(t) {
                var e = this.cfg["col_" + t];
                return e ? e.toLowerCase() : R.INPUT }, t.prototype.getFilterableRowsNb = function() {
                return this.getRowsNb(!1) }, t.prototype.getValidRowsNb = function() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0];
                return this.getValidRows(t).length }, t.prototype.config = function() {
                return this.cfg }, t
        }()
    }, function(t, e, i) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var s = i(2);
        e["default"] = { add: function(t, e, i, s) { t.addEventListener ? t.addEventListener(e, i, s) : t.attachEvent ? t.attachEvent("on" + e, i) : t["on" + e] = i }, remove: function(t, e, i, s) { t.detachEvent ? t.detachEvent("on" + e, i) : t.removeEventListener ? t.removeEventListener(e, i, s) : t["on" + e] = null }, stop: function(t) { t || (t = s.root.event), t.stopPropagation ? t.stopPropagation() : t.cancelBubble = !0 }, cancel: function(t) { t || (t = s.root.event), t.preventDefault ? t.preventDefault() : t.returnValue = !1 }, target: function(t) {
                return t && t.target || s.root.event && s.root.event.srcElement }, keyCode: function(t) {
                return t.charCode ? t.charCode : t.keyCode ? t.keyCode : t.which ? t.which : 0 } } }, function(t, e) {
        (function(t) { "use strict";
            Object.defineProperty(e, "__esModule", { value: !0 });
            var i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t };
            e.root = "object" === ("undefined" == typeof self ? "undefined" : i(self)) && self.self === self && self || "object" === ("undefined" == typeof t ? "undefined" : i(t)) && t.global === t && t || void 0 }).call(e, function() {
            return this }()) }, function(t, e, i) { "use strict";

        function s() {
            return l.documentElement.classList }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.tag = e.elm = e.createCheckItem = e.createOpt = e.removeClass = e.addClass = e.hasClass = e.createText = e.removeElm = e.createElm = e.getFirstTextNode = e.getText = void 0;
        var n = i(2),
            r = i(4),
            o = i(5),
            l = n.root.document,
            a = (e.getText = function(t) {
                return (0, r.isUndef)(t.textContent) ? (0, o.trim)(t.innerText) : (0, o.trim)(t.textContent) }, e.getFirstTextNode = function(t) {
                for (var e = 0; e < t.childNodes.length; e++) {
                    var i = t.childNodes[e];
                    if (3 === i.nodeType) return i.data } }, e.createElm = function() {
                for (var t = arguments.length, e = Array(t), i = 0; t > i; i++) e[i] = arguments[i];
                var s = e[0];
                if (!(0, r.isString)(s)) return null;
                for (var n = l.createElement(s), o = 0; o < e.length; o++) {
                    var a = e[o];
                    (0, r.isArray)(a) && 2 === a.length && n.setAttribute(a[0], a[1]) }
                return n }),
            h = (e.removeElm = function(t) {
                return t.parentNode.removeChild(t) }, e.createText = function(t) {
                return l.createTextNode(t) }),
            c = e.hasClass = function(t, e) {
                return (0, r.isUndef)(t) ? !1 : s() ? t.classList.contains(e) : t.className.match(new RegExp("(\\s|^)" + e + "(\\s|$)")) };
        e.addClass = function(t, e) {
            return (0, r.isUndef)(t) ? void 0 : s() ? void t.classList.add(e) : void("" === t.className ? t.className = e : c(t, e) || (t.className += " " + e)) }, e.removeClass = function(t, e) {
            if (!(0, r.isUndef)(t)) {
                if (s()) return void t.classList.remove(e);
                var i = new RegExp("(\\s|^)" + e + "(\\s|$)", "g");
                t.className = t.className.replace(i, "") } }, e.createOpt = function(t, e, i) {
            var s = !!i,
                n = s ? a("option", ["value", e], ["selected", "true"]) : a("option", ["value", e]);
            return n.appendChild(h(t)), n }, e.createCheckItem = function(t, e, i) {
            var s = a("li"),
                n = a("label", ["for", t]),
                r = a("input", ["id", t], ["name", t], ["type", "checkbox"], ["value", e]);
            return n.appendChild(r), n.appendChild(h(i)), s.appendChild(n), s.label = n, s.check = r, s }, e.elm = function(t) {
            return l.getElementById(t) }, e.tag = function(t, e) {
            return t.getElementsByTagName(e) } }, function(t, e) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = void 0,
            s = (e.isObj = function(t) {
                return "[object Object]" === Object.prototype.toString.call(t) }, e.isFn = function(t) {
                return "[object Function]" === Object.prototype.toString.call(t) }, e.isArray = function(t) {
                return "[object Array]" === Object.prototype.toString.call(t) }, e.isString = function(t) {
                return "[object String]" === Object.prototype.toString.call(t) }, e.isNumber = function(t) {
                return "[object Number]" === Object.prototype.toString.call(t) }, e.isUndef = function(t) {
                return t === i }),
            n = e.isNull = function(t) {
                return null === t };
        e.isEmpty = function(t) {
            return s(t) || n(t) || 0 === t.length } }, function(t, e) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        var i = e.trim = function(t) {
                return t.trim ? t.trim() : t.replace(/^\s*|\s*$/g, "") },
            s = (e.isEmpty = function(t) {
                return "" === i(t) }, e.rgxEsc = function(t) {
                var e = /[-\/\\^$*+?.()|[\]{}]/g,
                    i = "\\$&";
                return String(t).replace(e, i) });
        e.matchCase = function(t) {
            var e = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1];
            return e ? t : t.toLowerCase() }, e.contains = function(t, e) {
            var i = arguments.length <= 2 || void 0 === arguments[2] ? !1 : arguments[2],
                n = arguments.length <= 3 || void 0 === arguments[3] ? !1 : arguments[3],
                r = void 0,
                o = n ? "g" : "gi";
            return r = i ? new RegExp("(^\\s*)" + s(t) + "(\\s*$)", o) : new RegExp(s(t), o), r.test(e) } }, function(t, e) { "use strict";

        function i(t) {
            if (void 0 === t) return 0;
            if (t.length > 2) return t;
            var e = void 0;
            return 99 >= t && t > 50 && (e = "19" + t), (50 > t || "00" === t) && (e = "20" + t), e }

        function s(t) {
            if (void 0 === t) return 0;
            for (var e = void 0, i = ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december", "jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"], s = 0; s < i.length; s++) {
                var n = i[s];
                if (t.toLowerCase() === n) { e = s + 1;
                    break } }
            return (e > 11 || 23 > e) && (e -= 12), 1 > e || e > 12 ? 0 : e }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var n = (e.isValidDate = function(t, e) {
            if (e || (e = "DMY"), e = e.toUpperCase(), 3 !== e.length && "DDMMMYYYY" === e) {
                var i = n(t, e);
                t = i.getDate() + "/" + (i.getMonth() + 1) + "/" + i.getFullYear(), e = "DMY" } - 1 !== e.indexOf("M") && -1 !== e.indexOf("D") && -1 !== e.indexOf("Y") || (e = "DMY");
            var s = void 0,
                r = void 0;
            if ("Y" === e.substring(0, 1) ? (s = /^\d{2}(\-|\/|\.)\d{1,2}\1\d{1,2}$/, r = /^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$/) : "Y" === e.substring(1, 2) ? (s = /^\d{1,2}(\-|\/|\.)\d{2}\1\d{1,2}$/, r = /^\d{1,2}(\-|\/|\.)\d{4}\1\d{1,2}$/) : (s = /^\d{1,2}(\-|\/|\.)\d{1,2}\1\d{2}$/, r = /^\d{1,2}(\-|\/|\.)\d{1,2}\1\d{4}$/), s.test(t) === !1 && r.test(t) === !1) return !1;
            var o = t.split(RegExp.$1),
                l = void 0,
                a = void 0,
                h = void 0;
            l = "M" === e.substring(0, 1) ? o[0] : "M" === e.substring(1, 2) ? o[1] : o[2], a = "D" === e.substring(0, 1) ? o[0] : "D" === e.substring(1, 2) ? o[1] : o[2], h = "Y" === e.substring(0, 1) ? o[0] : "Y" === e.substring(1, 2) ? o[1] : o[2], parseInt(h, 10) <= 50 && (h = (parseInt(h, 10) + 2e3).toString()), parseInt(h, 10) <= 99 && (h = (parseInt(h, 10) + 1900).toString());
            var c = new Date(parseInt(h, 10), parseInt(l, 10) - 1, parseInt(a, 10), 0, 0, 0, 0);
            return parseInt(a, 10) !== c.getDate() ? !1 : parseInt(l, 10) - 1 === c.getMonth() }, e.formatDate = function(t, e) {
            if (e || (e = "DMY"), !t || "" === t) return new Date(1001, 0, 1);
            var n = void 0,
                r = void 0;
            switch (e.toUpperCase()) {
                case "DDMMMYYYY":
                    r = t.replace(/[- \/.]/g, " ").split(" "), n = new Date(i(r[2]), s(r[1]) - 1, r[0]);
                    break;
                case "DMY":
                    r = t.replace(/^(0?[1-9]|[12][0-9]|3[01])([- \/.])(0?[1-9]|1[012])([- \/.])((\d\d)?\d\d)$/, "$1 $3 $5").split(" "), n = new Date(i(r[2]), r[1] - 1, r[0]);
                    break;
                case "MDY":
                    r = t.replace(/^(0?[1-9]|1[012])([- \/.])(0?[1-9]|[12][0-9]|3[01])([- \/.])((\d\d)?\d\d)$/, "$1 $3 $5").split(" "), n = new Date(i(r[2]), r[0] - 1, r[1]);
                    break;
                case "YMD":
                    r = t.replace(/^((\d\d)?\d\d)([- \/.])(0?[1-9]|1[012])([- \/.])(0?[1-9]|[12][0-9]|3[01])$/, "$1 $4 $6").split(" "), n = new Date(i(r[0]), r[1] - 1, r[2]);
                    break;
                default:
                    r = t.replace(/^(0?[1-9]|[12][0-9]|3[01])([- \/.])(0?[1-9]|1[012])([- \/.])((\d\d)?\d\d)$/, "$1 $3 $5").split(" "), n = new Date(i(r[2]), r[1] - 1, r[0]) }
            return n }) }, function(t, e) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        e.removeNbFormat = function(t, e) {
            if (t) { e || (e = "us");
                var i = t;
                return i = "us" === e.toLowerCase() ? +i.replace(/[^\d\.-]/g, "") : +i.replace(/[^\d\,-]/g, "").replace(",", ".") } } }, function(t, e) { "use strict";

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(e, "__esModule", { value: !0 });
        e.Emitter = function() {
            function t() { i(this, t), this.events = {} }
            return t.prototype.on = function(t, e) {
                var i = this;
                t.forEach(function(t) { i.events[t] = i.events[t] || [], i.events[t].push(e) }) }, t.prototype.off = function(t, e) {
                var i = this;
                t.forEach(function(t) { t in i.events && i.events[t].splice(i.events[t].indexOf(e), 1) }) }, t.prototype.emit = function(t) {
                if (t in this.events)
                    for (var e = 0; e < this.events[t].length; e++) this.events[t][e].apply(this, [].slice.call(arguments, 1)) }, t }() }, function(t, e, i) { "use strict";

        function s(t) {
            return t && t.__esModule ? t : { "default": t } }

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function r(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e }

        function o(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.GridLayout = void 0;
        var l = i(10),
            a = i(3),
            h = i(4),
            c = i(1),
            p = s(c),
            u = i(5),
            f = i(11);
        e.GridLayout = function(t) {
            function e(i) { n(this, e);
                var s = r(this, t.call(this, i, "gridLayout")),
                    o = s.config;
                return s.gridWidth = o.grid_width || null, s.gridHeight = o.grid_height || null, s.gridMainContCssClass = o.grid_cont_css_class || "grd_Cont", s.gridContCssClass = o.grid_tbl_cont_css_class || "grd_tblCont", s.gridHeadContCssClass = o.grid_tblHead_cont_css_class || "grd_headTblCont", s.gridInfDivCssClass = o.grid_inf_grid_css_class || "grd_inf", s.gridHeadRowIndex = o.grid_headers_row_index || 0, s.gridHeadRows = o.grid_headers_rows || [0], s.gridEnableFilters = (0, h.isUndef)(o.grid_enable_default_filters) ? !0 : o.grid_enable_default_filters, s.noHeaders = Boolean(o.grid_no_headers), s.gridDefaultColWidth = o.grid_default_col_width || "100px", s.gridColElms = [], s.prfxMainTblCont = "gridCont_", s.prfxTblCont = "tblCont_", s.prfxHeadTblCont = "tblHeadCont_", s.prfxHeadTbl = "tblHead_", s.prfxGridFltTd = "_td_", s.prfxGridTh = "tblHeadTh_", s.sourceTblHtml = i.tbl.outerHTML, i.fltGrid = s.gridEnableFilters, s }
            return o(e, t), e.prototype.init = function() {
                var t = this,
                    e = this.tf,
                    i = this.config,
                    s = e.tbl;
                if (!this.initialized) {
                    if (e.refRow = (0, h.isNull)(e.startRow) ? 0 : e.startRow, e.headersRow = 0, e.filtersRowIndex = 1, e.isExternalFlt = !0, !e.hasColWidths) { e.colWidths = [];
                        for (var n = 0; n < e.nbCells; n++) {
                            var r = void 0,
                                o = s.rows[this.gridHeadRowIndex].cells[n];
                            r = "" !== o.width ? o.width : "" !== o.style.width ? parseInt(o.style.width, 10) : this.gridDefaultColWidth, e.colWidths[n] = r }
                        e.hasColWidths = !0 }
                    e.setColWidths();
                    var l = void 0;
                    l = "" !== s.width ? s.width : "" !== s.style.width ? parseInt(s.style.width, 10) : s.clientWidth, this.tblMainCont = (0, a.createElm)("div", ["id", this.prfxMainTblCont + e.id]), this.tblMainCont.className = this.gridMainContCssClass, this.gridWidth && (this.tblMainCont.style.width = this.gridWidth), s.parentNode.insertBefore(this.tblMainCont, s), this.tblCont = (0, a.createElm)("div", ["id", this.prfxTblCont + e.id]), this.tblCont.className = this.gridContCssClass, this.gridWidth && (-1 !== this.gridWidth.indexOf("%") ? this.tblCont.style.width = "100%" : this.tblCont.style.width = this.gridWidth), this.gridHeight && (this.tblCont.style.height = this.gridHeight), s.parentNode.insertBefore(this.tblCont, s);
                    var c = (0, a.removeElm)(s);
                    this.tblCont.appendChild(c), "" === s.style.width && (s.style.width = ((0, u.contains)("%", l) ? s.clientWidth : l) + "px");
                    var d = (0, a.removeElm)(this.tblCont);
                    this.tblMainCont.appendChild(d), this.headTblCont = (0, a.createElm)("div", ["id", this.prfxHeadTblCont + e.id]), this.headTblCont.className = this.gridHeadContCssClass, this.gridWidth && (-1 !== this.gridWidth.indexOf("%") ? this.headTblCont.style.width = "100%" : this.headTblCont.style.width = this.gridWidth), this.headTbl = (0, a.createElm)("table", ["id", this.prfxHeadTbl + e.id]);
                    for (var g = (0, a.createElm)("tHead"), m = s.rows[this.gridHeadRowIndex], v = [], b = 0; b < e.nbCells; b++) {
                        var y = m.cells[b],
                            _ = y.getAttribute("id");
                        _ && "" !== _ || (_ = this.prfxGridTh + b + "_" + e.id, y.setAttribute("id", _)), v.push(_) }
                    var C = (0, a.createElm)("tr");
                    if (this.gridEnableFilters && e.fltGrid) { e.externalFltTgtIds = [];
                        for (var w = 0; w < e.nbCells; w++) {
                            var x = e.prfxFlt + w + this.prfxGridFltTd + e.id,
                                E = (0, a.createElm)(e.fltCellTag, ["id", x]);
                            C.appendChild(E), e.externalFltTgtIds[w] = x } }
                    if (this.noHeaders) g.appendChild((0, a.createElm)("tr"));
                    else
                        for (var T = 0; T < this.gridHeadRows.length; T++) {
                            var F = s.rows[this.gridHeadRows[0]];
                            g.appendChild(F) }
                    this.headTbl.appendChild(g), 0 === e.filtersRowIndex ? g.insertBefore(C, m) : g.appendChild(C), this.headTblCont.appendChild(this.headTbl), this.tblCont.parentNode.insertBefore(this.headTblCont, this.tblCont);
                    var P = (0, a.tag)(s, "thead");
                    P.length > 0 && s.removeChild(P[0]), this.headTbl.style.tableLayout = "fixed", s.style.tableLayout = "fixed", this.headTbl.cellPadding = s.cellPadding, this.headTbl.cellSpacing = s.cellSpacing, e.setColWidths(this.headTbl), s.style.width = "", this.headTbl.style.width = s.clientWidth + "px", p["default"].add(this.tblCont, "scroll", function(e) {
                        var i = p["default"].target(e),
                            s = i.scrollLeft;
                        t.headTblCont.scrollLeft = s });
                    var S = (i.extensions || []).filter(function(t) {
                        return "sort" === t.name });
                    1 === S.length && (S[0].async_sort = !0, S[0].trigger_ids = v), this.tblHasColTag = (0, a.tag)(s, "col").length > 0;
                    var R = function() {
                        for (var t = e.nbCells - 1; t >= 0; t--) {
                            var i = (0, a.createElm)("col", ["id", e.id + "_col_" + t]);
                            s.insertBefore(i, s.firstChild), i.style.width = e.colWidths[t], this.gridColElms[t] = i }
                        this.tblHasColTag = !0 };
                    if (this.tblHasColTag)
                        for (var I = (0, a.tag)(s, "col"), O = 0; O < e.nbCells; O++) I[O].setAttribute("id", e.id + "_col_" + O), I[O].style.width = e.colWidths[O], this.gridColElms.push(I[O]);
                    else R.call(this);
                    var N = (0, h.isFn)(i.on_after_col_resized) ? i.on_after_col_resized : null;
                    i.on_after_col_resized = function(t, e) {
                        if (e) {
                            var i = t.crWColsRow.cells[e].style.width,
                                n = t.gridColElms[e];
                            n.style.width = i;
                            var r = t.crWColsRow.cells[e].clientWidth,
                                o = t.crWRowDataTbl.cells[e].clientWidth;
                            r !== o && (t.headTbl.style.width = s.clientWidth + "px"), N && N.call(null, t, e) } }, e.popupFilters && (C.style.display = f.NONE), s.clientWidth !== this.headTbl.clientWidth && (s.style.width = this.headTbl.clientWidth + "px"), this.initialized = !0 } }, e.prototype.destroy = function() {
                var t = this.tf,
                    e = t.tbl;
                if (this.initialized) {
                    var i = (0, a.removeElm)(e);
                    this.tblMainCont.parentNode.insertBefore(i, this.tblMainCont), (0, a.removeElm)(this.tblMainCont), this.tblMainCont = null, this.headTblCont = null, this.headTbl = null, this.tblCont = null, e.outerHTML = this.sourceTblHtml, this.tf.tbl = (0, a.elm)(t.id), this.initialized = !1 } }, e }(l.Feature) }, function(t, e) { "use strict";

        function i(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(e, "__esModule", { value: !0 });
        var s = "Not implemented.";
        e.Feature = function() {
            function t(e, s) { i(this, t), this.tf = e, this.feature = s, this.enabled = e[s], this.config = e.config(), this.emitter = e.emitter, this.initialized = !1 }
            return t.prototype.init = function() {
                throw new Error(s) }, t.prototype.reset = function() { this.enable(), this.init() }, t.prototype.destroy = function() {
                throw new Error(s) }, t.prototype.enable = function() { this.enabled = !0 }, t.prototype.disable = function() { this.enabled = !1 }, t.prototype.isEnabled = function() {
                return this.enabled }, t }() }, function(t, e) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        e.INPUT = "input", e.SELECT = "select", e.MULTIPLE = "multiple", e.CHECKLIST = "checklist", e.NONE = "none", e.ENTER_KEY = 13, e.TAB_KEY = 9, e.ESC_KEY = 27, e.UP_ARROW_KEY = 38, e.DOWN_ARROW_KEY = 40, e.HEADER_TAG = "TH", e.CELL_TAG = "TD", e.AUTO_FILTER_DELAY = 750 }, function(t, e, i) { "use strict";

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function n(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.Loader = void 0;
        var o = i(10),
            l = i(3),
            a = i(4),
            h = i(2),
            c = i(11);
        e.Loader = function(t) {
            function e(i) { s(this, e);
                var r = n(this, t.call(this, i, "loader")),
                    o = r.config;
                return r.loaderTgtId = o.loader_target_id || null, r.loaderDiv = null, r.loaderText = o.loader_text || "Loading...", r.loaderHtml = o.loader_html || null, r.loaderCssClass = o.loader_css_class || "loader", r.loaderCloseDelay = 250, r.onShowLoader = (0, a.isFn)(o.on_show_loader) ? o.on_show_loader : null, r.onHideLoader = (0, a.isFn)(o.on_hide_loader) ? o.on_hide_loader : null, r.prfxLoader = "load_", r }
            return r(e, t), e.prototype.init = function() {
                var t = this;
                if (!this.initialized) {
                    var e = this.tf,
                        i = this.emitter,
                        s = (0, l.createElm)("div", ["id", this.prfxLoader + e.id]);
                    s.className = this.loaderCssClass;
                    var n = this.loaderTgtId ? (0, l.elm)(this.loaderTgtId) : e.tbl.parentNode;
                    this.loaderTgtId ? n.appendChild(s) : n.insertBefore(s, e.tbl), this.loaderDiv = s, this.loaderHtml ? this.loaderDiv.innerHTML = this.loaderHtml : this.loaderDiv.appendChild((0, l.createText)(this.loaderText)), this.show(c.NONE), i.on(["before-filtering", "before-populating-filter", "before-page-change", "before-clearing-filters", "before-page-length-change", "before-reset-page", "before-reset-page-length", "before-loading-extensions", "before-loading-themes"], function() {
                        return t.show("") }), i.on(["after-filtering", "after-populating-filter", "after-page-change", "after-clearing-filters", "after-page-length-change", "after-reset-page", "after-reset-page-length", "after-loading-extensions", "after-loading-themes"], function() {
                        return t.show(c.NONE) }), this.initialized = !0 } }, e.prototype.show = function(t) {
                var e = this;
                if (this.isEnabled()) {
                    var i = function() { e.loaderDiv && (e.onShowLoader && t !== c.NONE && e.onShowLoader.call(null, e), e.loaderDiv.style.display = t, e.onHideLoader && t === c.NONE && e.onHideLoader.call(null, e)) },
                        s = t === c.NONE ? this.loaderCloseDelay : 1;
                    h.root.setTimeout(i, s) } }, e.prototype.destroy = function() {
                var t = this;
                if (this.initialized) {
                    var e = this.emitter;
                    (0, l.removeElm)(this.loaderDiv), this.loaderDiv = null, e.off(["before-filtering", "before-populating-filter", "before-page-change", "before-clearing-filters", "before-page-length-change", "before-reset-page", "before-reset-page-length", "before-loading-extensions", "before-loading-themes"], function() {
                        return t.show("") }), e.off(["after-filtering", "after-populating-filter", "after-page-change", "after-clearing-filters", "after-page-length-change", "after-reset-page", "after-reset-page-length", "after-loading-extensions", "after-loading-themes"], function() {
                        return t.show(c.NONE) }), this.initialized = !1 } }, e }(o.Feature) }, function(t, e, i) { "use strict";

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.HighlightKeyword = void 0;
        var n = i(3),
            r = i(4);
        e.HighlightKeyword = function() {
            function t(e) { s(this, t);
                var i = e.config();
                this.highlightCssClass = i.highlight_css_class || "keyword", this.tf = e, this.emitter = e.emitter }
            return t.prototype.init = function() {
                var t = this;
                this.emitter.on(["before-filtering", "destroy"], function() {
                    return t.unhighlightAll() }), this.emitter.on(["highlight-keyword"], function(e, i, s) {
                    return t.highlight(i, s, t.highlightCssClass) }) }, t.prototype.highlight = function(t, e, i) {
                if (t.hasChildNodes)
                    for (var s = t.childNodes, r = 0; r < s.length; r++) this.highlight(s[r], e, i);
                if (3 === t.nodeType) {
                    var o = t.nodeValue.toLowerCase(),
                        l = e.toLowerCase();
                    if (-1 !== o.indexOf(l)) {
                        var a = t.parentNode;
                        if (a && a.className !== i) {
                            var h = t.nodeValue,
                                c = o.indexOf(l),
                                p = (0, n.createText)(h.substr(0, c)),
                                u = h.substr(c, e.length),
                                f = (0, n.createText)(h.substr(c + e.length)),
                                d = (0, n.createText)(u),
                                g = (0, n.createElm)("span");
                            g.className = i, g.appendChild(d), a.insertBefore(p, t), a.insertBefore(g, t), a.insertBefore(f, t), a.removeChild(t) } } } }, t.prototype.unhighlight = function(t, e) {
                for (var i = this.tf.tbl.querySelectorAll("." + e), s = 0; s < i.length; s++) {
                    var r = i[s],
                        o = (0, n.getText)(r),
                        l = o.toLowerCase(),
                        a = t.toLowerCase(); - 1 !== l.indexOf(a) && r.parentNode.replaceChild((0, n.createText)(o), r) } }, t.prototype.unhighlightAll = function() {
                var t = this;
                this.tf.highlightKeywords && this.tf.getFiltersValue().forEach(function(e) {
                    (0, r.isArray)(e) ? e.forEach(function(e) {
                        return t.unhighlight(e, t.highlightCssClass) }): t.unhighlight(e, t.highlightCssClass) }) }, t.prototype.destroy = function() {
                var t = this;
                this.emitter.off(["before-filtering", "destroy"], function() {
                    return t.unhighlightAll() }), this.emitter.off(["highlight-keyword"], function(e, i, s) {
                    return t.highlight(i, s, t.highlightCssClass) }) }, t }() }, function(t, e, i) { "use strict";

        function s(t) {
            return t && t.__esModule ? t : { "default": t } }

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function r(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e }

        function o(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.PopupFilter = void 0;
        var l = i(10),
            a = i(4),
            h = i(3),
            c = i(1),
            p = s(c),
            u = i(11);
        e.PopupFilter = function(t) {
            function e(i) { n(this, e);
                var s = r(this, t.call(this, i, "popupFilters")),
                    o = s.config;
                return i.isExternalFlt = !0, i.externalFltTgtIds = [], s.popUpImgFlt = o.popup_filters_image || i.themesPath + "icn_filter.gif", s.popUpImgFltActive = o.popup_filters_image_active || i.themesPath + "icn_filterActive.gif", s.popUpImgFltHtml = o.popup_filters_image_html || '<img src="' + s.popUpImgFlt + '" alt="Column filter" />', s.popUpDivCssClass = o.popup_div_css_class || "popUpFilter", s.onBeforePopUpOpen = (0, a.isFn)(o.on_before_popup_filter_open) ? o.on_before_popup_filter_open : null, s.onAfterPopUpOpen = (0, a.isFn)(o.on_after_popup_filter_open) ? o.on_after_popup_filter_open : null, s.onBeforePopUpClose = (0, a.isFn)(o.on_before_popup_filter_close) ? o.on_before_popup_filter_close : null, s.onAfterPopUpClose = (0, a.isFn)(o.on_after_popup_filter_close) ? o.on_after_popup_filter_close : null, s.popUpFltSpans = [], s.popUpFltImgs = [], s.popUpFltElms = s.popUpFltElmCache || [], s.popUpFltAdjustToContainer = !0, s.prfxPopUpSpan = "popUpSpan_", s.prfxPopUpDiv = "popUpDiv_", s }
            return o(e, t), e.prototype.onClick = function(t) {
                var e = p["default"].target(t).parentNode,
                    i = parseInt(e.getAttribute("ci"), 10);
                if (this.closeAll(i), this.toggle(i), this.popUpFltAdjustToContainer) {
                    var s = this.popUpFltElms[i],
                        n = this.tf.getHeaderElement(i),
                        r = .95 * n.clientWidth;
                    s.style.width = parseInt(r, 10) + "px" }
                p["default"].cancel(t), p["default"].stop(t) }, e.prototype.init = function() {
                var t = this;
                if (!this.initialized) {
                    var e = this.tf;
                    e.headersRow <= 1 && (e.headersRow = 0);
                    for (var i = 0; i < e.nbCells; i++)
                        if (e.getFilterType(i) !== u.NONE) {
                            var s = (0, h.createElm)("span", ["id", this.prfxPopUpSpan + e.id + "_" + i], ["ci", i]);
                            s.innerHTML = this.popUpImgFltHtml;
                            var n = e.getHeaderElement(i);
                            n.appendChild(s), p["default"].add(s, "click", function(e) { t.onClick(e) }), this.popUpFltSpans[i] = s, this.popUpFltImgs[i] = s.firstChild }
                    this.emitter.on(["before-filtering"], function() {
                        return t.buildIcons() }), this.emitter.on(["after-filtering"], function() {
                        return t.closeAll() }), this.emitter.on(["cell-processed"], function(e, i) {
                        return t.buildIcon(i, !0) }), this.emitter.on(["filters-row-inserted"], function() {
                        return t.tf.headersRow++ }), this.emitter.on(["before-filter-init"], function(e, i) {
                        return t.build(i) }), this.initialized = !0 } }, e.prototype.reset = function() { this.enable(), this.init(), this.buildAll() }, e.prototype.buildAll = function() {
                for (var t = 0; t < this.popUpFltElmCache.length; t++) this.build(t, this.popUpFltElmCache[t]) }, e.prototype.build = function(t, e) {
                var i = this.tf,
                    s = e ? e : (0, h.createElm)("div", ["id", this.prfxPopUpDiv + i.id + "_" + t]);
                s.className = this.popUpDivCssClass, i.externalFltTgtIds.push(s.id);
                var n = i.getHeaderElement(t);
                n.insertBefore(s, n.firstChild), p["default"].add(s, "click", function(t) {
                    return p["default"].stop(t) }), this.popUpFltElms[t] = s }, e.prototype.toggle = function(t) {
                var e = this.tf,
                    i = this.popUpFltElms[t];
                if (i.style.display === u.NONE || "" === i.style.display) {
                    if (this.onBeforePopUpOpen && this.onBeforePopUpOpen.call(null, this, this.popUpFltElms[t], t), i.style.display = "block", e.getFilterType(t) === u.INPUT) {
                        var s = e.getFilterElement(t);
                        s && s.focus() }
                    this.onAfterPopUpOpen && this.onAfterPopUpOpen.call(null, this, this.popUpFltElms[t], t) } else this.onBeforePopUpClose && this.onBeforePopUpClose.call(null, this, this.popUpFltElms[t], t), i.style.display = u.NONE, this.onAfterPopUpClose && this.onAfterPopUpClose.call(null, this, this.popUpFltElms[t], t) }, e.prototype.closeAll = function(t) {
                for (var e = 0; e < this.popUpFltElms.length; e++)
                    if (e !== t) {
                        var i = this.popUpFltElms[e];
                        i && (i.style.display = u.NONE) } }, e.prototype.buildIcons = function() {
                for (var t = 0; t < this.popUpFltImgs.length; t++) this.buildIcon(t, !1) }, e.prototype.buildIcon = function(t, e) { this.popUpFltImgs[t] && (this.popUpFltImgs[t].src = e ? this.popUpImgFltActive : this.popUpImgFlt) }, e.prototype.destroy = function() {
                var t = this;
                if (this.initialized) { this.popUpFltElmCache = [];
                    for (var e = 0; e < this.popUpFltElms.length; e++) {
                        var i = this.popUpFltElms[e],
                            s = this.popUpFltSpans[e],
                            n = this.popUpFltImgs[e];
                        i && ((0, h.removeElm)(i), this.popUpFltElmCache[e] = i), i = null, s && (0, h.removeElm)(s), s = null, n && (0, h.removeElm)(n), n = null }
                    this.popUpFltElms = [], this.popUpFltSpans = [], this.popUpFltImgs = [], this.emitter.off(["before-filtering"], function() {
                        return t.buildIcons() }), this.emitter.off(["after-filtering"], function() {
                        return t.closeAll() }), this.emitter.off(["cell-processed"], function(e, i) {
                        return t.buildIcon(i, !0) }), this.emitter.off(["filters-row-inserted"], function() {
                        return t.tf.headersRow++ }), this.emitter.off(["before-filter-init"], function(e, i) {
                        return t.build(i) }), this.initialized = !1 } }, e }(l.Feature) }, function(t, e, i) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : { "default": t } }

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function r(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e }

        function o(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.Dropdown = void 0;
        var l = i(10),
            a = i(3),
            h = i(16),
            c = i(5),
            p = i(17),
            u = i(1),
            f = s(u),
            d = i(11),
            g = "Filter options for column {0} cannot be sorted in {1} manner.";
        e.Dropdown = function(t) {
            function e(i) { n(this, e);
                var s = r(this, t.call(this, i, "dropdown")),
                    o = i.config();
                return s.enableSlcResetFilter = o.enable_slc_reset_filter !== !1, s.nonEmptyText = o.non_empty_text || "(Non empty)", s.activateSlcTooltip = o.activate_slc_tooltip || "Click to activate", s.multipleSlcTooltip = o.multiple_slc_tooltip || "Use Ctrl key for multiple selections", s.isCustom = null, s.opts = null, s.optsTxt = null, s.slcInnerHtml = null, s }
            return o(e, t), e.prototype.onSlcFocus = function(t) {
                var e = f["default"].target(t),
                    i = this.tf;
                if (i.loadFltOnDemand && "0" === e.getAttribute("filled")) {
                    var s = e.getAttribute("ct");
                    this.build(s) }
                this.emitter.emit("filter-focus", i, e) }, e.prototype.onSlcChange = function() { this.tf.onSlcChange && this.tf.filter() }, e.prototype.init = function(t, e, i) {
                var s = this,
                    n = this.tf,
                    r = n.getFilterType(t),
                    o = e ? n.externalFltTgtIds[t] : null,
                    l = (0, a.createElm)(d.SELECT, ["id", n.prfxFlt + t + "_" + n.id], ["ct", t], ["filled", "0"]);
                if (r === d.MULTIPLE && (l.multiple = d.MULTIPLE, l.title = this.multipleSlcTooltip), l.className = r.toLowerCase() === d.SELECT ? n.fltCssClass : n.fltMultiCssClass, o ? ((0, a.elm)(o).appendChild(l), n.externalFltEls.push(l)) : i.appendChild(l), n.fltIds.push(l.id), n.loadFltOnDemand) {
                    var h = (0, a.createOpt)(n.displayAllText, "");
                    l.appendChild(h) } else this.build(t);
                f["default"].add(l, "change", function() {
                    return s.onSlcChange() }), f["default"].add(l, "focus", function(t) {
                    return s.onSlcFocus(t) }), this.emitter.on(["build-select-filter"], function(t, e, i, n) {
                    return s.build(e, i, n) }), this.emitter.on(["select-options"], function(t, e, i) {
                    return s.selectOptions(e, i) }), this.initialized = !0 }, e.prototype.build = function(t) {
                var e = arguments.length <= 1 || void 0 === arguments[1] ? !1 : arguments[1],
                    i = this.tf;
                t = parseInt(t, 10), this.emitter.emit("before-populating-filter", i, t), this.opts = [], this.optsTxt = [], this.slcInnerHtml = "";
                var s = i.fltIds[t],
                    n = (0, a.elm)(s),
                    r = i.tbl.rows,
                    o = i.getRowsNb(!0);
                this.isCustom = i.isCustomOptions(t);
                var l = void 0,
                    u = i.getActiveFilterId();
                e && u && (l = i.getColumnIndexFromFilterId(u));
                var f = null,
                    d = null;
                e && i.disableExcludedOptions && (f = [], d = []);
                for (var m = i.refRow; o > m; m++)
                    if (!i.hasVisibleRows || -1 === i.visibleRows.indexOf(m)) {
                        var v = r[m].cells,
                            b = v.length;
                        if (b === i.nbCells && !this.isCustom)
                            for (var y = 0; b > y; y++)
                                if (t === y && (!e || e && i.disableExcludedOptions) || t === y && e && ("" === r[m].style.display && !i.paging || i.paging && (!i.validRowsIndex || i.validRowsIndex && -1 !== i.validRowsIndex.indexOf(m)) && (void 0 === l || l === t || l !== t && -1 !== i.validRowsIndex.indexOf(m)))) {
                                    var _ = i.getCellData(v[y]),
                                        C = (0, c.matchCase)(_, i.caseSensitive);
                                    if ((0, h.has)(this.opts, C, i.caseSensitive) || this.opts.push(_), e && i.disableExcludedOptions) {
                                        var w = d[y];
                                        w || (w = i.getFilteredDataCol(y)), (0, h.has)(w, C, i.caseSensitive) || (0, h.has)(f, C, i.caseSensitive) || f.push(_) } } }
                if (this.isCustom) {
                    var x = i.getCustomOptions(t);
                    this.opts = x[0], this.optsTxt = x[1] }
                if (i.sortSlc && !this.isCustom && (i.caseSensitive ? (this.opts.sort(), f && f.sort()) : (this.opts.sort(p.ignoreCase), f && f.sort(p.ignoreCase))), -1 !== i.sortNumAsc.indexOf(t)) try { this.opts.sort(p.numSortAsc), f && f.sort(p.numSortAsc), this.isCustom && this.optsTxt.sort(p.numSortAsc) } catch (E) {
                    throw new Error(g.replace("{0}", t).replace("{1}", "ascending")) }
                if (-1 !== i.sortNumDesc.indexOf(t)) try { this.opts.sort(p.numSortDesc), f && f.sort(p.numSortDesc), this.isCustom && this.optsTxt.sort(p.numSortDesc) } catch (E) {
                    throw new Error(g.replace("{0}", t).replace("{1}", "ascending")) }
                this.addOptions(t, n, e, f), this.emitter.emit("after-populating-filter", i, t, n) }, e.prototype.addOptions = function(t, e, i, s) {
                var n = this.tf,
                    r = e.value;
                e.innerHTML = "", e = this.addFirstOption(e);
                for (var o = 0; o < this.opts.length; o++)
                    if ("" !== this.opts[o]) {
                        var l = this.opts[o],
                            p = this.isCustom ? this.optsTxt[o] : l,
                            u = !1;
                        i && n.disableExcludedOptions && (0, h.has)(s, (0, c.matchCase)(l, n.caseSensitive), n.caseSensitive) && (u = !0);
                        var f = void 0;
                        f = n.loadFltOnDemand && r === this.opts[o] && n.getFilterType(t) === d.SELECT ? (0, a.createOpt)(p, l, !0) : (0, a.createOpt)(p, l, !1), u && (f.disabled = !0), e.appendChild(f) }
                e.setAttribute("filled", "1") }, e.prototype.addFirstOption = function(t) {
                var e = this.tf,
                    i = (0, a.createOpt)(this.enableSlcResetFilter ? e.displayAllText : "", "");
                if (this.enableSlcResetFilter || (i.style.display = d.NONE), t.appendChild(i), e.enableEmptyOption) {
                    var s = (0, a.createOpt)(e.emptyText, e.emOperator);
                    t.appendChild(s) }
                if (e.enableNonEmptyOption) {
                    var n = (0, a.createOpt)(e.nonEmptyText, e.nmOperator);
                    t.appendChild(n) }
                return t }, e.prototype.selectOptions = function(t) {
                var e = arguments.length <= 1 || void 0 === arguments[1] ? [] : arguments[1],
                    i = this.tf;
                if (i.getFilterType(t) === d.MULTIPLE && 0 !== e.length) {
                    var s = i.getFilterElement(t);
                    [].forEach.call(s.options, function(t) { "" !== e[0] && "" !== t.value || (t.selected = !1), "" !== t.value && (0, h.has)(e, t.value, !0) && (t.selected = !0) }) }
            }, e.prototype.getValues = function(t) {
                var e = this.tf,
                    i = e.getFilterElement(t),
                    s = [];
                return i.selectedOptions ? [].forEach.call(i.selectedOptions, function(t) {
                    return s.push(t.value) }) : [].forEach.call(i.options, function(t) { t.selected && s.push(t.value) }), s }, e.prototype.destroy = function() {
                var t = this;
                this.emitter.off(["build-select-filter"], function(e, i, s) {
                    return t.build(e, i, s) }), this.emitter.off(["select-options"], function(e, i, s) {
                    return t.selectOptions(i, s) }) }, e
        }(l.Feature)
    }, function(t, e, i) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), e.has = void 0;
        var s = i(5);
        e.has = function(t, e, i) {
            for (var n = Boolean(i), r = 0, o = t.length; o > r; r++)
                if ((0, s.matchCase)(t[r].toString(), n) === e) return !0;
            return !1 } }, function(t, e) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 });
        e.ignoreCase = function(t, e) {
            var i = t.toLowerCase(),
                s = e.toLowerCase();
            return s > i ? -1 : i > s ? 1 : 0 }, e.numSortAsc = function(t, e) {
            return t - e }, e.numSortDesc = function(t, e) {
            return e - t } }, function(t, e, i) { "use strict";

        function s(t) {
            return t && t.__esModule ? t : { "default": t } }

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function r(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e }

        function o(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.CheckList = void 0;
        var l = i(10),
            a = i(3),
            h = i(16),
            c = i(5),
            p = i(17),
            u = i(1),
            f = s(u),
            d = i(4),
            g = i(11),
            m = "Filter options for column {0} cannot be sorted in {1} manner.";
        e.CheckList = function(t) {
            function e(i) { n(this, e);
                var s = r(this, t.call(this, i, "checkList")),
                    o = i.config();
                return s.checkListDiv = [], s.checkListDivCssClass = o.div_checklist_css_class || "div_checklist", s.checkListCssClass = o.checklist_css_class || "flt_checklist", s.checkListItemCssClass = o.checklist_item_css_class || "flt_checklist_item", s.checkListSlcItemCssClass = o.checklist_selected_item_css_class || "flt_checklist_slc_item", s.activateCheckListTxt = o.activate_checklist_text || "Click to load filter data", s.checkListItemDisabledCssClass = o.checklist_item_disabled_css_class || "flt_checklist_item_disabled", s.enableCheckListResetFilter = o.enable_checklist_reset_filter !== !1, s.prfxCheckListDiv = "chkdiv_", s.isCustom = null, s.opts = null, s.optsTxt = null, s.excludedOpts = null, s }
            return o(e, t), e.prototype.onChange = function(t) {
                var e = f["default"].target(t),
                    i = this.tf;
                this.emitter.emit("filter-focus", i, e), i.filter() }, e.prototype.optionClick = function(t) { this.setCheckListValues(t.target), this.onChange(t) }, e.prototype.onCheckListClick = function(t) {
                var e = this,
                    i = f["default"].target(t);
                if (this.tf.loadFltOnDemand && "0" === i.getAttribute("filled")) {
                    var s = i.getAttribute("ct"),
                        n = this.checkListDiv[s];
                    this.build(s), f["default"].remove(n, "click", function(t) {
                        return e.onCheckListClick(t) }) } }, e.prototype.init = function(t, e, i) {
                var s = this,
                    n = this.tf,
                    r = e ? n.externalFltTgtIds[t] : null,
                    o = (0, a.createElm)("div", ["id", this.prfxCheckListDiv + t + "_" + n.id], ["ct", t], ["filled", "0"]);
                o.className = this.checkListDivCssClass, r ? ((0, a.elm)(r).appendChild(o), n.externalFltEls.push(o)) : i.appendChild(o), this.checkListDiv[t] = o, n.fltIds.push(n.prfxFlt + t + "_" + n.id), n.loadFltOnDemand ? (f["default"].add(o, "click", function(t) {
                    return s.onCheckListClick(t) }), o.appendChild((0, a.createText)(this.activateCheckListTxt))) : this.build(t), this.emitter.on(["build-checklist-filter"], function(t, e, i) {
                    return s.build(e, i) }), this.emitter.on(["select-checklist-options"], function(t, e, i) {
                    return s.selectOptions(e, i) }), this.initialized = !0 }, e.prototype.build = function(t) {
                var e = this,
                    i = this.tf;
                t = parseInt(t, 10), this.emitter.emit("before-populating-filter", i, t), this.opts = [], this.optsTxt = [];
                var s = this.checkListDiv[t],
                    n = (0, a.createElm)("ul", ["id", i.fltIds[t]], ["colIndex", t]);
                n.className = this.checkListCssClass, f["default"].add(n, "change", function(t) {
                    return e.onChange(t) });
                var r = i.tbl.rows,
                    o = i.getRowsNb(!0),
                    l = i.caseSensitive;
                this.isCustom = i.isCustomOptions(t);
                var u = void 0,
                    d = i.getActiveFilterId();
                i.linkedFilters && d && (u = i.getColumnIndexFromFilterId(d));
                var g = [];
                i.linkedFilters && i.disableExcludedOptions && (this.excludedOpts = []), s.innerHTML = "";
                for (var v = i.refRow; o > v; v++)
                    if (!i.hasVisibleRows || -1 === i.visibleRows.indexOf(v)) {
                        var b = r[v].cells,
                            y = b.length;
                        if (y === i.nbCells && !this.isCustom)
                            for (var _ = 0; y > _; _++)
                                if (t === _ && (!i.linkedFilters || i.linkedFilters && i.disableExcludedOptions) || t === _ && i.linkedFilters && ("" === r[v].style.display && !i.paging || i.paging && (!u || u === t || u !== t && -1 !== i.validRowsIndex.indexOf(v)))) {
                                    var C = i.getCellData(b[_]),
                                        w = (0, c.matchCase)(C, l);
                                    (0, h.has)(this.opts, w, l) || this.opts.push(C);
                                    var x = g[_];
                                    i.linkedFilters && i.disableExcludedOptions && (x || (x = i.getFilteredDataCol(_)), (0, h.has)(x, w, l) || (0, h.has)(this.excludedOpts, w, l) || this.excludedOpts.push(C)) } }
                if (this.isCustom) {
                    var E = i.getCustomOptions(t);
                    this.opts = E[0], this.optsTxt = E[1] }
                if (i.sortSlc && !this.isCustom && (l ? (this.opts.sort(), this.excludedOpts && this.excludedOpts.sort()) : (this.opts.sort(p.ignoreCase), this.excludedOpts && this.excludedOpts.sort(p.ignoreCase))), -1 !== i.sortNumAsc.indexOf(t)) try { this.opts.sort(p.numSortAsc), this.excludedOpts && this.excludedOpts.sort(p.numSortAsc), this.isCustom && this.optsTxt.sort(p.numSortAsc) } catch (T) {
                    throw new Error(m.replace("{0}", t).replace("{1}", "ascending")) }
                if (-1 !== i.sortNumDesc.indexOf(t)) try { this.opts.sort(p.numSortDesc), this.excludedOpts && this.excludedOpts.sort(p.numSortDesc), this.isCustom && this.optsTxt.sort(p.numSortDesc) } catch (T) {
                    throw new Error(m.replace("{0}", t).replace("{1}", "descending")) }
                this.addChecks(t, n), i.loadFltOnDemand && (s.innerHTML = ""), s.appendChild(n), s.setAttribute("filled", "1"), this.emitter.emit("after-populating-filter", i, t, s) }, e.prototype.addChecks = function(t, e) {
                for (var i = this, s = this.tf, n = this.addTChecks(t, e), r = 0; r < this.opts.length; r++) {
                    var o = this.opts[r],
                        l = this.isCustom ? this.optsTxt[r] : o,
                        p = (0, a.createCheckItem)(s.fltIds[t] + "_" + (r + n), o, l);
                    p.className = this.checkListItemCssClass, s.linkedFilters && s.disableExcludedOptions && (0, h.has)(this.excludedOpts, (0, c.matchCase)(o, s.caseSensitive), s.caseSensitive) ? ((0, a.addClass)(p, this.checkListItemDisabledCssClass), p.check.disabled = !0, p.disabled = !0) : f["default"].add(p.check, "click", function(t) {
                        return i.optionClick(t) }), e.appendChild(p), "" === o && (p.style.display = g.NONE) } }, e.prototype.addTChecks = function(t, e) {
                var i = this,
                    s = this.tf,
                    n = 1,
                    r = (0, a.createCheckItem)(s.fltIds[t] + "_0", "", s.displayAllText);
                if (r.className = this.checkListItemCssClass, e.appendChild(r), f["default"].add(r.check, "click", function(t) {
                        return i.optionClick(t) }), this.enableCheckListResetFilter || (r.style.display = g.NONE), s.enableEmptyOption) {
                    var o = (0, a.createCheckItem)(s.fltIds[t] + "_1", s.emOperator, s.emptyText);
                    o.className = this.checkListItemCssClass, e.appendChild(o), f["default"].add(o.check, "click", function(t) {
                        return i.optionClick(t) }), n++ }
                if (s.enableNonEmptyOption) {
                    var l = (0, a.createCheckItem)(s.fltIds[t] + "_2", s.nmOperator, s.nonEmptyText);
                    l.className = this.checkListItemCssClass, e.appendChild(l), f["default"].add(l.check, "click", function(t) {
                        return i.optionClick(t) }), n++ }
                return n }, e.prototype.setCheckListValues = function(t) {
                if (t) {
                    var e = this.tf,
                        i = t.value,
                        s = parseInt(t.id.split("_")[2], 10),
                        n = e.getColumnIndexFromFilterId(t.id),
                        r = "LI",
                        o = e.getFilterElement(parseInt(n, 10)),
                        l = o.childNodes[s],
                        h = o.getAttribute("colIndex"),
                        p = o.getAttribute("value"),
                        u = o.getAttribute("indexes");
                    if (t.checked) {
                        if ("" === i) {
                            if (u && "" !== u)
                                for (var f = u.split(e.separator), d = 0; d < f.length; d++) {
                                    var g = (0, a.elm)(e.fltIds[h] + "_" + f[d]);
                                    g && (g.checked = !1, (0, a.removeClass)(o.childNodes[f[d]], this.checkListSlcItemCssClass)) }
                            o.setAttribute("value", ""), o.setAttribute("indexes", "") } else p = p ? p : "", i = (0, c.trim)(p + " " + i + " " + e.orOperator), s = u + s + e.separator, o.setAttribute("value", i), o.setAttribute("indexes", s), (0, a.elm)(e.fltIds[h] + "_0") && ((0, a.elm)(e.fltIds[h] + "_0").checked = !1);
                        l.nodeName === r && ((0, a.removeClass)(o.childNodes[0], this.checkListSlcItemCssClass), (0, a.addClass)(l, this.checkListSlcItemCssClass)) } else {
                        if ("" !== i) {
                            var m = new RegExp((0, c.rgxEsc)(i + " " + e.orOperator));
                            p = p.replace(m, ""), o.setAttribute("value", (0, c.trim)(p));
                            var v = new RegExp((0, c.rgxEsc)(s + e.separator));
                            u = u.replace(v, ""), o.setAttribute("indexes", u) }
                        l.nodeName === r && (0, a.removeClass)(l, this.checkListSlcItemCssClass) } } }, e.prototype.selectOptions = function(t) {
                var e = arguments.length <= 1 || void 0 === arguments[1] ? [] : arguments[1],
                    i = this.tf,
                    s = i.getFilterElement(t);
                if (i.getFilterType(t) === g.CHECKLIST && s) {
                    var n = (0, a.tag)(s, "li").length;
                    s.setAttribute("value", ""), s.setAttribute("indexes", "");
                    for (var r = 0; n > r; r++) {
                        var o = (0, a.tag)(s, "li")[r],
                            l = (0, a.tag)(o, "label")[0],
                            p = (0, a.tag)(o, "input")[0],
                            u = (0, c.matchCase)((0, a.getText)(l), i.caseSensitive); "" !== u && (0, h.has)(e, u, i.caseSensitive) ? (p.checked = !0, this.setCheckListValues(p)) : (p.checked = !1, this.setCheckListValues(p)) } } }, e.prototype.getValues = function(t) {
                var e = this.tf,
                    i = e.getFilterElement(t),
                    s = i.getAttribute("value"),
                    n = (0, d.isEmpty)(s) ? "" : s;
                return n = n.substr(0, n.length - 3), n = n.split(" " + e.orOperator + " ") }, e.prototype.destroy = function() {
                var t = this;
                this.emitter.off(["build-checklist-filter"], function(e, i, s) {
                    return t.build(i, s) }), this.emitter.off(["select-checklist-options"], function(e, i, s) {
                    return t.selectOptions(i, s) }) }, e }(l.Feature) }, function(t, e, i) { "use strict";

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function n(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.RowsCounter = void 0;
        var o = i(10),
            l = i(3),
            a = i(4);
        e.RowsCounter = function(t) {
            function e(i) { s(this, e);
                var r = n(this, t.call(this, i, "rowsCounter")),
                    o = r.config;
                return r.rowsCounterTgtId = o.rows_counter_target_id || null, r.rowsCounterDiv = null, r.rowsCounterSpan = null, r.rowsCounterText = o.rows_counter_text || "Rows: ", r.fromToTextSeparator = o.from_to_text_separator || "-", r.overText = o.over_text || " / ", r.totRowsCssClass = o.tot_rows_css_class || "tot", r.prfxCounter = "counter_", r.prfxTotRows = "totrows_span_", r.prfxTotRowsTxt = "totRowsTextSpan_", r.onBeforeRefreshCounter = (0, a.isFn)(o.on_before_refresh_counter) ? o.on_before_refresh_counter : null, r.onAfterRefreshCounter = (0, a.isFn)(o.on_after_refresh_counter) ? o.on_after_refresh_counter : null, r }
            return r(e, t), e.prototype.init = function() {
                var t = this;
                if (!this.initialized) {
                    var e = this.tf,
                        i = (0, l.createElm)("div", ["id", this.prfxCounter + e.id]);
                    i.className = this.totRowsCssClass;
                    var s = (0, l.createElm)("span", ["id", this.prfxTotRows + e.id]),
                        n = (0, l.createElm)("span", ["id", this.prfxTotRowsTxt + e.id]);
                    n.appendChild((0, l.createText)(this.rowsCounterText)), this.rowsCounterTgtId || e.setToolbar();
                    var r = this.rowsCounterTgtId ? (0, l.elm)(this.rowsCounterTgtId) : e.lDiv;
                    this.rowsCounterTgtId ? (r.appendChild(n), r.appendChild(s)) : (i.appendChild(n), i.appendChild(s), r.appendChild(i)), this.rowsCounterDiv = i, this.rowsCounterSpan = s, this.emitter.on(["after-filtering", "grouped-by-page"], function() {
                        return t.refresh(e.getValidRowsNb()) }), this.emitter.on(["rows-changed"], function() {
                        return t.refresh() }), this.initialized = !0, this.refresh() } }, e.prototype.refresh = function(t) {
                if (this.initialized && this.isEnabled()) {
                    var e = this.tf;
                    this.onBeforeRefreshCounter && this.onBeforeRefreshCounter.call(null, e, this.rowsCounterSpan);
                    var i;
                    if (e.paging) {
                        var s = e.feature("paging");
                        if (s) {
                            var n = parseInt(s.startPagingRow, 10) + (e.getValidRowsNb() > 0 ? 1 : 0),
                                r = n + s.pagingLength - 1 <= e.getValidRowsNb() ? n + s.pagingLength - 1 : e.getValidRowsNb();
                            i = n + this.fromToTextSeparator + r + this.overText + e.getValidRowsNb() } } else i = t && "" !== t ? t : e.getFilterableRowsNb() - e.nbHiddenRows;
                    this.rowsCounterSpan.innerHTML = i, this.onAfterRefreshCounter && this.onAfterRefreshCounter.call(null, e, this.rowsCounterSpan, i) } }, e.prototype.destroy = function() {
                var t = this;
                this.initialized && (!this.rowsCounterTgtId && this.rowsCounterDiv ? (0, l.removeElm)(this.rowsCounterDiv) : (0, l.elm)(this.rowsCounterTgtId).innerHTML = "", this.rowsCounterSpan = null, this.rowsCounterDiv = null, this.emitter.off(["after-filtering", "grouped-by-page"], function() {
                    return t.refresh(tf.getValidRowsNb()) }), this.emitter.off(["rows-changed"], function() {
                    return t.refresh() }), this.initialized = !1) }, e }(o.Feature) }, function(t, e, i) { "use strict";

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function n(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.StatusBar = void 0;
        var o = i(10),
            l = i(2),
            a = i(3),
            h = i(4);
        e.StatusBar = function(t) {
            function e(i) { s(this, e);
                var r = n(this, t.call(this, i, "statusBar")),
                    o = r.config;
                return r.statusBarTgtId = o.status_bar_target_id || null, r.statusBarDiv = null, r.statusBarSpan = null, r.statusBarSpanText = null, r.statusBarText = o.status_bar_text || "", r.statusBarCssClass = o.status_bar_css_class || "status", r.statusBarCloseDelay = 250, r.onBeforeShowMsg = (0, h.isFn)(o.on_before_show_msg) ? o.on_before_show_msg : null, r.onAfterShowMsg = (0, h.isFn)(o.on_after_show_msg) ? o.on_after_show_msg : null, r.msgFilter = o.msg_filter || "Filtering data...", r.msgPopulate = o.msg_populate || "Populating filter...", r.msgPopulateCheckList = o.msg_populate_checklist || "Populating list...", r.msgChangePage = o.msg_change_page || "Collecting paging data...", r.msgClear = o.msg_clear || "Clearing filters...", r.msgChangeResults = o.msg_change_results || "Changing results per page...", r.msgResetPage = o.msg_reset_page || "Re-setting page...", r.msgResetPageLength = o.msg_reset_page_length || "Re-setting page length...", r.msgSort = o.msg_sort || "Sorting data...", r.msgLoadExtensions = o.msg_load_extensions || "Loading extensions...", r.msgLoadThemes = o.msg_load_themes || "Loading theme(s)...", r.prfxStatus = "status_", r.prfxStatusSpan = "statusSpan_", r.prfxStatusTxt = "statusText_", r }
            return r(e, t), e.prototype.init = function() {
                var t = this;
                if (!this.initialized) {
                    var e = this.tf,
                        i = this.emitter,
                        s = (0, a.createElm)("div", ["id", this.prfxStatus + e.id]);
                    s.className = this.statusBarCssClass;
                    var n = (0, a.createElm)("span", ["id", this.prfxStatusSpan + e.id]),
                        r = (0, a.createElm)("span", ["id", this.prfxStatusTxt + e.id]);
                    r.appendChild((0, a.createText)(this.statusBarText)), this.statusBarTgtId || e.setToolbar();
                    var o = this.statusBarTgtId ? (0, a.elm)(this.statusBarTgtId) : e.lDiv;
                    this.statusBarTgtId ? (o.appendChild(r), o.appendChild(n)) : (s.appendChild(r), s.appendChild(n), o.appendChild(s)), this.statusBarDiv = s, this.statusBarSpan = n, this.statusBarSpanText = r, i.on(["before-filtering"], function() {
                        return t.message(t.msgFilter) }), i.on(["before-populating-filter"], function() {
                        return t.message(t.msgPopulate) }), i.on(["before-page-change"], function() {
                        return t.message(t.msgChangePage) }), i.on(["before-clearing-filters"], function() {
                        return t.message(t.msgClear) }), i.on(["before-page-length-change"], function() {
                        return t.message(t.msgChangeResults) }), i.on(["before-reset-page"], function() {
                        return t.message(t.msgResetPage) }), i.on(["before-reset-page-length"], function() {
                        return t.message(t.msgResetPageLength) }), i.on(["before-loading-extensions"], function() {
                        return t.message(t.msgLoadExtensions) }), i.on(["before-loading-themes"], function() {
                        return t.message(t.msgLoadThemes) }), i.on(["after-filtering", "after-populating-filter", "after-page-change", "after-clearing-filters", "after-page-length-change", "after-reset-page", "after-reset-page-length", "after-loading-extensions", "after-loading-themes"], function() {
                        return t.message("") }), this.initialized = !0 } }, e.prototype.message = function() {
                var t = this,
                    e = arguments.length <= 0 || void 0 === arguments[0] ? "" : arguments[0];
                if (this.isEnabled()) { this.onBeforeShowMsg && this.onBeforeShowMsg.call(null, this.tf, e);
                    var i = "" === e ? this.statusBarCloseDelay : 1;
                    l.root.setTimeout(function() { t.initialized && (t.statusBarSpan.innerHTML = e, t.onAfterShowMsg && t.onAfterShowMsg.call(null, t.tf, e)) }, i) } }, e.prototype.destroy = function() {
                var t = this;
                if (this.initialized) {
                    var e = this.emitter;
                    this.statusBarDiv.innerHTML = "", this.statusBarTgtId || (0, a.removeElm)(this.statusBarDiv), this.statusBarSpan = null, this.statusBarSpanText = null, this.statusBarDiv = null, e.off(["before-filtering"], function() {
                        return t.message(t.msgFilter) }), e.off(["before-populating-filter"], function() {
                        return t.message(t.msgPopulate) }), e.off(["before-page-change"], function() {
                        return t.message(t.msgChangePage) }), e.off(["before-clearing-filters"], function() {
                        return t.message(t.msgClear) }), e.off(["before-page-length-change"], function() {
                        return t.message(t.msgChangeResults) }), e.off(["before-reset-page"], function() {
                        return t.message(t.msgResetPage) }), e.off(["before-reset-page-length"], function() {
                        return t.message(t.msgResetPageLength) }), e.off(["before-loading-extensions"], function() {
                        return t.message(t.msgLoadExtensions) }), e.off(["before-loading-themes"], function() {
                        return t.message(t.msgLoadThemes) }), e.off(["after-filtering", "after-populating-filter", "after-page-change", "after-clearing-filters", "after-page-length-change", "after-reset-page", "after-reset-page-length", "after-loading-extensions", "after-loading-themes"], function() {
                        return t.message("") }), this.initialized = !1 } }, e }(o.Feature) }, function(t, e, i) { "use strict";

        function s(t) {
            return t && t.__esModule ? t : { "default": t } }

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function r(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e }

        function o(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.Paging = void 0;
        var l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol ? "symbol" : typeof t },
            a = i(10),
            h = i(3),
            c = i(4),
            p = i(1),
            u = s(p),
            f = i(11);
        e.Paging = function(t) {
            function e(i) { n(this, e);
                var s = r(this, t.call(this, i, "paging")),
                    o = s.config;
                s.btnPageCssClass = o.paging_btn_css_class || "pgInp", s.pagingSlc = null, s.resultsPerPageSlc = null, s.pagingTgtId = o.paging_target_id || null, s.pagingLength = isNaN(o.paging_length) ? 10 : o.paging_length, s.resultsPerPageTgtId = o.results_per_page_target_id || null, s.pgSlcCssClass = o.paging_slc_css_class || "pgSlc", s.pgInpCssClass = o.paging_inp_css_class || "pgNbInp", s.resultsPerPage = o.results_per_page || null, s.hasResultsPerPage = (0, c.isArray)(s.resultsPerPage), s.resultsSlcCssClass = o.results_slc_css_class || "rspg", s.resultsSpanCssClass = o.results_span_css_class || "rspgSpan", s.startPagingRow = 0, s.nbPages = 0, s.currentPageNb = 1, s.btnNextPageText = o.btn_next_page_text || ">", s.btnPrevPageText = o.btn_prev_page_text || "<", s.btnLastPageText = o.btn_last_page_text || ">|", s.btnFirstPageText = o.btn_first_page_text || "|<", s.btnNextPageHtml = o.btn_next_page_html || (i.enableIcons ? '<input type="button" value="" class="' + s.btnPageCssClass + ' nextPage" title="Next page" />' : null), s.btnPrevPageHtml = o.btn_prev_page_html || (i.enableIcons ? '<input type="button" value="" class="' + s.btnPageCssClass + ' previousPage" title="Previous page" />' : null), s.btnFirstPageHtml = o.btn_first_page_html || (i.enableIcons ? '<input type="button" value="" class="' + s.btnPageCssClass + ' firstPage" title="First page" />' : null), s.btnLastPageHtml = o.btn_last_page_html || (i.enableIcons ? '<input type="button" value="" class="' + s.btnPageCssClass + ' lastPage" title="Last page" />' : null), s.pageText = o.page_text || " Page ", s.ofText = o.of_text || " of ", s.nbPgSpanCssClass = o.nb_pages_css_class || "nbpg", s.hasPagingBtns = o.paging_btns !== !1, s.pageSelectorType = o.page_selector_type || f.SELECT, s.onBeforeChangePage = (0, c.isFn)(o.on_before_change_page) ? o.on_before_change_page : null, s.onAfterChangePage = (0, c.isFn)(o.on_after_change_page) ? o.on_after_change_page : null, s.prfxSlcPages = "slcPages_", s.prfxSlcResults = "slcResults_", s.prfxSlcResultsTxt = "slcResultsTxt_", s.prfxBtnNextSpan = "btnNextSpan_", s.prfxBtnPrevSpan = "btnPrevSpan_", s.prfxBtnLastSpan = "btnLastSpan_", s.prfxBtnFirstSpan = "btnFirstSpan_", s.prfxBtnNext = "btnNext_", s.prfxBtnPrev = "btnPrev_", s.prfxBtnLast = "btnLast_", s.prfxBtnFirst = "btnFirst_", s.prfxPgSpan = "pgspan_", s.prfxPgBeforeSpan = "pgbeforespan_", s.prfxPgAfterSpan = "pgafterspan_";
                var l = i.refRow,
                    a = i.getRowsNb(!0);
                s.nbPages = Math.ceil((a - l) / s.pagingLength);
                var h = s;
                return s.evt = { slcIndex: function() {
                        return h.pageSelectorType === f.SELECT ? h.pagingSlc.options.selectedIndex : parseInt(h.pagingSlc.value, 10) - 1 }, nbOpts: function() {
                        return h.pageSelectorType === f.SELECT ? parseInt(h.pagingSlc.options.length, 10) - 1 : h.nbPages - 1 }, next: function() {
                        var t = h.evt.slcIndex() < h.evt.nbOpts() ? h.evt.slcIndex() + 1 : 0;
                        h.changePage(t) }, prev: function() {
                        var t = h.evt.slcIndex() > 0 ? h.evt.slcIndex() - 1 : h.evt.nbOpts();
                        h.changePage(t) }, last: function() { h.changePage(h.evt.nbOpts()) }, first: function() { h.changePage(0) }, _detectKey: function(t) {
                        var e = u["default"].keyCode(t);
                        e === f.ENTER_KEY && (i.sorted ? (i.filter(), h.changePage(h.evt.slcIndex())) : h.changePage(), this.blur()) }, slcPagesChange: null, nextEvt: null, prevEvt: null, lastEvt: null, firstEvt: null }, s }
            return o(e, t), e.prototype.init = function() {
                var t, e = this,
                    i = this.tf,
                    s = this.evt;
                if (!this.initialized) { this.hasResultsPerPage && (this.resultsPerPage.length < 2 ? this.hasResultsPerPage = !1 : (this.pagingLength = this.resultsPerPage[1][0], this.setResultsPerPage())), s.slcPagesChange = function(t) {
                        var i = t.target;
                        e.changePage(i.selectedIndex) }, this.pageSelectorType === f.SELECT && (t = (0, h.createElm)(f.SELECT, ["id", this.prfxSlcPages + i.id]), t.className = this.pgSlcCssClass, u["default"].add(t, "change", s.slcPagesChange)), this.pageSelectorType === f.INPUT && (t = (0, h.createElm)(f.INPUT, ["id", this.prfxSlcPages + i.id], ["value", this.currentPageNb]), t.className = this.pgInpCssClass, u["default"].add(t, "keypress", s._detectKey));
                    var n = (0, h.createElm)("span", ["id", this.prfxBtnNextSpan + i.id]),
                        r = (0, h.createElm)("span", ["id", this.prfxBtnPrevSpan + i.id]),
                        o = (0, h.createElm)("span", ["id", this.prfxBtnLastSpan + i.id]),
                        l = (0, h.createElm)("span", ["id", this.prfxBtnFirstSpan + i.id]);
                    if (this.hasPagingBtns) {
                        if (this.btnNextPageHtml) n.innerHTML = this.btnNextPageHtml, u["default"].add(n, "click", s.next);
                        else {
                            var a = (0, h.createElm)(f.INPUT, ["id", this.prfxBtnNext + i.id], ["type", "button"], ["value", this.btnNextPageText], ["title", "Next"]);
                            a.className = this.btnPageCssClass, u["default"].add(a, "click", s.next), n.appendChild(a) }
                        if (this.btnPrevPageHtml) r.innerHTML = this.btnPrevPageHtml, u["default"].add(r, "click", s.prev);
                        else {
                            var c = (0, h.createElm)(f.INPUT, ["id", this.prfxBtnPrev + i.id], ["type", "button"], ["value", this.btnPrevPageText], ["title", "Previous"]);
                            c.className = this.btnPageCssClass, u["default"].add(c, "click", s.prev), r.appendChild(c) }
                        if (this.btnLastPageHtml) o.innerHTML = this.btnLastPageHtml, u["default"].add(o, "click", s.last);
                        else {
                            var p = (0, h.createElm)(f.INPUT, ["id", this.prfxBtnLast + i.id], ["type", "button"], ["value", this.btnLastPageText], ["title", "Last"]);
                            p.className = this.btnPageCssClass, u["default"].add(p, "click", s.last), o.appendChild(p) }
                        if (this.btnFirstPageHtml) l.innerHTML = this.btnFirstPageHtml, u["default"].add(l, "click", s.first);
                        else {
                            var d = (0, h.createElm)(f.INPUT, ["id", this.prfxBtnFirst + i.id], ["type", "button"], ["value", this.btnFirstPageText], ["title", "First"]);
                            d.className = this.btnPageCssClass, u["default"].add(d, "click", s.first), l.appendChild(d) } }
                    this.pagingTgtId || i.setToolbar();
                    var g = this.pagingTgtId ? (0, h.elm)(this.pagingTgtId) : i.mDiv;
                    g.appendChild(l), g.appendChild(r);
                    var m = (0, h.createElm)("span", ["id", this.prfxPgBeforeSpan + i.id]);
                    m.appendChild((0, h.createText)(this.pageText)), m.className = this.nbPgSpanCssClass, g.appendChild(m), g.appendChild(t);
                    var v = (0, h.createElm)("span", ["id", this.prfxPgAfterSpan + i.id]);
                    v.appendChild((0, h.createText)(this.ofText)), v.className = this.nbPgSpanCssClass, g.appendChild(v);
                    var b = (0, h.createElm)("span", ["id", this.prfxPgSpan + i.id]);
                    b.className = this.nbPgSpanCssClass, b.appendChild((0, h.createText)(" " + this.nbPages + " ")), g.appendChild(b), g.appendChild(n), g.appendChild(o), this.pagingSlc = (0, h.elm)(this.prfxSlcPages + i.id), this.setPagingInfo(), i.fltGrid || (i.validateAllRows(), this.setPagingInfo(i.validRowsIndex)), this.emitter.on(["after-filtering"], function() {
                        return e.resetPagingInfo() }), this.emitter.on(["change-page"], function(t, i) {
                        return e.setPage(i) }), this.emitter.on(["change-page-results"], function(t, i) {
                        return e.changeResultsPerPage(i) }), this.initialized = !0 } }, e.prototype.reset = function() {
                var t = arguments.length <= 0 || void 0 === arguments[0] ? !1 : arguments[0],
                    e = this.tf;
                this.isEnabled() || (this.enable(), this.init(), t && e.filter()) }, e.prototype.resetPagingInfo = function() { this.startPagingRow = 0, this.currentPageNb = 1, this.setPagingInfo(this.tf.validRowsIndex) }, e.prototype.setPagingInfo = function(t) {
                var e = this.tf,
                    i = this.pagingTgtId ? (0, h.elm)(this.pagingTgtId) : e.mDiv,
                    s = (0, h.elm)(this.prfxPgSpan + e.id);
                if (e.validRowsIndex = t || e.getValidRows(!0), this.nbPages = Math.ceil(e.validRowsIndex.length / this.pagingLength), s.innerHTML = this.nbPages, this.pageSelectorType === f.SELECT && (this.pagingSlc.innerHTML = ""), this.nbPages > 0)
                    if (i.style.visibility = "visible", this.pageSelectorType === f.SELECT)
                        for (var n = 0; n < this.nbPages; n++) {
                            var r = (0, h.createOpt)(n + 1, n * this.pagingLength, !1);
                            this.pagingSlc.options[n] = r } else this.pagingSlc.value = this.currentPageNb;
                    else i.style.visibility = "hidden";
                this.groupByPage(e.validRowsIndex) }, e.prototype.groupByPage = function(t) {
                var e = this.tf,
                    i = e.tbl.rows,
                    s = parseInt(this.startPagingRow, 10),
                    n = s + parseInt(this.pagingLength, 10);
                t && (e.validRowsIndex = t);
                for (var r = 0, o = e.getValidRowsNb(!0); o > r; r++) {
                    var l = e.validRowsIndex[r],
                        a = i[l],
                        h = a.getAttribute("validRow"),
                        p = !1;
                    r >= s && n > r ? ((0, c.isNull)(h) || Boolean("true" === h)) && (a.style.display = "", p = !0) : a.style.display = f.NONE, this.emitter.emit("row-paged", e, l, r, p) }
                this.emitter.emit("grouped-by-page", e, this) }, e.prototype.getPage = function() {
                return this.currentPageNb }, e.prototype.setPage = function(t) {
                var e = this.tf;
                if (e.hasGrid() && this.isEnabled()) {
                    var i = this.evt,
                        s = "undefined" == typeof t ? "undefined" : l(t);
                    if ("string" === s) switch (t.toLowerCase()) {
                        case "next":
                            i.next();
                            break;
                        case "previous":
                            i.prev();
                            break;
                        case "last":
                            i.last();
                            break;
                        case "first":
                            i.first();
                            break;
                        default:
                            i.next() } else "number" === s && this.changePage(t - 1) } }, e.prototype.setResultsPerPage = function() {
                var t = this,
                    e = this.tf,
                    i = this.evt;
                if (!this.resultsPerPageSlc && this.resultsPerPage) { i.slcResultsChange = function(e) { t.onChangeResultsPerPage(), e.target.blur() };
                    var s = (0, h.createElm)(f.SELECT, ["id", this.prfxSlcResults + e.id]);
                    s.className = this.resultsSlcCssClass;
                    var n = this.resultsPerPage[0],
                        r = this.resultsPerPage[1],
                        o = (0, h.createElm)("span", ["id", this.prfxSlcResultsTxt + e.id]);
                    o.className = this.resultsSpanCssClass, this.resultsPerPageTgtId || e.setToolbar();
                    var l = this.resultsPerPageTgtId ? (0, h.elm)(this.resultsPerPageTgtId) : e.rDiv;
                    o.appendChild((0, h.createText)(n));
                    var a = e.feature("help");
                    a && a.btn ? (a.btn.parentNode.insertBefore(o, a.btn), a.btn.parentNode.insertBefore(s, a.btn)) : (l.appendChild(o), l.appendChild(s));
                    for (var c = 0; c < r.length; c++) {
                        var p = new Option(r[c], r[c], !1, !1);
                        s.options[c] = p }
                    u["default"].add(s, "change", i.slcResultsChange), this.resultsPerPageSlc = s } }, e.prototype.removeResultsPerPage = function() {
                var t = this.tf;
                if (t.hasGrid() && this.resultsPerPageSlc && this.resultsPerPage) {
                    var e = this.resultsPerPageSlc,
                        i = (0, h.elm)(this.prfxSlcResultsTxt + t.id);
                    e && (0, h.removeElm)(e), i && (0, h.removeElm)(i), this.resultsPerPageSlc = null } }, e.prototype.changePage = function(t) {
                var e = this.tf;
                this.isEnabled() && (this.emitter.emit("before-page-change", e, t + 1), null === t && (t = this.pageSelectorType === f.SELECT ? this.pagingSlc.options.selectedIndex : this.pagingSlc.value - 1), t >= 0 && t <= this.nbPages - 1 && (this.onBeforeChangePage && this.onBeforeChangePage.call(null, this, t + 1), this.currentPageNb = parseInt(t, 10) + 1, this.pageSelectorType === f.SELECT ? this.pagingSlc.options[t].selected = !0 : this.pagingSlc.value = this.currentPageNb, this.startPagingRow = this.pageSelectorType === f.SELECT ? this.pagingSlc.value : t * this.pagingLength, this.groupByPage(), this.onAfterChangePage && this.onAfterChangePage.call(null, this, t + 1)), this.emitter.emit("after-page-change", e, t + 1)) }, e.prototype.changeResultsPerPage = function(t) { this.isEnabled() && !isNaN(t) && (this.resultsPerPageSlc.value = t, this.onChangeResultsPerPage()) }, e.prototype.onChangeResultsPerPage = function() {
                var t = this.tf;
                if (this.isEnabled()) { this.emitter.emit("before-page-length-change", t);
                    var e = this.resultsPerPageSlc,
                        i = e.selectedIndex,
                        s = this.pageSelectorType === f.SELECT ? this.pagingSlc.selectedIndex : parseInt(this.pagingSlc.value - 1, 10);
                    if (this.pagingLength = parseInt(e.options[i].value, 10), this.startPagingRow = this.pagingLength * s, !isNaN(this.pagingLength) && (this.startPagingRow >= t.nbFilterableRows && (this.startPagingRow = t.nbFilterableRows - this.pagingLength), this.setPagingInfo(), this.pageSelectorType === f.SELECT)) {
                        var n = this.pagingSlc.options.length - 1 <= s ? this.pagingSlc.options.length - 1 : s;
                        this.pagingSlc.options[n].selected = !0 }
                    this.emitter.emit("after-page-length-change", t, this.pagingLength) } }, e.prototype.resetPage = function() {
                var t = this.tf;
                if (this.isEnabled()) { this.emitter.emit("before-reset-page", t);
                    var e = t.feature("store").getPageNb(); "" !== e && this.changePage(e - 1), this.emitter.emit("after-reset-page", t, e) } }, e.prototype.resetPageLength = function() {
                var t = this.tf;
                if (this.isEnabled()) { this.emitter.emit("before-reset-page-length", t);
                    var e = t.feature("store").getPageLength(); "" !== e && (this.resultsPerPageSlc.options[e].selected = !0, this.changeResultsPerPage()), this.emitter.emit("after-reset-page-length", t, e) } }, e.prototype.destroy = function() {
                var t = this,
                    e = this.tf;
                if (this.initialized) {
                    var i = (0, h.elm)(this.prfxBtnNextSpan + e.id),
                        s = (0, h.elm)(this.prfxBtnPrevSpan + e.id),
                        n = (0, h.elm)(this.prfxBtnLastSpan + e.id),
                        r = (0, h.elm)(this.prfxBtnFirstSpan + e.id),
                        o = (0, h.elm)(this.prfxPgBeforeSpan + e.id),
                        l = (0, h.elm)(this.prfxPgAfterSpan + e.id),
                        a = (0, h.elm)(this.prfxPgSpan + e.id),
                        c = this.evt;
                    this.pagingSlc && (this.pageSelectorType === f.SELECT ? u["default"].remove(this.pagingSlc, "change", c.slcPagesChange) : this.pageSelectorType === f.INPUT && u["default"].remove(this.pagingSlc, "keypress", c._detectKey), (0, h.removeElm)(this.pagingSlc)), i && (u["default"].remove(i, "click", c.next), (0, h.removeElm)(i)), s && (u["default"].remove(s, "click", c.prev), (0, h.removeElm)(s)), n && (u["default"].remove(n, "click", c.last), (0, h.removeElm)(n)), r && (u["default"].remove(r, "click", c.first), (0, h.removeElm)(r)), o && (0, h.removeElm)(o), l && (0, h.removeElm)(l), a && (0, h.removeElm)(a), this.hasResultsPerPage && this.removeResultsPerPage(), this.emitter.off(["after-filtering"], function() {
                        return t.resetPagingInfo() }), this.emitter.off(["change-page"], function(e, i) {
                        return t.setPage(i) }), this.emitter.off(["change-page-results"], function(e, i) {
                        return t.changeResultsPerPage(i) }), this.pagingSlc = null, this.nbPages = 0, this.disable(), this.initialized = !1 } }, e }(a.Feature) }, function(t, e, i) {
        "use strict";

        function s(t) {
            return t && t.__esModule ? t : { "default": t } }

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function r(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e }

        function o(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
        }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.ClearButton = void 0;
        var l = i(10),
            a = i(3),
            h = i(1),
            c = s(h);
        e.ClearButton = function(t) {
            function e(i) { n(this, e);
                var s = r(this, t.call(this, i, "btnReset")),
                    o = s.config;
                return s.btnResetTgtId = o.btn_reset_target_id || null, s.btnResetEl = null, s.btnResetText = o.btn_reset_text || "Reset", s.btnResetTooltip = o.btn_reset_tooltip || "Clear filters", s.btnResetHtml = o.btn_reset_html || (i.enableIcons ? '<input type="button" value="" class="' + i.btnResetCssClass + '" title="' + s.btnResetTooltip + '" />' : null), s.prfxResetSpan = "resetspan_", s }
            return o(e, t), e.prototype.onClick = function() { this.isEnabled() && this.tf.clearFilters() }, e.prototype.init = function() {
                var t = this,
                    e = this.tf;
                if (!this.initialized) {
                    var i = (0, a.createElm)("span", ["id", this.prfxResetSpan + e.id]);
                    this.btnResetTgtId || e.setToolbar();
                    var s = this.btnResetTgtId ? (0, a.elm)(this.btnResetTgtId) : e.rDiv;
                    if (s.appendChild(i), this.btnResetHtml) { i.innerHTML = this.btnResetHtml;
                        var n = i.firstChild;
                        c["default"].add(n, "click", function() { t.onClick() }) } else {
                        var r = (0, a.createElm)("a", ["href", "javascript:voelm(0);"]);
                        r.className = e.btnResetCssClass, r.appendChild((0, a.createText)(this.btnResetText)), i.appendChild(r), c["default"].add(r, "click", function() { t.onClick() }) }
                    this.btnResetEl = i.firstChild, this.initialized = !0 } }, e.prototype.destroy = function() {
                var t = this.tf;
                if (this.initialized) {
                    var e = (0, a.elm)(this.prfxResetSpan + t.id);
                    e && (0, a.removeElm)(e), this.btnResetEl = null, this.initialized = !1 } }, e }(l.Feature)
    }, function(t, e, i) { "use strict";

        function s(t) {
            return t && t.__esModule ? t : { "default": t } }

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function r(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e }

        function o(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.Help = void 0;
        var l = i(10),
            a = i(3),
            h = i(1),
            c = s(h),
            p = i(11),
            u = "https://github.com/koalyptus/TableFilter/wiki/4.-Filter-operators",
            f = "http://koalyptus.github.io/TableFilter/";
        e.Help = function(t) {
            function e(i) { n(this, e);
                var s = r(this, t.call(this, i, "help")),
                    o = s.config;
                return s.tgtId = o.help_instructions_target_id || null, s.contTgtId = o.help_instructions_container_target_id || null, s.instrText = o.help_instructions_text ? o.help_instructions_text : 'Use the filters above each column to filter and limit table data. Advanced searches can be performed by using the following operators: <br /><b>&lt;</b>, <b>&lt;=</b>, <b>&gt;</b>, <b>&gt;=</b>, <b>=</b>, <b>*</b>, <b>!</b>, <b>{</b>, <b>}</b>, <b>||</b>,<b>&amp;&amp;</b>, <b>[empty]</b>, <b>[nonempty]</b>, <b>rgx:</b><br/><a href="' + u + '" target="_blank">Learn more</a><hr/>', s.instrHtml = o.help_instructions_html || null, s.btnText = o.help_instructions_btn_text || "?", s.btnHtml = o.help_instructions_btn_html || null, s.btnCssClass = o.help_instructions_btn_css_class || "helpBtn", s.contCssClass = o.help_instructions_container_css_class || "helpCont", s.btn = null, s.cont = null, s.defaultHtml = '<div class="helpFooter"><h4>TableFilter v' + i.version + '</h4><a href="' + f + '" target="_blank">' + f + "</a><br/><span>&copy;2015-" + i.year + ' Max Guglielmi</span><div align="center" style="margin-top:8px;"><a href="javascript:void(0);" class="close">Close</a></div></div>', s.prfxHelpSpan = "helpSpan_", s.prfxHelpDiv = "helpDiv_", s.emitter.on(["init-help"], function() {
                    return s.init() }), s }
            return o(e, t), e.prototype.init = function() {
                var t = this;
                if (!this.initialized) {
                    var e = this.tf,
                        i = (0, a.createElm)("span", ["id", this.prfxHelpSpan + e.id]),
                        s = (0, a.createElm)("div", ["id", this.prfxHelpDiv + e.id]);
                    this.tgtId || e.setToolbar();
                    var n = this.tgtId ? (0, a.elm)(this.tgtId) : e.rDiv;
                    n.appendChild(i);
                    var r = this.contTgtId ? (0, a.elm)(this.contTgtId) : i;
                    if (this.btnHtml) { i.innerHTML = this.btnHtml;
                        var o = i.firstChild;
                        c["default"].add(o, "click", function() {
                            return t.toggle() }), r.appendChild(s) } else { r.appendChild(s);
                        var l = (0, a.createElm)("a", ["href", "javascript:void(0);"]);
                        l.className = this.btnCssClass, l.appendChild((0, a.createText)(this.btnText)), i.appendChild(l), c["default"].add(l, "click", function() {
                            return t.toggle() }) }
                    this.instrHtml ? (this.contTgtId && r.appendChild(s), s.innerHTML = this.instrHtml, this.contTgtId || (s.className = this.contCssClass, c["default"].add(s, "dblclick", function() {
                        return t.toggle() }))) : (s.innerHTML = this.instrText, s.className = this.contCssClass, c["default"].add(s, "dblclick", function() {
                        return t.toggle() })), s.innerHTML += this.defaultHtml, c["default"].add(s, "click", function() {
                        return t.toggle() }), this.cont = s, this.btn = i, this.initialized = !0 } }, e.prototype.toggle = function() {
                if (this.enabled !== !1) {
                    var t = this.cont.style.display; "" === t || t === p.NONE ? this.cont.style.display = "inline" : this.cont.style.display = p.NONE } }, e.prototype.destroy = function() { this.initialized && ((0, a.removeElm)(this.btn), this.btn = null, this.cont && ((0, a.removeElm)(this.cont), this.cont = null, this.initialized = !1)) }, e }(l.Feature) }, function(t, e, i) { "use strict";

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function n(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.AlternateRows = void 0;
        var o = i(10),
            l = i(3);
        e.AlternateRows = function(t) {
            function e(i) { s(this, e);
                var r = n(this, t.call(this, i, "alternateRows")),
                    o = r.config;
                return r.evenCss = o.even_row_css_class || "even", r.oddCss = o.odd_row_css_class || "odd", r }
            return r(e, t), e.prototype.init = function() {
                var t = this;
                this.initialized || (this.processAll(), this.emitter.on(["row-processed", "row-paged"], function(e, i, s, n) {
                    return t.processRow(i, s, n) }), this.emitter.on(["column-sorted"], function() {
                    return t.processAll() }), this.initialized = !0) }, e.prototype.processAll = function() {
                if (this.isEnabled())
                    for (var t = this.tf, e = t.getValidRows(!0), i = 0 === e.length, s = i ? t.refRow : 0, n = i ? t.nbFilterableRows + s : e.length, r = 0, o = s; n > o; o++) {
                        var l = i ? o : e[o];
                        this.setRowBg(l, r), r++ } }, e.prototype.processRow = function(t, e, i) { i ? this.setRowBg(t, e) : this.removeRowBg(t) }, e.prototype.setRowBg = function(t, e) {
                if (this.isEnabled() && !isNaN(t)) {
                    var i = this.tf.tbl.rows,
                        s = isNaN(e) ? t : e;
                    this.removeRowBg(t), (0, l.addClass)(i[t], s % 2 ? this.evenCss : this.oddCss) } }, e.prototype.removeRowBg = function(t) {
                if (!isNaN(t)) {
                    var e = this.tf.tbl.rows;
                    (0, l.removeClass)(e[t], this.oddCss), (0, l.removeClass)(e[t], this.evenCss) } }, e.prototype.destroy = function() {
                var t = this;
                if (this.initialized) {
                    for (var e = this.tf.getRowsNb(!0), i = 0; e > i; i++) this.removeRowBg(i);
                    this.emitter.off(["row-processed", "row-paged"], function(e, i, s, n) {
                        return t.processRow(i, s, n) }), this.emitter.off(["column-sorted"], function() {
                        return t.processAll() }), this.initialized = !1 } }, e }(o.Feature) }, function(t, e, i) { "use strict";

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function n(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.NoResults = void 0;
        var o = i(10),
            l = i(3),
            a = i(4),
            h = i(11);
        e.NoResults = function(t) {
            function e(i) { s(this, e);
                var r = n(this, t.call(this, i, "noResults")),
                    o = r.config.no_results_message;
                return r.content = o.content || "No results", r.customContainer = o.custom_container || null, r.customContainerId = o.custom_container_id || null, r.isExternal = !(0, a.isEmpty)(r.customContainer) || !(0, a.isEmpty)(r.customContainerId), r.cssClass = o.css_class || "no-results", r.cont = null, r.onBeforeShowMsg = (0, a.isFn)(o.on_before_show_msg) ? o.on_before_show_msg : null, r.onAfterShowMsg = (0, a.isFn)(o.on_after_show_msg) ? o.on_after_show_msg : null, r.onBeforeHideMsg = (0, a.isFn)(o.on_before_hide_msg) ? o.on_before_hide_msg : null, r.onAfterHideMsg = (0, a.isFn)(o.on_after_hide_msg) ? o.on_after_hide_msg : null, r.prfxNoResults = "nores_", r }
            return r(e, t), e.prototype.init = function() {
                var t = this;
                if (!this.initialized) {
                    var e = this.tf,
                        i = this.customContainer || (0, l.elm)(this.customContainerId) || e.tbl,
                        s = (0, l.createElm)("div", ["id", this.prfxNoResults + e.id]);
                    s.className = this.cssClass, s.innerHTML = this.content, this.isExternal ? i.appendChild(s) : i.parentNode.insertBefore(s, i.nextSibling), this.cont = s, this.emitter.on(["after-filtering"], function() {
                        return t.toggle() }), this.initialized = !0, this.hide() } }, e.prototype.toggle = function() { this.tf.getValidRowsNb() > 0 ? this.hide() : this.show() }, e.prototype.show = function() { this.initialized && this.isEnabled() && (this.onBeforeShowMsg && this.onBeforeShowMsg.call(null, this.tf, this), this.setWidth(), this.cont.style.display = "block", this.onAfterShowMsg && this.onAfterShowMsg.call(null, this.tf, this)) }, e.prototype.hide = function() { this.initialized && this.isEnabled() && (this.onBeforeHideMsg && this.onBeforeHideMsg.call(null, this.tf, this), this.cont.style.display = h.NONE, this.onBeforeHideMsg && this.onBeforeHideMsg.call(null, this.tf, this)) }, e.prototype.setWidth = function() {
                if (this.initialized && !this.isExternal && this.isEnabled())
                    if (this.tf.gridLayout) {
                        var t = this.tf.feature("gridLayout");
                        this.cont.style.width = t.tblCont.clientWidth + "px" } else this.cont.style.width = this.tf.tbl.clientWidth + "px" }, e.prototype.destroy = function() {
                var t = this;
                this.initialized && ((0, l.removeElm)(this.cont), this.cont = null, this.emitter.off(["after-filtering"], function() {
                    return t.toggle() }), this.initialized = !1) }, e }(o.Feature) }, function(t, e, i) { "use strict";

        function s(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }

        function n(t, e) {
            if (!t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !e || "object" != typeof e && "function" != typeof e ? t : e }

        function r(t, e) {
            if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
            t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e) }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.State = void 0;
        var o = i(10),
            l = i(27),
            a = i(28),
            h = i(5),
            c = i(4);
        e.State = function(t) {
            function e(i) { s(this, e);
                var r = n(this, t.call(this, i, "state")),
                    o = r.config.state;
                return r.enableHash = o === !0 || (0, c.isArray)(o.types) && -1 !== o.types.indexOf("hash"), r.enableLocalStorage = (0, c.isArray)(o.types) && -1 !== o.types.indexOf("local_storage"), r.enableCookie = (0, c.isArray)(o.types) && -1 !== o.types.indexOf("cookie"), r.persistFilters = o.filters !== !1, r.persistPageNumber = Boolean(o.page_number), r.persistPageLength = Boolean(o.page_length), r.persistSort = Boolean(o.sort), r.persistColsVisibility = Boolean(o.columns_visibility), r.persistFiltersVisibility = Boolean(o.filters_visibility), r.cookieDuration = isNaN(o.cookie_duration) ? 87600 : parseInt(o.cookie_duration, 10), r.enableStorage = r.enableLocalStorage || r.enableCookie, r.hash = null, r.pageNb = null, r.pageLength = null, r.sort = null, r.hiddenCols = null, r.filtersVisibility = null, r.state = {}, r.prfxCol = "col_", r.pageNbKey = "page", r.pageLengthKey = "page_length", r.filtersVisKey = "filters_visibility", r }
            return r(e, t), e.prototype.init = function() {
                var t = this;
                this.initialized || (this.emitter.on(["after-filtering"], function() {
                    return t.update() }), this.emitter.on(["after-page-change", "after-clearing-filters"], function(e, i) {
                    return t.updatePage(i) }), this.emitter.on(["after-page-length-change"], function(e, i) {
                    return t.updatePageLength(i) }), this.emitter.on(["column-sorted"], function(e, i, s) {
                    return t.updateSort(i, s) }), this.emitter.on(["sort-initialized"], function() {
                    return t._syncSort() }), this.emitter.on(["columns-visibility-initialized"], function() {
                    return t._syncColsVisibility() }), this.emitter.on(["column-shown", "column-hidden"], function(e, i, s, n) {
                    return t.updateColsVisibility(n) }), this.emitter.on(["filters-visibility-initialized"], function() {
                    return t._syncFiltersVisibility() }), this.emitter.on(["filters-toggled"], function(e, i, s) {
                    return t.updateFiltersVisibility(s) }), this.enableHash && (this.hash = new l.Hash(this), this.hash.init()), this.enableStorage && (this.storage = new a.Storage(this), this.storage.init()), this.initialized = !0) }, e.prototype.update = function() {
                var t = this;
                if (this.isEnabled()) {
                    var e = this.state,
                        i = this.tf;
                    if (this.persistFilters) {
                        var s = i.getFiltersValue();
                        s.forEach(function(i, s) {
                            var n = "" + t.prfxCol + s;
                            (0, c.isString)(i) && (0, h.isEmpty)(i) ? e.hasOwnProperty(n) && (e[n].flt = void 0): (e[n] = e[n] || {}, e[n].flt = i) }) }
                    if (this.persistPageNumber && ((0, c.isNull)(this.pageNb) ? e[this.pageNbKey] = void 0 : e[this.pageNbKey] = this.pageNb), this.persistPageLength && ((0, c.isNull)(this.pageLength) ? e[this.pageLengthKey] = void 0 : e[this.pageLengthKey] = this.pageLength), this.persistSort && !(0, c.isNull)(this.sort)) { Object.keys(e).forEach(function(i) {-1 !== i.indexOf(t.prfxCol) && e[i] && (e[i].sort = void 0) });
                        var n = "" + this.prfxCol + this.sort.column;
                        e[n] = e[n] || {}, e[n].sort = { descending: this.sort.descending } }
                    this.persistColsVisibility && ((0, c.isNull)(this.hiddenCols) || (Object.keys(e).forEach(function(i) {-1 !== i.indexOf(t.prfxCol) && e[i] && (e[i].hidden = void 0) }), this.hiddenCols.forEach(function(i) {
                        var s = "" + t.prfxCol + i;
                        e[s] = e[s] || {}, e[s].hidden = !0 }))), this.persistFiltersVisibility && ((0, c.isNull)(this.filtersVisibility) ? e[this.filtersVisKey] = void 0 : e[this.filtersVisKey] = this.filtersVisibility), this.emitter.emit("state-changed", i, e) } }, e.prototype.updatePage = function(t) { this.pageNb = t, this.update() }, e.prototype.updatePageLength = function(t) { this.pageLength = t, this.update() }, e.prototype.updateSort = function(t, e) { this.sort = { column: t, descending: e }, this.update() }, e.prototype.updateColsVisibility = function(t) { this.hiddenCols = t, this.update() }, e.prototype.updateFiltersVisibility = function(t) { this.filtersVisibility = t, this.update() }, e.prototype.override = function(t) { this.state = t }, e.prototype.sync = function() {
                var t = this.state,
                    e = this.tf;
                if (this._syncFilters(), this.persistPageNumber) {
                    var i = t[this.pageNbKey];
                    this.emitter.emit("change-page", e, i) }
                if (this.persistPageLength) {
                    var s = t[this.pageLengthKey];
                    this.emitter.emit("change-page-results", e, s) }
                this._syncSort(), this._syncColsVisibility(), this._syncFiltersVisibility() }, e.prototype.overrideAndSync = function(t) { this.disable(), this.override(t), this.sync(), this.enable() }, e.prototype._syncFilters = function() {
                var t = this;
                if (this.persistFilters) {
                    var e = this.state,
                        i = this.tf;
                    Object.keys(e).forEach(function(s) {
                        if (-1 !== s.indexOf(t.prfxCol)) {
                            var n = parseInt(s.replace(t.prfxCol, ""), 10),
                                r = e[s].flt;
                            i.setFilterValue(n, r) } }), i.filter() } }, e.prototype._syncSort = function() {
                var t = this;
                if (this.persistSort) {
                    var e = this.state,
                        i = this.tf;
                    Object.keys(e).forEach(function(s) {
                        if (-1 !== s.indexOf(t.prfxCol)) {
                            var n = parseInt(s.replace(t.prfxCol, ""), 10);
                            if (!(0, c.isUndef)(e[s].sort)) {
                                var r = e[s].sort;
                                t.emitter.emit("sort", i, n, r.descending) } } }) } }, e.prototype._syncColsVisibility = function() {
                var t = this;
                if (this.persistColsVisibility) {
                    var e = this.state,
                        i = this.tf,
                        s = [];
                    Object.keys(e).forEach(function(i) {
                        if (-1 !== i.indexOf(t.prfxCol)) {
                            var n = parseInt(i.replace(t.prfxCol, ""), 10);
                            (0, c.isUndef)(e[i].hidden) || s.push(n) } }), s.forEach(function(e) { t.emitter.emit("hide-column", i, e) }) } }, e.prototype._syncFiltersVisibility = function() {
                if (this.persistFiltersVisibility) {
                    var t = this.state,
                        e = this.tf,
                        i = t[this.filtersVisKey];
                    this.filtersVisibility = i, this.emitter.emit("show-filters", e, i) } }, e.prototype.destroy = function() {
                var t = this;
                this.initialized && (this.state = {}, this.emitter.off(["after-filtering"], function() {
                    return t.update() }), this.emitter.off(["after-page-change", "after-clearing-filters"], function(e, i) {
                    return t.updatePage(i) }), this.emitter.off(["after-page-length-change"], function(e, i) {
                    return t.updatePageLength(i) }), this.emitter.off(["column-sorted"], function(e, i, s) {
                    return t.updateSort(i, s) }), this.emitter.off(["sort-initialized"], function() {
                    return t._syncSort() }), this.emitter.off(["columns-visibility-initialized"], function() {
                    return t._syncColsVisibility() }), this.emitter.off(["column-shown", "column-hidden"], function(e, i, s, n) {
                    return t.updateColsVisibility(n) }), this.emitter.off(["filters-visibility-initialized"], function() {
                    return t._syncFiltersVisibility() }), this.emitter.off(["filters-toggled"], function(e, i, s) {
                    return t.updateFiltersVisibility(s) }), this.enableHash && (this.hash.destroy(), this.hash = null), this.enableStorage && (this.storage.destroy(), this.storage = null), this.initialized = !1) }, e }(o.Feature) }, function(t, e, i) { "use strict";

        function s(t) {
            return t && t.__esModule ? t : { "default": t } }

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.Hash = e.hasHashChange = void 0;
        var r = i(1),
            o = s(r),
            l = i(2),
            a = l.root.JSON,
            h = l.root.location,
            c = l.root.decodeURIComponent,
            p = e.hasHashChange = function() {
                var t = l.root.documentMode;
                return "onhashchange" in l.root && (void 0 === t || t > 7) };
        e.Hash = function() {
            function t(e) { n(this, t), this.state = e, this.lastHash = null, this.emitter = e.emitter }
            return t.prototype.init = function() {
                var t = this;
                p() && (this.lastHash = h.hash, this.emitter.on(["state-changed"], function(e, i) {
                    return t.update(i) }), this.emitter.on(["initialized"], function() {
                    return t.sync() }), o["default"].add(l.root, "hashchange", function() {
                    return t.sync() })) }, t.prototype.update = function(t) {
                var e = "#" + a.stringify(t);
                this.lastHash !== e && (h.hash = e, this.lastHash = e) }, t.prototype.parse = function(t) {
                return -1 === t.indexOf("#") ? null : (t = t.substr(1), a.parse(c(t))) }, t.prototype.sync = function() {
                var t = this.parse(h.hash);
                t && this.state.overrideAndSync(t) }, t.prototype.destroy = function() {
                var t = this;
                this.emitter.off(["state-changed"], function(e, i) {
                    return t.update(i) }), this.emitter.off(["initialized"], function() {
                    return t.sync() }), o["default"].remove(l.root, "hashchange", function() {
                    return t.sync() }), this.state = null, this.lastHash = null, this.emitter = null }, t }() }, function(t, e, i) { "use strict";

        function s(t) {
            return t && t.__esModule ? t : { "default": t } }

        function n(t, e) {
            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") }
        Object.defineProperty(e, "__esModule", { value: !0 }), e.Storage = e.hasStorage = void 0;
        var r = i(29),
            o = s(r),
            l = i(2),
            a = l.root.JSON,
            h = l.root.localStorage,
            c = l.root.location,
            p = e.hasStorage = function() {
                return "Storage" in l.root };
        e.Storage = function() {
            function t(e) { n(this, t), this.state = e, this.tf = e.tf, this.enableLocalStorage = e.enableLocalStorage && p(), this.enableCookie = e.enableCookie && !this.enableLocalStorage, this.emitter = e.emitter, this.duration = e.cookieDuration }
            return t.prototype.init = function() {
                var t = this;
                this.emitter.on(["state-changed"], function(e, i) {
                    return t.save(i) }), this.emitter.on(["initialized"], function() {
                    return t.sync() }) }, t.prototype.save = function(t) { this.enableLocalStorage ? h[this.getKey()] = a.stringify(t) : o["default"].write(this.getKey(), a.stringify(t), this.duration) }, t.prototype.retrieve = function() {
                var t = null;
                return t = this.enableLocalStorage ? h[this.getKey()] : o["default"].read(this.getKey()), t ? a.parse(t) : null }, t.prototype.remove = function() { this.enableLocalStorage ? h.removeItem(this.getKey()) : o["default"].remove(this.getKey()) }, t.prototype.sync = function() {
                var t = this.retrieve();
                t && this.state.overrideAndSync(t) }, t.prototype.getKey = function() {
                return a.stringify({ key: this.tf.prfxTf + "_" + this.tf.id, path: c.pathname }) }, t.prototype.destroy = function() {
                var t = this;
                this.emitter.off(["state-changed"], function(e, i) {
                    return t.save(i) }), this.emitter.off(["initialized"], function() {
                    return t.sync() }), this.remove(), this.state = null, this.emitter = null }, t }() }, function(t, e) { "use strict";
        Object.defineProperty(e, "__esModule", { value: !0 }), e["default"] = { write: function(t, e, i) {
                var s = "";
                i && (s = new Date((new Date).getTime() + 36e5 * i), s = "; expires=" + s.toGMTString()), document.cookie = t + "=" + escape(e) + s }, read: function(t) {
                var e = "",
                    i = t + "=";
                if (document.cookie.length > 0) {
                    var s = document.cookie,
                        n = s.indexOf(i);
                    if (-1 !== n) { n += i.length;
                        var r = s.indexOf(";", n); - 1 === r && (r = s.length), e = unescape(s.substring(n, r)) } }
                return e }, remove: function(t) { this.write(t, "", -1) }, valueToArray: function(t, e) { e || (e = ",");
                var i = this.read(t),
                    s = i.split(e);
                return s }, getValueByIndex: function(t, e, i) { i || (i = ",");
                var s = this.valueToArray(t, i);
                return s[e] } } }])
});
