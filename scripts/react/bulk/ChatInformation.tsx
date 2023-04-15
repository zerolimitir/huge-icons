import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgChatInformation = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.7 7.316c-.384.177-.46.374-.459 1.193.001.684.04.852.244 1.039a.746.746 0 0 0 1.199-.248c.062-.134.074-.262.074-.8s-.012-.666-.074-.8c-.181-.392-.607-.558-.984-.384m0 4a.734.734 0 0 0-.398.413c-.053.128-.062.445-.061 2.28.001 1.986.006 2.142.075 2.291a.743.743 0 0 0 1.368 0c.069-.149.074-.304.074-2.3 0-1.996-.005-2.151-.074-2.3-.181-.392-.607-.558-.984-.384'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgChatInformation);
export default ForwardRef;
