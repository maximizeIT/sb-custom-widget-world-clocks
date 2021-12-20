import React from "react"
import {screen, render} from "@testing-library/react"

import {CustomWidgetWorldClocks} from "./custom-widget-world-clocks";

describe("CustomWidgetWorldClocks", () => {
    it("should render the component", () => {
        render(<CustomWidgetWorldClocks contentLanguage="en_US" message="World"/>);

        expect(screen.getByText(/Hello World/)).toBeInTheDocument();
    })
})
