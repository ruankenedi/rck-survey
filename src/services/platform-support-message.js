import { removeDOMElement } from '../utils';
import '../assets/css/platform-support-message.css';

const createMessage = (message, deviceInfo) => {
  const createDivElAndSetId = (type, id) => {
    const element = document.createElement(type);

    element.setAttribute('id', id);

    return element;
  };

  const appLoadingEl = document.getElementById('app-loader');
  const messageWrapperEl = createDivElAndSetId('div', 'app-loader-message-wrapper');
  const messageContentEl = createDivElAndSetId('div', 'app-loader-message-content');
  const messageHeadlineEl = createDivElAndSetId('h2', 'app-loader-message-title');
  const messageSubtitleEl = createDivElAndSetId('h3', 'app-loader-message-subtitle');
  const messageTextEl = createDivElAndSetId('p', 'app-loader-message-text');
  const messageButtonEl = createDivElAndSetId('div', 'app-loader-message-button');
  const loaderLogoEl = document.getElementById('app-loader-logo');
  const loaderTextEl = document.getElementById('app-loader-text');

  removeDOMElement(loaderTextEl);

  appLoadingEl.style.height = '100%';
  loaderLogoEl.style.marginTop = '-25vh';
  loaderLogoEl.style.paddingBottom = '24px';
  loaderLogoEl.style.maxWidth = '50%';
  loaderLogoEl.className = '';
  loaderLogoEl.innerHTML = `
  <?xml version="1.0" encoding="UTF-8" standalone="no"?>
  <!-- Generator: Adobe Illustrator 19.2.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
  
  <svg
     xmlns:dc="http://purl.org/dc/elements/1.1/"
     xmlns:cc="http://creativecommons.org/ns#"
     xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
     xmlns:svg="http://www.w3.org/2000/svg"
     xmlns="http://www.w3.org/2000/svg"
     xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
     xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
     version="1.1"
     id="Camada_1"
     x="0px"
     y="0px"
     viewBox="0 0 1696.9 1199.9"
     style="enable-background:new 0 0 1696.9 1199.9;"
     xml:space="preserve"
     sodipodi:docname="logotype-inverted.svg"
     inkscape:version="0.92.2pre0 (973e216, 2017-07-25)"><metadata
       id="metadata237"><rdf:RDF><cc:Work
           rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type
             rdf:resource="http://purl.org/dc/dcmitype/StillImage" /><dc:title></dc:title></cc:Work></rdf:RDF></metadata><defs
       id="defs235" /><sodipodi:namedview
       pagecolor="#ffffff"
       bordercolor="#666666"
       borderopacity="1"
       objecttolerance="10"
       gridtolerance="10"
       guidetolerance="10"
       inkscape:pageopacity="0"
       inkscape:pageshadow="2"
       inkscape:window-width="1920"
       inkscape:window-height="1052"
       id="namedview233"
       showgrid="false"
       inkscape:zoom="0.36537214"
       inkscape:cx="972.10084"
       inkscape:cy="868.25937"
       inkscape:window-x="0"
       inkscape:window-y="0"
       inkscape:window-maximized="1"
       inkscape:current-layer="g178" /><style
       type="text/css"
       id="style160">
    .st0{fill:#0D3D63;}
    .st1{fill:#27AD7A;}
  </style><g
       id="g230"><g
         id="g178"><path
           class="st0"
           d="M540.3,517.4c-6.4-10.6-24-20.8-44.2-20.8c-26.1,0-38.6,10.9-38.6,24.8c0,16.2,19.2,20.8,41.5,23.4    c38.9,4.8,75,14.9,75,59.3c0,41.5-36.7,59.3-78.2,59.3c-38.1,0-67.3-11.7-81.2-45.8l29.3-15.2c8.2,20.5,29.8,29.5,52.4,29.5    c22.1,0,42.8-7.7,42.8-27.9c0-17.6-18.4-24.8-43.1-27.4c-38.1-4.5-73.2-14.6-73.2-56.4c0-38.3,37.8-54,72.1-54.3    c29,0,59.1,8.2,73.2,37L540.3,517.4z"
           id="path162" /><path
           class="st0"
           d="M711.4,527.6h31.1v131.2H712l-1.6-19.2c-7.5,15.4-27.9,22.9-42.6,23.2c-38.9,0.3-67.6-23.7-67.6-69.7    c0-45.2,30.1-68.9,68.4-68.7c17.6,0,34.3,8.2,41.8,21.3L711.4,527.6z M632.7,593c0,25,17.3,39.9,38.9,39.9    c51.1,0,51.1-79.6,0-79.6C650,553.4,632.7,568,632.7,593z"
           id="path164" /><path
           class="st0"
           d="M810.2,490.6v37.3h36.2v27.9h-36.5v56.7c0,12.5,6.9,18.6,17,18.6c5.1,0,10.9-1.6,15.7-4l9,27.7    c-9.3,3.7-17,5.3-26.9,5.6c-28.5,1.1-47.1-15.2-47.1-47.9v-56.7h-24.5v-27.9h24.5V494L810.2,490.6z"
           id="path166" /><path
           class="st0"
           d="M916.4,490.6v37.3h36.2v27.9h-36.5v56.7c0,12.5,6.9,18.6,17,18.6c5.1,0,10.9-1.6,15.7-4l9,27.7    c-9.3,3.7-17,5.3-26.9,5.6c-28.5,1.1-47.1-15.2-47.1-47.9v-56.7h-24.5v-27.9h24.5V494L916.4,490.6z"
           id="path168" /><path
           class="st0"
           d="M1006.9,527.6l2.4,15.2c10.1-16.2,23.7-18.6,37-18.6c13.6,0,26.6,5.3,33.8,12.5l-14.6,28.2    c-6.7-5.6-12.8-8.5-23.4-8.5c-17,0-32.7,9-32.7,33.3v69.2h-32.5V527.6H1006.9z"
           id="path170" /><path
           class="st0"
           d="M1196.4,527.6h31.1v131.2h-30.6l-1.6-19.2c-7.5,15.4-27.9,22.9-42.6,23.2c-38.9,0.3-67.6-23.7-67.6-69.7    c0-45.2,30.1-68.9,68.4-68.7c17.6,0,34.3,8.2,41.8,21.3L1196.4,527.6z M1117.6,593c0,25,17.3,39.9,38.9,39.9    c51.1,0,51.1-79.6,0-79.6C1134.9,553.4,1117.6,568,1117.6,593z"
           id="path172" /><path
           class="st0"
           d="M1370.4,642c-15.2,14.9-31.1,20.8-50.6,20.8c-38.1,0-69.7-22.9-69.7-69.5s31.7-69.5,69.7-69.5    c18.6,0,33,5.3,47.4,19.4l-20.5,21.6c-7.7-6.9-17.3-10.4-26.3-10.4c-21.8,0-37.8,16-37.8,38.9c0,25,17,38.3,37.3,38.3    c10.4,0,20.8-2.9,28.7-10.9L1370.4,642z"
           id="path174" /><path
           class="st0"
           d="M1416.4,472.7v107.5l44.2-52.7h38.9v1.9l-53.5,59.9l60.9,67.1v2.4h-39.1l-51.4-59.3v59.3H1384v-186h32.4    V472.7z"
           id="path176" /></g><g
         id="g224"
         style="fill:#ffffff"><path
           class="st0"
           d="M445.4,733.1h-5.2l-11-14.3h-3.5v14.3h-4.2V698h11.2c6.7,0,11.9,3,12,10.5c0.1,7-4.7,10-10.6,10.3    L445.4,733.1z M432.8,715.3c4.8,0,7.8-2,7.8-6.8c0-4.9-3.2-6.7-7.8-6.7h-7.1v13.5H432.8z"
           id="path180"
           style="fill:#ffffff" /><path
           class="st0"
           d="M466.6,697.8h5.1l12.7,35.3H480l-4.1-11.2h-13.6l-4,11.2H454L466.6,697.8z M474.6,718.1l-5.5-15.9l-5.5,15.9    H474.6z"
           id="path182"
           style="fill:#ffffff" /><path
           class="st0"
           d="M505.1,713.1c5.4,1.4,11,3.6,10.6,11.3c-0.3,6.4-6,9.4-11.4,9.4c-4.5,0-9.3-2.6-11.2-7.5l3.2-1.8    c1.3,3.4,4.5,5.6,8,5.6c4.2,0,7-2.3,7.3-5.9c0.4-5.1-4.3-6.5-7.6-7.4c-4.7-1.3-10.2-3.3-10-10.2c0.2-6.4,5.4-9.5,10.5-9.5    c4.5,0,8.8,2.4,10.5,6.9l-3.2,1.6c-1.3-3.2-4.3-4.7-7.2-4.7c-3.2,0-6.3,1.8-6.6,6C497.9,711.2,502.2,712.4,505.1,713.1z"
           id="path184"
           style="fill:#ffffff" /><path
           class="st0"
           d="M547,698v4h-8.7v31.1h-4.2V702h-8.7v-4H547z"
           id="path186"
           style="fill:#ffffff" /><path
           class="st0"
           d="M582.3,733.1h-5.2l-11-14.3h-3.5v14.3h-4.2V698h11.2c6.7,0,11.9,3,12,10.5c0.1,7-4.7,10-10.6,10.3    L582.3,733.1z M569.8,715.3c4.8,0,7.8-2,7.8-6.8c0-4.9-3.2-6.7-7.8-6.7h-7.1v13.5H569.8z"
           id="path188"
           style="fill:#ffffff" /><path
           class="st0"
           d="M612.4,701.7h-14.6v11.9h14.4v3.9h-14.4l-0.1,11.7h14.7v3.9h-18.8v-35.2h18.8L612.4,701.7L612.4,701.7z"
           id="path190"
           style="fill:#ffffff" /><path
           class="st0"
           d="M635,697.8h5.1l12.7,35.3h-4.4l-4.1-11.2h-13.6l-4,11.2h-4.4L635,697.8z M643,718.1l-5.5-15.9l-5.5,15.9H643z    "
           id="path192"
           style="fill:#ffffff" /><path
           class="st0"
           d="M679,728.3l-10.5-23.1v27.9h-4v-35.2h5.3l11,25.1l11-25.1h5.3v35.2h-4.2v-27.6l-10.3,22.9H679V728.3z"
           id="path194"
           style="fill:#ffffff" /><path
           class="st0"
           d="M730.5,701.7h-14.6v11.9h14.4v3.9h-14.4l-0.1,11.7h14.7v3.9h-18.8v-35.2h18.8L730.5,701.7L730.5,701.7z"
           id="path196"
           style="fill:#ffffff" /><path
           class="st0"
           d="M772.9,733.1h-5.8l-18-29.3v29.3H745v-35h5l18.8,30.5v-30.5h4.1L772.9,733.1L772.9,733.1z"
           id="path198"
           style="fill:#ffffff" /><path
           class="st0"
           d="M805.9,698v4h-8.7v31.1H793V702h-8.7v-4H805.9z"
           id="path200"
           style="fill:#ffffff" /><path
           class="st0"
           d="M850.2,715.6c0,9.9-8,18.2-17.9,18.2s-17.9-8.3-17.9-18.2s8-18.3,17.9-18.3    C842.2,697.4,850.2,705.8,850.2,715.6z M832.4,730c6.9,0,13.7-4.9,13.7-14.4c0-9.4-6.9-14.5-13.8-14.5    c-6.9,0.1-13.7,5.2-13.7,14.5C818.7,725.1,825.5,730,832.4,730z"
           id="path202"
           style="fill:#ffffff" /><path
           class="st0"
           d="M900.8,701.7h-14.6v11.9h14.4v3.9h-14.4l-0.1,11.7h14.7v3.9H882v-35.2h18.8L900.8,701.7L900.8,701.7z"
           id="path204"
           style="fill:#ffffff" /><path
           class="st0"
           d="M951.8,733.1h-17.7v-35h4.2v31.2h13.5V733.1z"
           id="path206"
           style="fill:#ffffff" /><path
           class="st0"
           d="M996.4,715.6c0,9.9-8,18.2-17.9,18.2s-17.9-8.3-17.9-18.2s8-18.3,17.9-18.3S996.4,705.8,996.4,715.6z     M978.6,730c6.9,0,13.7-4.9,13.7-14.4c0-9.4-6.9-14.5-13.8-14.5c-6.9,0.1-13.7,5.2-13.7,14.5C964.9,725.1,971.7,730,978.6,730z"
           id="path208"
           style="fill:#ffffff" /><path
           class="st0"
           d="M1040.5,703.6l-2.9,2.5c-2.6-3.1-7.3-4.9-11.4-4.9c-8.9,0-14.4,7.4-14.4,14.4c0,7.1,4.8,14.3,13.8,14.3    c6.1,0,12.5-4.3,13.2-10.8h-15.7v-3.8h20.2c0,10.1-7,18.4-17.7,18.4c-11.7,0-17.8-9-17.9-18.1c0-9.1,6.8-18.2,18.5-18.2    C1031.7,697.4,1037.2,699.7,1040.5,703.6z"
           id="path210"
           style="fill:#ffffff" /><path
           class="st0"
           d="M1057.2,697.9h4.1v35.2h-4.1V697.9z M1060.9,695.5h-3.7l3.2-5.8h4.7L1060.9,695.5z"
           id="path212"
           style="fill:#ffffff" /><path
           class="st0"
           d="M1085.9,713.1c5.4,1.4,11,3.6,10.6,11.3c-0.3,6.4-6,9.4-11.4,9.4c-4.5,0-9.3-2.6-11.2-7.5l3.2-1.8    c1.3,3.4,4.5,5.6,8,5.6c4.2,0,7-2.3,7.3-5.9c0.4-5.1-4.3-6.5-7.6-7.4c-4.7-1.3-10.2-3.3-10-10.2c0.2-6.4,5.4-9.5,10.5-9.5    c4.4,0,8.8,2.4,10.5,6.9l-3.2,1.6c-1.3-3.2-4.3-4.7-7.2-4.7c-3.2,0-6.3,1.8-6.6,6C1078.7,711.2,1083,712.4,1085.9,713.1z"
           id="path214"
           style="fill:#ffffff" /><path
           class="st0"
           d="M1127.8,698v4h-8.7v31.1h-4.2V702h-8.7v-4H1127.8z"
           id="path216"
           style="fill:#ffffff" /><path
           class="st0"
           d="M1139.4,697.9h4.1v35.2h-4.1V697.9z"
           id="path218"
           style="fill:#ffffff" /><path
           class="st0"
           d="M1185.1,705.5c-2.6-2.7-6.3-4.4-10.1-4.3c-9,0.1-13.7,7.3-13.7,14.5s4.8,14.2,13.7,14.2    c4.1,0,8.2-1.9,10.9-5.1l2.9,2.4c-3.3,4-8.3,6.5-13.8,6.5c-11.7,0-17.9-8.9-17.9-18s6.2-18.3,17.9-18.3c5,0,9.5,2,12.7,5.3    L1185.1,705.5z"
           id="path220"
           style="fill:#ffffff" /><path
           class="st0"
           d="M1210.2,697.8h5.1l12.7,35.3h-4.4l-4.1-11.2H1206l-4,11.2h-4.4L1210.2,697.8z M1218.2,718.1l-5.5-15.9    l-5.5,15.9H1218.2z"
           id="path222"
           style="fill:#ffffff" /></g><path
         class="st1"
         d="M1483.9,568.9l-5.9,8.1c8.9,7.7,8.3,25.1-0.2,33.3l6.3,7.8c6.3-6.1,10.9-16.3,10.6-25.6   C1494.5,583.3,1490.5,574.7,1483.9,568.9L1483.9,568.9z M1497.1,554l-6.2,7.9c8.1,7.6,13,18.7,13.3,30.4s-5,24.4-12.7,32.5l6.6,7.5   c9.6-10.1,16-25.7,15.6-40.3C1513.3,577.4,1507.2,563.5,1497.1,554L1497.1,554z M1510.2,539l-6.3,7.8c11.8,11.4,18.8,27.9,19.3,45   c0.5,17.4-6.6,35.2-17.9,47.4l6.7,7.4c13-14,21.2-35,20.7-55.1C1532.2,571.5,1524,552.3,1510.2,539L1510.2,539z"
         id="path226"
         style="fill:#ffffff" /><path
         class="st1"
         d="M260.5,457.1c-62.6,5.9-105.5,66.6-94.6,128.5c11.1,62.9,69.1,82.3,97.9,152.9c2.6,6.4,11.6,6.4,14.1,0   c31.9-78.3,99.8-93.6,99.8-175.1C377.7,501,324.2,451.1,260.5,457.1z M353.6,548.3l-0.6-1.1l0.3-0.3   C353.4,547.3,353.5,547.8,353.6,548.3z M316.6,535.8l-2.9,1.6h-3.8l-1.9-0.2l-4.6,2.6v4.8l-9.3,6.7l0.8,2.9h1.9l-0.5,2.7l-1.3,0.5   l-0.1,7.2l8.1,9.2h3.5l0.2-0.6h6.3l1.8-1.7h3.6l2,2l5.3,0.6l-0.7,7.1l5.9,10.5l-3.1,6l0.2,2.8l2.5,2.4v6.8l3.2,4.3v5.6h2.8   c-15.5,19.1-39.1,31.3-65.6,31.3c-46.6,0-84.6-37.9-84.6-84.6c0-11.7,2.4-22.9,6.7-33.1v-2.6l3-3.7c1.1-2,2.2-3.9,3.4-5.8l0.1,1.5   l-3.5,4.3c-1.1,2.1-2.1,4.1-3,6.3v4.8l3.5,1.7v6.7l3.4,5.7l2.8,0.4l0.4-2l-3.2-5l-0.6-4.8h1.9l0.8,5l4.7,6.8l-1.2,2.2l3,4.6   l7.4,1.8v-1.2l2.9,0.4l-0.3,2.1l2.3,0.4l3.6,1l5.1,5.8l6.5,0.5l0.6,5.3l-4.4,3.1l-0.2,4.7l-0.6,2.9l6.4,8l0.5,2.7   c0,0,2.3,0.6,2.6,0.6s5.2,3.7,5.2,3.7v14.5l1.8,0.5l-1.2,6.7l3,3.9l-0.5,6.6l3.9,6.9l5,4.4l5,0.1l0.5-1.6l-3.7-3.1l0.2-1.5l0.7-1.9   l0.1-1.9l-2.5-0.1l-1.3-1.6l2.1-2l0.3-1.5l-2.3-0.7l0.1-1.4l3.3-0.5l5-2.4l1.7-3.1l5.3-6.8l-1.2-5.3l1.6-2.8l4.9,0.2l3.3-2.6   l1.1-10.2l3.6-4.6l0.6-2.9l-3.3-1.1l-2.2-3.6l-7.4-0.1l-5.9-2.2l-0.3-4.2l-2-3.4l-5.3-0.1l-3.1-4.9l-2.7-1.4l-0.1,1.5l-5,0.3   l-1.8-2.5l-5.2-1.1l-4.3,4.9l-6.7-1.1l-0.5-7.6l-4.9-0.9l2-3.7l-0.6-2.1l-6.5,4.3l-4.1-0.5l-1.4-3.2l0.9-3.3l2.3-4.1l5.2-2.6h10v3   l3.6,1.7l-0.3-5.2l2.6-2.6l5.2-3.4l0.4-2.4l5.2-5.4l5.5-3.1l-0.5-0.4l3.7-3.5l1.4,0.4l0.6,0.8l1.4-1.6l0.4-0.2l-1.6-0.2l-1.6-0.5   v-1.5l0.8-0.7h1.8l0.9,0.4l0.7,1.5l0.9-0.1v-0.1l0.3,0.1l2.6-0.4l0.4-1.3l1.5,0.4v1.4l-1.4,0.9l0.2,1.5l4.7,1.4v0.1l1.1-0.1l0.1-2   l-3.7-1.7l-0.2-1l3.1-1.1l0.1-3l-3.2-2l-0.2-5L265,511h-1.6l0.4-3.8l-6-1.4l-2.5,1.9v5.8l-4.5,1.4l-1.8,3.8l-2,0.3v-4.8l-4.2-0.6   l-2.1-1.4l-0.9-3.1l7.5-4.4l3.7-1.1l0.4,2.5l2.1-0.1l0.1-1.3l2.2-0.3V504l-0.9-0.4l-0.2-1.3l2.6-0.2l1.6-1.7l0.1-0.1l0,0l0.5-0.5   l5.6-0.7l2.5,2.1l-6.4,3.4l8.2,1.9l1.1-2.7h3.6l1.3-2.4l-2.5-0.6v-3l-7.9-3.5l-5.5,0.6l-3.1,1.6l0.2,3.9l-3.2-0.5l-0.5-2.2l3.1-2.8   l-5.6-0.3l-1.6,0.5l-0.7,1.9l2.1,0.4l-0.4,2.1l-3.6,0.2l-0.6,1.4l-5.2,0.1c0,0-0.1-2.9-0.4-2.9c-0.2,0,4.1-0.1,4.1-0.1l3.1-3   l-1.7-0.8l-2.2,2.2l-3.7-0.2l-2.2-3.1h-4.8l-5,3.7h4.6l0.4,1.4l-1.2,1.1l5.1,0.2l0.8,1.8l-5.7-0.2l-0.3-1.4l-3.6-0.8l-1.9-1.1h-4.3   c14-10.2,31.1-16.2,49.7-16.2c21.4,0,40.9,8,55.8,21.1l-1,1.8l-3.9,1.5l-1.6,1.8l0.4,2.1l2,0.3l1.2,3l3.5-1.4l0.6,4.1h-1l-2.8-0.4   l-3.2,0.5l-3.1,4.3l-4.4,0.7l-0.6,3.7l1.9,0.4l-0.5,2.4l-4.3-0.9l-4,0.9l-0.8,2.2l0.7,4.7l2.3,1.1h3.9l2.6-0.2l0.8-2.1l4.2-5.4   l2.7,0.6l2.7-2.4l0.5,1.9l6.6,4.5l-0.8,1.1l-3-0.1l1.2,1.6l1.8,0.4l2.1-0.9v-2.6l0.9-0.5l-0.8-0.8l-4.4-2.4l-1.2-3.3h3.7l1.2,1.2   l3.2,2.7l0.1,3.3l3.3,3.5l1.2-4.8l2.3-1.2l0.4,3.9l2.2,2.4l4.4-0.1c0.9,2.2,1.6,4.4,2.3,6.7l-0.5,0.4h-6.7l-4.1-3.1l-4.3,0.4v2.6   h-1.4l-1.5-1.1l-7.5-1.9v-5L316.6,535.8z M224.2,506.3c0,0,1.8-0.3,2-0.3c0.1,0,0,1.8,0,1.8l-4.2,0.3l-0.8-0.9L224.2,506.3z    M221.3,503.8v-1.7V502h1.9l0.1-0.6h3v1.3l-0.9,1.1H221.3z M229.1,516l2.2-1.1l2,0.5l-0.7,2.7l-2.2,0.7L229.1,516z M240.8,522.3   v1.7h-5.1l-1.9-0.5l0.5-1.2l2.4-1h3.3v1H240.8z M243.1,524.7v1.7l-1.3,0.8l-1.6,0.3v-2.8H243.1z M241.7,524v-2l1.7,1.6L241.7,524z    M242.5,528.1v1.6l-1.2,1.2h-2.7l0.4-1.8l1.3-0.1l0.3-0.6L242.5,528.1z M235.8,524.7h2.8l-3.6,5l-1.5-0.8l0.3-2.1L235.8,524.7z    M247.3,527.5v1.6h-2.7l-0.7-1.1v-1.5h0.2L247.3,527.5z M244.8,525.2l0.8-0.8l1.3,0.8l-1,0.9L244.8,525.2z M328.8,514.2l3.6-1.9   v-4.1c1.4,1.5,2.8,3.1,4.2,4.8l-1.7,2.5l-5.8-0.1L328.8,514.2z M345.8,532.2v-3.7l0.5-0.6c0.7,1.4,1.4,2.8,2,4.1h-0.9L345.8,532.2z   "
         id="path228"
         style="fill:#ffffff" /></g></svg>`;
  messageContentEl.style.marginTop = '-8vh';
  messageContentEl.style.height = '80%';

  messageContentEl.appendChild(messageHeadlineEl);
  messageContentEl.appendChild(messageSubtitleEl);
  messageContentEl.appendChild(messageTextEl);
  messageContentEl.appendChild(document.createElement('div')
    .appendChild(messageButtonEl));

  appLoadingEl.appendChild(messageWrapperEl.appendChild(messageContentEl));

  const {
    type,
    title,
    text,
    subtitle,
    buttonLabel,
    handler
  } = message;

  if (type === 'chrome-installation') {
    const legacyAppLinkEl = createDivElAndSetId('a', 'legacy-app-link');

    legacyAppLinkEl.innerHTML = type === 'chrome-installation'
      ? 'Não quero instalar o Google Chrome' : 'Não quero atualizar o Google Chrome';

    legacyAppLinkEl.addEventListener('click', () => {
      import(/* webpackChunkName: "webtracker-legacy" */'../webtracker-legacy/dist');
      removeDOMElement(appLoadingEl);
    });

    messageButtonEl.style.marginBottom = '24px';

    messageContentEl.appendChild(legacyAppLinkEl);
  }

  messageHeadlineEl.innerHTML = `${title || 'Ooops'}<br>`;
  messageSubtitleEl.innerHTML = subtitle || '';
  messageTextEl.innerHTML = text;
  messageButtonEl.innerHTML = buttonLabel;

  messageButtonEl.addEventListener('click', () => {
    if (typeof handler === 'function') {
      handler(appLoadingEl, deviceInfo);
    }
  });
};

