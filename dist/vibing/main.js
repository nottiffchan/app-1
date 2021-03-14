(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Tiffany Chan-SIN\Desktop\vibing\src\main.ts */"zUnb");


/***/ }),

/***/ "7ALP":
/*!******************************************************!*\
  !*** ./src/app/result-page/result-page.component.ts ***!
  \******************************************************/
/*! exports provided: ResultPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResultPageComponent", function() { return ResultPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_spotify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/spotify.service */ "nNar");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





class ResultPageComponent {
    constructor(route, router, spotifySrv) {
        this.route = route;
        this.router = router;
        this.spotifySrv = spotifySrv;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.playlistId = params['playlistId'],
                this.token = params['token'];
        });
        if (this.token === '' || !this.token) {
            this.router.navigate(['/error']);
        }
        this.getPlaylist();
    }
    getPlaylist() {
        this.spotifySrv.getPlaylist(this.playlistId, this.token).subscribe((res) => {
            this.playlistName = res.name;
            this.playlistUrl = res.external_urls.spotify;
            this.imgUrl = res.images[1].url;
        });
    }
}
ResultPageComponent.ɵfac = function ResultPageComponent_Factory(t) { return new (t || ResultPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_spotify_service__WEBPACK_IMPORTED_MODULE_2__["SpotifyService"])); };
ResultPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResultPageComponent, selectors: [["app-result-page"]], decls: 18, vars: 3, consts: [[1, "container", "d-flex"], [1, "title"], [1, "row", "align-items-center"], [1, "col-sm-6", "d-flex", "justify-content-center", "align-items-center", "playlist-info", 2, "flex-direction", "column"], ["alt", "", 2, "height", "150px", "width", "150px", 3, "src"], [2, "font-family", "Roboto Mono", "font-size", "18px", "text-align", "center", "margin-top", "20px"], [1, "col-sm-6"], ["mat-raised-button", "", "color", "primary", 1, "play-btn", "mx-auto"], ["target", "_blank", 2, "color", "white", "text-decoration", "none", 3, "href"], ["src", "../../assets/headphones.svg", "alt", "play button", 1, "play-icon"], ["href", "/", 2, "font-size", "27px", "color", "black", "text-decoration", "none"], [1, "d-flex", "align-items-center"], ["src", "../../assets/rotate-ccw.svg", "alt", "restart button", 1, "restart-icon"], [2, "margin-bottom", "0"]], template: function ResultPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Here's your playlist.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Listen on Spotify ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Start Again");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.imgUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.playlistName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.playlistUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: [".container[_ngcontent-%COMP%] {\r\n  height: 100vh;\r\n  justify-content: space-evenly;\r\n  align-items: center;\r\n  flex-direction: column;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  font-size: 4rem;\r\n  font-family: 'Abhaya Libre';\r\n  line-height: 90%;\r\n  text-align: center;\r\n}\r\n\r\n.play-btn[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  font-family: 'Abhaya Libre';\r\n  padding: 5px 20px;\r\n  font-size: 20px;\r\n  align-items: center;\r\n  justify-content: space-evenly;\r\n}\r\n\r\n.play-btn[_ngcontent-%COMP%]:hover {\r\n  background-color: #424242;\r\n}\r\n\r\n.restart-button[_ngcontent-%COMP%] {\r\n  font-size: 30px;\r\n}\r\n\r\n.play-icon[_ngcontent-%COMP%], .restart-icon[_ngcontent-%COMP%] {\r\n  height: 20px;\r\n  margin-right: 10px;\r\n}\r\n\r\n@media only screen and (max-width: 576px) {\r\n  .title[_ngcontent-%COMP%] {\r\n    font-size: 3rem;\r\n  }\r\n  .playlist-info[_ngcontent-%COMP%] {\r\n    margin-bottom: 5%;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VsdC1wYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsNkJBQTZCO0VBQzdCLG1CQUFtQjtFQUNuQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsMkJBQTJCO0VBQzNCLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0U7SUFDRSxlQUFlO0VBQ2pCO0VBQ0E7SUFDRSxpQkFBaUI7RUFDbkI7QUFDRiIsImZpbGUiOiJyZXN1bHQtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbi50aXRsZSB7XHJcbiAgZm9udC1zaXplOiA0cmVtO1xyXG4gIGZvbnQtZmFtaWx5OiAnQWJoYXlhIExpYnJlJztcclxuICBsaW5lLWhlaWdodDogOTAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnBsYXktYnRuIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZvbnQtZmFtaWx5OiAnQWJoYXlhIExpYnJlJztcclxuICBwYWRkaW5nOiA1cHggMjBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxufVxyXG5cclxuLnBsYXktYnRuOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDI0MjQyO1xyXG59XHJcblxyXG4ucmVzdGFydC1idXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLnBsYXktaWNvbiwgLnJlc3RhcnQtaWNvbiB7XHJcbiAgaGVpZ2h0OiAyMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC50aXRsZSB7XHJcbiAgICBmb250LXNpemU6IDNyZW07XHJcbiAgfVxyXG4gIC5wbGF5bGlzdC1pbmZvIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUlO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResultPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-result-page',
                templateUrl: './result-page.component.html',
                styleUrls: ['./result-page.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _services_spotify_service__WEBPACK_IMPORTED_MODULE_2__["SpotifyService"] }]; }, null); })();


/***/ }),

/***/ "8MU8":
/*!**********************************************************************!*\
  !*** ./src/app/selected-vibes-page/selected-vibes-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: SelectedVibesPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedVibesPageComponent", function() { return SelectedVibesPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _track_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../track.model */ "svHA");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_spotify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/spotify.service */ "nNar");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _selected_track_selected_track_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./selected-track/selected-track.component */ "aEf1");







function SelectedVibesPageComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-selected-track", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const track_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("track", track_r1);
} }
class SelectedVibesPageComponent {
    constructor(router, route, spotifySrv) {
        this.router = router;
        this.route = route;
        this.spotifySrv = spotifySrv;
        this.token = '';
        this.firstname = '';
        this.secondname = '';
        this.aliceFirstSong = '';
        this.aliceSecondSong = '';
        this.bobFirstSong = '';
        this.bobSecondSong = '';
        this.selectedSongs = [];
        this.selectedTracks = [];
        this.route.queryParams.subscribe(params => {
            this.token = params['token'],
                this.firstname = params['firstname'],
                this.secondname = params['secondname'],
                this.aliceFirstSong = params['aliceFirstSong'],
                this.aliceSecondSong = params['aliceSecondSong'],
                this.bobFirstSong = params['bobFirstSong'],
                this.bobSecondSong = params['bobSecondSong'];
        });
        if (this.token === '' || !this.token) {
            this.router.navigate(['/error']);
        }
        this.selectedSongs.push(this.aliceFirstSong);
        this.selectedSongs.push(this.aliceSecondSong);
        this.selectedSongs.push(this.bobFirstSong);
        this.selectedSongs.push(this.bobSecondSong);
        this.getTracks();
    }
    ngOnInit() {
    }
    getTracks() {
        for (let i = 0; i < 4; i++) {
            this.spotifySrv.getTrack(this.selectedSongs[i], this.token).subscribe((res) => {
                this.selectedTracks[i] = new _track_model__WEBPACK_IMPORTED_MODULE_1__["Track"](res.id, res.name, res.artists[0].name, res.album.images[1].url);
            });
        }
    }
    onContinue() {
        this.router.navigate(['./loading'], {
            queryParams: {
                token: this.token,
                firstname: this.firstname,
                secondname: this.secondname,
                aliceFirstSong: this.aliceFirstSong,
                aliceSecondSong: this.aliceSecondSong,
                bobFirstSong: this.bobFirstSong,
                bobSecondSong: this.bobSecondSong
            }
        });
    }
    onSelectAgain() {
        this.router.navigate(['./alice-vibe'], {
            queryParams: {
                token: this.token,
                firstname: this.firstname,
                secondname: this.secondname,
            }
        });
    }
}
SelectedVibesPageComponent.ɵfac = function SelectedVibesPageComponent_Factory(t) { return new (t || SelectedVibesPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_spotify_service__WEBPACK_IMPORTED_MODULE_3__["SpotifyService"])); };
SelectedVibesPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectedVibesPageComponent, selectors: [["app-selected-vibes-page"]], decls: 10, vars: 1, consts: [[1, "container", "d-flex", "justify-content-center", "align-items-center"], [1, "title"], [1, "row", "track-row"], ["class", "col-sm-6", 4, "ngFor", "ngForOf"], [1, "row", "mt-5", "justify-content-center", "btn-row"], [1, "btn", "pri", 3, "click"], [1, "btn", "sec", 3, "click"], [1, "col-sm-6"], [3, "track"]], template: function SelectedVibesPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Selected Vibes");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, SelectedVibesPageComponent_div_4_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectedVibesPageComponent_Template_button_click_6_listener() { return ctx.onContinue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Generate Vibe!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SelectedVibesPageComponent_Template_button_click_8_listener() { return ctx.onSelectAgain(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Select Again");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.selectedTracks);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _selected_track_selected_track_component__WEBPACK_IMPORTED_MODULE_5__["SelectedTrackComponent"]], styles: [".container[_ngcontent-%COMP%] {\r\n  margin-top: 8%;\r\n  flex-direction: column;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  font-size: 50px;\r\n  text-align: center;\r\n  margin-bottom: 8%;\r\n  line-height: 90%;\r\n}\r\n\r\n.track-row[_ngcontent-%COMP%] {\r\n  padding: 0 20px;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%] {\r\n  box-shadow: 0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%);\r\n  border-radius: 4px;\r\n  font-family: 'Abhaya Libre', serif;\r\n  font-size: 20px;\r\n  padding: 5px 50px;\r\n  margin: 15px;\r\n}\r\n\r\n.pri[_ngcontent-%COMP%] {\r\n  color: white;\r\n  background-color: #212121;\r\n}\r\n\r\n.sec[_ngcontent-%COMP%] {\r\n  color: #212121;\r\n  background-color: transparent;\r\n  border: solid 2px #212121;\r\n}\r\n\r\n.btn-row[_ngcontent-%COMP%] {\r\n  flex-direction: row-reverse;\r\n}\r\n\r\n@media only screen and (min-width: 1200px) {\r\n  .track-row[_ngcontent-%COMP%] {\r\n    padding-left: 160px;\r\n  }\r\n}\r\n\r\n@media only screen and (min-width: 1000px) and (max-width: 1199px) {\r\n  .track-row[_ngcontent-%COMP%] {\r\n    padding-left: 115px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 576px) {\r\n  .btn-row[_ngcontent-%COMP%] {\r\n    flex-direction: column;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdGVkLXZpYmVzLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWM7RUFDZCxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUhBQWlIO0VBQ2pILGtCQUFrQjtFQUNsQixrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxZQUFZO0VBQ1oseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsY0FBYztFQUNkLDZCQUE2QjtFQUM3Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwyQkFBMkI7QUFDN0I7O0FBRUE7RUFDRTtJQUNFLG1CQUFtQjtFQUNyQjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxtQkFBbUI7RUFDckI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBQ0YiLCJmaWxlIjoic2VsZWN0ZWQtdmliZXMtcGFnZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgbWFyZ2luLXRvcDogOCU7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLnRpdGxlIHtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDglO1xyXG4gIGxpbmUtaGVpZ2h0OiA5MCU7XHJcbn1cclxuXHJcbi50cmFjay1yb3cge1xyXG4gIHBhZGRpbmc6IDAgMjBweDtcclxufVxyXG5cclxuLmJ0biB7XHJcbiAgYm94LXNoYWRvdzogMHB4IDNweCAxcHggLTJweCByZ2IoMCAwIDAgLyAyMCUpLCAwcHggMnB4IDJweCAwcHggcmdiKDAgMCAwIC8gMTQlKSwgMHB4IDFweCA1cHggMHB4IHJnYigwIDAgMCAvIDEyJSk7XHJcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gIGZvbnQtZmFtaWx5OiAnQWJoYXlhIExpYnJlJywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDVweCA1MHB4O1xyXG4gIG1hcmdpbjogMTVweDtcclxufVxyXG5cclxuLnByaSB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTIxMjE7XHJcbn1cclxuXHJcbi5zZWMge1xyXG4gIGNvbG9yOiAjMjEyMTIxO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIGJvcmRlcjogc29saWQgMnB4ICMyMTIxMjE7XHJcbn1cclxuXHJcbi5idG4tcm93IHtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XHJcbiAgLnRyYWNrLXJvdyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE2MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcclxuICAudHJhY2stcm93IHtcclxuICAgIHBhZGRpbmctbGVmdDogMTE1cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU3NnB4KSB7XHJcbiAgLmJ0bi1yb3cge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectedVibesPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-selected-vibes-page',
                templateUrl: './selected-vibes-page.component.html',
                styleUrls: ['./selected-vibes-page.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_spotify_service__WEBPACK_IMPORTED_MODULE_3__["SpotifyService"] }]; }, null); })();


/***/ }),

