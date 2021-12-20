import { UiSchema } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";

/**
 * schema used for generation of the configuration dialog
 * see https://react-jsonschema-form.readthedocs.io/en/latest/ for documentation
 */
export const configurationSchema: JSONSchema7 = {
  properties: {
    showtimeclock: {
      type: "boolean",
      title: "Local Time Clock",
      default: true,
    },
    showstandardlist: {
      type: "boolean",
      title: "Standard List of World Clocks",
      default: false,
    },
    customclockactive: {
      type: "boolean",
      title: "Custom World Clock",
      default: false,
    },
    customclockformat: {
      type: "string",
      title: "Custom Format",
      default: "HH:mm:ss a",
    },
    customclocktimezone: {
      title: "Custom Timezone",
      default: "Europe/Berlin",
      type: "string",
    }
  },
};

/**
 * schema to add more customization to the form's look and feel
 * @see https://react-jsonschema-form.readthedocs.io/en/latest/api-reference/uiSchema/
 */
export const uiSchema: UiSchema = {
  showtimeclock: {
    "ui:help": "Show local time clock.",
  },
  showstandardlist: {
    "ui:help": "Enable standard list of world clocks (pre-defined).",
  },
  customclockactive: {
    "ui:help": "Enable custom world clock (with custom format and timezone).",
  },
  customclockformat: {
    "ui:help": "Enter custom format. Available formats: https://momentjs.com/docs/#/displaying/format/",
  },
  customclocktimezone: {
    "ui:help": "Enter custom timezone. Available timezones (column TZ): https://en.wikipedia.org/wiki/List_of_tz_database_time_zones",
  },
};
