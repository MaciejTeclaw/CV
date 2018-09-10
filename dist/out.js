/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/movement.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/movement.js":
/*!************************!*\
  !*** ./js/movement.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n$(function () {\n\n    $(document).keydown(function (movement) {\n\n        /* GENERAL */\n\n        var map = $('.map');\n        var info = $('.info');\n        var bubbly = $('.arrow_box');\n\n        // delete elements on move //\n        function removeEl(firstEl, secondEl, time) {\n            firstEl.fadeOut(time, function () {\n                firstEl.remove();\n            });\n            secondEl.fadeOut(time, function () {\n                secondEl.remove();\n            });\n        }\n\n        // hide and add elements //\n        function hideAndAdd(el, hideEl) {\n            if (el.length === 0) {\n                $(hideEl).hide().appendTo(map).slideToggle();\n            }\n        }\n\n        // hide and remove elements //\n\n        function hideAndRemove(addedEl) {\n            addedEl.slideToggle(500, function () {\n                addedEl.remove();\n            });\n        }\n\n        /* PLAYER */\n\n        var player = $('.player');\n        var playerPosition = player.position();\n        var playerPosLeft = function playerPosLeft() {\n            return playerPosition.left;\n        };\n        var playerPosTop = function playerPosTop() {\n            return playerPosition.top;\n        };\n\n        /* ABOUT ME */\n\n        var about = $('.about');\n        var aboutPos = about.position();\n        var aboutPosLeft = function aboutPosLeft() {\n            return aboutPos.left;\n        };\n        var aboutPosTop = function aboutPosTop() {\n            return aboutPos.top;\n        };\n\n        var aboutEl = '<div class=\"aboutEl border-3\">' + '<h3>Imię i nazwisko: Maciej Tecław</h3>' + '<p>Data urodzenia: 08.03.1990</p>' + '<p>Adres: ul. Jasna Rola 36F/23 <br> 61-609 Poznań</p>' + '<p>Telefon: 669258394</p>' + '<p>Email: maciejteclaw1990@gmail.com</p>' + '<p>Linki: <br> GitHub: https://github.com/MaciejTeclaw <br>LinkedIn: www.linkedin.com/in/maciej-teclaw-388091167/</p>' + '</div>';\n        var addAbout = $('.aboutEl');\n\n        /* LETTER */\n\n        var letter = $('.letter');\n        var letterPos = letter.position();\n        var letterPosLeft = function letterPosLeft() {\n            return letterPos.left;\n        };\n        var letterPosTop = function letterPosTop() {\n            return letterPos.top;\n        };\n        var letterEl = '<div class=\"letterEl border-6\"><p>\"Moje wcześniejsze doświadczenie zawodowe opiera się głównie na kontakcie z Klientem. Doszedłem jednak do wniosku, że zmiana branży umożliwi mi podjęcie pracy zgodnej z moimi zainteresowaniami, stworzy większe możliwości samorozwoju, a także pozwoli mi podjąć pracę, która się nie nudzi. Postawiłem na programowanie. Od tamtego momentu ukończyłem stacjonarny kurs JavaScript oraz spędzam coraz więcej wolnego na kodowaniu oraz doszkalaniu się w tej dziedzinie.\"</p></div>';\n        var addLetter = $('.letterEl');\n\n        /* SKILLS AND HOBBY */\n\n        var sah = $('.skillsAndHobby');\n        var sahPos = sah.position();\n        var sahPosLeft = function sahPosLeft() {\n            return sahPos.left;\n        };\n        var sahPosTop = function sahPosTop() {\n            return sahPos.top;\n        };\n        var sahEl = '<div class=\"sahEl border-5\">' + '<h3> Umiejętności:</h3>' + '<p> HTML,CSS, JavaScript (JQuery, React), Git, Gulp, Webpack <br> Język Angielski - średniozaawansowany' + '<br> Język niemiecki - podstawowy </p>' + '<h3>Zainteresowania:</h3>' + '<p> Muzyka rockowa oraz elektroniczna <br> Tresura psów <br> Piłka nożna (głównie Ekstraklasa oraz Lech Poznań)' + '<br> Jazda rowerem</p></div>';\n        var addSah = $('.sahEl');\n\n        /* EXP */\n\n        var exp = $('.exp');\n        var expPos = exp.position();\n        var expPosLeft = function expPosLeft() {\n            return expPos.left;\n        };\n        var expPosTop = function expPosTop() {\n            return expPos.top;\n        };\n        var expEl = '<div class=\"expEl border-4\">' + '<h3> Doświadczenie:</h3>' + '<p>01.2012 - 03.2017 - Pizza Express <br> Kierowca, Dyspozytor-Kierownik Zmiany</p>' + '<p>10.2016 - 04.2018 - OLX Group <br> Specjalista Do Spraw Obsługi Użytkownika</p>' + '<p>08.2018 - Obecnie - PolPol.pl <br> Stażysta - HTML, CSS, JavaScript (JQuery)</p>' + '</div>';\n        var addExp = $('.expEl');\n\n        // shark movement //\n        var shark = $('.shark');\n\n        function sharkAnimation() {\n\n            shark.animate({\n                left: \"+1350px\"\n            }, 2000);\n            shark.animate({\n                top: \"+640px\"\n            }, 1000);\n            shark.animate({\n                left: \"+50px\"\n            }, 2000);\n            shark.animate({\n                top: \"+10px\"\n            }, 1000);\n        }\n\n        sharkAnimation();\n\n        // movement on arrows //\n\n        switch (movement.keyCode) {\n            case 37:\n                player.css('left', playerPosition.left - 20 + 'px');\n                if (playerPosLeft() <= 0) {\n                    player.css('left', playerPosition.left + 20 + 'px');\n                }\n                removeEl(info, bubbly, 300);\n                break;\n            case 38:\n                player.css('top', playerPosition.top - 20 + 'px');\n                if (playerPosTop() <= 0) {\n                    player.css('top', playerPosition.top + 20 + 'px');\n                }\n                removeEl(info, bubbly, 300);\n                break;\n            case 39:\n                player.css('left', playerPosition.left + 20 + 'px');\n                if (playerPosLeft() >= map.width() - player.width()) {\n                    player.css('left', playerPosition.left - 20 + 'px');\n                }\n                removeEl(info, bubbly, 300);\n                break;\n            case 40:\n                player.css('top', playerPosition.top + 20 + 'px');\n                if (playerPosTop() >= map.height() - player.height()) {\n                    player.css('top', playerPosition.top - 20 + 'px');\n                }\n                removeEl(info, bubbly, 300);\n                break;\n        }\n\n        // show and remove about me element //\n\n        if (playerPosLeft() >= aboutPosLeft() && playerPosTop() >= aboutPosTop()) {\n            hideAndAdd(addAbout, aboutEl);\n        } else {\n            hideAndRemove(addAbout);\n        }\n\n        // show and remove cover letter element //\n\n        if (playerPosLeft() <= letterPosLeft() + (letter.width() - player.width()) && playerPosTop() <= letterPosTop() + (letter.height() - player.height())) {\n            hideAndAdd(addLetter, letterEl);\n        } else {\n            hideAndRemove(addLetter);\n        }\n\n        // show and remove skills and hobby element //\n\n        if (playerPosLeft() <= sahPosLeft() + (sah.width() - player.width()) && playerPosTop() >= sahPosTop()) {\n            hideAndAdd(addSah, sahEl);\n        } else {\n            hideAndRemove(addSah);\n        }\n\n        // show and remove experience element //\n\n        if (playerPosLeft() >= expPosLeft() && playerPosTop() <= expPosTop() + (exp.height() - player.width())) {\n            hideAndAdd(addExp, expEl);\n        } else {\n            hideAndRemove(addExp);\n        }\n    });\n});\n\n//# sourceURL=webpack:///./js/movement.js?");

/***/ })

/******/ });