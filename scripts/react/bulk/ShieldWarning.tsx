import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgShieldWarning = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.7 6.316a.734.734 0 0 0-.398.413c-.054.13-.062.591-.061 3.78.001 3.445.005 3.639.075 3.791.175.38.587.552.955.398a.734.734 0 0 0 .413-.398c.07-.152.074-.346.074-3.8 0-3.454-.004-3.648-.074-3.8-.181-.392-.607-.558-.984-.384m-.12 9.779a.976.976 0 0 0-.578.905c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgShieldWarning);
export default ForwardRef;
