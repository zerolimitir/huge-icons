import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFilterThreeLineHorizontal = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='currentColor'
            fillRule='evenodd'
            d='M11.62 3.039a2.081 2.081 0 0 0-1.556 1.438c-.283.964.297 2.05 1.286 2.411.323.118.975.119 1.294.002 1.178-.43 1.709-1.783 1.113-2.833a2.084 2.084 0 0 0-1.107-.941c-.26-.091-.791-.13-1.03-.077m5 7a2.042 2.042 0 0 0-1.51 1.317c-.117.319-.116.971.002 1.294a2.071 2.071 0 0 0 1.244 1.24c.317.116.971.116 1.288 0 1.178-.43 1.709-1.783 1.113-2.833a2.084 2.084 0 0 0-1.107-.941c-.26-.091-.791-.13-1.03-.077m-10 7a2.081 2.081 0 0 0-1.556 1.438c-.283.964.297 2.05 1.286 2.411.323.118.975.119 1.294.002a2.071 2.071 0 0 0 1.244-1.24c.066-.179.084-.323.084-.65s-.018-.471-.084-.65a2.05 2.05 0 0 0-1.244-1.236c-.255-.089-.786-.128-1.024-.075'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFilterThreeLineHorizontal);
export default ForwardRef;
