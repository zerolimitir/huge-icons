import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgArrowRight = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
    <svg
        fill='none'
        viewBox='0 0 24 24'
        xmlns='http://www.w3.org/2000/svg'
        width='1em'
        height='1em'
        ref={ref}
        {...props}>
        <path
            fill='#000'
            fillRule='evenodd'
            d='M13.815 7.277a.802.802 0 0 0-.459.349c-.122.197-.124.548-.004.738.046.075.697.748 1.446 1.496l1.362 1.36-5.19.02-5.19.02-.153.095a.714.714 0 0 0-.36.648c0 .2.019.267.116.405a.939.939 0 0 0 .277.248c.159.084.184.084 5.33.104l5.17.02-1.362 1.36c-.749.748-1.4 1.421-1.446 1.496-.134.212-.119.558.031.772a.91.91 0 0 0 .268.243.856.856 0 0 0 .675.013c.076-.036 1.063-.993 2.241-2.174 2.02-2.025 2.106-2.118 2.144-2.3a.935.935 0 0 0 0-.38c-.038-.182-.124-.275-2.125-2.282-1.147-1.151-2.14-2.125-2.206-2.166a.842.842 0 0 0-.565-.085'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgArrowRight);
export default ForwardRef;