/***/ "8j34":
/*!********************************************************!*\
  !*** ./src/app/loading-page/loading-page.component.ts ***!
  \********************************************************/
/*! exports provided: LoadingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingPageComponent", function() { return LoadingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_spotify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/spotify.service */ "nNar");




class LoadingPageComponent {
    constructor(router, route, spotifySrv) {
        this.router = router;
        this.route = route;
        this.spotifySrv = spotifySrv;
        this.testTracks = [];
        this.uris = [];
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.token = params['token'],
                this.firstname = params['firstname'],
                this.secondname = params['secondname'],
                this.aliceFirstSong = params['aliceFirstSong'],
                this.aliceSecondSong = params['aliceSecondSong'],
                this.bobFirstSong = params['bobFirstSong'],
                this.bobSecondSong = params['bobSecondSong'];
        });
        if (this.token === '' || !this.token) {
            this.router.navigate(['/error']);
        }
        this.createPlaylist();
    }
    createPlaylist() {
        this.spotifySrv.getCurrUser(this.token).subscribe((res) => {
            console.log(res);
            this.currUser = res;
            let playlistName = `vibing with ${this.firstname} and ${this.secondname}`;
            this.spotifySrv.createPlaylist(playlistName, this.token, this.currUser.href).subscribe((res) => {
                console.log("here here", res);
                this.playlistId = res.id;
                this.getTracks();
            });
        });
    }
    getTracks() {
        this.spotifySrv.getRecommendedTracks(this.token, this.aliceFirstSong, this.aliceSecondSong, this.bobFirstSong, this.bobSecondSong).subscribe((res) => {
            this.testTracks = res.tracks;
            for (let i = 0; i < this.testTracks.length; i++) {
                this.uris[i] = this.testTracks[i].uri;
            }
            this.addTracksToPlaylist();
        });
    }
    addTracksToPlaylist() {
        console.log("adding tracks");
        this.spotifySrv.addToPlaylist(this.playlistId, this.token, this.uris).subscribe(res => {
            setTimeout(() => {
                this.router.navigate(['./result'], { queryParams: { playlistId: this.playlistId, token: this.token } });
            }, 2000);
        });
    }
}
LoadingPageComponent.ɵfac = function LoadingPageComponent_Factory(t) { return new (t || LoadingPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_spotify_service__WEBPACK_IMPORTED_MODULE_2__["SpotifyService"])); };
LoadingPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingPageComponent, selectors: [["app-loading-page"]], decls: 4, vars: 0, consts: [[1, "loading-stuff"], ["role", "status", 1, "spinner-border", 2, "width", "2rem", "height", "3rem"], ["id", "vibing"]], template: function LoadingPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "vibing...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["#vibing[_ngcontent-%COMP%] {\r\n  font-size: 40px;\r\n  margin-left: 20px;\r\n}\r\n\r\n.loading-stuff[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50%;\r\n    margin-top: -50px;\r\n    margin-left: -130px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvYWRpbmctcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLGVBQWU7SUFDZixRQUFRO0lBQ1IsU0FBUztJQUNULGlCQUFpQjtJQUNqQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoibG9hZGluZy1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdmliaW5nIHtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuXHJcbi5sb2FkaW5nLXN0dWZmIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDUwJTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIG1hcmdpbi10b3A6IC01MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC0xMzBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading-page',
                templateUrl: './loading-page.component.html',
                styleUrls: ['./loading-page.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_spotify_service__WEBPACK_IMPORTED_MODULE_2__["SpotifyService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    CLIENT_ID: '36e7e68f272348f0bc475ce469c68221',
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "DXW9":
/*!*************************************************************************!*\
  !*** ./src/app/input-page/name-input-page/name-input-page.component.ts ***!
  \*************************************************************************/
/*! exports provided: NameInputPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameInputPageComponent", function() { return NameInputPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_spotify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/spotify.service */ "nNar");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






