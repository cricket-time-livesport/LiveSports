"undefined" != typeof window && function (e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.Hls = t() : e.Hls = t()
}(this, (function () {
    return function (e) {
        var t = {};
        function r(i) {
            if (t[i])
                return t[i].exports;
            var a = t[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return e[i].call(a.exports, a, a.exports, r),
                a.l = !0,
                a.exports
        }
        return r.m = e,
            r.c = t,
            r.d = function (e, t, i) {
                r.o(e, t) || Object.defineProperty(e, t, {
                    enumerable: !0,
                    get: i
                })
            }
            ,
            r.r = function (e) {
                "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }),
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    })
            }
            ,
            r.t = function (e, t) {
                if (1 & t && (e = r(e)),
                    8 & t)
                    return e;
                if (4 & t && "object" == typeof e && e && e.__esModule)
                    return e;
                var i = Object.create(null);
                if (r.r(i),
                    Object.defineProperty(i, "default", {
                        enumerable: !0,
                        value: e
                    }),
                    2 & t && "string" != typeof e)
                    for (var a in e)
                        r.d(i, a, function (t) {
                            return e[t]
                        }
                            .bind(null, a));
                return i
            }
            ,
            r.n = function (e) {
                var t = e && e.__esModule ? function () {
                    return e.default
                }
                    : function () {
                        return e
                    }
                    ;
                return r.d(t, "a", t),
                    t
            }
            ,
            r.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            ,
            r.p = "/dist/",
            r(r.s = 13)
    }([function (e, t, r) {
        "use strict";
        r.d(t, "a", (function () {
            return u
        }
        )),
            r.d(t, "b", (function () {
                return c
            }
            ));
        var i = r(5);
        function a() { }
        var n = {
            trace: a,
            debug: a,
            log: a,
            warn: a,
            info: a,
            error: a
        }
            , s = n;
        function o(e, t) {
            return t = "[" + e + "] > " + t
        }
        var l = Object(i.a)();
        function d(e) {
            var t = l.console[e];
            return t ? function () {
                for (var r = arguments.length, i = new Array(r), a = 0; a < r; a++)
                    i[a] = arguments[a];
                i[0] && (i[0] = o(e, i[0])),
                    t.apply(l.console, i)
            }
                : a
        }
        var u = function (e) {
            if (l.console && !0 === e || "object" == typeof e) {
                !function (e) {
                    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                        r[i - 1] = arguments[i];
                    r.forEach((function (t) {
                        s[t] = e[t] ? e[t].bind(e) : d(t)
                    }
                    ))
                }(e, "debug", "log", "info", "warn", "error");
                try {
                    s.log()
                } catch (e) {
                    s = n
                }
            } else
                s = n
        }
            , c = s
    }
        , function (e, t, r) {
            "use strict";
            t.a = {
                MEDIA_ATTACHING: "hlsMediaAttaching",
                MEDIA_ATTACHED: "hlsMediaAttached",
                MEDIA_DETACHING: "hlsMediaDetaching",
                MEDIA_DETACHED: "hlsMediaDetached",
                BUFFER_RESET: "hlsBufferReset",
                BUFFER_CODECS: "hlsBufferCodecs",
                BUFFER_CREATED: "hlsBufferCreated",
                BUFFER_APPENDING: "hlsBufferAppending",
                BUFFER_APPENDED: "hlsBufferAppended",
                BUFFER_EOS: "hlsBufferEos",
                BUFFER_FLUSHING: "hlsBufferFlushing",
                BUFFER_FLUSHED: "hlsBufferFlushed",
                MANIFEST_LOADING: "hlsManifestLoading",
                MANIFEST_LOADED: "hlsManifestLoaded",
                MANIFEST_PARSED: "hlsManifestParsed",
                LEVEL_SWITCHING: "hlsLevelSwitching",
                LEVEL_SWITCHED: "hlsLevelSwitched",
                LEVEL_LOADING: "hlsLevelLoading",
                LEVEL_LOADED: "hlsLevelLoaded",
                LEVEL_UPDATED: "hlsLevelUpdated",
                LEVEL_PTS_UPDATED: "hlsLevelPtsUpdated",
                LEVELS_UPDATED: "hlsLevelsUpdated",
                AUDIO_TRACKS_UPDATED: "hlsAudioTracksUpdated",
                AUDIO_TRACK_SWITCHING: "hlsAudioTrackSwitching",
                AUDIO_TRACK_SWITCHED: "hlsAudioTrackSwitched",
                AUDIO_TRACK_LOADING: "hlsAudioTrackLoading",
                AUDIO_TRACK_LOADED: "hlsAudioTrackLoaded",
                SUBTITLE_TRACKS_UPDATED: "hlsSubtitleTracksUpdated",
                SUBTITLE_TRACK_SWITCH: "hlsSubtitleTrackSwitch",
                SUBTITLE_TRACK_LOADING: "hlsSubtitleTrackLoading",
                SUBTITLE_TRACK_LOADED: "hlsSubtitleTrackLoaded",
                SUBTITLE_FRAG_PROCESSED: "hlsSubtitleFragProcessed",
                CUES_PARSED: "hlsCuesParsed",
                NON_NATIVE_TEXT_TRACKS_FOUND: "hlsNonNativeTextTracksFound",
                INIT_PTS_FOUND: "hlsInitPtsFound",
                FRAG_LOADING: "hlsFragLoading",
                FRAG_LOAD_PROGRESS: "hlsFragLoadProgress",
                FRAG_LOAD_EMERGENCY_ABORTED: "hlsFragLoadEmergencyAborted",
                FRAG_LOADED: "hlsFragLoaded",
                FRAG_DECRYPTED: "hlsFragDecrypted",
                FRAG_PARSING_INIT_SEGMENT: "hlsFragParsingInitSegment",
                FRAG_PARSING_USERDATA: "hlsFragParsingUserdata",
                FRAG_PARSING_METADATA: "hlsFragParsingMetadata",
                FRAG_PARSING_DATA: "hlsFragParsingData",
                FRAG_PARSED: "hlsFragParsed",
                FRAG_BUFFERED: "hlsFragBuffered",
                FRAG_CHANGED: "hlsFragChanged",
                FPS_DROP: "hlsFpsDrop",
                FPS_DROP_LEVEL_CAPPING: "hlsFpsDropLevelCapping",
                ERROR: "hlsError",
                DESTROYING: "hlsDestroying",
                KEY_LOADING: "hlsKeyLoading",
                KEY_LOADED: "hlsKeyLoaded",
                STREAM_STATE_TRANSITION: "hlsStreamStateTransition",
                LIVE_BACK_BUFFER_REACHED: "hlsLiveBackBufferReached"
            }
        }
        , function (e, t, r) {
            "use strict";
            var i, a;
            r.d(t, "b", (function () {
                return i
            }
            )),
                r.d(t, "a", (function () {
                    return a
                }
                )),
                function (e) {
                    e.NETWORK_ERROR = "networkError",
                        e.MEDIA_ERROR = "mediaError",
                        e.KEY_SYSTEM_ERROR = "keySystemError",
                        e.MUX_ERROR = "muxError",
                        e.OTHER_ERROR = "otherError"
                }(i || (i = {})),
                function (e) {
                    e.KEY_SYSTEM_NO_KEYS = "keySystemNoKeys",
                        e.KEY_SYSTEM_NO_ACCESS = "keySystemNoAccess",
                        e.KEY_SYSTEM_NO_SESSION = "keySystemNoSession",
                        e.KEY_SYSTEM_LICENSE_REQUEST_FAILED = "keySystemLicenseRequestFailed",
                        e.KEY_SYSTEM_NO_INIT_DATA = "keySystemNoInitData",
                        e.MANIFEST_LOAD_ERROR = "manifestLoadError",
                        e.MANIFEST_LOAD_TIMEOUT = "manifestLoadTimeOut",
                        e.MANIFEST_PARSING_ERROR = "manifestParsingError",
                        e.MANIFEST_INCOMPATIBLE_CODECS_ERROR = "manifestIncompatibleCodecsError",
                        e.LEVEL_EMPTY_ERROR = "levelEmptyError",
                        e.LEVEL_LOAD_ERROR = "levelLoadError",
                        e.LEVEL_LOAD_TIMEOUT = "levelLoadTimeOut",
                        e.LEVEL_SWITCH_ERROR = "levelSwitchError",
                        e.AUDIO_TRACK_LOAD_ERROR = "audioTrackLoadError",
                        e.AUDIO_TRACK_LOAD_TIMEOUT = "audioTrackLoadTimeOut",
                        e.FRAG_LOAD_ERROR = "fragLoadError",
                        e.FRAG_LOAD_TIMEOUT = "fragLoadTimeOut",
                        e.FRAG_DECRYPT_ERROR = "fragDecryptError",
                        e.FRAG_PARSING_ERROR = "fragParsingError",
                        e.REMUX_ALLOC_ERROR = "remuxAllocError",
                        e.KEY_LOAD_ERROR = "keyLoadError",
                        e.KEY_LOAD_TIMEOUT = "keyLoadTimeOut",
                        e.BUFFER_ADD_CODEC_ERROR = "bufferAddCodecError",
                        e.BUFFER_APPEND_ERROR = "bufferAppendError",
                        e.BUFFER_APPENDING_ERROR = "bufferAppendingError",
                        e.BUFFER_STALLED_ERROR = "bufferStalledError",
                        e.BUFFER_FULL_ERROR = "bufferFullError",
                        e.BUFFER_SEEK_OVER_HOLE = "bufferSeekOverHole",
                        e.BUFFER_NUDGE_ON_STALL = "bufferNudgeOnStall",
                        e.INTERNAL_EXCEPTION = "internalException"
                }(a || (a = {}))
        }
        , function (e, t, r) {
            "use strict";
            r.d(t, "a", (function () {
                return i
            }
            ));
            var i = Number.isFinite || function (e) {
                return "number" == typeof e && isFinite(e)
            }
                ;
            Number.MAX_SAFE_INTEGER
        }
        , function (e, t, r) {
            "use strict";
            r.d(t, "b", (function () {
                return o
            }
            ));
            var i, a = r(5), n = function () {
                function e() { }
                return e.isHeader = function (e, t) {
                    return t + 10 <= e.length && 73 === e[t] && 68 === e[t + 1] && 51 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128
                }
                    ,
                    e.isFooter = function (e, t) {
                        return t + 10 <= e.length && 51 === e[t] && 68 === e[t + 1] && 73 === e[t + 2] && e[t + 3] < 255 && e[t + 4] < 255 && e[t + 6] < 128 && e[t + 7] < 128 && e[t + 8] < 128 && e[t + 9] < 128
                    }
                    ,
                    e.getID3Data = function (t, r) {
                        for (var i = r, a = 0; e.isHeader(t, r);) {
                            a += 10,
                                a += e._readSize(t, r + 6),
                                e.isFooter(t, r + 10) && (a += 10),
                                r += a
                        }
                        if (a > 0)
                            return t.subarray(i, i + a)
                    }
                    ,
                    e._readSize = function (e, t) {
                        var r = 0;
                        return r = (127 & e[t]) << 21,
                            r |= (127 & e[t + 1]) << 14,
                            r |= (127 & e[t + 2]) << 7,
                            r |= 127 & e[t + 3]
                    }
                    ,
                    e.getTimeStamp = function (t) {
                        for (var r = e.getID3Frames(t), i = 0; i < r.length; i++) {
                            var a = r[i];
                            if (e.isTimeStampFrame(a))
                                return e._readTimeStamp(a)
                        }
                    }
                    ,
                    e.isTimeStampFrame = function (e) {
                        return e && "PRIV" === e.key && "com.apple.streaming.transportStreamTimestamp" === e.info
                    }
                    ,
                    e._getFrameData = function (t) {
                        var r = String.fromCharCode(t[0], t[1], t[2], t[3])
                            , i = e._readSize(t, 4);
                        return {
                            type: r,
                            size: i,
                            data: t.subarray(10, 10 + i)
                        }
                    }
                    ,
                    e.getID3Frames = function (t) {
                        for (var r = 0, i = []; e.isHeader(t, r);) {
                            for (var a = e._readSize(t, r + 6), n = (r += 10) + a; r + 8 < n;) {
                                var s = e._getFrameData(t.subarray(r))
                                    , o = e._decodeFrame(s);
                                o && i.push(o),
                                    r += s.size + 10
                            }
                            e.isFooter(t, r) && (r += 10)
                        }
                        return i
                    }
                    ,
                    e._decodeFrame = function (t) {
                        return "PRIV" === t.type ? e._decodePrivFrame(t) : "T" === t.type[0] ? e._decodeTextFrame(t) : "W" === t.type[0] ? e._decodeURLFrame(t) : void 0
                    }
                    ,
                    e._readTimeStamp = function (e) {
                        if (8 === e.data.byteLength) {
                            var t = new Uint8Array(e.data)
                                , r = 1 & t[3]
                                , i = (t[4] << 23) + (t[5] << 15) + (t[6] << 7) + t[7];
                            return i /= 45,
                                r && (i += 47721858.84),
                                Math.round(i)
                        }
                    }
                    ,
                    e._decodePrivFrame = function (t) {
                        if (!(t.size < 2)) {
                            var r = e._utf8ArrayToStr(t.data, !0)
                                , i = new Uint8Array(t.data.subarray(r.length + 1));
                            return {
                                key: t.type,
                                info: r,
                                data: i.buffer
                            }
                        }
                    }
                    ,
                    e._decodeTextFrame = function (t) {
                        if (!(t.size < 2)) {
                            if ("TXXX" === t.type) {
                                var r = 1
                                    , i = e._utf8ArrayToStr(t.data.subarray(r), !0);
                                r += i.length + 1;
                                var a = e._utf8ArrayToStr(t.data.subarray(r));
                                return {
                                    key: t.type,
                                    info: i,
                                    data: a
                                }
                            }
                            var n = e._utf8ArrayToStr(t.data.subarray(1));
                            return {
                                key: t.type,
                                data: n
                            }
                        }
                    }
                    ,
                    e._decodeURLFrame = function (t) {
                        if ("WXXX" === t.type) {
                            if (t.size < 2)
                                return;
                            var r = 1
                                , i = e._utf8ArrayToStr(t.data.subarray(r), !0);
                            r += i.length + 1;
                            var a = e._utf8ArrayToStr(t.data.subarray(r));
                            return {
                                key: t.type,
                                info: i,
                                data: a
                            }
                        }
                        var n = e._utf8ArrayToStr(t.data);
                        return {
                            key: t.type,
                            data: n
                        }
                    }
                    ,
                    e._utf8ArrayToStr = function (e, t) {
                        void 0 === t && (t = !1);
                        var r = s();
                        if (r) {
                            var i = r.decode(e);
                            if (t) {
                                var a = i.indexOf("\0");
                                return -1 !== a ? i.substring(0, a) : i
                            }
                            return i.replace(/\0/g, "")
                        }
                        for (var n, o, l, d = e.length, u = "", c = 0; c < d;) {
                            if (0 === (n = e[c++]) && t)
                                return u;
                            if (0 !== n && 3 !== n)
                                switch (n >> 4) {
                                    case 0:
                                    case 1:
                                    case 2:
                                    case 3:
                                    case 4:
                                    case 5:
                                    case 6:
                                    case 7:
                                        u += String.fromCharCode(n);
                                        break;
                                    case 12:
                                    case 13:
                                        o = e[c++],
                                            u += String.fromCharCode((31 & n) << 6 | 63 & o);
                                        break;
                                    case 14:
                                        o = e[c++],
                                            l = e[c++],
                                            u += String.fromCharCode((15 & n) << 12 | (63 & o) << 6 | (63 & l) << 0)
                                }
                        }
                        return u
                    }
                    ,
                    e
            }();
            function s() {
                var e = Object(a.a)();
                return i || void 0 === e.TextDecoder || (i = new e.TextDecoder("utf-8")),
                    i
            }
            var o = n._utf8ArrayToStr;
            t.a = n
        }
        , function (e, t, r) {
            "use strict";
            function i() {
                return "undefined" == typeof window ? self : window
            }
            r.d(t, "a", (function () {
                return i
            }
            ))
        }
        , function (e, t, r) {
            var i, a, n, s, o;
            i = /^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/?#]*)?((?:[^\/?#]*\/)*[^;?#]*)?(;[^?#]*)?(\?[^#]*)?(#.*)?$/,
                a = /^([^\/?#]*)(.*)$/,
                n = /(?:\/|^)\.(?=\/)/g,
                s = /(?:\/|^)\.\.\/(?!\.\.\/)[^\/]*(?=\/)/g,
                o = {
                    buildAbsoluteURL: function (e, t, r) {
                        if (r = r || {},
                            e = e.trim(),
                            !(t = t.trim())) {
                            if (!r.alwaysNormalize)
                                return e;
                            var i = o.parseURL(e);
                            if (!i)
                                throw new Error("Error trying to parse base URL.");
                            return i.path = o.normalizePath(i.path),
                                o.buildURLFromParts(i)
                        }
                        var n = o.parseURL(t);
                        if (!n)
                            throw new Error("Error trying to parse relative URL.");
                        if (n.scheme)
                            return r.alwaysNormalize ? (n.path = o.normalizePath(n.path),
                                o.buildURLFromParts(n)) : t;
                        var s = o.parseURL(e);
                        if (!s)
                            throw new Error("Error trying to parse base URL.");
                        if (!s.netLoc && s.path && "/" !== s.path[0]) {
                            var l = a.exec(s.path);
                            s.netLoc = l[1],
                                s.path = l[2]
                        }
                        s.netLoc && !s.path && (s.path = "/");
                        var d = {
                            scheme: s.scheme,
                            netLoc: n.netLoc,
                            path: null,
                            params: n.params,
                            query: n.query,
                            fragment: n.fragment
                        };
                        if (!n.netLoc && (d.netLoc = s.netLoc,
                            "/" !== n.path[0]))
                            if (n.path) {
                                var u = s.path
                                    , c = u.substring(0, u.lastIndexOf("/") + 1) + n.path;
                                d.path = o.normalizePath(c)
                            } else
                                d.path = s.path,
                                    n.params || (d.params = s.params,
                                        n.query || (d.query = s.query));
                        return null === d.path && (d.path = r.alwaysNormalize ? o.normalizePath(n.path) : n.path),
                            o.buildURLFromParts(d)
                    },
                    parseURL: function (e) {
                        var t = i.exec(e);
                        return t ? {
                            scheme: t[1] || "",
                            netLoc: t[2] || "",
                            path: t[3] || "",
                            params: t[4] || "",
                            query: t[5] || "",
                            fragment: t[6] || ""
                        } : null
                    },
                    normalizePath: function (e) {
                        for (e = e.split("").reverse().join("").replace(n, ""); e.length !== (e = e.replace(s, "")).length;)
                            ;
                        return e.split("").reverse().join("")
                    },
                    buildURLFromParts: function (e) {
                        return e.scheme + e.netLoc + e.path + e.params + e.query + e.fragment
                    }
                },
                e.exports = o
        }
        , function (e, t, r) {
            "use strict";
            var i = function () {
                function e(e, t) {
                    this.subtle = e,
                        this.aesIV = t
                }
                return e.prototype.decrypt = function (e, t) {
                    return this.subtle.decrypt({
                        name: "AES-CBC",
                        iv: this.aesIV
                    }, t, e)
                }
                    ,
                    e
            }()
                , a = function () {
                    function e(e, t) {
                        this.subtle = e,
                            this.key = t
                    }
                    return e.prototype.expandKey = function () {
                        return this.subtle.importKey("raw", this.key, {
                            name: "AES-CBC"
                        }, !1, ["encrypt", "decrypt"])
                    }
                        ,
                        e
                }();
            var n = function () {
                function e() {
                    this.rcon = [0, 1, 2, 4, 8, 16, 32, 64, 128, 27, 54],
                        this.subMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)],
                        this.invSubMix = [new Uint32Array(256), new Uint32Array(256), new Uint32Array(256), new Uint32Array(256)],
                        this.sBox = new Uint32Array(256),
                        this.invSBox = new Uint32Array(256),
                        this.key = new Uint32Array(0),
                        this.initTable()
                }
                var t = e.prototype;
                return t.uint8ArrayToUint32Array_ = function (e) {
                    for (var t = new DataView(e), r = new Uint32Array(4), i = 0; i < 4; i++)
                        r[i] = t.getUint32(4 * i);
                    return r
                }
                    ,
                    t.initTable = function () {
                        var e = this.sBox
                            , t = this.invSBox
                            , r = this.subMix
                            , i = r[0]
                            , a = r[1]
                            , n = r[2]
                            , s = r[3]
                            , o = this.invSubMix
                            , l = o[0]
                            , d = o[1]
                            , u = o[2]
                            , c = o[3]
                            , h = new Uint32Array(256)
                            , f = 0
                            , g = 0
                            , p = 0;
                        for (p = 0; p < 256; p++)
                            h[p] = p < 128 ? p << 1 : p << 1 ^ 283;
                        for (p = 0; p < 256; p++) {
                            var v = g ^ g << 1 ^ g << 2 ^ g << 3 ^ g << 4;
                            v = v >>> 8 ^ 255 & v ^ 99,
                                e[f] = v,
                                t[v] = f;
                            var m = h[f]
                                , y = h[m]
                                , b = h[y]
                                , T = 257 * h[v] ^ 16843008 * v;
                            i[f] = T << 24 | T >>> 8,
                                a[f] = T << 16 | T >>> 16,
                                n[f] = T << 8 | T >>> 24,
                                s[f] = T,
                                T = 16843009 * b ^ 65537 * y ^ 257 * m ^ 16843008 * f,
                                l[v] = T << 24 | T >>> 8,
                                d[v] = T << 16 | T >>> 16,
                                u[v] = T << 8 | T >>> 24,
                                c[v] = T,
                                f ? (f = m ^ h[h[h[b ^ m]]],
                                    g ^= h[h[g]]) : f = g = 1
                        }
                    }
                    ,
                    t.expandKey = function (e) {
                        for (var t = this.uint8ArrayToUint32Array_(e), r = !0, i = 0; i < t.length && r;)
                            r = t[i] === this.key[i],
                                i++;
                        if (!r) {
                            this.key = t;
                            var a = this.keySize = t.length;
                            if (4 !== a && 6 !== a && 8 !== a)
                                throw new Error("Invalid aes key size=" + a);
                            var n, s, o, l, d = this.ksRows = 4 * (a + 6 + 1), u = this.keySchedule = new Uint32Array(d), c = this.invKeySchedule = new Uint32Array(d), h = this.sBox, f = this.rcon, g = this.invSubMix, p = g[0], v = g[1], m = g[2], y = g[3];
                            for (n = 0; n < d; n++)
                                n < a ? o = u[n] = t[n] : (l = o,
                                    n % a == 0 ? (l = h[(l = l << 8 | l >>> 24) >>> 24] << 24 | h[l >>> 16 & 255] << 16 | h[l >>> 8 & 255] << 8 | h[255 & l],
                                        l ^= f[n / a | 0] << 24) : a > 6 && n % a == 4 && (l = h[l >>> 24] << 24 | h[l >>> 16 & 255] << 16 | h[l >>> 8 & 255] << 8 | h[255 & l]),
                                    u[n] = o = (u[n - a] ^ l) >>> 0);
                            for (s = 0; s < d; s++)
                                n = d - s,
                                    l = 3 & s ? u[n] : u[n - 4],
                                    c[s] = s < 4 || n <= 4 ? l : p[h[l >>> 24]] ^ v[h[l >>> 16 & 255]] ^ m[h[l >>> 8 & 255]] ^ y[h[255 & l]],
                                    c[s] = c[s] >>> 0
                        }
                    }
                    ,
                    t.networkToHostOrderSwap = function (e) {
                        return e << 24 | (65280 & e) << 8 | (16711680 & e) >> 8 | e >>> 24
                    }
                    ,
                    t.decrypt = function (e, t, r, i) {
                        for (var a, n, s, o, l, d, u, c, h, f, g, p, v, m, y, b, T, E = this.keySize + 6, S = this.invKeySchedule, _ = this.invSBox, R = this.invSubMix, A = R[0], k = R[1], w = R[2], L = R[3], D = this.uint8ArrayToUint32Array_(r), O = D[0], C = D[1], I = D[2], P = D[3], x = new Int32Array(e), M = new Int32Array(x.length), F = this.networkToHostOrderSwap; t < x.length;) {
                            for (h = F(x[t]),
                                f = F(x[t + 1]),
                                g = F(x[t + 2]),
                                p = F(x[t + 3]),
                                l = h ^ S[0],
                                d = p ^ S[1],
                                u = g ^ S[2],
                                c = f ^ S[3],
                                v = 4,
                                m = 1; m < E; m++)
                                a = A[l >>> 24] ^ k[d >> 16 & 255] ^ w[u >> 8 & 255] ^ L[255 & c] ^ S[v],
                                    n = A[d >>> 24] ^ k[u >> 16 & 255] ^ w[c >> 8 & 255] ^ L[255 & l] ^ S[v + 1],
                                    s = A[u >>> 24] ^ k[c >> 16 & 255] ^ w[l >> 8 & 255] ^ L[255 & d] ^ S[v + 2],
                                    o = A[c >>> 24] ^ k[l >> 16 & 255] ^ w[d >> 8 & 255] ^ L[255 & u] ^ S[v + 3],
                                    l = a,
                                    d = n,
                                    u = s,
                                    c = o,
                                    v += 4;
                            a = _[l >>> 24] << 24 ^ _[d >> 16 & 255] << 16 ^ _[u >> 8 & 255] << 8 ^ _[255 & c] ^ S[v],
                                n = _[d >>> 24] << 24 ^ _[u >> 16 & 255] << 16 ^ _[c >> 8 & 255] << 8 ^ _[255 & l] ^ S[v + 1],
                                s = _[u >>> 24] << 24 ^ _[c >> 16 & 255] << 16 ^ _[l >> 8 & 255] << 8 ^ _[255 & d] ^ S[v + 2],
                                o = _[c >>> 24] << 24 ^ _[l >> 16 & 255] << 16 ^ _[d >> 8 & 255] << 8 ^ _[255 & u] ^ S[v + 3],
                                v += 3,
                                M[t] = F(a ^ O),
                                M[t + 1] = F(o ^ C),
                                M[t + 2] = F(s ^ I),
                                M[t + 3] = F(n ^ P),
                                O = h,
                                C = f,
                                I = g,
                                P = p,
                                t += 4
                        }
                        return i ? (y = M.buffer,
                            b = y.byteLength,
                            (T = b && new DataView(y).getUint8(b - 1)) ? y.slice(0, b - T) : y) : M.buffer
                    }
                    ,
                    t.destroy = function () {
                        this.key = void 0,
                            this.keySize = void 0,
                            this.ksRows = void 0,
                            this.sBox = void 0,
                            this.invSBox = void 0,
                            this.subMix = void 0,
                            this.invSubMix = void 0,
                            this.keySchedule = void 0,
                            this.invKeySchedule = void 0,
                            this.rcon = void 0
                    }
                    ,
                    e
            }()
                , s = r(2)
                , o = r(0)
                , l = r(1)
                , d = r(5)
                , u = Object(d.a)()
                , c = function () {
                    function e(e, t, r) {
                        var i = (void 0 === r ? {} : r).removePKCS7Padding
                            , a = void 0 === i || i;
                        if (this.logEnabled = !0,
                            this.observer = e,
                            this.config = t,
                            this.removePKCS7Padding = a,
                            a)
                            try {
                                var n = u.crypto;
                                n && (this.subtle = n.subtle || n.webkitSubtle)
                            } catch (e) { }
                        this.disableWebCrypto = !this.subtle
                    }
                    var t = e.prototype;
                    return t.isSync = function () {
                        return this.disableWebCrypto && this.config.enableSoftwareAES
                    }
                        ,
                        t.decrypt = function (e, t, r, s) {
                            var l = this;
                            if (this.disableWebCrypto && this.config.enableSoftwareAES) {
                                this.logEnabled && (o.b.log("JS AES decrypt"),
                                    this.logEnabled = !1);
                                var d = this.decryptor;
                                d || (this.decryptor = d = new n),
                                    d.expandKey(t),
                                    s(d.decrypt(e, 0, r, this.removePKCS7Padding))
                            } else {
                                this.logEnabled && (o.b.log("WebCrypto AES decrypt"),
                                    this.logEnabled = !1);
                                var u = this.subtle;
                                this.key !== t && (this.key = t,
                                    this.fastAesKey = new a(u, t)),
                                    this.fastAesKey.expandKey().then((function (a) {
                                        new i(u, r).decrypt(e, a).catch((function (i) {
                                            l.onWebCryptoError(i, e, t, r, s)
                                        }
                                        )).then((function (e) {
                                            s(e)
                                        }
                                        ))
                                    }
                                    )).catch((function (i) {
                                        l.onWebCryptoError(i, e, t, r, s)
                                    }
                                    ))
                            }
                        }
                        ,
                        t.onWebCryptoError = function (e, t, r, i, a) {
                            this.config.enableSoftwareAES ? (o.b.log("WebCrypto Error, disable WebCrypto API"),
                                this.disableWebCrypto = !0,
                                this.logEnabled = !0,
                                this.decrypt(t, r, i, a)) : (o.b.error("decrypting error : " + e.message),
                                    this.observer.trigger(l.a.ERROR, {
                                        type: s.b.MEDIA_ERROR,
                                        details: s.a.FRAG_DECRYPT_ERROR,
                                        fatal: !0,
                                        reason: e.message
                                    }))
                        }
                        ,
                        t.destroy = function () {
                            var e = this.decryptor;
                            e && (e.destroy(),
                                this.decryptor = void 0)
                        }
                        ,
                        e
                }();
            t.a = c
        }
        , function (e, t, r) {
            "use strict";
            var i = Object.prototype.hasOwnProperty
                , a = "~";
            function n() { }
            function s(e, t, r) {
                this.fn = e,
                    this.context = t,
                    this.once = r || !1
            }
            function o(e, t, r, i, n) {
                if ("function" != typeof r)
                    throw new TypeError("The listener must be a function");
                var o = new s(r, i || e, n)
                    , l = a ? a + t : t;
                return e._events[l] ? e._events[l].fn ? e._events[l] = [e._events[l], o] : e._events[l].push(o) : (e._events[l] = o,
                    e._eventsCount++),
                    e
            }
            function l(e, t) {
                0 == --e._eventsCount ? e._events = new n : delete e._events[t]
            }
            function d() {
                this._events = new n,
                    this._eventsCount = 0
            }
            Object.create && (n.prototype = Object.create(null),
                (new n).__proto__ || (a = !1)),
                d.prototype.eventNames = function () {
                    var e, t, r = [];
                    if (0 === this._eventsCount)
                        return r;
                    for (t in e = this._events)
                        i.call(e, t) && r.push(a ? t.slice(1) : t);
                    return Object.getOwnPropertySymbols ? r.concat(Object.getOwnPropertySymbols(e)) : r
                }
                ,
                d.prototype.listeners = function (e) {
                    var t = a ? a + e : e
                        , r = this._events[t];
                    if (!r)
                        return [];
                    if (r.fn)
                        return [r.fn];
                    for (var i = 0, n = r.length, s = new Array(n); i < n; i++)
                        s[i] = r[i].fn;
                    return s
                }
                ,
                d.prototype.listenerCount = function (e) {
                    var t = a ? a + e : e
                        , r = this._events[t];
                    return r ? r.fn ? 1 : r.length : 0
                }
                ,
                d.prototype.emit = function (e, t, r, i, n, s) {
                    var o = a ? a + e : e;
                    if (!this._events[o])
                        return !1;
                    var l, d, u = this._events[o], c = arguments.length;
                    if (u.fn) {
                        switch (u.once && this.removeListener(e, u.fn, void 0, !0),
                        c) {
                            case 1:
                                return u.fn.call(u.context),
                                    !0;
                            case 2:
                                return u.fn.call(u.context, t),
                                    !0;
                            case 3:
                                return u.fn.call(u.context, t, r),
                                    !0;
                            case 4:
                                return u.fn.call(u.context, t, r, i),
                                    !0;
                            case 5:
                                return u.fn.call(u.context, t, r, i, n),
                                    !0;
                            case 6:
                                return u.fn.call(u.context, t, r, i, n, s),
                                    !0
                        }
                        for (d = 1,
                            l = new Array(c - 1); d < c; d++)
                            l[d - 1] = arguments[d];
                        u.fn.apply(u.context, l)
                    } else {
                        var h, f = u.length;
                        for (d = 0; d < f; d++)
                            switch (u[d].once && this.removeListener(e, u[d].fn, void 0, !0),
                            c) {
                                case 1:
                                    u[d].fn.call(u[d].context);
                                    break;
                                case 2:
                                    u[d].fn.call(u[d].context, t);
                                    break;
                                case 3:
                                    u[d].fn.call(u[d].context, t, r);
                                    break;
                                case 4:
                                    u[d].fn.call(u[d].context, t, r, i);
                                    break;
                                default:
                                    if (!l)
                                        for (h = 1,
                                            l = new Array(c - 1); h < c; h++)
                                            l[h - 1] = arguments[h];
                                    u[d].fn.apply(u[d].context, l)
                            }
                    }
                    return !0
                }
                ,
                d.prototype.on = function (e, t, r) {
                    return o(this, e, t, r, !1)
                }
                ,
                d.prototype.once = function (e, t, r) {
                    return o(this, e, t, r, !0)
                }
                ,
                d.prototype.removeListener = function (e, t, r, i) {
                    var n = a ? a + e : e;
                    if (!this._events[n])
                        return this;
                    if (!t)
                        return l(this, n),
                            this;
                    var s = this._events[n];
                    if (s.fn)
                        s.fn !== t || i && !s.once || r && s.context !== r || l(this, n);
                    else {
                        for (var o = 0, d = [], u = s.length; o < u; o++)
                            (s[o].fn !== t || i && !s[o].once || r && s[o].context !== r) && d.push(s[o]);
                        d.length ? this._events[n] = 1 === d.length ? d[0] : d : l(this, n)
                    }
                    return this
                }
                ,
                d.prototype.removeAllListeners = function (e) {
                    var t;
                    return e ? (t = a ? a + e : e,
                        this._events[t] && l(this, t)) : (this._events = new n,
                            this._eventsCount = 0),
                        this
                }
                ,
                d.prototype.off = d.prototype.removeListener,
                d.prototype.addListener = d.prototype.on,
                d.prefixed = a,
                d.EventEmitter = d,
                e.exports = d
        }
        , function (e, t, r) {
            "use strict";
            var i = r(1)
                , a = r(2)
                , n = r(7)
                , s = r(3)
                , o = r(0)
                , l = r(5);
            function d(e, t) {
                return 255 === e[t] && 240 == (246 & e[t + 1])
            }
            function u(e, t) {
                return 1 & e[t + 1] ? 7 : 9
            }
            function c(e, t) {
                return (3 & e[t + 3]) << 11 | e[t + 4] << 3 | (224 & e[t + 5]) >>> 5
            }
            function h(e, t) {
                return !!(t + 1 < e.length && d(e, t))
            }
            function f(e, t) {
                if (h(e, t)) {
                    var r = u(e, t);
                    if (t + r >= e.length)
                        return !1;
                    var i = c(e, t);
                    if (i <= r)
                        return !1;
                    var a = t + i;
                    if (a === e.length || a + 1 < e.length && d(e, a))
                        return !0
                }
                return !1
            }
            function g(e, t, r, n, s) {
                if (!e.samplerate) {
                    var l = function (e, t, r, n) {
                        var s, l, d, u, c, h = navigator.userAgent.toLowerCase(), f = n, g = [96e3, 88200, 64e3, 48e3, 44100, 32e3, 24e3, 22050, 16e3, 12e3, 11025, 8e3, 7350];
                        if (s = 1 + ((192 & t[r + 2]) >>> 6),
                            !((l = (60 & t[r + 2]) >>> 2) > g.length - 1))
                            return u = (1 & t[r + 2]) << 2,
                                u |= (192 & t[r + 3]) >>> 6,
                                o.b.log("manifest codec:" + n + ",ADTS data:type:" + s + ",sampleingIndex:" + l + "[" + g[l] + "Hz],channelConfig:" + u),
                                /firefox/i.test(h) ? l >= 6 ? (s = 5,
                                    c = new Array(4),
                                    d = l - 3) : (s = 2,
                                        c = new Array(2),
                                        d = l) : -1 !== h.indexOf("android") ? (s = 2,
                                            c = new Array(2),
                                            d = l) : (s = 5,
                                                c = new Array(4),
                                                n && (-1 !== n.indexOf("mp4a.40.29") || -1 !== n.indexOf("mp4a.40.5")) || !n && l >= 6 ? d = l - 3 : ((n && -1 !== n.indexOf("mp4a.40.2") && (l >= 6 && 1 === u || /vivaldi/i.test(h)) || !n && 1 === u) && (s = 2,
                                                    c = new Array(2)),
                                                    d = l)),
                                c[0] = s << 3,
                                c[0] |= (14 & l) >> 1,
                                c[1] |= (1 & l) << 7,
                                c[1] |= u << 3,
                                5 === s && (c[1] |= (14 & d) >> 1,
                                    c[2] = (1 & d) << 7,
                                    c[2] |= 8,
                                    c[3] = 0),
                            {
                                config: c,
                                samplerate: g[l],
                                channelCount: u,
                                codec: "mp4a.40." + s,
                                manifestCodec: f
                            };
                        e.trigger(i.a.ERROR, {
                            type: a.b.MEDIA_ERROR,
                            details: a.a.FRAG_PARSING_ERROR,
                            fatal: !0,
                            reason: "invalid ADTS sampling index:" + l
                        })
                    }(t, r, n, s);
                    e.config = l.config,
                        e.samplerate = l.samplerate,
                        e.channelCount = l.channelCount,
                        e.codec = l.codec,
                        e.manifestCodec = l.manifestCodec,
                        o.b.log("parsed codec:" + e.codec + ",rate:" + l.samplerate + ",nb channel:" + l.channelCount)
                }
            }
            function p(e) {
                return 9216e4 / e
            }
            function v(e, t, r, i, a) {
                var n = function (e, t, r, i, a) {
                    var n, s, o = e.length;
                    if (n = u(e, t),
                        s = c(e, t),
                        (s -= n) > 0 && t + n + s <= o)
                        return {
                            headerLength: n,
                            frameLength: s,
                            stamp: r + i * a
                        }
                }(t, r, i, a, p(e.samplerate));
                if (n) {
                    var s = n.stamp
                        , o = n.headerLength
                        , l = n.frameLength
                        , d = {
                            unit: t.subarray(r + o, r + o + l),
                            pts: s,
                            dts: s
                        };
                    return e.samples.push(d),
                    {
                        sample: d,
                        length: l + o
                    }
                }
            }
            var m = r(4)
                , y = function () {
                    function e(e, t, r) {
                        this.observer = e,
                            this.config = r,
                            this.remuxer = t
                    }
                    var t = e.prototype;
                    return t.resetInitSegment = function (e, t, r, i) {
                        this._audioTrack = {
                            container: "audio/adts",
                            type: "audio",
                            id: 0,
                            sequenceNumber: 0,
                            isAAC: !0,
                            samples: [],
                            len: 0,
                            manifestCodec: t,
                            duration: i,
                            inputTimeScale: 9e4
                        }
                    }
                        ,
                        t.resetTimeStamp = function () { }
                        ,
                        e.probe = function (e) {
                            if (!e)
                                return !1;
                            for (var t = (m.a.getID3Data(e, 0) || []).length, r = e.length; t < r; t++)
                                if (f(e, t))
                                    return o.b.log("ADTS sync word found !"),
                                        !0;
                            return !1
                        }
                        ,
                        t.append = function (e, t, r, i) {
                            for (var a = this._audioTrack, n = m.a.getID3Data(e, 0) || [], l = m.a.getTimeStamp(n), d = Object(s.a)(l) ? 90 * l : 9e4 * t, u = 0, c = d, f = e.length, p = n.length, y = [{
                                pts: c,
                                dts: c,
                                data: n
                            }]; p < f - 1;)
                                if (h(e, p) && p + 5 < f) {
                                    g(a, this.observer, e, p, a.manifestCodec);
                                    var b = v(a, e, p, d, u);
                                    if (!b) {
                                        o.b.log("Unable to parse AAC frame");
                                        break
                                    }
                                    p += b.length,
                                        c = b.sample.pts,
                                        u++
                                } else
                                    m.a.isHeader(e, p) ? (n = m.a.getID3Data(e, p),
                                        y.push({
                                            pts: c,
                                            dts: c,
                                            data: n
                                        }),
                                        p += n.length) : p++;
                            this.remuxer.remux(a, {
                                samples: []
                            }, {
                                samples: y,
                                inputTimeScale: 9e4
                            }, {
                                samples: []
                            }, t, r, i)
                        }
                        ,
                        t.destroy = function () { }
                        ,
                        e
                }()
                , b = r(10)
                , T = {
                    BitratesMap: [32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160],
                    SamplingRateMap: [44100, 48e3, 32e3, 22050, 24e3, 16e3, 11025, 12e3, 8e3],
                    SamplesCoefficients: [[0, 72, 144, 12], [0, 0, 0, 0], [0, 72, 144, 12], [0, 144, 144, 12]],
                    BytesInSlot: [0, 1, 1, 4],
                    appendFrame: function (e, t, r, i, a) {
                        if (!(r + 24 > t.length)) {
                            var n = this.parseHeader(t, r);
                            if (n && r + n.frameLength <= t.length) {
                                var s = i + a * (9e4 * n.samplesPerFrame / n.sampleRate)
                                    , o = {
                                        unit: t.subarray(r, r + n.frameLength),
                                        pts: s,
                                        dts: s
                                    };
                                return e.config = [],
                                    e.channelCount = n.channelCount,
                                    e.samplerate = n.sampleRate,
                                    e.samples.push(o),
                                {
                                    sample: o,
                                    length: n.frameLength
                                }
                            }
                        }
                    },
                    parseHeader: function (e, t) {
                        var r = e[t + 1] >> 3 & 3
                            , i = e[t + 1] >> 1 & 3
                            , a = e[t + 2] >> 4 & 15
                            , n = e[t + 2] >> 2 & 3
                            , s = e[t + 2] >> 1 & 1;
                        if (1 !== r && 0 !== a && 15 !== a && 3 !== n) {
                            var o = 3 === r ? 3 - i : 3 === i ? 3 : 4
                                , l = 1e3 * T.BitratesMap[14 * o + a - 1]
                                , d = 3 === r ? 0 : 2 === r ? 1 : 2
                                , u = T.SamplingRateMap[3 * d + n]
                                , c = e[t + 3] >> 6 == 3 ? 1 : 2
                                , h = T.SamplesCoefficients[r][i]
                                , f = T.BytesInSlot[i]
                                , g = 8 * h * f;
                            return {
                                sampleRate: u,
                                channelCount: c,
                                frameLength: parseInt(h * l / u + s, 10) * f,
                                samplesPerFrame: g
                            }
                        }
                    },
                    isHeaderPattern: function (e, t) {
                        return 255 === e[t] && 224 == (224 & e[t + 1]) && 0 != (6 & e[t + 1])
                    },
                    isHeader: function (e, t) {
                        return !!(t + 1 < e.length && this.isHeaderPattern(e, t))
                    },
                    probe: function (e, t) {
                        if (t + 1 < e.length && this.isHeaderPattern(e, t)) {
                            var r = this.parseHeader(e, t)
                                , i = 4;
                            r && r.frameLength && (i = r.frameLength);
                            var a = t + i;
                            if (a === e.length || a + 1 < e.length && this.isHeaderPattern(e, a))
                                return !0
                        }
                        return !1
                    }
                }
                , E = T
                , S = function () {
                    function e(e) {
                        this.data = e,
                            this.bytesAvailable = e.byteLength,
                            this.word = 0,
                            this.bitsAvailable = 0
                    }
                    var t = e.prototype;
                    return t.loadWord = function () {
                        var e = this.data
                            , t = this.bytesAvailable
                            , r = e.byteLength - t
                            , i = new Uint8Array(4)
                            , a = Math.min(4, t);
                        if (0 === a)
                            throw new Error("no bytes available");
                        i.set(e.subarray(r, r + a)),
                            this.word = new DataView(i.buffer).getUint32(0),
                            this.bitsAvailable = 8 * a,
                            this.bytesAvailable -= a
                    }
                        ,
                        t.skipBits = function (e) {
                            var t;
                            this.bitsAvailable > e ? (this.word <<= e,
                                this.bitsAvailable -= e) : (e -= this.bitsAvailable,
                                    e -= (t = e >> 3) >> 3,
                                    this.bytesAvailable -= t,
                                    this.loadWord(),
                                    this.word <<= e,
                                    this.bitsAvailable -= e)
                        }
                        ,
                        t.readBits = function (e) {
                            var t = Math.min(this.bitsAvailable, e)
                                , r = this.word >>> 32 - t;
                            return e > 32 && o.b.error("Cannot read more than 32 bits at a time"),
                                this.bitsAvailable -= t,
                                this.bitsAvailable > 0 ? this.word <<= t : this.bytesAvailable > 0 && this.loadWord(),
                                (t = e - t) > 0 && this.bitsAvailable ? r << t | this.readBits(t) : r
                        }
                        ,
                        t.skipLZ = function () {
                            var e;
                            for (e = 0; e < this.bitsAvailable; ++e)
                                if (0 != (this.word & 2147483648 >>> e))
                                    return this.word <<= e,
                                        this.bitsAvailable -= e,
                                        e;
                            return this.loadWord(),
                                e + this.skipLZ()
                        }
                        ,
                        t.skipUEG = function () {
                            this.skipBits(1 + this.skipLZ())
                        }
                        ,
                        t.skipEG = function () {
                            this.skipBits(1 + this.skipLZ())
                        }
                        ,
                        t.readUEG = function () {
                            var e = this.skipLZ();
                            return this.readBits(e + 1) - 1
                        }
                        ,
                        t.readEG = function () {
                            var e = this.readUEG();
                            return 1 & e ? 1 + e >>> 1 : -1 * (e >>> 1)
                        }
                        ,
                        t.readBoolean = function () {
                            return 1 === this.readBits(1)
                        }
                        ,
                        t.readUByte = function () {
                            return this.readBits(8)
                        }
                        ,
                        t.readUShort = function () {
                            return this.readBits(16)
                        }
                        ,
                        t.readUInt = function () {
                            return this.readBits(32)
                        }
                        ,
                        t.skipScalingList = function (e) {
                            var t, r = 8, i = 8;
                            for (t = 0; t < e; t++)
                                0 !== i && (i = (r + this.readEG() + 256) % 256),
                                    r = 0 === i ? r : i
                        }
                        ,
                        t.readSPS = function () {
                            var e, t, r, i, a, n, s, o = 0, l = 0, d = 0, u = 0, c = this.readUByte.bind(this), h = this.readBits.bind(this), f = this.readUEG.bind(this), g = this.readBoolean.bind(this), p = this.skipBits.bind(this), v = this.skipEG.bind(this), m = this.skipUEG.bind(this), y = this.skipScalingList.bind(this);
                            if (c(),
                                e = c(),
                                h(5),
                                p(3),
                                c(),
                                m(),
                                100 === e || 110 === e || 122 === e || 244 === e || 44 === e || 83 === e || 86 === e || 118 === e || 128 === e) {
                                var b = f();
                                if (3 === b && p(1),
                                    m(),
                                    m(),
                                    p(1),
                                    g())
                                    for (n = 3 !== b ? 8 : 12,
                                        s = 0; s < n; s++)
                                        g() && y(s < 6 ? 16 : 64)
                            }
                            m();
                            var T = f();
                            if (0 === T)
                                f();
                            else if (1 === T)
                                for (p(1),
                                    v(),
                                    v(),
                                    t = f(),
                                    s = 0; s < t; s++)
                                    v();
                            m(),
                                p(1),
                                r = f(),
                                i = f(),
                                0 === (a = h(1)) && p(1),
                                p(1),
                                g() && (o = f(),
                                    l = f(),
                                    d = f(),
                                    u = f());
                            var E = [1, 1];
                            if (g() && g())
                                switch (c()) {
                                    case 1:
                                        E = [1, 1];
                                        break;
                                    case 2:
                                        E = [12, 11];
                                        break;
                                    case 3:
                                        E = [10, 11];
                                        break;
                                    case 4:
                                        E = [16, 11];
                                        break;
                                    case 5:
                                        E = [40, 33];
                                        break;
                                    case 6:
                                        E = [24, 11];
                                        break;
                                    case 7:
                                        E = [20, 11];
                                        break;
                                    case 8:
                                        E = [32, 11];
                                        break;
                                    case 9:
                                        E = [80, 33];
                                        break;
                                    case 10:
                                        E = [18, 11];
                                        break;
                                    case 11:
                                        E = [15, 11];
                                        break;
                                    case 12:
                                        E = [64, 33];
                                        break;
                                    case 13:
                                        E = [160, 99];
                                        break;
                                    case 14:
                                        E = [4, 3];
                                        break;
                                    case 15:
                                        E = [3, 2];
                                        break;
                                    case 16:
                                        E = [2, 1];
                                        break;
                                    case 255:
                                        E = [c() << 8 | c(), c() << 8 | c()]
                                }
                            return {
                                width: Math.ceil(16 * (r + 1) - 2 * o - 2 * l),
                                height: (2 - a) * (i + 1) * 16 - (a ? 2 : 4) * (d + u),
                                pixelRatio: E
                            }
                        }
                        ,
                        t.readSliceType = function () {
                            return this.readUByte(),
                                this.readUEG(),
                                this.readUEG()
                        }
                        ,
                        e
                }()
                , _ = function () {
                    function e(e, t, r, i) {
                        this.decryptdata = r,
                            this.discardEPB = i,
                            this.decrypter = new n.a(e, t, {
                                removePKCS7Padding: !1
                            })
                    }
                    var t = e.prototype;
                    return t.decryptBuffer = function (e, t) {
                        this.decrypter.decrypt(e, this.decryptdata.key.buffer, this.decryptdata.iv.buffer, t)
                    }
                        ,
                        t.decryptAacSample = function (e, t, r, i) {
                            var a = e[t].unit
                                , n = a.subarray(16, a.length - a.length % 16)
                                , s = n.buffer.slice(n.byteOffset, n.byteOffset + n.length)
                                , o = this;
                            this.decryptBuffer(s, (function (n) {
                                n = new Uint8Array(n),
                                    a.set(n, 16),
                                    i || o.decryptAacSamples(e, t + 1, r)
                            }
                            ))
                        }
                        ,
                        t.decryptAacSamples = function (e, t, r) {
                            for (; ; t++) {
                                if (t >= e.length)
                                    return void r();
                                if (!(e[t].unit.length < 32)) {
                                    var i = this.decrypter.isSync();
                                    if (this.decryptAacSample(e, t, r, i),
                                        !i)
                                        return
                                }
                            }
                        }
                        ,
                        t.getAvcEncryptedData = function (e) {
                            for (var t = 16 * Math.floor((e.length - 48) / 160) + 16, r = new Int8Array(t), i = 0, a = 32; a <= e.length - 16; a += 160,
                                i += 16)
                                r.set(e.subarray(a, a + 16), i);
                            return r
                        }
                        ,
                        t.getAvcDecryptedUnit = function (e, t) {
                            t = new Uint8Array(t);
                            for (var r = 0, i = 32; i <= e.length - 16; i += 160,
                                r += 16)
                                e.set(t.subarray(r, r + 16), i);
                            return e
                        }
                        ,
                        t.decryptAvcSample = function (e, t, r, i, a, n) {
                            var s = this.discardEPB(a.data)
                                , o = this.getAvcEncryptedData(s)
                                , l = this;
                            this.decryptBuffer(o.buffer, (function (o) {
                                a.data = l.getAvcDecryptedUnit(s, o),
                                    n || l.decryptAvcSamples(e, t, r + 1, i)
                            }
                            ))
                        }
                        ,
                        t.decryptAvcSamples = function (e, t, r, i) {
                            for (; ; t++,
                                r = 0) {
                                if (t >= e.length)
                                    return void i();
                                for (var a = e[t].units; !(r >= a.length); r++) {
                                    var n = a[r];
                                    if (!(n.data.length <= 48 || 1 !== n.type && 5 !== n.type)) {
                                        var s = this.decrypter.isSync();
                                        if (this.decryptAvcSample(e, t, r, i, n, s),
                                            !s)
                                            return
                                    }
                                }
                            }
                        }
                        ,
                        e
                }()
                , R = {
                    video: 1,
                    audio: 2,
                    id3: 3,
                    text: 4
                }
                , A = function () {
                    function e(e, t, r, i) {
                        this.observer = e,
                            this.config = r,
                            this.typeSupported = i,
                            this.remuxer = t,
                            this.sampleAes = null,
                            this.pmtUnknownTypes = {}
                    }
                    var t = e.prototype;
                    return t.setDecryptData = function (e) {
                        null != e && null != e.key && "SAMPLE-AES" === e.method ? this.sampleAes = new _(this.observer, this.config, e, this.discardEPB) : this.sampleAes = null
                    }
                        ,
                        e.probe = function (t) {
                            var r = e._syncOffset(t);
                            return !(r < 0) && (r && o.b.warn("MPEG2-TS detected but first sync word found @ offset " + r + ", junk ahead ?"),
                                !0)
                        }
                        ,
                        e._syncOffset = function (e) {
                            for (var t = Math.min(1e3, e.length - 564), r = 0; r < t;) {
                                if (71 === e[r] && 71 === e[r + 188] && 71 === e[r + 376])
                                    return r;
                                r++
                            }
                            return -1
                        }
                        ,
                        e.createTrack = function (e, t) {
                            return {
                                container: "video" === e || "audio" === e ? "video/mp2t" : void 0,
                                type: e,
                                id: R[e],
                                pid: -1,
                                inputTimeScale: 9e4,
                                sequenceNumber: 0,
                                samples: [],
                                dropped: "video" === e ? 0 : void 0,
                                isAAC: "audio" === e || void 0,
                                duration: "audio" === e ? t : void 0
                            }
                        }
                        ,
                        t.resetInitSegment = function (t, r, i, a) {
                            this.pmtParsed = !1,
                                this._pmtId = -1,
                                this.pmtUnknownTypes = {},
                                this._avcTrack = e.createTrack("video", a),
                                this._audioTrack = e.createTrack("audio", a),
                                this._id3Track = e.createTrack("id3", a),
                                this._txtTrack = e.createTrack("text", a),
                                this.aacOverFlow = null,
                                this.aacLastPTS = null,
                                this.avcSample = null,
                                this.audioCodec = r,
                                this.videoCodec = i,
                                this._duration = a
                        }
                        ,
                        t.resetTimeStamp = function () { }
                        ,
                        t.append = function (t, r, n, s) {
                            var l, d, u, c, h, f = t.length, g = !1;
                            this.pmtUnknownTypes = {},
                                this.contiguous = n;
                            var p = this.pmtParsed
                                , v = this._avcTrack
                                , m = this._audioTrack
                                , y = this._id3Track
                                , b = v.pid
                                , T = m.pid
                                , E = y.pid
                                , S = this._pmtId
                                , _ = v.pesData
                                , R = m.pesData
                                , A = y.pesData
                                , k = this._parsePAT
                                , w = this._parsePMT.bind(this)
                                , L = this._parsePES
                                , D = this._parseAVCPES.bind(this)
                                , O = this._parseAACPES.bind(this)
                                , C = this._parseMPEGPES.bind(this)
                                , I = this._parseID3PES.bind(this)
                                , P = e._syncOffset(t);
                            for (f -= (f + P) % 188,
                                l = P; l < f; l += 188)
                                if (71 === t[l]) {
                                    if (d = !!(64 & t[l + 1]),
                                        u = ((31 & t[l + 1]) << 8) + t[l + 2],
                                        (48 & t[l + 3]) >> 4 > 1) {
                                        if ((c = l + 5 + t[l + 4]) === l + 188)
                                            continue
                                    } else
                                        c = l + 4;
                                    switch (u) {
                                        case b:
                                            d && (_ && (h = L(_)) && D(h, !1),
                                                _ = {
                                                    data: [],
                                                    size: 0
                                                }),
                                                _ && (_.data.push(t.subarray(c, l + 188)),
                                                    _.size += l + 188 - c);
                                            break;
                                        case T:
                                            d && (R && (h = L(R)) && (m.isAAC ? O(h) : C(h)),
                                                R = {
                                                    data: [],
                                                    size: 0
                                                }),
                                                R && (R.data.push(t.subarray(c, l + 188)),
                                                    R.size += l + 188 - c);
                                            break;
                                        case E:
                                            d && (A && (h = L(A)) && I(h),
                                                A = {
                                                    data: [],
                                                    size: 0
                                                }),
                                                A && (A.data.push(t.subarray(c, l + 188)),
                                                    A.size += l + 188 - c);
                                            break;
                                        case 0:
                                            d && (c += t[c] + 1),
                                                S = this._pmtId = k(t, c);
                                            break;
                                        case S:
                                            d && (c += t[c] + 1);
                                            var x = w(t, c, !0 === this.typeSupported.mpeg || !0 === this.typeSupported.mp3, null != this.sampleAes);
                                            (b = x.avc) > 0 && (v.pid = b),
                                                (T = x.audio) > 0 && (m.pid = T,
                                                    m.isAAC = x.isAAC),
                                                (E = x.id3) > 0 && (y.pid = E),
                                                g && !p && (o.b.log("reparse from beginning"),
                                                    g = !1,
                                                    l = P - 188),
                                                p = this.pmtParsed = !0;
                                            break;
                                        case 17:
                                        case 8191:
                                            break;
                                        default:
                                            g = !0
                                    }
                                } else
                                    this.observer.trigger(i.a.ERROR, {
                                        type: a.b.MEDIA_ERROR,
                                        details: a.a.FRAG_PARSING_ERROR,
                                        fatal: !1,
                                        reason: "TS packet did not start with 0x47"
                                    });
                            _ && (h = L(_)) ? (D(h, !0),
                                v.pesData = null) : v.pesData = _,
                                R && (h = L(R)) ? (m.isAAC ? O(h) : C(h),
                                    m.pesData = null) : (R && R.size && o.b.log("last AAC PES packet truncated,might overlap between fragments"),
                                        m.pesData = R),
                                A && (h = L(A)) ? (I(h),
                                    y.pesData = null) : y.pesData = A,
                                null == this.sampleAes ? this.remuxer.remux(m, v, y, this._txtTrack, r, n, s) : this.decryptAndRemux(m, v, y, this._txtTrack, r, n, s)
                        }
                        ,
                        t.decryptAndRemux = function (e, t, r, i, a, n, s) {
                            if (e.samples && e.isAAC) {
                                var o = this;
                                this.sampleAes.decryptAacSamples(e.samples, 0, (function () {
                                    o.decryptAndRemuxAvc(e, t, r, i, a, n, s)
                                }
                                ))
                            } else
                                this.decryptAndRemuxAvc(e, t, r, i, a, n, s)
                        }
                        ,
                        t.decryptAndRemuxAvc = function (e, t, r, i, a, n, s) {
                            if (t.samples) {
                                var o = this;
                                this.sampleAes.decryptAvcSamples(t.samples, 0, 0, (function () {
                                    o.remuxer.remux(e, t, r, i, a, n, s)
                                }
                                ))
                            } else
                                this.remuxer.remux(e, t, r, i, a, n, s)
                        }
                        ,
                        t.destroy = function () {
                            this._initPTS = this._initDTS = void 0,
                                this._duration = 0
                        }
                        ,
                        t._parsePAT = function (e, t) {
                            return (31 & e[t + 10]) << 8 | e[t + 11]
                        }
                        ,
                        t._trackUnknownPmt = function (e, t, r) {
                            var i = this.pmtUnknownTypes[e] || 0;
                            return 0 === i && (this.pmtUnknownTypes[e] = 0,
                                t.call(o.b, r)),
                                this.pmtUnknownTypes[e]++,
                                i
                        }
                        ,
                        t._parsePMT = function (e, t, r, i) {
                            var a, n, s = {
                                audio: -1,
                                avc: -1,
                                id3: -1,
                                isAAC: !0
                            };
                            for (a = t + 3 + ((15 & e[t + 1]) << 8 | e[t + 2]) - 4,
                                t += 12 + ((15 & e[t + 10]) << 8 | e[t + 11]); t < a;) {
                                switch (n = (31 & e[t + 1]) << 8 | e[t + 2],
                                e[t]) {
                                    case 207:
                                        if (!i) {
                                            this._trackUnknownPmt(e[t], o.b.warn, "ADTS AAC with AES-128-CBC frame encryption found in unencrypted stream");
                                            break
                                        }
                                    case 15:
                                        -1 === s.audio && (s.audio = n);
                                        break;
                                    case 21:
                                        -1 === s.id3 && (s.id3 = n);
                                        break;
                                    case 219:
                                        if (!i) {
                                            this._trackUnknownPmt(e[t], o.b.warn, "H.264 with AES-128-CBC slice encryption found in unencrypted stream");
                                            break
                                        }
                                    case 27:
                                        -1 === s.avc && (s.avc = n);
                                        break;
                                    case 3:
                                    case 4:
                                        r ? -1 === s.audio && (s.audio = n,
                                            s.isAAC = !1) : this._trackUnknownPmt(e[t], o.b.warn, "MPEG audio found, not supported in this browser");
                                        break;
                                    case 36:
                                        this._trackUnknownPmt(e[t], o.b.warn, "Unsupported HEVC stream type found");
                                        break;
                                    default:
                                        this._trackUnknownPmt(e[t], o.b.log, "Unknown stream type:" + e[t])
                                }
                                t += 5 + ((15 & e[t + 3]) << 8 | e[t + 4])
                            }
                            return s
                        }
                        ,
                        t._parsePES = function (e) {
                            var t, r, i, a, n, s, l, d, u = 0, c = e.data;
                            if (!e || 0 === e.size)
                                return null;
                            for (; c[0].length < 19 && c.length > 1;) {
                                var h = new Uint8Array(c[0].length + c[1].length);
                                h.set(c[0]),
                                    h.set(c[1], c[0].length),
                                    c[0] = h,
                                    c.splice(1, 1)
                            }
                            if (1 === ((t = c[0])[0] << 16) + (t[1] << 8) + t[2]) {
                                if ((i = (t[4] << 8) + t[5]) && i > e.size - 6)
                                    return null;
                                if (192 & (r = t[7]) && (s = 536870912 * (14 & t[9]) + 4194304 * (255 & t[10]) + 16384 * (254 & t[11]) + 128 * (255 & t[12]) + (254 & t[13]) / 2,
                                    64 & r ? s - (l = 536870912 * (14 & t[14]) + 4194304 * (255 & t[15]) + 16384 * (254 & t[16]) + 128 * (255 & t[17]) + (254 & t[18]) / 2) > 54e5 && (o.b.warn(Math.round((s - l) / 9e4) + "s delta between PTS and DTS, align them"),
                                        s = l) : l = s),
                                    d = (a = t[8]) + 9,
                                    e.size <= d)
                                    return null;
                                e.size -= d,
                                    n = new Uint8Array(e.size);
                                for (var f = 0, g = c.length; f < g; f++) {
                                    var p = (t = c[f]).byteLength;
                                    if (d) {
                                        if (d > p) {
                                            d -= p;
                                            continue
                                        }
                                        t = t.subarray(d),
                                            p -= d,
                                            d = 0
                                    }
                                    n.set(t, u),
                                        u += p
                                }
                                return i && (i -= a + 3),
                                {
                                    data: n,
                                    pts: s,
                                    dts: l,
                                    len: i
                                }
                            }
                            return null
                        }
                        ,
                        t.pushAccesUnit = function (e, t) {
                            if (e.units.length && e.frame) {
                                var r = t.samples
                                    , i = r.length;
                                if (isNaN(e.pts)) {
                                    if (!i)
                                        return void t.dropped++;
                                    var a = r[i - 1];
                                    e.pts = a.pts,
                                        e.dts = a.dts
                                }
                                !this.config.forceKeyFrameOnDiscontinuity || !0 === e.key || t.sps && (i || this.contiguous) ? (e.id = i,
                                    r.push(e)) : t.dropped++
                            }
                            e.debug.length && o.b.log(e.pts + "/" + e.dts + ":" + e.debug)
                        }
                        ,
                        t._parseAVCPES = function (e, t) {
                            var r, i, a, n = this, s = this._avcTrack, o = this._parseAVCNALu(e.data), l = this.avcSample, d = !1, u = this.pushAccesUnit.bind(this), c = function (e, t, r, i) {
                                return {
                                    key: e,
                                    pts: t,
                                    dts: r,
                                    units: [],
                                    debug: i
                                }
                            };
                            e.data = null,
                                l && o.length && !s.audFound && (u(l, s),
                                    l = this.avcSample = c(!1, e.pts, e.dts, "")),
                                o.forEach((function (t) {
                                    switch (t.type) {
                                        case 1:
                                            i = !0,
                                                l || (l = n.avcSample = c(!0, e.pts, e.dts, "")),
                                                l.frame = !0;
                                            var o = t.data;
                                            if (d && o.length > 4) {
                                                var h = new S(o).readSliceType();
                                                2 !== h && 4 !== h && 7 !== h && 9 !== h || (l.key = !0)
                                            }
                                            break;
                                        case 5:
                                            i = !0,
                                                l || (l = n.avcSample = c(!0, e.pts, e.dts, "")),
                                                l.key = !0,
                                                l.frame = !0;
                                            break;
                                        case 6:
                                            i = !0,
                                                (r = new S(n.discardEPB(t.data))).readUByte();
                                            for (var f = 0, g = 0, p = !1, v = 0; !p && r.bytesAvailable > 1;) {
                                                f = 0;
                                                do {
                                                    f += v = r.readUByte()
                                                } while (255 === v);
                                                g = 0;
                                                do {
                                                    g += v = r.readUByte()
                                                } while (255 === v);
                                                if (4 === f && 0 !== r.bytesAvailable) {
                                                    if (p = !0,
                                                        181 === r.readUByte())
                                                        if (49 === r.readUShort())
                                                            if (1195456820 === r.readUInt())
                                                                if (3 === r.readUByte()) {
                                                                    var y = r.readUByte()
                                                                        , b = 31 & y
                                                                        , T = [y, r.readUByte()];
                                                                    for (a = 0; a < b; a++)
                                                                        T.push(r.readUByte()),
                                                                            T.push(r.readUByte()),
                                                                            T.push(r.readUByte());
                                                                    n._insertSampleInOrder(n._txtTrack.samples, {
                                                                        type: 3,
                                                                        pts: e.pts,
                                                                        bytes: T
                                                                    })
                                                                }
                                                } else if (5 === f && 0 !== r.bytesAvailable) {
                                                    if (p = !0,
                                                        g > 16) {
                                                        var E = [];
                                                        for (a = 0; a < 16; a++)
                                                            E.push(r.readUByte().toString(16)),
                                                                3 !== a && 5 !== a && 7 !== a && 9 !== a || E.push("-");
                                                        var _ = g - 16
                                                            , R = new Uint8Array(_);
                                                        for (a = 0; a < _; a++)
                                                            R[a] = r.readUByte();
                                                        n._insertSampleInOrder(n._txtTrack.samples, {
                                                            pts: e.pts,
                                                            payloadType: f,
                                                            uuid: E.join(""),
                                                            userDataBytes: R,
                                                            userData: Object(m.b)(R.buffer)
                                                        })
                                                    }
                                                } else if (g < r.bytesAvailable)
                                                    for (a = 0; a < g; a++)
                                                        r.readUByte()
                                            }
                                            break;
                                        case 7:
                                            if (i = !0,
                                                d = !0,
                                                !s.sps) {
                                                var A = (r = new S(t.data)).readSPS();
                                                s.width = A.width,
                                                    s.height = A.height,
                                                    s.pixelRatio = A.pixelRatio,
                                                    s.sps = [t.data],
                                                    s.duration = n._duration;
                                                var k = t.data.subarray(1, 4)
                                                    , w = "avc1.";
                                                for (a = 0; a < 3; a++) {
                                                    var L = k[a].toString(16);
                                                    L.length < 2 && (L = "0" + L),
                                                        w += L
                                                }
                                                s.codec = w
                                            }
                                            break;
                                        case 8:
                                            i = !0,
                                                s.pps || (s.pps = [t.data]);
                                            break;
                                        case 9:
                                            i = !1,
                                                s.audFound = !0,
                                                l && u(l, s),
                                                l = n.avcSample = c(!1, e.pts, e.dts, "");
                                            break;
                                        case 12:
                                            i = !1;
                                            break;
                                        default:
                                            i = !1,
                                                l && (l.debug += "unknown NAL " + t.type + " ")
                                    }
                                    l && i && l.units.push(t)
                                }
                                )),
                                t && l && (u(l, s),
                                    this.avcSample = null)
                        }
                        ,
                        t._insertSampleInOrder = function (e, t) {
                            var r = e.length;
                            if (r > 0) {
                                if (t.pts >= e[r - 1].pts)
                                    e.push(t);
                                else
                                    for (var i = r - 1; i >= 0; i--)
                                        if (t.pts < e[i].pts) {
                                            e.splice(i, 0, t);
                                            break
                                        }
                            } else
                                e.push(t)
                        }
                        ,
                        t._getLastNalUnit = function () {
                            var e, t = this.avcSample;
                            if (!t || 0 === t.units.length) {
                                var r = this._avcTrack.samples;
                                t = r[r.length - 1]
                            }
                            if (t) {
                                var i = t.units;
                                e = i[i.length - 1]
                            }
                            return e
                        }
                        ,
                        t._parseAVCNALu = function (e) {
                            var t, r, i, a, n = 0, s = e.byteLength, o = this._avcTrack, l = o.naluState || 0, d = l, u = [], c = -1;
                            for (-1 === l && (c = 0,
                                a = 31 & e[0],
                                l = 0,
                                n = 1); n < s;)
                                if (t = e[n++],
                                    l)
                                    if (1 !== l)
                                        if (t)
                                            if (1 === t) {
                                                if (c >= 0)
                                                    i = {
                                                        data: e.subarray(c, n - l - 1),
                                                        type: a
                                                    },
                                                        u.push(i);
                                                else {
                                                    var h = this._getLastNalUnit();
                                                    if (h && (d && n <= 4 - d && h.state && (h.data = h.data.subarray(0, h.data.byteLength - d)),
                                                        (r = n - l - 1) > 0)) {
                                                        var f = new Uint8Array(h.data.byteLength + r);
                                                        f.set(h.data, 0),
                                                            f.set(e.subarray(0, r), h.data.byteLength),
                                                            h.data = f
                                                    }
                                                }
                                                n < s ? (c = n,
                                                    a = 31 & e[n],
                                                    l = 0) : l = -1
                                            } else
                                                l = 0;
                                        else
                                            l = 3;
                                    else
                                        l = t ? 0 : 2;
                                else
                                    l = t ? 0 : 1;
                            if (c >= 0 && l >= 0 && (i = {
                                data: e.subarray(c, s),
                                type: a,
                                state: l
                            },
                                u.push(i)),
                                0 === u.length) {
                                var g = this._getLastNalUnit();
                                if (g) {
                                    var p = new Uint8Array(g.data.byteLength + e.byteLength);
                                    p.set(g.data, 0),
                                        p.set(e, g.data.byteLength),
                                        g.data = p
                                }
                            }
                            return o.naluState = l,
                                u
                        }
                        ,
                        t.discardEPB = function (e) {
                            for (var t, r, i = e.byteLength, a = [], n = 1; n < i - 2;)
                                0 === e[n] && 0 === e[n + 1] && 3 === e[n + 2] ? (a.push(n + 2),
                                    n += 2) : n++;
                            if (0 === a.length)
                                return e;
                            t = i - a.length,
                                r = new Uint8Array(t);
                            var s = 0;
                            for (n = 0; n < t; s++,
                                n++)
                                s === a[0] && (s++,
                                    a.shift()),
                                    r[n] = e[s];
                            return r
                        }
                        ,
                        t._parseAACPES = function (e) {
                            var t, r, n, s, l, d, u, c = this._audioTrack, f = e.data, m = e.pts, y = this.aacOverFlow, b = this.aacLastPTS;
                            if (y) {
                                var T = new Uint8Array(y.byteLength + f.byteLength);
                                T.set(y, 0),
                                    T.set(f, y.byteLength),
                                    f = T
                            }
                            for (n = 0,
                                l = f.length; n < l - 1 && !h(f, n); n++)
                                ;
                            if (n && (n < l - 1 ? (d = "AAC PES did not start with ADTS header,offset:" + n,
                                u = !1) : (d = "no ADTS header found in AAC PES",
                                    u = !0),
                                o.b.warn("parsing error:" + d),
                                this.observer.trigger(i.a.ERROR, {
                                    type: a.b.MEDIA_ERROR,
                                    details: a.a.FRAG_PARSING_ERROR,
                                    fatal: u,
                                    reason: d
                                }),
                                u))
                                return;
                            if (g(c, this.observer, f, n, this.audioCodec),
                                r = 0,
                                t = p(c.samplerate),
                                y && b) {
                                var E = b + t;
                                Math.abs(E - m) > 1 && (o.b.log("AAC: align PTS for overlapping frames by " + Math.round((E - m) / 90)),
                                    m = E)
                            }
                            for (; n < l;) {
                                if (h(f, n)) {
                                    if (n + 5 < l) {
                                        var S = v(c, f, n, m, r);
                                        if (S) {
                                            n += S.length,
                                                s = S.sample.pts,
                                                r++;
                                            continue
                                        }
                                    }
                                    break
                                }
                                n++
                            }
                            y = n < l ? f.subarray(n, l) : null,
                                this.aacOverFlow = y,
                                this.aacLastPTS = s
                        }
                        ,
                        t._parseMPEGPES = function (e) {
                            for (var t = e.data, r = t.length, i = 0, a = 0, n = e.pts; a < r;)
                                if (E.isHeader(t, a)) {
                                    var s = E.appendFrame(this._audioTrack, t, a, n, i);
                                    if (!s)
                                        break;
                                    a += s.length,
                                        i++
                                } else
                                    a++
                        }
                        ,
                        t._parseID3PES = function (e) {
                            this._id3Track.samples.push(e)
                        }
                        ,
                        e
                }()
                , k = function () {
                    function e(e, t, r) {
                        this.observer = e,
                            this.config = r,
                            this.remuxer = t
                    }
                    var t = e.prototype;
                    return t.resetInitSegment = function (e, t, r, i) {
                        this._audioTrack = {
                            container: "audio/mpeg",
                            type: "audio",
                            id: -1,
                            sequenceNumber: 0,
                            isAAC: !1,
                            samples: [],
                            len: 0,
                            manifestCodec: t,
                            duration: i,
                            inputTimeScale: 9e4
                        }
                    }
                        ,
                        t.resetTimeStamp = function () { }
                        ,
                        e.probe = function (e) {
                            var t, r, i = m.a.getID3Data(e, 0);
                            if (i && void 0 !== m.a.getTimeStamp(i))
                                for (t = i.length,
                                    r = Math.min(e.length - 1, t + 100); t < r; t++)
                                    if (E.probe(e, t))
                                        return o.b.log("MPEG Audio sync word found !"),
                                            !0;
                            return !1
                        }
                        ,
                        t.append = function (e, t, r, i) {
                            for (var a = m.a.getID3Data(e, 0) || [], n = m.a.getTimeStamp(a), s = void 0 !== n ? 90 * n : 9e4 * t, o = a.length, l = e.length, d = 0, u = 0, c = this._audioTrack, h = [{
                                pts: s,
                                dts: s,
                                data: a
                            }]; o < l;)
                                if (E.isHeader(e, o)) {
                                    var f = E.appendFrame(c, e, o, s, d);
                                    if (!f)
                                        break;
                                    o += f.length,
                                        u = f.sample.pts,
                                        d++
                                } else
                                    m.a.isHeader(e, o) ? (a = m.a.getID3Data(e, o),
                                        h.push({
                                            pts: u,
                                            dts: u,
                                            data: a
                                        }),
                                        o += a.length) : o++;
                            this.remuxer.remux(c, {
                                samples: []
                            }, {
                                samples: h,
                                inputTimeScale: 9e4
                            }, {
                                samples: []
                            }, t, r, i)
                        }
                        ,
                        t.destroy = function () { }
                        ,
                        e
                }()
                , w = function () {
                    function e() { }
                    return e.getSilentFrame = function (e, t) {
                        switch (e) {
                            case "mp4a.40.2":
                                if (1 === t)
                                    return new Uint8Array([0, 200, 0, 128, 35, 128]);
                                if (2 === t)
                                    return new Uint8Array([33, 0, 73, 144, 2, 25, 0, 35, 128]);
                                if (3 === t)
                                    return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 142]);
                                if (4 === t)
                                    return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 128, 44, 128, 8, 2, 56]);
                                if (5 === t)
                                    return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 56]);
                                if (6 === t)
                                    return new Uint8Array([0, 200, 0, 128, 32, 132, 1, 38, 64, 8, 100, 0, 130, 48, 4, 153, 0, 33, 144, 2, 0, 178, 0, 32, 8, 224]);
                                break;
                            default:
                                if (1 === t)
                                    return new Uint8Array([1, 64, 34, 128, 163, 78, 230, 128, 186, 8, 0, 0, 0, 28, 6, 241, 193, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                                if (2 === t)
                                    return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94]);
                                if (3 === t)
                                    return new Uint8Array([1, 64, 34, 128, 163, 94, 230, 128, 186, 8, 0, 0, 0, 0, 149, 0, 6, 241, 161, 10, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 90, 94])
                        }
                        return null
                    }
                        ,
                        e
                }()
                , L = Math.pow(2, 32) - 1
                , D = function () {
                    function e() { }
                    return e.init = function () {
                        var t;
                        for (t in e.types = {
                            avc1: [],
                            avcC: [],
                            btrt: [],
                            dinf: [],
                            dref: [],
                            esds: [],
                            ftyp: [],
                            hdlr: [],
                            mdat: [],
                            mdhd: [],
                            mdia: [],
                            mfhd: [],
                            minf: [],
                            moof: [],
                            moov: [],
                            mp4a: [],
                            ".mp3": [],
                            mvex: [],
                            mvhd: [],
                            pasp: [],
                            sdtp: [],
                            stbl: [],
                            stco: [],
                            stsc: [],
                            stsd: [],
                            stsz: [],
                            stts: [],
                            tfdt: [],
                            tfhd: [],
                            traf: [],
                            trak: [],
                            trun: [],
                            trex: [],
                            tkhd: [],
                            vmhd: [],
                            smhd: []
                        },
                            e.types)
                            e.types.hasOwnProperty(t) && (e.types[t] = [t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2), t.charCodeAt(3)]);
                        var r = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 118, 105, 100, 101, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 86, 105, 100, 101, 111, 72, 97, 110, 100, 108, 101, 114, 0])
                            , i = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 115, 111, 117, 110, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 83, 111, 117, 110, 100, 72, 97, 110, 100, 108, 101, 114, 0]);
                        e.HDLR_TYPES = {
                            video: r,
                            audio: i
                        };
                        var a = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 12, 117, 114, 108, 32, 0, 0, 0, 1])
                            , n = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]);
                        e.STTS = e.STSC = e.STCO = n,
                            e.STSZ = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
                            e.VMHD = new Uint8Array([0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0]),
                            e.SMHD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0]),
                            e.STSD = new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1]);
                        var s = new Uint8Array([105, 115, 111, 109])
                            , o = new Uint8Array([97, 118, 99, 49])
                            , l = new Uint8Array([0, 0, 0, 1]);
                        e.FTYP = e.box(e.types.ftyp, s, l, s, o),
                            e.DINF = e.box(e.types.dinf, e.box(e.types.dref, a))
                    }
                        ,
                        e.box = function (e) {
                            for (var t, r = Array.prototype.slice.call(arguments, 1), i = 8, a = r.length, n = a; a--;)
                                i += r[a].byteLength;
                            for ((t = new Uint8Array(i))[0] = i >> 24 & 255,
                                t[1] = i >> 16 & 255,
                                t[2] = i >> 8 & 255,
                                t[3] = 255 & i,
                                t.set(e, 4),
                                a = 0,
                                i = 8; a < n; a++)
                                t.set(r[a], i),
                                    i += r[a].byteLength;
                            return t
                        }
                        ,
                        e.hdlr = function (t) {
                            return e.box(e.types.hdlr, e.HDLR_TYPES[t])
                        }
                        ,
                        e.mdat = function (t) {
                            return e.box(e.types.mdat, t)
                        }
                        ,
                        e.mdhd = function (t, r) {
                            r *= t;
                            var i = Math.floor(r / (L + 1))
                                , a = Math.floor(r % (L + 1));
                            return e.box(e.types.mdhd, new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, 85, 196, 0, 0]))
                        }
                        ,
                        e.mdia = function (t) {
                            return e.box(e.types.mdia, e.mdhd(t.timescale, t.duration), e.hdlr(t.type), e.minf(t))
                        }
                        ,
                        e.mfhd = function (t) {
                            return e.box(e.types.mfhd, new Uint8Array([0, 0, 0, 0, t >> 24, t >> 16 & 255, t >> 8 & 255, 255 & t]))
                        }
                        ,
                        e.minf = function (t) {
                            return "audio" === t.type ? e.box(e.types.minf, e.box(e.types.smhd, e.SMHD), e.DINF, e.stbl(t)) : e.box(e.types.minf, e.box(e.types.vmhd, e.VMHD), e.DINF, e.stbl(t))
                        }
                        ,
                        e.moof = function (t, r, i) {
                            return e.box(e.types.moof, e.mfhd(t), e.traf(i, r))
                        }
                        ,
                        e.moov = function (t) {
                            for (var r = t.length, i = []; r--;)
                                i[r] = e.trak(t[r]);
                            return e.box.apply(null, [e.types.moov, e.mvhd(t[0].timescale, t[0].duration)].concat(i).concat(e.mvex(t)))
                        }
                        ,
                        e.mvex = function (t) {
                            for (var r = t.length, i = []; r--;)
                                i[r] = e.trex(t[r]);
                            return e.box.apply(null, [e.types.mvex].concat(i))
                        }
                        ,
                        e.mvhd = function (t, r) {
                            r *= t;
                            var i = Math.floor(r / (L + 1))
                                , a = Math.floor(r % (L + 1))
                                , n = new Uint8Array([1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, t >> 24 & 255, t >> 16 & 255, t >> 8 & 255, 255 & t, i >> 24, i >> 16 & 255, i >> 8 & 255, 255 & i, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 255, 255, 255, 255]);
                            return e.box(e.types.mvhd, n)
                        }
                        ,
                        e.sdtp = function (t) {
                            var r, i, a = t.samples || [], n = new Uint8Array(4 + a.length);
                            for (i = 0; i < a.length; i++)
                                r = a[i].flags,
                                    n[i + 4] = r.dependsOn << 4 | r.isDependedOn << 2 | r.hasRedundancy;
                            return e.box(e.types.sdtp, n)
                        }
                        ,
                        e.stbl = function (t) {
                            return e.box(e.types.stbl, e.stsd(t), e.box(e.types.stts, e.STTS), e.box(e.types.stsc, e.STSC), e.box(e.types.stsz, e.STSZ), e.box(e.types.stco, e.STCO))
                        }
                        ,
                        e.avc1 = function (t) {
                            var r, i, a, n = [], s = [];
                            for (r = 0; r < t.sps.length; r++)
                                a = (i = t.sps[r]).byteLength,
                                    n.push(a >>> 8 & 255),
                                    n.push(255 & a),
                                    n = n.concat(Array.prototype.slice.call(i));
                            for (r = 0; r < t.pps.length; r++)
                                a = (i = t.pps[r]).byteLength,
                                    s.push(a >>> 8 & 255),
                                    s.push(255 & a),
                                    s = s.concat(Array.prototype.slice.call(i));
                            var o = e.box(e.types.avcC, new Uint8Array([1, n[3], n[4], n[5], 255, 224 | t.sps.length].concat(n).concat([t.pps.length]).concat(s)))
                                , l = t.width
                                , d = t.height
                                , u = t.pixelRatio[0]
                                , c = t.pixelRatio[1];
                            return e.box(e.types.avc1, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, l >> 8 & 255, 255 & l, d >> 8 & 255, 255 & d, 0, 72, 0, 0, 0, 72, 0, 0, 0, 0, 0, 0, 0, 1, 18, 100, 97, 105, 108, 121, 109, 111, 116, 105, 111, 110, 47, 104, 108, 115, 46, 106, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 24, 17, 17]), o, e.box(e.types.btrt, new Uint8Array([0, 28, 156, 128, 0, 45, 198, 192, 0, 45, 198, 192])), e.box(e.types.pasp, new Uint8Array([u >> 24, u >> 16 & 255, u >> 8 & 255, 255 & u, c >> 24, c >> 16 & 255, c >> 8 & 255, 255 & c])))
                        }
                        ,
                        e.esds = function (e) {
                            var t = e.config.length;
                            return new Uint8Array([0, 0, 0, 0, 3, 23 + t, 0, 1, 0, 4, 15 + t, 64, 21, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5].concat([t]).concat(e.config).concat([6, 1, 2]))
                        }
                        ,
                        e.mp4a = function (t) {
                            var r = t.samplerate;
                            return e.box(e.types.mp4a, new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]), e.box(e.types.esds, e.esds(t)))
                        }
                        ,
                        e.mp3 = function (t) {
                            var r = t.samplerate;
                            return e.box(e.types[".mp3"], new Uint8Array([0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, t.channelCount, 0, 16, 0, 0, 0, 0, r >> 8 & 255, 255 & r, 0, 0]))
                        }
                        ,
                        e.stsd = function (t) {
                            return "audio" === t.type ? t.isAAC || "mp3" !== t.codec ? e.box(e.types.stsd, e.STSD, e.mp4a(t)) : e.box(e.types.stsd, e.STSD, e.mp3(t)) : e.box(e.types.stsd, e.STSD, e.avc1(t))
                        }
                        ,
                        e.tkhd = function (t) {
                            var r = t.id
                                , i = t.duration * t.timescale
                                , a = t.width
                                , n = t.height
                                , s = Math.floor(i / (L + 1))
                                , o = Math.floor(i % (L + 1));
                            return e.box(e.types.tkhd, new Uint8Array([1, 0, 0, 7, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, r >> 24 & 255, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 0, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s, o >> 24, o >> 16 & 255, o >> 8 & 255, 255 & o, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 64, 0, 0, 0, a >> 8 & 255, 255 & a, 0, 0, n >> 8 & 255, 255 & n, 0, 0]))
                        }
                        ,
                        e.traf = function (t, r) {
                            var i = e.sdtp(t)
                                , a = t.id
                                , n = Math.floor(r / (L + 1))
                                , s = Math.floor(r % (L + 1));
                            return e.box(e.types.traf, e.box(e.types.tfhd, new Uint8Array([0, 0, 0, 0, a >> 24, a >> 16 & 255, a >> 8 & 255, 255 & a])), e.box(e.types.tfdt, new Uint8Array([1, 0, 0, 0, n >> 24, n >> 16 & 255, n >> 8 & 255, 255 & n, s >> 24, s >> 16 & 255, s >> 8 & 255, 255 & s])), e.trun(t, i.length + 16 + 20 + 8 + 16 + 8 + 8), i)
                        }
                        ,
                        e.trak = function (t) {
                            return t.duration = t.duration || 4294967295,
                                e.box(e.types.trak, e.tkhd(t), e.mdia(t))
                        }
                        ,
                        e.trex = function (t) {
                            var r = t.id;
                            return e.box(e.types.trex, new Uint8Array([0, 0, 0, 0, r >> 24, r >> 16 & 255, r >> 8 & 255, 255 & r, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1]))
                        }
                        ,
                        e.trun = function (t, r) {
                            var i, a, n, s, o, l, d = t.samples || [], u = d.length, c = 12 + 16 * u, h = new Uint8Array(c);
                            for (r += 8 + c,
                                h.set([0, 0, 15, 1, u >>> 24 & 255, u >>> 16 & 255, u >>> 8 & 255, 255 & u, r >>> 24 & 255, r >>> 16 & 255, r >>> 8 & 255, 255 & r], 0),
                                i = 0; i < u; i++)
                                n = (a = d[i]).duration,
                                    s = a.size,
                                    o = a.flags,
                                    l = a.cts,
                                    h.set([n >>> 24 & 255, n >>> 16 & 255, n >>> 8 & 255, 255 & n, s >>> 24 & 255, s >>> 16 & 255, s >>> 8 & 255, 255 & s, o.isLeading << 2 | o.dependsOn, o.isDependedOn << 6 | o.hasRedundancy << 4 | o.paddingValue << 1 | o.isNonSync, 61440 & o.degradPrio, 15 & o.degradPrio, l >>> 24 & 255, l >>> 16 & 255, l >>> 8 & 255, 255 & l], 12 + 16 * i);
                            return e.box(e.types.trun, h)
                        }
                        ,
                        e.initSegment = function (t) {
                            e.types || e.init();
                            var r, i = e.moov(t);
                            return (r = new Uint8Array(e.FTYP.byteLength + i.byteLength)).set(e.FTYP),
                                r.set(i, e.FTYP.byteLength),
                                r
                        }
                        ,
                        e
                }();
            function O(e, t, r, i) {
                void 0 === r && (r = 1),
                    void 0 === i && (i = !1);
                var a = e * t * r;
                return i ? Math.round(a) : a
            }
            function C(e, t) {
                return void 0 === t && (t = !1),
                    O(e, 1e3, 1 / 9e4, t)
            }
            function I(e, t) {
                return void 0 === t && (t = 1),
                    O(e, 9e4, 1 / t)
            }
            var P = I(10)
                , x = I(.2)
                , M = null;
            function F(e, t) {
                var r;
                if (void 0 === t)
                    return e;
                for (r = t < e ? -8589934592 : 8589934592; Math.abs(e - t) > 4294967296;)
                    e += r;
                return e
            }
            var U, N = function () {
                function e(e, t, r, i) {
                    if (this.observer = e,
                        this.config = t,
                        this.typeSupported = r,
                        this.ISGenerated = !1,
                        null === M) {
                        var a = navigator.userAgent.match(/Chrome\/(\d+)/i);
                        M = a ? parseInt(a[1]) : 0
                    }
                }
                var t = e.prototype;
                return t.destroy = function () { }
                    ,
                    t.resetTimeStamp = function (e) {
                        this._initPTS = this._initDTS = e
                    }
                    ,
                    t.resetInitSegment = function () {
                        this.ISGenerated = !1
                    }
                    ,
                    t.getVideoStartPts = function (e) {
                        var t = !1
                            , r = e.reduce((function (e, r) {
                                var i = r.pts - e;
                                return i < -4294967296 ? (t = !0,
                                    F(e, r.pts)) : i > 0 ? e : r.pts
                            }
                            ), e[0].pts);
                        return t && o.b.debug("PTS rollover detected"),
                            r
                    }
                    ,
                    t.remux = function (e, t, r, a, n, s, l) {
                        if (this.ISGenerated || this.generateIS(e, t, n),
                            this.ISGenerated) {
                            var d = e.samples.length
                                , u = t.samples.length
                                , c = n
                                , h = n;
                            if (d && u) {
                                var f = this.getVideoStartPts(t.samples)
                                    , g = (F(e.samples[0].pts, f) - f) / t.inputTimeScale;
                                c += Math.max(0, g),
                                    h += Math.max(0, -g)
                            }
                            if (d) {
                                e.timescale || (o.b.warn("regenerate InitSegment as audio detected"),
                                    this.generateIS(e, t, n));
                                var p, v = this.remuxAudio(e, c, s, l);
                                if (u)
                                    v && (p = v.endPTS - v.startPTS),
                                        t.timescale || (o.b.warn("regenerate InitSegment as video detected"),
                                            this.generateIS(e, t, n)),
                                        this.remuxVideo(t, h, s, p)
                            } else if (u) {
                                var m = this.remuxVideo(t, h, s, 0, l);
                                m && e.codec && this.remuxEmptyAudio(e, c, s, m)
                            }
                        }
                        r.samples.length && this.remuxID3(r, n),
                            a.samples.length && this.remuxText(a, n),
                            this.observer.trigger(i.a.FRAG_PARSED)
                    }
                    ,
                    t.generateIS = function (e, t, r) {
                        var n, s, l = this.observer, d = e.samples, u = t.samples, c = this.typeSupported, h = "audio/mp4", f = {}, g = {
                            tracks: f
                        }, p = void 0 === this._initPTS;
                        if (p && (n = s = 1 / 0),
                            e.config && d.length && (e.timescale = e.samplerate,
                                o.b.log("audio sampling rate : " + e.samplerate),
                                e.isAAC || (c.mpeg ? (h = "audio/mpeg",
                                    e.codec = "") : c.mp3 && (e.codec = "mp3")),
                                f.audio = {
                                    container: h,
                                    codec: e.codec,
                                    initSegment: !e.isAAC && c.mpeg ? new Uint8Array : D.initSegment([e]),
                                    metadata: {
                                        channelCount: e.channelCount
                                    }
                                },
                                p && (n = s = d[0].pts - Math.round(e.inputTimeScale * r))),
                            t.sps && t.pps && u.length) {
                            var v = t.inputTimeScale;
                            if (t.timescale = v,
                                f.video = {
                                    container: "video/mp4",
                                    codec: t.codec,
                                    initSegment: D.initSegment([t]),
                                    metadata: {
                                        width: t.width,
                                        height: t.height
                                    }
                                },
                                p) {
                                var m = this.getVideoStartPts(u)
                                    , y = Math.round(v * r);
                                s = Math.min(s, F(u[0].dts, m) - y),
                                    n = Math.min(n, m - y),
                                    this.observer.trigger(i.a.INIT_PTS_FOUND, {
                                        initPTS: n
                                    })
                            }
                        } else
                            p && f.audio && this.observer.trigger(i.a.INIT_PTS_FOUND, {
                                initPTS: n
                            });
                        Object.keys(f).length ? (l.trigger(i.a.FRAG_PARSING_INIT_SEGMENT, g),
                            this.ISGenerated = !0,
                            p && (this._initPTS = n,
                                this._initDTS = s)) : l.trigger(i.a.ERROR, {
                                    type: a.b.MEDIA_ERROR,
                                    details: a.a.FRAG_PARSING_ERROR,
                                    fatal: !1,
                                    reason: "no audio/video samples found"
                                })
                    }
                    ,
                    t.remuxVideo = function (e, t, r, n) {
                        var s, l, d, u, c, h = e.timescale, f = e.samples, g = [], p = f.length, v = this._initPTS, m = 8, y = Number.POSITIVE_INFINITY, b = Number.NEGATIVE_INFINITY, T = 0, E = !1, S = this.nextAvcDts;
                        if (0 !== p) {
                            if (!r)
                                S = t * h - (f[0].pts - F(f[0].dts, f[0].pts));
                            for (var _ = 0; _ < p; _++) {
                                var R = f[_];
                                R.pts = F(R.pts - v, S),
                                    R.dts = F(R.dts - v, S),
                                    R.dts > R.pts && (T = Math.max(Math.min(T, R.pts - R.dts), -1 * x)),
                                    R.dts < f[_ > 0 ? _ - 1 : _].dts && (E = !0)
                            }
                            E && f.sort((function (e, t) {
                                var r = e.dts - t.dts
                                    , i = e.pts - t.pts;
                                return r || i || e.id - t.id
                            }
                            )),
                                u = f[0].dts,
                                c = f[p - 1].dts;
                            var A = Math.round((c - u) / (p - 1));
                            if (T < 0) {
                                if (T < -2 * A) {
                                    o.b.warn("PTS < DTS detected in video samples, offsetting DTS from PTS by " + C(-A, !0) + " ms");
                                    for (var k = T, w = 0; w < p; w++)
                                        f[w].dts = k = Math.max(k, f[w].pts - A),
                                            f[w].pts = Math.max(k, f[w].pts)
                                } else {
                                    o.b.warn("PTS < DTS detected in video samples, shifting DTS by " + C(T, !0) + " ms to overcome this issue");
                                    for (var L = 0; L < p; L++)
                                        f[L].dts = f[L].dts + T
                                }
                                u = f[0].dts,
                                    c = f[p - 1].dts
                            }
                            if (r) {
                                var O = u - S
                                    , I = O > A;
                                if (I || O < -1) {
                                    I ? o.b.warn("AVC: " + C(O, !0) + " ms (" + O + "dts) hole between fragments detected, filling it") : o.b.warn("AVC: " + C(-O, !0) + " ms (" + O + "dts) overlapping between fragments detected"),
                                        u = S;
                                    var P = f[0].pts - O;
                                    f[0].dts = u,
                                        f[0].pts = P,
                                        o.b.log("Video: First PTS/DTS adjusted: " + C(P, !0) + "/" + C(u, !0) + ", delta: " + C(O, !0) + " ms")
                                }
                            }
                            M && M < 75 && (u = Math.max(0, u));
                            for (var U = 0, N = 0, B = 0; B < p; B++) {
                                for (var G = f[B], K = G.units, j = K.length, H = 0, V = 0; V < j; V++)
                                    H += K[V].data.length;
                                N += H,
                                    U += j,
                                    G.length = H,
                                    G.dts = Math.max(G.dts, u),
                                    G.pts = Math.max(G.pts, G.dts, 0),
                                    y = Math.min(G.pts, y),
                                    b = Math.max(G.pts, b)
                            }
                            c = f[p - 1].dts;
                            var Y = N + 4 * U + 8;
                            try {
                                l = new Uint8Array(Y)
                            } catch (e) {
                                return void this.observer.trigger(i.a.ERROR, {
                                    type: a.b.MUX_ERROR,
                                    details: a.a.REMUX_ALLOC_ERROR,
                                    fatal: !1,
                                    bytes: Y,
                                    reason: "fail allocating video mdat " + Y
                                })
                            }
                            var W = new DataView(l.buffer);
                            W.setUint32(0, Y),
                                l.set(D.types.mdat, 4);
                            for (var q = 0; q < p; q++) {
                                for (var X, z = f[q], Q = z.units, $ = 0, J = 0, Z = Q.length; J < Z; J++) {
                                    var ee = Q[J]
                                        , te = ee.data
                                        , re = ee.data.byteLength;
                                    W.setUint32(m, re),
                                        m += 4,
                                        l.set(te, m),
                                        m += re,
                                        $ += 4 + re
                                }
                                if (q < p - 1)
                                    s = f[q + 1].dts - z.dts;
                                else {
                                    var ie = this.config
                                        , ae = z.dts - f[q > 0 ? q - 1 : q].dts;
                                    if (ie.stretchShortVideoTrack) {
                                        var ne = ie.maxBufferHole
                                            , se = Math.floor(ne * h)
                                            , oe = (n ? y + n * h : this.nextAudioPts) - z.pts;
                                        oe > se ? ((s = oe - ae) < 0 && (s = ae),
                                            o.b.log("It is approximately " + C(oe, !1) + " ms to the next segment; using duration " + C(s, !1) + " ms for the last video frame.")) : s = ae
                                    } else
                                        s = ae
                                }
                                X = Math.round(z.pts - z.dts),
                                    g.push({
                                        size: $,
                                        duration: s,
                                        cts: X,
                                        flags: {
                                            isLeading: 0,
                                            isDependedOn: 0,
                                            hasRedundancy: 0,
                                            degradPrio: 0,
                                            dependsOn: z.key ? 2 : 1,
                                            isNonSync: z.key ? 0 : 1
                                        }
                                    })
                            }
                            this.nextAvcDts = c + s;
                            var le = e.dropped;
                            if (e.nbNalu = 0,
                                e.dropped = 0,
                                g.length && navigator.userAgent.toLowerCase().indexOf("chrome") > -1) {
                                var de = g[0].flags;
                                de.dependsOn = 2,
                                    de.isNonSync = 0
                            }
                            e.samples = g,
                                d = D.moof(e.sequenceNumber++, u, e),
                                e.samples = [];
                            var ue = {
                                data1: d,
                                data2: l,
                                startPTS: y / h,
                                endPTS: (b + s) / h,
                                startDTS: u / h,
                                endDTS: this.nextAvcDts / h,
                                type: "video",
                                hasAudio: !1,
                                hasVideo: !0,
                                nb: g.length,
                                dropped: le
                            };
                            return this.observer.trigger(i.a.FRAG_PARSING_DATA, ue),
                                ue
                        }
                    }
                    ,
                    t.remuxAudio = function (e, t, r, n) {
                        var s, l, d, u, c, h, f = e.inputTimeScale, g = e.timescale, p = f / g, v = (e.isAAC ? 1024 : 1152) * p, m = this._initPTS, y = !e.isAAC && this.typeSupported.mpeg, b = y ? 0 : 8, T = e.samples, E = [], S = this.nextAudioPts;
                        if (r |= T.length && S && (n && Math.abs(t - S / f) < .1 || Math.abs(T[0].pts - S - m) < 20 * v),
                            T.forEach((function (e) {
                                e.pts = e.dts = F(e.pts - m, t * f)
                            }
                            )),
                            0 !== (T = T.filter((function (e) {
                                return e.pts >= 0
                            }
                            ))).length) {
                            if (r || (S = n ? Math.max(0, t * f) : T[0].pts),
                                e.isAAC)
                                for (var _ = this.config.maxAudioFramesDrift, R = 0, A = S; R < T.length;) {
                                    var k = T[R]
                                        , L = k.pts
                                        , O = L - A;
                                    if (O <= -_ * v)
                                        r || R > 0 ? (o.b.warn("Dropping 1 audio frame @ " + C(A, !0) / 1e3 + "s due to " + C(O, !0) + " ms overlap."),
                                            T.splice(R, 1)) : (o.b.warn("Audio frame @ " + C(L, !0) / 1e3 + "s overlaps nextAudioPts by " + C(O, !0) + " ms."),
                                                A = L + v,
                                                R++);
                                    else if (O >= _ * v && O < P && A) {
                                        var I = Math.round(O / v);
                                        o.b.warn("Injecting " + I + " audio frames @ " + C(A, !0) / 1e3 + "s due to " + C(O, !0) + " ms gap.");
                                        for (var x = 0; x < I; x++) {
                                            var M = Math.max(A, 0);
                                            (l = w.getSilentFrame(e.manifestCodec || e.codec, e.channelCount)) || (o.b.log("Unable to get silent frame for given audio codec; duplicating last frame instead."),
                                                l = k.unit.subarray()),
                                                T.splice(R, 0, {
                                                    unit: l,
                                                    pts: M,
                                                    dts: M
                                                }),
                                                A += v,
                                                R++
                                        }
                                        k.pts = k.dts = A,
                                            A += v,
                                            R++
                                    } else
                                        Math.abs(O),
                                            k.pts = k.dts = A,
                                            A += v,
                                            R++
                                }
                            for (var U = T.length, N = 0; U--;)
                                N += T[U].unit.byteLength;
                            for (var B = 0, G = T.length; B < G; B++) {
                                var K = T[B]
                                    , j = K.unit
                                    , H = K.pts;
                                if (void 0 !== h && s)
                                    s.duration = Math.round((H - h) / p);
                                else {
                                    var V = H - S
                                        , Y = 0;
                                    if (r && e.isAAC && V) {
                                        if (V > 0 && V < P)
                                            Y = Math.round((H - S) / v),
                                                o.b.log(C(V, !0) + " ms hole between AAC samples detected,filling it"),
                                                Y > 0 && ((l = w.getSilentFrame(e.manifestCodec || e.codec, e.channelCount)) || (l = j.subarray()),
                                                    N += Y * l.length);
                                        else if (V < -12) {
                                            o.b.log("drop overlapping AAC sample, expected/parsed/delta: " + C(S, !0) + " ms / " + C(H, !0) + " ms / " + C(-V, !0) + " ms"),
                                                N -= j.byteLength;
                                            continue
                                        }
                                        H = S
                                    }
                                    if (c = H,
                                        !(N > 0))
                                        return;
                                    N += b;
                                    try {
                                        d = new Uint8Array(N)
                                    } catch (e) {
                                        return void this.observer.trigger(i.a.ERROR, {
                                            type: a.b.MUX_ERROR,
                                            details: a.a.REMUX_ALLOC_ERROR,
                                            fatal: !1,
                                            bytes: N,
                                            reason: "fail allocating audio mdat " + N
                                        })
                                    }
                                    y || (new DataView(d.buffer).setUint32(0, N),
                                        d.set(D.types.mdat, 4));
                                    for (var W = 0; W < Y; W++)
                                        (l = w.getSilentFrame(e.manifestCodec || e.codec, e.channelCount)) || (o.b.log("Unable to get silent frame for given audio codec; duplicating this frame instead."),
                                            l = j.subarray()),
                                            d.set(l, b),
                                            b += l.byteLength,
                                            s = {
                                                size: l.byteLength,
                                                cts: 0,
                                                duration: 1024,
                                                flags: {
                                                    isLeading: 0,
                                                    isDependedOn: 0,
                                                    hasRedundancy: 0,
                                                    degradPrio: 0,
                                                    dependsOn: 1
                                                }
                                            },
                                            E.push(s)
                                }
                                d.set(j, b);
                                var q = j.byteLength;
                                b += q,
                                    s = {
                                        size: q,
                                        cts: 0,
                                        duration: 0,
                                        flags: {
                                            isLeading: 0,
                                            isDependedOn: 0,
                                            hasRedundancy: 0,
                                            degradPrio: 0,
                                            dependsOn: 1
                                        }
                                    },
                                    E.push(s),
                                    h = H
                            }
                            var X = 0;
                            if ((U = E.length) >= 2 && (X = E[U - 2].duration,
                                s.duration = X),
                                U) {
                                this.nextAudioPts = S = h + p * X,
                                    e.samples = E,
                                    u = y ? new Uint8Array : D.moof(e.sequenceNumber++, c / p, e),
                                    e.samples = [];
                                var z = c / f
                                    , Q = S / f
                                    , $ = {
                                        data1: u,
                                        data2: d,
                                        startPTS: z,
                                        endPTS: Q,
                                        startDTS: z,
                                        endDTS: Q,
                                        type: "audio",
                                        hasAudio: !0,
                                        hasVideo: !1,
                                        nb: U
                                    };
                                return this.observer.trigger(i.a.FRAG_PARSING_DATA, $),
                                    $
                            }
                            return null
                        }
                    }
                    ,
                    t.remuxEmptyAudio = function (e, t, r, i) {
                        var a = e.inputTimeScale
                            , n = a / (e.samplerate ? e.samplerate : a)
                            , s = this.nextAudioPts
                            , l = (void 0 !== s ? s : i.startDTS * a) + this._initDTS
                            , d = i.endDTS * a + this._initDTS
                            , u = 1024 * n
                            , c = Math.ceil((d - l) / u)
                            , h = w.getSilentFrame(e.manifestCodec || e.codec, e.channelCount);
                        if (o.b.warn("remux empty Audio"),
                            h) {
                            for (var f = [], g = 0; g < c; g++) {
                                var p = l + g * u;
                                f.push({
                                    unit: h,
                                    pts: p,
                                    dts: p
                                })
                            }
                            e.samples = f,
                                this.remuxAudio(e, t, r)
                        } else
                            o.b.trace("Unable to remuxEmptyAudio since we were unable to get a silent frame for given audio codec!")
                    }
                    ,
                    t.remuxID3 = function (e, t) {
                        var r = e.samples.length;
                        if (r) {
                            for (var a = e.inputTimeScale, n = this._initPTS, s = this._initDTS, o = 0; o < r; o++) {
                                var l = e.samples[o];
                                l.pts = F(l.pts - n, t * a) / a,
                                    l.dts = F(l.dts - s, t * a) / a
                            }
                            this.observer.trigger(i.a.FRAG_PARSING_METADATA, {
                                samples: e.samples
                            }),
                                e.samples = []
                        }
                    }
                    ,
                    t.remuxText = function (e, t) {
                        var r = e.samples.length
                            , a = e.inputTimeScale
                            , n = this._initPTS;
                        if (r) {
                            for (var s = 0; s < r; s++) {
                                var o = e.samples[s];
                                o.pts = F(o.pts - n, t * a) / a
                            }
                            e.samples.sort((function (e, t) {
                                return e.pts - t.pts
                            }
                            )),
                                this.observer.trigger(i.a.FRAG_PARSING_USERDATA, {
                                    samples: e.samples
                                })
                        }
                        e.samples = []
                    }
                    ,
                    e
            }(), B = function () {
                function e(e) {
                    this.observer = e
                }
                var t = e.prototype;
                return t.destroy = function () { }
                    ,
                    t.resetTimeStamp = function () { }
                    ,
                    t.resetInitSegment = function () { }
                    ,
                    t.remux = function (e, t, r, a, n, s, o, l) {
                        var d = this.observer
                            , u = "";
                        e && (u += "audio"),
                            t && (u += "video"),
                            d.trigger(i.a.FRAG_PARSING_DATA, {
                                data1: l,
                                startPTS: n,
                                startDTS: n,
                                type: u,
                                hasAudio: !!e,
                                hasVideo: !!t,
                                nb: 1,
                                dropped: 0
                            }),
                            d.trigger(i.a.FRAG_PARSED)
                    }
                    ,
                    e
            }(), G = Object(l.a)();
            try {
                U = G.performance.now.bind(G.performance)
            } catch (e) {
                o.b.debug("Unable to use Performance API on this environment"),
                    U = G.Date.now
            }
            var K = function () {
                function e(e, t, r, i) {
                    this.observer = e,
                        this.typeSupported = t,
                        this.config = r,
                        this.vendor = i
                }
                var t = e.prototype;
                return t.destroy = function () {
                    var e = this.demuxer;
                    e && e.destroy()
                }
                    ,
                    t.push = function (e, t, r, a, s, o, l, d, u, c, h, f) {
                        var g = this;
                        if (e.byteLength > 0 && null != t && null != t.key && "AES-128" === t.method) {
                            var p = this.decrypter;
                            null == p && (p = this.decrypter = new n.a(this.observer, this.config));
                            var v = U();
                            p.decrypt(e, t.key.buffer, t.iv.buffer, (function (e) {
                                var n = U();
                                g.observer.trigger(i.a.FRAG_DECRYPTED, {
                                    stats: {
                                        tstart: v,
                                        tdecrypt: n
                                    }
                                }),
                                    g.pushDecrypted(new Uint8Array(e), t, new Uint8Array(r), a, s, o, l, d, u, c, h, f)
                            }
                            ))
                        } else
                            this.pushDecrypted(new Uint8Array(e), t, new Uint8Array(r), a, s, o, l, d, u, c, h, f)
                    }
                    ,
                    t.pushDecrypted = function (e, t, r, n, s, o, l, d, u, c, h, f) {
                        var g = this.demuxer
                            , p = this.remuxer;
                        if (!g || l || d) {
                            for (var v, m = this.observer, T = this.typeSupported, E = this.config, S = [{
                                demux: A,
                                remux: N
                            }, {
                                demux: b.a,
                                remux: B
                            }, {
                                demux: y,
                                remux: N
                            }, {
                                demux: k,
                                remux: N
                            }], _ = 0, R = S.length; _ < R && !(v = S[_]).demux.probe(e); _++)
                                ;
                            if (!v)
                                return void m.trigger(i.a.ERROR, {
                                    type: a.b.MEDIA_ERROR,
                                    details: a.a.FRAG_PARSING_ERROR,
                                    fatal: !0,
                                    reason: "no demux matching with content found"
                                });
                            p && p instanceof v.remux || (p = new v.remux(m, E, T, this.vendor)),
                                g && g instanceof v.demux || (g = new v.demux(m, p, E, T),
                                    this.probe = v.demux.probe),
                                this.demuxer = g,
                                this.remuxer = p
                        }
                        (l || d) && (g.resetInitSegment(r, n, s, c),
                            p.resetInitSegment()),
                            l && (g.resetTimeStamp(f),
                                p.resetTimeStamp(f)),
                            "function" == typeof g.setDecryptData && g.setDecryptData(t),
                            g.append(e, o, u, h)
                    }
                    ,
                    e
            }();
            t.a = K
        }
        , function (e, t, r) {
            "use strict";
            var i = r(0)
                , a = r(1)
                , n = Math.pow(2, 32) - 1
                , s = function () {
                    function e(e, t) {
                        this.observer = e,
                            this.remuxer = t
                    }
                    var t = e.prototype;
                    return t.resetTimeStamp = function (e) {
                        this.initPTS = e
                    }
                        ,
                        t.resetInitSegment = function (t, r, i, n) {
                            if (t && t.byteLength) {
                                var s = this.initData = e.parseInitSegment(t);
                                null == r && (r = "mp4a.40.5"),
                                    null == i && (i = "avc1.42e01e");
                                var o = {};
                                s.audio && s.video ? o.audiovideo = {
                                    container: "video/mp4",
                                    codec: r + "," + i,
                                    initSegment: n ? t : null
                                } : (s.audio && (o.audio = {
                                    container: "audio/mp4",
                                    codec: r,
                                    initSegment: n ? t : null
                                }),
                                    s.video && (o.video = {
                                        container: "video/mp4",
                                        codec: i,
                                        initSegment: n ? t : null
                                    })),
                                    this.observer.trigger(a.a.FRAG_PARSING_INIT_SEGMENT, {
                                        tracks: o
                                    })
                            } else
                                r && (this.audioCodec = r),
                                    i && (this.videoCodec = i)
                        }
                        ,
                        e.probe = function (t) {
                            return e.findBox({
                                data: t,
                                start: 0,
                                end: Math.min(t.length, 16384)
                            }, ["moof"]).length > 0
                        }
                        ,
                        e.bin2str = function (e) {
                            return String.fromCharCode.apply(null, e)
                        }
                        ,
                        e.readUint16 = function (e, t) {
                            e.data && (t += e.start,
                                e = e.data);
                            var r = e[t] << 8 | e[t + 1];
                            return r < 0 ? 65536 + r : r
                        }
                        ,
                        e.readUint32 = function (e, t) {
                            e.data && (t += e.start,
                                e = e.data);
                            var r = e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3];
                            return r < 0 ? 4294967296 + r : r
                        }
                        ,
                        e.writeUint32 = function (e, t, r) {
                            e.data && (t += e.start,
                                e = e.data),
                                e[t] = r >> 24,
                                e[t + 1] = r >> 16 & 255,
                                e[t + 2] = r >> 8 & 255,
                                e[t + 3] = 255 & r
                        }
                        ,
                        e.findBox = function (t, r) {
                            var i, a, n, s, o, l, d = [];
                            if (t.data ? (o = t.start,
                                n = t.end,
                                t = t.data) : (o = 0,
                                    n = t.byteLength),
                                !r.length)
                                return null;
                            for (i = o; i < n;)
                                l = (a = e.readUint32(t, i)) > 1 ? i + a : n,
                                    e.bin2str(t.subarray(i + 4, i + 8)) === r[0] && (1 === r.length ? d.push({
                                        data: t,
                                        start: i + 8,
                                        end: l
                                    }) : (s = e.findBox({
                                        data: t,
                                        start: i + 8,
                                        end: l
                                    }, r.slice(1))).length && (d = d.concat(s))),
                                    i = l;
                            return d
                        }
                        ,
                        e.parseSegmentIndex = function (t) {
                            var r, i = e.findBox(t, ["moov"])[0], a = i ? i.end : null, n = 0, s = e.findBox(t, ["sidx"]);
                            if (!s || !s[0])
                                return null;
                            r = [];
                            var o = (s = s[0]).data[0];
                            n = 0 === o ? 8 : 16;
                            var l = e.readUint32(s, n);
                            n += 4;
                            n += 0 === o ? 8 : 16,
                                n += 2;
                            var d = s.end + 0
                                , u = e.readUint16(s, n);
                            n += 2;
                            for (var c = 0; c < u; c++) {
                                var h = n
                                    , f = e.readUint32(s, h);
                                h += 4;
                                var g = 2147483647 & f;
                                if (1 === (2147483648 & f) >>> 31)
                                    return void console.warn("SIDX has hierarchical references (not supported)");
                                var p = e.readUint32(s, h);
                                h += 4,
                                    r.push({
                                        referenceSize: g,
                                        subsegmentDuration: p,
                                        info: {
                                            duration: p / l,
                                            start: d,
                                            end: d + g - 1
                                        }
                                    }),
                                    d += g,
                                    n = h += 4
                            }
                            return {
                                earliestPresentationTime: 0,
                                timescale: l,
                                version: o,
                                referencesCount: u,
                                references: r,
                                moovEndOffset: a
                            }
                        }
                        ,
                        e.parseInitSegment = function (t) {
                            var r = [];
                            return e.findBox(t, ["moov", "trak"]).forEach((function (t) {
                                var a = e.findBox(t, ["tkhd"])[0];
                                if (a) {
                                    var n = a.data[a.start]
                                        , s = 0 === n ? 12 : 20
                                        , o = e.readUint32(a, s)
                                        , l = e.findBox(t, ["mdia", "mdhd"])[0];
                                    if (l) {
                                        s = 0 === (n = l.data[l.start]) ? 12 : 20;
                                        var d = e.readUint32(l, s)
                                            , u = e.findBox(t, ["mdia", "hdlr"])[0];
                                        if (u) {
                                            var c = {
                                                soun: "audio",
                                                vide: "video"
                                            }[e.bin2str(u.data.subarray(u.start + 8, u.start + 12))];
                                            if (c) {
                                                var h = e.findBox(t, ["mdia", "minf", "stbl", "stsd"]);
                                                if (h.length) {
                                                    h = h[0];
                                                    var f = e.bin2str(h.data.subarray(h.start + 12, h.start + 16));
                                                    i.b.log("MP4Demuxer:" + c + ":" + f + " found")
                                                }
                                                r[o] = {
                                                    timescale: d,
                                                    type: c
                                                },
                                                    r[c] = {
                                                        timescale: d,
                                                        id: o
                                                    }
                                            }
                                        }
                                    }
                                }
                            }
                            )),
                                r
                        }
                        ,
                        e.getStartDTS = function (t, r) {
                            var i, a, n;
                            return i = e.findBox(r, ["moof", "traf"]),
                                a = [].concat.apply([], i.map((function (r) {
                                    return e.findBox(r, ["tfhd"]).map((function (i) {
                                        var a, n;
                                        return a = e.readUint32(i, 4),
                                            n = t[a].timescale || 9e4,
                                            e.findBox(r, ["tfdt"]).map((function (t) {
                                                var r, i;
                                                return r = t.data[t.start],
                                                    i = e.readUint32(t, 4),
                                                    1 === r && (i *= Math.pow(2, 32),
                                                        i += e.readUint32(t, 8)),
                                                    i
                                            }
                                            ))[0] / n
                                    }
                                    ))
                                }
                                ))),
                                n = Math.min.apply(null, a),
                                isFinite(n) ? n : 0
                        }
                        ,
                        e.offsetStartDTS = function (t, r, i) {
                            e.findBox(r, ["moof", "traf"]).map((function (r) {
                                return e.findBox(r, ["tfhd"]).map((function (a) {
                                    var s = e.readUint32(a, 4)
                                        , o = t[s].timescale || 9e4;
                                    e.findBox(r, ["tfdt"]).map((function (t) {
                                        var r = t.data[t.start]
                                            , a = e.readUint32(t, 4);
                                        if (0 === r)
                                            e.writeUint32(t, 4, a - i * o);
                                        else {
                                            a *= Math.pow(2, 32),
                                                a += e.readUint32(t, 8),
                                                a -= i * o,
                                                a = Math.max(a, 0);
                                            var s = Math.floor(a / (n + 1))
                                                , l = Math.floor(a % (n + 1));
                                            e.writeUint32(t, 4, s),
                                                e.writeUint32(t, 8, l)
                                        }
                                    }
                                    ))
                                }
                                ))
                            }
                            ))
                        }
                        ,
                        t.append = function (t, r, i, n) {
                            var s = this.initData;
                            s || (this.resetInitSegment(t, this.audioCodec, this.videoCodec, !1),
                                s = this.initData);
                            var o, l = this.initPTS;
                            if (void 0 === l) {
                                var d = e.getStartDTS(s, t);
                                this.initPTS = l = d - r,
                                    this.observer.trigger(a.a.INIT_PTS_FOUND, {
                                        initPTS: l
                                    })
                            }
                            e.offsetStartDTS(s, t, l),
                                o = e.getStartDTS(s, t),
                                this.remuxer.remux(s.audio, s.video, null, null, o, i, n, t)
                        }
                        ,
                        t.destroy = function () { }
                        ,
                        e
                }();
            t.a = s
        }
        , function (e, t, r) {
            function i(e) {
                var t = {};
                function r(i) {
                    if (t[i])
                        return t[i].exports;
                    var a = t[i] = {
                        i: i,
                        l: !1,
                        exports: {}
                    };
                    return e[i].call(a.exports, a, a.exports, r),
                        a.l = !0,
                        a.exports
                }
                r.m = e,
                    r.c = t,
                    r.i = function (e) {
                        return e
                    }
                    ,
                    r.d = function (e, t, i) {
                        r.o(e, t) || Object.defineProperty(e, t, {
                            configurable: !1,
                            enumerable: !0,
                            get: i
                        })
                    }
                    ,
                    r.r = function (e) {
                        Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                    }
                    ,
                    r.n = function (e) {
                        var t = e && e.__esModule ? function () {
                            return e.default
                        }
                            : function () {
                                return e
                            }
                            ;
                        return r.d(t, "a", t),
                            t
                    }
                    ,
                    r.o = function (e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }
                    ,
                    r.p = "/",
                    r.oe = function (e) {
                        throw console.error(e),
                        e
                    }
                    ;
                var i = r(r.s = ENTRY_MODULE);
                return i.default || i
            }
            function a(e) {
                return (e + "").replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&")
            }
            function n(e, t, i) {
                var n = {};
                n[i] = [];
                var s = t.toString()
                    , o = s.match(/^function\s?\w*\(\w+,\s*\w+,\s*(\w+)\)/);
                if (!o)
                    return n;
                for (var l, d = o[1], u = new RegExp("(\\\\n|\\W)" + a(d) + "\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)", "g"); l = u.exec(s);)
                    "dll-reference" !== l[3] && n[i].push(l[3]);
                for (u = new RegExp("\\(" + a(d) + '\\("(dll-reference\\s([\\.|\\-|\\+|\\w|/|@]+))"\\)\\)\\(\\s*(/\\*.*?\\*/)?\\s*.*?([\\.|\\-|\\+|\\w|/|@]+).*?\\)', "g"); l = u.exec(s);)
                    e[l[2]] || (n[i].push(l[1]),
                        e[l[2]] = r(l[1]).m),
                        n[l[2]] = n[l[2]] || [],
                        n[l[2]].push(l[4]);
                for (var c, h = Object.keys(n), f = 0; f < h.length; f++)
                    for (var g = 0; g < n[h[f]].length; g++)
                        c = n[h[f]][g],
                            isNaN(1 * c) || (n[h[f]][g] = 1 * n[h[f]][g]);
                return n
            }
            function s(e) {
                return Object.keys(e).reduce((function (t, r) {
                    return t || e[r].length > 0
                }
                ), !1)
            }
            e.exports = function (e, t) {
                t = t || {};
                var a = {
                    main: r.m
                }
                    , o = t.all ? {
                        main: Object.keys(a.main)
                    } : function (e, t) {
                        for (var r = {
                            main: [t]
                        }, i = {
                            main: []
                        }, a = {
                            main: {}
                        }; s(r);)
                            for (var o = Object.keys(r), l = 0; l < o.length; l++) {
                                var d = o[l]
                                    , u = r[d].pop();
                                if (a[d] = a[d] || {},
                                    !a[d][u] && e[d][u]) {
                                    a[d][u] = !0,
                                        i[d] = i[d] || [],
                                        i[d].push(u);
                                    for (var c = n(e, e[d][u], d), h = Object.keys(c), f = 0; f < h.length; f++)
                                        r[h[f]] = r[h[f]] || [],
                                            r[h[f]] = r[h[f]].concat(c[h[f]])
                                }
                            }
                        return i
                    }(a, e)
                    , l = "";
                Object.keys(o).filter((function (e) {
                    return "main" !== e
                }
                )).forEach((function (e) {
                    for (var t = 0; o[e][t];)
                        t++;
                    o[e].push(t),
                        a[e][t] = "(function(module, exports, __webpack_require__) { module.exports = __webpack_require__; })",
                        l = l + "var " + e + " = (" + i.toString().replace("ENTRY_MODULE", JSON.stringify(t)) + ")({" + o[e].map((function (t) {
                            return JSON.stringify(t) + ": " + a[e][t].toString()
                        }
                        )).join(",") + "});\n"
                }
                )),
                    l = l + "new ((" + i.toString().replace("ENTRY_MODULE", JSON.stringify(e)) + ")({" + o.main.map((function (e) {
                        return JSON.stringify(e) + ": " + a.main[e].toString()
                    }
                    )).join(",") + "}))(self);";
                var d = new window.Blob([l], {
                    type: "text/javascript"
                });
                if (t.bare)
                    return d;
                var u = (window.URL || window.webkitURL || window.mozURL || window.msURL).createObjectURL(d)
                    , c = new window.Worker(u);
                return c.objectURL = u,
                    c
            }
        }
        , function (e, t, r) {
            "use strict";
            r.r(t);
            var i = r(9)
                , a = r(1)
                , n = r(0)
                , s = r(8);
            t.default = function (e) {
                var t = new s.EventEmitter;
                t.trigger = function (e) {
                    for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
                        i[a - 1] = arguments[a];
                    t.emit.apply(t, [e, e].concat(i))
                }
                    ,
                    t.off = function (e) {
                        for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
                            i[a - 1] = arguments[a];
                        t.removeListener.apply(t, [e].concat(i))
                    }
                    ;
                var r = function (t, r) {
                    e.postMessage({
                        event: t,
                        data: r
                    })
                };
                e.addEventListener("message", (function (a) {
                    var s = a.data;
                    switch (s.cmd) {
                        case "init":
                            var o = JSON.parse(s.config);
                            e.demuxer = new i.a(t, s.typeSupported, o, s.vendor),
                                Object(n.a)(o.debug),
                                r("init", null);
                            break;
                        case "demux":
                            e.demuxer.push(s.data, s.decryptdata, s.initSegment, s.audioCodec, s.videoCodec, s.timeOffset, s.discontinuity, s.trackSwitch, s.contiguous, s.duration, s.accurateTimeOffset, s.defaultInitPTS)
                    }
                }
                )),
                    t.on(a.a.FRAG_DECRYPTED, r),
                    t.on(a.a.FRAG_PARSING_INIT_SEGMENT, r),
                    t.on(a.a.FRAG_PARSED, r),
                    t.on(a.a.ERROR, r),
                    t.on(a.a.FRAG_PARSING_METADATA, r),
                    t.on(a.a.FRAG_PARSING_USERDATA, r),
                    t.on(a.a.INIT_PTS_FOUND, r),
                    t.on(a.a.FRAG_PARSING_DATA, (function (t, r) {
                        var i = []
                            , a = {
                                event: t,
                                data: r
                            };
                        r.data1 && (a.data1 = r.data1.buffer,
                            i.push(r.data1.buffer),
                            delete r.data1),
                            r.data2 && (a.data2 = r.data2.buffer,
                                i.push(r.data2.buffer),
                                delete r.data2),
                            e.postMessage(a, i)
                    }
                    ))
            }
        }
        , function (e, t, r) {
            "use strict";
            r.r(t),
                r.d(t, "default", (function () {
                    return nr
                }
                ));
            var i = {};
            r.r(i),
                r.d(i, "newCue", (function () {
                    return ft
                }
                ));
            var a, n, s = r(6), o = r(2), l = r(3), d = r(1), u = r(0), c = {
                hlsEventGeneric: !0,
                hlsHandlerDestroying: !0,
                hlsHandlerDestroyed: !0
            }, h = function () {
                function e(e) {
                    this.hls = void 0,
                        this.handledEvents = void 0,
                        this.useGenericHandler = void 0,
                        this.hls = e,
                        this.onEvent = this.onEvent.bind(this);
                    for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                        r[i - 1] = arguments[i];
                    this.handledEvents = r,
                        this.useGenericHandler = !0,
                        this.registerListeners()
                }
                var t = e.prototype;
                return t.destroy = function () {
                    this.onHandlerDestroying(),
                        this.unregisterListeners(),
                        this.onHandlerDestroyed()
                }
                    ,
                    t.onHandlerDestroying = function () { }
                    ,
                    t.onHandlerDestroyed = function () { }
                    ,
                    t.isEventHandler = function () {
                        return "object" == typeof this.handledEvents && this.handledEvents.length && "function" == typeof this.onEvent
                    }
                    ,
                    t.registerListeners = function () {
                        this.isEventHandler() && this.handledEvents.forEach((function (e) {
                            if (c[e])
                                throw new Error("Forbidden event-name: " + e);
                            this.hls.on(e, this.onEvent)
                        }
                        ), this)
                    }
                    ,
                    t.unregisterListeners = function () {
                        this.isEventHandler() && this.handledEvents.forEach((function (e) {
                            this.hls.off(e, this.onEvent)
                        }
                        ), this)
                    }
                    ,
                    t.onEvent = function (e, t) {
                        this.onEventGeneric(e, t)
                    }
                    ,
                    t.onEventGeneric = function (e, t) {
                        try {
                            (function (e, t) {
                                var r = "on" + e.replace("hls", "");
                                if ("function" != typeof this[r])
                                    throw new Error("Event " + e + " has no generic handler in this " + this.constructor.name + " class (tried " + r + ")");
                                return this[r].bind(this, t)
                            }
                            ).call(this, e, t).call()
                        } catch (t) {
                            u.b.error("An internal error happened while handling event " + e + '. Error message: "' + t.message + '". Here is a stacktrace:', t),
                                this.hls.trigger(d.a.ERROR, {
                                    type: o.b.OTHER_ERROR,
                                    details: o.a.INTERNAL_EXCEPTION,
                                    fatal: !1,
                                    event: e,
                                    err: t
                                })
                        }
                    }
                    ,
                    e
            }();
            !function (e) {
                e.MANIFEST = "manifest",
                    e.LEVEL = "level",
                    e.AUDIO_TRACK = "audioTrack",
                    e.SUBTITLE_TRACK = "subtitleTrack"
            }(a || (a = {})),
                function (e) {
                    e.MAIN = "main",
                        e.AUDIO = "audio",
                        e.SUBTITLE = "subtitle"
                }(n || (n = {}));
            var f = r(10);
            function g(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i)
                }
            }
            var p, v = function () {
                function e(e, t) {
                    this._uri = null,
                        this.baseuri = void 0,
                        this.reluri = void 0,
                        this.method = null,
                        this.key = null,
                        this.iv = null,
                        this.baseuri = e,
                        this.reluri = t
                }
                var t, r, i;
                return t = e,
                    (r = [{
                        key: "uri",
                        get: function () {
                            return !this._uri && this.reluri && (this._uri = Object(s.buildAbsoluteURL)(this.baseuri, this.reluri, {
                                alwaysNormalize: !0
                            })),
                                this._uri
                        }
                    }]) && g(t.prototype, r),
                    i && g(t, i),
                    e
            }();
            function m(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i)
                }
            }
            !function (e) {
                e.AUDIO = "audio",
                    e.VIDEO = "video"
            }(p || (p = {}));
            var y = function () {
                function e() {
                    var e;
                    this._url = null,
                        this._byteRange = null,
                        this._decryptdata = null,
                        this._elementaryStreams = ((e = {})[p.AUDIO] = !1,
                            e[p.VIDEO] = !1,
                            e),
                        this.deltaPTS = 0,
                        this.rawProgramDateTime = null,
                        this.programDateTime = null,
                        this.title = null,
                        this.tagList = [],
                        this.cc = void 0,
                        this.type = void 0,
                        this.relurl = void 0,
                        this.baseurl = void 0,
                        this.duration = void 0,
                        this.start = void 0,
                        this.sn = 0,
                        this.urlId = 0,
                        this.level = 0,
                        this.levelkey = void 0,
                        this.loader = void 0
                }
                var t, r, i, a = e.prototype;
                return a.setByteRange = function (e, t) {
                    var r = e.split("@", 2)
                        , i = [];
                    1 === r.length ? i[0] = t ? t.byteRangeEndOffset : 0 : i[0] = parseInt(r[1]),
                        i[1] = parseInt(r[0]) + i[0],
                        this._byteRange = i
                }
                    ,
                    a.addElementaryStream = function (e) {
                        this._elementaryStreams[e] = !0
                    }
                    ,
                    a.hasElementaryStream = function (e) {
                        return !0 === this._elementaryStreams[e]
                    }
                    ,
                    a.createInitializationVector = function (e) {
                        for (var t = new Uint8Array(16), r = 12; r < 16; r++)
                            t[r] = e >> 8 * (15 - r) & 255;
                        return t
                    }
                    ,
                    a.setDecryptDataFromLevelKey = function (e, t) {
                        var r = e;
                        return (null == e ? void 0 : e.method) && e.uri && !e.iv && ((r = new v(e.baseuri, e.reluri)).method = e.method,
                            r.iv = this.createInitializationVector(t)),
                            r
                    }
                    ,
                    t = e,
                    (r = [{
                        key: "url",
                        get: function () {
                            return !this._url && this.relurl && (this._url = Object(s.buildAbsoluteURL)(this.baseurl, this.relurl, {
                                alwaysNormalize: !0
                            })),
                                this._url
                        },
                        set: function (e) {
                            this._url = e
                        }
                    }, {
                        key: "byteRange",
                        get: function () {
                            return this._byteRange ? this._byteRange : []
                        }
                    }, {
                        key: "byteRangeStartOffset",
                        get: function () {
                            return this.byteRange[0]
                        }
                    }, {
                        key: "byteRangeEndOffset",
                        get: function () {
                            return this.byteRange[1]
                        }
                    }, {
                        key: "decryptdata",
                        get: function () {
                            if (!this.levelkey && !this._decryptdata)
                                return null;
                            if (!this._decryptdata && this.levelkey) {
                                var e = this.sn;
                                "number" != typeof e && (this.levelkey && "AES-128" === this.levelkey.method && !this.levelkey.iv && u.b.warn('missing IV for initialization segment with method="' + this.levelkey.method + '" - compliance issue'),
                                    e = 0),
                                    this._decryptdata = this.setDecryptDataFromLevelKey(this.levelkey, e)
                            }
                            return this._decryptdata
                        }
                    }, {
                        key: "endProgramDateTime",
                        get: function () {
                            if (null === this.programDateTime)
                                return null;
                            if (!Object(l.a)(this.programDateTime))
                                return null;
                            var e = Object(l.a)(this.duration) ? this.duration : 0;
                            return this.programDateTime + 1e3 * e
                        }
                    }, {
                        key: "encrypted",
                        get: function () {
                            return !(!this.decryptdata || null === this.decryptdata.uri || null !== this.decryptdata.key)
                        }
                    }]) && m(t.prototype, r),
                    i && m(t, i),
                    e
            }();
            function b(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i)
                }
            }
            var T = function () {
                function e(e) {
                    this.endCC = 0,
                        this.endSN = 0,
                        this.fragments = [],
                        this.initSegment = null,
                        this.live = !0,
                        this.needSidxRanges = !1,
                        this.startCC = 0,
                        this.startSN = 0,
                        this.startTimeOffset = null,
                        this.targetduration = 0,
                        this.totalduration = 0,
                        this.type = null,
                        this.url = e,
                        this.version = null
                }
                var t, r, i;
                return t = e,
                    (r = [{
                        key: "hasProgramDateTime",
                        get: function () {
                            return !(!this.fragments[0] || !Object(l.a)(this.fragments[0].programDateTime))
                        }
                    }]) && b(t.prototype, r),
                    i && b(t, i),
                    e
            }()
                , E = /^(\d+)x(\d+)$/
                , S = /\s*(.+?)\s*=((?:\".*?\")|.*?)(?:,|$)/g
                , _ = function () {
                    function e(t) {
                        for (var r in "string" == typeof t && (t = e.parseAttrList(t)),
                            t)
                            t.hasOwnProperty(r) && (this[r] = t[r])
                    }
                    var t = e.prototype;
                    return t.decimalInteger = function (e) {
                        var t = parseInt(this[e], 10);
                        return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t
                    }
                        ,
                        t.hexadecimalInteger = function (e) {
                            if (this[e]) {
                                var t = (this[e] || "0x").slice(2);
                                t = (1 & t.length ? "0" : "") + t;
                                for (var r = new Uint8Array(t.length / 2), i = 0; i < t.length / 2; i++)
                                    r[i] = parseInt(t.slice(2 * i, 2 * i + 2), 16);
                                return r
                            }
                            return null
                        }
                        ,
                        t.hexadecimalIntegerAsNumber = function (e) {
                            var t = parseInt(this[e], 16);
                            return t > Number.MAX_SAFE_INTEGER ? 1 / 0 : t
                        }
                        ,
                        t.decimalFloatingPoint = function (e) {
                            return parseFloat(this[e])
                        }
                        ,
                        t.enumeratedString = function (e) {
                            return this[e]
                        }
                        ,
                        t.decimalResolution = function (e) {
                            var t = E.exec(this[e]);
                            if (null !== t)
                                return {
                                    width: parseInt(t[1], 10),
                                    height: parseInt(t[2], 10)
                                }
                        }
                        ,
                        e.parseAttrList = function (e) {
                            var t, r = {};
                            for (S.lastIndex = 0; null !== (t = S.exec(e));) {
                                var i = t[2];
                                0 === i.indexOf('"') && i.lastIndexOf('"') === i.length - 1 && (i = i.slice(1, -1)),
                                    r[t[1]] = i
                            }
                            return r
                        }
                        ,
                        e
                }()
                , R = {
                    audio: {
                        a3ds: !0,
                        "ac-3": !0,
                        "ac-4": !0,
                        alac: !0,
                        alaw: !0,
                        dra1: !0,
                        "dts+": !0,
                        "dts-": !0,
                        dtsc: !0,
                        dtse: !0,
                        dtsh: !0,
                        "ec-3": !0,
                        enca: !0,
                        g719: !0,
                        g726: !0,
                        m4ae: !0,
                        mha1: !0,
                        mha2: !0,
                        mhm1: !0,
                        mhm2: !0,
                        mlpa: !0,
                        mp4a: !0,
                        "raw ": !0,
                        Opus: !0,
                        samr: !0,
                        sawb: !0,
                        sawp: !0,
                        sevc: !0,
                        sqcp: !0,
                        ssmv: !0,
                        twos: !0,
                        ulaw: !0
                    },
                    video: {
                        avc1: !0,
                        avc2: !0,
                        avc3: !0,
                        avc4: !0,
                        avcp: !0,
                        drac: !0,
                        dvav: !0,
                        dvhe: !0,
                        encv: !0,
                        hev1: !0,
                        hvc1: !0,
                        mjp2: !0,
                        mp4v: !0,
                        mvc1: !0,
                        mvc2: !0,
                        mvc3: !0,
                        mvc4: !0,
                        resv: !0,
                        rv60: !0,
                        s263: !0,
                        svc1: !0,
                        svc2: !0,
                        "vc-1": !0,
                        vp08: !0,
                        vp09: !0
                    }
                };
            function A(e, t) {
                return MediaSource.isTypeSupported((t || "video") + '/mp4;codecs="' + e + '"')
            }
            var k = /(?:#EXT-X-STREAM-INF:([^\n\r]*)[\r\n]+([^\r\n]+)|#EXT-X-SESSION-DATA:([^\n\r]*)[\r\n]+)/g
                , w = /#EXT-X-MEDIA:(.*)/g
                , L = new RegExp([/#EXTINF:\s*(\d*(?:\.\d+)?)(?:,(.*)\s+)?/.source, /|(?!#)([\S+ ?]+)/.source, /|#EXT-X-BYTERANGE:*(.+)/.source, /|#EXT-X-PROGRAM-DATE-TIME:(.+)/.source, /|#.*/.source].join(""), "g")
                , D = /(?:(?:#(EXTM3U))|(?:#EXT-X-(PLAYLIST-TYPE):(.+))|(?:#EXT-X-(MEDIA-SEQUENCE): *(\d+))|(?:#EXT-X-(TARGETDURATION): *(\d+))|(?:#EXT-X-(KEY):(.+))|(?:#EXT-X-(START):(.+))|(?:#EXT-X-(ENDLIST))|(?:#EXT-X-(DISCONTINUITY-SEQ)UENCE:(\d+))|(?:#EXT-X-(DIS)CONTINUITY))|(?:#EXT-X-(VERSION):(\d+))|(?:#EXT-X-(MAP):(.+))|(?:(#)([^:]*):(.*))|(?:(#)(.*))(?:.*)\r?\n?/
                , O = /\.(mp4|m4s|m4v|m4a)$/i
                , C = function () {
                    function e() { }
                    return e.findGroup = function (e, t) {
                        for (var r = 0; r < e.length; r++) {
                            var i = e[r];
                            if (i.id === t)
                                return i
                        }
                    }
                        ,
                        e.convertAVC1ToAVCOTI = function (e) {
                            var t, r = e.split(".");
                            return r.length > 2 ? (t = r.shift() + ".",
                                t += parseInt(r.shift()).toString(16),
                                t += ("000" + parseInt(r.shift()).toString(16)).substr(-4)) : t = e,
                                t
                        }
                        ,
                        e.resolve = function (e, t) {
                            return s.buildAbsoluteURL(t, e, {
                                alwaysNormalize: !0
                            })
                        }
                        ,
                        e.parseMasterPlaylist = function (t, r) {
                            var i, a = [], n = {}, s = !1;
                            function o(e, t) {
                                ["video", "audio"].forEach((function (r) {
                                    var i = e.filter((function (e) {
                                        return function (e, t) {
                                            var r = R[t];
                                            return !!r && !0 === r[e.slice(0, 4)]
                                        }(e, r)
                                    }
                                    ));
                                    if (i.length) {
                                        var a = i.filter((function (e) {
                                            return 0 === e.lastIndexOf("avc1", 0) || 0 === e.lastIndexOf("mp4a", 0)
                                        }
                                        ));
                                        t[r + "Codec"] = a.length > 0 ? a[0] : i[0],
                                            e = e.filter((function (e) {
                                                return -1 === i.indexOf(e)
                                            }
                                            ))
                                    }
                                }
                                )),
                                    t.unknownCodecs = e
                            }
                            for (k.lastIndex = 0; null != (i = k.exec(t));)
                                if (i[1]) {
                                    var l = {}
                                        , d = l.attrs = new _(i[1]);
                                    l.url = e.resolve(i[2], r);
                                    var u = d.decimalResolution("RESOLUTION");
                                    u && (l.width = u.width,
                                        l.height = u.height),
                                        l.bitrate = d.decimalInteger("AVERAGE-BANDWIDTH") || d.decimalInteger("BANDWIDTH"),
                                        l.name = d.NAME,
                                        o([].concat((d.CODECS || "").split(/[ ,]+/)), l),
                                        l.videoCodec && -1 !== l.videoCodec.indexOf("avc1") && (l.videoCodec = e.convertAVC1ToAVCOTI(l.videoCodec)),
                                        a.push(l)
                                } else if (i[3]) {
                                    var c = new _(i[3]);
                                    c["DATA-ID"] && (s = !0,
                                        n[c["DATA-ID"]] = c)
                                }
                            return {
                                levels: a,
                                sessionData: s ? n : null
                            }
                        }
                        ,
                        e.parseMasterPlaylistMedia = function (t, r, i, a) {
                            var n;
                            void 0 === a && (a = []);
                            var s = []
                                , o = 0;
                            for (w.lastIndex = 0; null !== (n = w.exec(t));) {
                                var l = new _(n[1]);
                                if (l.TYPE === i) {
                                    var d = {
                                        attrs: l,
                                        id: o++,
                                        groupId: l["GROUP-ID"],
                                        instreamId: l["INSTREAM-ID"],
                                        name: l.NAME || l.LANGUAGE,
                                        type: i,
                                        default: "YES" === l.DEFAULT,
                                        autoselect: "YES" === l.AUTOSELECT,
                                        forced: "YES" === l.FORCED,
                                        lang: l.LANGUAGE
                                    };
                                    if (l.URI && (d.url = e.resolve(l.URI, r)),
                                        a.length) {
                                        var u = e.findGroup(a, d.groupId);
                                        d.audioCodec = u ? u.codec : a[0].codec
                                    }
                                    s.push(d)
                                }
                            }
                            return s
                        }
                        ,
                        e.parseLevelPlaylist = function (e, t, r, i, a) {
                            var n, s, o, d = 0, c = 0, h = new T(t), f = 0, g = null, p = new y, m = null;
                            for (L.lastIndex = 0; null !== (n = L.exec(e));) {
                                var b = n[1];
                                if (b) {
                                    p.duration = parseFloat(b);
                                    var E = (" " + n[2]).slice(1);
                                    p.title = E || null,
                                        p.tagList.push(E ? ["INF", b, E] : ["INF", b])
                                } else if (n[3]) {
                                    if (Object(l.a)(p.duration)) {
                                        var S = d++;
                                        p.type = i,
                                            p.start = c,
                                            o && (p.levelkey = o),
                                            p.sn = S,
                                            p.level = r,
                                            p.cc = f,
                                            p.urlId = a,
                                            p.baseurl = t,
                                            p.relurl = (" " + n[3]).slice(1),
                                            I(p, g),
                                            h.fragments.push(p),
                                            g = p,
                                            c += p.duration,
                                            p = new y
                                    }
                                } else if (n[4]) {
                                    var R = (" " + n[4]).slice(1);
                                    g ? p.setByteRange(R, g) : p.setByteRange(R)
                                } else if (n[5])
                                    p.rawProgramDateTime = (" " + n[5]).slice(1),
                                        p.tagList.push(["PROGRAM-DATE-TIME", p.rawProgramDateTime]),
                                        null === m && (m = h.fragments.length);
                                else {
                                    if (!(n = n[0].match(D))) {
                                        u.b.warn("No matches on slow regex match for level playlist!");
                                        continue
                                    }
                                    for (s = 1; s < n.length && void 0 === n[s]; s++)
                                        ;
                                    var A = (" " + n[s + 1]).slice(1)
                                        , k = (" " + n[s + 2]).slice(1);
                                    switch (n[s]) {
                                        case "#":
                                            p.tagList.push(k ? [A, k] : [A]);
                                            break;
                                        case "PLAYLIST-TYPE":
                                            h.type = A.toUpperCase();
                                            break;
                                        case "MEDIA-SEQUENCE":
                                            d = h.startSN = parseInt(A);
                                            break;
                                        case "TARGETDURATION":
                                            h.targetduration = parseFloat(A);
                                            break;
                                        case "VERSION":
                                            h.version = parseInt(A);
                                            break;
                                        case "EXTM3U":
                                            break;
                                        case "ENDLIST":
                                            h.live = !1;
                                            break;
                                        case "DIS":
                                            f++,
                                                p.tagList.push(["DIS"]);
                                            break;
                                        case "DISCONTINUITY-SEQ":
                                            f = parseInt(A);
                                            break;
                                        case "KEY":
                                            var w = new _(A)
                                                , C = w.enumeratedString("METHOD")
                                                , P = w.URI
                                                , x = w.hexadecimalInteger("IV");
                                            if ("com.apple.streamingkeydelivery" === (w.KEYFORMAT || "identity")) {
                                                u.b.warn("Keyformat com.apple.streamingkeydelivery is not supported");
                                                continue
                                            }
                                            C && (o = new v(t, P),
                                                P && ["AES-128", "SAMPLE-AES", "SAMPLE-AES-CENC"].indexOf(C) >= 0 && (o.method = C,
                                                    o.key = null,
                                                    o.iv = x));
                                            break;
                                        case "START":
                                            var M = new _(A).decimalFloatingPoint("TIME-OFFSET");
                                            Object(l.a)(M) && (h.startTimeOffset = M);
                                            break;
                                        case "MAP":
                                            var F = new _(A);
                                            p.relurl = F.URI,
                                                F.BYTERANGE && p.setByteRange(F.BYTERANGE),
                                                p.baseurl = t,
                                                p.level = r,
                                                p.type = i,
                                                p.sn = "initSegment",
                                                h.initSegment = p,
                                                (p = new y).rawProgramDateTime = h.initSegment.rawProgramDateTime;
                                            break;
                                        default:
                                            u.b.warn("line parsed but not handled: " + n)
                                    }
                                }
                            }
                            return (p = g) && !p.relurl && (h.fragments.pop(),
                                c -= p.duration),
                                h.totalduration = c,
                                h.averagetargetduration = c / h.fragments.length,
                                h.endSN = d - 1,
                                h.startCC = h.fragments[0] ? h.fragments[0].cc : 0,
                                h.endCC = f,
                                !h.initSegment && h.fragments.length && h.fragments.every((function (e) {
                                    return O.test(e.relurl)
                                }
                                )) && (u.b.warn("MP4 fragments found but no init segment (probably no MAP, incomplete M3U8), trying to fetch SIDX"),
                                    (p = new y).relurl = h.fragments[0].relurl,
                                    p.baseurl = t,
                                    p.level = r,
                                    p.type = i,
                                    p.sn = "initSegment",
                                    h.initSegment = p,
                                    h.needSidxRanges = !0),
                                m && function (e, t) {
                                    for (var r = e[t], i = t - 1; i >= 0; i--) {
                                        var a = e[i];
                                        a.programDateTime = r.programDateTime - 1e3 * a.duration,
                                            r = a
                                    }
                                }(h.fragments, m),
                                h
                        }
                        ,
                        e
                }();
            function I(e, t) {
                e.rawProgramDateTime ? e.programDateTime = Date.parse(e.rawProgramDateTime) : (null == t ? void 0 : t.programDateTime) && (e.programDateTime = t.endProgramDateTime),
                    Object(l.a)(e.programDateTime) || (e.programDateTime = null,
                        e.rawProgramDateTime = null)
            }
            var P = window.performance
                , x = function (e) {
                    var t, r;
                    function i(t) {
                        var r;
                        return (r = e.call(this, t, d.a.MANIFEST_LOADING, d.a.LEVEL_LOADING, d.a.AUDIO_TRACK_LOADING, d.a.SUBTITLE_TRACK_LOADING) || this).loaders = {},
                            r
                    }
                    r = e,
                        (t = i).prototype = Object.create(r.prototype),
                        t.prototype.constructor = t,
                        t.__proto__ = r,
                        i.canHaveQualityLevels = function (e) {
                            return e !== a.AUDIO_TRACK && e !== a.SUBTITLE_TRACK
                        }
                        ,
                        i.mapContextToLevelType = function (e) {
                            switch (e.type) {
                                case a.AUDIO_TRACK:
                                    return n.AUDIO;
                                case a.SUBTITLE_TRACK:
                                    return n.SUBTITLE;
                                default:
                                    return n.MAIN
                            }
                        }
                        ,
                        i.getResponseUrl = function (e, t) {
                            var r = e.url;
                            return void 0 !== r && 0 !== r.indexOf("data:") || (r = t.url),
                                r
                        }
                        ;
                    var s = i.prototype;
                    return s.createInternalLoader = function (e) {
                        var t = this.hls.config
                            , r = t.pLoader
                            , i = t.loader
                            , a = new (r || i)(t);
                        return e.loader = a,
                            this.loaders[e.type] = a,
                            a
                    }
                        ,
                        s.getInternalLoader = function (e) {
                            return this.loaders[e.type]
                        }
                        ,
                        s.resetInternalLoader = function (e) {
                            this.loaders[e] && delete this.loaders[e]
                        }
                        ,
                        s.destroyInternalLoaders = function () {
                            for (var e in this.loaders) {
                                var t = this.loaders[e];
                                t && t.destroy(),
                                    this.resetInternalLoader(e)
                            }
                        }
                        ,
                        s.destroy = function () {
                            this.destroyInternalLoaders(),
                                e.prototype.destroy.call(this)
                        }
                        ,
                        s.onManifestLoading = function (e) {
                            this.load({
                                url: e.url,
                                type: a.MANIFEST,
                                level: 0,
                                id: null,
                                responseType: "text"
                            })
                        }
                        ,
                        s.onLevelLoading = function (e) {
                            this.load({
                                url: e.url,
                                type: a.LEVEL,
                                level: e.level,
                                id: e.id,
                                responseType: "text"
                            })
                        }
                        ,
                        s.onAudioTrackLoading = function (e) {
                            this.load({
                                url: e.url,
                                type: a.AUDIO_TRACK,
                                level: null,
                                id: e.id,
                                responseType: "text"
                            })
                        }
                        ,
                        s.onSubtitleTrackLoading = function (e) {
                            this.load({
                                url: e.url,
                                type: a.SUBTITLE_TRACK,
                                level: null,
                                id: e.id,
                                responseType: "text"
                            })
                        }
                        ,
                        s.load = function (e) {
                            var t = this.hls.config;
                            u.b.debug("Loading playlist of type " + e.type + ", level: " + e.level + ", id: " + e.id);
                            var r, i, n, s, o = this.getInternalLoader(e);
                            if (o) {
                                var l = o.context;
                                if (l && l.url === e.url)
                                    return u.b.trace("playlist request ongoing"),
                                        !1;
                                u.b.warn("aborting previous loader for type: " + e.type),
                                    o.abort()
                            }
                            switch (e.type) {
                                case a.MANIFEST:
                                    r = t.manifestLoadingMaxRetry,
                                        i = t.manifestLoadingTimeOut,
                                        n = t.manifestLoadingRetryDelay,
                                        s = t.manifestLoadingMaxRetryTimeout;
                                    break;
                                case a.LEVEL:
                                    r = 0,
                                        s = 0,
                                        n = 0,
                                        i = t.levelLoadingTimeOut;
                                    break;
                                default:
                                    r = t.levelLoadingMaxRetry,
                                        i = t.levelLoadingTimeOut,
                                        n = t.levelLoadingRetryDelay,
                                        s = t.levelLoadingMaxRetryTimeout
                            }
                            o = this.createInternalLoader(e);
                            var d = {
                                timeout: i,
                                maxRetry: r,
                                retryDelay: n,
                                maxRetryDelay: s
                            }
                                , c = {
                                    onSuccess: this.loadsuccess.bind(this),
                                    onError: this.loaderror.bind(this),
                                    onTimeout: this.loadtimeout.bind(this)
                                };
                            return u.b.debug("Calling internal loader delegate for URL: " + e.url),
                                o.load(e, d, c),
                                !0
                        }
                        ,
                        s.loadsuccess = function (e, t, r, i) {
                            if (void 0 === i && (i = null),
                                r.isSidxRequest)
                                return this._handleSidxRequest(e, r),
                                    void this._handlePlaylistLoaded(e, t, r, i);
                            if (this.resetInternalLoader(r.type),
                                "string" != typeof e.data)
                                throw new Error('expected responseType of "text" for PlaylistLoader');
                            var a = e.data;
                            t.tload = P.now(),
                                0 === a.indexOf("#EXTM3U") ? a.indexOf("#EXTINF:") > 0 || a.indexOf("#EXT-X-TARGETDURATION:") > 0 ? this._handleTrackOrLevelPlaylist(e, t, r, i) : this._handleMasterPlaylist(e, t, r, i) : this._handleManifestParsingError(e, r, "no EXTM3U delimiter", i)
                        }
                        ,
                        s.loaderror = function (e, t, r) {
                            void 0 === r && (r = null),
                                this._handleNetworkError(t, r, !1, e)
                        }
                        ,
                        s.loadtimeout = function (e, t, r) {
                            void 0 === r && (r = null),
                                this._handleNetworkError(t, r, !0)
                        }
                        ,
                        s._handleMasterPlaylist = function (e, t, r, a) {
                            var n = this.hls
                                , s = e.data
                                , o = i.getResponseUrl(e, r)
                                , l = C.parseMasterPlaylist(s, o)
                                , c = l.levels
                                , h = l.sessionData;
                            if (c.length) {
                                var f = c.map((function (e) {
                                    return {
                                        id: e.attrs.AUDIO,
                                        codec: e.audioCodec
                                    }
                                }
                                ))
                                    , g = C.parseMasterPlaylistMedia(s, o, "AUDIO", f)
                                    , p = C.parseMasterPlaylistMedia(s, o, "SUBTITLES")
                                    , v = C.parseMasterPlaylistMedia(s, o, "CLOSED-CAPTIONS");
                                if (g.length) {
                                    var m = !1;
                                    g.forEach((function (e) {
                                        e.url || (m = !0)
                                    }
                                    )),
                                        !1 === m && c[0].audioCodec && !c[0].attrs.AUDIO && (u.b.log("audio codec signaled in quality level, but no embedded audio track signaled, create one"),
                                            g.unshift({
                                                type: "main",
                                                name: "main",
                                                default: !1,
                                                autoselect: !1,
                                                forced: !1,
                                                id: -1,
                                                attrs: {},
                                                url: ""
                                            }))
                                }
                                n.trigger(d.a.MANIFEST_LOADED, {
                                    levels: c,
                                    audioTracks: g,
                                    subtitles: p,
                                    captions: v,
                                    url: o,
                                    stats: t,
                                    networkDetails: a,
                                    sessionData: h
                                })
                            } else
                                this._handleManifestParsingError(e, r, "no level found in manifest", a)
                        }
                        ,
                        s._handleTrackOrLevelPlaylist = function (e, t, r, n) {
                            var s = this.hls
                                , u = r.id
                                , c = r.level
                                , h = r.type
                                , f = i.getResponseUrl(e, r)
                                , g = Object(l.a)(u) ? u : 0
                                , p = Object(l.a)(c) ? c : g
                                , v = i.mapContextToLevelType(r)
                                , m = C.parseLevelPlaylist(e.data, f, p, v, g);
                            if (m.tload = t.tload,
                                m.fragments.length) {
                                if (h === a.MANIFEST) {
                                    var y = {
                                        url: f,
                                        details: m
                                    };
                                    s.trigger(d.a.MANIFEST_LOADED, {
                                        levels: [y],
                                        audioTracks: [],
                                        url: f,
                                        stats: t,
                                        networkDetails: n,
                                        sessionData: null
                                    })
                                }
                                if (t.tparsed = P.now(),
                                    m.needSidxRanges) {
                                    var b = m.initSegment.url;
                                    this.load({
                                        url: b,
                                        isSidxRequest: !0,
                                        type: h,
                                        level: c,
                                        levelDetails: m,
                                        id: u,
                                        rangeStart: 0,
                                        rangeEnd: 2048,
                                        responseType: "arraybuffer"
                                    })
                                } else
                                    r.levelDetails = m,
                                        this._handlePlaylistLoaded(e, t, r, n)
                            } else
                                s.trigger(d.a.ERROR, {
                                    type: o.b.NETWORK_ERROR,
                                    details: o.a.LEVEL_EMPTY_ERROR,
                                    fatal: !1,
                                    url: f,
                                    reason: "no fragments found in level",
                                    level: "number" == typeof r.level ? r.level : void 0
                                })
                        }
                        ,
                        s._handleSidxRequest = function (e, t) {
                            if ("string" == typeof e.data)
                                throw new Error("sidx request must be made with responseType of array buffer");
                            var r = f.a.parseSegmentIndex(new Uint8Array(e.data));
                            if (r) {
                                var i = r.references
                                    , a = t.levelDetails;
                                i.forEach((function (e, t) {
                                    var r = e.info;
                                    if (a) {
                                        var i = a.fragments[t];
                                        0 === i.byteRange.length && i.setByteRange(String(1 + r.end - r.start) + "@" + String(r.start))
                                    }
                                }
                                )),
                                    a && a.initSegment.setByteRange(String(r.moovEndOffset) + "@0")
                            }
                        }
                        ,
                        s._handleManifestParsingError = function (e, t, r, i) {
                            this.hls.trigger(d.a.ERROR, {
                                type: o.b.NETWORK_ERROR,
                                details: o.a.MANIFEST_PARSING_ERROR,
                                fatal: !0,
                                url: e.url,
                                reason: r,
                                networkDetails: i
                            })
                        }
                        ,
                        s._handleNetworkError = function (e, t, r, i) {
                            var n, s;
                            void 0 === r && (r = !1),
                                void 0 === i && (i = null),
                                u.b.info("A network error occured while loading a " + e.type + "-type playlist");
                            var l = this.getInternalLoader(e);
                            switch (e.type) {
                                case a.MANIFEST:
                                    n = r ? o.a.MANIFEST_LOAD_TIMEOUT : o.a.MANIFEST_LOAD_ERROR,
                                        s = !0;
                                    break;
                                case a.LEVEL:
                                    n = r ? o.a.LEVEL_LOAD_TIMEOUT : o.a.LEVEL_LOAD_ERROR,
                                        s = !1;
                                    break;
                                case a.AUDIO_TRACK:
                                    n = r ? o.a.AUDIO_TRACK_LOAD_TIMEOUT : o.a.AUDIO_TRACK_LOAD_ERROR,
                                        s = !1;
                                    break;
                                default:
                                    s = !1
                            }
                            l && (l.abort(),
                                this.resetInternalLoader(e.type));
                            var c = {
                                type: o.b.NETWORK_ERROR,
                                details: n,
                                fatal: s,
                                url: e.url,
                                loader: l,
                                context: e,
                                networkDetails: t
                            };
                            i && (c.response = i),
                                this.hls.trigger(d.a.ERROR, c)
                        }
                        ,
                        s._handlePlaylistLoaded = function (e, t, r, n) {
                            var s = r.type
                                , o = r.level
                                , l = r.id
                                , u = r.levelDetails;
                            if (u && u.targetduration)
                                if (i.canHaveQualityLevels(r.type))
                                    this.hls.trigger(d.a.LEVEL_LOADED, {
                                        details: u,
                                        level: o || 0,
                                        id: l || 0,
                                        stats: t,
                                        networkDetails: n
                                    });
                                else
                                    switch (s) {
                                        case a.AUDIO_TRACK:
                                            this.hls.trigger(d.a.AUDIO_TRACK_LOADED, {
                                                details: u,
                                                id: l,
                                                stats: t,
                                                networkDetails: n
                                            });
                                            break;
                                        case a.SUBTITLE_TRACK:
                                            this.hls.trigger(d.a.SUBTITLE_TRACK_LOADED, {
                                                details: u,
                                                id: l,
                                                stats: t,
                                                networkDetails: n
                                            })
                                    }
                            else
                                this._handleManifestParsingError(e, r, "invalid target duration", n)
                        }
                        ,
                        i
                }(h);
            var M = function (e) {
                var t, r;
                function i(t) {
                    var r;
                    return (r = e.call(this, t, d.a.FRAG_LOADING) || this).loaders = {},
                        r
                }
                r = e,
                    (t = i).prototype = Object.create(r.prototype),
                    t.prototype.constructor = t,
                    t.__proto__ = r;
                var a = i.prototype;
                return a.destroy = function () {
                    var t = this.loaders;
                    for (var r in t) {
                        var i = t[r];
                        i && i.destroy()
                    }
                    this.loaders = {},
                        e.prototype.destroy.call(this)
                }
                    ,
                    a.onFragLoading = function (e) {
                        var t = e.frag
                            , r = t.type
                            , i = this.loaders
                            , a = this.hls.config
                            , n = a.fLoader
                            , s = a.loader;
                        t.loaded = 0;
                        var o, d, c, h = i[r];
                        h && (u.b.warn("abort previous fragment loader for type: " + r),
                            h.abort()),
                            h = i[r] = t.loader = a.fLoader ? new n(a) : new s(a),
                            o = {
                                url: t.url,
                                frag: t,
                                responseType: "arraybuffer",
                                progressData: !1
                            };
                        var f = t.byteRangeStartOffset
                            , g = t.byteRangeEndOffset;
                        Object(l.a)(f) && Object(l.a)(g) && (o.rangeStart = f,
                            o.rangeEnd = g),
                            d = {
                                timeout: a.fragLoadingTimeOut,
                                maxRetry: 0,
                                retryDelay: 0,
                                maxRetryDelay: a.fragLoadingMaxRetryTimeout
                            },
                            c = {
                                onSuccess: this.loadsuccess.bind(this),
                                onError: this.loaderror.bind(this),
                                onTimeout: this.loadtimeout.bind(this),
                                onProgress: this.loadprogress.bind(this)
                            },
                            h.load(o, d, c)
                    }
                    ,
                    a.loadsuccess = function (e, t, r, i) {
                        void 0 === i && (i = null);
                        var a = e.data
                            , n = r.frag;
                        n.loader = void 0,
                            this.loaders[n.type] = void 0,
                            this.hls.trigger(d.a.FRAG_LOADED, {
                                payload: a,
                                frag: n,
                                stats: t,
                                networkDetails: i
                            })
                    }
                    ,
                    a.loaderror = function (e, t, r) {
                        void 0 === r && (r = null);
                        var i = t.frag
                            , a = i.loader;
                        a && a.abort(),
                            this.loaders[i.type] = void 0,
                            this.hls.trigger(d.a.ERROR, {
                                type: o.b.NETWORK_ERROR,
                                details: o.a.FRAG_LOAD_ERROR,
                                fatal: !1,
                                frag: t.frag,
                                response: e,
                                networkDetails: r
                            })
                    }
                    ,
                    a.loadtimeout = function (e, t, r) {
                        void 0 === r && (r = null);
                        var i = t.frag
                            , a = i.loader;
                        a && a.abort(),
                            this.loaders[i.type] = void 0,
                            this.hls.trigger(d.a.ERROR, {
                                type: o.b.NETWORK_ERROR,
                                details: o.a.FRAG_LOAD_TIMEOUT,
                                fatal: !1,
                                frag: t.frag,
                                networkDetails: r
                            })
                    }
                    ,
                    a.loadprogress = function (e, t, r, i) {
                        void 0 === i && (i = null);
                        var a = t.frag;
                        a.loaded = e.loaded,
                            this.hls.trigger(d.a.FRAG_LOAD_PROGRESS, {
                                frag: a,
                                stats: e,
                                networkDetails: i
                            })
                    }
                    ,
                    i
            }(h);
            var F = function (e) {
                var t, r;
                function i(t) {
                    var r;
                    return (r = e.call(this, t, d.a.KEY_LOADING) || this).loaders = {},
                        r.decryptkey = null,
                        r.decrypturl = null,
                        r
                }
                r = e,
                    (t = i).prototype = Object.create(r.prototype),
                    t.prototype.constructor = t,
                    t.__proto__ = r;
                var a = i.prototype;
                return a.destroy = function () {
                    for (var t in this.loaders) {
                        var r = this.loaders[t];
                        r && r.destroy()
                    }
                    this.loaders = {},
                        e.prototype.destroy.call(this)
                }
                    ,
                    a.onKeyLoading = function (e) {
                        var t = e.frag
                            , r = t.type
                            , i = this.loaders[r];
                        if (t.decryptdata) {
                            var a = t.decryptdata.uri;
                            if (a !== this.decrypturl || null === this.decryptkey) {
                                var n = this.hls.config;
                                if (i && (u.b.warn("abort previous key loader for type:" + r),
                                    i.abort()),
                                    !a)
                                    return void u.b.warn("key uri is falsy");
                                t.loader = this.loaders[r] = new n.loader(n),
                                    this.decrypturl = a,
                                    this.decryptkey = null;
                                var s = {
                                    url: a,
                                    frag: t,
                                    responseType: "arraybuffer"
                                }
                                    , o = {
                                        timeout: n.fragLoadingTimeOut,
                                        maxRetry: 0,
                                        retryDelay: n.fragLoadingRetryDelay,
                                        maxRetryDelay: n.fragLoadingMaxRetryTimeout
                                    }
                                    , l = {
                                        onSuccess: this.loadsuccess.bind(this),
                                        onError: this.loaderror.bind(this),
                                        onTimeout: this.loadtimeout.bind(this)
                                    };
                                t.loader.load(s, o, l)
                            } else
                                this.decryptkey && (t.decryptdata.key = this.decryptkey,
                                    this.hls.trigger(d.a.KEY_LOADED, {
                                        frag: t
                                    }))
                        } else
                            u.b.warn("Missing decryption data on fragment in onKeyLoading")
                    }
                    ,
                    a.loadsuccess = function (e, t, r) {
                        var i = r.frag;
                        i.decryptdata ? (this.decryptkey = i.decryptdata.key = new Uint8Array(e.data),
                            i.loader = void 0,
                            delete this.loaders[i.type],
                            this.hls.trigger(d.a.KEY_LOADED, {
                                frag: i
                            })) : u.b.error("after key load, decryptdata unset")
                    }
                    ,
                    a.loaderror = function (e, t) {
                        var r = t.frag
                            , i = r.loader;
                        i && i.abort(),
                            delete this.loaders[r.type],
                            this.hls.trigger(d.a.ERROR, {
                                type: o.b.NETWORK_ERROR,
                                details: o.a.KEY_LOAD_ERROR,
                                fatal: !1,
                                frag: r,
                                response: e
                            })
                    }
                    ,
                    a.loadtimeout = function (e, t) {
                        var r = t.frag
                            , i = r.loader;
                        i && i.abort(),
                            delete this.loaders[r.type],
                            this.hls.trigger(d.a.ERROR, {
                                type: o.b.NETWORK_ERROR,
                                details: o.a.KEY_LOAD_TIMEOUT,
                                fatal: !1,
                                frag: r
                            })
                    }
                    ,
                    i
            }(h);
            var U = "NOT_LOADED"
                , N = "APPENDING"
                , B = "PARTIAL"
                , G = "OK"
                , K = function (e) {
                    var t, r;
                    function i(t) {
                        var r;
                        return (r = e.call(this, t, d.a.BUFFER_APPENDED, d.a.FRAG_BUFFERED, d.a.FRAG_LOADED) || this).bufferPadding = .2,
                            r.fragments = Object.create(null),
                            r.timeRanges = Object.create(null),
                            r.config = t.config,
                            r
                    }
                    r = e,
                        (t = i).prototype = Object.create(r.prototype),
                        t.prototype.constructor = t,
                        t.__proto__ = r;
                    var a = i.prototype;
                    return a.destroy = function () {
                        this.fragments = Object.create(null),
                            this.timeRanges = Object.create(null),
                            this.config = null,
                            h.prototype.destroy.call(this),
                            e.prototype.destroy.call(this)
                    }
                        ,
                        a.getBufferedFrag = function (e, t) {
                            var r = this.fragments
                                , i = Object.keys(r).filter((function (i) {
                                    var a = r[i];
                                    if (a.body.type !== t)
                                        return !1;
                                    if (!a.buffered)
                                        return !1;
                                    var n = a.body;
                                    return n.startPTS <= e && e <= n.endPTS
                                }
                                ));
                            if (0 === i.length)
                                return null;
                            var a = i.pop();
                            return r[a].body
                        }
                        ,
                        a.detectEvictedFragments = function (e, t) {
                            var r = this;
                            Object.keys(this.fragments).forEach((function (i) {
                                var a = r.fragments[i];
                                if (a && a.buffered) {
                                    var n = a.range[e];
                                    if (n)
                                        for (var s = n.time, o = 0; o < s.length; o++) {
                                            var l = s[o];
                                            if (!r.isTimeBuffered(l.startPTS, l.endPTS, t)) {
                                                r.removeFragment(a.body);
                                                break
                                            }
                                        }
                                }
                            }
                            ))
                        }
                        ,
                        a.detectPartialFragments = function (e) {
                            var t = this
                                , r = this.getFragmentKey(e)
                                , i = this.fragments[r];
                            i && (i.buffered = !0,
                                Object.keys(this.timeRanges).forEach((function (r) {
                                    if (e.hasElementaryStream(r)) {
                                        var a = t.timeRanges[r];
                                        i.range[r] = t.getBufferedTimes(e.startPTS, e.endPTS, a)
                                    }
                                }
                                )))
                        }
                        ,
                        a.getBufferedTimes = function (e, t, r) {
                            for (var i, a, n = [], s = !1, o = 0; o < r.length; o++) {
                                if (i = r.start(o) - this.bufferPadding,
                                    a = r.end(o) + this.bufferPadding,
                                    e >= i && t <= a) {
                                    n.push({
                                        startPTS: Math.max(e, r.start(o)),
                                        endPTS: Math.min(t, r.end(o))
                                    });
                                    break
                                }
                                if (e < a && t > i)
                                    n.push({
                                        startPTS: Math.max(e, r.start(o)),
                                        endPTS: Math.min(t, r.end(o))
                                    }),
                                        s = !0;
                                else if (t <= i)
                                    break
                            }
                            return {
                                time: n,
                                partial: s
                            }
                        }
                        ,
                        a.getFragmentKey = function (e) {
                            return e.type + "_" + e.level + "_" + e.urlId + "_" + e.sn
                        }
                        ,
                        a.getPartialFragment = function (e) {
                            var t, r, i, a = this, n = null, s = 0;
                            return Object.keys(this.fragments).forEach((function (o) {
                                var l = a.fragments[o];
                                a.isPartial(l) && (r = l.body.startPTS - a.bufferPadding,
                                    i = l.body.endPTS + a.bufferPadding,
                                    e >= r && e <= i && (t = Math.min(e - r, i - e),
                                        s <= t && (n = l.body,
                                            s = t)))
                            }
                            )),
                                n
                        }
                        ,
                        a.getState = function (e) {
                            var t = this.getFragmentKey(e)
                                , r = this.fragments[t]
                                , i = U;
                            return void 0 !== r && (i = r.buffered ? !0 === this.isPartial(r) ? B : G : N),
                                i
                        }
                        ,
                        a.isPartial = function (e) {
                            return !0 === e.buffered && (void 0 !== e.range.video && !0 === e.range.video.partial || void 0 !== e.range.audio && !0 === e.range.audio.partial)
                        }
                        ,
                        a.isTimeBuffered = function (e, t, r) {
                            for (var i, a, n = 0; n < r.length; n++) {
                                if (i = r.start(n) - this.bufferPadding,
                                    a = r.end(n) + this.bufferPadding,
                                    e >= i && t <= a)
                                    return !0;
                                if (t <= i)
                                    return !1
                            }
                            return !1
                        }
                        ,
                        a.onFragLoaded = function (e) {
                            var t = e.frag;
                            Object(l.a)(t.sn) && !t.bitrateTest && (this.fragments[this.getFragmentKey(t)] = {
                                body: t,
                                range: Object.create(null),
                                buffered: !1
                            })
                        }
                        ,
                        a.onBufferAppended = function (e) {
                            var t = this;
                            this.timeRanges = e.timeRanges,
                                Object.keys(this.timeRanges).forEach((function (e) {
                                    var r = t.timeRanges[e];
                                    t.detectEvictedFragments(e, r)
                                }
                                ))
                        }
                        ,
                        a.onFragBuffered = function (e) {
                            this.detectPartialFragments(e.frag)
                        }
                        ,
                        a.hasFragment = function (e) {
                            var t = this.getFragmentKey(e);
                            return void 0 !== this.fragments[t]
                        }
                        ,
                        a.removeFragment = function (e) {
                            var t = this.getFragmentKey(e);
                            delete this.fragments[t]
                        }
                        ,
                        a.removeAllFragments = function () {
                            this.fragments = Object.create(null)
                        }
                        ,
                        i
                }(h)
                , j = {
                    search: function (e, t) {
                        for (var r = 0, i = e.length - 1, a = null, n = null; r <= i;) {
                            var s = t(n = e[a = (r + i) / 2 | 0]);
                            if (s > 0)
                                r = a + 1;
                            else {
                                if (!(s < 0))
                                    return n;
                                i = a - 1
                            }
                        }
                        return null
                    }
                }
                , H = function () {
                    function e() { }
                    return e.isBuffered = function (e, t) {
                        try {
                            if (e)
                                for (var r = e.buffered, i = 0; i < r.length; i++)
                                    if (t >= r.start(i) && t <= r.end(i))
                                        return !0
                        } catch (e) { }
                        return !1
                    }
                        ,
                        e.bufferInfo = function (e, t, r) {
                            try {
                                if (e) {
                                    var i, a = e.buffered, n = [];
                                    for (i = 0; i < a.length; i++)
                                        n.push({
                                            start: a.start(i),
                                            end: a.end(i)
                                        });
                                    return this.bufferedInfo(n, t, r)
                                }
                            } catch (e) { }
                            return {
                                len: 0,
                                start: t,
                                end: t,
                                nextStart: void 0
                            }
                        }
                        ,
                        e.bufferedInfo = function (e, t, r) {
                            e.sort((function (e, t) {
                                var r = e.start - t.start;
                                return r || t.end - e.end
                            }
                            ));
                            var i = [];
                            if (r)
                                for (var a = 0; a < e.length; a++) {
                                    var n = i.length;
                                    if (n) {
                                        var s = i[n - 1].end;
                                        e[a].start - s < r ? e[a].end > s && (i[n - 1].end = e[a].end) : i.push(e[a])
                                    } else
                                        i.push(e[a])
                                }
                            else
                                i = e;
                            for (var o, l = 0, d = t, u = t, c = 0; c < i.length; c++) {
                                var h = i[c].start
                                    , f = i[c].end;
                                if (t + r >= h && t < f)
                                    d = h,
                                        l = (u = f) - t;
                                else if (t + r < h) {
                                    o = h;
                                    break
                                }
                            }
                            return {
                                len: l,
                                start: d,
                                end: u,
                                nextStart: o
                            }
                        }
                        ,
                        e
                }()
                , V = r(8)
                , Y = r(11)
                , W = r(9);
            function q() {
                return window.MediaSource || window.WebKitMediaSource
            }
            var X = r(5);
            var z = function (e) {
                var t, r;
                function i() {
                    return e.apply(this, arguments) || this
                }
                return r = e,
                    (t = i).prototype = Object.create(r.prototype),
                    t.prototype.constructor = t,
                    t.__proto__ = r,
                    i.prototype.trigger = function (e) {
                        for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                            r[i - 1] = arguments[i];
                        this.emit.apply(this, [e, e].concat(r))
                    }
                    ,
                    i
            }(V.EventEmitter)
                , Q = Object(X.a)()
                , $ = q() || {
                    isTypeSupported: function () {
                        return !1
                    }
                }
                , J = function () {
                    function e(e, t) {
                        var r = this;
                        this.hls = e,
                            this.id = t;
                        var i = this.observer = new z
                            , a = e.config
                            , n = function (t, i) {
                                (i = i || {}).frag = r.frag,
                                    i.id = r.id,
                                    e.trigger(t, i)
                            };
                        i.on(d.a.FRAG_DECRYPTED, n),
                            i.on(d.a.FRAG_PARSING_INIT_SEGMENT, n),
                            i.on(d.a.FRAG_PARSING_DATA, n),
                            i.on(d.a.FRAG_PARSED, n),
                            i.on(d.a.ERROR, n),
                            i.on(d.a.FRAG_PARSING_METADATA, n),
                            i.on(d.a.FRAG_PARSING_USERDATA, n),
                            i.on(d.a.INIT_PTS_FOUND, n);
                        var s = {
                            mp4: $.isTypeSupported("video/mp4"),
                            mpeg: $.isTypeSupported("audio/mpeg"),
                            mp3: $.isTypeSupported('audio/mp4; codecs="mp3"')
                        }
                            , l = navigator.vendor;
                        if (a.enableWorker && "undefined" != typeof Worker) {
                            var c;
                            u.b.log("demuxing in webworker");
                            try {
                                c = this.w = Y(12),
                                    this.onwmsg = this.onWorkerMessage.bind(this),
                                    c.addEventListener("message", this.onwmsg),
                                    c.onerror = function (t) {
                                        e.trigger(d.a.ERROR, {
                                            type: o.b.OTHER_ERROR,
                                            details: o.a.INTERNAL_EXCEPTION,
                                            fatal: !0,
                                            event: "demuxerWorker",
                                            err: {
                                                message: t.message + " (" + t.filename + ":" + t.lineno + ")"
                                            }
                                        })
                                    }
                                    ,
                                    c.postMessage({
                                        cmd: "init",
                                        typeSupported: s,
                                        vendor: l,
                                        id: t,
                                        config: JSON.stringify(a)
                                    })
                            } catch (e) {
                                u.b.warn("Error in worker:", e),
                                    u.b.error("Error while initializing DemuxerWorker, fallback on DemuxerInline"),
                                    c && Q.URL.revokeObjectURL(c.objectURL),
                                    this.demuxer = new W.a(i, s, a, l),
                                    this.w = void 0
                            }
                        } else
                            this.demuxer = new W.a(i, s, a, l)
                    }
                    var t = e.prototype;
                    return t.destroy = function () {
                        var e = this.w;
                        if (e)
                            e.removeEventListener("message", this.onwmsg),
                                e.terminate(),
                                this.w = null;
                        else {
                            var t = this.demuxer;
                            t && (t.destroy(),
                                this.demuxer = null)
                        }
                        var r = this.observer;
                        r && (r.removeAllListeners(),
                            this.observer = null)
                    }
                        ,
                        t.push = function (e, t, r, i, a, n, s, o) {
                            var d = this.w
                                , c = Object(l.a)(a.startPTS) ? a.startPTS : a.start
                                , h = a.decryptdata
                                , f = this.frag
                                , g = !(f && a.cc === f.cc)
                                , p = !(f && a.level === f.level)
                                , v = f && a.sn === f.sn + 1
                                , m = !p && v;
                            if (g && u.b.log(this.id + ":discontinuity detected"),
                                p && u.b.log(this.id + ":switch detected"),
                                this.frag = a,
                                d)
                                d.postMessage({
                                    cmd: "demux",
                                    data: e,
                                    decryptdata: h,
                                    initSegment: t,
                                    audioCodec: r,
                                    videoCodec: i,
                                    timeOffset: c,
                                    discontinuity: g,
                                    trackSwitch: p,
                                    contiguous: m,
                                    duration: n,
                                    accurateTimeOffset: s,
                                    defaultInitPTS: o
                                }, e instanceof ArrayBuffer ? [e] : []);
                            else {
                                var y = this.demuxer;
                                y && y.push(e, h, t, r, i, c, g, p, m, n, s, o)
                            }
                        }
                        ,
                        t.onWorkerMessage = function (e) {
                            var t = e.data
                                , r = this.hls;
                            switch (t.event) {
                                case "init":
                                    Q.URL.revokeObjectURL(this.w.objectURL);
                                    break;
                                case d.a.FRAG_PARSING_DATA:
                                    t.data.data1 = new Uint8Array(t.data1),
                                        t.data2 && (t.data.data2 = new Uint8Array(t.data2));
                                default:
                                    t.data = t.data || {},
                                        t.data.frag = this.frag,
                                        t.data.id = this.id,
                                        r.trigger(t.event, t.data)
                            }
                        }
                        ,
                        e
                }();
            function Z(e, t, r) {
                switch (t) {
                    case "audio":
                        e.audioGroupIds || (e.audioGroupIds = []),
                            e.audioGroupIds.push(r);
                        break;
                    case "text":
                        e.textGroupIds || (e.textGroupIds = []),
                            e.textGroupIds.push(r)
                }
            }
            function ee(e, t, r) {
                var i = e[t]
                    , a = e[r]
                    , n = a.startPTS;
                if (Object(l.a)(n))
                    r > t ? (i.duration = n - i.start,
                        i.duration < 0 && u.b.warn("negative duration computed for frag " + i.sn + ",level " + i.level + ", there should be some duration drift between playlist and fragment!")) : (a.duration = i.start - n,
                            a.duration < 0 && u.b.warn("negative duration computed for frag " + a.sn + ",level " + a.level + ", there should be some duration drift between playlist and fragment!"));
                else if (r > t) {
                    var s = i.cc === a.cc;
                    a.start = i.start + (s && i.minEndPTS ? i.minEndPTS - i.start : i.duration)
                } else
                    a.start = Math.max(i.start - a.duration, 0)
            }
            function te(e, t, r, i, a, n) {
                var s = r
                    , o = i;
                if (Object(l.a)(t.startPTS)) {
                    var d = Math.abs(t.startPTS - r);
                    Object(l.a)(t.deltaPTS) ? t.deltaPTS = Math.max(d, t.deltaPTS) : t.deltaPTS = d,
                        s = Math.max(r, t.startPTS),
                        r = Math.min(r, t.startPTS),
                        o = Math.min(i, t.endPTS),
                        i = Math.max(i, t.endPTS),
                        a = Math.min(a, t.startDTS),
                        n = Math.max(n, t.endDTS)
                }
                var u = r - t.start;
                t.start = t.startPTS = r,
                    t.maxStartPTS = s,
                    t.endPTS = i,
                    t.minEndPTS = o,
                    t.startDTS = a,
                    t.endDTS = n,
                    t.duration = i - r;
                var c, h, f, g = t.sn;
                if (!e || g < e.startSN || g > e.endSN)
                    return 0;
                for (c = g - e.startSN,
                    (h = e.fragments)[c] = t,
                    f = c; f > 0; f--)
                    ee(h, f, f - 1);
                for (f = c; f < h.length - 1; f++)
                    ee(h, f, f + 1);
                return e.PTSKnown = !0,
                    u
            }
            function re(e, t) {
                t.initSegment && e.initSegment && (t.initSegment = e.initSegment);
                var r, i = 0;
                if (ie(e, t, (function (e, a) {
                    i = e.cc - a.cc,
                        Object(l.a)(e.startPTS) && (a.start = a.startPTS = e.startPTS,
                            a.endPTS = e.endPTS,
                            a.duration = e.duration,
                            a.backtracked = e.backtracked,
                            a.dropped = e.dropped,
                            r = a),
                        t.PTSKnown = !0
                }
                )),
                    t.PTSKnown) {
                    if (i) {
                        u.b.log("discontinuity sliding from playlist, take drift into account");
                        for (var a = t.fragments, n = 0; n < a.length; n++)
                            a[n].cc += i
                    }
                    r ? te(t, r, r.startPTS, r.endPTS, r.startDTS, r.endDTS) : function (e, t) {
                        var r = t.startSN - e.startSN
                            , i = e.fragments
                            , a = t.fragments;
                        if (r < 0 || r > i.length)
                            return;
                        for (var n = 0; n < a.length; n++)
                            a[n].start += i[r].start
                    }(e, t),
                        t.PTSKnown = e.PTSKnown
                }
            }
            function ie(e, t, r) {
                if (e && t)
                    for (var i = Math.max(e.startSN, t.startSN) - t.startSN, a = Math.min(e.endSN, t.endSN) - t.startSN, n = t.startSN - e.startSN, s = i; s <= a; s++) {
                        var o = e.fragments[n + s]
                            , l = t.fragments[s];
                        if (!o || !l)
                            break;
                        r(o, l, s)
                    }
            }
            function ae(e, t, r) {
                var i = 1e3 * (t.averagetargetduration ? t.averagetargetduration : t.targetduration)
                    , a = i / 2;
                return e && t.endSN === e.endSN && (i = a),
                    r && (i = Math.max(a, i - (window.performance.now() - r))),
                    Math.round(i)
            }
            var ne = {
                toString: function (e) {
                    for (var t = "", r = e.length, i = 0; i < r; i++)
                        t += "[" + e.start(i).toFixed(3) + "," + e.end(i).toFixed(3) + "]";
                    return t
                }
            };
            function se(e, t) {
                t.fragments.forEach((function (t) {
                    if (t) {
                        var r = t.start + e;
                        t.start = t.startPTS = r,
                            t.endPTS = r + t.duration
                    }
                }
                )),
                    t.PTSKnown = !0
            }
            function oe(e, t, r) {
                !function (e, t, r) {
                    if (function (e, t, r) {
                        var i = !1;
                        return t && t.details && r && (r.endCC > r.startCC || e && e.cc < r.startCC) && (i = !0),
                            i
                    }(e, r, t)) {
                        var i = function (e, t) {
                            var r = e.fragments
                                , i = t.fragments;
                            if (i.length && r.length) {
                                var a = function (e, t) {
                                    for (var r = null, i = 0; i < e.length; i += 1) {
                                        var a = e[i];
                                        if (a && a.cc === t) {
                                            r = a;
                                            break
                                        }
                                    }
                                    return r
                                }(r, i[0].cc);
                                if (a && (!a || a.startPTS))
                                    return a;
                                u.b.log("No frag in previous level to align on")
                            } else
                                u.b.log("No fragments to align")
                        }(r.details, t);
                        i && (u.b.log("Adjusting PTS using last level due to CC increase within current level"),
                            se(i.start, t))
                    }
                }(e, r, t),
                    !r.PTSKnown && t && function (e, t) {
                        if (t && t.fragments.length) {
                            if (!e.hasProgramDateTime || !t.hasProgramDateTime)
                                return;
                            var r = t.fragments[0].programDateTime
                                , i = (e.fragments[0].programDateTime - r) / 1e3 + t.fragments[0].start;
                            Object(l.a)(i) && (u.b.log("adjusting PTS using programDateTime delta, sliding:" + i.toFixed(3)),
                                se(i, e))
                        }
                    }(r, t.details)
            }
            function le(e, t, r) {
                if (null === t || !Array.isArray(e) || !e.length || !Object(l.a)(t))
                    return null;
                if (t < (e[0].programDateTime || 0))
                    return null;
                if (t >= (e[e.length - 1].endProgramDateTime || 0))
                    return null;
                r = r || 0;
                for (var i = 0; i < e.length; ++i) {
                    var a = e[i];
                    if (ce(t, r, a))
                        return a
                }
                return null
            }
            function de(e, t, r, i) {
                void 0 === r && (r = 0),
                    void 0 === i && (i = 0);
                var a = null;
                if (e ? a = t[e.sn - t[0].sn + 1] : 0 === r && 0 === t[0].start && (a = t[0]),
                    a && 0 === ue(r, i, a))
                    return a;
                var n = j.search(t, ue.bind(null, r, i));
                return n || a
            }
            function ue(e, t, r) {
                void 0 === e && (e = 0),
                    void 0 === t && (t = 0);
                var i = Math.min(t, r.duration + (r.deltaPTS ? r.deltaPTS : 0));
                return r.start + r.duration - i <= e ? 1 : r.start - i > e && r.start ? -1 : 0
            }
            function ce(e, t, r) {
                var i = 1e3 * Math.min(t, r.duration + (r.deltaPTS ? r.deltaPTS : 0));
                return (r.endProgramDateTime || 0) - i > e
            }
            var he = function () {
                function e(e, t, r, i) {
                    this.config = e,
                        this.media = t,
                        this.fragmentTracker = r,
                        this.hls = i,
                        this.nudgeRetry = 0,
                        this.stallReported = !1,
                        this.stalled = null,
                        this.moved = !1,
                        this.seeking = !1
                }
                var t = e.prototype;
                return t.poll = function (e) {
                    var t = this.config
                        , r = this.media
                        , i = this.stalled
                        , a = r.currentTime
                        , n = r.seeking
                        , s = this.seeking && !n
                        , o = !this.seeking && n;
                    if (this.seeking = n,
                        a === e) {
                        if ((o || s) && (this.stalled = null),
                            !r.paused && !r.ended && 0 !== r.playbackRate && r.buffered.length) {
                            var l = H.bufferInfo(r, a, 0)
                                , d = l.len > 0
                                , c = l.nextStart || 0;
                            if (d || c) {
                                if (n) {
                                    var h = l.len > 2
                                        , f = !c || c - a > 2 && !this.fragmentTracker.getPartialFragment(a);
                                    if (h || f)
                                        return;
                                    this.moved = !1
                                }
                                if (!this.moved && this.stalled) {
                                    var g = Math.max(c, l.start || 0) - a;
                                    if (g > 0 && g <= 2)
                                        return void this._trySkipBufferHole(null)
                                }
                                var p = self.performance.now();
                                if (null !== i) {
                                    var v = p - i;
                                    !n && v >= 250 && this._reportStall(l.len);
                                    var m = H.bufferInfo(r, a, t.maxBufferHole);
                                    this._tryFixBufferStall(m, v)
                                } else
                                    this.stalled = p
                            }
                        }
                    } else if (this.moved = !0,
                        null !== i) {
                        if (this.stallReported) {
                            var y = self.performance.now() - i;
                            u.b.warn("playback not stuck anymore @" + a + ", after " + Math.round(y) + "ms"),
                                this.stallReported = !1
                        }
                        this.stalled = null,
                            this.nudgeRetry = 0
                    }
                }
                    ,
                    t._tryFixBufferStall = function (e, t) {
                        var r = this.config
                            , i = this.fragmentTracker
                            , a = this.media.currentTime
                            , n = i.getPartialFragment(a);
                        if (n && this._trySkipBufferHole(n))
                            return;
                        e.len > r.maxBufferHole && t > 1e3 * r.highBufferWatchdogPeriod && (u.b.warn("Trying to nudge playhead over buffer-hole"),
                            this.stalled = null,
                            this._tryNudgeBuffer())
                    }
                    ,
                    t._reportStall = function (e) {
                        var t = this.hls
                            , r = this.media;
                        this.stallReported || (this.stallReported = !0,
                            u.b.warn("Playback stalling at @" + r.currentTime + " due to low buffer (buffer=" + e + ")"),
                            t.trigger(d.a.ERROR, {
                                type: o.b.MEDIA_ERROR,
                                details: o.a.BUFFER_STALLED_ERROR,
                                fatal: !1,
                                buffer: e
                            }))
                    }
                    ,
                    t._trySkipBufferHole = function (e) {
                        for (var t = this.config, r = this.hls, i = this.media, a = i.currentTime, n = 0, s = 0; s < i.buffered.length; s++) {
                            var l = i.buffered.start(s);
                            if (a + t.maxBufferHole >= n && a < l) {
                                var c = Math.max(l + .05, i.currentTime + .1);
                                return u.b.warn("skipping hole, adjusting currentTime from " + a + " to " + c),
                                    this.moved = !0,
                                    this.stalled = null,
                                    i.currentTime = c,
                                    e && r.trigger(d.a.ERROR, {
                                        type: o.b.MEDIA_ERROR,
                                        details: o.a.BUFFER_SEEK_OVER_HOLE,
                                        fatal: !1,
                                        reason: "fragment loaded with buffer holes, seeking from " + a + " to " + c,
                                        frag: e
                                    }),
                                    c
                            }
                            n = i.buffered.end(s)
                        }
                        return 0
                    }
                    ,
                    t._tryNudgeBuffer = function () {
                        var e = this.config
                            , t = this.hls
                            , r = this.media
                            , i = r.currentTime
                            , a = (this.nudgeRetry || 0) + 1;
                        if (this.nudgeRetry = a,
                            a < e.nudgeMaxRetry) {
                            var n = i + a * e.nudgeOffset;
                            u.b.warn("Nudging 'currentTime' from " + i + " to " + n),
                                r.currentTime = n,
                                t.trigger(d.a.ERROR, {
                                    type: o.b.MEDIA_ERROR,
                                    details: o.a.BUFFER_NUDGE_ON_STALL,
                                    fatal: !1
                                })
                        } else
                            u.b.error("Playhead still not moving while enough data buffered @" + i + " after " + e.nudgeMaxRetry + " nudges"),
                                t.trigger(d.a.ERROR, {
                                    type: o.b.MEDIA_ERROR,
                                    details: o.a.BUFFER_STALLED_ERROR,
                                    fatal: !0
                                })
                    }
                    ,
                    e
            }();
            function fe(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            var ge = function (e) {
                var t, r;
                function i(t) {
                    for (var r, i = arguments.length, a = new Array(i > 1 ? i - 1 : 0), n = 1; n < i; n++)
                        a[n - 1] = arguments[n];
                    return (r = e.call.apply(e, [this, t].concat(a)) || this)._boundTick = void 0,
                        r._tickTimer = null,
                        r._tickInterval = null,
                        r._tickCallCount = 0,
                        r._boundTick = r.tick.bind(fe(r)),
                        r
                }
                r = e,
                    (t = i).prototype = Object.create(r.prototype),
                    t.prototype.constructor = t,
                    t.__proto__ = r;
                var a = i.prototype;
                return a.onHandlerDestroying = function () {
                    this.clearNextTick(),
                        this.clearInterval()
                }
                    ,
                    a.hasInterval = function () {
                        return !!this._tickInterval
                    }
                    ,
                    a.hasNextTick = function () {
                        return !!this._tickTimer
                    }
                    ,
                    a.setInterval = function (e) {
                        return !this._tickInterval && (this._tickInterval = self.setInterval(this._boundTick, e),
                            !0)
                    }
                    ,
                    a.clearInterval = function () {
                        return !!this._tickInterval && (self.clearInterval(this._tickInterval),
                            this._tickInterval = null,
                            !0)
                    }
                    ,
                    a.clearNextTick = function () {
                        return !!this._tickTimer && (self.clearTimeout(this._tickTimer),
                            this._tickTimer = null,
                            !0)
                    }
                    ,
                    a.tick = function () {
                        this._tickCallCount++,
                            1 === this._tickCallCount && (this.doTick(),
                                this._tickCallCount > 1 && (this.clearNextTick(),
                                    this._tickTimer = self.setTimeout(this._boundTick, 0)),
                                this._tickCallCount = 0)
                    }
                    ,
                    a.doTick = function () { }
                    ,
                    i
            }(h);
            var pe = "STOPPED"
                , ve = "STARTING"
                , me = "IDLE"
                , ye = "PAUSED"
                , be = "KEY_LOADING"
                , Te = "FRAG_LOADING"
                , Ee = "FRAG_LOADING_WAITING_RETRY"
                , Se = "WAITING_TRACK"
                , _e = "PARSING"
                , Re = "PARSED"
                , Ae = "BUFFER_FLUSHING"
                , ke = "ENDED"
                , we = "ERROR"
                , Le = "WAITING_INIT_PTS"
                , De = "WAITING_LEVEL"
                , Oe = function (e) {
                    var t, r;
                    function i() {
                        return e.apply(this, arguments) || this
                    }
                    r = e,
                        (t = i).prototype = Object.create(r.prototype),
                        t.prototype.constructor = t,
                        t.__proto__ = r;
                    var a = i.prototype;
                    return a.doTick = function () { }
                        ,
                        a.startLoad = function () { }
                        ,
                        a.stopLoad = function () {
                            var e = this.fragCurrent;
                            e && (e.loader && e.loader.abort(),
                                this.fragmentTracker.removeFragment(e)),
                                this.demuxer && (this.demuxer.destroy(),
                                    this.demuxer = null),
                                this.fragCurrent = null,
                                this.fragPrevious = null,
                                this.clearInterval(),
                                this.clearNextTick(),
                                this.state = pe
                        }
                        ,
                        a._streamEnded = function (e, t) {
                            var r = this.fragCurrent
                                , i = this.fragmentTracker;
                            if (!t.live && r && !r.backtracked && r.sn === t.endSN && !e.nextStart) {
                                var a = i.getState(r);
                                return a === B || a === G
                            }
                            return !1
                        }
                        ,
                        a.onMediaSeeking = function () {
                            var e = this.config
                                , t = this.media
                                , r = this.mediaBuffer
                                , i = this.state
                                , a = t ? t.currentTime : null
                                , n = H.bufferInfo(r || t, a, this.config.maxBufferHole);
                            if (u.b.log("media seeking to " + (Object(l.a)(a) ? a.toFixed(3) : a)),
                                i === Te) {
                                var s = this.fragCurrent;
                                if (0 === n.len && s) {
                                    var o = e.maxFragLookUpTolerance
                                        , d = s.start - o
                                        , c = s.start + s.duration + o;
                                    a < d || a > c ? (s.loader && (u.b.log("seeking outside of buffer while fragment load in progress, cancel fragment load"),
                                        s.loader.abort()),
                                        this.fragCurrent = null,
                                        this.fragPrevious = null,
                                        this.state = me) : u.b.log("seeking outside of buffer but within currently loaded fragment range")
                                }
                            } else
                                i === ke && (0 === n.len && (this.fragPrevious = null,
                                    this.fragCurrent = null),
                                    this.state = me);
                            t && (this.lastCurrentTime = a),
                                this.loadedmetadata || (this.nextLoadPosition = this.startPosition = a),
                                this.tick()
                        }
                        ,
                        a.onMediaEnded = function () {
                            this.startPosition = this.lastCurrentTime = 0
                        }
                        ,
                        a.onHandlerDestroying = function () {
                            this.stopLoad(),
                                e.prototype.onHandlerDestroying.call(this)
                        }
                        ,
                        a.onHandlerDestroyed = function () {
                            this.state = pe,
                                this.fragmentTracker = null
                        }
                        ,
                        a.computeLivePosition = function (e, t) {
                            var r = void 0 !== this.config.liveSyncDuration ? this.config.liveSyncDuration : this.config.liveSyncDurationCount * t.targetduration;
                            return e + Math.max(0, t.totalduration - r)
                        }
                        ,
                        i
                }(ge);
            function Ce(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i)
                }
            }
            var Ie, Pe = function (e) {
                var t, r;
                function i(t, r) {
                    var i;
                    return (i = e.call(this, t, d.a.MEDIA_ATTACHED, d.a.MEDIA_DETACHING, d.a.MANIFEST_LOADING, d.a.MANIFEST_PARSED, d.a.LEVEL_LOADED, d.a.LEVELS_UPDATED, d.a.KEY_LOADED, d.a.FRAG_LOADED, d.a.FRAG_LOAD_EMERGENCY_ABORTED, d.a.FRAG_PARSING_INIT_SEGMENT, d.a.FRAG_PARSING_DATA, d.a.FRAG_PARSED, d.a.ERROR, d.a.AUDIO_TRACK_SWITCHING, d.a.AUDIO_TRACK_SWITCHED, d.a.BUFFER_CREATED, d.a.BUFFER_APPENDED, d.a.BUFFER_FLUSHED) || this).fragmentTracker = r,
                        i.config = t.config,
                        i.audioCodecSwap = !1,
                        i._state = pe,
                        i.stallReported = !1,
                        i.gapController = null,
                        i.altAudio = !1,
                        i.audioOnly = !1,
                        i.bitrateTest = !1,
                        i
                }
                r = e,
                    (t = i).prototype = Object.create(r.prototype),
                    t.prototype.constructor = t,
                    t.__proto__ = r;
                var a, s, c, h = i.prototype;
                return h.startLoad = function (e) {
                    if (this.levels) {
                        var t = this.lastCurrentTime
                            , r = this.hls;
                        if (this.stopLoad(),
                            this.setInterval(100),
                            this.level = -1,
                            this.fragLoadError = 0,
                            !this.startFragRequested) {
                            var i = r.startLevel;
                            -1 === i && (r.config.testBandwidth ? (i = 0,
                                this.bitrateTest = !0) : i = r.nextAutoLevel),
                                this.level = r.nextLoadLevel = i,
                                this.loadedmetadata = !1
                        }
                        t > 0 && -1 === e && (u.b.log("override startPosition with lastCurrentTime @" + t.toFixed(3)),
                            e = t),
                            this.state = me,
                            this.nextLoadPosition = this.startPosition = this.lastCurrentTime = e,
                            this.tick()
                    } else
                        this.forceStartLoad = !0,
                            this.state = pe
                }
                    ,
                    h.stopLoad = function () {
                        this.forceStartLoad = !1,
                            e.prototype.stopLoad.call(this)
                    }
                    ,
                    h.doTick = function () {
                        switch (this.state) {
                            case Ae:
                                this.fragLoadError = 0;
                                break;
                            case me:
                                this._doTickIdle();
                                break;
                            case De:
                                var e = this.levels[this.level];
                                e && e.details && (this.state = me);
                                break;
                            case Ee:
                                var t = window.performance.now()
                                    , r = this.retryDate;
                                (!r || t >= r || this.media && this.media.seeking) && (u.b.log("mediaController: retryDate reached, switch back to IDLE state"),
                                    this.state = me)
                        }
                        this._checkBuffer(),
                            this._checkFragmentChanged()
                    }
                    ,
                    h._doTickIdle = function () {
                        var e = this.hls
                            , t = e.config
                            , r = this.media;
                        if (void 0 !== this.levelLastLoaded && (r || !this.startFragRequested && t.startFragPrefetch))
                            if (this.altAudio && this.audioOnly)
                                this.demuxer.frag = null;
                            else {
                                var i;
                                i = this.loadedmetadata ? r.currentTime : this.nextLoadPosition;
                                var a = e.nextLoadLevel
                                    , n = this.levels[a];
                                if (n) {
                                    var s, o = n.bitrate;
                                    s = o ? Math.max(8 * t.maxBufferSize / o, t.maxBufferLength) : t.maxBufferLength,
                                        s = Math.min(s, t.maxMaxBufferLength);
                                    var l = i < t.maxBufferHole ? Math.max(2, t.maxBufferHole) : t.maxBufferHole
                                        , c = H.bufferInfo(this.mediaBuffer ? this.mediaBuffer : r, i, l)
                                        , h = c.len;
                                    if (!(h >= s)) {
                                        u.b.trace("buffer length of " + h.toFixed(3) + " is below max of " + s.toFixed(3) + ". checking for more payload ..."),
                                            this.level = e.nextLoadLevel = a;
                                        var f = n.details;
                                        if (!f || f.live && this.levelLastLoaded !== a)
                                            this.state = De;
                                        else {
                                            if (this._streamEnded(c, f)) {
                                                var g = {};
                                                return this.altAudio && (g.type = "video"),
                                                    this.hls.trigger(d.a.BUFFER_EOS, g),
                                                    void (this.state = ke)
                                            }
                                            this._fetchPayloadOrEos(i, c, f)
                                        }
                                    }
                                }
                            }
                    }
                    ,
                    h._fetchPayloadOrEos = function (e, t, r) {
                        var i = this.fragPrevious
                            , a = (this.level,
                                r.fragments)
                            , n = a.length;
                        if (0 !== n) {
                            var s, o = a[0].start, l = a[n - 1].start + a[n - 1].duration, d = t.end;
                            if (r.initSegment && !r.initSegment.data)
                                s = r.initSegment;
                            else if (r.live) {
                                var c = this.config.initialLiveManifestSize;
                                if (n < c)
                                    return void u.b.warn("Can not start playback of a level, reason: not enough fragments " + n + " < " + c);
                                if (null === (s = this._ensureFragmentAtLivePoint(r, d, o, l, i, a)))
                                    return
                            } else
                                d < o && (s = a[0]);
                            s || (s = this._findFragment(o, i, n, a, d, l, r)),
                                s && (s.encrypted ? this._loadKey(s, r) : this._loadFragment(s, r, e, d))
                        }
                    }
                    ,
                    h._ensureFragmentAtLivePoint = function (e, t, r, i, a, n) {
                        var s, o = this.hls.config, d = this.media, c = 1 / 0;
                        if (void 0 !== o.liveMaxLatencyDuration ? c = o.liveMaxLatencyDuration : Object(l.a)(o.liveMaxLatencyDurationCount) && (c = o.liveMaxLatencyDurationCount * e.targetduration),
                            t < Math.max(r - o.maxFragLookUpTolerance, i - c)) {
                            var h = this.liveSyncPosition = this.computeLivePosition(r, e);
                            t = h,
                                d && !d.paused && d.readyState && d.duration > h && h > d.currentTime && (u.b.log("buffer end: " + t.toFixed(3) + " is located too far from the end of live sliding playlist, reset currentTime to : " + h.toFixed(3)),
                                    d.currentTime = h),
                                this.nextLoadPosition = h
                        }
                        if (e.PTSKnown && t > i && d && d.readyState)
                            return null;
                        if (this.startFragRequested && !e.PTSKnown && a)
                            if (e.hasProgramDateTime)
                                u.b.log("live playlist, switching playlist, load frag with same PDT: " + a.programDateTime),
                                    s = le(n, a.endProgramDateTime, o.maxFragLookUpTolerance);
                            else {
                                var f = a.sn + 1;
                                if (f >= e.startSN && f <= e.endSN) {
                                    var g = n[f - e.startSN];
                                    a.cc === g.cc && (s = g,
                                        u.b.log("live playlist, switching playlist, load frag with next SN: " + s.sn))
                                }
                                s || (s = j.search(n, (function (e) {
                                    return a.cc - e.cc
                                }
                                ))) && u.b.log("live playlist, switching playlist, load frag with same CC: " + s.sn)
                            }
                        return s
                    }
                    ,
                    h._findFragment = function (e, t, r, i, a, n, s) {
                        var o, l = this.hls.config;
                        a < n ? o = de(t, i, a, a > n - l.maxFragLookUpTolerance ? 0 : l.maxFragLookUpTolerance) : o = i[r - 1];
                        if (o) {
                            var d = o.sn - s.startSN
                                , c = t && o.level === t.level
                                , h = i[d - 1]
                                , f = i[d + 1];
                            if (t && o.sn === t.sn)
                                if (c && !o.backtracked)
                                    if (o.sn < s.endSN) {
                                        var g = t.deltaPTS;
                                        g && g > l.maxBufferHole && t.dropped && d ? (o = h,
                                            u.b.warn("Previous fragment was dropped with large PTS gap between audio and video. Maybe fragment is not starting with a keyframe? Loading previous one to try to overcome this")) : (o = f,
                                                this.fragmentTracker.getState(o) !== G && u.b.log("Re-loading fragment with SN: " + o.sn))
                                    } else
                                        o = null;
                                else
                                    o.backtracked && (f && f.backtracked ? (u.b.warn("Already backtracked from fragment " + f.sn + ", will not backtrack to fragment " + o.sn + ". Loading fragment " + f.sn),
                                        o = f) : (u.b.warn("Loaded fragment with dropped frames, backtracking 1 segment to find a keyframe"),
                                            o.dropped = 0,
                                            h ? (o = h).backtracked = !0 : d && (o = null)))
                        }
                        return o
                    }
                    ,
                    h._loadKey = function (e, t) {
                        u.b.log("Loading key for " + e.sn + " of [" + t.startSN + "-" + t.endSN + "], level " + this.level),
                            this.state = be,
                            this.hls.trigger(d.a.KEY_LOADING, {
                                frag: e
                            })
                    }
                    ,
                    h._loadFragment = function (e, t, r, i) {
                        var a = this.fragmentTracker.getState(e);
                        this.fragCurrent = e,
                            "initSegment" !== e.sn && (this.startFragRequested = !0),
                            Object(l.a)(e.sn) && !e.bitrateTest && (this.nextLoadPosition = e.start + e.duration),
                            e.backtracked || a === U || a === B ? (e.autoLevel = this.hls.autoLevelEnabled,
                                e.bitrateTest = this.bitrateTest,
                                u.b.log("Loading " + e.sn + " of [" + t.startSN + "-" + t.endSN + "], level " + this.level + ", " + (this.loadedmetadata ? "currentTime" : "nextLoadPosition") + ": " + parseFloat(r.toFixed(3)) + ", bufferEnd: " + parseFloat(i.toFixed(3))),
                                this.hls.trigger(d.a.FRAG_LOADING, {
                                    frag: e
                                }),
                                this.demuxer || (this.demuxer = new J(this.hls, "main")),
                                this.state = Te) : a === N && this._reduceMaxBufferLength(e.duration) && this.fragmentTracker.removeFragment(e)
                    }
                    ,
                    h.getBufferedFrag = function (e) {
                        return this.fragmentTracker.getBufferedFrag(e, n.MAIN)
                    }
                    ,
                    h.followingBufferedFrag = function (e) {
                        return e ? this.getBufferedFrag(e.endPTS + .5) : null
                    }
                    ,
                    h._checkFragmentChanged = function () {
                        var e, t, r = this.media;
                        if (r && r.readyState && !1 === r.seeking && ((t = r.currentTime) > this.lastCurrentTime && (this.lastCurrentTime = t),
                            H.isBuffered(r, t) ? e = this.getBufferedFrag(t) : H.isBuffered(r, t + .1) && (e = this.getBufferedFrag(t + .1)),
                            e)) {
                            var i = e;
                            if (i !== this.fragPlaying) {
                                this.hls.trigger(d.a.FRAG_CHANGED, {
                                    frag: i
                                });
                                var a = i.level;
                                this.fragPlaying && this.fragPlaying.level === a || this.hls.trigger(d.a.LEVEL_SWITCHED, {
                                    level: a
                                }),
                                    this.fragPlaying = i
                            }
                        }
                    }
                    ,
                    h.immediateLevelSwitch = function () {
                        if (u.b.log("immediateLevelSwitch"),
                            !this.immediateSwitch) {
                            this.immediateSwitch = !0;
                            var e, t = this.media;
                            t ? (e = t.paused) || t.pause() : e = !0,
                                this.previouslyPaused = e
                        }
                        var r = this.fragCurrent;
                        r && r.loader && r.loader.abort(),
                            this.fragCurrent = null,
                            this.flushMainBuffer(0, Number.POSITIVE_INFINITY)
                    }
                    ,
                    h.immediateLevelSwitchEnd = function () {
                        var e = this.media;
                        e && e.buffered.length && (this.immediateSwitch = !1,
                            e.currentTime > 0 && H.isBuffered(e, e.currentTime) && (e.currentTime -= 1e-4),
                            this.previouslyPaused || e.play())
                    }
                    ,
                    h.nextLevelSwitch = function () {
                        var e = this.media;
                        if (e && e.readyState) {
                            var t, r = this.getBufferedFrag(e.currentTime);
                            if (r && r.startPTS > 1 && this.flushMainBuffer(0, r.startPTS - 1),
                                e.paused)
                                t = 0;
                            else {
                                var i = this.hls.nextLoadLevel
                                    , a = this.levels[i]
                                    , n = this.fragLastKbps;
                                t = n && this.fragCurrent ? this.fragCurrent.duration * a.bitrate / (1e3 * n) + 1 : 0
                            }
                            var s = this.getBufferedFrag(e.currentTime + t);
                            if (s) {
                                var o = this.followingBufferedFrag(s);
                                if (o) {
                                    var l = this.fragCurrent;
                                    l && l.loader && l.loader.abort(),
                                        this.fragCurrent = null;
                                    var d = Math.max(s.endPTS, o.maxStartPTS + Math.min(this.config.maxFragLookUpTolerance, o.duration));
                                    this.flushMainBuffer(d, Number.POSITIVE_INFINITY)
                                }
                            }
                        }
                    }
                    ,
                    h.flushMainBuffer = function (e, t) {
                        this.state = Ae;
                        var r = {
                            startOffset: e,
                            endOffset: t
                        };
                        this.altAudio && (r.type = "video"),
                            this.hls.trigger(d.a.BUFFER_FLUSHING, r)
                    }
                    ,
                    h.onMediaAttached = function (e) {
                        var t = this.media = this.mediaBuffer = e.media;
                        this.onvseeking = this.onMediaSeeking.bind(this),
                            this.onvseeked = this.onMediaSeeked.bind(this),
                            this.onvended = this.onMediaEnded.bind(this),
                            t.addEventListener("seeking", this.onvseeking),
                            t.addEventListener("seeked", this.onvseeked),
                            t.addEventListener("ended", this.onvended);
                        var r = this.config;
                        this.levels && r.autoStartLoad && this.hls.startLoad(r.startPosition),
                            this.gapController = new he(r, t, this.fragmentTracker, this.hls)
                    }
                    ,
                    h.onMediaDetaching = function () {
                        var e = this.media;
                        e && e.ended && (u.b.log("MSE detaching and video ended, reset startPosition"),
                            this.startPosition = this.lastCurrentTime = 0);
                        var t = this.levels;
                        t && t.forEach((function (e) {
                            e.details && e.details.fragments.forEach((function (e) {
                                e.backtracked = void 0
                            }
                            ))
                        }
                        )),
                            e && (e.removeEventListener("seeking", this.onvseeking),
                                e.removeEventListener("seeked", this.onvseeked),
                                e.removeEventListener("ended", this.onvended),
                                this.onvseeking = this.onvseeked = this.onvended = null),
                            this.fragmentTracker.removeAllFragments(),
                            this.media = this.mediaBuffer = null,
                            this.loadedmetadata = !1,
                            this.stopLoad()
                    }
                    ,
                    h.onMediaSeeked = function () {
                        var e = this.media
                            , t = e ? e.currentTime : void 0;
                        Object(l.a)(t) && u.b.log("media seeked to " + t.toFixed(3)),
                            this.tick()
                    }
                    ,
                    h.onManifestLoading = function () {
                        u.b.log("trigger BUFFER_RESET"),
                            this.hls.trigger(d.a.BUFFER_RESET),
                            this.fragmentTracker.removeAllFragments(),
                            this.stalled = !1,
                            this.startPosition = this.lastCurrentTime = 0
                    }
                    ,
                    h.onManifestParsed = function (e) {
                        var t, r = !1, i = !1;
                        e.levels.forEach((function (e) {
                            (t = e.audioCodec) && (-1 !== t.indexOf("mp4a.40.2") && (r = !0),
                                -1 !== t.indexOf("mp4a.40.5") && (i = !0))
                        }
                        )),
                            this.audioCodecSwitch = r && i,
                            this.audioCodecSwitch && u.b.log("both AAC/HE-AAC audio found in levels; declaring level codec as HE-AAC"),
                            this.altAudio = e.altAudio,
                            this.levels = e.levels,
                            this.startFragRequested = !1;
                        var a = this.config;
                        (a.autoStartLoad || this.forceStartLoad) && this.hls.startLoad(a.startPosition)
                    }
                    ,
                    h.onLevelLoaded = function (e) {
                        var t = e.details
                            , r = e.level
                            , i = this.levels[this.levelLastLoaded]
                            , a = this.levels[r]
                            , n = t.totalduration
                            , s = 0;
                        if (u.b.log("level " + r + " loaded [" + t.startSN + "," + t.endSN + "],duration:" + n),
                            t.live || a.details && a.details.live) {
                            var o = a.details;
                            o && t.fragments.length > 0 ? (re(o, t),
                                s = t.fragments[0].start,
                                this.liveSyncPosition = this.computeLivePosition(s, o),
                                t.PTSKnown && Object(l.a)(s) ? u.b.log("live playlist sliding:" + s.toFixed(3)) : (u.b.log("live playlist - outdated PTS, unknown sliding"),
                                    oe(this.fragPrevious, i, t))) : (u.b.log("live playlist - first load, unknown sliding"),
                                        t.PTSKnown = !1,
                                        oe(this.fragPrevious, i, t))
                        } else
                            t.PTSKnown = !1;
                        if (a.details = t,
                            this.levelLastLoaded = r,
                            this.hls.trigger(d.a.LEVEL_UPDATED, {
                                details: t,
                                level: r
                            }),
                            !1 === this.startFragRequested) {
                            if (-1 === this.startPosition || -1 === this.lastCurrentTime) {
                                var c = t.startTimeOffset;
                                Object(l.a)(c) ? (c < 0 && (u.b.log("negative start time offset " + c + ", count from end of last fragment"),
                                    c = s + n + c),
                                    u.b.log("start time offset found in playlist, adjust startPosition to " + c),
                                    this.startPosition = c) : t.live ? (this.startPosition = this.computeLivePosition(s, t),
                                        u.b.log("configure startPosition to " + this.startPosition)) : this.startPosition = 0,
                                    this.lastCurrentTime = this.startPosition
                            }
                            this.nextLoadPosition = this.startPosition
                        }
                        this.state === De && (this.state = me),
                            this.tick()
                    }
                    ,
                    h.onKeyLoaded = function () {
                        this.state === be && (this.state = me,
                            this.tick())
                    }
                    ,
                    h.onFragLoaded = function (e) {
                        var t = this.fragCurrent
                            , r = this.hls
                            , i = this.levels
                            , a = this.media
                            , n = e.frag;
                        if (this.state === Te && t && "main" === n.type && n.level === t.level && n.sn === t.sn) {
                            var s = e.stats
                                , o = i[t.level]
                                , l = o.details;
                            if (this.bitrateTest = !1,
                                this.stats = s,
                                u.b.log("Loaded " + t.sn + " of [" + l.startSN + " ," + l.endSN + "],level " + t.level),
                                n.bitrateTest && r.nextLoadLevel)
                                this.state = me,
                                    this.startFragRequested = !1,
                                    s.tparsed = s.tbuffered = window.performance.now(),
                                    r.trigger(d.a.FRAG_BUFFERED, {
                                        stats: s,
                                        frag: t,
                                        id: "main"
                                    }),
                                    this.tick();
                            else if ("initSegment" === n.sn)
                                this.state = me,
                                    s.tparsed = s.tbuffered = window.performance.now(),
                                    l.initSegment.data = e.payload,
                                    r.trigger(d.a.FRAG_BUFFERED, {
                                        stats: s,
                                        frag: t,
                                        id: "main"
                                    }),
                                    this.tick();
                            else {
                                u.b.log("Parsing " + t.sn + " of [" + l.startSN + " ," + l.endSN + "],level " + t.level + ", cc " + t.cc),
                                    this.state = _e,
                                    this.pendingBuffering = !0,
                                    this.appended = !1,
                                    n.bitrateTest && (n.bitrateTest = !1,
                                        this.fragmentTracker.onFragLoaded({
                                            frag: n
                                        }));
                                var c = !(a && a.seeking) && (l.PTSKnown || !l.live)
                                    , h = l.initSegment ? l.initSegment.data : []
                                    , f = this._getAudioCodec(o);
                                (this.demuxer = this.demuxer || new J(this.hls, "main")).push(e.payload, h, f, o.videoCodec, t, l.totalduration, c)
                            }
                        }
                        this.fragLoadError = 0
                    }
                    ,
                    h.onFragParsingInitSegment = function (e) {
                        var t = this.fragCurrent
                            , r = e.frag;
                        if (t && "main" === e.id && r.sn === t.sn && r.level === t.level && this.state === _e) {
                            var i, a, n = e.tracks;
                            if (this.audioOnly = n.audio && !n.video,
                                this.altAudio && !this.audioOnly && delete n.audio,
                                a = n.audio) {
                                var s = this.levels[this.level].audioCodec
                                    , o = navigator.userAgent.toLowerCase();
                                s && this.audioCodecSwap && (u.b.log("swapping playlist audio codec"),
                                    s = -1 !== s.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5"),
                                    this.audioCodecSwitch && 1 !== a.metadata.channelCount && -1 === o.indexOf("firefox") && (s = "mp4a.40.5"),
                                    -1 !== o.indexOf("android") && "audio/mpeg" !== a.container && (s = "mp4a.40.2",
                                        u.b.log("Android: force audio codec to " + s)),
                                    a.levelCodec = s,
                                    a.id = e.id
                            }
                            for (i in (a = n.video) && (a.levelCodec = this.levels[this.level].videoCodec,
                                a.id = e.id),
                                this.hls.trigger(d.a.BUFFER_CODECS, n),
                                n) {
                                a = n[i],
                                    u.b.log("main track:" + i + ",container:" + a.container + ",codecs[level/parsed]=[" + a.levelCodec + "/" + a.codec + "]");
                                var l = a.initSegment;
                                l && (this.appended = !0,
                                    this.pendingBuffering = !0,
                                    this.hls.trigger(d.a.BUFFER_APPENDING, {
                                        type: i,
                                        data: l,
                                        parent: "main",
                                        content: "initSegment"
                                    }))
                            }
                            this.tick()
                        }
                    }
                    ,
                    h.onFragParsingData = function (e) {
                        var t = this
                            , r = this.fragCurrent
                            , i = e.frag;
                        if (r && "main" === e.id && i.sn === r.sn && i.level === r.level && ("audio" !== e.type || !this.altAudio) && this.state === _e) {
                            var a = this.levels[this.level]
                                , n = r;
                            if (Object(l.a)(e.endPTS) || (e.endPTS = e.startPTS + r.duration,
                                e.endDTS = e.startDTS + r.duration),
                                !0 === e.hasAudio && n.addElementaryStream(p.AUDIO),
                                !0 === e.hasVideo && n.addElementaryStream(p.VIDEO),
                                u.b.log("Parsed " + e.type + ",PTS:[" + e.startPTS.toFixed(3) + "," + e.endPTS.toFixed(3) + "],DTS:[" + e.startDTS.toFixed(3) + "/" + e.endDTS.toFixed(3) + "],nb:" + e.nb + ",dropped:" + (e.dropped || 0)),
                                "video" === e.type)
                                if (n.dropped = e.dropped,
                                    n.dropped)
                                    if (n.backtracked)
                                        u.b.warn("Already backtracked on this fragment, appending with the gap", n.sn);
                                    else {
                                        var s = a.details;
                                        if (!s || n.sn !== s.startSN)
                                            return u.b.warn("missing video frame(s), backtracking fragment", n.sn),
                                                this.fragmentTracker.removeFragment(n),
                                                n.backtracked = !0,
                                                this.nextLoadPosition = e.startPTS,
                                                this.state = me,
                                                this.fragPrevious = n,
                                                this.demuxer && (this.demuxer.destroy(),
                                                    this.demuxer = null),
                                                void this.tick();
                                        u.b.warn("missing video frame(s) on first frag, appending with gap", n.sn)
                                    }
                                else
                                    n.backtracked = !1;
                            var o = te(a.details, n, e.startPTS, e.endPTS, e.startDTS, e.endDTS)
                                , c = this.hls;
                            c.trigger(d.a.LEVEL_PTS_UPDATED, {
                                details: a.details,
                                level: this.level,
                                drift: o,
                                type: e.type,
                                start: e.startPTS,
                                end: e.endPTS
                            }),
                                [e.data1, e.data2].forEach((function (r) {
                                    r && r.length && t.state === _e && (t.appended = !0,
                                        t.pendingBuffering = !0,
                                        c.trigger(d.a.BUFFER_APPENDING, {
                                            type: e.type,
                                            data: r,
                                            parent: "main",
                                            content: "data"
                                        }))
                                }
                                )),
                                this.tick()
                        }
                    }
                    ,
                    h.onFragParsed = function (e) {
                        var t = this.fragCurrent
                            , r = e.frag;
                        t && "main" === e.id && r.sn === t.sn && r.level === t.level && this.state === _e && (this.stats.tparsed = window.performance.now(),
                            this.state = Re,
                            this._checkAppendedParsed())
                    }
                    ,
                    h.onAudioTrackSwitching = function (e) {
                        var t = this.altAudio
                            , r = !!e.url
                            , i = e.id;
                        if (!r) {
                            if (this.mediaBuffer !== this.media) {
                                u.b.log("switching on main audio, use media.buffered to schedule main fragment loading"),
                                    this.mediaBuffer = this.media;
                                var a = this.fragCurrent;
                                a.loader && (u.b.log("switching to main audio track, cancel main fragment load"),
                                    a.loader.abort()),
                                    this.fragCurrent = null,
                                    this.fragPrevious = null,
                                    this.demuxer && (this.demuxer.destroy(),
                                        this.demuxer = null),
                                    this.state = me
                            }
                            var n = this.hls;
                            t && n.trigger(d.a.BUFFER_FLUSHING, {
                                startOffset: 0,
                                endOffset: Number.POSITIVE_INFINITY,
                                type: "audio"
                            }),
                                n.trigger(d.a.AUDIO_TRACK_SWITCHED, {
                                    id: i
                                })
                        }
                    }
                    ,
                    h.onAudioTrackSwitched = function (e) {
                        var t = e.id
                            , r = !!this.hls.audioTracks[t].url;
                        if (r) {
                            var i = this.videoBuffer;
                            i && this.mediaBuffer !== i && (u.b.log("switching on alternate audio, use video.buffered to schedule main fragment loading"),
                                this.mediaBuffer = i)
                        }
                        this.altAudio = r,
                            this.tick()
                    }
                    ,
                    h.onBufferCreated = function (e) {
                        var t, r, i = e.tracks, a = !1;
                        for (var n in i) {
                            var s = i[n];
                            "main" === s.id ? (r = n,
                                t = s,
                                "video" === n && (this.videoBuffer = i[n].buffer)) : a = !0
                        }
                        a && t ? (u.b.log("alternate track found, use " + r + ".buffered to schedule main fragment loading"),
                            this.mediaBuffer = t.buffer) : this.mediaBuffer = this.media
                    }
                    ,
                    h.onBufferAppended = function (e) {
                        if ("main" === e.parent) {
                            var t = this.state;
                            t !== _e && t !== Re || (this.pendingBuffering = e.pending > 0,
                                this._checkAppendedParsed())
                        }
                    }
                    ,
                    h._checkAppendedParsed = function () {
                        if (!(this.state !== Re || this.appended && this.pendingBuffering)) {
                            var e = this.fragCurrent;
                            if (e) {
                                var t = this.mediaBuffer ? this.mediaBuffer : this.media;
                                u.b.log("main buffered : " + ne.toString(t.buffered)),
                                    this.fragPrevious = e;
                                var r = this.stats;
                                r.tbuffered = window.performance.now(),
                                    this.fragLastKbps = Math.round(8 * r.total / (r.tbuffered - r.tfirst)),
                                    this.hls.trigger(d.a.FRAG_BUFFERED, {
                                        stats: r,
                                        frag: e,
                                        id: "main"
                                    }),
                                    this.state = me
                            }
                            (this.loadedmetadata || this.startPosition <= 0) && this.tick()
                        }
                    }
                    ,
                    h.onError = function (e) {
                        var t = e.frag || this.fragCurrent;
                        if (!t || "main" === t.type) {
                            var r = !!this.media && H.isBuffered(this.media, this.media.currentTime) && H.isBuffered(this.media, this.media.currentTime + .5);
                            switch (e.details) {
                                case o.a.FRAG_LOAD_ERROR:
                                case o.a.FRAG_LOAD_TIMEOUT:
                                case o.a.KEY_LOAD_ERROR:
                                case o.a.KEY_LOAD_TIMEOUT:
                                    if (!e.fatal)
                                        if (this.fragLoadError + 1 <= this.config.fragLoadingMaxRetry) {
                                            var i = Math.min(Math.pow(2, this.fragLoadError) * this.config.fragLoadingRetryDelay, this.config.fragLoadingMaxRetryTimeout);
                                            u.b.warn("mediaController: frag loading failed, retry in " + i + " ms"),
                                                this.retryDate = window.performance.now() + i,
                                                this.loadedmetadata || (this.startFragRequested = !1,
                                                    this.nextLoadPosition = this.startPosition),
                                                this.fragLoadError++,
                                                this.state = Ee
                                        } else
                                            u.b.error("mediaController: " + e.details + " reaches max retry, redispatch as fatal ..."),
                                                e.fatal = !0,
                                                this.state = we;
                                    break;
                                case o.a.LEVEL_LOAD_ERROR:
                                case o.a.LEVEL_LOAD_TIMEOUT:
                                    this.state !== we && (e.fatal ? (this.state = we,
                                        u.b.warn("streamController: " + e.details + ",switch to " + this.state + " state ...")) : e.levelRetry || this.state !== De || (this.state = me));
                                    break;
                                case o.a.BUFFER_FULL_ERROR:
                                    "main" !== e.parent || this.state !== _e && this.state !== Re || (r ? (this._reduceMaxBufferLength(this.config.maxBufferLength),
                                        this.state = me) : (u.b.warn("buffer full error also media.currentTime is not buffered, flush everything"),
                                            this.fragCurrent = null,
                                            this.flushMainBuffer(0, Number.POSITIVE_INFINITY)))
                            }
                        }
                    }
                    ,
                    h._reduceMaxBufferLength = function (e) {
                        var t = this.config;
                        return t.maxMaxBufferLength >= e && (t.maxMaxBufferLength /= 2,
                            u.b.warn("main:reduce max buffer length to " + t.maxMaxBufferLength + "s"),
                            !0)
                    }
                    ,
                    h._checkBuffer = function () {
                        var e = this.media;
                        if (e && 0 !== e.readyState) {
                            var t = (this.mediaBuffer ? this.mediaBuffer : e).buffered;
                            !this.loadedmetadata && t.length ? (this.loadedmetadata = !0,
                                this._seekToStartPos()) : this.immediateSwitch ? this.immediateLevelSwitchEnd() : this.gapController.poll(this.lastCurrentTime, t)
                        }
                    }
                    ,
                    h.onFragLoadEmergencyAborted = function () {
                        this.state = me,
                            this.loadedmetadata || (this.startFragRequested = !1,
                                this.nextLoadPosition = this.startPosition),
                            this.tick()
                    }
                    ,
                    h.onBufferFlushed = function () {
                        var e = this.mediaBuffer ? this.mediaBuffer : this.media;
                        if (e) {
                            var t = this.audioOnly ? p.AUDIO : p.VIDEO;
                            this.fragmentTracker.detectEvictedFragments(t, e.buffered)
                        }
                        this.state = me,
                            this.fragPrevious = null
                    }
                    ,
                    h.onLevelsUpdated = function (e) {
                        this.levels = e.levels
                    }
                    ,
                    h.swapAudioCodec = function () {
                        this.audioCodecSwap = !this.audioCodecSwap
                    }
                    ,
                    h._seekToStartPos = function () {
                        var e = this.media
                            , t = e.currentTime
                            , r = this.startPosition;
                        if (t !== r && r >= 0) {
                            if (e.seeking)
                                return void u.b.log("could not seek to " + r + ", already seeking at " + t);
                            var i = (e.buffered.length ? e.buffered.start(0) : 0) - r;
                            i > 0 && i < this.config.maxBufferHole && (u.b.log("adjusting start position by " + i + " to match buffer start"),
                                r += i,
                                this.startPosition = r),
                                u.b.log("seek to target start position " + r + " from current time " + t + ". ready state " + e.readyState),
                                e.currentTime = r
                        }
                    }
                    ,
                    h._getAudioCodec = function (e) {
                        var t = this.config.defaultAudioCodec || e.audioCodec;
                        return this.audioCodecSwap && (u.b.log("swapping playlist audio codec"),
                            t && (t = -1 !== t.indexOf("mp4a.40.5") ? "mp4a.40.2" : "mp4a.40.5")),
                            t
                    }
                    ,
                    a = i,
                    (s = [{
                        key: "state",
                        set: function (e) {
                            if (this.state !== e) {
                                var t = this.state;
                                this._state = e,
                                    u.b.log("main stream-controller: " + t + "->" + e),
                                    this.hls.trigger(d.a.STREAM_STATE_TRANSITION, {
                                        previousState: t,
                                        nextState: e
                                    })
                            }
                        },
                        get: function () {
                            return this._state
                        }
                    }, {
                        key: "currentLevel",
                        get: function () {
                            var e = this.media;
                            if (e) {
                                var t = this.getBufferedFrag(e.currentTime);
                                if (t)
                                    return t.level
                            }
                            return -1
                        }
                    }, {
                        key: "nextBufferedFrag",
                        get: function () {
                            var e = this.media;
                            return e ? this.followingBufferedFrag(this.getBufferedFrag(e.currentTime)) : null
                        }
                    }, {
                        key: "nextLevel",
                        get: function () {
                            var e = this.nextBufferedFrag;
                            return e ? e.level : -1
                        }
                    }, {
                        key: "liveSyncPosition",
                        get: function () {
                            return this._liveSyncPosition
                        },
                        set: function (e) {
                            this._liveSyncPosition = e
                        }
                    }]) && Ce(a.prototype, s),
                    c && Ce(a, c),
                    i
            }(Oe);
            function xe(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i)
                }
            }
            var Me = function (e) {
                var t, r;
                function i(t) {
                    var r;
                    return (r = e.call(this, t, d.a.MANIFEST_LOADED, d.a.LEVEL_LOADED, d.a.AUDIO_TRACK_SWITCHED, d.a.FRAG_LOADED, d.a.ERROR) || this).canload = !1,
                        r.currentLevelIndex = null,
                        r.manualLevelIndex = -1,
                        r.timer = null,
                        Ie = /chrome|firefox/.test(navigator.userAgent.toLowerCase()),
                        r
                }
                r = e,
                    (t = i).prototype = Object.create(r.prototype),
                    t.prototype.constructor = t,
                    t.__proto__ = r;
                var a, n, s, l = i.prototype;
                return l.onHandlerDestroying = function () {
                    this.clearTimer(),
                        this.manualLevelIndex = -1
                }
                    ,
                    l.clearTimer = function () {
                        null !== this.timer && (clearTimeout(this.timer),
                            this.timer = null)
                    }
                    ,
                    l.startLoad = function () {
                        var e = this._levels;
                        this.canload = !0,
                            this.levelRetryCount = 0,
                            e && e.forEach((function (e) {
                                e.loadError = 0;
                                var t = e.details;
                                t && t.live && (e.details = void 0)
                            }
                            )),
                            null !== this.timer && this.loadLevel()
                    }
                    ,
                    l.stopLoad = function () {
                        this.canload = !1
                    }
                    ,
                    l.onManifestLoaded = function (e) {
                        var t, r = [], i = [], a = {}, n = null, s = !1, l = !1;
                        if (e.levels.forEach((function (e) {
                            var t = e.attrs;
                            e.loadError = 0,
                                e.fragmentError = !1,
                                s = s || !!e.videoCodec,
                                l = l || !!e.audioCodec,
                                Ie && e.audioCodec && -1 !== e.audioCodec.indexOf("mp4a.40.34") && (e.audioCodec = void 0),
                                (n = a[e.bitrate]) ? n.url.push(e.url) : (e.url = [e.url],
                                    e.urlId = 0,
                                    a[e.bitrate] = e,
                                    r.push(e)),
                                t && (t.AUDIO && Z(n || e, "audio", t.AUDIO),
                                    t.SUBTITLES && Z(n || e, "text", t.SUBTITLES))
                        }
                        )),
                            s && l && (r = r.filter((function (e) {
                                return !!e.videoCodec
                            }
                            ))),
                            r = r.filter((function (e) {
                                var t = e.audioCodec
                                    , r = e.videoCodec;
                                return (!t || A(t, "audio")) && (!r || A(r, "video"))
                            }
                            )),
                            e.audioTracks && (i = e.audioTracks.filter((function (e) {
                                return !e.audioCodec || A(e.audioCodec, "audio")
                            }
                            ))).forEach((function (e, t) {
                                e.id = t
                            }
                            )),
                            r.length > 0) {
                            t = r[0].bitrate,
                                r.sort((function (e, t) {
                                    return e.bitrate - t.bitrate
                                }
                                )),
                                this._levels = r;
                            for (var c = 0; c < r.length; c++)
                                if (r[c].bitrate === t) {
                                    this._firstLevel = c,
                                        u.b.log("manifest loaded," + r.length + " level(s) found, first bitrate:" + t);
                                    break
                                }
                            var h = l && !s;
                            this.hls.trigger(d.a.MANIFEST_PARSED, {
                                levels: r,
                                audioTracks: i,
                                firstLevel: this._firstLevel,
                                stats: e.stats,
                                audio: l,
                                video: s,
                                altAudio: !h && i.some((function (e) {
                                    return !!e.url
                                }
                                ))
                            })
                        } else
                            this.hls.trigger(d.a.ERROR, {
                                type: o.b.MEDIA_ERROR,
                                details: o.a.MANIFEST_INCOMPATIBLE_CODECS_ERROR,
                                fatal: !0,
                                url: this.hls.url,
                                reason: "no level with compatible codecs found in manifest"
                            })
                    }
                    ,
                    l.setLevelInternal = function (e) {
                        var t = this._levels
                            , r = this.hls;
                        if (e >= 0 && e < t.length) {
                            if (this.clearTimer(),
                                this.currentLevelIndex !== e) {
                                u.b.log("switching to level " + e),
                                    this.currentLevelIndex = e;
                                var i = t[e];
                                i.level = e,
                                    r.trigger(d.a.LEVEL_SWITCHING, i)
                            }
                            var a = t[e]
                                , n = a.details;
                            if (!n || n.live) {
                                var s = a.urlId;
                                r.trigger(d.a.LEVEL_LOADING, {
                                    url: a.url[s],
                                    level: e,
                                    id: s
                                })
                            }
                        } else
                            r.trigger(d.a.ERROR, {
                                type: o.b.OTHER_ERROR,
                                details: o.a.LEVEL_SWITCH_ERROR,
                                level: e,
                                fatal: !1,
                                reason: "invalid level idx"
                            })
                    }
                    ,
                    l.onError = function (e) {
                        if (e.fatal)
                            e.type === o.b.NETWORK_ERROR && this.clearTimer();
                        else {
                            var t, r = !1, i = !1;
                            switch (e.details) {
                                case o.a.FRAG_LOAD_ERROR:
                                case o.a.FRAG_LOAD_TIMEOUT:
                                case o.a.KEY_LOAD_ERROR:
                                case o.a.KEY_LOAD_TIMEOUT:
                                    t = e.frag.level,
                                        i = !0;
                                    break;
                                case o.a.LEVEL_LOAD_ERROR:
                                case o.a.LEVEL_LOAD_TIMEOUT:
                                    t = e.context.level,
                                        r = !0;
                                    break;
                                case o.a.REMUX_ALLOC_ERROR:
                                    t = e.level,
                                        r = !0
                            }
                            void 0 !== t && this.recoverLevel(e, t, r, i)
                        }
                    }
                    ,
                    l.recoverLevel = function (e, t, r, i) {
                        var a, n, s, o = this, l = this.hls.config, d = e.details, c = this._levels[t];
                        if (c.loadError++,
                            c.fragmentError = i,
                            r) {
                            if (!(this.levelRetryCount + 1 <= l.levelLoadingMaxRetry))
                                return u.b.error("level controller, cannot recover from " + d + " error"),
                                    this.currentLevelIndex = null,
                                    this.clearTimer(),
                                    void (e.fatal = !0);
                            n = Math.min(Math.pow(2, this.levelRetryCount) * l.levelLoadingRetryDelay, l.levelLoadingMaxRetryTimeout),
                                this.timer = setTimeout((function () {
                                    return o.loadLevel()
                                }
                                ), n),
                                e.levelRetry = !0,
                                this.levelRetryCount++,
                                u.b.warn("level controller, " + d + ", retry in " + n + " ms, current retry count is " + this.levelRetryCount)
                        }
                        (r || i) && ((a = c.url.length) > 1 && c.loadError < a ? (c.urlId = (c.urlId + 1) % a,
                            c.details = void 0,
                            u.b.warn("level controller, " + d + " for level " + t + ": switching to redundant URL-id " + c.urlId)) : -1 === this.manualLevelIndex ? (s = 0 === t ? this._levels.length - 1 : t - 1,
                                u.b.warn("level controller, " + d + ": switch to " + s),
                                this.hls.nextAutoLevel = this.currentLevelIndex = s) : i && (u.b.warn("level controller, " + d + ": reload a fragment"),
                                    this.currentLevelIndex = null))
                    }
                    ,
                    l.onFragLoaded = function (e) {
                        var t = e.frag;
                        if (void 0 !== t && "main" === t.type) {
                            var r = this._levels[t.level];
                            void 0 !== r && (r.fragmentError = !1,
                                r.loadError = 0,
                                this.levelRetryCount = 0)
                        }
                    }
                    ,
                    l.onLevelLoaded = function (e) {
                        var t = this
                            , r = e.level
                            , i = e.details;
                        if (r === this.currentLevelIndex) {
                            var a = this._levels[r];
                            if (a.fragmentError || (a.loadError = 0,
                                this.levelRetryCount = 0),
                                i.live) {
                                var n = ae(a.details, i, e.stats.trequest);
                                u.b.log("live playlist, reload in " + Math.round(n) + " ms"),
                                    this.timer = setTimeout((function () {
                                        return t.loadLevel()
                                    }
                                    ), n)
                            } else
                                this.clearTimer()
                        }
                    }
                    ,
                    l.onAudioTrackSwitched = function (e) {
                        var t = this.hls.audioTracks[e.id].groupId
                            , r = this.hls.levels[this.currentLevelIndex];
                        if (r && r.audioGroupIds) {
                            for (var i = -1, a = 0; a < r.audioGroupIds.length; a++)
                                if (r.audioGroupIds[a] === t) {
                                    i = a;
                                    break
                                }
                            i !== r.urlId && (r.urlId = i,
                                this.startLoad())
                        }
                    }
                    ,
                    l.loadLevel = function () {
                        if (u.b.debug("call to loadLevel"),
                            null !== this.currentLevelIndex && this.canload) {
                            var e = this._levels[this.currentLevelIndex];
                            if ("object" == typeof e && e.url.length > 0) {
                                var t = this.currentLevelIndex
                                    , r = e.urlId
                                    , i = e.url[r];
                                u.b.log("Attempt loading level index " + t + " with URL-id " + r),
                                    this.hls.trigger(d.a.LEVEL_LOADING, {
                                        url: i,
                                        level: t,
                                        id: r
                                    })
                            }
                        }
                    }
                    ,
                    l.removeLevel = function (e, t) {
                        var r = this.levels.filter((function (r, i) {
                            return i !== e || r.url.length > 1 && void 0 !== t && (r.url = r.url.filter((function (e, r) {
                                return r !== t
                            }
                            )),
                                r.urlId = 0,
                                !0)
                        }
                        )).map((function (e, t) {
                            var r = e.details;
                            return r && r.fragments && r.fragments.forEach((function (e) {
                                e.level = t
                            }
                            )),
                                e
                        }
                        ));
                        this._levels = r,
                            this.hls.trigger(d.a.LEVELS_UPDATED, {
                                levels: r
                            })
                    }
                    ,
                    a = i,
                    (n = [{
                        key: "levels",
                        get: function () {
                            return this._levels
                        }
                    }, {
                        key: "level",
                        get: function () {
                            return this.currentLevelIndex
                        },
                        set: function (e) {
                            var t = this._levels;
                            t && (e = Math.min(e, t.length - 1),
                                this.currentLevelIndex === e && t[e].details || this.setLevelInternal(e))
                        }
                    }, {
                        key: "manualLevel",
                        get: function () {
                            return this.manualLevelIndex
                        },
                        set: function (e) {
                            this.manualLevelIndex = e,
                                void 0 === this._startLevel && (this._startLevel = e),
                                -1 !== e && (this.level = e)
                        }
                    }, {
                        key: "firstLevel",
                        get: function () {
                            return this._firstLevel
                        },
                        set: function (e) {
                            this._firstLevel = e
                        }
                    }, {
                        key: "startLevel",
                        get: function () {
                            if (void 0 === this._startLevel) {
                                var e = this.hls.config.startLevel;
                                return void 0 !== e ? e : this._firstLevel
                            }
                            return this._startLevel
                        },
                        set: function (e) {
                            this._startLevel = e
                        }
                    }, {
                        key: "nextLoadLevel",
                        get: function () {
                            return -1 !== this.manualLevelIndex ? this.manualLevelIndex : this.hls.nextAutoLevel
                        },
                        set: function (e) {
                            this.level = e,
                                -1 === this.manualLevelIndex && (this.hls.nextAutoLevel = e)
                        }
                    }]) && xe(a.prototype, n),
                    s && xe(a, s),
                    i
            }(h)
                , Fe = r(4);
            function Ue(e, t) {
                var r;
                try {
                    r = new Event("addtrack")
                } catch (e) {
                    (r = document.createEvent("Event")).initEvent("addtrack", !1, !1)
                }
                r.track = e,
                    t.dispatchEvent(r)
            }
            function Ne(e) {
                if (null == e ? void 0 : e.cues)
                    for (; e.cues.length > 0;)
                        e.removeCue(e.cues[0])
            }
            var Be = function (e) {
                var t, r;
                function i(t) {
                    var r;
                    return (r = e.call(this, t, d.a.MEDIA_ATTACHED, d.a.MEDIA_DETACHING, d.a.FRAG_PARSING_METADATA, d.a.LIVE_BACK_BUFFER_REACHED) || this).id3Track = void 0,
                        r.media = void 0,
                        r
                }
                r = e,
                    (t = i).prototype = Object.create(r.prototype),
                    t.prototype.constructor = t,
                    t.__proto__ = r;
                var a = i.prototype;
                return a.destroy = function () {
                    h.prototype.destroy.call(this)
                }
                    ,
                    a.onMediaAttached = function (e) {
                        this.media = e.media,
                            this.media
                    }
                    ,
                    a.onMediaDetaching = function () {
                        Ne(this.id3Track),
                            this.id3Track = void 0,
                            this.media = void 0
                    }
                    ,
                    a.getID3Track = function (e) {
                        for (var t = 0; t < e.length; t++) {
                            var r = e[t];
                            if ("metadata" === r.kind && "id3" === r.label)
                                return Ue(r, this.media),
                                    r
                        }
                        return this.media.addTextTrack("metadata", "id3")
                    }
                    ,
                    a.onFragParsingMetadata = function (e) {
                        var t = e.frag
                            , r = e.samples;
                        this.id3Track || (this.id3Track = this.getID3Track(this.media.textTracks),
                            this.id3Track.mode = "hidden");
                        for (var i = window.WebKitDataCue || window.VTTCue || window.TextTrackCue, a = 0; a < r.length; a++) {
                            var n = Fe.a.getID3Frames(r[a].data);
                            if (n) {
                                var s = Math.max(r[a].pts, 0)
                                    , o = a < r.length - 1 ? r[a + 1].pts : t.endPTS;
                                o || (o = t.start + t.duration),
                                    o - s <= 0 && (o = s + .25);
                                for (var l = 0; l < n.length; l++) {
                                    var d = n[l];
                                    if (!Fe.a.isTimeStampFrame(d)) {
                                        var u = new i(s, o, "");
                                        u.value = d,
                                            this.id3Track.addCue(u)
                                    }
                                }
                            }
                        }
                    }
                    ,
                    a.onLiveBackBufferReached = function (e) {
                        var t = e.bufferEnd
                            , r = this.id3Track;
                        if (r && r.cues && r.cues.length) {
                            var i = function (e, t) {
                                if (t < e[0].endTime)
                                    return e[0];
                                if (t > e[e.length - 1].endTime)
                                    return e[e.length - 1];
                                for (var r = 0, i = e.length - 1; r <= i;) {
                                    var a = Math.floor((i + r) / 2);
                                    if (t < e[a].endTime)
                                        i = a - 1;
                                    else {
                                        if (!(t > e[a].endTime))
                                            return e[a];
                                        r = a + 1
                                    }
                                }
                                return e[r].endTime - t < t - e[i].endTime ? e[r] : e[i]
                            }(r.cues, t);
                            if (i)
                                for (; r.cues[0] !== i;)
                                    r.removeCue(r.cues[0])
                        }
                    }
                    ,
                    i
            }(h);
            var Ge = function () {
                function e(e) {
                    this.alpha_ = void 0,
                        this.estimate_ = void 0,
                        this.totalWeight_ = void 0,
                        this.alpha_ = e ? Math.exp(Math.log(.5) / e) : 0,
                        this.estimate_ = 0,
                        this.totalWeight_ = 0
                }
                var t = e.prototype;
                return t.sample = function (e, t) {
                    var r = Math.pow(this.alpha_, e);
                    this.estimate_ = t * (1 - r) + r * this.estimate_,
                        this.totalWeight_ += e
                }
                    ,
                    t.getTotalWeight = function () {
                        return this.totalWeight_
                    }
                    ,
                    t.getEstimate = function () {
                        if (this.alpha_) {
                            var e = 1 - Math.pow(this.alpha_, this.totalWeight_);
                            return this.estimate_ / e
                        }
                        return this.estimate_
                    }
                    ,
                    e
            }()
                , Ke = function () {
                    function e(e, t, r, i) {
                        this.hls = void 0,
                            this.defaultEstimate_ = void 0,
                            this.minWeight_ = void 0,
                            this.minDelayMs_ = void 0,
                            this.slow_ = void 0,
                            this.fast_ = void 0,
                            this.hls = e,
                            this.defaultEstimate_ = i,
                            this.minWeight_ = .001,
                            this.minDelayMs_ = 50,
                            this.slow_ = new Ge(t),
                            this.fast_ = new Ge(r)
                    }
                    var t = e.prototype;
                    return t.sample = function (e, t) {
                        var r = (e = Math.max(e, this.minDelayMs_)) / 1e3
                            , i = 8 * t / r;
                        this.fast_.sample(r, i),
                            this.slow_.sample(r, i)
                    }
                        ,
                        t.canEstimate = function () {
                            var e = this.fast_;
                            return e && e.getTotalWeight() >= this.minWeight_
                        }
                        ,
                        t.getEstimate = function () {
                            return this.canEstimate() ? Math.min(this.fast_.getEstimate(), this.slow_.getEstimate()) : this.defaultEstimate_
                        }
                        ,
                        t.destroy = function () { }
                        ,
                        e
                }();
            function je(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i)
                }
            }
            var He = window.performance
                , Ve = function (e) {
                    var t, r;
                    function i(t) {
                        var r;
                        return (r = e.call(this, t, d.a.FRAG_LOADING, d.a.FRAG_LOADED, d.a.FRAG_BUFFERED, d.a.ERROR) || this).lastLoadedFragLevel = 0,
                            r._nextAutoLevel = -1,
                            r.hls = t,
                            r.timer = null,
                            r._bwEstimator = null,
                            r.onCheck = r._abandonRulesCheck.bind(function (e) {
                                if (void 0 === e)
                                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                return e
                            }(r)),
                            r
                    }
                    r = e,
                        (t = i).prototype = Object.create(r.prototype),
                        t.prototype.constructor = t,
                        t.__proto__ = r;
                    var a, n, s, c = i.prototype;
                    return c.destroy = function () {
                        this.clearTimer(),
                            h.prototype.destroy.call(this)
                    }
                        ,
                        c.onFragLoading = function (e) {
                            var t = e.frag;
                            if ("main" === t.type && (this.timer || (this.fragCurrent = t,
                                this.timer = setInterval(this.onCheck, 100)),
                                !this._bwEstimator)) {
                                var r, i, a = this.hls, n = a.config, s = t.level;
                                a.levels[s].details.live ? (r = n.abrEwmaFastLive,
                                    i = n.abrEwmaSlowLive) : (r = n.abrEwmaFastVoD,
                                        i = n.abrEwmaSlowVoD),
                                    this._bwEstimator = new Ke(a, i, r, n.abrEwmaDefaultEstimate)
                            }
                        }
                        ,
                        c._abandonRulesCheck = function () {
                            var e = this.hls
                                , t = e.media
                                , r = this.fragCurrent;
                            if (r) {
                                var i = r.loader;
                                if (!i || i.stats && i.stats.aborted)
                                    return u.b.warn("frag loader destroy or aborted, disarm abandonRules"),
                                        this.clearTimer(),
                                        void (this._nextAutoLevel = -1);
                                var a = i.stats;
                                if (t && a && (!t.paused && 0 !== t.playbackRate || !t.readyState) && r.autoLevel && r.level) {
                                    var n = He.now() - a.trequest
                                        , s = Math.abs(t.playbackRate);
                                    if (n > 500 * r.duration / s) {
                                        var o = e.levels
                                            , l = Math.max(1, a.bw ? a.bw / 8 : 1e3 * a.loaded / n)
                                            , c = o[r.level];
                                        if (!c)
                                            return;
                                        var h = c.realBitrate ? Math.max(c.realBitrate, c.bitrate) : c.bitrate
                                            , f = a.total ? a.total : Math.max(a.loaded, Math.round(r.duration * h / 8))
                                            , g = t.currentTime
                                            , p = (f - a.loaded) / l
                                            , v = (H.bufferInfo(t, g, e.config.maxBufferHole).end - g) / s;
                                        if (v < 2 * r.duration / s && p > v) {
                                            var m, y = e.minAutoLevel;
                                            for (m = r.level - 1; m > y; m--) {
                                                var b = o[m].realBitrate ? Math.max(o[m].realBitrate, o[m].bitrate) : o[m].bitrate;
                                                if (r.duration * b / (6.4 * l) < v)
                                                    break
                                            }
                                            void 0 < p && (u.b.warn("loading too slow, abort fragment loading and switch to level " + m + ":fragLoadedDelay[" + m + "]<fragLoadedDelay[" + (r.level - 1) + "];bufferStarvationDelay:" + (void 0).toFixed(1) + "<" + p.toFixed(1) + ":" + v.toFixed(1)),
                                                e.nextLoadLevel = m,
                                                this._bwEstimator.sample(n, a.loaded),
                                                i.abort(),
                                                this.clearTimer(),
                                                e.trigger(d.a.FRAG_LOAD_EMERGENCY_ABORTED, {
                                                    frag: r,
                                                    stats: a
                                                }))
                                        }
                                    }
                                }
                            }
                        }
                        ,
                        c.onFragLoaded = function (e) {
                            var t = e.frag;
                            if ("main" === t.type && Object(l.a)(t.sn)) {
                                if (this.clearTimer(),
                                    this.lastLoadedFragLevel = t.level,
                                    this._nextAutoLevel = -1,
                                    this.hls.config.abrMaxWithRealBitrate) {
                                    var r = this.hls.levels[t.level]
                                        , i = (r.loaded ? r.loaded.bytes : 0) + e.stats.loaded
                                        , a = (r.loaded ? r.loaded.duration : 0) + e.frag.duration;
                                    r.loaded = {
                                        bytes: i,
                                        duration: a
                                    },
                                        r.realBitrate = Math.round(8 * i / a)
                                }
                                if (e.frag.bitrateTest) {
                                    var n = e.stats;
                                    n.tparsed = n.tbuffered = n.tload,
                                        this.onFragBuffered(e)
                                }
                            }
                        }
                        ,
                        c.onFragBuffered = function (e) {
                            var t = e.stats
                                , r = e.frag;
                            if (!0 !== t.aborted && "main" === r.type && Object(l.a)(r.sn) && (!r.bitrateTest || t.tload === t.tbuffered)) {
                                var i = t.tparsed - t.trequest;
                                u.b.log("latency/loading/parsing/append/kbps:" + Math.round(t.tfirst - t.trequest) + "/" + Math.round(t.tload - t.tfirst) + "/" + Math.round(t.tparsed - t.tload) + "/" + Math.round(t.tbuffered - t.tparsed) + "/" + Math.round(8 * t.loaded / (t.tbuffered - t.trequest))),
                                    this._bwEstimator.sample(i, t.loaded),
                                    t.bwEstimate = this._bwEstimator.getEstimate(),
                                    r.bitrateTest ? this.bitrateTestDelay = i / 1e3 : this.bitrateTestDelay = 0
                            }
                        }
                        ,
                        c.onError = function (e) {
                            switch (e.details) {
                                case o.a.FRAG_LOAD_ERROR:
                                case o.a.FRAG_LOAD_TIMEOUT:
                                    this.clearTimer()
                            }
                        }
                        ,
                        c.clearTimer = function () {
                            clearInterval(this.timer),
                                this.timer = null
                        }
                        ,
                        c._findBestLevel = function (e, t, r, i, a, n, s, o, l) {
                            for (var d = a; d >= i; d--) {
                                var c = l[d];
                                if (c) {
                                    var h = c.details
                                        , f = h ? h.totalduration / h.fragments.length : t
                                        , g = !!h && h.live
                                        , p = void 0;
                                    p = d <= e ? s * r : o * r;
                                    var v = l[d].realBitrate ? Math.max(l[d].realBitrate, l[d].bitrate) : l[d].bitrate
                                        , m = v * f / p;
                                    if (u.b.trace("level/adjustedbw/bitrate/avgDuration/maxFetchDuration/fetchDuration: " + d + "/" + Math.round(p) + "/" + v + "/" + f + "/" + n + "/" + m),
                                        p > v && (!m || g && !this.bitrateTestDelay || m < n))
                                        return d
                                }
                            }
                            return -1
                        }
                        ,
                        a = i,
                        (n = [{
                            key: "nextAutoLevel",
                            get: function () {
                                var e = this._nextAutoLevel
                                    , t = this._bwEstimator;
                                if (!(-1 === e || t && t.canEstimate()))
                                    return e;
                                var r = this._nextABRAutoLevel;
                                return -1 !== e && (r = Math.min(e, r)),
                                    r
                            },
                            set: function (e) {
                                this._nextAutoLevel = e
                            }
                        }, {
                            key: "_nextABRAutoLevel",
                            get: function () {
                                var e = this.hls
                                    , t = e.maxAutoLevel
                                    , r = e.levels
                                    , i = e.config
                                    , a = e.minAutoLevel
                                    , n = e.media
                                    , s = this.lastLoadedFragLevel
                                    , o = this.fragCurrent ? this.fragCurrent.duration : 0
                                    , l = n ? n.currentTime : 0
                                    , d = n && 0 !== n.playbackRate ? Math.abs(n.playbackRate) : 1
                                    , c = this._bwEstimator ? this._bwEstimator.getEstimate() : i.abrEwmaDefaultEstimate
                                    , h = (H.bufferInfo(n, l, i.maxBufferHole).end - l) / d
                                    , f = this._findBestLevel(s, o, c, a, t, h, i.abrBandWidthFactor, i.abrBandWidthUpFactor, r);
                                if (f >= 0)
                                    return f;
                                u.b.trace("rebuffering expected to happen, lets try to find a quality level minimizing the rebuffering");
                                var g = o ? Math.min(o, i.maxStarvationDelay) : i.maxStarvationDelay
                                    , p = i.abrBandWidthFactor
                                    , v = i.abrBandWidthUpFactor;
                                if (0 === h) {
                                    var m = this.bitrateTestDelay;
                                    m && (g = (o ? Math.min(o, i.maxLoadingDelay) : i.maxLoadingDelay) - m,
                                        u.b.trace("bitrate test took " + Math.round(1e3 * m) + "ms, set first fragment max fetchDuration to " + Math.round(1e3 * g) + " ms"),
                                        p = v = 1)
                                }
                                return f = this._findBestLevel(s, o, c, a, t, h + g, p, v, r),
                                    Math.max(f, 0)
                            }
                        }]) && je(a.prototype, n),
                        s && je(a, s),
                        i
                }(h);
            var Ye = q()
                , We = function (e) {
                    var t, r;
                    function i(t) {
                        var r;
                        return (r = e.call(this, t, d.a.MEDIA_ATTACHING, d.a.MEDIA_DETACHING, d.a.MANIFEST_PARSED, d.a.BUFFER_RESET, d.a.BUFFER_APPENDING, d.a.BUFFER_CODECS, d.a.BUFFER_EOS, d.a.BUFFER_FLUSHING, d.a.LEVEL_PTS_UPDATED, d.a.LEVEL_UPDATED) || this)._msDuration = null,
                            r._levelDuration = null,
                            r._levelTargetDuration = 10,
                            r._live = null,
                            r._objectUrl = null,
                            r._needsFlush = !1,
                            r._needsEos = !1,
                            r.config = void 0,
                            r.audioTimestampOffset = void 0,
                            r.bufferCodecEventsExpected = 0,
                            r._bufferCodecEventsTotal = 0,
                            r.media = null,
                            r.mediaSource = null,
                            r.segments = [],
                            r.parent = void 0,
                            r.appending = !1,
                            r.appended = 0,
                            r.appendError = 0,
                            r.flushBufferCounter = 0,
                            r.tracks = {},
                            r.pendingTracks = {},
                            r.sourceBuffer = {},
                            r.flushRange = [],
                            r._onMediaSourceOpen = function () {
                                u.b.log("media source opened"),
                                    r.hls.trigger(d.a.MEDIA_ATTACHED, {
                                        media: r.media
                                    });
                                var e = r.mediaSource;
                                e && e.removeEventListener("sourceopen", r._onMediaSourceOpen),
                                    r.checkPendingTracks()
                            }
                            ,
                            r._onMediaSourceClose = function () {
                                u.b.log("media source closed")
                            }
                            ,
                            r._onMediaSourceEnded = function () {
                                u.b.log("media source ended")
                            }
                            ,
                            r._onSBUpdateEnd = function () {
                                if (r.audioTimestampOffset && r.sourceBuffer.audio) {
                                    var e = r.sourceBuffer.audio;
                                    u.b.warn("change mpeg audio timestamp offset from " + e.timestampOffset + " to " + r.audioTimestampOffset),
                                        e.timestampOffset = r.audioTimestampOffset,
                                        delete r.audioTimestampOffset
                                }
                                r._needsFlush && r.doFlush(),
                                    r._needsEos && r.checkEos(),
                                    r.appending = !1;
                                var t = r.parent
                                    , i = r.segments.reduce((function (e, r) {
                                        return r.parent === t ? e + 1 : e
                                    }
                                    ), 0)
                                    , a = {}
                                    , n = r.sourceBuffer;
                                for (var s in n) {
                                    var o = n[s];
                                    if (!o)
                                        throw Error("handling source buffer update end error: source buffer for " + s + " uninitilized and unable to update buffered TimeRanges.");
                                    a[s] = o.buffered
                                }
                                r.hls.trigger(d.a.BUFFER_APPENDED, {
                                    parent: t,
                                    pending: i,
                                    timeRanges: a
                                }),
                                    r._needsFlush || r.doAppending(),
                                    r.updateMediaElementDuration(),
                                    0 === i && r.flushLiveBackBuffer()
                            }
                            ,
                            r._onSBUpdateError = function (e) {
                                u.b.error("sourceBuffer error:", e),
                                    r.hls.trigger(d.a.ERROR, {
                                        type: o.b.MEDIA_ERROR,
                                        details: o.a.BUFFER_APPENDING_ERROR,
                                        fatal: !1
                                    })
                            }
                            ,
                            r.config = t.config,
                            r
                    }
                    r = e,
                        (t = i).prototype = Object.create(r.prototype),
                        t.prototype.constructor = t,
                        t.__proto__ = r;
                    var a = i.prototype;
                    return a.destroy = function () {
                        h.prototype.destroy.call(this)
                    }
                        ,
                        a.onLevelPtsUpdated = function (e) {
                            var t = e.type
                                , r = this.tracks.audio;
                            if ("audio" === t && r && "audio/mpeg" === r.container) {
                                var i = this.sourceBuffer.audio;
                                if (!i)
                                    throw Error("Level PTS Updated and source buffer for audio uninitalized");
                                if (Math.abs(i.timestampOffset - e.start) > .1) {
                                    var a = i.updating;
                                    try {
                                        i.abort()
                                    } catch (e) {
                                        u.b.warn("can not abort audio buffer: " + e)
                                    }
                                    a ? this.audioTimestampOffset = e.start : (u.b.warn("change mpeg audio timestamp offset from " + i.timestampOffset + " to " + e.start),
                                        i.timestampOffset = e.start)
                                }
                            }
                        }
                        ,
                        a.onManifestParsed = function (e) {
                            var t = 2;
                            (e.audio && !e.video || !e.altAudio) && (t = 1),
                                this.bufferCodecEventsExpected = this._bufferCodecEventsTotal = t,
                                u.b.log(this.bufferCodecEventsExpected + " bufferCodec event(s) expected")
                        }
                        ,
                        a.onMediaAttaching = function (e) {
                            var t = this.media = e.media;
                            if (t && Ye) {
                                var r = this.mediaSource = new Ye;
                                r.addEventListener("sourceopen", this._onMediaSourceOpen),
                                    r.addEventListener("sourceended", this._onMediaSourceEnded),
                                    r.addEventListener("sourceclose", this._onMediaSourceClose),
                                    t.src = window.URL.createObjectURL(r),
                                    this._objectUrl = t.src
                            }
                        }
                        ,
                        a.onMediaDetaching = function () {
                            u.b.log("media source detaching");
                            var e = this.mediaSource;
                            if (e) {
                                if ("open" === e.readyState)
                                    try {
                                        e.endOfStream()
                                    } catch (e) {
                                        u.b.warn("onMediaDetaching:" + e.message + " while calling endOfStream")
                                    }
                                e.removeEventListener("sourceopen", this._onMediaSourceOpen),
                                    e.removeEventListener("sourceended", this._onMediaSourceEnded),
                                    e.removeEventListener("sourceclose", this._onMediaSourceClose),
                                    this.media && (this._objectUrl && window.URL.revokeObjectURL(this._objectUrl),
                                        this.media.src === this._objectUrl ? (this.media.removeAttribute("src"),
                                            this.media.load()) : u.b.warn("media.src was changed by a third party - skip cleanup")),
                                    this.mediaSource = null,
                                    this.media = null,
                                    this._objectUrl = null,
                                    this.bufferCodecEventsExpected = this._bufferCodecEventsTotal,
                                    this.pendingTracks = {},
                                    this.tracks = {},
                                    this.sourceBuffer = {},
                                    this.flushRange = [],
                                    this.segments = [],
                                    this.appended = 0
                            }
                            this.hls.trigger(d.a.MEDIA_DETACHED)
                        }
                        ,
                        a.checkPendingTracks = function () {
                            var e = this.bufferCodecEventsExpected
                                , t = this.pendingTracks
                                , r = Object.keys(t).length;
                            (r && !e || 2 === r) && (this.createSourceBuffers(t),
                                this.pendingTracks = {},
                                this.doAppending())
                        }
                        ,
                        a.onBufferReset = function () {
                            var e = this.sourceBuffer;
                            for (var t in e) {
                                var r = e[t];
                                try {
                                    r && (this.mediaSource && this.mediaSource.removeSourceBuffer(r),
                                        r.removeEventListener("updateend", this._onSBUpdateEnd),
                                        r.removeEventListener("error", this._onSBUpdateError))
                                } catch (e) { }
                            }
                            this.sourceBuffer = {},
                                this.flushRange = [],
                                this.segments = [],
                                this.appended = 0
                        }
                        ,
                        a.onBufferCodecs = function (e) {
                            var t = this;
                            Object.keys(this.sourceBuffer).length || (Object.keys(e).forEach((function (r) {
                                t.pendingTracks[r] = e[r]
                            }
                            )),
                                this.bufferCodecEventsExpected = Math.max(this.bufferCodecEventsExpected - 1, 0),
                                this.mediaSource && "open" === this.mediaSource.readyState && this.checkPendingTracks())
                        }
                        ,
                        a.createSourceBuffers = function (e) {
                            var t = this.sourceBuffer
                                , r = this.mediaSource;
                            if (!r)
                                throw Error("createSourceBuffers called when mediaSource was null");
                            for (var i in e)
                                if (!t[i]) {
                                    var a = e[i];
                                    if (!a)
                                        throw Error("source buffer exists for track " + i + ", however track does not");
                                    var n = a.levelCodec || a.codec
                                        , s = a.container + ";codecs=" + n;
                                    u.b.log("creating sourceBuffer(" + s + ")");
                                    try {
                                        var l = t[i] = r.addSourceBuffer(s);
                                        l.addEventListener("updateend", this._onSBUpdateEnd),
                                            l.addEventListener("error", this._onSBUpdateError),
                                            this.tracks[i] = {
                                                buffer: l,
                                                codec: n,
                                                id: a.id,
                                                container: a.container,
                                                levelCodec: a.levelCodec
                                            }
                                    } catch (e) {
                                        u.b.error("error while trying to add sourceBuffer:" + e.message),
                                            this.hls.trigger(d.a.ERROR, {
                                                type: o.b.MEDIA_ERROR,
                                                details: o.a.BUFFER_ADD_CODEC_ERROR,
                                                fatal: !1,
                                                err: e,
                                                mimeType: s
                                            })
                                    }
                                }
                            this.hls.trigger(d.a.BUFFER_CREATED, {
                                tracks: this.tracks
                            })
                        }
                        ,
                        a.onBufferAppending = function (e) {
                            this._needsFlush || (this.segments ? this.segments.push(e) : this.segments = [e],
                                this.doAppending())
                        }
                        ,
                        a.onBufferEos = function (e) {
                            for (var t in this.sourceBuffer)
                                if (!e.type || e.type === t) {
                                    var r = this.sourceBuffer[t];
                                    r && !r.ended && (r.ended = !0,
                                        u.b.log(t + " sourceBuffer now EOS"))
                                }
                            this.checkEos()
                        }
                        ,
                        a.checkEos = function () {
                            var e = this.sourceBuffer
                                , t = this.mediaSource;
                            if (t && "open" === t.readyState) {
                                for (var r in e) {
                                    var i = e[r];
                                    if (i) {
                                        if (!i.ended)
                                            return;
                                        if (i.updating)
                                            return void (this._needsEos = !0)
                                    }
                                }
                                u.b.log("all media data are available, signal endOfStream() to MediaSource and stop loading fragment");
                                try {
                                    t.endOfStream()
                                } catch (e) {
                                    u.b.warn("exception while calling mediaSource.endOfStream()")
                                }
                                this._needsEos = !1
                            } else
                                this._needsEos = !1
                        }
                        ,
                        a.onBufferFlushing = function (e) {
                            e.type ? this.flushRange.push({
                                start: e.startOffset,
                                end: e.endOffset,
                                type: e.type
                            }) : (this.flushRange.push({
                                start: e.startOffset,
                                end: e.endOffset,
                                type: "video"
                            }),
                                this.flushRange.push({
                                    start: e.startOffset,
                                    end: e.endOffset,
                                    type: "audio"
                                })),
                                this.flushBufferCounter = 0,
                                this.doFlush()
                        }
                        ,
                        a.flushLiveBackBuffer = function () {
                            if (this._live) {
                                var e = this.config.liveBackBufferLength;
                                if (isFinite(e) && !(e < 0))
                                    if (this.media)
                                        for (var t = this.media.currentTime, r = this.sourceBuffer, i = Object.keys(r), a = t - Math.max(e, this._levelTargetDuration), n = i.length - 1; n >= 0; n--) {
                                            var s = i[n]
                                                , o = r[s];
                                            if (o) {
                                                var l = o.buffered;
                                                l.length > 0 && a > l.start(0) && this.removeBufferRange(s, o, 0, a) && this.hls.trigger(d.a.LIVE_BACK_BUFFER_REACHED, {
                                                    bufferEnd: a
                                                })
                                            }
                                        }
                                    else
                                        u.b.error("flushLiveBackBuffer called without attaching media")
                            }
                        }
                        ,
                        a.onLevelUpdated = function (e) {
                            var t = e.details;
                            t.fragments.length > 0 && (this._levelDuration = t.totalduration + t.fragments[0].start,
                                this._levelTargetDuration = t.averagetargetduration || t.targetduration || 10,
                                this._live = t.live,
                                this.updateMediaElementDuration())
                        }
                        ,
                        a.updateMediaElementDuration = function () {
                            var e, t = this.config;
                            if (null !== this._levelDuration && this.media && this.mediaSource && this.sourceBuffer && 0 !== this.media.readyState && "open" === this.mediaSource.readyState) {
                                for (var r in this.sourceBuffer) {
                                    var i = this.sourceBuffer[r];
                                    if (i && !0 === i.updating)
                                        return
                                }
                                e = this.media.duration,
                                    null === this._msDuration && (this._msDuration = this.mediaSource.duration),
                                    !0 === this._live && !0 === t.liveDurationInfinity ? (u.b.log("Media Source duration is set to Infinity"),
                                        this._msDuration = this.mediaSource.duration = 1 / 0) : (this._levelDuration > this._msDuration && this._levelDuration > e || !Object(l.a)(e)) && (u.b.log("Updating Media Source duration to " + this._levelDuration.toFixed(3)),
                                            this._msDuration = this.mediaSource.duration = this._levelDuration)
                            }
                        }
                        ,
                        a.doFlush = function () {
                            for (; this.flushRange.length;) {
                                var e = this.flushRange[0];
                                if (!this.flushBuffer(e.start, e.end, e.type))
                                    return void (this._needsFlush = !0);
                                this.flushRange.shift(),
                                    this.flushBufferCounter = 0
                            }
                            if (0 === this.flushRange.length) {
                                this._needsFlush = !1;
                                var t = 0
                                    , r = this.sourceBuffer;
                                try {
                                    for (var i in r) {
                                        var a = r[i];
                                        a && (t += a.buffered.length)
                                    }
                                } catch (e) {
                                    u.b.error("error while accessing sourceBuffer.buffered")
                                }
                                this.appended = t,
                                    this.hls.trigger(d.a.BUFFER_FLUSHED)
                            }
                        }
                        ,
                        a.doAppending = function () {
                            var e = this.config
                                , t = this.hls
                                , r = this.segments
                                , i = this.sourceBuffer;
                            if (Object.keys(i).length) {
                                if (!this.media || this.media.error)
                                    return this.segments = [],
                                        void u.b.error("trying to append although a media error occured, flush segment and abort");
                                if (!this.appending) {
                                    var a = r.shift();
                                    if (a)
                                        try {
                                            var n = i[a.type];
                                            if (!n)
                                                return void this._onSBUpdateEnd();
                                            if (n.updating)
                                                return void r.unshift(a);
                                            n.ended = !1,
                                                this.parent = a.parent,
                                                n.appendBuffer(a.data),
                                                this.appendError = 0,
                                                this.appended++,
                                                this.appending = !0
                                        } catch (i) {
                                            u.b.error("error while trying to append buffer:" + i.message),
                                                r.unshift(a);
                                            var s = {
                                                type: o.b.MEDIA_ERROR,
                                                parent: a.parent,
                                                details: "",
                                                fatal: !1
                                            };
                                            22 === i.code ? (this.segments = [],
                                                s.details = o.a.BUFFER_FULL_ERROR) : (this.appendError++,
                                                    s.details = o.a.BUFFER_APPEND_ERROR,
                                                    this.appendError > e.appendErrorMaxRetry && (u.b.log("fail " + e.appendErrorMaxRetry + " times to append segment in sourceBuffer"),
                                                        this.segments = [],
                                                        s.fatal = !0)),
                                                t.trigger(d.a.ERROR, s)
                                        }
                                }
                            }
                        }
                        ,
                        a.flushBuffer = function (e, t, r) {
                            var i = this.sourceBuffer;
                            if (!Object.keys(i).length)
                                return !0;
                            var a = "null";
                            if (this.media && (a = this.media.currentTime.toFixed(3)),
                                u.b.log("flushBuffer,pos/start/end: " + a + "/" + e + "/" + t),
                                this.flushBufferCounter >= this.appended)
                                return u.b.warn("abort flushing too many retries"),
                                    !0;
                            var n = i[r];
                            if (n) {
                                if (n.ended = !1,
                                    n.updating)
                                    return u.b.warn("cannot flush, sb updating in progress"),
                                        !1;
                                if (this.removeBufferRange(r, n, e, t))
                                    return this.flushBufferCounter++,
                                        !1
                            }
                            return u.b.log("buffer flushed"),
                                !0
                        }
                        ,
                        a.removeBufferRange = function (e, t, r, i) {
                            try {
                                for (var a = 0; a < t.buffered.length; a++) {
                                    var n = t.buffered.start(a)
                                        , s = t.buffered.end(a)
                                        , o = Math.max(n, r)
                                        , l = Math.min(s, i);
                                    if (Math.min(l, s) - o > .5) {
                                        var d = "null";
                                        return this.media && (d = this.media.currentTime.toString()),
                                            u.b.log("sb remove " + e + " [" + o + "," + l + "], of [" + n + "," + s + "], pos:" + d),
                                            t.remove(o, l),
                                            !0
                                    }
                                }
                            } catch (e) {
                                u.b.warn("removeBufferRange failed", e)
                            }
                            return !1
                        }
                        ,
                        i
                }(h);
            function qe(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i)
                }
            }
            var Xe = function (e) {
                var t, r;
                function i(t) {
                    var r;
                    return (r = e.call(this, t, d.a.FPS_DROP_LEVEL_CAPPING, d.a.MEDIA_ATTACHING, d.a.MANIFEST_PARSED, d.a.LEVELS_UPDATED, d.a.BUFFER_CODECS, d.a.MEDIA_DETACHING) || this).autoLevelCapping = Number.POSITIVE_INFINITY,
                        r.firstLevel = null,
                        r.levels = [],
                        r.media = null,
                        r.restrictedLevels = [],
                        r.timer = null,
                        r.clientRect = null,
                        r
                }
                r = e,
                    (t = i).prototype = Object.create(r.prototype),
                    t.prototype.constructor = t,
                    t.__proto__ = r;
                var a, n, s, o = i.prototype;
                return o.destroy = function () {
                    this.hls.config.capLevelToPlayerSize && (this.media = null,
                        this.clientRect = null,
                        this.stopCapping())
                }
                    ,
                    o.onFpsDropLevelCapping = function (e) {
                        i.isLevelAllowed(e.droppedLevel, this.restrictedLevels) && this.restrictedLevels.push(e.droppedLevel)
                    }
                    ,
                    o.onMediaAttaching = function (e) {
                        this.media = e.media instanceof window.HTMLVideoElement ? e.media : null
                    }
                    ,
                    o.onManifestParsed = function (e) {
                        var t = this.hls;
                        this.restrictedLevels = [],
                            this.levels = e.levels,
                            this.firstLevel = e.firstLevel,
                            t.config.capLevelToPlayerSize && e.video && this.startCapping()
                    }
                    ,
                    o.onBufferCodecs = function (e) {
                        this.hls.config.capLevelToPlayerSize && e.video && this.startCapping()
                    }
                    ,
                    o.onLevelsUpdated = function (e) {
                        this.levels = e.levels
                    }
                    ,
                    o.onMediaDetaching = function () {
                        this.stopCapping()
                    }
                    ,
                    o.detectPlayerSize = function () {
                        if (this.media) {
                            var e = this.levels ? this.levels.length : 0;
                            if (e) {
                                var t = this.hls;
                                t.autoLevelCapping = this.getMaxLevel(e - 1),
                                    t.autoLevelCapping > this.autoLevelCapping && t.streamController.nextLevelSwitch(),
                                    this.autoLevelCapping = t.autoLevelCapping
                            }
                        }
                    }
                    ,
                    o.getMaxLevel = function (e) {
                        var t = this;
                        if (!this.levels)
                            return -1;
                        var r = this.levels.filter((function (r, a) {
                            return i.isLevelAllowed(a, t.restrictedLevels) && a <= e
                        }
                        ));
                        return this.clientRect = null,
                            i.getMaxLevelByMediaSize(r, this.mediaWidth, this.mediaHeight)
                    }
                    ,
                    o.startCapping = function () {
                        this.timer || (this.autoLevelCapping = Number.POSITIVE_INFINITY,
                            this.hls.firstLevel = this.getMaxLevel(this.firstLevel),
                            clearInterval(this.timer),
                            this.timer = setInterval(this.detectPlayerSize.bind(this), 1e3),
                            this.detectPlayerSize())
                    }
                    ,
                    o.stopCapping = function () {
                        this.restrictedLevels = [],
                            this.firstLevel = null,
                            this.autoLevelCapping = Number.POSITIVE_INFINITY,
                            this.timer && (this.timer = clearInterval(this.timer),
                                this.timer = null)
                    }
                    ,
                    o.getDimensions = function () {
                        if (this.clientRect)
                            return this.clientRect;
                        var e = this.media
                            , t = {
                                width: 0,
                                height: 0
                            };
                        if (e) {
                            var r = e.getBoundingClientRect();
                            t.width = r.width,
                                t.height = r.height,
                                t.width || t.height || (t.width = r.right - r.left || e.width || 0,
                                    t.height = r.bottom - r.top || e.height || 0)
                        }
                        return this.clientRect = t,
                            t
                    }
                    ,
                    i.isLevelAllowed = function (e, t) {
                        return void 0 === t && (t = []),
                            -1 === t.indexOf(e)
                    }
                    ,
                    i.getMaxLevelByMediaSize = function (e, t, r) {
                        if (!e || e && !e.length)
                            return -1;
                        for (var i, a, n = e.length - 1, s = 0; s < e.length; s += 1) {
                            var o = e[s];
                            if ((o.width >= t || o.height >= r) && (i = o,
                                !(a = e[s + 1]) || i.width !== a.width || i.height !== a.height)) {
                                n = s;
                                break
                            }
                        }
                        return n
                    }
                    ,
                    a = i,
                    s = [{
                        key: "contentScaleFactor",
                        get: function () {
                            var e = 1;
                            try {
                                e = window.devicePixelRatio
                            } catch (e) { }
                            return e
                        }
                    }],
                    (n = [{
                        key: "mediaWidth",
                        get: function () {
                            return this.getDimensions().width * i.contentScaleFactor
                        }
                    }, {
                        key: "mediaHeight",
                        get: function () {
                            return this.getDimensions().height * i.contentScaleFactor
                        }
                    }]) && qe(a.prototype, n),
                    s && qe(a, s),
                    i
            }(h);
            var ze = window.performance
                , Qe = function (e) {
                    var t, r;
                    function i(t) {
                        return e.call(this, t, d.a.MEDIA_ATTACHING) || this
                    }
                    r = e,
                        (t = i).prototype = Object.create(r.prototype),
                        t.prototype.constructor = t,
                        t.__proto__ = r;
                    var a = i.prototype;
                    return a.destroy = function () {
                        this.timer && clearInterval(this.timer),
                            this.isVideoPlaybackQualityAvailable = !1
                    }
                        ,
                        a.onMediaAttaching = function (e) {
                            var t = this.hls.config;
                            t.capLevelOnFPSDrop && ("function" == typeof (this.video = e.media instanceof window.HTMLVideoElement ? e.media : null).getVideoPlaybackQuality && (this.isVideoPlaybackQualityAvailable = !0),
                                clearInterval(this.timer),
                                this.timer = setInterval(this.checkFPSInterval.bind(this), t.fpsDroppedMonitoringPeriod))
                        }
                        ,
                        a.checkFPS = function (e, t, r) {
                            var i = ze.now();
                            if (t) {
                                if (this.lastTime) {
                                    var a = i - this.lastTime
                                        , n = r - this.lastDroppedFrames
                                        , s = t - this.lastDecodedFrames
                                        , o = 1e3 * n / a
                                        , l = this.hls;
                                    if (l.trigger(d.a.FPS_DROP, {
                                        currentDropped: n,
                                        currentDecoded: s,
                                        totalDroppedFrames: r
                                    }),
                                        o > 0 && n > l.config.fpsDroppedMonitoringThreshold * s) {
                                        var c = l.currentLevel;
                                        u.b.warn("drop FPS ratio greater than max allowed value for currentLevel: " + c),
                                            c > 0 && (-1 === l.autoLevelCapping || l.autoLevelCapping >= c) && (c -= 1,
                                                l.trigger(d.a.FPS_DROP_LEVEL_CAPPING, {
                                                    level: c,
                                                    droppedLevel: l.currentLevel
                                                }),
                                                l.autoLevelCapping = c,
                                                l.streamController.nextLevelSwitch())
                                    }
                                }
                                this.lastTime = i,
                                    this.lastDroppedFrames = r,
                                    this.lastDecodedFrames = t
                            }
                        }
                        ,
                        a.checkFPSInterval = function () {
                            var e = this.video;
                            if (e)
                                if (this.isVideoPlaybackQualityAvailable) {
                                    var t = e.getVideoPlaybackQuality();
                                    this.checkFPS(e, t.totalVideoFrames, t.droppedVideoFrames)
                                } else
                                    this.checkFPS(e, e.webkitDecodedFrameCount, e.webkitDroppedFrameCount)
                        }
                        ,
                        i
                }(h)
                , $e = function () {
                    function e(e) {
                        e && e.xhrSetup && (this.xhrSetup = e.xhrSetup)
                    }
                    var t = e.prototype;
                    return t.destroy = function () {
                        this.abort(),
                            this.loader = null
                    }
                        ,
                        t.abort = function () {
                            var e = this.loader;
                            e && 4 !== e.readyState && (this.stats.aborted = !0,
                                e.abort()),
                                window.clearTimeout(this.requestTimeout),
                                this.requestTimeout = null,
                                window.clearTimeout(this.retryTimeout),
                                this.retryTimeout = null
                        }
                        ,
                        t.load = function (e, t, r) {
                            this.context = e,
                                this.config = t,
                                this.callbacks = r,
                                this.stats = {
                                    trequest: window.performance.now(),
                                    retry: 0
                                },
                                this.retryDelay = t.retryDelay,
                                this.loadInternal()
                        }
                        ,
                        t.loadInternal = function () {
                            var e, t = this.context;
                            e = this.loader = new window.XMLHttpRequest;
                            var r = this.stats;
                            r.tfirst = 0,
                                r.loaded = 0;
                            var i = this.xhrSetup;
                            try {
                                if (i)
                                    try {
                                        i(e, t.url)
                                    } catch (r) {
                                        e.open("GET", t.url, !0),
                                            i(e, t.url)
                                    }
                                e.readyState || e.open("GET", t.url, !0)
                            } catch (r) {
                                return void this.callbacks.onError({
                                    code: e.status,
                                    text: r.message
                                }, t, e)
                            }
                            t.rangeEnd && e.setRequestHeader("Range", "bytes=" + t.rangeStart + "-" + (t.rangeEnd - 1)),
                                e.onreadystatechange = this.readystatechange.bind(this),
                                e.onprogress = this.loadprogress.bind(this),
                                e.responseType = t.responseType,
                                this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), this.config.timeout),
                                e.send()
                        }
                        ,
                        t.readystatechange = function (e) {
                            var t = e.currentTarget
                                , r = t.readyState
                                , i = this.stats
                                , a = this.context
                                , n = this.config;
                            if (!i.aborted && r >= 2)
                                if (window.clearTimeout(this.requestTimeout),
                                    0 === i.tfirst && (i.tfirst = Math.max(window.performance.now(), i.trequest)),
                                    4 === r) {
                                    var s = t.status;
                                    if (s >= 200 && s < 300) {
                                        var o, l;
                                        i.tload = Math.max(i.tfirst, window.performance.now()),
                                            l = "arraybuffer" === a.responseType ? (o = t.response).byteLength : (o = t.responseText).length,
                                            i.loaded = i.total = l;
                                        var d = {
                                            url: t.responseURL,
                                            data: o
                                        };
                                        this.callbacks.onSuccess(d, i, a, t)
                                    } else
                                        i.retry >= n.maxRetry || s >= 400 && s < 499 ? (u.b.error(s + " while loading " + a.url),
                                            this.callbacks.onError({
                                                code: s,
                                                text: t.statusText
                                            }, a, t)) : (u.b.warn(s + " while loading " + a.url + ", retrying in " + this.retryDelay + "..."),
                                                this.destroy(),
                                                this.retryTimeout = window.setTimeout(this.loadInternal.bind(this), this.retryDelay),
                                                this.retryDelay = Math.min(2 * this.retryDelay, n.maxRetryDelay),
                                                i.retry++)
                                } else
                                    this.requestTimeout = window.setTimeout(this.loadtimeout.bind(this), n.timeout)
                        }
                        ,
                        t.loadtimeout = function () {
                            u.b.warn("timeout while loading " + this.context.url),
                                this.callbacks.onTimeout(this.stats, this.context, null)
                        }
                        ,
                        t.loadprogress = function (e) {
                            var t = e.currentTarget
                                , r = this.stats;
                            r.loaded = e.loaded,
                                e.lengthComputable && (r.total = e.total);
                            var i = this.callbacks.onProgress;
                            i && i(r, this.context, null, t)
                        }
                        ,
                        e
                }();
            function Je(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i)
                }
            }
            var Ze = function (e) {
                var t, r;
                function i(t) {
                    var r;
                    return (r = e.call(this, t, d.a.MANIFEST_LOADING, d.a.MANIFEST_PARSED, d.a.AUDIO_TRACK_LOADED, d.a.AUDIO_TRACK_SWITCHED, d.a.LEVEL_LOADED, d.a.ERROR) || this)._trackId = -1,
                        r._selectDefaultTrack = !0,
                        r.tracks = [],
                        r.trackIdBlacklist = Object.create(null),
                        r.audioGroupId = null,
                        r
                }
                r = e,
                    (t = i).prototype = Object.create(r.prototype),
                    t.prototype.constructor = t,
                    t.__proto__ = r;
                var a, n, s, l = i.prototype;
                return l.onManifestLoading = function () {
                    this.tracks = [],
                        this._trackId = -1,
                        this._selectDefaultTrack = !0
                }
                    ,
                    l.onManifestParsed = function (e) {
                        var t = this.tracks = e.audioTracks || [];
                        this.hls.trigger(d.a.AUDIO_TRACKS_UPDATED, {
                            audioTracks: t
                        }),
                            this._selectAudioGroup(this.hls.nextLoadLevel)
                    }
                    ,
                    l.onAudioTrackLoaded = function (e) {
                        if (e.id >= this.tracks.length)
                            u.b.warn("Invalid audio track id:", e.id);
                        else {
                            if (u.b.log("audioTrack " + e.id + " loaded"),
                                this.tracks[e.id].details = e.details,
                                e.details.live && !this.hasInterval()) {
                                var t = 1e3 * e.details.targetduration;
                                this.setInterval(t)
                            }
                            !e.details.live && this.hasInterval() && this.clearInterval()
                        }
                    }
                    ,
                    l.onAudioTrackSwitched = function (e) {
                        var t = this.tracks[e.id].groupId;
                        t && this.audioGroupId !== t && (this.audioGroupId = t)
                    }
                    ,
                    l.onLevelLoaded = function (e) {
                        this._selectAudioGroup(e.level)
                    }
                    ,
                    l.onError = function (e) {
                        e.type === o.b.NETWORK_ERROR && (e.fatal && this.clearInterval(),
                            e.details === o.a.AUDIO_TRACK_LOAD_ERROR && (u.b.warn("Network failure on audio-track id:", e.context.id),
                                this._handleLoadError()))
                    }
                    ,
                    l._setAudioTrack = function (e) {
                        if (this._trackId === e && this.tracks[this._trackId].details)
                            u.b.debug("Same id as current audio-track passed, and track details available -> no-op");
                        else if (e < 0 || e >= this.tracks.length)
                            u.b.warn("Invalid id passed to audio-track controller");
                        else {
                            var t = this.tracks[e];
                            u.b.log("Now switching to audio-track index " + e),
                                this.clearInterval(),
                                this._trackId = e;
                            var r = t.url
                                , i = t.type
                                , a = t.id;
                            this.hls.trigger(d.a.AUDIO_TRACK_SWITCHING, {
                                id: a,
                                type: i,
                                url: r
                            }),
                                this._loadTrackDetailsIfNeeded(t)
                        }
                    }
                    ,
                    l.doTick = function () {
                        this._updateTrack(this._trackId)
                    }
                    ,
                    l._selectAudioGroup = function (e) {
                        var t = this.hls.levels[e];
                        if (t && t.audioGroupIds) {
                            var r = t.audioGroupIds[t.urlId];
                            this.audioGroupId !== r && (this.audioGroupId = r,
                                this._selectInitialAudioTrack())
                        }
                    }
                    ,
                    l._selectInitialAudioTrack = function () {
                        var e = this
                            , t = this.tracks;
                        if (t.length) {
                            var r = this.tracks[this._trackId]
                                , i = null;
                            if (r && (i = r.name),
                                this._selectDefaultTrack) {
                                var a = t.filter((function (e) {
                                    return e.default
                                }
                                ));
                                a.length ? t = a : u.b.warn("No default audio tracks defined")
                            }
                            var n = !1
                                , s = function () {
                                    t.forEach((function (t) {
                                        n || e.audioGroupId && t.groupId !== e.audioGroupId || i && i !== t.name || (e._setAudioTrack(t.id),
                                            n = !0)
                                    }
                                    ))
                                };
                            s(),
                                n || (i = null,
                                    s()),
                                n || (u.b.error("No track found for running audio group-ID: " + this.audioGroupId),
                                    this.hls.trigger(d.a.ERROR, {
                                        type: o.b.MEDIA_ERROR,
                                        details: o.a.AUDIO_TRACK_LOAD_ERROR,
                                        fatal: !0
                                    }))
                        }
                    }
                    ,
                    l._needsTrackLoading = function (e) {
                        var t = e.details
                            , r = e.url;
                        return !(t && !t.live) && !!r
                    }
                    ,
                    l._loadTrackDetailsIfNeeded = function (e) {
                        if (this._needsTrackLoading(e)) {
                            var t = e.url
                                , r = e.id;
                            u.b.log("loading audio-track playlist for id: " + r),
                                this.hls.trigger(d.a.AUDIO_TRACK_LOADING, {
                                    url: t,
                                    id: r
                                })
                        }
                    }
                    ,
                    l._updateTrack = function (e) {
                        if (!(e < 0 || e >= this.tracks.length)) {
                            this.clearInterval(),
                                this._trackId = e,
                                u.b.log("trying to update audio-track " + e);
                            var t = this.tracks[e];
                            this._loadTrackDetailsIfNeeded(t)
                        }
                    }
                    ,
                    l._handleLoadError = function () {
                        this.trackIdBlacklist[this._trackId] = !0;
                        var e = this._trackId
                            , t = this.tracks[e]
                            , r = t.name
                            , i = t.language
                            , a = t.groupId;
                        u.b.warn("Loading failed on audio track id: " + e + ", group-id: " + a + ', name/language: "' + r + '" / "' + i + '"');
                        for (var n = e, s = 0; s < this.tracks.length; s++) {
                            if (!this.trackIdBlacklist[s])
                                if (this.tracks[s].name === r) {
                                    n = s;
                                    break
                                }
                        }
                        n !== e ? (u.b.log("Attempting audio-track fallback id:", n, "group-id:", this.tracks[n].groupId),
                            this._setAudioTrack(n)) : u.b.warn('No fallback audio-track found for name/language: "' + r + '" / "' + i + '"')
                    }
                    ,
                    a = i,
                    (n = [{
                        key: "audioTracks",
                        get: function () {
                            return this.tracks
                        }
                    }, {
                        key: "audioTrack",
                        get: function () {
                            return this._trackId
                        },
                        set: function (e) {
                            this._setAudioTrack(e),
                                this._selectDefaultTrack = !1
                        }
                    }]) && Je(a.prototype, n),
                    s && Je(a, s),
                    i
            }(ge);
            function et(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i)
                }
            }
            var tt = window.performance
                , rt = function (e) {
                    var t, r;
                    function i(t, r) {
                        var i;
                        return (i = e.call(this, t, d.a.MEDIA_ATTACHED, d.a.MEDIA_DETACHING, d.a.AUDIO_TRACKS_UPDATED, d.a.AUDIO_TRACK_SWITCHING, d.a.AUDIO_TRACK_LOADED, d.a.KEY_LOADED, d.a.FRAG_LOADED, d.a.FRAG_PARSING_INIT_SEGMENT, d.a.FRAG_PARSING_DATA, d.a.FRAG_PARSED, d.a.ERROR, d.a.BUFFER_RESET, d.a.BUFFER_CREATED, d.a.BUFFER_APPENDED, d.a.BUFFER_FLUSHED, d.a.INIT_PTS_FOUND) || this).fragmentTracker = r,
                            i.config = t.config,
                            i.audioCodecSwap = !1,
                            i._state = pe,
                            i.initPTS = [],
                            i.waitingFragment = null,
                            i.videoTrackCC = null,
                            i.waitingVideoCC = null,
                            i
                    }
                    r = e,
                        (t = i).prototype = Object.create(r.prototype),
                        t.prototype.constructor = t,
                        t.__proto__ = r;
                    var a, n, s, c = i.prototype;
                    return c.onInitPtsFound = function (e) {
                        var t = e.id
                            , r = e.frag.cc
                            , i = e.initPTS;
                        "main" === t && (this.initPTS[r] = i,
                            this.videoTrackCC = r,
                            u.b.log("InitPTS for cc: " + r + " found from main: " + i),
                            this.state === Le && this.tick())
                    }
                        ,
                        c.startLoad = function (e) {
                            if (this.tracks) {
                                var t = this.lastCurrentTime;
                                this.stopLoad(),
                                    this.setInterval(100),
                                    this.fragLoadError = 0,
                                    t > 0 && -1 === e ? (u.b.log("audio:override startPosition with lastCurrentTime @" + t.toFixed(3)),
                                        this.state = me) : (this.lastCurrentTime = this.startPosition ? this.startPosition : e,
                                            this.state = ve),
                                    this.nextLoadPosition = this.startPosition = this.lastCurrentTime,
                                    this.tick()
                            } else
                                this.startPosition = e,
                                    this.state = pe
                        }
                        ,
                        c.doTick = function () {
                            var e, t, r, i = this.hls, a = i.config;
                            switch (this.state) {
                                case we:
                                case ye:
                                case Ae:
                                    break;
                                case ve:
                                    this.state = Se,
                                        this.loadedmetadata = !1;
                                    break;
                                case me:
                                    var n = this.tracks;
                                    if (!n)
                                        break;
                                    if (!this.media && (this.startFragRequested || !a.startFragPrefetch))
                                        break;
                                    if (this.loadedmetadata)
                                        e = this.media.currentTime;
                                    else if (void 0 === (e = this.nextLoadPosition))
                                        break;
                                    var s = this.mediaBuffer ? this.mediaBuffer : this.media
                                        , o = this.videoBuffer ? this.videoBuffer : this.media
                                        , c = e < a.maxBufferHole ? Math.max(2, a.maxBufferHole) : a.maxBufferHole
                                        , h = H.bufferInfo(s, e, c)
                                        , f = H.bufferInfo(o, e, c)
                                        , g = h.len
                                        , p = h.end
                                        , v = this.fragPrevious
                                        , m = Math.min(a.maxBufferLength, a.maxMaxBufferLength)
                                        , y = Math.max(m, f.len)
                                        , b = this.audioSwitch
                                        , T = this.trackId;
                                    if ((g < y || b) && T < n.length) {
                                        if (void 0 === (r = n[T].details)) {
                                            this.state = Se;
                                            break
                                        }
                                        if (!b && this._streamEnded(h, r))
                                            return this.hls.trigger(d.a.BUFFER_EOS, {
                                                type: "audio"
                                            }),
                                                void (this.state = ke);
                                        var E, S = r.fragments, _ = S.length, R = S[0].start, A = S[_ - 1].start + S[_ - 1].duration;
                                        if (b)
                                            if (r.live && !r.PTSKnown)
                                                u.b.log("switching audiotrack, live stream, unknown PTS,load first fragment"),
                                                    p = 0;
                                            else if (p = e,
                                                r.PTSKnown && e < R) {
                                                if (!(h.end > R || h.nextStart))
                                                    return;
                                                u.b.log("alt audio track ahead of main track, seek to start of alt audio track"),
                                                    this.media.currentTime = R + .05
                                            }
                                        if (r.initSegment && !r.initSegment.data)
                                            E = r.initSegment;
                                        else if (p <= R) {
                                            if (E = S[0],
                                                null !== this.videoTrackCC && E.cc !== this.videoTrackCC && (E = function (e, t) {
                                                    return j.search(e, (function (e) {
                                                        return e.cc < t ? 1 : e.cc > t ? -1 : 0
                                                    }
                                                    ))
                                                }(S, this.videoTrackCC)),
                                                r.live && E.loadIdx && E.loadIdx === this.fragLoadIdx) {
                                                var k = h.nextStart ? h.nextStart : R;
                                                return u.b.log("no alt audio available @currentTime:" + this.media.currentTime + ", seeking @" + (k + .05)),
                                                    void (this.media.currentTime = k + .05)
                                            }
                                        } else {
                                            var w, L = a.maxFragLookUpTolerance, D = v ? S[v.sn - S[0].sn + 1] : void 0;
                                            p < A ? (p > A - L && (L = 0),
                                                w = D && !ue(p, L, D) ? D : j.search(S, (function (e) {
                                                    return ue(p, L, e)
                                                }
                                                ))) : w = S[_ - 1],
                                                w && (E = w,
                                                    R = w.start,
                                                    v && E.level === v.level && E.sn === v.sn && (E.sn < r.endSN ? (E = S[E.sn + 1 - r.startSN],
                                                        this.fragmentTracker.getState(E) !== G && u.b.log("SN just loaded, load next one: " + E.sn)) : E = null))
                                        }
                                        E && (E.encrypted ? (u.b.log("Loading key for " + E.sn + " of [" + r.startSN + " ," + r.endSN + "],track " + T),
                                            this.state = be,
                                            i.trigger(d.a.KEY_LOADING, {
                                                frag: E
                                            })) : (this.fragCurrent = E,
                                                (b || this.fragmentTracker.getState(E) === U) && (u.b.log("Loading " + E.sn + ", cc: " + E.cc + " of [" + r.startSN + " ," + r.endSN + "],track " + T + ", " + (this.loadedmetadata ? "currentTime" : "nextLoadPosition") + ": " + e + ", bufferEnd: " + p.toFixed(3)),
                                                    "initSegment" !== E.sn && (this.startFragRequested = !0),
                                                    Object(l.a)(E.sn) && (this.nextLoadPosition = E.start + E.duration),
                                                    i.trigger(d.a.FRAG_LOADING, {
                                                        frag: E
                                                    }),
                                                    this.state = Te)))
                                    }
                                    break;
                                case Se:
                                    (t = this.tracks[this.trackId]) && t.details && (this.state = me);
                                    break;
                                case Ee:
                                    var O = tt.now()
                                        , C = this.retryDate
                                        , I = (s = this.media) && s.seeking;
                                    (!C || O >= C || I) && (u.b.log("audioStreamController: retryDate reached, switch back to IDLE state"),
                                        this.state = me);
                                    break;
                                case Le:
                                    var P = this.waitingFragment;
                                    if (P) {
                                        var x = P.frag.cc;
                                        if (void 0 !== this.initPTS[x])
                                            this.waitingFragment = null,
                                                this.state = Te,
                                                this.onFragLoaded(P);
                                        else if (this.videoTrackCC !== this.waitingVideoCC)
                                            u.b.log("Waiting fragment cc (" + x + ") cancelled because video is at cc " + this.videoTrackCC),
                                                this.clearWaitingFragment();
                                        else {
                                            var M = H.bufferInfo(this.mediaBuffer, this.media.currentTime, a.maxBufferHole);
                                            ue(M.end, a.maxFragLookUpTolerance, P.frag) < 0 && (u.b.log("Waiting fragment cc (" + x + ") @ " + P.frag.start + " cancelled because another fragment at " + M.end + " is needed"),
                                                this.clearWaitingFragment())
                                        }
                                    } else
                                        this.state = me
                            }
                        }
                        ,
                        c.clearWaitingFragment = function () {
                            var e = this.waitingFragment;
                            e && (this.fragmentTracker.removeFragment(e.frag),
                                this.waitingFragment = null,
                                this.waitingVideoCC = null,
                                this.state = me)
                        }
                        ,
                        c.onMediaAttached = function (e) {
                            var t = this.media = this.mediaBuffer = e.media;
                            this.onvseeking = this.onMediaSeeking.bind(this),
                                this.onvended = this.onMediaEnded.bind(this),
                                t.addEventListener("seeking", this.onvseeking),
                                t.addEventListener("ended", this.onvended);
                            var r = this.config;
                            this.tracks && r.autoStartLoad && this.startLoad(r.startPosition)
                        }
                        ,
                        c.onMediaDetaching = function () {
                            var e = this.media;
                            e && e.ended && (u.b.log("MSE detaching and video ended, reset startPosition"),
                                this.startPosition = this.lastCurrentTime = 0),
                                e && (e.removeEventListener("seeking", this.onvseeking),
                                    e.removeEventListener("ended", this.onvended),
                                    this.onvseeking = this.onvseeked = this.onvended = null),
                                this.media = this.mediaBuffer = this.videoBuffer = null,
                                this.loadedmetadata = !1,
                                this.fragmentTracker.removeAllFragments(),
                                this.stopLoad()
                        }
                        ,
                        c.onAudioTracksUpdated = function (e) {
                            u.b.log("audio tracks updated"),
                                this.tracks = e.audioTracks
                        }
                        ,
                        c.onAudioTrackSwitching = function (e) {
                            var t = !!e.url;
                            this.trackId = e.id,
                                this.fragCurrent = null,
                                this.clearWaitingFragment(),
                                this.state = ye,
                                t ? this.setInterval(100) : this.demuxer && (this.demuxer.destroy(),
                                    this.demuxer = null),
                                t && (this.audioSwitch = !0,
                                    this.state = me),
                                this.tick()
                        }
                        ,
                        c.onAudioTrackLoaded = function (e) {
                            var t = e.details
                                , r = e.id
                                , i = this.tracks[r]
                                , a = i.details
                                , n = t.totalduration
                                , s = 0;
                            if (u.b.log("track " + r + " loaded [" + t.startSN + "," + t.endSN + "],duration:" + n),
                                t.live || a && a.live ? a && t.fragments.length > 0 ? (re(a, t),
                                    s = t.fragments[0].start,
                                    t.PTSKnown ? u.b.log("live audio playlist sliding:" + s.toFixed(3)) : u.b.log("live audio playlist - outdated PTS, unknown sliding")) : (t.PTSKnown = !1,
                                        u.b.log("live audio playlist - first load, unknown sliding")) : t.PTSKnown = !1,
                                i.details = t,
                                !this.startFragRequested) {
                                if (-1 === this.startPosition) {
                                    var o = t.startTimeOffset;
                                    Object(l.a)(o) ? (u.b.log("start time offset found in playlist, adjust startPosition to " + o),
                                        this.startPosition = o) : t.live ? (this.startPosition = this.computeLivePosition(s, t),
                                            u.b.log("compute startPosition for audio-track to " + this.startPosition)) : this.startPosition = 0
                                }
                                this.nextLoadPosition = this.startPosition
                            }
                            this.state === Se && (this.state = me),
                                this.tick()
                        }
                        ,
                        c.onKeyLoaded = function () {
                            this.state === be && (this.state = me,
                                this.tick())
                        }
                        ,
                        c.onFragLoaded = function (e) {
                            var t = this.fragCurrent
                                , r = e.frag;
                            if (this.state === Te && t && "audio" === r.type && r.level === t.level && r.sn === t.sn) {
                                var i = this.tracks[this.trackId]
                                    , a = i.details
                                    , n = a.totalduration
                                    , s = t.level
                                    , o = t.sn
                                    , l = t.cc
                                    , c = this.config.defaultAudioCodec || i.audioCodec || "mp4a.40.2"
                                    , h = this.stats = e.stats;
                                if ("initSegment" === o)
                                    this.state = me,
                                        h.tparsed = h.tbuffered = tt.now(),
                                        a.initSegment.data = e.payload,
                                        this.hls.trigger(d.a.FRAG_BUFFERED, {
                                            stats: h,
                                            frag: t,
                                            id: "audio"
                                        }),
                                        this.tick();
                                else {
                                    this.state = _e,
                                        this.appended = !1,
                                        this.demuxer || (this.demuxer = new J(this.hls, "audio"));
                                    var f = this.initPTS[l]
                                        , g = a.initSegment ? a.initSegment.data : [];
                                    if (void 0 !== f) {
                                        this.pendingBuffering = !0,
                                            u.b.log("Demuxing " + o + " of [" + a.startSN + " ," + a.endSN + "],track " + s);
                                        this.demuxer.push(e.payload, g, c, null, t, n, !1, f)
                                    } else
                                        u.b.log("Unknown video PTS for cc " + l + ", waiting for video PTS before demuxing audio frag " + o + " of [" + a.startSN + " ," + a.endSN + "],track " + s),
                                            this.waitingFragment = e,
                                            this.waitingVideoCC = this.videoTrackCC,
                                            this.state = Le
                                }
                            }
                            this.fragLoadError = 0
                        }
                        ,
                        c.onFragParsingInitSegment = function (e) {
                            var t = this.fragCurrent
                                , r = e.frag;
                            if (t && "audio" === e.id && r.sn === t.sn && r.level === t.level && this.state === _e) {
                                var i, a = e.tracks;
                                if (a.video && delete a.video,
                                    i = a.audio) {
                                    i.levelCodec = i.codec,
                                        i.id = e.id,
                                        this.hls.trigger(d.a.BUFFER_CODECS, a),
                                        u.b.log("audio track:audio,container:" + i.container + ",codecs[level/parsed]=[" + i.levelCodec + "/" + i.codec + "]");
                                    var n = i.initSegment;
                                    if (n) {
                                        var s = {
                                            type: "audio",
                                            data: n,
                                            parent: "audio",
                                            content: "initSegment"
                                        };
                                        this.audioSwitch ? this.pendingData = [s] : (this.appended = !0,
                                            this.pendingBuffering = !0,
                                            this.hls.trigger(d.a.BUFFER_APPENDING, s))
                                    }
                                    this.tick()
                                }
                            }
                        }
                        ,
                        c.onFragParsingData = function (e) {
                            var t = this
                                , r = this.fragCurrent
                                , i = e.frag;
                            if (r && "audio" === e.id && "audio" === e.type && i.sn === r.sn && i.level === r.level && this.state === _e) {
                                var a = this.trackId
                                    , n = this.tracks[a]
                                    , s = this.hls;
                                Object(l.a)(e.endPTS) || (e.endPTS = e.startPTS + r.duration,
                                    e.endDTS = e.startDTS + r.duration),
                                    r.addElementaryStream(p.AUDIO),
                                    u.b.log("parsed " + e.type + ",PTS:[" + e.startPTS.toFixed(3) + "," + e.endPTS.toFixed(3) + "],DTS:[" + e.startDTS.toFixed(3) + "/" + e.endDTS.toFixed(3) + "],nb:" + e.nb),
                                    te(n.details, r, e.startPTS, e.endPTS);
                                var c = this.media
                                    , h = !1;
                                if (this.audioSwitch)
                                    if (c && c.readyState) {
                                        var f = c.currentTime;
                                        u.b.log("switching audio track : currentTime:" + f),
                                            f >= e.startPTS && (u.b.log("switching audio track : flushing all audio"),
                                                this.state = Ae,
                                                s.trigger(d.a.BUFFER_FLUSHING, {
                                                    startOffset: 0,
                                                    endOffset: Number.POSITIVE_INFINITY,
                                                    type: "audio"
                                                }),
                                                h = !0,
                                                this.audioSwitch = !1,
                                                s.trigger(d.a.AUDIO_TRACK_SWITCHED, {
                                                    id: a
                                                }))
                                    } else
                                        this.audioSwitch = !1,
                                            s.trigger(d.a.AUDIO_TRACK_SWITCHED, {
                                                id: a
                                            });
                                var g = this.pendingData;
                                if (!g)
                                    return u.b.warn("Apparently attempt to enqueue media payload without codec initialization data upfront"),
                                        void s.trigger(d.a.ERROR, {
                                            type: o.b.MEDIA_ERROR,
                                            details: null,
                                            fatal: !0
                                        });
                                this.audioSwitch || ([e.data1, e.data2].forEach((function (t) {
                                    t && t.length && g.push({
                                        type: e.type,
                                        data: t,
                                        parent: "audio",
                                        content: "data"
                                    })
                                }
                                )),
                                    !h && g.length && (g.forEach((function (e) {
                                        t.state === _e && (t.pendingBuffering = !0,
                                            t.hls.trigger(d.a.BUFFER_APPENDING, e))
                                    }
                                    )),
                                        this.pendingData = [],
                                        this.appended = !0)),
                                    this.tick()
                            }
                        }
                        ,
                        c.onFragParsed = function (e) {
                            var t = this.fragCurrent
                                , r = e.frag;
                            t && "audio" === e.id && r.sn === t.sn && r.level === t.level && this.state === _e && (this.stats.tparsed = tt.now(),
                                this.state = Re,
                                this._checkAppendedParsed())
                        }
                        ,
                        c.onBufferReset = function () {
                            this.mediaBuffer = this.videoBuffer = null,
                                this.loadedmetadata = !1
                        }
                        ,
                        c.onBufferCreated = function (e) {
                            var t = e.tracks.audio;
                            t && (this.mediaBuffer = t.buffer,
                                this.loadedmetadata = !0),
                                e.tracks.video && (this.videoBuffer = e.tracks.video.buffer)
                        }
                        ,
                        c.onBufferAppended = function (e) {
                            if ("audio" === e.parent) {
                                var t = this.state;
                                t !== _e && t !== Re || (this.pendingBuffering = e.pending > 0,
                                    this._checkAppendedParsed())
                            }
                        }
                        ,
                        c._checkAppendedParsed = function () {
                            if (!(this.state !== Re || this.appended && this.pendingBuffering)) {
                                var e = this.fragCurrent
                                    , t = this.stats
                                    , r = this.hls;
                                if (e) {
                                    this.fragPrevious = e,
                                        t.tbuffered = tt.now(),
                                        r.trigger(d.a.FRAG_BUFFERED, {
                                            stats: t,
                                            frag: e,
                                            id: "audio"
                                        });
                                    var i = this.mediaBuffer ? this.mediaBuffer : this.media;
                                    i && u.b.log("audio buffered : " + ne.toString(i.buffered)),
                                        this.audioSwitch && this.appended && (this.audioSwitch = !1,
                                            r.trigger(d.a.AUDIO_TRACK_SWITCHED, {
                                                id: this.trackId
                                            })),
                                        this.state = me
                                }
                                this.tick()
                            }
                        }
                        ,
                        c.onError = function (e) {
                            var t = e.frag;
                            if (!t || "audio" === t.type)
                                switch (e.details) {
                                    case o.a.FRAG_LOAD_ERROR:
                                    case o.a.FRAG_LOAD_TIMEOUT:
                                        var r = e.frag;
                                        if (r && "audio" !== r.type)
                                            break;
                                        if (!e.fatal) {
                                            var i = this.fragLoadError;
                                            i ? i++ : i = 1;
                                            var a = this.config;
                                            if (i <= a.fragLoadingMaxRetry) {
                                                this.fragLoadError = i;
                                                var n = Math.min(Math.pow(2, i - 1) * a.fragLoadingRetryDelay, a.fragLoadingMaxRetryTimeout);
                                                u.b.warn("AudioStreamController: frag loading failed, retry in " + n + " ms"),
                                                    this.retryDate = tt.now() + n,
                                                    this.state = Ee
                                            } else
                                                u.b.error("AudioStreamController: " + e.details + " reaches max retry, redispatch as fatal ..."),
                                                    e.fatal = !0,
                                                    this.state = we
                                        }
                                        break;
                                    case o.a.AUDIO_TRACK_LOAD_ERROR:
                                    case o.a.AUDIO_TRACK_LOAD_TIMEOUT:
                                    case o.a.KEY_LOAD_ERROR:
                                    case o.a.KEY_LOAD_TIMEOUT:
                                        this.state !== we && (this.state = e.fatal ? we : me,
                                            u.b.warn("AudioStreamController: " + e.details + " while loading frag, now switching to " + this.state + " state ..."));
                                        break;
                                    case o.a.BUFFER_FULL_ERROR:
                                        if ("audio" === e.parent && (this.state === _e || this.state === Re)) {
                                            var s = this.mediaBuffer
                                                , l = this.media.currentTime;
                                            if (s && H.isBuffered(s, l) && H.isBuffered(s, l + .5)) {
                                                var c = this.config;
                                                c.maxMaxBufferLength >= c.maxBufferLength && (c.maxMaxBufferLength /= 2,
                                                    u.b.warn("AudioStreamController: reduce max buffer length to " + c.maxMaxBufferLength + "s")),
                                                    this.state = me
                                            } else
                                                u.b.warn("AudioStreamController: buffer full error also media.currentTime is not buffered, flush audio buffer"),
                                                    this.fragCurrent = null,
                                                    this.state = Ae,
                                                    this.hls.trigger(d.a.BUFFER_FLUSHING, {
                                                        startOffset: 0,
                                                        endOffset: Number.POSITIVE_INFINITY,
                                                        type: "audio"
                                                    })
                                        }
                                }
                        }
                        ,
                        c.onBufferFlushed = function () {
                            var e = this
                                , t = this.pendingData;
                            t && t.length ? (u.b.log("AudioStreamController: appending pending audio data after buffer flushed"),
                                t.forEach((function (t) {
                                    e.hls.trigger(d.a.BUFFER_APPENDING, t)
                                }
                                )),
                                this.appended = !0,
                                this.pendingData = [],
                                this.state = Re) : (this.state = me,
                                    this.fragPrevious = null,
                                    this.tick())
                        }
                        ,
                        a = i,
                        (n = [{
                            key: "state",
                            set: function (e) {
                                if (this.state !== e) {
                                    var t = this.state;
                                    this._state = e,
                                        u.b.log("audio stream:" + t + "->" + e)
                                }
                            },
                            get: function () {
                                return this._state
                            }
                        }]) && et(a.prototype, n),
                        s && et(a, s),
                        i
                }(Oe)
                , it = function () {
                    if ("undefined" != typeof window && window.VTTCue)
                        return window.VTTCue;
                    var e = {
                        "": !0,
                        lr: !0,
                        rl: !0
                    }
                        , t = {
                            start: !0,
                            middle: !0,
                            end: !0,
                            left: !0,
                            right: !0
                        };
                    function r(e) {
                        return "string" == typeof e && (!!t[e.toLowerCase()] && e.toLowerCase())
                    }
                    function i(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var i in r)
                                e[i] = r[i]
                        }
                        return e
                    }
                    function a(t, a, n) {
                        var s = this
                            , o = {
                                enumerable: !0
                            };
                        s.hasBeenReset = !1;
                        var l = ""
                            , d = !1
                            , u = t
                            , c = a
                            , h = n
                            , f = null
                            , g = ""
                            , p = !0
                            , v = "auto"
                            , m = "start"
                            , y = 50
                            , b = "middle"
                            , T = 50
                            , E = "middle";
                        Object.defineProperty(s, "id", i({}, o, {
                            get: function () {
                                return l
                            },
                            set: function (e) {
                                l = "" + e
                            }
                        })),
                            Object.defineProperty(s, "pauseOnExit", i({}, o, {
                                get: function () {
                                    return d
                                },
                                set: function (e) {
                                    d = !!e
                                }
                            })),
                            Object.defineProperty(s, "startTime", i({}, o, {
                                get: function () {
                                    return u
                                },
                                set: function (e) {
                                    if ("number" != typeof e)
                                        throw new TypeError("Start time must be set to a number.");
                                    u = e,
                                        this.hasBeenReset = !0
                                }
                            })),
                            Object.defineProperty(s, "endTime", i({}, o, {
                                get: function () {
                                    return c
                                },
                                set: function (e) {
                                    if ("number" != typeof e)
                                        throw new TypeError("End time must be set to a number.");
                                    c = e,
                                        this.hasBeenReset = !0
                                }
                            })),
                            Object.defineProperty(s, "text", i({}, o, {
                                get: function () {
                                    return h
                                },
                                set: function (e) {
                                    h = "" + e,
                                        this.hasBeenReset = !0
                                }
                            })),
                            Object.defineProperty(s, "region", i({}, o, {
                                get: function () {
                                    return f
                                },
                                set: function (e) {
                                    f = e,
                                        this.hasBeenReset = !0
                                }
                            })),
                            Object.defineProperty(s, "vertical", i({}, o, {
                                get: function () {
                                    return g
                                },
                                set: function (t) {
                                    var r = function (t) {
                                        return "string" == typeof t && (!!e[t.toLowerCase()] && t.toLowerCase())
                                    }(t);
                                    if (!1 === r)
                                        throw new SyntaxError("An invalid or illegal string was specified.");
                                    g = r,
                                        this.hasBeenReset = !0
                                }
                            })),
                            Object.defineProperty(s, "snapToLines", i({}, o, {
                                get: function () {
                                    return p
                                },
                                set: function (e) {
                                    p = !!e,
                                        this.hasBeenReset = !0
                                }
                            })),
                            Object.defineProperty(s, "line", i({}, o, {
                                get: function () {
                                    return v
                                },
                                set: function (e) {
                                    if ("number" != typeof e && "auto" !== e)
                                        throw new SyntaxError("An invalid number or illegal string was specified.");
                                    v = e,
                                        this.hasBeenReset = !0
                                }
                            })),
                            Object.defineProperty(s, "lineAlign", i({}, o, {
                                get: function () {
                                    return m
                                },
                                set: function (e) {
                                    var t = r(e);
                                    if (!t)
                                        throw new SyntaxError("An invalid or illegal string was specified.");
                                    m = t,
                                        this.hasBeenReset = !0
                                }
                            })),
                            Object.defineProperty(s, "position", i({}, o, {
                                get: function () {
                                    return y
                                },
                                set: function (e) {
                                    if (e < 0 || e > 100)
                                        throw new Error("Position must be between 0 and 100.");
                                    y = e,
                                        this.hasBeenReset = !0
                                }
                            })),
                            Object.defineProperty(s, "positionAlign", i({}, o, {
                                get: function () {
                                    return b
                                },
                                set: function (e) {
                                    var t = r(e);
                                    if (!t)
                                        throw new SyntaxError("An invalid or illegal string was specified.");
                                    b = t,
                                        this.hasBeenReset = !0
                                }
                            })),
                            Object.defineProperty(s, "size", i({}, o, {
                                get: function () {
                                    return T
                                },
                                set: function (e) {
                                    if (e < 0 || e > 100)
                                        throw new Error("Size must be between 0 and 100.");
                                    T = e,
                                        this.hasBeenReset = !0
                                }
                            })),
                            Object.defineProperty(s, "align", i({}, o, {
                                get: function () {
                                    return E
                                },
                                set: function (e) {
                                    var t = r(e);
                                    if (!t)
                                        throw new SyntaxError("An invalid or illegal string was specified.");
                                    E = t,
                                        this.hasBeenReset = !0
                                }
                            })),
                            s.displayState = void 0
                    }
                    return a.prototype.getCueAsHTML = function () {
                        return window.WebVTT.convertCueToDOMTree(window, this.text)
                    }
                        ,
                        a
                }()
                , at = function () {
                    return {
                        decode: function (e) {
                            if (!e)
                                return "";
                            if ("string" != typeof e)
                                throw new Error("Error - expected string data.");
                            return decodeURIComponent(encodeURIComponent(e))
                        }
                    }
                };
            function nt() {
                this.window = window,
                    this.state = "INITIAL",
                    this.buffer = "",
                    this.decoder = new at,
                    this.regionList = []
            }
            function st() {
                this.values = Object.create(null)
            }
            function ot(e, t, r, i) {
                var a = i ? e.split(i) : [e];
                for (var n in a)
                    if ("string" == typeof a[n]) {
                        var s = a[n].split(r);
                        if (2 === s.length)
                            t(s[0], s[1])
                    }
            }
            st.prototype = {
                set: function (e, t) {
                    this.get(e) || "" === t || (this.values[e] = t)
                },
                get: function (e, t, r) {
                    return r ? this.has(e) ? this.values[e] : t[r] : this.has(e) ? this.values[e] : t
                },
                has: function (e) {
                    return e in this.values
                },
                alt: function (e, t, r) {
                    for (var i = 0; i < r.length; ++i)
                        if (t === r[i]) {
                            this.set(e, t);
                            break
                        }
                },
                integer: function (e, t) {
                    /^-?\d+$/.test(t) && this.set(e, parseInt(t, 10))
                },
                percent: function (e, t) {
                    return !!(t.match(/^([\d]{1,3})(\.[\d]*)?%$/) && (t = parseFloat(t)) >= 0 && t <= 100) && (this.set(e, t),
                        !0)
                }
            };
            var lt = new it(0, 0, 0)
                , dt = "middle" === lt.align ? "middle" : "center";
            function ut(e, t, r) {
                var i = e;
                function a() {
                    var t = function (e) {
                        function t(e, t, r, i) {
                            return 3600 * (0 | e) + 60 * (0 | t) + (0 | r) + (0 | i) / 1e3
                        }
                        var r = e.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
                        return r ? r[3] ? t(r[1], r[2], r[3].replace(":", ""), r[4]) : r[1] > 59 ? t(r[1], r[2], 0, r[4]) : t(0, r[1], r[2], r[4]) : null
                    }(e);
                    if (null === t)
                        throw new Error("Malformed timestamp: " + i);
                    return e = e.replace(/^[^\sa-zA-Z-]+/, ""),
                        t
                }
                function n() {
                    e = e.replace(/^\s+/, "")
                }
                if (n(),
                    t.startTime = a(),
                    n(),
                    "--\x3e" !== e.substr(0, 3))
                    throw new Error("Malformed time stamp (time stamps must be separated by '--\x3e'): " + i);
                e = e.substr(3),
                    n(),
                    t.endTime = a(),
                    n(),
                    function (e, t) {
                        var i = new st;
                        ot(e, (function (e, t) {
                            switch (e) {
                                case "region":
                                    for (var a = r.length - 1; a >= 0; a--)
                                        if (r[a].id === t) {
                                            i.set(e, r[a].region);
                                            break
                                        }
                                    break;
                                case "vertical":
                                    i.alt(e, t, ["rl", "lr"]);
                                    break;
                                case "line":
                                    var n = t.split(",")
                                        , s = n[0];
                                    i.integer(e, s),
                                        i.percent(e, s) && i.set("snapToLines", !1),
                                        i.alt(e, s, ["auto"]),
                                        2 === n.length && i.alt("lineAlign", n[1], ["start", dt, "end"]);
                                    break;
                                case "position":
                                    n = t.split(","),
                                        i.percent(e, n[0]),
                                        2 === n.length && i.alt("positionAlign", n[1], ["start", dt, "end", "line-left", "line-right", "auto"]);
                                    break;
                                case "size":
                                    i.percent(e, t);
                                    break;
                                case "align":
                                    i.alt(e, t, ["start", dt, "end", "left", "right"])
                            }
                        }
                        ), /:/, /\s/),
                            t.region = i.get("region", null),
                            t.vertical = i.get("vertical", "");
                        var a = i.get("line", "auto");
                        "auto" === a && -1 === lt.line && (a = -1),
                            t.line = a,
                            t.lineAlign = i.get("lineAlign", "start"),
                            t.snapToLines = i.get("snapToLines", !0),
                            t.size = i.get("size", 100),
                            t.align = i.get("align", dt);
                        var n = i.get("position", "auto");
                        "auto" === n && 50 === lt.position && (n = "start" === t.align || "left" === t.align ? 0 : "end" === t.align || "right" === t.align ? 100 : 50),
                            t.position = n
                    }(e, t)
            }
            function ct(e) {
                return e.replace(/<br(?: \/)?>/gi, "\n")
            }
            nt.prototype = {
                parse: function (e) {
                    var t = this;
                    function r() {
                        var e = t.buffer
                            , r = 0;
                        for (e = ct(e); r < e.length && "\r" !== e[r] && "\n" !== e[r];)
                            ++r;
                        var i = e.substr(0, r);
                        return "\r" === e[r] && ++r,
                            "\n" === e[r] && ++r,
                            t.buffer = e.substr(r),
                            i
                    }
                    e && (t.buffer += t.decoder.decode(e, {
                        stream: !0
                    }));
                    try {
                        var i;
                        if ("INITIAL" === t.state) {
                            if (!/\r\n|\n/.test(t.buffer))
                                return this;
                            var a = (i = r()).match(/^(ï»¿)?WEBVTT([ \t].*)?$/);
                            if (!a || !a[0])
                                throw new Error("Malformed WebVTT signature.");
                            t.state = "HEADER"
                        }
                        for (var n = !1; t.buffer;) {
                            if (!/\r\n|\n/.test(t.buffer))
                                return this;
                            switch (n ? n = !1 : i = r(),
                            t.state) {
                                case "HEADER":
                                    /:/.test(i) ? ot(i, (function (e, t) { }
                                    ), /:/) : i || (t.state = "ID");
                                    continue;
                                case "NOTE":
                                    i || (t.state = "ID");
                                    continue;
                                case "ID":
                                    if (/^NOTE($|[ \t])/.test(i)) {
                                        t.state = "NOTE";
                                        break
                                    }
                                    if (!i)
                                        continue;
                                    if (t.cue = new it(0, 0, ""),
                                        t.state = "CUE",
                                        -1 === i.indexOf("--\x3e")) {
                                        t.cue.id = i;
                                        continue
                                    }
                                case "CUE":
                                    try {
                                        ut(i, t.cue, t.regionList)
                                    } catch (e) {
                                        t.cue = null,
                                            t.state = "BADCUE";
                                        continue
                                    }
                                    t.state = "CUETEXT";
                                    continue;
                                case "CUETEXT":
                                    var s = -1 !== i.indexOf("--\x3e");
                                    if (!i || s && (n = !0)) {
                                        t.oncue && t.oncue(t.cue),
                                            t.cue = null,
                                            t.state = "ID";
                                        continue
                                    }
                                    t.cue.text && (t.cue.text += "\n"),
                                        t.cue.text += i;
                                    continue;
                                case "BADCUE":
                                    i || (t.state = "ID");
                                    continue
                            }
                        }
                    } catch (e) {
                        "CUETEXT" === t.state && t.cue && t.oncue && t.oncue(t.cue),
                            t.cue = null,
                            t.state = "INITIAL" === t.state ? "BADWEBVTT" : "BADCUE"
                    }
                    return this
                },
                flush: function () {
                    try {
                        if (this.buffer += this.decoder.decode(),
                            (this.cue || "HEADER" === this.state) && (this.buffer += "\n\n",
                                this.parse()),
                            "INITIAL" === this.state)
                            throw new Error("Malformed WebVTT signature.")
                    } catch (e) {
                        throw e
                    }
                    return this.onflush && this.onflush(),
                        this
                }
            };
            var ht = nt;
            function ft(e, t, r, i) {
                for (var a, n, s, o, l, d = [], u = window.VTTCue || TextTrackCue, c = 0; c < i.rows.length; c++)
                    if (s = !0,
                        o = 0,
                        l = "",
                        !(a = i.rows[c]).isEmpty()) {
                        for (var h = 0; h < a.chars.length; h++)
                            a.chars[h].uchar.match(/\s/) && s ? o++ : (l += a.chars[h].uchar,
                                s = !1);
                        a.cueStartTime = t,
                            t === r && (r += 1e-4),
                            n = new u(t, r, ct(l.trim())),
                            o >= 16 ? o-- : o++,
                            navigator.userAgent.match(/Firefox\//) ? n.line = c + 1 : n.line = c > 7 ? c - 2 : c + 1,
                            n.align = "left",
                            n.position = Math.max(0, Math.min(100, o / 32 * 100)),
                            d.push(n),
                            e && e.addCue(n)
                    }
                return d
            }
            var gt, pt = {
                42: 225,
                92: 233,
                94: 237,
                95: 243,
                96: 250,
                123: 231,
                124: 247,
                125: 209,
                126: 241,
                127: 9608,
                128: 174,
                129: 176,
                130: 189,
                131: 191,
                132: 8482,
                133: 162,
                134: 163,
                135: 9834,
                136: 224,
                137: 32,
                138: 232,
                139: 226,
                140: 234,
                141: 238,
                142: 244,
                143: 251,
                144: 193,
                145: 201,
                146: 211,
                147: 218,
                148: 220,
                149: 252,
                150: 8216,
                151: 161,
                152: 42,
                153: 8217,
                154: 9473,
                155: 169,
                156: 8480,
                157: 8226,
                158: 8220,
                159: 8221,
                160: 192,
                161: 194,
                162: 199,
                163: 200,
                164: 202,
                165: 203,
                166: 235,
                167: 206,
                168: 207,
                169: 239,
                170: 212,
                171: 217,
                172: 249,
                173: 219,
                174: 171,
                175: 187,
                176: 195,
                177: 227,
                178: 205,
                179: 204,
                180: 236,
                181: 210,
                182: 242,
                183: 213,
                184: 245,
                185: 123,
                186: 125,
                187: 92,
                188: 94,
                189: 95,
                190: 124,
                191: 8764,
                192: 196,
                193: 228,
                194: 214,
                195: 246,
                196: 223,
                197: 165,
                198: 164,
                199: 9475,
                200: 197,
                201: 229,
                202: 216,
                203: 248,
                204: 9487,
                205: 9491,
                206: 9495,
                207: 9499
            }, vt = function (e) {
                var t = e;
                return pt.hasOwnProperty(e) && (t = pt[e]),
                    String.fromCharCode(t)
            }, mt = {
                17: 1,
                18: 3,
                21: 5,
                22: 7,
                23: 9,
                16: 11,
                19: 12,
                20: 14
            }, yt = {
                17: 2,
                18: 4,
                21: 6,
                22: 8,
                23: 10,
                19: 13,
                20: 15
            }, bt = {
                25: 1,
                26: 3,
                29: 5,
                30: 7,
                31: 9,
                24: 11,
                27: 12,
                28: 14
            }, Tt = {
                25: 2,
                26: 4,
                29: 6,
                30: 8,
                31: 10,
                27: 13,
                28: 15
            }, Et = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "black", "transparent"];
            !function (e) {
                e[e.ERROR = 0] = "ERROR",
                    e[e.TEXT = 1] = "TEXT",
                    e[e.WARNING = 2] = "WARNING",
                    e[e.INFO = 2] = "INFO",
                    e[e.DEBUG = 3] = "DEBUG",
                    e[e.DATA = 3] = "DATA"
            }(gt || (gt = {}));
            var St = function () {
                function e() {
                    this.time = null,
                        this.verboseLevel = gt.ERROR
                }
                return e.prototype.log = function (e, t) {
                    this.verboseLevel >= e && u.b.log(this.time + " [" + e + "] " + t)
                }
                    ,
                    e
            }()
                , _t = function (e) {
                    for (var t = [], r = 0; r < e.length; r++)
                        t.push(e[r].toString(16));
                    return t
                }
                , Rt = function () {
                    function e(e, t, r, i, a) {
                        this.foreground = void 0,
                            this.underline = void 0,
                            this.italics = void 0,
                            this.background = void 0,
                            this.flash = void 0,
                            this.foreground = e || "white",
                            this.underline = t || !1,
                            this.italics = r || !1,
                            this.background = i || "black",
                            this.flash = a || !1
                    }
                    var t = e.prototype;
                    return t.reset = function () {
                        this.foreground = "white",
                            this.underline = !1,
                            this.italics = !1,
                            this.background = "black",
                            this.flash = !1
                    }
                        ,
                        t.setStyles = function (e) {
                            for (var t = ["foreground", "underline", "italics", "background", "flash"], r = 0; r < t.length; r++) {
                                var i = t[r];
                                e.hasOwnProperty(i) && (this[i] = e[i])
                            }
                        }
                        ,
                        t.isDefault = function () {
                            return "white" === this.foreground && !this.underline && !this.italics && "black" === this.background && !this.flash
                        }
                        ,
                        t.equals = function (e) {
                            return this.foreground === e.foreground && this.underline === e.underline && this.italics === e.italics && this.background === e.background && this.flash === e.flash
                        }
                        ,
                        t.copy = function (e) {
                            this.foreground = e.foreground,
                                this.underline = e.underline,
                                this.italics = e.italics,
                                this.background = e.background,
                                this.flash = e.flash
                        }
                        ,
                        t.toString = function () {
                            return "color=" + this.foreground + ", underline=" + this.underline + ", italics=" + this.italics + ", background=" + this.background + ", flash=" + this.flash
                        }
                        ,
                        e
                }()
                , At = function () {
                    function e(e, t, r, i, a, n) {
                        this.uchar = void 0,
                            this.penState = void 0,
                            this.uchar = e || " ",
                            this.penState = new Rt(t, r, i, a, n)
                    }
                    var t = e.prototype;
                    return t.reset = function () {
                        this.uchar = " ",
                            this.penState.reset()
                    }
                        ,
                        t.setChar = function (e, t) {
                            this.uchar = e,
                                this.penState.copy(t)
                        }
                        ,
                        t.setPenState = function (e) {
                            this.penState.copy(e)
                        }
                        ,
                        t.equals = function (e) {
                            return this.uchar === e.uchar && this.penState.equals(e.penState)
                        }
                        ,
                        t.copy = function (e) {
                            this.uchar = e.uchar,
                                this.penState.copy(e.penState)
                        }
                        ,
                        t.isEmpty = function () {
                            return " " === this.uchar && this.penState.isDefault()
                        }
                        ,
                        e
                }()
                , kt = function () {
                    function e(e) {
                        this.chars = void 0,
                            this.pos = void 0,
                            this.currPenState = void 0,
                            this.cueStartTime = void 0,
                            this.logger = void 0,
                            this.chars = [];
                        for (var t = 0; t < 100; t++)
                            this.chars.push(new At);
                        this.logger = e,
                            this.pos = 0,
                            this.currPenState = new Rt
                    }
                    var t = e.prototype;
                    return t.equals = function (e) {
                        for (var t = !0, r = 0; r < 100; r++)
                            if (!this.chars[r].equals(e.chars[r])) {
                                t = !1;
                                break
                            }
                        return t
                    }
                        ,
                        t.copy = function (e) {
                            for (var t = 0; t < 100; t++)
                                this.chars[t].copy(e.chars[t])
                        }
                        ,
                        t.isEmpty = function () {
                            for (var e = !0, t = 0; t < 100; t++)
                                if (!this.chars[t].isEmpty()) {
                                    e = !1;
                                    break
                                }
                            return e
                        }
                        ,
                        t.setCursor = function (e) {
                            this.pos !== e && (this.pos = e),
                                this.pos < 0 ? (this.logger.log(gt.DEBUG, "Negative cursor position " + this.pos),
                                    this.pos = 0) : this.pos > 100 && (this.logger.log(gt.DEBUG, "Too large cursor position " + this.pos),
                                        this.pos = 100)
                        }
                        ,
                        t.moveCursor = function (e) {
                            var t = this.pos + e;
                            if (e > 1)
                                for (var r = this.pos + 1; r < t + 1; r++)
                                    this.chars[r].setPenState(this.currPenState);
                            this.setCursor(t)
                        }
                        ,
                        t.backSpace = function () {
                            this.moveCursor(-1),
                                this.chars[this.pos].setChar(" ", this.currPenState)
                        }
                        ,
                        t.insertChar = function (e) {
                            e >= 144 && this.backSpace();
                            var t = vt(e);
                            this.pos >= 100 ? this.logger.log(gt.ERROR, "Cannot insert " + e.toString(16) + " (" + t + ") at position " + this.pos + ". Skipping it!") : (this.chars[this.pos].setChar(t, this.currPenState),
                                this.moveCursor(1))
                        }
                        ,
                        t.clearFromPos = function (e) {
                            var t;
                            for (t = e; t < 100; t++)
                                this.chars[t].reset()
                        }
                        ,
                        t.clear = function () {
                            this.clearFromPos(0),
                                this.pos = 0,
                                this.currPenState.reset()
                        }
                        ,
                        t.clearToEndOfRow = function () {
                            this.clearFromPos(this.pos)
                        }
                        ,
                        t.getTextString = function () {
                            for (var e = [], t = !0, r = 0; r < 100; r++) {
                                var i = this.chars[r].uchar;
                                " " !== i && (t = !1),
                                    e.push(i)
                            }
                            return t ? "" : e.join("")
                        }
                        ,
                        t.setPenStyles = function (e) {
                            this.currPenState.setStyles(e),
                                this.chars[this.pos].setPenState(this.currPenState)
                        }
                        ,
                        e
                }()
                , wt = function () {
                    function e(e) {
                        this.rows = void 0,
                            this.currRow = void 0,
                            this.nrRollUpRows = void 0,
                            this.lastOutputScreen = void 0,
                            this.logger = void 0,
                            this.rows = [];
                        for (var t = 0; t < 15; t++)
                            this.rows.push(new kt(e));
                        this.logger = e,
                            this.currRow = 14,
                            this.nrRollUpRows = null,
                            this.lastOutputScreen = null,
                            this.reset()
                    }
                    var t = e.prototype;
                    return t.reset = function () {
                        for (var e = 0; e < 15; e++)
                            this.rows[e].clear();
                        this.currRow = 14
                    }
                        ,
                        t.equals = function (e) {
                            for (var t = !0, r = 0; r < 15; r++)
                                if (!this.rows[r].equals(e.rows[r])) {
                                    t = !1;
                                    break
                                }
                            return t
                        }
                        ,
                        t.copy = function (e) {
                            for (var t = 0; t < 15; t++)
                                this.rows[t].copy(e.rows[t])
                        }
                        ,
                        t.isEmpty = function () {
                            for (var e = !0, t = 0; t < 15; t++)
                                if (!this.rows[t].isEmpty()) {
                                    e = !1;
                                    break
                                }
                            return e
                        }
                        ,
                        t.backSpace = function () {
                            this.rows[this.currRow].backSpace()
                        }
                        ,
                        t.clearToEndOfRow = function () {
                            this.rows[this.currRow].clearToEndOfRow()
                        }
                        ,
                        t.insertChar = function (e) {
                            this.rows[this.currRow].insertChar(e)
                        }
                        ,
                        t.setPen = function (e) {
                            this.rows[this.currRow].setPenStyles(e)
                        }
                        ,
                        t.moveCursor = function (e) {
                            this.rows[this.currRow].moveCursor(e)
                        }
                        ,
                        t.setCursor = function (e) {
                            this.logger.log(gt.INFO, "setCursor: " + e),
                                this.rows[this.currRow].setCursor(e)
                        }
                        ,
                        t.setPAC = function (e) {
                            this.logger.log(gt.INFO, "pacData = " + JSON.stringify(e));
                            var t = e.row - 1;
                            if (this.nrRollUpRows && t < this.nrRollUpRows - 1 && (t = this.nrRollUpRows - 1),
                                this.nrRollUpRows && this.currRow !== t) {
                                for (var r = 0; r < 15; r++)
                                    this.rows[r].clear();
                                var i = this.currRow + 1 - this.nrRollUpRows
                                    , a = this.lastOutputScreen;
                                if (a) {
                                    var n = a.rows[i].cueStartTime
                                        , s = this.logger.time;
                                    if (n && null !== s && n < s)
                                        for (var o = 0; o < this.nrRollUpRows; o++)
                                            this.rows[t - this.nrRollUpRows + o + 1].copy(a.rows[i + o])
                                }
                            }
                            this.currRow = t;
                            var l = this.rows[this.currRow];
                            if (null !== e.indent) {
                                var d = e.indent
                                    , u = Math.max(d - 1, 0);
                                l.setCursor(e.indent),
                                    e.color = l.chars[u].penState.foreground
                            }
                            var c = {
                                foreground: e.color,
                                underline: e.underline,
                                italics: e.italics,
                                background: "black",
                                flash: !1
                            };
                            this.setPen(c)
                        }
                        ,
                        t.setBkgData = function (e) {
                            this.logger.log(gt.INFO, "bkgData = " + JSON.stringify(e)),
                                this.backSpace(),
                                this.setPen(e),
                                this.insertChar(32)
                        }
                        ,
                        t.setRollUpRows = function (e) {
                            this.nrRollUpRows = e
                        }
                        ,
                        t.rollUp = function () {
                            if (null !== this.nrRollUpRows) {
                                this.logger.log(gt.TEXT, this.getDisplayText());
                                var e = this.currRow + 1 - this.nrRollUpRows
                                    , t = this.rows.splice(e, 1)[0];
                                t.clear(),
                                    this.rows.splice(this.currRow, 0, t),
                                    this.logger.log(gt.INFO, "Rolling up")
                            } else
                                this.logger.log(gt.DEBUG, "roll_up but nrRollUpRows not set yet")
                        }
                        ,
                        t.getDisplayText = function (e) {
                            e = e || !1;
                            for (var t = [], r = "", i = -1, a = 0; a < 15; a++) {
                                var n = this.rows[a].getTextString();
                                n && (i = a + 1,
                                    e ? t.push("Row " + i + ": '" + n + "'") : t.push(n.trim()))
                            }
                            return t.length > 0 && (r = e ? "[" + t.join(" | ") + "]" : t.join("\n")),
                                r
                        }
                        ,
                        t.getTextAndFormat = function () {
                            return this.rows
                        }
                        ,
                        e
                }()
                , Lt = function () {
                    function e(e, t, r) {
                        this.chNr = void 0,
                            this.outputFilter = void 0,
                            this.mode = void 0,
                            this.verbose = void 0,
                            this.displayedMemory = void 0,
                            this.nonDisplayedMemory = void 0,
                            this.lastOutputScreen = void 0,
                            this.currRollUpRow = void 0,
                            this.writeScreen = void 0,
                            this.cueStartTime = void 0,
                            this.logger = void 0,
                            this.chNr = e,
                            this.outputFilter = t,
                            this.mode = null,
                            this.verbose = 0,
                            this.displayedMemory = new wt(r),
                            this.nonDisplayedMemory = new wt(r),
                            this.lastOutputScreen = new wt(r),
                            this.currRollUpRow = this.displayedMemory.rows[14],
                            this.writeScreen = this.displayedMemory,
                            this.mode = null,
                            this.cueStartTime = null,
                            this.logger = r
                    }
                    var t = e.prototype;
                    return t.reset = function () {
                        this.mode = null,
                            this.displayedMemory.reset(),
                            this.nonDisplayedMemory.reset(),
                            this.lastOutputScreen.reset(),
                            this.outputFilter.reset(),
                            this.currRollUpRow = this.displayedMemory.rows[14],
                            this.writeScreen = this.displayedMemory,
                            this.mode = null,
                            this.cueStartTime = null
                    }
                        ,
                        t.getHandler = function () {
                            return this.outputFilter
                        }
                        ,
                        t.setHandler = function (e) {
                            this.outputFilter = e
                        }
                        ,
                        t.setPAC = function (e) {
                            this.writeScreen.setPAC(e)
                        }
                        ,
                        t.setBkgData = function (e) {
                            this.writeScreen.setBkgData(e)
                        }
                        ,
                        t.setMode = function (e) {
                            e !== this.mode && (this.mode = e,
                                this.logger.log(gt.INFO, "MODE=" + e),
                                "MODE_POP-ON" === this.mode ? this.writeScreen = this.nonDisplayedMemory : (this.writeScreen = this.displayedMemory,
                                    this.writeScreen.reset()),
                                "MODE_ROLL-UP" !== this.mode && (this.displayedMemory.nrRollUpRows = null,
                                    this.nonDisplayedMemory.nrRollUpRows = null),
                                this.mode = e)
                        }
                        ,
                        t.insertChars = function (e) {
                            for (var t = 0; t < e.length; t++)
                                this.writeScreen.insertChar(e[t]);
                            var r = this.writeScreen === this.displayedMemory ? "DISP" : "NON_DISP";
                            this.logger.log(gt.INFO, r + ": " + this.writeScreen.getDisplayText(!0)),
                                "MODE_PAINT-ON" !== this.mode && "MODE_ROLL-UP" !== this.mode || (this.logger.log(gt.TEXT, "DISPLAYED: " + this.displayedMemory.getDisplayText(!0)),
                                    this.outputDataUpdate())
                        }
                        ,
                        t.ccRCL = function () {
                            this.logger.log(gt.INFO, "RCL - Resume Caption Loading"),
                                this.setMode("MODE_POP-ON")
                        }
                        ,
                        t.ccBS = function () {
                            this.logger.log(gt.INFO, "BS - BackSpace"),
                                "MODE_TEXT" !== this.mode && (this.writeScreen.backSpace(),
                                    this.writeScreen === this.displayedMemory && this.outputDataUpdate())
                        }
                        ,
                        t.ccAOF = function () { }
                        ,
                        t.ccAON = function () { }
                        ,
                        t.ccDER = function () {
                            this.logger.log(gt.INFO, "DER- Delete to End of Row"),
                                this.writeScreen.clearToEndOfRow(),
                                this.outputDataUpdate()
                        }
                        ,
                        t.ccRU = function (e) {
                            this.logger.log(gt.INFO, "RU(" + e + ") - Roll Up"),
                                this.writeScreen = this.displayedMemory,
                                this.setMode("MODE_ROLL-UP"),
                                this.writeScreen.setRollUpRows(e)
                        }
                        ,
                        t.ccFON = function () {
                            this.logger.log(gt.INFO, "FON - Flash On"),
                                this.writeScreen.setPen({
                                    flash: !0
                                })
                        }
                        ,
                        t.ccRDC = function () {
                            this.logger.log(gt.INFO, "RDC - Resume Direct Captioning"),
                                this.setMode("MODE_PAINT-ON")
                        }
                        ,
                        t.ccTR = function () {
                            this.logger.log(gt.INFO, "TR"),
                                this.setMode("MODE_TEXT")
                        }
                        ,
                        t.ccRTD = function () {
                            this.logger.log(gt.INFO, "RTD"),
                                this.setMode("MODE_TEXT")
                        }
                        ,
                        t.ccEDM = function () {
                            this.logger.log(gt.INFO, "EDM - Erase Displayed Memory"),
                                this.displayedMemory.reset(),
                                this.outputDataUpdate(!0)
                        }
                        ,
                        t.ccCR = function () {
                            this.logger.log(gt.INFO, "CR - Carriage Return"),
                                this.writeScreen.rollUp(),
                                this.outputDataUpdate(!0)
                        }
                        ,
                        t.ccENM = function () {
                            this.logger.log(gt.INFO, "ENM - Erase Non-displayed Memory"),
                                this.nonDisplayedMemory.reset()
                        }
                        ,
                        t.ccEOC = function () {
                            if (this.logger.log(gt.INFO, "EOC - End Of Caption"),
                                "MODE_POP-ON" === this.mode) {
                                var e = this.displayedMemory;
                                this.displayedMemory = this.nonDisplayedMemory,
                                    this.nonDisplayedMemory = e,
                                    this.writeScreen = this.nonDisplayedMemory,
                                    this.logger.log(gt.TEXT, "DISP: " + this.displayedMemory.getDisplayText())
                            }
                            this.outputDataUpdate(!0)
                        }
                        ,
                        t.ccTO = function (e) {
                            this.logger.log(gt.INFO, "TO(" + e + ") - Tab Offset"),
                                this.writeScreen.moveCursor(e)
                        }
                        ,
                        t.ccMIDROW = function (e) {
                            var t = {
                                flash: !1
                            };
                            if (t.underline = e % 2 == 1,
                                t.italics = e >= 46,
                                t.italics)
                                t.foreground = "white";
                            else {
                                var r = Math.floor(e / 2) - 16;
                                t.foreground = ["white", "green", "blue", "cyan", "red", "yellow", "magenta"][r]
                            }
                            this.logger.log(gt.INFO, "MIDROW: " + JSON.stringify(t)),
                                this.writeScreen.setPen(t)
                        }
                        ,
                        t.outputDataUpdate = function (e) {
                            void 0 === e && (e = !1);
                            var t = this.logger.time;
                            null !== t && this.outputFilter && (null !== this.cueStartTime || this.displayedMemory.isEmpty() ? this.displayedMemory.equals(this.lastOutputScreen) || (this.outputFilter.newCue(this.cueStartTime, t, this.lastOutputScreen),
                                e && this.outputFilter.dispatchCue && this.outputFilter.dispatchCue(),
                                this.cueStartTime = this.displayedMemory.isEmpty() ? null : t) : this.cueStartTime = t,
                                this.lastOutputScreen.copy(this.displayedMemory))
                        }
                        ,
                        t.cueSplitAtTime = function (e) {
                            this.outputFilter && (this.displayedMemory.isEmpty() || (this.outputFilter.newCue && this.outputFilter.newCue(this.cueStartTime, e, this.displayedMemory),
                                this.cueStartTime = e))
                        }
                        ,
                        e
                }();
            function Dt(e, t, r) {
                r.a = e,
                    r.b = t
            }
            function Ot(e, t, r) {
                return r.a === e && r.b === t
            }
            var Ct = function () {
                function e(e, t, r) {
                    this.channels = void 0,
                        this.currentChannel = 0,
                        this.cmdHistory = void 0,
                        this.logger = void 0;
                    var i = new St;
                    this.channels = [null, new Lt(e, t, i), new Lt(e + 1, r, i)],
                        this.cmdHistory = {
                            a: null,
                            b: null
                        },
                        this.logger = i
                }
                var t = e.prototype;
                return t.getHandler = function (e) {
                    return this.channels[e].getHandler()
                }
                    ,
                    t.setHandler = function (e, t) {
                        this.channels[e].setHandler(t)
                    }
                    ,
                    t.addData = function (e, t) {
                        var r, i, a, n = !1;
                        this.logger.time = e;
                        for (var s = 0; s < t.length; s += 2)
                            if (i = 127 & t[s],
                                a = 127 & t[s + 1],
                                0 !== i || 0 !== a) {
                                if (this.logger.log(gt.DATA, "[" + _t([t[s], t[s + 1]]) + "] -> (" + _t([i, a]) + ")"),
                                    (r = this.parseCmd(i, a)) || (r = this.parseMidrow(i, a)),
                                    r || (r = this.parsePAC(i, a)),
                                    r || (r = this.parseBackgroundAttributes(i, a)),
                                    !r && (n = this.parseChars(i, a))) {
                                    var o = this.currentChannel;
                                    if (o && o > 0)
                                        this.channels[o].insertChars(n);
                                    else
                                        this.logger.log(gt.WARNING, "No channel found yet. TEXT-MODE?")
                                }
                                r || n || this.logger.log(gt.WARNING, "Couldn't parse cleaned data " + _t([i, a]) + " orig: " + _t([t[s], t[s + 1]]))
                            }
                    }
                    ,
                    t.parseCmd = function (e, t) {
                        var r = this.cmdHistory;
                        if (!((20 === e || 28 === e || 21 === e || 29 === e) && t >= 32 && t <= 47) && !((23 === e || 31 === e) && t >= 33 && t <= 35))
                            return !1;
                        if (Ot(e, t, r))
                            return Dt(null, null, r),
                                this.logger.log(gt.DEBUG, "Repeated command (" + _t([e, t]) + ") is dropped"),
                                !0;
                        var i = 20 === e || 21 === e || 23 === e ? 1 : 2
                            , a = this.channels[i];
                        return 20 === e || 21 === e || 28 === e || 29 === e ? 32 === t ? a.ccRCL() : 33 === t ? a.ccBS() : 34 === t ? a.ccAOF() : 35 === t ? a.ccAON() : 36 === t ? a.ccDER() : 37 === t ? a.ccRU(2) : 38 === t ? a.ccRU(3) : 39 === t ? a.ccRU(4) : 40 === t ? a.ccFON() : 41 === t ? a.ccRDC() : 42 === t ? a.ccTR() : 43 === t ? a.ccRTD() : 44 === t ? a.ccEDM() : 45 === t ? a.ccCR() : 46 === t ? a.ccENM() : 47 === t && a.ccEOC() : a.ccTO(t - 32),
                            Dt(e, t, r),
                            this.currentChannel = i,
                            !0
                    }
                    ,
                    t.parseMidrow = function (e, t) {
                        var r = 0;
                        if ((17 === e || 25 === e) && t >= 32 && t <= 47) {
                            if ((r = 17 === e ? 1 : 2) !== this.currentChannel)
                                return this.logger.log(gt.ERROR, "Mismatch channel in midrow parsing"),
                                    !1;
                            var i = this.channels[r];
                            return !!i && (i.ccMIDROW(t),
                                this.logger.log(gt.DEBUG, "MIDROW (" + _t([e, t]) + ")"),
                                !0)
                        }
                        return !1
                    }
                    ,
                    t.parsePAC = function (e, t) {
                        var r, i = this.cmdHistory;
                        if (!((e >= 17 && e <= 23 || e >= 25 && e <= 31) && t >= 64 && t <= 127) && !((16 === e || 24 === e) && t >= 64 && t <= 95))
                            return !1;
                        if (Ot(e, t, i))
                            return Dt(null, null, i),
                                !0;
                        var a = e <= 23 ? 1 : 2;
                        r = t >= 64 && t <= 95 ? 1 === a ? mt[e] : bt[e] : 1 === a ? yt[e] : Tt[e];
                        var n = this.channels[a];
                        return !!n && (n.setPAC(this.interpretPAC(r, t)),
                            Dt(e, t, i),
                            this.currentChannel = a,
                            !0)
                    }
                    ,
                    t.interpretPAC = function (e, t) {
                        var r = t
                            , i = {
                                color: null,
                                italics: !1,
                                indent: null,
                                underline: !1,
                                row: e
                            };
                        return r = t > 95 ? t - 96 : t - 64,
                            i.underline = 1 == (1 & r),
                            r <= 13 ? i.color = ["white", "green", "blue", "cyan", "red", "yellow", "magenta", "white"][Math.floor(r / 2)] : r <= 15 ? (i.italics = !0,
                                i.color = "white") : i.indent = 4 * Math.floor((r - 16) / 2),
                            i
                    }
                    ,
                    t.parseChars = function (e, t) {
                        var r, i = null, a = null;
                        if (e >= 25 ? (r = 2,
                            a = e - 8) : (r = 1,
                                a = e),
                            a >= 17 && a <= 19) {
                            var n = t;
                            n = 17 === a ? t + 80 : 18 === a ? t + 112 : t + 144,
                                this.logger.log(gt.INFO, "Special char '" + vt(n) + "' in channel " + r),
                                i = [n]
                        } else
                            e >= 32 && e <= 127 && (i = 0 === t ? [e] : [e, t]);
                        if (i) {
                            var s = _t(i);
                            this.logger.log(gt.DEBUG, "Char codes =  " + s.join(",")),
                                Dt(e, t, this.cmdHistory)
                        }
                        return i
                    }
                    ,
                    t.parseBackgroundAttributes = function (e, t) {
                        var r;
                        if (!((16 === e || 24 === e) && t >= 32 && t <= 47) && !((23 === e || 31 === e) && t >= 45 && t <= 47))
                            return !1;
                        var i = {};
                        16 === e || 24 === e ? (r = Math.floor((t - 32) / 2),
                            i.background = Et[r],
                            t % 2 == 1 && (i.background = i.background + "_semi")) : 45 === t ? i.background = "transparent" : (i.foreground = "black",
                                47 === t && (i.underline = !0));
                        var a = e <= 23 ? 1 : 2;
                        return this.channels[a].setBkgData(i),
                            Dt(e, t, this.cmdHistory),
                            !0
                    }
                    ,
                    t.reset = function () {
                        for (var e = 0; e < Object.keys(this.channels).length; e++) {
                            var t = this.channels[e];
                            t && t.reset()
                        }
                        this.cmdHistory = {
                            a: null,
                            b: null
                        }
                    }
                    ,
                    t.cueSplitAtTime = function (e) {
                        for (var t = 0; t < this.channels.length; t++) {
                            var r = this.channels[t];
                            r && r.cueSplitAtTime(e)
                        }
                    }
                    ,
                    e
            }()
                , It = function () {
                    function e(e, t) {
                        this.timelineController = void 0,
                            this.cueRanges = [],
                            this.trackName = void 0,
                            this.startTime = null,
                            this.endTime = null,
                            this.screen = null,
                            this.timelineController = e,
                            this.trackName = t
                    }
                    var t = e.prototype;
                    return t.dispatchCue = function () {
                        null !== this.startTime && (this.timelineController.addCues(this.trackName, this.startTime, this.endTime, this.screen, this.cueRanges),
                            this.startTime = null)
                    }
                        ,
                        t.newCue = function (e, t, r) {
                            (null === this.startTime || this.startTime > e) && (this.startTime = e),
                                this.endTime = t,
                                this.screen = r,
                                this.timelineController.createCaptionsTrack(this.trackName)
                        }
                        ,
                        t.reset = function () {
                            this.cueRanges = []
                        }
                        ,
                        e
                }()
                , Pt = function (e, t, r) {
                    return e.substr(r || 0, t.length) === t
                }
                , xt = function (e) {
                    for (var t = 5381, r = e.length; r;)
                        t = 33 * t ^ e.charCodeAt(--r);
                    return (t >>> 0).toString()
                }
                , Mt = {
                    parse: function (e, t, r, i, a, n) {
                        var s, o = Object(Fe.b)(new Uint8Array(e)).trim().replace(/\r\n|\n\r|\n|\r/g, "\n").split("\n"), d = "00:00.000", u = 0, c = 0, h = 0, f = [], g = !0, p = !1, v = new ht;
                        v.oncue = function (e) {
                            var t = r[i]
                                , a = r.ccOffset;
                            t && t.new && (void 0 !== c ? a = r.ccOffset = t.start : function (e, t, r) {
                                var i = e[t]
                                    , a = e[i.prevCC];
                                if (!a || !a.new && i.new)
                                    return e.ccOffset = e.presentationOffset = i.start,
                                        void (i.new = !1);
                                for (; a && a.new;)
                                    e.ccOffset += i.start - a.start,
                                        i.new = !1,
                                        a = e[(i = a).prevCC];
                                e.presentationOffset = r
                            }(r, i, h)),
                                h && (a = h - r.presentationOffset),
                                p && (e.startTime += a - c,
                                    e.endTime += a - c),
                                e.id = xt(e.startTime.toString()) + xt(e.endTime.toString()) + xt(e.text),
                                e.text = decodeURIComponent(encodeURIComponent(e.text)),
                                e.endTime > 0 && f.push(e)
                        }
                            ,
                            v.onparsingerror = function (e) {
                                s = e
                            }
                            ,
                            v.onflush = function () {
                                s && n ? n(s) : a(f)
                            }
                            ,
                            o.forEach((function (e) {
                                if (g) {
                                    if (Pt(e, "X-TIMESTAMP-MAP=")) {
                                        g = !1,
                                            p = !0,
                                            e.substr(16).split(",").forEach((function (e) {
                                                Pt(e, "LOCAL:") ? d = e.substr(6) : Pt(e, "MPEGTS:") && (u = parseInt(e.substr(7)))
                                            }
                                            ));
                                        try {
                                            t + (9e4 * r[i].start || 0) < 0 && (t += 8589934592),
                                                u -= t,
                                                c = function (e) {
                                                    var t = parseInt(e.substr(-3))
                                                        , r = parseInt(e.substr(-6, 2))
                                                        , i = parseInt(e.substr(-9, 2))
                                                        , a = e.length > 9 ? parseInt(e.substr(0, e.indexOf(":"))) : 0;
                                                    if (!(Object(l.a)(t) && Object(l.a)(r) && Object(l.a)(i) && Object(l.a)(a)))
                                                        throw Error("Malformed X-TIMESTAMP-MAP: Local:" + e);
                                                    return t += 1e3 * r,
                                                        t += 6e4 * i,
                                                        t += 36e5 * a
                                                }(d) / 1e3,
                                                h = u / 9e4
                                        } catch (e) {
                                            p = !1,
                                                s = e
                                        }
                                        return
                                    }
                                    "" === e && (g = !1)
                                }
                                v.parse(e + "\n")
                            }
                            )),
                            v.flush()
                    }
                };
            function Ft(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function Ut(e, t) {
                return e && e.label === t.name && !(e.textTrack1 || e.textTrack2)
            }
            var Nt = function (e) {
                var t, r;
                function i(t) {
                    var r;
                    if ((r = e.call(this, t, d.a.MEDIA_ATTACHING, d.a.MEDIA_DETACHING, d.a.FRAG_PARSING_USERDATA, d.a.FRAG_DECRYPTED, d.a.MANIFEST_LOADING, d.a.MANIFEST_LOADED, d.a.FRAG_LOADED, d.a.INIT_PTS_FOUND) || this).media = null,
                        r.config = void 0,
                        r.enabled = !0,
                        r.Cues = void 0,
                        r.textTracks = [],
                        r.tracks = [],
                        r.initPTS = [],
                        r.unparsedVttFrags = [],
                        r.captionsTracks = {},
                        r.nonNativeCaptionsTracks = {},
                        r.captionsProperties = void 0,
                        r.cea608Parser1 = void 0,
                        r.cea608Parser2 = void 0,
                        r.lastSn = -1,
                        r.prevCC = -1,
                        r.vttCCs = {
                            ccOffset: 0,
                            presentationOffset: 0,
                            0: {
                                start: 0,
                                prevCC: -1,
                                new: !1
                            }
                        },
                        r.hls = t,
                        r.config = t.config,
                        r.Cues = t.config.cueHandler,
                        r.captionsProperties = {
                            textTrack1: {
                                label: r.config.captionsTextTrack1Label,
                                languageCode: r.config.captionsTextTrack1LanguageCode
                            },
                            textTrack2: {
                                label: r.config.captionsTextTrack2Label,
                                languageCode: r.config.captionsTextTrack2LanguageCode
                            },
                            textTrack3: {
                                label: r.config.captionsTextTrack3Label,
                                languageCode: r.config.captionsTextTrack3LanguageCode
                            },
                            textTrack4: {
                                label: r.config.captionsTextTrack4Label,
                                languageCode: r.config.captionsTextTrack4LanguageCode
                            }
                        },
                        r.config.enableCEA708Captions) {
                        var i = new It(Ft(r), "textTrack1")
                            , a = new It(Ft(r), "textTrack2")
                            , n = new It(Ft(r), "textTrack3")
                            , s = new It(Ft(r), "textTrack4");
                        r.cea608Parser1 = new Ct(1, i, a),
                            r.cea608Parser2 = new Ct(3, n, s)
                    }
                    return r
                }
                r = e,
                    (t = i).prototype = Object.create(r.prototype),
                    t.prototype.constructor = t,
                    t.__proto__ = r;
                var a = i.prototype;
                return a.addCues = function (e, t, r, i, a) {
                    for (var n, s, o, l, u = !1, c = a.length; c--;) {
                        var h = a[c]
                            , f = (n = h[0],
                                s = h[1],
                                o = t,
                                l = r,
                                Math.min(s, l) - Math.max(n, o));
                        if (f >= 0 && (h[0] = Math.min(h[0], t),
                            h[1] = Math.max(h[1], r),
                            u = !0,
                            f / (r - t) > .5))
                            return
                    }
                    if (u || a.push([t, r]),
                        this.config.renderTextTracksNatively)
                        this.Cues.newCue(this.captionsTracks[e], t, r, i);
                    else {
                        var g = this.Cues.newCue(null, t, r, i);
                        this.hls.trigger(d.a.CUES_PARSED, {
                            type: "captions",
                            cues: g,
                            track: e
                        })
                    }
                }
                    ,
                    a.onInitPtsFound = function (e) {
                        var t = this
                            , r = e.frag
                            , i = e.id
                            , a = e.initPTS
                            , n = this.unparsedVttFrags;
                        "main" === i && (this.initPTS[r.cc] = a),
                            n.length && (this.unparsedVttFrags = [],
                                n.forEach((function (e) {
                                    t.onFragLoaded(e)
                                }
                                )))
                    }
                    ,
                    a.getExistingTrack = function (e) {
                        var t = this.media;
                        if (t)
                            for (var r = 0; r < t.textTracks.length; r++) {
                                var i = t.textTracks[r];
                                if (i[e])
                                    return i
                            }
                        return null
                    }
                    ,
                    a.createCaptionsTrack = function (e) {
                        this.config.renderTextTracksNatively ? this.createNativeTrack(e) : this.createNonNativeTrack(e)
                    }
                    ,
                    a.createNativeTrack = function (e) {
                        if (!this.captionsTracks[e]) {
                            var t = this.captionsProperties
                                , r = this.captionsTracks
                                , i = this.media
                                , a = t[e]
                                , n = a.label
                                , s = a.languageCode
                                , o = this.getExistingTrack(e);
                            if (o)
                                r[e] = o,
                                    Ne(r[e]),
                                    Ue(r[e], i);
                            else {
                                var l = this.createTextTrack("captions", n, s);
                                l && (l[e] = !0,
                                    r[e] = l)
                            }
                        }
                    }
                    ,
                    a.createNonNativeTrack = function (e) {
                        if (!this.nonNativeCaptionsTracks[e]) {
                            var t = this.captionsProperties[e];
                            if (t) {
                                var r = {
                                    _id: e,
                                    label: t.label,
                                    kind: "captions",
                                    default: !!t.media && !!t.media.default,
                                    closedCaptions: t.media
                                };
                                this.nonNativeCaptionsTracks[e] = r,
                                    this.hls.trigger(d.a.NON_NATIVE_TEXT_TRACKS_FOUND, {
                                        tracks: [r]
                                    })
                            }
                        }
                    }
                    ,
                    a.createTextTrack = function (e, t, r) {
                        var i = this.media;
                        if (i)
                            return i.addTextTrack(e, t, r)
                    }
                    ,
                    a.destroy = function () {
                        e.prototype.destroy.call(this)
                    }
                    ,
                    a.onMediaAttaching = function (e) {
                        this.media = e.media,
                            this._cleanTracks()
                    }
                    ,
                    a.onMediaDetaching = function () {
                        var e = this.captionsTracks;
                        Object.keys(e).forEach((function (t) {
                            Ne(e[t]),
                                delete e[t]
                        }
                        )),
                            this.nonNativeCaptionsTracks = {}
                    }
                    ,
                    a.onManifestLoading = function () {
                        this.lastSn = -1,
                            this.prevCC = -1,
                            this.vttCCs = {
                                ccOffset: 0,
                                presentationOffset: 0,
                                0: {
                                    start: 0,
                                    prevCC: -1,
                                    new: !1
                                }
                            },
                            this._cleanTracks(),
                            this.tracks = [],
                            this.captionsTracks = {},
                            this.nonNativeCaptionsTracks = {}
                    }
                    ,
                    a._cleanTracks = function () {
                        var e = this.media;
                        if (e) {
                            var t = e.textTracks;
                            if (t)
                                for (var r = 0; r < t.length; r++)
                                    Ne(t[r])
                        }
                    }
                    ,
                    a.onManifestLoaded = function (e) {
                        var t = this;
                        if (this.textTracks = [],
                            this.unparsedVttFrags = this.unparsedVttFrags || [],
                            this.initPTS = [],
                            this.cea608Parser1 && this.cea608Parser2 && (this.cea608Parser1.reset(),
                                this.cea608Parser2.reset()),
                            this.config.enableWebVTT) {
                            var r = e.subtitles || []
                                , i = this.tracks && r && this.tracks.length === r.length;
                            if (this.tracks = e.subtitles || [],
                                this.config.renderTextTracksNatively) {
                                var a = this.media ? this.media.textTracks : [];
                                this.tracks.forEach((function (e, r) {
                                    var i;
                                    if (r < a.length) {
                                        for (var n = null, s = 0; s < a.length; s++)
                                            if (Ut(a[s], e)) {
                                                n = a[s];
                                                break
                                            }
                                        n && (i = n)
                                    }
                                    i || (i = t.createTextTrack("subtitles", e.name, e.lang)),
                                        e.default ? i.mode = t.hls.subtitleDisplay ? "showing" : "hidden" : i.mode = "disabled",
                                        t.textTracks.push(i)
                                }
                                ))
                            } else if (!i && this.tracks && this.tracks.length) {
                                var n = this.tracks.map((function (e) {
                                    return {
                                        label: e.name,
                                        kind: e.type.toLowerCase(),
                                        default: e.default,
                                        subtitleTrack: e
                                    }
                                }
                                ));
                                this.hls.trigger(d.a.NON_NATIVE_TEXT_TRACKS_FOUND, {
                                    tracks: n
                                })
                            }
                        }
                        this.config.enableCEA708Captions && e.captions && e.captions.forEach((function (e) {
                            var r = /(?:CC|SERVICE)([1-4])/.exec(e.instreamId);
                            if (r) {
                                var i = "textTrack" + r[1]
                                    , a = t.captionsProperties[i];
                                a && (a.label = e.name,
                                    e.lang && (a.languageCode = e.lang),
                                    a.media = e)
                            }
                        }
                        ))
                    }
                    ,
                    a.onFragLoaded = function (e) {
                        var t = e.frag
                            , r = e.payload
                            , i = this.cea608Parser1
                            , a = this.cea608Parser2
                            , n = this.initPTS
                            , s = this.lastSn
                            , o = this.unparsedVttFrags;
                        if ("main" === t.type) {
                            var u = t.sn;
                            t.sn !== s + 1 && i && a && (i.reset(),
                                a.reset()),
                                this.lastSn = u
                        } else if ("subtitle" === t.type)
                            if (r.byteLength) {
                                if (!Object(l.a)(n[t.cc]))
                                    return o.push(e),
                                        void (n.length && this.hls.trigger(d.a.SUBTITLE_FRAG_PROCESSED, {
                                            success: !1,
                                            frag: t
                                        }));
                                var c = t.decryptdata;
                                null != c && null != c.key && "AES-128" === c.method || this._parseVTTs(t, r)
                            } else
                                this.hls.trigger(d.a.SUBTITLE_FRAG_PROCESSED, {
                                    success: !1,
                                    frag: t
                                })
                    }
                    ,
                    a._parseVTTs = function (e, t) {
                        var r = this
                            , i = this.hls
                            , a = this.prevCC
                            , n = this.textTracks
                            , s = this.vttCCs;
                        s[e.cc] || (s[e.cc] = {
                            start: e.start,
                            prevCC: a,
                            new: !0
                        },
                            this.prevCC = e.cc),
                            Mt.parse(t, this.initPTS[e.cc], s, e.cc, (function (t) {
                                if (r.config.renderTextTracksNatively) {
                                    var a = n[e.level];
                                    if ("disabled" === a.mode)
                                        return void i.trigger(d.a.SUBTITLE_FRAG_PROCESSED, {
                                            success: !1,
                                            frag: e
                                        });
                                    t.forEach((function (e) {
                                        if (!a.cues.getCueById(e.id))
                                            try {
                                                if (a.addCue(e),
                                                    !a.cues.getCueById(e.id))
                                                    throw new Error("addCue is failed for: " + e)
                                            } catch (r) {
                                                u.b.debug("Failed occurred on adding cues: " + r);
                                                var t = new window.TextTrackCue(e.startTime, e.endTime, e.text);
                                                t.id = e.id,
                                                    a.addCue(t)
                                            }
                                    }
                                    ))
                                } else {
                                    var s = r.tracks[e.level].default ? "default" : "subtitles" + e.level;
                                    i.trigger(d.a.CUES_PARSED, {
                                        type: "subtitles",
                                        cues: t,
                                        track: s
                                    })
                                }
                                i.trigger(d.a.SUBTITLE_FRAG_PROCESSED, {
                                    success: !0,
                                    frag: e
                                })
                            }
                            ), (function (t) {
                                u.b.log("Failed to parse VTT cue: " + t),
                                    i.trigger(d.a.SUBTITLE_FRAG_PROCESSED, {
                                        success: !1,
                                        frag: e
                                    })
                            }
                            ))
                    }
                    ,
                    a.onFragDecrypted = function (e) {
                        var t = e.frag
                            , r = e.payload;
                        if ("subtitle" === t.type) {
                            if (!Object(l.a)(this.initPTS[t.cc]))
                                return void this.unparsedVttFrags.push(e);
                            this._parseVTTs(t, r)
                        }
                    }
                    ,
                    a.onFragParsingUserdata = function (e) {
                        var t = this.cea608Parser1
                            , r = this.cea608Parser2;
                        if (this.enabled && t && r)
                            for (var i = 0; i < e.samples.length; i++) {
                                var a = e.samples[i].bytes;
                                if (a) {
                                    var n = this.extractCea608Data(a);
                                    t.addData(e.samples[i].pts, n[0]),
                                        r.addData(e.samples[i].pts, n[1])
                                }
                            }
                    }
                    ,
                    a.extractCea608Data = function (e) {
                        for (var t = 31 & e[0], r = 2, i = [[], []], a = 0; a < t; a++) {
                            var n = e[r++]
                                , s = 127 & e[r++]
                                , o = 127 & e[r++]
                                , l = 3 & n;
                            0 === s && 0 === o || 0 != (4 & n) && (0 !== l && 1 !== l || (i[l].push(s),
                                i[l].push(o)))
                        }
                        return i
                    }
                    ,
                    i
            }(h);
            function Bt(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i)
                }
            }
            function Gt(e) {
                for (var t = [], r = 0; r < e.length; r++) {
                    var i = e[r];
                    "subtitles" === i.kind && i.label && t.push(e[r])
                }
                return t
            }
            var Kt = function (e) {
                var t, r;
                function i(t) {
                    var r;
                    return (r = e.call(this, t, d.a.MEDIA_ATTACHED, d.a.MEDIA_DETACHING, d.a.MANIFEST_LOADED, d.a.SUBTITLE_TRACK_LOADED) || this).tracks = [],
                        r.trackId = -1,
                        r.media = null,
                        r.stopped = !0,
                        r.subtitleDisplay = !0,
                        r.queuedDefaultTrack = null,
                        r
                }
                r = e,
                    (t = i).prototype = Object.create(r.prototype),
                    t.prototype.constructor = t,
                    t.__proto__ = r;
                var a, n, s, o = i.prototype;
                return o.destroy = function () {
                    h.prototype.destroy.call(this)
                }
                    ,
                    o.onMediaAttached = function (e) {
                        var t = this;
                        this.media = e.media,
                            this.media && (Object(l.a)(this.queuedDefaultTrack) && (this.subtitleTrack = this.queuedDefaultTrack,
                                this.queuedDefaultTrack = null),
                                this.trackChangeListener = this._onTextTracksChanged.bind(this),
                                this.useTextTrackPolling = !(this.media.textTracks && "onchange" in this.media.textTracks),
                                this.useTextTrackPolling ? this.subtitlePollingInterval = setInterval((function () {
                                    t.trackChangeListener()
                                }
                                ), 500) : this.media.textTracks.addEventListener("change", this.trackChangeListener))
                    }
                    ,
                    o.onMediaDetaching = function () {
                        this.media && (this.useTextTrackPolling ? clearInterval(this.subtitlePollingInterval) : this.media.textTracks.removeEventListener("change", this.trackChangeListener),
                            Object(l.a)(this.subtitleTrack) && (this.queuedDefaultTrack = this.subtitleTrack),
                            Gt(this.media.textTracks).forEach((function (e) {
                                Ne(e)
                            }
                            )),
                            this.subtitleTrack = -1,
                            this.media = null)
                    }
                    ,
                    o.onManifestLoaded = function (e) {
                        var t = this
                            , r = e.subtitles || [];
                        this.tracks = r,
                            this.hls.trigger(d.a.SUBTITLE_TRACKS_UPDATED, {
                                subtitleTracks: r
                            }),
                            r.forEach((function (e) {
                                e.default && (t.media ? t.subtitleTrack = e.id : t.queuedDefaultTrack = e.id)
                            }
                            ))
                    }
                    ,
                    o.onSubtitleTrackLoaded = function (e) {
                        var t = this
                            , r = e.id
                            , i = e.details
                            , a = this.trackId
                            , n = this.tracks
                            , s = n[a];
                        if (r >= n.length || r !== a || !s || this.stopped)
                            this._clearReloadTimer();
                        else if (u.b.log("subtitle track " + r + " loaded"),
                            i.live) {
                            var o = ae(s.details, i, e.stats.trequest);
                            u.b.log("Reloading live subtitle playlist in " + o + "ms"),
                                this.timer = setTimeout((function () {
                                    t._loadCurrentTrack()
                                }
                                ), o)
                        } else
                            this._clearReloadTimer()
                    }
                    ,
                    o.startLoad = function () {
                        this.stopped = !1,
                            this._loadCurrentTrack()
                    }
                    ,
                    o.stopLoad = function () {
                        this.stopped = !0,
                            this._clearReloadTimer()
                    }
                    ,
                    o._clearReloadTimer = function () {
                        this.timer && (clearTimeout(this.timer),
                            this.timer = null)
                    }
                    ,
                    o._loadCurrentTrack = function () {
                        var e = this.trackId
                            , t = this.tracks
                            , r = this.hls
                            , i = t[e];
                        e < 0 || !i || i.details && !i.details.live || (u.b.log("Loading subtitle track " + e),
                            r.trigger(d.a.SUBTITLE_TRACK_LOADING, {
                                url: i.url,
                                id: e
                            }))
                    }
                    ,
                    o._toggleTrackModes = function (e) {
                        var t = this.media
                            , r = this.subtitleDisplay
                            , i = this.trackId;
                        if (t) {
                            var a = Gt(t.textTracks);
                            if (-1 === e)
                                [].slice.call(a).forEach((function (e) {
                                    e.mode = "disabled"
                                }
                                ));
                            else {
                                var n = a[i];
                                n && (n.mode = "disabled")
                            }
                            var s = a[e];
                            s && (s.mode = r ? "showing" : "hidden")
                        }
                    }
                    ,
                    o._setSubtitleTrackInternal = function (e) {
                        var t = this.hls
                            , r = this.tracks;
                        !Object(l.a)(e) || e < -1 || e >= r.length || (this.trackId = e,
                            u.b.log("Switching to subtitle track " + e),
                            t.trigger(d.a.SUBTITLE_TRACK_SWITCH, {
                                id: e
                            }),
                            this._loadCurrentTrack())
                    }
                    ,
                    o._onTextTracksChanged = function () {
                        if (this.media && this.hls.config.renderTextTracksNatively) {
                            for (var e = -1, t = Gt(this.media.textTracks), r = 0; r < t.length; r++)
                                if ("hidden" === t[r].mode)
                                    e = r;
                                else if ("showing" === t[r].mode) {
                                    e = r;
                                    break
                                }
                            this.subtitleTrack = e
                        }
                    }
                    ,
                    a = i,
                    (n = [{
                        key: "subtitleTracks",
                        get: function () {
                            return this.tracks
                        }
                    }, {
                        key: "subtitleTrack",
                        get: function () {
                            return this.trackId
                        },
                        set: function (e) {
                            this.trackId !== e && (this._toggleTrackModes(e),
                                this._setSubtitleTrackInternal(e))
                        }
                    }]) && Bt(a.prototype, n),
                    s && Bt(a, s),
                    i
            }(h)
                , jt = r(7);
            var Ht, Vt = window.performance, Yt = function (e) {
                var t, r;
                function i(t, r) {
                    var i;
                    return (i = e.call(this, t, d.a.MEDIA_ATTACHED, d.a.MEDIA_DETACHING, d.a.ERROR, d.a.KEY_LOADED, d.a.FRAG_LOADED, d.a.SUBTITLE_TRACKS_UPDATED, d.a.SUBTITLE_TRACK_SWITCH, d.a.SUBTITLE_TRACK_LOADED, d.a.SUBTITLE_FRAG_PROCESSED, d.a.LEVEL_UPDATED) || this).fragmentTracker = r,
                        i.config = t.config,
                        i.state = pe,
                        i.tracks = [],
                        i.tracksBuffered = [],
                        i.currentTrackId = -1,
                        i.decrypter = new jt.a(t, t.config),
                        i.lastAVStart = 0,
                        i._onMediaSeeking = i.onMediaSeeking.bind(function (e) {
                            if (void 0 === e)
                                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(i)),
                        i
                }
                r = e,
                    (t = i).prototype = Object.create(r.prototype),
                    t.prototype.constructor = t,
                    t.__proto__ = r;
                var a = i.prototype;
                return a.startLoad = function () {
                    this.stopLoad(),
                        this.state = me;
                    var e = this.tracks[this.currentTrackId];
                    e && e.details && (this.setInterval(500),
                        this.tick())
                }
                    ,
                    a.onSubtitleFragProcessed = function (e) {
                        var t = e.frag
                            , r = e.success;
                        if (this.fragPrevious = t,
                            this.state = me,
                            r) {
                            var i = this.tracksBuffered[this.currentTrackId];
                            if (i) {
                                for (var a, n = t.start, s = 0; s < i.length; s++)
                                    if (n >= i[s].start && n <= i[s].end) {
                                        a = i[s];
                                        break
                                    }
                                var o = t.start + t.duration;
                                a ? a.end = o : (a = {
                                    start: n,
                                    end: o
                                },
                                    i.push(a))
                            }
                        }
                    }
                    ,
                    a.onMediaAttached = function (e) {
                        var t = e.media;
                        this.media = t,
                            t.addEventListener("seeking", this._onMediaSeeking),
                            this.state = me
                    }
                    ,
                    a.onMediaDetaching = function () {
                        var e = this;
                        this.media && (this.media.removeEventListener("seeking", this._onMediaSeeking),
                            this.fragmentTracker.removeAllFragments(),
                            this.currentTrackId = -1,
                            this.tracks.forEach((function (t) {
                                e.tracksBuffered[t.id] = []
                            }
                            )),
                            this.media = null,
                            this.state = pe)
                    }
                    ,
                    a.onError = function (e) {
                        var t = e.frag;
                        t && "subtitle" === t.type && (this.fragCurrent && this.fragCurrent.loader && this.fragCurrent.loader.abort(),
                            this.state = me)
                    }
                    ,
                    a.onSubtitleTracksUpdated = function (e) {
                        var t = this;
                        u.b.log("subtitle tracks updated"),
                            this.tracksBuffered = [],
                            this.tracks = e.subtitleTracks,
                            this.tracks.forEach((function (e) {
                                t.tracksBuffered[e.id] = []
                            }
                            ))
                    }
                    ,
                    a.onSubtitleTrackSwitch = function (e) {
                        if (this.currentTrackId = e.id,
                            this.tracks && this.tracks.length && -1 !== this.currentTrackId) {
                            var t = this.tracks[this.currentTrackId];
                            t && t.details && this.setInterval(500)
                        } else
                            this.clearInterval()
                    }
                    ,
                    a.onSubtitleTrackLoaded = function (e) {
                        var t = e.id
                            , r = e.details
                            , i = this.currentTrackId
                            , a = this.tracks
                            , n = a[i];
                        t >= a.length || t !== i || !n || (r.live && function (e, t, r) {
                            void 0 === r && (r = 0);
                            var i = -1;
                            ie(e, t, (function (e, t, r) {
                                t.start = e.start,
                                    i = r
                            }
                            ));
                            var a = t.fragments;
                            if (i < 0)
                                a.forEach((function (e) {
                                    e.start += r
                                }
                                ));
                            else
                                for (var n = i + 1; n < a.length; n++)
                                    a[n].start = a[n - 1].start + a[n - 1].duration
                        }(n.details, r, this.lastAVStart),
                            n.details = r,
                            this.setInterval(500))
                    }
                    ,
                    a.onKeyLoaded = function () {
                        this.state === be && (this.state = me)
                    }
                    ,
                    a.onFragLoaded = function (e) {
                        var t = this.fragCurrent
                            , r = e.frag.decryptdata
                            , i = e.frag
                            , a = this.hls;
                        if (this.state === Te && t && "subtitle" === e.frag.type && t.sn === e.frag.sn && e.payload.byteLength > 0 && r && r.key && "AES-128" === r.method) {
                            var n = Vt.now();
                            this.decrypter.decrypt(e.payload, r.key.buffer, r.iv.buffer, (function (e) {
                                var t = Vt.now();
                                a.trigger(d.a.FRAG_DECRYPTED, {
                                    frag: i,
                                    payload: e,
                                    stats: {
                                        tstart: n,
                                        tdecrypt: t
                                    }
                                })
                            }
                            ))
                        }
                    }
                    ,
                    a.onLevelUpdated = function (e) {
                        var t = e.details.fragments;
                        this.lastAVStart = t.length ? t[0].start : 0
                    }
                    ,
                    a.doTick = function () {
                        if (this.media)
                            switch (this.state) {
                                case me:
                                    var e = this.config
                                        , t = this.currentTrackId
                                        , r = this.fragmentTracker
                                        , i = this.media
                                        , a = this.tracks;
                                    if (!a || !a[t] || !a[t].details)
                                        break;
                                    var n, s = e.maxBufferHole, o = e.maxFragLookUpTolerance, l = Math.min(e.maxBufferLength, e.maxMaxBufferLength), c = H.bufferedInfo(this._getBuffered(), i.currentTime, s), h = c.end, f = c.len, g = a[t].details, p = g.fragments, v = p.length, m = p[v - 1].start + p[v - 1].duration;
                                    if (f > l)
                                        return;
                                    var y = this.fragPrevious;
                                    h < m ? (y && g.hasProgramDateTime && (n = le(p, y.endProgramDateTime, o)),
                                        n || (n = de(y, p, h, o))) : n = p[v - 1],
                                        n && n.encrypted ? (u.b.log("Loading key for " + n.sn),
                                            this.state = be,
                                            this.hls.trigger(d.a.KEY_LOADING, {
                                                frag: n
                                            })) : n && r.getState(n) === U && (this.fragCurrent = n,
                                                this.state = Te,
                                                this.hls.trigger(d.a.FRAG_LOADING, {
                                                    frag: n
                                                }))
                            }
                        else
                            this.state = me
                    }
                    ,
                    a.stopLoad = function () {
                        this.lastAVStart = 0,
                            this.fragPrevious = null,
                            e.prototype.stopLoad.call(this)
                    }
                    ,
                    a._getBuffered = function () {
                        return this.tracksBuffered[this.currentTrackId] || []
                    }
                    ,
                    a.onMediaSeeking = function () {
                        if (this.fragCurrent) {
                            var e = this.media ? this.media.currentTime : 0
                                , t = this.config.maxFragLookUpTolerance
                                , r = this.fragCurrent.start - t
                                , i = this.fragCurrent.start + this.fragCurrent.duration + t;
                            (e < r || e > i) && (this.fragCurrent.loader && this.fragCurrent.loader.abort(),
                                this.fragmentTracker.removeFragment(this.fragCurrent),
                                this.fragCurrent = null,
                                this.fragPrevious = null,
                                this.state = me,
                                this.tick())
                        }
                    }
                    ,
                    i
            }(Oe);
            !function (e) {
                e.WIDEVINE = "com.widevine.alpha",
                    e.PLAYREADY = "com.microsoft.playready"
            }(Ht || (Ht = {}));
            var Wt = "undefined" != typeof window && window.navigator && window.navigator.requestMediaKeySystemAccess ? window.navigator.requestMediaKeySystemAccess.bind(window.navigator) : null;
            function qt(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i)
                }
            }
            var Xt = function (e) {
                var t, r;
                function i(t) {
                    var r;
                    return (r = e.call(this, t, d.a.MEDIA_ATTACHED, d.a.MEDIA_DETACHED, d.a.MANIFEST_PARSED) || this)._widevineLicenseUrl = void 0,
                        r._licenseXhrSetup = void 0,
                        r._emeEnabled = void 0,
                        r._requestMediaKeySystemAccess = void 0,
                        r._drmSystemOptions = void 0,
                        r._config = void 0,
                        r._mediaKeysList = [],
                        r._media = null,
                        r._hasSetMediaKeys = !1,
                        r._requestLicenseFailureCount = 0,
                        r.mediaKeysPromise = null,
                        r._onMediaEncrypted = function (e) {
                            if (u.b.log('Media is encrypted using "' + e.initDataType + '" init data type'),
                                !r.mediaKeysPromise)
                                return u.b.error("Fatal: Media is encrypted but no CDM access or no keys have been requested"),
                                    void r.hls.trigger(d.a.ERROR, {
                                        type: o.b.KEY_SYSTEM_ERROR,
                                        details: o.a.KEY_SYSTEM_NO_KEYS,
                                        fatal: !0
                                    });
                            var t = function (t) {
                                r._media && (r._attemptSetMediaKeys(t),
                                    r._generateRequestWithPreferredKeySession(e.initDataType, e.initData))
                            };
                            r.mediaKeysPromise.then(t).catch(t)
                        }
                        ,
                        r._config = t.config,
                        r._widevineLicenseUrl = r._config.widevineLicenseUrl,
                        r._licenseXhrSetup = r._config.licenseXhrSetup,
                        r._emeEnabled = r._config.emeEnabled,
                        r._requestMediaKeySystemAccess = r._config.requestMediaKeySystemAccessFunc,
                        r._drmSystemOptions = t.config.drmSystemOptions,
                        r
                }
                r = e,
                    (t = i).prototype = Object.create(r.prototype),
                    t.prototype.constructor = t,
                    t.__proto__ = r;
                var a, n, s, l = i.prototype;
                return l.getLicenseServerUrl = function (e) {
                    switch (e) {
                        case Ht.WIDEVINE:
                            if (!this._widevineLicenseUrl)
                                break;
                            return this._widevineLicenseUrl
                    }
                    throw new Error('no license server URL configured for key-system "' + e + '"')
                }
                    ,
                    l._attemptKeySystemAccess = function (e, t, r) {
                        var i = this
                            , a = function (e, t, r, i) {
                                switch (e) {
                                    case Ht.WIDEVINE:
                                        return function (e, t, r) {
                                            var i = {
                                                audioCapabilities: [],
                                                videoCapabilities: []
                                            };
                                            return e.forEach((function (e) {
                                                i.audioCapabilities.push({
                                                    contentType: 'audio/mp4; codecs="' + e + '"',
                                                    robustness: r.audioRobustness || ""
                                                })
                                            }
                                            )),
                                                t.forEach((function (e) {
                                                    i.videoCapabilities.push({
                                                        contentType: 'video/mp4; codecs="' + e + '"',
                                                        robustness: r.videoRobustness || ""
                                                    })
                                                }
                                                )),
                                                [i]
                                        }(t, r, i);
                                    default:
                                        throw new Error("Unknown key-system: " + e)
                                }
                            }(e, t, r, this._drmSystemOptions);
                        u.b.log("Requesting encrypted media key-system access");
                        var n = this.requestMediaKeySystemAccess(e, a);
                        this.mediaKeysPromise = n.then((function (t) {
                            return i._onMediaKeySystemAccessObtained(e, t)
                        }
                        )),
                            n.catch((function (t) {
                                u.b.error('Failed to obtain key-system "' + e + '" access:', t)
                            }
                            ))
                    }
                    ,
                    l._onMediaKeySystemAccessObtained = function (e, t) {
                        var r = this;
                        u.b.log('Access for key-system "' + e + '" obtained');
                        var i = {
                            mediaKeysSessionInitialized: !1,
                            mediaKeySystemAccess: t,
                            mediaKeySystemDomain: e
                        };
                        this._mediaKeysList.push(i);
                        var a = Promise.resolve().then((function () {
                            return t.createMediaKeys()
                        }
                        )).then((function (t) {
                            return i.mediaKeys = t,
                                u.b.log('Media-keys created for key-system "' + e + '"'),
                                r._onMediaKeysCreated(),
                                t
                        }
                        ));
                        return a.catch((function (e) {
                            u.b.error("Failed to create media-keys:", e)
                        }
                        )),
                            a
                    }
                    ,
                    l._onMediaKeysCreated = function () {
                        var e = this;
                        this._mediaKeysList.forEach((function (t) {
                            t.mediaKeysSession || (t.mediaKeysSession = t.mediaKeys.createSession(),
                                e._onNewMediaKeySession(t.mediaKeysSession))
                        }
                        ))
                    }
                    ,
                    l._onNewMediaKeySession = function (e) {
                        var t = this;
                        u.b.log("New key-system session " + e.sessionId),
                            e.addEventListener("message", (function (r) {
                                t._onKeySessionMessage(e, r.message)
                            }
                            ), !1)
                    }
                    ,
                    l._onKeySessionMessage = function (e, t) {
                        u.b.log("Got EME message event, creating license request"),
                            this._requestLicense(t, (function (t) {
                                u.b.log("Received license data (length: " + (t ? t.byteLength : t) + "), updating key-session"),
                                    e.update(t)
                            }
                            ))
                    }
                    ,
                    l._attemptSetMediaKeys = function (e) {
                        if (!this._media)
                            throw new Error("Attempted to set mediaKeys without first attaching a media element");
                        if (!this._hasSetMediaKeys) {
                            var t = this._mediaKeysList[0];
                            if (!t || !t.mediaKeys)
                                return u.b.error("Fatal: Media is encrypted but no CDM access or no keys have been obtained yet"),
                                    void this.hls.trigger(d.a.ERROR, {
                                        type: o.b.KEY_SYSTEM_ERROR,
                                        details: o.a.KEY_SYSTEM_NO_KEYS,
                                        fatal: !0
                                    });
                            u.b.log("Setting keys for encrypted media"),
                                this._media.setMediaKeys(t.mediaKeys),
                                this._hasSetMediaKeys = !0
                        }
                    }
                    ,
                    l._generateRequestWithPreferredKeySession = function (e, t) {
                        var r = this
                            , i = this._mediaKeysList[0];
                        if (!i)
                            return u.b.error("Fatal: Media is encrypted but not any key-system access has been obtained yet"),
                                void this.hls.trigger(d.a.ERROR, {
                                    type: o.b.KEY_SYSTEM_ERROR,
                                    details: o.a.KEY_SYSTEM_NO_ACCESS,
                                    fatal: !0
                                });
                        if (i.mediaKeysSessionInitialized)
                            u.b.warn("Key-Session already initialized but requested again");
                        else {
                            var a = i.mediaKeysSession;
                            if (!a)
                                return u.b.error("Fatal: Media is encrypted but no key-session existing"),
                                    void this.hls.trigger(d.a.ERROR, {
                                        type: o.b.KEY_SYSTEM_ERROR,
                                        details: o.a.KEY_SYSTEM_NO_SESSION,
                                        fatal: !0
                                    });
                            if (!t)
                                return u.b.warn("Fatal: initData required for generating a key session is null"),
                                    void this.hls.trigger(d.a.ERROR, {
                                        type: o.b.KEY_SYSTEM_ERROR,
                                        details: o.a.KEY_SYSTEM_NO_INIT_DATA,
                                        fatal: !0
                                    });
                            u.b.log('Generating key-session request for "' + e + '" init data type'),
                                i.mediaKeysSessionInitialized = !0,
                                a.generateRequest(e, t).then((function () {
                                    u.b.debug("Key-session generation succeeded")
                                }
                                )).catch((function (e) {
                                    u.b.error("Error generating key-session request:", e),
                                        r.hls.trigger(d.a.ERROR, {
                                            type: o.b.KEY_SYSTEM_ERROR,
                                            details: o.a.KEY_SYSTEM_NO_SESSION,
                                            fatal: !1
                                        })
                                }
                                ))
                        }
                    }
                    ,
                    l._createLicenseXhr = function (e, t, r) {
                        var i = new XMLHttpRequest
                            , a = this._licenseXhrSetup;
                        try {
                            if (a)
                                try {
                                    a(i, e)
                                } catch (t) {
                                    i.open("POST", e, !0),
                                        a(i, e)
                                }
                            i.readyState || i.open("POST", e, !0)
                        } catch (e) {
                            throw new Error("issue setting up KeySystem license XHR " + e)
                        }
                        return i.responseType = "arraybuffer",
                            i.onreadystatechange = this._onLicenseRequestReadyStageChange.bind(this, i, e, t, r),
                            i
                    }
                    ,
                    l._onLicenseRequestReadyStageChange = function (e, t, r, i) {
                        switch (e.readyState) {
                            case 4:
                                if (200 === e.status)
                                    this._requestLicenseFailureCount = 0,
                                        u.b.log("License request succeeded"),
                                        "arraybuffer" !== e.responseType && u.b.warn("xhr response type was not set to the expected arraybuffer for license request"),
                                        i(e.response);
                                else {
                                    if (u.b.error("License Request XHR failed (" + t + "). Status: " + e.status + " (" + e.statusText + ")"),
                                        this._requestLicenseFailureCount++,
                                        this._requestLicenseFailureCount > 3)
                                        return void this.hls.trigger(d.a.ERROR, {
                                            type: o.b.KEY_SYSTEM_ERROR,
                                            details: o.a.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                                            fatal: !0
                                        });
                                    var a = 3 - this._requestLicenseFailureCount + 1;
                                    u.b.warn("Retrying license request, " + a + " attempts left"),
                                        this._requestLicense(r, i)
                                }
                        }
                    }
                    ,
                    l._generateLicenseRequestChallenge = function (e, t) {
                        switch (e.mediaKeySystemDomain) {
                            case Ht.WIDEVINE:
                                return t
                        }
                        throw new Error("unsupported key-system: " + e.mediaKeySystemDomain)
                    }
                    ,
                    l._requestLicense = function (e, t) {
                        u.b.log("Requesting content license for key-system");
                        var r = this._mediaKeysList[0];
                        if (!r)
                            return u.b.error("Fatal error: Media is encrypted but no key-system access has been obtained yet"),
                                void this.hls.trigger(d.a.ERROR, {
                                    type: o.b.KEY_SYSTEM_ERROR,
                                    details: o.a.KEY_SYSTEM_NO_ACCESS,
                                    fatal: !0
                                });
                        try {
                            var i = this.getLicenseServerUrl(r.mediaKeySystemDomain)
                                , a = this._createLicenseXhr(i, e, t);
                            u.b.log("Sending license request to URL: " + i);
                            var n = this._generateLicenseRequestChallenge(r, e);
                            a.send(n)
                        } catch (e) {
                            u.b.error("Failure requesting DRM license: " + e),
                                this.hls.trigger(d.a.ERROR, {
                                    type: o.b.KEY_SYSTEM_ERROR,
                                    details: o.a.KEY_SYSTEM_LICENSE_REQUEST_FAILED,
                                    fatal: !0
                                })
                        }
                    }
                    ,
                    l.onMediaAttached = function (e) {
                        if (this._emeEnabled) {
                            var t = e.media;
                            this._media = t,
                                t.addEventListener("encrypted", this._onMediaEncrypted)
                        }
                    }
                    ,
                    l.onMediaDetached = function () {
                        var e = this._media
                            , t = this._mediaKeysList;
                        e && (e.removeEventListener("encrypted", this._onMediaEncrypted),
                            this._media = null,
                            this._mediaKeysList = [],
                            Promise.all(t.map((function (e) {
                                if (e.mediaKeysSession)
                                    return e.mediaKeysSession.close().catch((function () { }
                                    ))
                            }
                            ))).then((function () {
                                return e.setMediaKeys(null)
                            }
                            )).catch((function () { }
                            )))
                    }
                    ,
                    l.onManifestParsed = function (e) {
                        if (this._emeEnabled) {
                            var t = e.levels.map((function (e) {
                                return e.audioCodec
                            }
                            ))
                                , r = e.levels.map((function (e) {
                                    return e.videoCodec
                                }
                                ));
                            this._attemptKeySystemAccess(Ht.WIDEVINE, t, r)
                        }
                    }
                    ,
                    a = i,
                    (n = [{
                        key: "requestMediaKeySystemAccess",
                        get: function () {
                            if (!this._requestMediaKeySystemAccess)
                                throw new Error("No requestMediaKeySystemAccess function configured");
                            return this._requestMediaKeySystemAccess
                        }
                    }]) && qt(a.prototype, n),
                    s && qt(a, s),
                    i
            }(h);
            function zt(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                        r.push.apply(r, i)
                }
                return r
            }
            function Qt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? zt(Object(r), !0).forEach((function (t) {
                        $t(e, t, r[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : zt(Object(r)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }
                    ))
                }
                return e
            }
            function $t(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r,
                    e
            }
            var Jt = Qt(Qt({
                autoStartLoad: !0,
                startPosition: -1,
                defaultAudioCodec: void 0,
                debug: !1,
                capLevelOnFPSDrop: !1,
                capLevelToPlayerSize: !1,
                initialLiveManifestSize: 1,
                maxBufferLength: 30,
                maxBufferSize: 6e7,
                maxBufferHole: .5,
                lowBufferWatchdogPeriod: .5,
                highBufferWatchdogPeriod: 3,
                nudgeOffset: .1,
                nudgeMaxRetry: 3,
                maxFragLookUpTolerance: .25,
                liveSyncDurationCount: 3,
                liveMaxLatencyDurationCount: 1 / 0,
                liveSyncDuration: void 0,
                liveMaxLatencyDuration: void 0,
                liveDurationInfinity: !1,
                liveBackBufferLength: 1 / 0,
                maxMaxBufferLength: 600,
                enableWorker: !0,
                enableSoftwareAES: !0,
                manifestLoadingTimeOut: 1e4,
                manifestLoadingMaxRetry: 1,
                manifestLoadingRetryDelay: 1e3,
                manifestLoadingMaxRetryTimeout: 64e3,
                startLevel: void 0,
                levelLoadingTimeOut: 1e4,
                levelLoadingMaxRetry: 4,
                levelLoadingRetryDelay: 1e3,
                levelLoadingMaxRetryTimeout: 64e3,
                fragLoadingTimeOut: 2e4,
                fragLoadingMaxRetry: 6,
                fragLoadingRetryDelay: 1e3,
                fragLoadingMaxRetryTimeout: 64e3,
                startFragPrefetch: !1,
                fpsDroppedMonitoringPeriod: 5e3,
                fpsDroppedMonitoringThreshold: .2,
                appendErrorMaxRetry: 3,
                loader: $e,
                fLoader: void 0,
                pLoader: void 0,
                xhrSetup: void 0,
                licenseXhrSetup: void 0,
                abrController: Ve,
                bufferController: We,
                capLevelController: Xe,
                fpsController: Qe,
                stretchShortVideoTrack: !1,
                maxAudioFramesDrift: 1,
                forceKeyFrameOnDiscontinuity: !0,
                abrEwmaFastLive: 3,
                abrEwmaSlowLive: 9,
                abrEwmaFastVoD: 3,
                abrEwmaSlowVoD: 9,
                abrEwmaDefaultEstimate: 5e5,
                abrBandWidthFactor: .95,
                abrBandWidthUpFactor: .7,
                abrMaxWithRealBitrate: !1,
                maxStarvationDelay: 4,
                maxLoadingDelay: 4,
                minAutoBitrate: 0,
                emeEnabled: !1,
                widevineLicenseUrl: void 0,
                drmSystemOptions: {},
                requestMediaKeySystemAccessFunc: Wt,
                testBandwidth: !0
            }, {
                cueHandler: i,
                enableCEA708Captions: !0,
                enableWebVTT: !0,
                captionsTextTrack1Label: "English",
                captionsTextTrack1LanguageCode: "en",
                captionsTextTrack2Label: "Spanish",
                captionsTextTrack2LanguageCode: "es",
                captionsTextTrack3Label: "Unknown CC",
                captionsTextTrack3LanguageCode: "",
                captionsTextTrack4Label: "Unknown CC",
                captionsTextTrack4LanguageCode: "",
                renderTextTracksNatively: !0
            }), {}, {
                subtitleStreamController: Yt,
                subtitleTrackController: Kt,
                timelineController: Nt,
                audioStreamController: rt,
                audioTrackController: Ze,
                emeController: Xt
            });
            function Zt(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }
                    ))),
                        r.push.apply(r, i)
                }
                return r
            }
            function er(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Zt(Object(r), !0).forEach((function (t) {
                        tr(e, t, r[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : Zt(Object(r)).forEach((function (t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }
                    ))
                }
                return e
            }
            function tr(e, t, r) {
                return t in e ? Object.defineProperty(e, t, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = r,
                    e
            }
            function rr(e) {
                if (void 0 === e)
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            function ir(e, t) {
                for (var r = 0; r < t.length; r++) {
                    var i = t[r];
                    i.enumerable = i.enumerable || !1,
                        i.configurable = !0,
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(e, i.key, i)
                }
            }
            function ar(e, t, r) {
                return t && ir(e.prototype, t),
                    r && ir(e, r),
                    e
            }
            var nr = function (e) {
                var t, r;
                function i(t) {
                    var r;
                    void 0 === t && (t = {}),
                        (r = e.call(this) || this).config = void 0,
                        r._autoLevelCapping = void 0,
                        r.abrController = void 0,
                        r.capLevelController = void 0,
                        r.levelController = void 0,
                        r.streamController = void 0,
                        r.networkControllers = void 0,
                        r.audioTrackController = void 0,
                        r.subtitleTrackController = void 0,
                        r.emeController = void 0,
                        r.coreComponents = void 0,
                        r.media = null,
                        r.url = null;
                    var a = i.DefaultConfig;
                    if ((t.liveSyncDurationCount || t.liveMaxLatencyDurationCount) && (t.liveSyncDuration || t.liveMaxLatencyDuration))
                        throw new Error("Illegal hls.js config: don't mix up liveSyncDurationCount/liveMaxLatencyDurationCount and liveSyncDuration/liveMaxLatencyDuration");
                    r.config = er(er({}, a), t);
                    var n = rr(r).config;
                    if (void 0 !== n.liveMaxLatencyDurationCount && n.liveMaxLatencyDurationCount <= n.liveSyncDurationCount)
                        throw new Error('Illegal hls.js config: "liveMaxLatencyDurationCount" must be gt "liveSyncDurationCount"');
                    if (void 0 !== n.liveMaxLatencyDuration && (void 0 === n.liveSyncDuration || n.liveMaxLatencyDuration <= n.liveSyncDuration))
                        throw new Error('Illegal hls.js config: "liveMaxLatencyDuration" must be gt "liveSyncDuration"');
                    Object(u.a)(n.debug),
                        r._autoLevelCapping = -1;
                    var s = r.abrController = new n.abrController(rr(r))
                        , o = new n.bufferController(rr(r))
                        , l = r.capLevelController = new n.capLevelController(rr(r))
                        , d = new n.fpsController(rr(r))
                        , c = new x(rr(r))
                        , h = new M(rr(r))
                        , f = new F(rr(r))
                        , g = new Be(rr(r))
                        , p = r.levelController = new Me(rr(r))
                        , v = new K(rr(r))
                        , m = [p, r.streamController = new Pe(rr(r), v)]
                        , y = n.audioStreamController;
                    y && m.push(new y(rr(r), v)),
                        r.networkControllers = m;
                    var b = [c, h, f, s, o, l, d, g, v];
                    if (y = n.audioTrackController) {
                        var T = new y(rr(r));
                        r.audioTrackController = T,
                            b.push(T)
                    }
                    if (y = n.subtitleTrackController) {
                        var E = new y(rr(r));
                        r.subtitleTrackController = E,
                            m.push(E)
                    }
                    if (y = n.emeController) {
                        var S = new y(rr(r));
                        r.emeController = S,
                            b.push(S)
                    }
                    return (y = n.subtitleStreamController) && m.push(new y(rr(r), v)),
                        (y = n.timelineController) && b.push(new y(rr(r))),
                        r.coreComponents = b,
                        r
                }
                r = e,
                    (t = i).prototype = Object.create(r.prototype),
                    t.prototype.constructor = t,
                    t.__proto__ = r,
                    i.isSupported = function () {
                        return function () {
                            var e = q();
                            if (!e)
                                return !1;
                            var t = self.SourceBuffer || self.WebKitSourceBuffer
                                , r = e && "function" == typeof e.isTypeSupported && e.isTypeSupported('video/mp4; codecs="avc1.42E01E,mp4a.40.2"')
                                , i = !t || t.prototype && "function" == typeof t.prototype.appendBuffer && "function" == typeof t.prototype.remove;
                            return !!r && !!i
                        }()
                    }
                    ,
                    ar(i, null, [{
                        key: "version",
                        get: function () {
                            return "0.14.16"
                        }
                    }, {
                        key: "Events",
                        get: function () {
                            return d.a
                        }
                    }, {
                        key: "ErrorTypes",
                        get: function () {
                            return o.b
                        }
                    }, {
                        key: "ErrorDetails",
                        get: function () {
                            return o.a
                        }
                    }, {
                        key: "DefaultConfig",
                        get: function () {
                            return i.defaultConfig ? i.defaultConfig : Jt
                        },
                        set: function (e) {
                            i.defaultConfig = e
                        }
                    }]);
                var a = i.prototype;
                return a.destroy = function () {
                    u.b.log("destroy"),
                        this.trigger(d.a.DESTROYING),
                        this.detachMedia(),
                        this.coreComponents.concat(this.networkControllers).forEach((function (e) {
                            e.destroy()
                        }
                        )),
                        this.url = null,
                        this.removeAllListeners(),
                        this._autoLevelCapping = -1
                }
                    ,
                    a.attachMedia = function (e) {
                        u.b.log("attachMedia"),
                            this.media = e,
                            this.trigger(d.a.MEDIA_ATTACHING, {
                                media: e
                            })
                    }
                    ,
                    a.detachMedia = function () {
                        u.b.log("detachMedia"),
                            this.trigger(d.a.MEDIA_DETACHING),
                            this.media = null
                    }
                    ,
                    a.loadSource = function (e) {
                        e = s.buildAbsoluteURL(window.location.href, e, {
                            alwaysNormalize: !0
                        }),
                            u.b.log("loadSource:" + e),
                            this.url = e,
                            this.trigger(d.a.MANIFEST_LOADING, {
                                url: e
                            })
                    }
                    ,
                    a.startLoad = function (e) {
                        void 0 === e && (e = -1),
                            u.b.log("startLoad(" + e + ")"),
                            this.networkControllers.forEach((function (t) {
                                t.startLoad(e)
                            }
                            ))
                    }
                    ,
                    a.stopLoad = function () {
                        u.b.log("stopLoad"),
                            this.networkControllers.forEach((function (e) {
                                e.stopLoad()
                            }
                            ))
                    }
                    ,
                    a.swapAudioCodec = function () {
                        u.b.log("swapAudioCodec"),
                            this.streamController.swapAudioCodec()
                    }
                    ,
                    a.recoverMediaError = function () {
                        u.b.log("recoverMediaError");
                        var e = this.media;
                        this.detachMedia(),
                            e && this.attachMedia(e)
                    }
                    ,
                    a.removeLevel = function (e, t) {
                        void 0 === t && (t = 0),
                            this.levelController.removeLevel(e, t)
                    }
                    ,
                    ar(i, [{
                        key: "levels",
                        get: function () {
                            return this.levelController.levels
                        }
                    }, {
                        key: "currentLevel",
                        get: function () {
                            return this.streamController.currentLevel
                        },
                        set: function (e) {
                            u.b.log("set currentLevel:" + e),
                                this.loadLevel = e,
                                this.streamController.immediateLevelSwitch()
                        }
                    }, {
                        key: "nextLevel",
                        get: function () {
                            return this.streamController.nextLevel
                        },
                        set: function (e) {
                            u.b.log("set nextLevel:" + e),
                                this.levelController.manualLevel = e,
                                this.streamController.nextLevelSwitch()
                        }
                    }, {
                        key: "loadLevel",
                        get: function () {
                            return this.levelController.level
                        },
                        set: function (e) {
                            u.b.log("set loadLevel:" + e),
                                this.levelController.manualLevel = e
                        }
                    }, {
                        key: "nextLoadLevel",
                        get: function () {
                            return this.levelController.nextLoadLevel
                        },
                        set: function (e) {
                            this.levelController.nextLoadLevel = e
                        }
                    }, {
                        key: "firstLevel",
                        get: function () {
                            return Math.max(this.levelController.firstLevel, this.minAutoLevel)
                        },
                        set: function (e) {
                            u.b.log("set firstLevel:" + e),
                                this.levelController.firstLevel = e
                        }
                    }, {
                        key: "startLevel",
                        get: function () {
                            return this.levelController.startLevel
                        },
                        set: function (e) {
                            u.b.log("set startLevel:" + e),
                                -1 !== e && (e = Math.max(e, this.minAutoLevel)),
                                this.levelController.startLevel = e
                        }
                    }, {
                        key: "capLevelToPlayerSize",
                        set: function (e) {
                            var t = !!e;
                            t !== this.config.capLevelToPlayerSize && (t ? this.capLevelController.startCapping() : (this.capLevelController.stopCapping(),
                                this.autoLevelCapping = -1,
                                this.streamController.nextLevelSwitch()),
                                this.config.capLevelToPlayerSize = t)
                        }
                    }, {
                        key: "autoLevelCapping",
                        get: function () {
                            return this._autoLevelCapping
                        },
                        set: function (e) {
                            u.b.log("set autoLevelCapping:" + e),
                                this._autoLevelCapping = e
                        }
                    }, {
                        key: "bandwidthEstimate",
                        get: function () {
                            var e = this.abrController._bwEstimator;
                            return e ? e.getEstimate() : NaN
                        }
                    }, {
                        key: "autoLevelEnabled",
                        get: function () {
                            return -1 === this.levelController.manualLevel
                        }
                    }, {
                        key: "manualLevel",
                        get: function () {
                            return this.levelController.manualLevel
                        }
                    }, {
                        key: "minAutoLevel",
                        get: function () {
                            for (var e = this.levels, t = this.config.minAutoBitrate, r = e ? e.length : 0, i = 0; i < r; i++) {
                                if ((e[i].realBitrate ? Math.max(e[i].realBitrate, e[i].bitrate) : e[i].bitrate) > t)
                                    return i
                            }
                            return 0
                        }
                    }, {
                        key: "maxAutoLevel",
                        get: function () {
                            var e = this.levels
                                , t = this.autoLevelCapping;
                            return -1 === t && e && e.length ? e.length - 1 : t
                        }
                    }, {
                        key: "nextAutoLevel",
                        get: function () {
                            return Math.min(Math.max(this.abrController.nextAutoLevel, this.minAutoLevel), this.maxAutoLevel)
                        },
                        set: function (e) {
                            this.abrController.nextAutoLevel = Math.max(this.minAutoLevel, e)
                        }
                    }, {
                        key: "audioTracks",
                        get: function () {
                            var e = this.audioTrackController;
                            return e ? e.audioTracks : []
                        }
                    }, {
                        key: "audioTrack",
                        get: function () {
                            var e = this.audioTrackController;
                            return e ? e.audioTrack : -1
                        },
                        set: function (e) {
                            var t = this.audioTrackController;
                            t && (t.audioTrack = e)
                        }
                    }, {
                        key: "liveSyncPosition",
                        get: function () {
                            return this.streamController.liveSyncPosition
                        }
                    }, {
                        key: "subtitleTracks",
                        get: function () {
                            var e = this.subtitleTrackController;
                            return e ? e.subtitleTracks : []
                        }
                    }, {
                        key: "subtitleTrack",
                        get: function () {
                            var e = this.subtitleTrackController;
                            return e ? e.subtitleTrack : -1
                        },
                        set: function (e) {
                            var t = this.subtitleTrackController;
                            t && (t.subtitleTrack = e)
                        }
                    }, {
                        key: "subtitleDisplay",
                        get: function () {
                            var e = this.subtitleTrackController;
                            return !!e && e.subtitleDisplay
                        },
                        set: function (e) {
                            var t = this.subtitleTrackController;
                            t && (t.subtitleDisplay = e)
                        }
                    }]),
                    i
            }(z);
            nr.defaultConfig = void 0
        }
    ]).default
}
));
//# sourceMappingURL=hls.min.js.map
