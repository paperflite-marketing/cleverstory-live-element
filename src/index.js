global._babelPolyfill = false; 
import styles from "./main.css";
import {iframeResize} from 'iframe-resizer';

function LiveElementConfigurator() {

  const configureLiveElement = (element) => {
    if (!element) {
      return;
    }

    const liveElement = element.dataset.liveElement;
    const width = element.dataset.width;
    const height = element.dataset.height;

    const initialised = element.dataset.initialised;

    if (!liveElement) {
      return;
    }

    if(initialised){
      return;
    }

    element.dataset.initialised = true;

    var iframe = document.createElement('iframe');
    iframe.classList.add(styles.cleverstory__element_iframe);
    iframe.src = `${liveElement}`;
    iframe.height = height;
    element.appendChild(iframe);

    iframeResize({ 
      log: false,
      heightCalculationMethod: 'lowestElement' 
    }, iframe);

  }

  var elements = document.querySelectorAll('.cleverstory__live_element');
  if (elements.length == 0) {
    return;
  }

  for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    configureLiveElement(element);
  }
}

LiveElementConfigurator();

window.Cleverstory = LiveElementConfigurator;