class NameInputPageComponent {
    constructor(router, route, spotifySrv) {
        this.router = router;
        this.route = route;
        this.spotifySrv = spotifySrv;
        this.token = '';
        this.firstname = '';
        this.submitButtonAppear = false;
    }
    ngOnInit() {
        this.token = this.spotifySrv.getToken();
        if (this.token === '' || !this.token) {
            this.router.navigate(['/error']);
        }
    }
    onSubmit() {
        // this.nameService.setFirstName(this.firstname);
        this.router.navigate(['/name-friend-input'], { queryParams: { token: this.token,
                firstname: this.firstname }
        });
    }
    change(event) {
        if (this.firstname != '') {
            this.submitButtonAppear = true;
        }
        if (this.firstname == '') {
            this.submitButtonAppear = false;
        }
    }
}
NameInputPageComponent.ɵfac = function NameInputPageComponent_Factory(t) { return new (t || NameInputPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_spotify_service__WEBPACK_IMPORTED_MODULE_2__["SpotifyService"])); };
NameInputPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NameInputPageComponent, selectors: [["app-name-input-page"]], decls: 8, vars: 3, consts: [[1, "container", "d-flex"], [1, "question"], [1, "input-group", "mb-5"], ["type", "text", "placeholder", "Your name here...", "aria-label", "Name", "autofocus", "", 1, "form-control", "no-border", 3, "ngModel", "ngModelChange"], [1, "hidden"], ["mat-raised-button", "", "color", "primary", 1, "submit-btn", 3, "click"]], template: function NameInputPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Who's this playlist for?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NameInputPageComponent_Template_input_ngModelChange_4_listener($event) { return ctx.firstname = $event; })("ngModelChange", function NameInputPageComponent_Template_input_ngModelChange_4_listener($event) { return ctx.change($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NameInputPageComponent_Template_button_click_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.firstname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.submitButtonAppear);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"]], styles: [".container[_ngcontent-%COMP%] {\r\n  height: 100vh;\r\n  flex-direction: column;\r\n  padding-left: 90px;\r\n  justify-content: center;\r\n}\r\n\r\n.question[_ngcontent-%COMP%] {\r\n  font-family: 'Abhaya Libre';\r\n  font-size: 2rem;\r\n  line-height: 90%;\r\n  margin-bottom: 5%;\r\n}\r\n\r\n.no-border[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  box-shadow: none;\r\n  padding: 0;\r\n  font-family: 'Roboto Mono';\r\n  font-size: 30px;\r\n}\r\n\r\n.submit-btn[_ngcontent-%COMP%] {\r\n  font-family: 'Abhaya Libre', serif;\r\n  font-size: 20px;\r\n  padding: 5px 20px;\r\n}\r\n\r\n.show[_ngcontent-%COMP%] {\r\n  opacity: 1 !important;\r\n  transition: .5s ease-in-out all;\r\n}\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  transition: .5s ease-in-out all;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    padding-left: 50px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 500px) {\r\n  .input[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n  }\r\n\r\n  .question[_ngcontent-%COMP%] {\r\n    margin-bottom: 10%;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 388px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    padding-left: 20px;\r\n  }\r\n\r\n  .no-border[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hbWUtaW5wdXQtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsU0FBUztFQUNULGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJuYW1lLWlucHV0LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nLWxlZnQ6IDkwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5xdWVzdGlvbiB7XHJcbiAgZm9udC1mYW1pbHk6ICdBYmhheWEgTGlicmUnO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBsaW5lLWhlaWdodDogOTAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcblxyXG4ubm8tYm9yZGVyIHtcclxuICBib3JkZXI6IDA7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLnN1Ym1pdC1idG4ge1xyXG4gIGZvbnQtZmFtaWx5OiAnQWJoYXlhIExpYnJlJywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xyXG59XHJcblxyXG4uc2hvdyB7XHJcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IC41cyBlYXNlLWluLW91dCBhbGw7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2UtaW4tb3V0IGFsbDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5pbnB1dCB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgfVxyXG5cclxuICAucXVlc3Rpb24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzODhweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLm5vLWJvcmRlciB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NameInputPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-name-input-page',
                templateUrl: './name-input-page.component.html',
                styleUrls: ['./name-input-page.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_spotify_service__WEBPACK_IMPORTED_MODULE_2__["SpotifyService"] }]; }, null); })();


/***/ }),

/***/ "FRcQ":
/*!********************************************************************!*\
  !*** ./src/app/vibe-page/bob-vibe-page/bob-vibe-page.component.ts ***!
  \********************************************************************/
/*! exports provided: BobVibePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BobVibePageComponent", function() { return BobVibePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_spotify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/spotify.service */ "nNar");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









function BobVibePageComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BobVibePageComponent_div_9_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const track_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.selectTrack(track_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const track_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", track_r3.album.images[1].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](track_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](track_r3.artists[0].name);
} }
function BobVibePageComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BobVibePageComponent_div_9_div_1_Template, 7, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.searchResults);
} }
function BobVibePageComponent_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "TRACK 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "border": "none", "height": "auto" }; };
function BobVibePageComponent_div_10_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BobVibePageComponent_div_10_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.removeSelected(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r7.selectedTracks[0].img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.selectedTracks[0].trackName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.selectedTracks[0].artistName);
} }
function BobVibePageComponent_div_10_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "TRACK 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BobVibePageComponent_div_10_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BobVibePageComponent_div_10_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.removeSelected(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r9.selectedTracks[1].img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.selectedTracks[1].trackName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.selectedTracks[1].artistName);
} }
function BobVibePageComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, BobVibePageComponent_div_10_div_2_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BobVibePageComponent_div_10_div_3_Template, 6, 5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BobVibePageComponent_div_10_div_5_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BobVibePageComponent_div_10_div_6_Template, 6, 5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectedTracks[0].trackId === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectedTracks[0].trackId !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectedTracks[1].trackId === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectedTracks[1].trackId !== "");
} }
class BobVibePageComponent {
    constructor(router, route, spotifySrv) {
        this.router = router;
        this.route = route;
        this.spotifySrv = spotifySrv;
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSearch"];
        this.trackNameSearched = '';
        this.searchResults = [];
        this.selectedTracks = [{
                trackId: '',
                trackName: '',
                artistName: '',
                img: '',
            }, {
                trackId: '',
                trackName: '',
                artistName: '',
                img: '',
            }];
        this.route.queryParams.subscribe(params => {
            this.token = params['token'],
                this.firstname = params['firstname'],
                this.secondname = params['secondname'],
                this.aliceFirstSong = params['aliceFirstSong'],
                this.aliceSecondSong = params['aliceSecondSong'];
        });
        if (this.token === '' || !this.token) {
            this.router.navigate(['/error']);
        }
    }
    ngOnInit() {
    }
    onContinue() {
        this.router.navigate(['./selected-vibes'], {
            queryParams: {
                token: this.token,
                firstname: this.firstname,
                secondname: this.secondname,
                aliceFirstSong: this.aliceFirstSong,
                aliceSecondSong: this.aliceSecondSong,
                bobFirstSong: this.selectedTracks[0].trackId,
                bobSecondSong: this.selectedTracks[1].trackId
            }
        });
    }
    change(event) {
        if (this.trackNameSearched !== '') {
            this.getTracks();
        }
    }
    getTracks() {
        this.spotifySrv.searchMusic(this.trackNameSearched, 'track,artist', this.token).subscribe(res => {
            this.searchResults = res.tracks.items;
            // console.log(this.searchResults)
        });
    }
    selectTrack(track) {
        if (this.selectedTracks[0].trackId === '') {
            this.selectedTracks[0].trackId = track.id;
            this.selectedTracks[0].trackName = track.name;
            this.selectedTracks[0].artistName = track.artists[0].name;
            this.selectedTracks[0].img = track.album.images[1].url;
        }
        else if (this.selectedTracks[1].trackId === '') {
            this.selectedTracks[1].trackId = track.id;
            this.selectedTracks[1].trackName = track.name;
            this.selectedTracks[1].artistName = track.artists[0].name;
            this.selectedTracks[1].img = track.album.images[1].url;
        }
        this.trackNameSearched = '';
    }
    removeSelected(index) {
        this.selectedTracks[index].trackId = '';
        this.selectedTracks[index].trackName = '';
        this.selectedTracks[index].artistName = '';
        this.selectedTracks[index].img = '';
    }
}
BobVibePageComponent.ɵfac = function BobVibePageComponent_Factory(t) { return new (t || BobVibePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_spotify_service__WEBPACK_IMPORTED_MODULE_3__["SpotifyService"])); };
BobVibePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BobVibePageComponent, selectors: [["app-bob-vibe-page"]], decls: 14, vars: 6, consts: [[1, "container", "d-flex"], [1, "title"], [1, "form-container", "mt-4"], [1, "input-group"], [1, "input-group-prepend"], ["id", "basic-addon1", 1, "input-group-text"], [1, "input-icon", 3, "icon"], ["type", "text", "placeholder", "Choose tracks", "aria-label", "Username", "aria-describedby", "basic-addon1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "search-result-container", 4, "ngIf"], ["class", "row d-flex mt-5", "style", "align-items: flex-start; width: 100%; max-width: 600px;", 4, "ngIf"], [1, "btn-div", 2, "margin-top", "10px", 3, "hidden"], ["mat-raised-button", "", "color", "primary", 1, "submit-btn", 3, "click"], [1, "search-result-container"], ["class", "track-wrapper", 3, "click", 4, "ngFor", "ngForOf"], [1, "track-wrapper", 3, "click"], ["alt", "album art", 1, "album-img", 3, "src"], [2, "word-wrap", "break-word"], [1, "track-name"], [1, "artist-name", 2, "color", "#605959", "margin-bottom", "0"], [1, "row", "d-flex", "mt-5", 2, "align-items", "flex-start", "width", "100%", "max-width", "600px"], [1, "col-sm-6", "d-flex", "justify-content-center", "align-items-center"], ["class", "track-square", 4, "ngIf"], ["class", "track-square", 3, "ngStyle", "click", 4, "ngIf"], [1, "track-square"], [1, "track-label"], [1, "track-square", 3, "ngStyle", "click"], [1, "selected-track-img", 3, "src"], [2, "font-size", "19px"], [2, "color", "#605959", "margin-bottom", "0", "font-size", "15px"]], template: function BobVibePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function BobVibePageComponent_Template_input_ngModelChange_8_listener($event) { return ctx.trackNameSearched = $event; })("ngModelChange", function BobVibePageComponent_Template_input_ngModelChange_8_listener($event) { return ctx.change($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BobVibePageComponent_div_9_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BobVibePageComponent_div_10_Template, 7, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BobVibePageComponent_Template_button_click_12_listener() { return ctx.onContinue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.secondname, "'s Vibe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.trackNameSearched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchResults.length > 0 && ctx.trackNameSearched !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchResults.length === 0 || ctx.trackNameSearched === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.selectedTracks[0].trackId === "" || ctx.selectedTracks[1].trackId === "");
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"]], styles: [".container[_ngcontent-%COMP%] {\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 50px;\r\n  font-family: 'Abhaya Libre', serif;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  font-size: 50px;\r\n  margin-bottom: 1%;\r\n}\r\n\r\n.form-container[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  width: 60%;\r\n  max-width: 500px;\r\n}\r\n\r\n.input[_ngcontent-%COMP%] {\r\n  font-family: 'Roboto Mono', monospace;\r\n  margin-bottom: 0;\r\n  width: 500px;\r\n\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%] {\r\n  border-top: 2px black solid;\r\n  border-left: none;\r\n  border-bottom: 2px black solid;\r\n  border-right: 2px black solid;\r\n  border-radius: 0 9px 9px 0;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n  outline-width: 0;\r\n}\r\n\r\n.input-group-text[_ngcontent-%COMP%] {\r\n  border-top: 2px black solid;\r\n  border-left: 2px black solid;\r\n  border-bottom: 2px black solid;\r\n  border-radius: 9px 0 0 9px;\r\n  background: none;\r\n}\r\n\r\n.input-icon[_ngcontent-%COMP%] {\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%] {\r\n  border: 2px solid black;\r\n  border-radius: 10px;\r\n  padding: 5px 15px;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.track-square[_ngcontent-%COMP%] {\r\n  height: 130px;\r\n  width: 130px;\r\n  border: 4px #aca4a4 solid;\r\n  margin: 5% 5%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-basis: 33%;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.track-label[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding-top: 40%;\r\n  font-size: 14px;\r\n  color: #605959;\r\n  font-family: 'Roboto Mono', monospace;\r\n}\r\n\r\n.bin-icon[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  position: relative;\r\n  z-index: 999;\r\n  bottom: 87px;\r\n}\r\n\r\n.submit-btn[_ngcontent-%COMP%] {\r\n  font-family: 'Abhaya Libre', serif;\r\n  font-size: 20px;\r\n  padding: 5px 50px;\r\n}\r\n\r\n.btn-div[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n\r\n\r\n.selected-track-img[_ngcontent-%COMP%] {\r\n  height: 130px;\r\n  width: 130px;\r\n  margin-bottom: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.selected-track-img[_ngcontent-%COMP%]:hover {\r\n  opacity: 30%;\r\n}\r\n\r\n.search-result-container[_ngcontent-%COMP%] {\r\n  width: 60%;\r\n  height: 300px;\r\n  overflow-y: auto;\r\n  background-color: #E4E4E4;\r\n}\r\n\r\n.track-wrapper[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  padding: 8px 25px;\r\n  align-items: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.track-wrapper[_ngcontent-%COMP%]:hover {\r\n  background-color: #DBD8D8;\r\n}\r\n\r\n.album-img[_ngcontent-%COMP%] {\r\n  margin-right: 25px;\r\n  width: 90px;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n  .album-img[_ngcontent-%COMP%] {\r\n    width: 60px;\r\n  }\r\n  .track-name[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    margin-bottom: 5px;\r\n  }\r\n\r\n  .artist-name[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 540px) {\r\n  .search-result-container[_ngcontent-%COMP%] {\r\n    width: 320px;\r\n  }\r\n\r\n  .input-field[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsaWNlLXZpYmUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGdCQUFnQjtFQUNoQixZQUFZOztBQUVkOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFDQTs7O0dBR0c7O0FBRUg7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0FBQ0YiLCJmaWxlIjoiYWxpY2UtdmliZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBmb250LWZhbWlseTogJ0FiaGF5YSBMaWJyZScsIHNlcmlmO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxJTtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2U7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB3aWR0aDogNTAwcHg7XHJcblxyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICBib3JkZXItdG9wOiAycHggYmxhY2sgc29saWQ7XHJcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGJsYWNrIHNvbGlkO1xyXG4gIGJvcmRlci1yaWdodDogMnB4IGJsYWNrIHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgOXB4IDlweCAwO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBvdXRsaW5lLXdpZHRoOiAwO1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgYm9yZGVyLXRvcDogMnB4IGJsYWNrIHNvbGlkO1xyXG4gIGJvcmRlci1sZWZ0OiAycHggYmxhY2sgc29saWQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGJsYWNrIHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweCAwIDAgOXB4O1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbi5pbnB1dC1pY29uIHtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLmlucHV0LWZpZWxkIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRyYWNrLXNxdWFyZSB7XHJcbiAgaGVpZ2h0OiAxMzBweDtcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgYm9yZGVyOiA0cHggI2FjYTRhNCBzb2xpZDtcclxuICBtYXJnaW46IDUlIDUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWJhc2lzOiAzMyU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRyYWNrLWxhYmVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDQwJTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM2MDU5NTk7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTtcclxufVxyXG5cclxuLmJpbi1pY29uIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgYm90dG9tOiA4N3B4O1xyXG59XHJcblxyXG4uc3VibWl0LWJ0biB7XHJcbiAgZm9udC1mYW1pbHk6ICdBYmhheWEgTGlicmUnLCBzZXJpZjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgcGFkZGluZzogNXB4IDUwcHg7XHJcbn1cclxuXHJcbi5idG4tZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4vKlxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufSAqL1xyXG5cclxuLnNlbGVjdGVkLXRyYWNrLWltZyB7XHJcbiAgaGVpZ2h0OiAxMzBweDtcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zZWxlY3RlZC10cmFjay1pbWc6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDMwJTtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHQtY29udGFpbmVyIHtcclxuICB3aWR0aDogNjAlO1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTRFNEU0O1xyXG59XHJcblxyXG4udHJhY2std3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiA4cHggMjVweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRyYWNrLXdyYXBwZXI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNEQkQ4RDg7XHJcbn1cclxuXHJcbi5hbGJ1bS1pbWcge1xyXG4gIG1hcmdpbi1yaWdodDogMjVweDtcclxuICB3aWR0aDogOTBweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5hbGJ1bS1pbWcge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgfVxyXG4gIC50cmFjay1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB9XHJcblxyXG4gIC5hcnRpc3QtbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0MHB4KSB7XHJcbiAgLnNlYXJjaC1yZXN1bHQtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICB9XHJcblxyXG4gIC5pbnB1dC1maWVsZCB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BobVibePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bob-vibe-page',
                templateUrl: './bob-vibe-page.component.html',
                styleUrls: ['../alice-vibe-page/alice-vibe-page.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_spotify_service__WEBPACK_IMPORTED_MODULE_3__["SpotifyService"] }]; }, null); })();


/***/ }),

/***/ "FyLO":
/*!****************************************************!*\
  !*** ./src/app/error-page/error-page.component.ts ***!
  \****************************************************/
/*! exports provided: ErrorPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorPageComponent", function() { return ErrorPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class ErrorPageComponent {
    constructor() { }
    ngOnInit() {
    }
}
ErrorPageComponent.ɵfac = function ErrorPageComponent_Factory(t) { return new (t || ErrorPageComponent)(); };
ErrorPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ErrorPageComponent, selectors: [["app-error-page"]], decls: 7, vars: 0, consts: [[1, "container", "d-flex", "flex-column", "align-items-center", "justify-content-center", 2, "height", "100vh"], [2, "font-size", "3.5rem", "font-family", "Abhaya Libre", "line-height", "100%", "text-align", "center"], [1, "btn"], ["routerLink", "/", 2, "color", "white", "text-decoration", "none", "font-size", "20px"], ["src", "../../assets/arrow-right.svg", "alt", ""]], template: function ErrorPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Oh no... Something went wrong :( ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Try vibing again ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: [".btn[_ngcontent-%COMP%] {\r\n  border-radius: 4px; background-color: #212121; color: white; padding: 10px 35px; border: none; margin-top: 50px;\r\n}\r\n\r\n.btn[_ngcontent-%COMP%]:hover {\r\n  background-color: #424242;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVycm9yLXBhZ2UuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFrQixFQUFFLHlCQUF5QixFQUFFLFlBQVksRUFBRSxrQkFBa0IsRUFBRSxZQUFZLEVBQUUsZ0JBQWdCO0FBQ2pIOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6ImVycm9yLXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idG4ge1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDsgYmFja2dyb3VuZC1jb2xvcjogIzIxMjEyMTsgY29sb3I6IHdoaXRlOyBwYWRkaW5nOiAxMHB4IDM1cHg7IGJvcmRlcjogbm9uZTsgbWFyZ2luLXRvcDogNTBweDtcclxufVxyXG5cclxuLmJ0bjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNDI0MjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-error-page',
                templateUrl: './error-page.component.html',
                styleUrls: ['./error-page.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "JhD/":
/*!**********************************************!*\
  !*** ./src/app/landing/landing.component.ts ***!
  \**********************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_spotify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/spotify.service */ "nNar");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");




class LandingComponent {
    constructor(spotifySrv) {
        this.spotifySrv = spotifySrv;
    }
    login() {
        this.spotifySrv.authorize();
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_spotify_service__WEBPACK_IMPORTED_MODULE_1__["SpotifyService"])); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["app-landing"]], decls: 10, vars: 0, consts: [[1, "container", "d-flex", 2, "height", "100vh", "flex-direction", "column", "justify-content", "center", "align-items", "center"], [1, "title"], [1, "desc"], ["mat-raised-button", "", "color", "primary", 1, "login-btn", 3, "click"], ["src", "../../../assets/images/spotify.svg", "alt", "spotify", 1, "spotify-icon"], [1, "credit"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "vibing.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Create a personalised playlist for you and your friends_");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_5_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Login with Spotify ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Created by Tiffany, Lawson, Terry & Yongler for Hack&Roll 2021");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: [".title[_ngcontent-%COMP%] {\r\n  font-family: 'Abhaya Libre', serif;\r\n  font-size: 5rem;\r\n}\r\n\r\n.desc[_ngcontent-%COMP%] {\r\n  font-family: 'Roboto Mono';\r\n  font-size: 18px;\r\n  text-align: center;\r\n  margin-top: 20px;\r\n}\r\n\r\n.login-btn[_ngcontent-%COMP%] {\r\n    font-family: 'Abhaya Libre', serif;\r\n    font-size: 20px;\r\n    margin-top: 100px;\r\n    margin-left: -5px;\r\n    padding: 5px 20px;\r\n}\r\n\r\n.spotify-icon[_ngcontent-%COMP%] {\r\n    height: 30px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.credit[_ngcontent-%COMP%] {\r\n  position: absolute;\r\n  left: 22px;\r\n  bottom: 0;\r\n  font-size: 12px;\r\n  font-family: 'Roboto Mono';\r\n  width: 300px;\r\n}\r\n\r\n@media only screen and (max-width: 400px) {\r\n  .credit[_ngcontent-%COMP%] {\r\n    font-size: 11px;\r\n    width: 218px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtDQUFrQztFQUNsQyxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsMEJBQTBCO0VBQzFCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLFNBQVM7RUFDVCxlQUFlO0VBQ2YsMEJBQTBCO0VBQzFCLFlBQVk7QUFDZDs7QUFFQTtFQUNFO0lBQ0UsZUFBZTtJQUNmLFlBQVk7RUFDZDtBQUNGIiwiZmlsZSI6ImxhbmRpbmcuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdBYmhheWEgTGlicmUnLCBzZXJpZjtcclxuICBmb250LXNpemU6IDVyZW07XHJcbn1cclxuXHJcbi5kZXNjIHtcclxuICBmb250LWZhbWlseTogJ1JvYm90byBNb25vJztcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5sb2dpbi1idG4ge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBYmhheWEgTGlicmUnLCBzZXJpZjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IC01cHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcclxufVxyXG5cclxuLnNwb3RpZnktaWNvbiB7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5jcmVkaXQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAyMnB4O1xyXG4gIGJvdHRvbTogMDtcclxuICBmb250LXNpemU6IDEycHg7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTW9ubyc7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgLmNyZWRpdCB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgICB3aWR0aDogMjE4cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-landing',
                templateUrl: './landing.component.html',
                styleUrls: ['./landing.component.css']
            }]
    }], function () { return [{ type: src_app_services_spotify_service__WEBPACK_IMPORTED_MODULE_1__["SpotifyService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
    constructor() {
        this.title = 'vibing';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "UlRw":
/*!***************************************************************************************!*\
  !*** ./src/app/input-page/name-friend-input-page/name-friend-input-page.component.ts ***!
  \***************************************************************************************/
/*! exports provided: NameFriendInputPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NameFriendInputPageComponent", function() { return NameFriendInputPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





class NameFriendInputPageComponent {
    constructor(router, route) {
        this.router = router;
        this.route = route;
        this.secondname = '';
        this.submitButtonAppear = false;
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            this.token = params['token'],
                this.firstname = params['firstname'];
        });
        if (this.token === '' || !this.token) {
            this.router.navigate(['/error']);
        }
    }
    onSubmit() {
        // this.nameService.setSecondName(this.secondname);
        this.router.navigate(['/alice-vibe'], { queryParams: { token: this.token,
                firstname: this.firstname,
                secondname: this.secondname
            }
        });
    }
    change(event) {
        if (this.secondname != '') {
            this.submitButtonAppear = true;
        }
        if (this.secondname == '') {
            this.submitButtonAppear = false;
        }
    }
}
NameFriendInputPageComponent.ɵfac = function NameFriendInputPageComponent_Factory(t) { return new (t || NameFriendInputPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
NameFriendInputPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NameFriendInputPageComponent, selectors: [["app-name-friend-input-page"]], decls: 8, vars: 3, consts: [[1, "container", "d-flex"], [1, "question"], [1, "input-group", "mb-5"], ["type", "text", "placeholder", "Your name here...", "aria-label", "Name", "autofocus", "", 1, "form-control", "no-border", 3, "ngModel", "ngModelChange"], [1, "hidden"], ["mat-raised-button", "", "color", "primary", 1, "submit-btn", 3, "click"]], template: function NameFriendInputPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Who are you vibing with?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function NameFriendInputPageComponent_Template_input_ngModelChange_4_listener($event) { return ctx.secondname = $event; })("ngModelChange", function NameFriendInputPageComponent_Template_input_ngModelChange_4_listener($event) { return ctx.change($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NameFriendInputPageComponent_Template_button_click_6_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.secondname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("show", ctx.submitButtonAppear);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"]], styles: [".container[_ngcontent-%COMP%] {\r\n  height: 100vh;\r\n  flex-direction: column;\r\n  padding-left: 90px;\r\n  justify-content: center;\r\n}\r\n\r\n.question[_ngcontent-%COMP%] {\r\n  font-family: 'Abhaya Libre';\r\n  font-size: 2rem;\r\n  line-height: 90%;\r\n  margin-bottom: 5%;\r\n}\r\n\r\n.no-border[_ngcontent-%COMP%] {\r\n  border: 0;\r\n  box-shadow: none;\r\n  padding: 0;\r\n  font-family: 'Roboto Mono';\r\n  font-size: 30px;\r\n}\r\n\r\n.submit-btn[_ngcontent-%COMP%] {\r\n  font-family: 'Abhaya Libre', serif;\r\n  font-size: 20px;\r\n  padding: 5px 20px;\r\n}\r\n\r\n.show[_ngcontent-%COMP%] {\r\n  opacity: 1 !important;\r\n  transition: .5s ease-in-out all;\r\n}\r\n\r\n.hidden[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  transition: .5s ease-in-out all;\r\n}\r\n\r\n@media only screen and (max-width: 768px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    padding-left: 50px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 500px) {\r\n  .input[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n  }\r\n\r\n  .question[_ngcontent-%COMP%] {\r\n    margin-bottom: 10%;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 388px) {\r\n  .container[_ngcontent-%COMP%] {\r\n    padding-left: 20px;\r\n  }\r\n\r\n  .no-border[_ngcontent-%COMP%] {\r\n    font-size: 18px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hbWUtaW5wdXQtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsU0FBUztFQUNULGdCQUFnQjtFQUNoQixVQUFVO0VBQ1YsMEJBQTBCO0VBQzFCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0U7SUFDRSxrQkFBa0I7RUFDcEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJuYW1lLWlucHV0LXBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXIge1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBwYWRkaW5nLWxlZnQ6IDkwcHg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5xdWVzdGlvbiB7XHJcbiAgZm9udC1mYW1pbHk6ICdBYmhheWEgTGlicmUnO1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBsaW5lLWhlaWdodDogOTAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDUlO1xyXG59XHJcblxyXG4ubm8tYm9yZGVyIHtcclxuICBib3JkZXI6IDA7XHJcbiAgYm94LXNoYWRvdzogbm9uZTtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG5cclxuLnN1Ym1pdC1idG4ge1xyXG4gIGZvbnQtZmFtaWx5OiAnQWJoYXlhIExpYnJlJywgc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHBhZGRpbmc6IDVweCAyMHB4O1xyXG59XHJcblxyXG4uc2hvdyB7XHJcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IC41cyBlYXNlLWluLW91dCBhbGw7XHJcbn1cclxuXHJcbi5oaWRkZW4ge1xyXG4gIG9wYWNpdHk6IDA7XHJcbiAgdHJhbnNpdGlvbjogLjVzIGVhc2UtaW4tb3V0IGFsbDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA1MHB4O1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gIC5pbnB1dCB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgfVxyXG5cclxuICAucXVlc3Rpb24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzODhweCkge1xyXG4gIC5jb250YWluZXIge1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLm5vLWJvcmRlciB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NameFriendInputPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-name-friend-input-page',
                templateUrl: './name-friend-input-page.component.html',
                styleUrls: ['../name-input-page/name-input-page.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material.module */ "vvyD");
/* harmony import */ var _loading_page_loading_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loading-page/loading-page.component */ "8j34");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _input_page_name_input_page_name_input_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./input-page/name-input-page/name-input-page.component */ "DXW9");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _input_page_name_friend_input_page_name_friend_input_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./input-page/name-friend-input-page/name-friend-input-page.component */ "UlRw");
/* harmony import */ var _vibe_page_alice_vibe_page_alice_vibe_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./vibe-page/alice-vibe-page/alice-vibe-page.component */ "rd1i");
/* harmony import */ var _vibe_page_bob_vibe_page_bob_vibe_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./vibe-page/bob-vibe-page/bob-vibe-page.component */ "FRcQ");
/* harmony import */ var _selected_vibes_page_selected_vibes_page_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./selected-vibes-page/selected-vibes-page.component */ "8MU8");
/* harmony import */ var _selected_vibes_page_selected_track_selected_track_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./selected-vibes-page/selected-track/selected-track.component */ "aEf1");
/* harmony import */ var _result_page_result_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./result-page/result-page.component */ "7ALP");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./error-page/error-page.component */ "FyLO");




















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"],
        _loading_page_loading_page_component__WEBPACK_IMPORTED_MODULE_8__["LoadingPageComponent"],
        _input_page_name_input_page_name_input_page_component__WEBPACK_IMPORTED_MODULE_10__["NameInputPageComponent"],
        _input_page_name_friend_input_page_name_friend_input_page_component__WEBPACK_IMPORTED_MODULE_12__["NameFriendInputPageComponent"],
        _vibe_page_alice_vibe_page_alice_vibe_page_component__WEBPACK_IMPORTED_MODULE_13__["AliceVibePageComponent"],
        _vibe_page_bob_vibe_page_bob_vibe_page_component__WEBPACK_IMPORTED_MODULE_14__["BobVibePageComponent"],
        _selected_vibes_page_selected_vibes_page_component__WEBPACK_IMPORTED_MODULE_15__["SelectedVibesPageComponent"],
        _selected_vibes_page_selected_track_selected_track_component__WEBPACK_IMPORTED_MODULE_16__["SelectedTrackComponent"],
        _result_page_result_page_component__WEBPACK_IMPORTED_MODULE_17__["ResultPageComponent"],
        _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_18__["ErrorPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
        _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _landing_landing_component__WEBPACK_IMPORTED_MODULE_5__["LandingComponent"],
                    _loading_page_loading_page_component__WEBPACK_IMPORTED_MODULE_8__["LoadingPageComponent"],
                    _input_page_name_input_page_name_input_page_component__WEBPACK_IMPORTED_MODULE_10__["NameInputPageComponent"],
                    _input_page_name_friend_input_page_name_friend_input_page_component__WEBPACK_IMPORTED_MODULE_12__["NameFriendInputPageComponent"],
                    _vibe_page_alice_vibe_page_alice_vibe_page_component__WEBPACK_IMPORTED_MODULE_13__["AliceVibePageComponent"],
                    _vibe_page_bob_vibe_page_bob_vibe_page_component__WEBPACK_IMPORTED_MODULE_14__["BobVibePageComponent"],
                    _selected_vibes_page_selected_vibes_page_component__WEBPACK_IMPORTED_MODULE_15__["SelectedVibesPageComponent"],
                    _selected_vibes_page_selected_track_selected_track_component__WEBPACK_IMPORTED_MODULE_16__["SelectedTrackComponent"],
                    _result_page_result_page_component__WEBPACK_IMPORTED_MODULE_17__["ResultPageComponent"],
                    _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_18__["ErrorPageComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
                    _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FontAwesomeModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aEf1":
/*!********************************************************************************!*\
  !*** ./src/app/selected-vibes-page/selected-track/selected-track.component.ts ***!
  \********************************************************************************/
/*! exports provided: SelectedTrackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedTrackComponent", function() { return SelectedTrackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SelectedTrackComponent {
    constructor() { }
    ngOnInit() {
        // console.log(this.track)
        if (this.track != undefined) {
            this.trackId = this.track.trackId;
            this.name = this.track.name;
            this.imgPath = this.track.imagePath;
            this.artist = this.track.artist;
        }
    }
}
SelectedTrackComponent.ɵfac = function SelectedTrackComponent_Factory(t) { return new (t || SelectedTrackComponent)(); };
SelectedTrackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SelectedTrackComponent, selectors: [["app-selected-track"]], inputs: { track: "track" }, decls: 9, vars: 3, consts: [[1, "container", "track"], [1, "row"], [1, "col-md-auto", "d-flex", "justify-content-center"], ["alt", "", 1, "album-art", 3, "src"], [1, "col", 2, "padding-top", "5px"], ["id", "name"], ["id", "artist"]], template: function SelectedTrackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.imgPath, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.artist);
    } }, styles: [".track[_ngcontent-%COMP%] {\r\n  padding: 10px 15px;\r\n}\r\n\r\n.album-art[_ngcontent-%COMP%] {\r\n  height: 100px;\r\n  width: 100px;\r\n}\r\n\r\n#name[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  color: #000000;\r\n  font-family: 'Roboto Mono', serif;\r\n}\r\n\r\n#artist[_ngcontent-%COMP%] {\r\n  font-size: 14px;\r\n  color: #605959;\r\n  font-family: 'Roboto Mono', serif;\r\n\r\n}\r\n\r\n.co[_ngcontent-%COMP%] {\r\n  margin: 0 0px;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n  #name[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n\r\n  #artist[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlbGVjdGVkLXRyYWNrLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGlDQUFpQzs7QUFFbkM7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGIiwiZmlsZSI6InNlbGVjdGVkLXRyYWNrLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHJhY2sge1xyXG4gIHBhZGRpbmc6IDEwcHggMTVweDtcclxufVxyXG5cclxuLmFsYnVtLWFydCB7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbn1cclxuXHJcbiNuYW1lIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6ICMwMDAwMDA7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTW9ubycsIHNlcmlmO1xyXG59XHJcblxyXG4jYXJ0aXN0IHtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM2MDU5NTk7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTW9ubycsIHNlcmlmO1xyXG5cclxufVxyXG5cclxuLmNvIHtcclxuICBtYXJnaW46IDAgMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XHJcbiAgI25hbWUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuXHJcbiAgI2FydGlzdCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SelectedTrackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-selected-track',
                templateUrl: './selected-track.component.html',
                styleUrls: ['./selected-track.component.css']
            }]
    }], function () { return []; }, { track: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "nNar":
/*!*********************************************!*\
  !*** ./src/app/services/spotify.service.ts ***!
  \*********************************************/
/*! exports provided: SpotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotifyService", function() { return SpotifyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../environments/environment */ "AytR");





class SpotifyService {
    constructor(http) {
        this.http = http;
        this.baseUrl = 'https://api.spotify.com/v1';
        this.client_id = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].CLIENT_ID;
        // private redirect_uri = 'http://localhost:4200/name-input';
        this.redirect_uri = 'https://v-ibing.herokuapp.com/name-input';
        this.stateKey = 'spotify_auth_state';
    }
    generateRandomString(length) {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
    getHashParams() {
        var hashParams = {};
        var e, r = /([^&;=]+)=?([^&;]*)/g, q = window.location.hash.substring(1);
        while (e = r.exec(q)) {
            hashParams[e[1]] = decodeURIComponent(e[2]);
        }
        return hashParams;
    }
    authorize() {
        var state = this.generateRandomString(16);
        localStorage.setItem(this.stateKey, state);
        var scope = 'user-read-private playlist-modify-public';
        var url = 'https://accounts.spotify.com/authorize';
        url += '?response_type=token';
        url += '&client_id=' + encodeURIComponent(this.client_id);
        url += '&scope=' + encodeURIComponent(scope);
        url += '&redirect_uri=' + encodeURIComponent(this.redirect_uri);
        url += '&state=' + encodeURIComponent(state);
        window.location.href = url;
    }
    getToken() {
        var params = this.getHashParams();
        var access_token = params.access_token;
        var state = params.state;
        var storedState = localStorage.getItem(this.stateKey);
        if (access_token && (state == null || state !== storedState)) {
            alert("There was an error during authentication");
        }
        else {
            localStorage.removeItem(this.stateKey);
            return access_token;
        }
    }
    getCurrUser(token) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': `Bearer ${token}`
        });
        return this.http.get(`${this.baseUrl}/me`, { headers });
    }
    // login() {
    //   const authorizationTokenUrl = `https://accounts.spotify.com/api/token`;
    //   const body = 'grant_type=client_credentials';
    //   return this.http.post(authorizationTokenUrl, body, {
    //       headers: new HttpHeaders({
    //           Authorization:
    //               'Basic  ' + btoa(this.client_id + ':' + this.client_secret),
    //           'Content-Type': 'application/x-www-form-urlencoded;',
    //       }),
    //   });
    // }
    searchMusic(str, type, token) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': `Bearer ${token}`
        });
        return this.http.get(`${this.baseUrl}/search?query=${str}&offset=0&limit=10&type=${type}`, { headers });
    }
    getTrack(trackId, token) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': `Bearer ${token}`
        });
        return this.http.get(`${this.baseUrl}/tracks/${trackId}`, { headers });
    }
    getRecommendedTracks(token, track1, track2, track3, track4) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': `Bearer ${token}`
        });
        return this.http.get(`${this.baseUrl}/recommendations?&seed_tracks=${track1},${track2},${track3},${track4}&limit=50`, { headers });
    }
    createPlaylist(name, token, url) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': `Bearer ${token}`
        });
        return this.http.post(`${url}/playlists`, { name: name }, { headers });
    }
    addToPlaylist(playlistId, token, uris) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': `Bearer ${token}`, 'Content-Type': 'application/json'
        });
        return this.http.post(`${this.baseUrl}/playlists/${playlistId}/tracks`, { uris: uris }, { headers });
    }
    getPlaylist(playlistId, token) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Authorization': `Bearer ${token}`
        });
        return this.http.get(`${this.baseUrl}/playlists/${playlistId}`, { headers });
    }
}
SpotifyService.ɵfac = function SpotifyService_Factory(t) { return new (t || SpotifyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SpotifyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SpotifyService, factory: SpotifyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpotifyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "rd1i":
/*!************************************************************************!*\
  !*** ./src/app/vibe-page/alice-vibe-page/alice-vibe-page.component.ts ***!
  \************************************************************************/
/*! exports provided: AliceVibePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AliceVibePageComponent", function() { return AliceVibePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_spotify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/spotify.service */ "nNar");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "bTqV");