const updateMessage = {
  type: 'chrome-update',
  buttonLabel: 'Atualizar Google Chrome',
  subtitle: 'Seu Google Chrome está desatualizado.',
  text: 'Para usufruir de todas as funcionalidades do aplicativo, você precisa usar a versão mais recente do Google Chrome.',
  handler(appLoadingEl, deviceInfo) {
    window.location = deviceInfo.mobile ? 'https://play.google.com/store/apps/details?id=com.android.chrome' : 'https://www.google.com/chrome/';

    return 'chromeUpdate';
  }
};

const noPlatformSupportMessage = {
  type: 'no-platform-support',
  buttonLabel: 'Acessar Versão Básica',
  subtitle: 'Seu dispositivo não é compatível.',
  text: 'Seu dispositivo não supre os requisitos mínimos do aplicativo. Contudo, você pode acessar a versão básica.',
  handler(appLoadingEl) {
    import(/* webpackChunkName: "webtracker-legacy" */'../webtracker-legacy/dist');
    removeDOMElement(appLoadingEl);
  }
};

const installChromeMessage = {
  type: 'chrome-installation',
  buttonLabel: 'Instalar Google Chrome',
  text: 'Este navegador não supre os requisitos mínimos do aplicativo. Para usar nosso aplicativo completo, instale o Google Chrome clicando no botão abaixo.',
  title: 'Navegador não compatível.',
  handler(appLoadingEl, deviceInfo) {
    window.location = deviceInfo.mobile ? 'https://play.google.com/store/apps/details?id=com.android.chrome' : 'https://www.google.com/chrome/';

    return 'chromeUpdate';
  }
};

export const showUpdateMessage = platform => createMessage(updateMessage, platform);
export const showNoPlatformSupportMessage = platform =>
  createMessage(noPlatformSupportMessage, platform);
export const showInstallChromeMessage = platform => createMessage(installChromeMessage, platform);
