import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgFlashRound = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M12.828 2.055a1.889 1.889 0 0 0-.305.158c-.11.073-1.167 1.459-3.708 4.863C6.86 9.694 5.206 11.94 5.14 12.065c-.105.2-.12.27-.119.552 0 .244.021.369.085.508.116.252.341.492.567.603.182.09.224.093 1.627.112 1.423.02 1.442.021 1.637.117.251.123.463.335.586.586l.097.197.02 3.18.02 3.18.099.2c.261.526.838.806 1.362.66.391-.108.309-.006 4.062-5.033 1.956-2.62 3.611-4.867 3.677-4.993.105-.199.12-.269.119-.551 0-.244-.021-.369-.085-.508a1.325 1.325 0 0 0-.567-.603c-.182-.09-.224-.093-1.627-.112-1.366-.019-1.45-.024-1.626-.106a1.356 1.356 0 0 1-.597-.597l-.097-.197-.02-3.18-.02-3.18-.098-.198a1.31 1.31 0 0 0-.594-.591c-.235-.104-.62-.13-.82-.056'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgFlashRound);
export default ForwardRef;