function AliceVibePageComponent_div_9_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AliceVibePageComponent_div_9_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const track_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.selectTrack(track_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const track_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", track_r3.album.images[1].url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](track_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](track_r3.artists[0].name);
} }
function AliceVibePageComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AliceVibePageComponent_div_9_div_1_Template, 7, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.searchResults);
} }
function AliceVibePageComponent_div_10_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "TRACK 1");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c0 = function () { return { "border": "none", "height": "auto" }; };
function AliceVibePageComponent_div_10_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AliceVibePageComponent_div_10_div_3_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.removeSelected(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r7.selectedTracks[0].img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.selectedTracks[0].trackName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r7.selectedTracks[0].artistName);
} }
function AliceVibePageComponent_div_10_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "TRACK 2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AliceVibePageComponent_div_10_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AliceVibePageComponent_div_10_div_6_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r12.removeSelected(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r9.selectedTracks[1].img, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.selectedTracks[1].trackName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r9.selectedTracks[1].artistName);
} }
function AliceVibePageComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AliceVibePageComponent_div_10_div_2_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AliceVibePageComponent_div_10_div_3_Template, 6, 5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AliceVibePageComponent_div_10_div_5_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AliceVibePageComponent_div_10_div_6_Template, 6, 5, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectedTracks[0].trackId === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectedTracks[0].trackId !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectedTracks[1].trackId === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.selectedTracks[1].trackId !== "");
} }
class AliceVibePageComponent {
    constructor(router, route, spotifySrv) {
        this.router = router;
        this.route = route;
        this.spotifySrv = spotifySrv;
        this.faSearch = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faSearch"];
        this.token = '';
        this.firstname = '';
        this.secondname = '';
        this.trackNameSearched = '';
        this.searchResults = [];
        this.selectedTracks = [{
                trackId: '',
                trackName: '',
                artistName: '',
                img: '',
            }, {
                trackId: '',
                trackName: '',
                artistName: '',
                img: '',
            }];
        this.route.queryParams.subscribe(params => {
            this.token = params['token'],
                this.firstname = params['firstname'];
            this.secondname = params['secondname'];
        });
        if (this.token === '' || !this.token) {
            this.router.navigate(['/error']);
        }
    }
    onContinue() {
        this.router.navigate(['/bob-vibe'], { queryParams: { token: this.token,
                firstname: this.firstname,
                secondname: this.secondname,
                aliceFirstSong: this.selectedTracks[0].trackId,
                aliceSecondSong: this.selectedTracks[1].trackId,
            }
        });
    }
    change(event) {
        if (this.trackNameSearched !== '') {
            this.getTracks();
        }
    }
    getTracks() {
        this.spotifySrv.searchMusic(this.trackNameSearched, 'track,artist', this.token).subscribe(res => {
            this.searchResults = res.tracks.items;
            // console.log(this.searchResults)
        });
    }
    selectTrack(track) {
        if (this.selectedTracks[0].trackId === '') {
            this.selectedTracks[0].trackId = track.id;
            this.selectedTracks[0].trackName = track.name;
            this.selectedTracks[0].artistName = track.artists[0].name;
            this.selectedTracks[0].img = track.album.images[1].url;
        }
        else if (this.selectedTracks[1].trackId === '') {
            this.selectedTracks[1].trackId = track.id;
            this.selectedTracks[1].trackName = track.name;
            this.selectedTracks[1].artistName = track.artists[0].name;
            this.selectedTracks[1].img = track.album.images[1].url;
        }
        this.trackNameSearched = '';
    }
    removeSelected(index) {
        this.selectedTracks[index].trackId = '';
        this.selectedTracks[index].trackName = '';
        this.selectedTracks[index].artistName = '';
        this.selectedTracks[index].img = '';
    }
}
AliceVibePageComponent.ɵfac = function AliceVibePageComponent_Factory(t) { return new (t || AliceVibePageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_spotify_service__WEBPACK_IMPORTED_MODULE_3__["SpotifyService"])); };
AliceVibePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AliceVibePageComponent, selectors: [["app-alice-vibe-page"]], decls: 14, vars: 6, consts: [[1, "container", "d-flex"], [1, "title"], [1, "form-container", "mt-4"], [1, "input-group"], [1, "input-group-prepend"], ["id", "basic-addon1", 1, "input-group-text"], [1, "input-icon", 3, "icon"], ["type", "text", "placeholder", "Choose tracks", "aria-label", "Username", "aria-describedby", "basic-addon1", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "search-result-container", 4, "ngIf"], ["class", "row d-flex mt-5", "style", "align-items: flex-start; width: 100%; max-width: 600px;", 4, "ngIf"], [1, "btn-div", 2, "margin-top", "10px", 3, "hidden"], ["mat-raised-button", "", "color", "primary", 1, "submit-btn", 3, "click"], [1, "search-result-container"], ["class", "track-wrapper", 3, "click", 4, "ngFor", "ngForOf"], [1, "track-wrapper", 3, "click"], ["alt", "album art", 1, "album-img", 3, "src"], [2, "word-wrap", "break-word"], [1, "track-name"], [1, "artist-name", 2, "color", "#605959", "margin-bottom", "0"], [1, "row", "d-flex", "mt-5", 2, "align-items", "flex-start", "width", "100%", "max-width", "600px"], [1, "col-sm-6", "d-flex", "justify-content-center", "align-items-center"], ["class", "track-square", 4, "ngIf"], ["class", "track-square", 3, "ngStyle", "click", 4, "ngIf"], [1, "track-square"], [1, "track-label"], [1, "track-square", 3, "ngStyle", "click"], [1, "selected-track-img", 3, "src"], [2, "font-size", "19px"], [2, "color", "#605959", "margin-bottom", "0", "font-size", "15px"]], template: function AliceVibePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AliceVibePageComponent_Template_input_ngModelChange_8_listener($event) { return ctx.trackNameSearched = $event; })("ngModelChange", function AliceVibePageComponent_Template_input_ngModelChange_8_listener($event) { return ctx.change($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AliceVibePageComponent_div_9_Template, 2, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, AliceVibePageComponent_div_10_Template, 7, 4, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AliceVibePageComponent_Template_button_click_12_listener() { return ctx.onContinue(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.firstname, "'s Vibe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faSearch);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.trackNameSearched);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchResults.length > 0 && ctx.trackNameSearched !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.searchResults.length === 0 || ctx.trackNameSearched === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hidden", ctx.selectedTracks[0].trackId === "" || ctx.selectedTracks[1].trackId === "");
    } }, directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgStyle"]], styles: [".container[_ngcontent-%COMP%] {\r\n  height: 100vh;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 50px;\r\n  font-family: 'Abhaya Libre', serif;\r\n}\r\n\r\n.title[_ngcontent-%COMP%] {\r\n  font-size: 50px;\r\n  margin-bottom: 1%;\r\n}\r\n\r\n.form-container[_ngcontent-%COMP%] {\r\n  font-size: 16px;\r\n  width: 60%;\r\n  max-width: 500px;\r\n}\r\n\r\n.input[_ngcontent-%COMP%] {\r\n  font-family: 'Roboto Mono', monospace;\r\n  margin-bottom: 0;\r\n  width: 500px;\r\n\r\n}\r\n\r\n.form-control[_ngcontent-%COMP%] {\r\n  border-top: 2px black solid;\r\n  border-left: none;\r\n  border-bottom: 2px black solid;\r\n  border-right: 2px black solid;\r\n  border-radius: 0 9px 9px 0;\r\n}\r\n\r\ninput[_ngcontent-%COMP%]:focus {\r\n  outline: none;\r\n  outline-width: 0;\r\n}\r\n\r\n.input-group-text[_ngcontent-%COMP%] {\r\n  border-top: 2px black solid;\r\n  border-left: 2px black solid;\r\n  border-bottom: 2px black solid;\r\n  border-radius: 9px 0 0 9px;\r\n  background: none;\r\n}\r\n\r\n.input-icon[_ngcontent-%COMP%] {\r\n  font-size: 0.9rem;\r\n}\r\n\r\n.input-field[_ngcontent-%COMP%] {\r\n  border: 2px solid black;\r\n  border-radius: 10px;\r\n  padding: 5px 15px;\r\n  width: 100%;\r\n  text-align: center;\r\n}\r\n\r\n.track-square[_ngcontent-%COMP%] {\r\n  height: 130px;\r\n  width: 130px;\r\n  border: 4px #aca4a4 solid;\r\n  margin: 5% 5%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n  text-align: center;\r\n}\r\n\r\n.row[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-basis: 33%;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.track-label[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding-top: 40%;\r\n  font-size: 14px;\r\n  color: #605959;\r\n  font-family: 'Roboto Mono', monospace;\r\n}\r\n\r\n.bin-icon[_ngcontent-%COMP%] {\r\n  opacity: 0;\r\n  position: relative;\r\n  z-index: 999;\r\n  bottom: 87px;\r\n}\r\n\r\n.submit-btn[_ngcontent-%COMP%] {\r\n  font-family: 'Abhaya Libre', serif;\r\n  font-size: 20px;\r\n  padding: 5px 50px;\r\n}\r\n\r\n.btn-div[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n\r\n\r\n.selected-track-img[_ngcontent-%COMP%] {\r\n  height: 130px;\r\n  width: 130px;\r\n  margin-bottom: 10px;\r\n  cursor: pointer;\r\n}\r\n\r\n.selected-track-img[_ngcontent-%COMP%]:hover {\r\n  opacity: 30%;\r\n}\r\n\r\n.search-result-container[_ngcontent-%COMP%] {\r\n  width: 60%;\r\n  height: 300px;\r\n  overflow-y: auto;\r\n  background-color: #E4E4E4;\r\n}\r\n\r\n.track-wrapper[_ngcontent-%COMP%] {\r\n  display: flex;\r\n  padding: 8px 25px;\r\n  align-items: center;\r\n  cursor: pointer;\r\n}\r\n\r\n.track-wrapper[_ngcontent-%COMP%]:hover {\r\n  background-color: #DBD8D8;\r\n}\r\n\r\n.album-img[_ngcontent-%COMP%] {\r\n  margin-right: 25px;\r\n  width: 90px;\r\n}\r\n\r\n@media only screen and (max-width: 767px) {\r\n  .album-img[_ngcontent-%COMP%] {\r\n    width: 60px;\r\n  }\r\n  .track-name[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n    margin-bottom: 5px;\r\n  }\r\n\r\n  .artist-name[_ngcontent-%COMP%] {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n@media only screen and (max-width: 540px) {\r\n  .search-result-container[_ngcontent-%COMP%] {\r\n    width: 320px;\r\n  }\r\n\r\n  .input-field[_ngcontent-%COMP%] {\r\n    width: 300px;\r\n  }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsaWNlLXZpYmUtcGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixlQUFlO0VBQ2Ysa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixVQUFVO0VBQ1YsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UscUNBQXFDO0VBQ3JDLGdCQUFnQjtFQUNoQixZQUFZOztBQUVkOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLGlCQUFpQjtFQUNqQiw4QkFBOEI7RUFDOUIsNkJBQTZCO0VBQzdCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwyQkFBMkI7RUFDM0IsNEJBQTRCO0VBQzVCLDhCQUE4QjtFQUM5QiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1oseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsZUFBZTtFQUNmLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGNBQWM7RUFDZCxxQ0FBcUM7QUFDdkM7O0FBRUE7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQ0FBa0M7RUFDbEMsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFDQTs7O0dBR0c7O0FBRUg7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsVUFBVTtFQUNWLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRTtJQUNFLFdBQVc7RUFDYjtFQUNBO0lBQ0UsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7RUFFQTtJQUNFLGVBQWU7RUFDakI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UsWUFBWTtFQUNkOztFQUVBO0lBQ0UsWUFBWTtFQUNkO0FBQ0YiLCJmaWxlIjoiYWxpY2UtdmliZS1wYWdlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBmb250LWZhbWlseTogJ0FiaGF5YSBMaWJyZScsIHNlcmlmO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogNTBweDtcclxuICBtYXJnaW4tYm90dG9tOiAxJTtcclxufVxyXG5cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG59XHJcblxyXG4uaW5wdXQge1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvIE1vbm8nLCBtb25vc3BhY2U7XHJcbiAgbWFyZ2luLWJvdHRvbTogMDtcclxuICB3aWR0aDogNTAwcHg7XHJcblxyXG59XHJcblxyXG4uZm9ybS1jb250cm9sIHtcclxuICBib3JkZXItdG9wOiAycHggYmxhY2sgc29saWQ7XHJcbiAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGJsYWNrIHNvbGlkO1xyXG4gIGJvcmRlci1yaWdodDogMnB4IGJsYWNrIHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgOXB4IDlweCAwO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBvdXRsaW5lLXdpZHRoOiAwO1xyXG59XHJcblxyXG4uaW5wdXQtZ3JvdXAtdGV4dCB7XHJcbiAgYm9yZGVyLXRvcDogMnB4IGJsYWNrIHNvbGlkO1xyXG4gIGJvcmRlci1sZWZ0OiAycHggYmxhY2sgc29saWQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IGJsYWNrIHNvbGlkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDlweCAwIDAgOXB4O1xyXG4gIGJhY2tncm91bmQ6IG5vbmU7XHJcbn1cclxuXHJcbi5pbnB1dC1pY29uIHtcclxuICBmb250LXNpemU6IDAuOXJlbTtcclxufVxyXG5cclxuLmlucHV0LWZpZWxkIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDVweCAxNXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnRyYWNrLXNxdWFyZSB7XHJcbiAgaGVpZ2h0OiAxMzBweDtcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgYm9yZGVyOiA0cHggI2FjYTRhNCBzb2xpZDtcclxuICBtYXJnaW46IDUlIDUlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLnJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWJhc2lzOiAzMyU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnRyYWNrLWxhYmVsIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgcGFkZGluZy10b3A6IDQwJTtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgY29sb3I6ICM2MDU5NTk7XHJcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTtcclxufVxyXG5cclxuLmJpbi1pY29uIHtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiA5OTk7XHJcbiAgYm90dG9tOiA4N3B4O1xyXG59XHJcblxyXG4uc3VibWl0LWJ0biB7XHJcbiAgZm9udC1mYW1pbHk6ICdBYmhheWEgTGlicmUnLCBzZXJpZjtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgcGFkZGluZzogNXB4IDUwcHg7XHJcbn1cclxuXHJcbi5idG4tZGl2IHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4vKlxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufSAqL1xyXG5cclxuLnNlbGVjdGVkLXRyYWNrLWltZyB7XHJcbiAgaGVpZ2h0OiAxMzBweDtcclxuICB3aWR0aDogMTMwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5zZWxlY3RlZC10cmFjay1pbWc6aG92ZXIge1xyXG4gIG9wYWNpdHk6IDMwJTtcclxufVxyXG5cclxuLnNlYXJjaC1yZXN1bHQtY29udGFpbmVyIHtcclxuICB3aWR0aDogNjAlO1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTRFNEU0O1xyXG59XHJcblxyXG4udHJhY2std3JhcHBlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nOiA4cHggMjVweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLnRyYWNrLXdyYXBwZXI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNEQkQ4RDg7XHJcbn1cclxuXHJcbi5hbGJ1bS1pbWcge1xyXG4gIG1hcmdpbi1yaWdodDogMjVweDtcclxuICB3aWR0aDogOTBweDtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gIC5hbGJ1bS1pbWcge1xyXG4gICAgd2lkdGg6IDYwcHg7XHJcbiAgfVxyXG4gIC50cmFjay1uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICB9XHJcblxyXG4gIC5hcnRpc3QtbmFtZSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU0MHB4KSB7XHJcbiAgLnNlYXJjaC1yZXN1bHQtY29udGFpbmVyIHtcclxuICAgIHdpZHRoOiAzMjBweDtcclxuICB9XHJcblxyXG4gIC5pbnB1dC1maWVsZCB7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AliceVibePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-alice-vibe-page',
                templateUrl: './alice-vibe-page.component.html',
                styleUrls: ['./alice-vibe-page.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _services_spotify_service__WEBPACK_IMPORTED_MODULE_3__["SpotifyService"] }]; }, null); })();


/***/ }),

/***/ "svHA":
/*!********************************!*\
  !*** ./src/app/track.model.ts ***!
  \********************************/
/*! exports provided: Track */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Track", function() { return Track; });
class Track {
    constructor(trackId, name, artist, imagePath) {
        this.trackId = trackId;
        this.name = name;
        this.artist = artist;
        this.imagePath = imagePath;
    }
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _vibe_page_alice_vibe_page_alice_vibe_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vibe-page/alice-vibe-page/alice-vibe-page.component */ "rd1i");
/* harmony import */ var _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./landing/landing.component */ "JhD/");
/* harmony import */ var _vibe_page_bob_vibe_page_bob_vibe_page_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vibe-page/bob-vibe-page/bob-vibe-page.component */ "FRcQ");
/* harmony import */ var _loading_page_loading_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./loading-page/loading-page.component */ "8j34");
/* harmony import */ var _input_page_name_friend_input_page_name_friend_input_page_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input-page/name-friend-input-page/name-friend-input-page.component */ "UlRw");
/* harmony import */ var _input_page_name_input_page_name_input_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./input-page/name-input-page/name-input-page.component */ "DXW9");
/* harmony import */ var _result_page_result_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./result-page/result-page.component */ "7ALP");
/* harmony import */ var _selected_vibes_page_selected_vibes_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./selected-vibes-page/selected-vibes-page.component */ "8MU8");
/* harmony import */ var _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./error-page/error-page.component */ "FyLO");













