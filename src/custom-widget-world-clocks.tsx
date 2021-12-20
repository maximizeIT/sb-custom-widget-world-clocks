import React, { ReactElement } from "react";
import { BlockAttributes } from "widget-sdk";

// https://github.com/pvoznyuk/react-live-clock
import Clock from 'react-live-clock';

/**
 * React Component
 */
export interface CustomWidgetWorldClocksProps extends BlockAttributes {
  showstandardlist: boolean;
  customactive: boolean;
  customformat: string;
  customtimezone: string;
}

export const CustomWidgetWorldClocks = ({ showstandardlist, customactive, customformat, customtimezone, contentLanguage }: CustomWidgetWorldClocksProps): ReactElement => {

  const isStandardListShown = typeof showstandardlist == "string" ? showstandardlist === "true" : !!showstandardlist;
  const isCustomClockShown = typeof customactive == "string" ? customactive === "true" : !!customactive;

  return (<div>
      { isStandardListShown ? 
          <div>
            <h1>US/Pacific</h1>
            <Clock locale={contentLanguage} format={'HH:mm:ss a'} ticking={true} timezone={'US/Pacific'} />
            <br /><br />
            <h1>US/Eastern</h1>
            <Clock locale={contentLanguage} format={'HH:mm:ss a'} ticking={true} timezone={'US/Eastern'} />
            <br /><br />
            <h1>Europe/Berlin</h1>
            <Clock locale={contentLanguage} format={'HH:mm:ss a'} ticking={true} timezone={'Europe/Berlin'} />     
            <br /><br />
            <h1>Hongkong</h1>
            <Clock locale={contentLanguage} format={'dddd, MMMM Mo, YYYY, h:mm:ss A'} ticking={true} timezone={'Hongkong'} />
            <br /><br />
            <h1>Australia/Melbourne</h1>
            <Clock locale={contentLanguage} format={'dddd, MMMM Do YYYY, h:mm:ss a'} ticking={true} timezone={'Australia/Melbourne'} />
          </div>
          : ''
    }  
    { isCustomClockShown ? 
        <div>
          <br /><br />
          <h1>Custom World Clock for:<br/>{customtimezone}</h1>
          <Clock locale={contentLanguage} format={customformat} ticking={true} timezone={customtimezone} />
        </div>
        : ''
    }
    <br /><br/>
    <p>Uses <a href="https://github.com/pvoznyuk/react-live-clock" target="_blank">https://github.com/pvoznyuk/react-live-clock</a> (incl. <a href="https://momentjs.com/" target="_blank">https://momentjs.com/</a> - see also <a href="https://github.com/you-dont-need/You-Dont-Need-Momentjs" target="_blank">alternatives to moment.js</a>).</p>
    <br /><br />
    <div data-widget-conf-grid-type="100" data-widget-type="Section" data-widget-src="internal://staffbase.content.widgets.Section">
      <div>
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

