import React from "react";
import { renderWithTheme, setupMockIntersectionObserver } from "../../testHelpers";
import TokenImage from "../../components/Image/TokenImage";

it("renders correctly", () => {
  setupMockIntersectionObserver();
  const { asFragment } = renderWithTheme(
    <TokenImage
      src="https://pancakeswap.finance/images/tokens/0x4973f857b3da6bb9760a3d8809f9a203a512d275.svg"
      height={48}
      width={48}
    />
  );
  expect(asFragment()).toMatchInlineSnapshot(`
    <DocumentFragment>
      .c0 {
      max-height: 48px;
      max-width: 48px;
      position: relative;
      width: 100%;
    }

    .c0:after {
      content: "";
      display: block;
      padding-top: 100%;
    }

    .c2 {
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }

    .c1:before {
      border-radius: 50%;
      border: 1px solid rgba(0,0,0,0.25);
      content: "";
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 7;
    }

    <div
        class="c0 c1"
      >
        <div
          class="c2"
        />
      </div>
    </DocumentFragment>
  `);
});
