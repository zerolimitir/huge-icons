import * as React from 'react';
import { SVGProps, Ref, forwardRef } from 'react';
const SvgInstagram = (props: SVGProps<SVGSVGElement>, ref: Ref<SVGSVGElement>) => (
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
            d='M17.58 5.095a.976.976 0 0 0-.578.905c0 .555.444.999.998.999a.998.998 0 1 0-.42-1.904m-6.44 1.968c-1.123.198-2.115.762-2.913 1.657-1.638 1.834-1.638 4.726 0 6.56C9.237 16.413 10.526 17 12 17c1.355 0 2.555-.498 3.527-1.464A4.883 4.883 0 0 0 17 12a4.873 4.873 0 0 0-1.468-3.529c-.622-.616-1.174-.962-1.952-1.222-.725-.242-1.698-.316-2.44-.186m1.569 2.04c1.045.232 1.942 1.135 2.196 2.208.083.35.083 1.028 0 1.378a3.022 3.022 0 0 1-2.216 2.216 3.527 3.527 0 0 1-.689.064c-.245 0-.532-.027-.689-.064a3.022 3.022 0 0 1-2.216-2.216c-.083-.35-.083-1.028 0-1.378a3.015 3.015 0 0 1 1.678-2.03c.594-.27 1.251-.33 1.936-.178'
        />
    </svg>
);
const ForwardRef = forwardRef(SvgInstagram);
export default ForwardRef;
