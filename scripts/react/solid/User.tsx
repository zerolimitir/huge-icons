import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgUser = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.433 3.04c-.59.094-1.212.34-1.702.672-.776.528-1.337 1.325-1.601 2.277-.096.348-.108.46-.108 1.011 0 .553.012.663.11 1.017a4.046 4.046 0 0 0 2.388 2.698c1.814.722 3.942-.005 4.924-1.682 1.059-1.809.541-4.155-1.175-5.321a4.76 4.76 0 0 0-1.311-.592c-.386-.094-1.175-.136-1.525-.08m-.173 9.983-.6.059c-2.481.244-4.666 1.384-5.386 2.809-.966 1.915.712 3.964 3.906 4.768.978.246 1.622.319 2.82.319.908 0 1.148-.013 1.678-.093 2.82-.427 4.831-1.698 5.245-3.316.527-2.06-1.839-4.017-5.406-4.469-.476-.061-1.922-.11-2.257-.077'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUser);
export default ForwardRef;