const routes = [
    { path: '', component: _landing_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"] },
    { path: 'loading', component: _loading_page_loading_page_component__WEBPACK_IMPORTED_MODULE_5__["LoadingPageComponent"] },
    { path: 'name-input', component: _input_page_name_input_page_name_input_page_component__WEBPACK_IMPORTED_MODULE_7__["NameInputPageComponent"] },
    { path: 'name-friend-input', component: _input_page_name_friend_input_page_name_friend_input_page_component__WEBPACK_IMPORTED_MODULE_6__["NameFriendInputPageComponent"] },
    { path: 'alice-vibe', component: _vibe_page_alice_vibe_page_alice_vibe_page_component__WEBPACK_IMPORTED_MODULE_2__["AliceVibePageComponent"] },
    { path: 'bob-vibe', component: _vibe_page_bob_vibe_page_bob_vibe_page_component__WEBPACK_IMPORTED_MODULE_4__["BobVibePageComponent"] },
    { path: 'selected-vibes', component: _selected_vibes_page_selected_vibes_page_component__WEBPACK_IMPORTED_MODULE_9__["SelectedVibesPageComponent"] },
    { path: 'result', component: _result_page_result_page_component__WEBPACK_IMPORTED_MODULE_8__["ResultPageComponent"] },
    { path: 'error', component: _error_page_error_page_component__WEBPACK_IMPORTED_MODULE_10__["ErrorPageComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "vvyD":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/grid-list */ "zkoq");






class MaterialModule {
}
MaterialModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MaterialModule });
MaterialModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MaterialModule_Factory(t) { return new (t || MaterialModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
            _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"]
        ], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MaterialModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"]], exports: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
        _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MaterialModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"]
                ],
                exports: [
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"],
                    _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");


// import { environment } from './environments/environment';
// if (environment.production) {
//   enableProdMode();
// }
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map