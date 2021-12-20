import React, { ReactElement } from "react";
import { BlockAttributes } from "widget-sdk";
import CSS from "csstype";

import '../resources/css/styles.css';

// https://github.com/pvoznyuk/react-live-clock
import Clock from 'react-live-clock';

export interface CustomWidgetWorldClocksProps extends BlockAttributes {
  showtimeclock: boolean;
  showstandardlist: boolean;
  customclockactive: boolean;
  customclockformat: string;
  customclocktimezone: string;
}

export const CustomWidgetWorldClocks = ({ showtimeclock, showstandardlist, customclockactive, customclockformat, customclocktimezone, contentLanguage }: CustomWidgetWorldClocksProps): ReactElement => {

  const myClockStyles: CSS.Properties = {
    textAlign: "center",
    width: "15rem",
    paddingTop: "20px",
  };

  const isTimeClockShown = typeof showtimeclock == "string" ? showtimeclock === "true" : !!showtimeclock;
  const isStandardListShown = typeof showstandardlist == "string" ? showstandardlist === "true" : !!showstandardlist;
  const isCustomClockShown = typeof customclockactive == "string" ? customclockactive === "true" : !!customclockactive;

  const updateTimeClock = () => {
    
    const secondHand = document.querySelector('.second-hand');
    const minsHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    function setDate() {
      const now = new Date();

      const seconds = now.getSeconds();
      const secondsDegrees = ((seconds / 60) * 360) + 90;
      secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

      const mins = now.getMinutes();
      const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90;
      minsHand.style.transform = `rotate(${minsDegrees}deg)`;

      const hour = now.getHours();
      const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90;
      hourHand.style.transform = `rotate(${hourDegrees}deg)`;
    }

    setInterval(setDate, 1000);

    setDate();

  }

  return (<div>
    { isTimeClockShown ? 
        <div>
          <div className="clock">
            <div className="outer-clock-face">
              <div className="marking marking-one"></div>
              <div className="marking marking-two"></div>
              <div className="marking marking-three"></div>
              <div className="marking marking-four"></div>
              <div className="inner-clock-face">
                <div className="hand hour-hand"></div>
                <div className="hand min-hand"></div>
                <div className="hand second-hand"></div>
              </div>
            </div>
        </div>
        <div style={myClockStyles}>
          <Clock locale={contentLanguage} format={'HH:mm:ss a'} ticking={true} onChange={() => updateTimeClock()} />
        </div>
        </div>
        : ''
    }
      { isStandardListShown ? 
          <div>
            <h1>US/Pacific</h1>
            <Clock locale={contentLanguage} format={'HH:mm:ss a'} ticking={true} timezone={'US/Pacific'} />
            <h1>US/Eastern</h1>
            <Clock locale={contentLanguage} format={'HH:mm:ss a'} ticking={true} timezone={'US/Eastern'} />
            <h1>Europe/Berlin</h1>
            <Clock locale={contentLanguage} format={'HH:mm:ss a'} ticking={true} timezone={'Europe/Berlin'} />     
            <h1>Hongkong</h1>
            <Clock locale={contentLanguage} format={'HH:mm:ss a'} ticking={true} timezone={'Hongkong'} />
            <h1>Australia/Melbourne</h1>
            <Clock locale={contentLanguage} format={'HH:mm:ss a'} ticking={true} timezone={'Australia/Melbourne'} />
          </div>
          : ''
    }
    { isCustomClockShown ?
        <div>
          <h1>{customclocktimezone}</h1>
          <Clock locale={contentLanguage} format={customclockformat} ticking={true} timezone={customclocktimezone} />
          </div>
          : ''
    }
    <br />
    <div data-widget-conf-grid-type="100" data-widget-type="Section" data-widget-src="internal://staffbase.content.widgets.Section">
      <div>
        <div data-widget-conf-type="info" data-widget-on-card="true" data-widget-type="Infobox" data-widget-src="internal://staffbase.content.widgets.Infobox">
          <p>Uses https://github.com/pvoznyuk/react-live-clock (incl. https://momentjs.com/ - see also https://github.com/you-dont-need/You-Dont-Need-Momentjs for alternatives to moment.js).</p>
        </div>
        <div data-widget-conf-type="warning" data-widget-on-card="true" data-widget-type="Infobox" data-widget-src="internal://staffbase.content.widgets.Infobox">
          <p>PROTOTYPES AND FOR DEMO PURPOSES ONLY!</p>
          <p>NOT FOR PRODUCTION USE!</p>
          <p>NOT AVAILABLE TO CUSTOMERS!</p>
        </div>
      </div>
    </div>
    </div>
  )
};

