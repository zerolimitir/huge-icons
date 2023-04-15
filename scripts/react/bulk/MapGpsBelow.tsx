import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMapGpsBelow = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.76 8.243v6.169l.153-.236c.218-.337.606-.674.987-.855.176-.084 1.45-.528 2.83-.987l2.51-.834V5.294l-.29-.045c-.844-.133-1.548-.505-2.93-1.549-1.433-1.082-2.157-1.458-3.09-1.601l-.17-.026v6.17m9.96 3.703c-.055.01-1.915.622-4.132 1.36-3.267 1.087-4.064 1.366-4.2 1.47a1.19 1.19 0 0 0-.407.693c-.058.384.134.823.453 1.038.071.048.817.316 1.658.596.84.279 1.582.535 1.648.567.159.078.372.281.449.429.034.066.294.812.578 1.66.283.847.559 1.606.612 1.687.416.628 1.38.628 1.775 0 .146-.233 2.806-8.204 2.806-8.41 0-.392-.269-.827-.61-.99a1.235 1.235 0 0 0-.63-.1'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMapGpsBelow);
export default ForwardRef;
