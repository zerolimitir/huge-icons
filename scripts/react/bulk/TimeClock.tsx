import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgTimeClock = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.7 5.316a.734.734 0 0 0-.398.413c-.053.128-.062.447-.062 2.28v2.131l-.217.113c-.264.138-.657.538-.793.808a2.018 2.018 0 0 0 0 1.878c.138.273.527.667.802.813.828.438 1.765.294 2.401-.368.615-.64.743-1.522.337-2.323-.136-.27-.529-.67-.793-.808l-.217-.113L12.759 8c-.001-1.995-.006-2.151-.075-2.3-.181-.392-.607-.558-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgTimeClock);
export default ForwardRef;
