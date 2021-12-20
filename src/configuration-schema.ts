import { UiSchema } from "@rjsf/core";
import { JSONSchema7 } from "json-schema";

/**
 * schema used for generation of the configuration dialog
 * see https://react-jsonschema-form.readthedocs.io/en/latest/ for documentation
 */
export const configurationSchema: JSONSchema7 = {
  properties: {
    showstandardlist: {
      type: "boolean",
      title: "Standard list of world clocks",
      default: true,
    },
    customactive: {
      type: "boolean",
      title: "Custom world clock",
      default: false,
    },
    customformat: {
      type: "string",
      title: "Custom Format",
      default: "HH:mm:ss a",
    },
    customtimezone: {
      type: "string",
      title: "Custom Format",
      default: "Europe/Berlin",
    },
  },
};

/**
 * schema to add more customization to the form's look and feel
 * @see https://react-jsonschema-form.readthedocs.io/en/latest/api-reference/uiSchema/
 */
export const uiSchema: UiSchema = {
  showstandardlist: {
    "ui:help": "Enable standard list of world clocks (pre-defined).",
  },
  customactive: {
    "ui:help": "Enable custom world clock (with custom format and timezone).",
  },
  customformat: {
    "ui:help": "Enter custom format. Available formats: https://momentjs.com/docs/#/displaying/format/",
  },
  customtimezone: {
    "ui:help": "Enter custom timezone. Available timezones (column TZ): https://en.wikipedia.org/wiki/List_of_tz_database_time_zones",
  },
};
