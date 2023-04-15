import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgUserRectangle = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M11.38 7.057c-1.169.27-2.01 1.096-2.305 2.262-.11.439-.091 1.11.046 1.541.315.996 1.037 1.713 2.039 2.026.252.079.386.094.84.094.454 0 .588-.015.84-.094 1.008-.314 1.729-1.036 2.046-2.047.079-.252.094-.384.094-.839 0-.454-.015-.588-.094-.84a3.028 3.028 0 0 0-2.026-2.04c-.358-.113-1.122-.146-1.48-.063m.097 7.946a7.273 7.273 0 0 0-2.597.717 7.13 7.13 0 0 0-3.421 3.759C5.202 20.144 5 21.103 5 21.652v.222l.23.053c.344.079 13.201.078 13.546-.001l.236-.054-.024-.386a6.924 6.924 0 0 0-.728-2.626c-.357-.716-.701-1.183-1.339-1.822-.592-.594-1.106-.969-1.801-1.318-.724-.364-1.733-.653-2.44-.7l-.54-.035a7.117 7.117 0 0 0-.663.018'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgUserRectangle);
export default ForwardRef;
