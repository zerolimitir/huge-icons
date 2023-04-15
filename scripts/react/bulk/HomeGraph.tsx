import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgHomeGraph = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.7 8.316a.734.734 0 0 0-.398.413c-.055.131-.062.64-.061 4.28.001 3.931.004 4.139.075 4.291a.743.743 0 0 0 1.368 0c.071-.152.074-.359.074-4.3s-.003-4.148-.074-4.3c-.181-.392-.607-.558-.984-.384m-4 2a.734.734 0 0 0-.398.413c-.053.128-.062.445-.061 2.28.001 1.986.006 2.142.075 2.291a.743.743 0 0 0 1.368 0c.069-.149.074-.304.074-2.3 0-1.996-.005-2.151-.074-2.3-.181-.392-.607-.558-.984-.384m8 0a.734.734 0 0 0-.398.413c-.053.128-.062.445-.061 2.28.001 1.986.006 2.142.075 2.291a.743.743 0 0 0 1.368 0c.069-.149.074-.304.074-2.3 0-1.996-.005-2.151-.074-2.3-.181-.392-.607-.558-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgHomeGraph);
export default ForwardRef;
