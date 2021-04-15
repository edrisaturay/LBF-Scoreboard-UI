window._ = require('lodash');
import 'bootstrap';
import '@fortawesome/fontawesome-free'
/**
 * We'll load jQuery and the Bootstrap jQuery plugin which provides support
 * for JavaScript based Bootstrap features such as modals and tabs. This
 * code may be modified to fit the specific needs of your application.
 */

try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
} catch (e) {}


$(document).ready(function () {
    let data = {
      home_team: {
        name: "Lakers",
        logo: "home-logo",
        score: 50,
        players: [
          { number: 6, foul: 3 },
          { number: 32, foul: 0 },
          { number: 12, foul: 2 },
          { number: 8, foul: 4 },
          { number: 52, foul: 1 },
          { number: 36, foul: 0 },
          { number: 5, foul: 0 },
          { number: 7, foul: 5 },
          { number: 9, foul: 5 },
          { number: 11, foul: 3 },
          { number: 15, foul: 5 },
          { number: 20, foul: 2 },
        ],
      },
      away_team: {
        name: "Worriors",
        logo: "away-logo",
        score: 48,
        players: [
          { number: 4, foul: 3 },
          { number: 21, foul: 5 },
          { number: 58, foul: 1 },
          { number: 3, foul: 5 },
          { number: 97, foul: 2 },
          { number: 7, foul: 1 },
          { number: 0, foul: 0 },
          { number: 39, foul: 0 },
          { number: 92, foul: 0 },
          { number: 12, foul: 2 },
          { number: 5, foul: 1 },
          { number: 7, foul: 4 },
        ],
      },
    };

    let buildFouls = (foul) => {
        let output = "";

        for(let i=0; i<foul; i++){
            output +=
              '<div class="col-2" id="player-foul-' +
              (i + 1) +
              '">' +
              '<i class="fas fa-bahai"></i>' +
              "</div>";
        }

        return output;
    }
  
    let buildFouler = (fouler, index) => {
        let output = "";
        output += '<div class="row my-3" id="fouler-'+ (index + 1) +'">'
            + '<div class="col-2 text-danger">'+ fouler.foul +'</div>'
            + buildFouls(fouler.foul)
        +'</div>'
        return output;
    }

    let buildNumbers = (number, index) => {
        let output = "";
        output += '<div class="row my-3 text-center" id="player-number-'+ (index + 1) +'"><div class="col"><span>'+ number +'</span></div></div>';
        return output;
    }

    data.home_team.players.forEach((item, index) => {
        let foulsContainer = $("#home-fouls");
        foulsContainer.append(buildFouler(item, index));

        let numbersContainer = $("#home-numbers");
        numbersContainer.append(buildNumbers(item.number, index));
    });

    data.away_team.players.forEach((item, index) => {
        let foulsContainer = $("#away-fouls");
        foulsContainer.append(buildFouler(item, index));

        let numbersContainer = $("#away-numbers");
        numbersContainer.append(buildNumbers(item.number, index));
    });

    let buildLogo = (logo) => {
        return (
          '<img class="team-logo w-100" src="images/' +
            logo +
          '.png"/>'
        );
    }

    let homeLogo = $('#home-logo');
    homeLogo.html(buildLogo(data.home_team.logo));

    let awayLogo = $("#away-logo");
    awayLogo.html(buildLogo(data.away_team.logo));

});