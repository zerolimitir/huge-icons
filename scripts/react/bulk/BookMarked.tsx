import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgBookMarked = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M9 5.503v3.502l.13-.092c.071-.05.738-.537 1.48-1.082.743-.545 1.368-.991 1.39-.991.022 0 .647.446 1.39.991a237.01 237.01 0 0 0 1.48 1.082l.13.092V2H9v3.503M6.38 16.059c-1.155.255-2.01 1.093-2.305 2.26-.071.282-.082.411-.063.76.028.528.099.801.335 1.281.157.32.243.437.55.743.306.307.423.393.743.55.721.354.193.327 6.36.327 6.167 0 5.639.027 6.36-.327.32-.157.437-.243.743-.55.307-.306.393-.423.55-.743.324-.66.32-.633.337-2.61l.015-1.75-6.692.003c-5.395.003-6.74.014-6.933.056'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgBookMarked);
export default ForwardRef;
