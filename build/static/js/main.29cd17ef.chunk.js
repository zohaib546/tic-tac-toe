(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,function(e,a,t){e.exports={scorePanel:"Score_scorePanel__36YOx",playerPanel:"Score_playerPanel__21cxg",title:"Score_title__1jEmR",titleSign:"Score_titleSign__2hrtN",score:"Score_score__1ttHK",scoreBox:"Score_scoreBox__cXOht",player1:"Score_player1__1ZAzO",player2:"Score_player2__1eq1W",playerIcon:"Score_playerIcon__1InOh",playerText:"Score_playerText__3Mq_i"}},,function(e,a,t){e.exports={square:"Square_square__2fJnZ",disabled:"Square_disabled__1Lc1f",over:"Square_over__1SsHn",tie:"Square_tie__2PO-a","border-blink":"Square_border-blink__1HGHq",winner:"Square_winner__2-jrI",blink:"Square_blink__3B3o4"}},,,function(e,a,t){e.exports={restart:"Restart_restart__3tAwQ",hide:"Restart_hide__hu02z",show:"Restart_show__3V_kh"}},,,function(e,a,t){e.exports={board:"Board_board__ujF2G",boardContainer:"Board_boardContainer__2wXnk"}},,function(e,a,t){e.exports={gameContainer:"Game_gameContainer__2CIiI"}},,,,,,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var r=t(11),c=t.n(r),n=(t(18),t(5)),o=t(13),s=t(1),i=t(3),l=t(4),p=t.n(l),u=t(0),y=function(e){var a=e.offset,t=e.value,r=e.animateGameBoard,c=e.winner,n=e.tie,o=e.onMove;return Object(u.jsx)("div",{className:"1"===r.animateBoard[a.rowId][a.colId]&&c.isWinner&&t?"".concat(p.a.square," ").concat(p.a.disabled," ").concat(p.a.winner):"0"===r.animateBoard[a.rowId][a.colId]&&c.isWinner?"".concat(p.a.square," ").concat(p.a.disabled," ").concat(p.a.over):"0"===r.animateBoard[a.rowId][a.colId]&&!c.isWinner&&n.isTie?"".concat(p.a.square," ").concat(p.a.disabled," ").concat(p.a.over," ").concat(p.a.tie):!c.isWinner&&t?"".concat(p.a.square," ").concat(p.a.disabled):"".concat(p.a.square),onClick:function(){o(a)},children:t})},d=t(10),_=t.n(d),O=function(e){var a=e.board;return Object(u.jsx)("div",{className:_.a.board,children:Object(u.jsx)("div",{className:_.a.boardContainer,children:a.gameBoard.map((function(a,t){return a.map((function(a,r){return Object(u.jsx)(y,Object(s.a)({offset:{rowId:t,colId:r},value:a},e),function(e,a){return"".concat(e,"_").concat(a)}(t,r))}))}))})})},j=t(2),m=t.n(j),b=function(e){var a=e.score,t=e.computerPlaying,r=e.multiplaying,c=e.turn,n=e.tie,o=e.winner,s=a.gameScore.playerVsPlayer,i=s.player1,l=s.player2,p=s.tie,y=a.gameScore.playerVsComputer,d=y.player,_=y.computer,O=y.tie,j=r.isMultiplaying?"2p":"1p",b=r.isMultiplaying?"player 2":"computer";return Object(u.jsxs)("div",{className:o.isWinner||n.isTie?m.a.scorePanel:r.isMultiplaying&&"x"===c.activeTurn?"".concat(m.a.scorePanel," ").concat(m.a.player1):r.isMultiplaying&&"o"===c.activeTurn?"".concat(m.a.scorePanel," ").concat(m.a.player2):m.a.scorePanel,onClick:function(){r.doMultiplaying()},children:[Object(u.jsxs)("div",{className:m.a.scoreBox,children:[Object(u.jsxs)("p",{className:m.a.title,children:["Player 1 (",Object(u.jsx)("span",{className:m.a.titleSign,children:"x"}),")"]}),r.isMultiplaying&&Object(u.jsx)("span",{className:m.a.score,children:i}),t.isComputerPlaying&&Object(u.jsx)("span",{className:m.a.score,children:d})]}),Object(u.jsxs)("div",{className:m.a.scoreBox,children:[Object(u.jsx)("p",{className:m.a.title,children:"Tie"}),r.isMultiplaying&&Object(u.jsx)("span",{className:m.a.score,children:p}),t.isComputerPlaying&&Object(u.jsx)("span",{className:m.a.score,children:O})]}),Object(u.jsxs)("div",{className:m.a.scoreBox,children:[Object(u.jsxs)("p",{className:m.a.title,children:[b," (",Object(u.jsx)("span",{className:m.a.titleSign,children:"o"}),")"]}),r.isMultiplaying&&Object(u.jsx)("span",{className:m.a.score,children:l}),t.isComputerPlaying&&Object(u.jsx)("span",{className:m.a.score,children:_})]}),Object(u.jsxs)("div",{className:m.a.playerPanel,children:[Object(u.jsx)("svg",{className:m.a.playerIcon,xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 100 100",children:Object(u.jsxs)("g",{fill:"#fff",children:[!r.isMultiplaying&&Object(u.jsx)("path",{className:"person1",d:"M49.947,90.991c0.693,0,1.41,0.02,2.104,0c13.547-0.201,26.439-1.723,28.775-3.945 c0.537-4.928,1.195-7.311-20.65-17.644c-3.107-1.742-1.465-8.492-1.465-8.492c6.578-4.969,11.096-16.463,11.096-25.676 c0-15.921-7.18-23.453-17.756-24.234h-2.104c-10.557,0.781-17.734,8.312-17.734,24.234c0,9.213,4.496,20.707,11.078,25.676 c0,0,1.641,6.75-1.449,8.492C19.979,79.735,20.635,82.118,21.176,87.046C23.51,89.269,36.402,90.79,49.947,90.991z"}),r.isMultiplaying&&Object(u.jsx)("path",{className:"person2",d:"M66.219,85h1.562c9.92-0.14,19.38-1.2,21.08-2.779c0.422-3.44,0.9-5.101-15.142-12.341 c-2.279-1.22-1.059-5.939-1.059-5.939c4.822-3.48,8.123-11.521,8.123-17.98c0-11.14-5.263-16.419-13.001-16.959h-1.562 c-7.738,0.54-13,5.799-13,16.959c0,6.46,3.301,14.5,8.121,17.98c0,0,1.221,4.719-1.059,5.939c-16.041,7.24-15.562,8.9-15.14,12.341 C46.84,83.8,56.301,84.86,66.219,85z M30.217,69h1.564c9.918-0.14,19.378-1.2,21.078-2.779c0.422-3.44,0.9-5.1-15.14-12.34 c-2.279-1.22-1.059-5.939-1.059-5.939c4.82-3.48,8.121-11.521,8.121-17.98c0-11.14-5.262-16.42-13-16.96h-1.564 c-7.738,0.54-13,5.8-13,16.96c0,6.459,3.301,14.5,8.121,17.98c0,0,1.221,4.72-1.059,5.939c-16.041,7.24-15.562,8.9-15.14,12.34 C10.839,67.8,20.299,68.86,30.217,69z"})]})}),Object(u.jsx)("span",{className:m.a.playerText,children:j})]})]})},f=t(7),A=t.n(f),h=function(e){var a=e.winner,t=e.tie,r=e.restart;return Object(u.jsx)("div",{className:a.isWinner||t.isTie?"".concat(A.a.restart," ").concat(A.a.show):"".concat(A.a.restart," ").concat(A.a.hide),onClick:r})},E=t(12),x=t.n(E),C=function(e){return Object(u.jsxs)("div",{className:x.a.gameContainer,children:[Object(u.jsx)(O,Object(s.a)({},e)),Object(u.jsx)(b,Object(s.a)({},e)),Object(u.jsx)(h,Object(s.a)({},e))]})};function g(e,a){return e.split("")[a]}function N(e,a){return e=Math.ceil(e),a=Math.floor(a),Math.floor(Math.random()*(a-e+1)+e)}function R(e,a){return e===a[0][0]&&e===a[0][1]&&e===a[0][2]?{posA:"00",posB:"01",posC:"02"}:e===a[1][0]&&e===a[1][1]&&e===a[1][2]?{posA:"10",posB:"11",posC:"12"}:e===a[2][0]&&e===a[2][1]&&e===a[2][2]?{posA:"20",posB:"21",posC:"22"}:e===a[0][0]&&e===a[1][0]&&e===a[2][0]?{posA:"00",posB:"10",posC:"20"}:e===a[0][1]&&e===a[1][1]&&e===a[2][1]?{posA:"01",posB:"11",posC:"21"}:e===a[0][2]&&e===a[1][2]&&e===a[2][2]?{posA:"02",posB:"12",posC:"22"}:e===a[0][0]&&e===a[1][1]&&e===a[2][2]?{posA:"00",posB:"11",posC:"22"}:e===a[0][2]&&e===a[1][1]&&e===a[2][0]&&{posA:"02",posB:"11",posC:"20"}}var M={playerVsComputer:{player:0,computer:0,tie:0},playerVsPlayer:{player1:0,player2:0,tie:0}},S=[["","",""],["","",""],["","",""]],P=[["0","0","0"],["0","0","0"],["0","0","0"]];function v(e,a){switch(a.type){case"MANAGE_PLAYERS_SCORE":var t=a.playerId,r=Object(s.a)(Object(s.a)({},e),{},{playerVsComputer:Object(s.a)({},e.playerVsComputer),playerVsPlayer:Object(s.a)({},e.playerVsPlayer)});return 1===t?r.playerVsPlayer.player1+=1:2===t&&(r.playerVsPlayer.player2+=1),r;case"MANAGE_PLAYERS_TIE":var c=a.multiplaying,n=Object(s.a)(Object(s.a)({},e),{},{playerVsComputer:Object(s.a)({},e.playerVsComputer),playerVsPlayer:Object(s.a)({},e.playerVsPlayer)});return c&&(n.playerVsPlayer.tie+=1),n;case"PLAYER_VS_COMPUTER_SCORE":var o=a.winner,i=Object(s.a)(Object(s.a)({},e),{},{playerVsComputer:Object(s.a)({},e.playerVsComputer),playerVsPlayer:Object(s.a)({},e.playerVsPlayer)});return"player"===o&&(i.playerVsComputer.player+=1),"computer"===o&&(i.playerVsComputer.computer+=1),i;case"PLAYER_VS_COMPUTER_TIE":var l=Object(s.a)(Object(s.a)({},e),{},{playerVsComputer:Object(s.a)({},e.playerVsComputer),playerVsPlayer:Object(s.a)({},e.playerVsPlayer)});return l.playerVsComputer.tie+=1,l;default:throw new Error("This action is unrecognized!")}}function w(e,a){switch(a.type){case"MARK_MOVE_ON_BOARD":var t=a.payload.offset,r=t.row,c=t.col,n=a.payload.mark,s=e.map((function(e){return e.map((function(e){return e}))}));return s[r][c]=n,Object(o.a)(s);case"CLEAR_BOARD":return e.map((function(e){return e.map((function(e){return""}))}));default:throw new Error("This action is unrecognized!")}}function I(e,a){switch(a.type){case"ANIMATE_WINNER":var t=a.payload.coordinates,r=t.posA,c=t.posB,n=t.posC,o=e.map((function(e){return e.map((function(e){return e}))})),s=g(r,0),i=g(r,1),l=g(c,0),p=g(c,1),u=g(n,0),y=g(n,1);return o[s][i]="1",o[l][p]="1",o[u][y]="1",o;case"ANIMATE_CLEAR":return e.map((function(e){return e.map((function(e){return"0"}))}));default:throw new Error("This action is unrecognized!")}}var B=function(){var e=Object(i.useReducer)(v,M),a=Object(n.a)(e,2),t=a[0],r=a[1],c=Object(i.useReducer)(w,S),o=Object(n.a)(c,2),l=o[0],p=o[1],y=Object(i.useReducer)(I,P),d=Object(n.a)(y,2),_=d[0],O=d[1],j=Object(i.useState)(!0),m=Object(n.a)(j,2),b=m[0],f=m[1],A=Object(i.useState)(!1),h=Object(n.a)(A,2),E=h[0],x=h[1],g=Object(i.useState)(!1),B=Object(n.a)(g,2),T=B[0],V=B[1],k=Object(i.useState)(!1),L=Object(n.a)(k,2),q=L[0],W=L[1],G=Object(i.useState)(""),Y=Object(n.a)(G,2),D=Y[0],z=Y[1],K=Object(i.useState)(!1),U=Object(n.a)(K,2),H=U[0],J=U[1],X=Object(i.useState)(!1),Z=Object(n.a)(X,2),F=Z[0],Q=Z[1];Object(i.useEffect)((function(){var e;T||E||!b||"x"!==D?T||E||!b||"computer"!==D?T||!E||b||"x"!==D?T||!E||b||"o"!==D||(e=R("o",l),console.log("check winner for o"),e&&(V(!0),r({type:"MANAGE_PLAYERS_SCORE",playerId:2}),O({type:"ANIMATE_WINNER",payload:{coordinates:e}}))):(e=R("x",l),console.log("check winner for x"),e&&(V(!0),r({type:"MANAGE_PLAYERS_SCORE",playerId:1}),O({type:"ANIMATE_WINNER",payload:{coordinates:e}}),z("x"))):(e=R("o",l))&&(V(!0),r({type:"PLAYER_VS_COMPUTER_SCORE",winner:"computer"}),O({type:"ANIMATE_WINNER",payload:{coordinates:e}}),z("computer")):(e=R("x",l))?(V(!0),r({type:"PLAYER_VS_COMPUTER_SCORE",winner:"player"}),O({type:"ANIMATE_WINNER",payload:{coordinates:e}})):T||q||z("computer")}),[T,E,b,D,l]),Object(i.useEffect)((function(){E&&!b&&$()}),[D]),Object(i.useEffect)((function(){function e(){if("computer"===D&&!E&&b){var a=N(0,2),t=N(0,2);l[a][t]?$()||e():(p({type:"MARK_MOVE_ON_BOARD",payload:{offset:{row:a,col:t},mark:"o"}}),z(""))}}var a=setTimeout((function(){T||q||e()}),500);return function(){clearTimeout(a)}}),[D,b,E,T]),Object(i.useEffect)((function(){q&&!E&&b&&z("")}),[q,E,b]),Object(i.useEffect)((function(){H&&!F&&z("x"),!H&&F&&z("o"),T&&E&&z("x")})),Object(i.useEffect)((function(){E&&!b?z("x"):!E&&b&&z("")}),[E,b]);var $=function(){if(!q){var e=0;return l.forEach((function(a){return a.forEach((function(a){a&&e++}))})),9===e&&!T&&(W(!0),!E&&b&&r({type:"PLAYER_VS_COMPUTER_TIE"}),E&&!b&&r({type:"MANAGE_PLAYERS_TIE",multiplaying:!0}),!0)}},ee=function(){f((function(e){return!e}))},ae=function(){x((function(e){return!e}))};console.log("multiplayer",E),console.log("computerActive",b),console.log("turn",D),console.log("winner",T),console.log("tie",q),console.log("playerOnePlaying",H),console.log("playerTwoPlaying",F);var te={score:{gameScore:t,handleGameScore:r},computerPlaying:{isComputerPlaying:b,handleComputerPlaying:ee},multiplaying:{isMultiplaying:E,handleMultiplaying:ae,doMultiplaying:function(){ae(),ee(),p({type:"CLEAR_BOARD"}),O({type:"ANIMATE_CLEAR"}),J(!1),Q(!1),T&&V(!1),q&&W(!1)}},board:{gameBoard:l,handleGameBoard:p},animateGameBoard:{animateBoard:_,handleAnimateBoard:O},winner:{isWinner:T,handleWinner:V},tie:{isTie:q,handleTie:W,checkIsTie:$},turn:{activeTurn:D,handleActiveTurn:function(e){z(e)}},restart:function(){!E&&b?(p({type:"CLEAR_BOARD"}),O({type:"ANIMATE_CLEAR"}),z(""),f(!0),x(!1),T&&V(!1),q&&W(!1)):(p({type:"CLEAR_BOARD"}),O({type:"ANIMATE_CLEAR"}),z("x"),f(!1),x(!0),J(!1),Q(!1),T&&V(!1),q&&W(!1))},onMove:function(e){var a=e.rowId,t=e.colId;""===D?(z("x"),p({type:"MARK_MOVE_ON_BOARD",payload:{offset:{row:a,col:t},mark:"x"}})):"x"===D&&E&&!b?(p({type:"MARK_MOVE_ON_BOARD",payload:{offset:{row:a,col:t},mark:"x"}}),J(!1),Q(!0)):"o"===D&&E&&!b&&(p({type:"MARK_MOVE_ON_BOARD",payload:{offset:{row:a,col:t},mark:"o"}}),J(!0),Q(!1))}};return Object(u.jsx)(C,Object(s.a)({},te))};c.a.render(Object(u.jsx)(B,{}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.29cd17ef.chunk.js.map