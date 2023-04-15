import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgMessenger = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M8.06 11.885c-2.16 3.244-2.1 3.152-2.019 3.091C7.889 13.583 9.969 12.04 10 12.04c.022 0 .932.669 2.021 1.486 1.09.817 1.987 1.478 1.995 1.47.022-.025 3.925-5.89 3.964-5.956.028-.048.024-.051-.022-.016-.825.634-3.929 2.936-3.958 2.936-.022 0-.928-.666-2.014-1.48a142.73 142.73 0 0 0-1.989-1.479c-.01.001-.881 1.299-1.937 2.884'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgMessenger);
export default ForwardRef;
